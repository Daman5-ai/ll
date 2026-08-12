"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper px-6 text-center dark:bg-ink">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">Error</p>
      <h1 className="font-display text-2xl italic">Something didn&apos;t load correctly.</h1>
      <p className="max-w-sm text-sm text-slate dark:text-slate-soft">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-md bg-signal px-5 py-2.5 text-sm font-medium text-paper"
      >
        Try again
      </button>
    </div>
  );
}
