import { z } from "zod";
import { getDb } from "@/db";
import { leads } from "@/db/schema";
import { rateLimit } from "@/lib/rate-limit";
import { siteConfig } from "@/lib/site";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(30),
  inquiryType: z.enum(["services", "training"]),
  selectedOption: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(5000),
  company_website: z.string().max(200).optional().default(""),
});

export type ContactResult =
  | { ok: true; stored: boolean; emailed: boolean }
  | { ok: false; error: string; status: number };

async function sendWithResend(input: z.infer<typeof contactSchema>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.emails.general;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (process.env.EMAIL_PROVIDER && process.env.EMAIL_PROVIDER !== "resend") {
    return false;
  }
  if (!apiKey || !from) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `New ${input.inquiryType} inquiry from ${input.name}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Phone: ${input.phone}`,
        `Inquiry: ${input.inquiryType}`,
        `Selection: ${input.selectedOption}`,
        "",
        input.message,
      ].join("\n"),
    }),
  });

  return response.ok;
}

export async function submitLead(payload: unknown, ip: string): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, error: "Please check the form and try again.", status: 400 };
  }

  if (parsed.data.company_website) {
    return { ok: true, stored: false, emailed: false };
  }

  const limit = rateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
  if (!limit.ok) {
    return { ok: false, error: "Too many messages. Please try again shortly.", status: 429 };
  }

  const data = parsed.data;
  let stored = false;
  let emailed = false;

  const db = getDb();
  if (db) {
    await db.insert(leads).values({
      name: data.name,
      email: data.email,
      phone: data.phone,
      inquiryType: data.inquiryType,
      selectedOption: data.selectedOption,
      message: data.message,
    });
    stored = true;
  }

  try {
    emailed = await sendWithResend(data);
  } catch {
    emailed = false;
  }

  if (!stored && !emailed) {
    return {
      ok: false,
      error: `We couldn't deliver your message right now. Email ${siteConfig.emails.general} and we'll respond directly.`,
      status: 503,
    };
  }

  return { ok: true, stored, emailed };
}
