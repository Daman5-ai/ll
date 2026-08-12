import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-ledger-grid px-6 text-center">
      <p className="font-mono text-xs text-signal">#REF!</p>
      <h1 className="font-display text-3xl italic">This cell doesn&apos;t exist.</h1>
      <Link href="/" className="text-sm text-signal hover:underline">
        Back to the sheet
      </Link>
    </div>
  );
}
