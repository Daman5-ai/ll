"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/resume-data";
import { ArrowDown } from "lucide-react";

/**
 * Signature element: a formula bar, exactly like the one in Excel —
 * Khushi's most-used tool right now. Instead of a generic "Hi, I'm X"
 * hero, the headline resolves like a spreadsheet formula would:
 * inputs (name, stage, curiosity) going into a function that outputs
 * her current trajectory. It's honest (she's early-career and says so),
 * on-brand (data/spreadsheets), and memorable without overclaiming.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="bg-ledger-grid relative flex min-h-[92vh] items-center overflow-hidden border-b border-gridline-light dark:border-gridline-dark"
    >
      {/* Fade the grid toward the edges so it reads as texture, not noise */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper via-paper/40 to-paper dark:from-ink dark:via-ink/40 dark:to-ink" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-signal"
        >
          {profile.location} · {profile.tagline}
        </motion.p>

        {/* The formula bar itself */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-2 rounded-t-md border border-gridline-light bg-white/60 px-3 py-2 font-mono text-xs text-slate shadow-sm dark:border-gridline-dark dark:bg-white/5 dark:text-slate-soft"
        >
          <span className="rounded border border-gridline-light px-1.5 py-0.5 text-[10px] dark:border-gridline-dark">
            fx
          </span>
          <span>=GROWTH(curiosity, effort, time)</span>
        </motion.div>

        <h1 className="max-w-3xl font-display text-4xl italic leading-[1.1] text-balance sm:text-5xl md:text-6xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="block not-italic font-medium"
          >
            {profile.name}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-2 block text-2xl text-signal sm:text-3xl md:text-4xl"
          >
            is building a career in data, one cell at a time.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-slate dark:text-slate-soft"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#ai-assistant"
            className="rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal-dim"
          >
            Ask my AI assistant about me
          </a>
          <a
            href="#contact"
            className="rounded-md border border-gridline-light px-5 py-2.5 text-sm font-medium transition-colors hover:border-signal hover:text-signal dark:border-gridline-dark"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate dark:text-slate-soft"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
