"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { profile } from "@/lib/resume-data";
import { SectionHeading } from "@/components/ui/section-heading";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-gridline-light dark:border-gridline-dark">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading cell="F1" title="Contact" />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <div>
            <p className="max-w-sm text-lg leading-relaxed text-slate dark:text-slate-soft">
              Open to internship and entry-level analyst opportunities where I can keep
              learning by doing.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm hover:text-signal"
              >
                <Mail size={16} className="text-signal" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm hover:text-signal"
              >
                <Phone size={16} className="text-signal" />
                {profile.phone}
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-slate-soft">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-md border border-gridline-light bg-transparent px-3 py-2 text-sm outline-none focus:border-signal dark:border-gridline-dark"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-slate-soft">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-md border border-gridline-light bg-transparent px-3 py-2 text-sm outline-none focus:border-signal dark:border-gridline-dark"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-slate-soft">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-md border border-gridline-light bg-transparent px-3 py-2 text-sm outline-none focus:border-signal dark:border-gridline-dark"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-paper transition-opacity disabled:opacity-60"
            >
              {status === "sending" && <Loader2 size={14} className="animate-spin" />}
              {status === "sent" && <CheckCircle2 size={14} />}
              {status === "sending" ? "Sending..." : status === "sent" ? "Sent" : "Send message"}
            </button>

            {status === "error" && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-500">
                Something went wrong — try emailing directly instead.
              </motion.p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
