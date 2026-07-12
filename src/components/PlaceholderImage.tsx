type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex min-h-64 items-center justify-center rounded-3xl border border-dashed border-sky-300/40 bg-sky-950/50 p-8 text-center shadow-2xl shadow-sky-950/40 ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="text-balance text-lg font-semibold text-sky-100">{label}</span>
    </div>
  );
}
