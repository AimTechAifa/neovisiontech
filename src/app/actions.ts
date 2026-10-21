"use server";

import { headers } from "next/headers";
import { generateAssessment, generateRoadmap } from "@/lib/ai";
import { submitLead } from "@/lib/contact";

async function clientIp() {
  const headerStore = await headers();
  return headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() || headerStore.get("x-real-ip") || "local";
}

export async function submitContact(payload: unknown) {
  return submitLead(payload, await clientIp());
}

export async function createAssessment(payload: unknown) {
  return generateAssessment(payload, await clientIp());
}

export async function createRoadmap(payload: unknown) {
  return generateRoadmap(payload, await clientIp());
}
