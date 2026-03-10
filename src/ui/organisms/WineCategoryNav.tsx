import type { WineCellarViewModel } from "../../domain/restaurantWineCellar";

interface WineCategoryNavProps {
  categories: WineCellarViewModel["categories"];
}

export function WineCategoryNav({ categories }: WineCategoryNavProps) {
  return (
    <nav className="sticky top-20 z-40 mb-12 border-b border-primary/20 bg-background-light/80 backdrop-blur-sm dark:bg-background-dark/80">
      <div className="flex justify-center gap-8 md:gap-16">
        <a
          href={`#${categories.sparkling.id}`}
          className="py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary border-b-2 border-primary"
        >
          Champagne
        </a>
        <a
          href={`#${categories.white.id}`}
          className="py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 transition-all border-b-2 border-transparent hover:border-primary/50 dark:text-slate-400 hover:text-slate-600"
        >
          White Wines
        </a>
        <a
          href={`#${categories.red.id}`}
          className="py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-500 transition-all border-b-2 border-transparent hover:border-primary/50 dark:text-slate-400 hover:text-slate-600"
        >
          Red Wines
        </a>
      </div>
    </nav>
  );
}

