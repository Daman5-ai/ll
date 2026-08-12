"use client";

import { motion } from "framer-motion";
import { experience, projects } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { CheckCircle2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading cell="C1" title="Experience" />

      <div className="mt-12 space-y-6">
        {experience.map((role, i) => (
          <motion.div
            key={role.role}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-lg border border-gridline-light p-6 sm:p-8 dark:border-gridline-dark"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-display text-xl italic">{role.role}</h3>
              <span className="font-mono text-xs text-slate-soft">{role.period}</span>
            </div>
            <p className="mt-1 text-signal">{role.org}</p>
            <p className="mt-4 leading-relaxed text-slate dark:text-slate-soft">
              {role.description}
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {role.skillsGained.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-signal" />
                  <span className="text-slate dark:text-slate-soft">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Honest empty slot — renders only once real projects exist in lib/resume-data.ts */}
      {projects.length === 0 && (
        <div className="mt-8 rounded-lg border border-dashed border-gridline-light p-8 text-center dark:border-gridline-dark">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-slate-soft">
            Projects — Coming Soon
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate dark:text-slate-soft">
            First data project in progress. This section is wired up in{" "}
            <code className="rounded bg-gridline-light px-1 py-0.5 text-xs dark:bg-gridline-dark">
              lib/resume-data.ts
            </code>{" "}
            — add an entry to the <code className="rounded bg-gridline-light px-1 py-0.5 text-xs dark:bg-gridline-dark">projects</code> array and a full case-study card appears here automatically.
          </p>
        </div>
      )}
    </section>
  );
}
