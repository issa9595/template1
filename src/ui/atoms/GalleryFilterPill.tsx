interface GalleryFilterPillProps {
  label: string;
  active?: boolean;
}

export function GalleryFilterPill({
  label,
  active = false,
}: GalleryFilterPillProps) {
  if (active) {
    return (
      <button className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white">
        {label}
      </button>
    );
  }

  return (
    <button className="rounded-full border border-primary/20 bg-white/50 px-6 py-2 text-sm font-medium text-slate-600 transition-all hover:bg-primary/10 hover:text-primary dark:bg-slate-800 dark:text-slate-300">
      {label}
    </button>
  );
}

