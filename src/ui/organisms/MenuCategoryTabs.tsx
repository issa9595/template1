import type { MenuPageViewModel } from "../../domain/restaurantMenu";

interface MenuCategoryTabsProps {
  sections: MenuPageViewModel["sections"];
}

export function MenuCategoryTabs({ sections }: MenuCategoryTabsProps) {
  return (
    <div className="sticky top-[89px] z-40 border-y border-primary/10 bg-background-light/95 dark:bg-background-dark/95">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex justify-center gap-12 py-4 overflow-x-auto no-scrollbar">
          <a
            href={`#${sections.starters.id}`}
            className="border-b-2 border-primary pb-1 text-sm font-bold uppercase tracking-[0.2em] text-primary"
          >
            Starters
          </a>
          <a
            href={`#${sections.mains.id}`}
            className="border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 transition-all hover:text-slate-600"
          >
            Main Courses
          </a>
          <a
            href={`#${sections.sides.id}`}
            className="border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 transition-all hover:text-slate-600"
          >
            Side Dishes
          </a>
          <a
            href={`#${sections.desserts.id}`}
            className="border-b-2 border-transparent pb-1 text-sm font-bold uppercase tracking-[0.2em] text-slate-400 transition-all hover:text-slate-600"
          >
            Desserts
          </a>
        </div>
      </div>
    </div>
  );
}

