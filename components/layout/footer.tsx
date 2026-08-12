import { profile } from "@/lib/resume-data";

export function Footer() {
  return (
    <footer className="border-t border-gridline-light py-8 dark:border-gridline-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-slate-soft sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="font-mono">Built with Next.js · Updated as the real work grows</p>
      </div>
    </footer>
  );
}
