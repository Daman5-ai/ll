import { openai } from "@ai-sdk/openai";
import { streamText, type CoreMessage } from "ai";
import { buildResumeContext, profile } from "@/lib/resume-data";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are the AI assistant embedded on ${profile.name}'s personal portfolio site.
Your ONLY job is to answer questions about her background, accurately, using the resume data below.

Rules — follow strictly:
1. Only state facts that appear in the RESUME DATA section below. Never invent job titles, employers, metrics, years of experience, projects, or skills that aren't listed.
2. She is a first-year Business Analytics student, not an industry professional yet. Represent her accurately as someone early in her career and actively building skills — this is a strength (motivation, trajectory), not something to talk around.
3. If asked about something not in the resume data (e.g. "what projects has she shipped?", "does she know React?"), say plainly that it isn't part of her background yet, rather than guessing or padding the answer.
4. Keep answers concise (2-4 sentences) and conversational, as if you're a helpful assistant a recruiter is chatting with.
5. If asked something unrelated to her background (general trivia, coding help, etc.), politely redirect to what you're here for.

RESUME DATA:
${buildResumeContext()}`;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const result = await streamText({
      model: openai("gpt-4o-mini"),
      system: SYSTEM_PROMPT,
      messages,
      temperature: 0.4, // low — keep it grounded, not creative
      maxTokens: 300,
    });

    return result.toDataStreamResponse();
  } catch (err) {
    console.error("AI assistant error:", err);
    return new Response(
      JSON.stringify({ error: "The assistant is temporarily unavailable. Please try again shortly." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
