"use client";

import { motion } from "framer-motion";
import { skills, type SkillLevel } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/section-heading";

// Honest, not inflated: "learning" reads as a real, respectable stage —
// this is a first-year student's skill graph, not a padded résumé claim.
const LEVEL_CONFIG: Record<SkillLevel, { width: string; label: string }> = {
  learning: { width: "35%", label: "Learning" },
  familiar: { width: "65%", label: "Familiar" },
  proficient: { width: "90%", label: "Proficient" },
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-gridline-light bg-white/40 dark:border-gridline-dark dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading cell="B1" title="Skills" />
        <p className="mt-4 max-w-xl text-slate dark:text-slate-soft">
          Shown as it actually stands today — a first-year skill graph, not a stretched one.
        </p>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-mono text-xs text-slate-soft">
                        {LEVEL_CONFIG[item.level].label}
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gridline-light dark:bg-gridline-dark">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: LEVEL_CONFIG[item.level].width }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-signal"
                      />
                    </div>
                    <p className="mt-1.5 text-sm text-slate-soft">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
