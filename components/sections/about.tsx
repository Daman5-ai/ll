"use client";

import { motion } from "framer-motion";
import { education, interests, profile } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading cell="A1" title="About" />

      <div className="mt-12 grid gap-16 md:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="text-lg leading-relaxed text-slate dark:text-slate-soft">
            {profile.summary}
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate dark:text-slate-soft">
            Outside of coursework, she reads and writes regularly — habits that show up
            directly in how she approaches data: looking for the story in the numbers,
            not just the numbers themselves.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-gridline-light px-3 py-1 text-xs text-slate dark:border-gridline-dark dark:text-slate-soft"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Education
          </h3>
          <ol className="relative space-y-8 border-l border-gridline-light pl-6 dark:border-gridline-dark">
            {education.map((entry, i) => (
              <motion.li
                key={entry.degree}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span
                  className={`absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full ${
                    entry.status === "In Progress" ? "bg-signal" : "bg-gridline-light dark:bg-gridline-dark"
                  }`}
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-slate-soft">{entry.year}</p>
                <p className="mt-1 font-medium">{entry.degree}</p>
                <p className="text-sm text-slate dark:text-slate-soft">{entry.institute}</p>
                {entry.note && (
                  <p className="mt-1 text-sm text-slate-soft">{entry.note}</p>
                )}
                {entry.status === "In Progress" && (
                  <span className="mt-2 inline-block rounded-full bg-signal/10 px-2 py-0.5 text-[11px] font-medium text-signal">
                    In Progress
                  </span>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
