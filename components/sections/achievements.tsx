"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award } from "lucide-react";

export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-gridline-light bg-white/40 dark:border-gridline-dark dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading cell="D1" title="Achievements & Activities" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex gap-4 rounded-lg border border-gridline-light p-5 dark:border-gridline-dark"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber/10 text-amber">
                <Award size={16} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-soft">
                  {item.category}
                </p>
                <p className="mt-1 font-medium leading-snug">{item.title}</p>
                {item.description && (
                  <p className="mt-1 text-sm text-slate dark:text-slate-soft">{item.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
