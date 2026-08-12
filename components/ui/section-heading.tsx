export function SectionHeading({ cell, title }: { cell: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="rounded border border-gridline-light px-1.5 py-0.5 font-mono text-[10px] text-signal dark:border-gridline-dark">
        {cell}
      </span>
      <h2 className="font-display text-3xl italic sm:text-4xl">{title}</h2>
    </div>
  );
}
