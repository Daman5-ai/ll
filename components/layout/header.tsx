"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { profile } from "@/lib/resume-data";

// Cell-reference labels (A1, B1, C1...) — a spreadsheet nav, not decoration:
// it mirrors how Khushi's own tools (Excel) address information, and gives
// the AI Assistant its own "cell" alongside the human sections.
const NAV = [
  { cell: "A1", label: "About", href: "#about" },
  { cell: "B1", label: "Skills", href: "#skills" },
  { cell: "C1", label: "Experience", href: "#experience" },
  { cell: "D1", label: "Achievements", href: "#achievements" },
  { cell: "E1", label: "Ask AI", href: "#ai-assistant" },
  { cell: "F1", label: "Contact", href: "#contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gridline-light bg-paper/80 backdrop-blur-md dark:border-gridline-dark dark:bg-ink/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="font-display text-lg italic tracking-tight">
          {profile.name.split(" ")[0]}
          <span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.cell}
              href={item.href}
              className="group flex items-center gap-1.5 rounded-md px-3 py-2 text-sm text-slate transition-colors hover:text-ink dark:text-slate-soft dark:hover:text-paper"
            >
              <span className="font-mono text-[10px] text-signal opacity-70 group-hover:opacity-100">
                {item.cell}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-md border border-gridline-light md:hidden dark:border-gridline-dark"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-gridline-light px-6 py-4 md:hidden dark:border-gridline-dark" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => (
              <li key={item.cell}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 rounded-md px-2 py-2.5 text-sm"
                >
                  <span className="font-mono text-[10px] text-signal">{item.cell}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
