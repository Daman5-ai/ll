"use client";

import { useChat } from "ai/react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const SUGGESTED_QUESTIONS = [
  "What is Khushi studying?",
  "What skills does she bring to a BI role?",
  "Tell me about her internship experience.",
];

export function ChatWidget() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: "/api/chat",
  });

  return (
    <section id="ai-assistant" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading cell="E1" title="Ask My AI Assistant" />
      <p className="mt-4 max-w-xl text-slate dark:text-slate-soft">
        Trained only on the resume data in this site — it won't invent experience she
        doesn't have. Ask it anything you'd ask her in a first-round interview.
      </p>

      <div className="mt-10 overflow-hidden rounded-lg border border-gridline-light dark:border-gridline-dark">
        <div
          className="flex h-[420px] flex-col gap-4 overflow-y-auto p-6"
          role="log"
          aria-live="polite"
          aria-label="Chat conversation"
        >
          {messages.length === 0 && (
            <div className="m-auto flex max-w-sm flex-col items-center text-center">
              <Sparkles size={22} className="mb-3 text-signal" />
              <p className="text-sm text-slate dark:text-slate-soft">
                Ask a question, or try one of these:
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => append({ role: "user", content: q })}
                    className="rounded-full border border-gridline-light px-3 py-1.5 text-xs transition-colors hover:border-signal hover:text-signal dark:border-gridline-dark"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[80%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "ml-auto bg-signal text-paper"
                  : "mr-auto bg-gridline-light dark:bg-gridline-dark"
              }`}
            >
              {m.content}
            </motion.div>
          ))}

          {isLoading && (
            <div className="mr-auto flex gap-1 rounded-lg bg-gridline-light px-4 py-3 dark:bg-gridline-dark">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-soft"
                  style={{ animationDelay: `${i * 150}ms` }}
                />
              ))}
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-gridline-light p-3 dark:border-gridline-dark"
        >
          <label htmlFor="chat-input" className="sr-only">
            Ask a question about Khushi's background
          </label>
          <input
            id="chat-input"
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about her skills, education, or experience..."
            className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-slate-soft"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-signal text-paper transition-opacity disabled:opacity-40"
          >
            <Send size={15} />
          </button>
        </form>
      </div>
    </section>
  );
}
