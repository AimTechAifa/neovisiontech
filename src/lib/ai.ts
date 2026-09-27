import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";

const MODEL = "llama-3.3-70b-versatile";
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export const quizSchema = z.object({
  topic: z.string().trim().min(2).max(120),
});

export const roadmapSchema = z.object({
  topic: z.string().trim().min(2).max(120),
  score: z.number().int().min(0).max(20),
  maxScore: z.number().int().min(1).max(20),
  userContext: z.string().trim().max(500).optional().default(""),
}).refine((value) => value.score <= value.maxScore, {
  message: "Score cannot exceed the maximum.",
});

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
};

function fallbackQuiz(topic: string): QuizQuestion[] {
  return [
    {
      question: `What is a core concept of ${topic}?`,
      options: ["Concept A", "Concept B", "Concept C", "Concept D"],
      correctIndex: 0,
    },
  ];
}

function fallbackRoadmap(topic: string, score: number, maxScore: number) {
  const level = score === maxScore ? "Advanced" : score > 0 ? "Intermediate" : "Beginner";
  return `# Personalized Roadmap: ${topic}
**Estimated Duration**: 6 Weeks | **Level**: ${level}

## Executive Summary
A starter path for ${topic}, prepared because the live assessment service is unavailable. Use it as a checklist and revisit when the assistant is back online.

## Learning Path
### Week 1-2: Foundations
- Core terminology for ${topic}
- A small hands-on exercise you can finish in a weekend

### Week 3-4: Practice
- Build one project that uses the ideas from the first two weeks
- Review mistakes from the assessment

## Recommended Projects
1. **Starter build**: A small project that demonstrates the basics of ${topic}.
2. **Portfolio piece**: Extend the starter with one real constraint from your work.

## Resources
- Official documentation for the tools listed in this course
- NeoVision Tech training page for instructor-led support`;
}

async function groq(prompt: string, maxTokens: number) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return null;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.5,
      max_tokens: maxTokens,
    }),
  });

  if (!response.ok) return null;
  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  return data.choices?.[0]?.message?.content ?? null;
}

function parseQuiz(content: string, topic: string): QuizQuestion[] {
  const jsonStr = content.replace(/```json/g, "").replace(/```/g, "").trim();
  const parsed = JSON.parse(jsonStr) as unknown;
  if (!Array.isArray(parsed) || parsed.length === 0) return fallbackQuiz(topic);
  const questions: QuizQuestion[] = [];
  for (const item of parsed.slice(0, 5)) {
    if (!item || typeof item !== "object") continue;
    const record = item as Record<string, unknown>;
    const options = Array.isArray(record.options) ? record.options.filter((option) => typeof option === "string") : [];
    const correctIndex = typeof record.correctIndex === "number" ? record.correctIndex : 0;
    if (typeof record.question !== "string" || options.length < 2) continue;
    questions.push({
      question: record.question,
      options: options.slice(0, 6),
      correctIndex: Math.min(Math.max(correctIndex, 0), options.length - 1),
    });
  }
  return questions.length > 0 ? questions : fallbackQuiz(topic);
}

export async function generateAssessment(payload: unknown, ip: string) {
  const parsed = quizSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false as const, error: "Topic is required.", status: 400 };
  }
  const limit = rateLimit(`quiz:${ip}`, 8, 10 * 60 * 1000);
  if (!limit.ok) {
    return { ok: false as const, error: "Too many assessment requests. Please wait a few minutes.", status: 429 };
  }

  const topic = parsed.data.topic;
  try {
    const content = await groq(
      `You are a technical interviewer. Generate 3 multiple-choice assessment questions for the topic: "${topic}".
Difficulty: Beginner to Intermediate.
Return ONLY a raw JSON array with this schema:
[{"question":"Question text","options":["A","B","C","D"],"correctIndex":0}]`,
      1024,
    );
    if (!content) {
      return { ok: true as const, questions: fallbackQuiz(topic), fallback: true };
    }
    return { ok: true as const, questions: parseQuiz(content, topic), fallback: false };
  } catch {
    return { ok: true as const, questions: fallbackQuiz(topic), fallback: true };
  }
}

export async function generateRoadmap(payload: unknown, ip: string) {
  const parsed = roadmapSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false as const, error: "Assessment details are invalid.", status: 400 };
  }
  const limit = rateLimit(`roadmap:${ip}`, 8, 10 * 60 * 1000);
  if (!limit.ok) {
    return { ok: false as const, error: "Too many roadmap requests. Please wait a few minutes.", status: 429 };
  }

  const { topic, score, maxScore, userContext } = parsed.data;
  const level = score === maxScore ? "Advanced" : score > 0 ? "Intermediate" : "Beginner";

  try {
    const content = await groq(
      `You are a Senior Technical Mentor. Create a personalized, markdown-formatted learning roadmap for "${topic}".
Student Context:
- Assessment Score: ${score}/${maxScore} (${level} Level)
- Specific Interests: ${userContext || "General Mastery"}
Format the response in structured Markdown with an executive summary, a week-by-week learning path, recommended projects, and resources.
Tone: Encouraging, professional, and actionable. Do not include any preamble, just the markdown.`,
      2048,
    );
    if (!content) {
      return { ok: true as const, markdown: fallbackRoadmap(topic, score, maxScore), fallback: true };
    }
    return { ok: true as const, markdown: content, fallback: false };
  } catch {
    return { ok: true as const, markdown: fallbackRoadmap(topic, score, maxScore), fallback: true };
  }
}
