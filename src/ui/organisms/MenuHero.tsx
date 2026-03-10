import type { MenuHeroModel } from "../../domain/restaurantMenu";

interface MenuHeroProps {
  hero: MenuHeroModel;
}

export function MenuHero({ hero }: MenuHeroProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 text-center lg:px-20 lg:py-24">
      <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
        {hero.eyebrow}
      </span>
      <h2 className="mb-8 font-display text-5xl font-light italic lg:text-7xl">
        {hero.title}
      </h2>
      <p className="text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400">
        {hero.description}
      </p>
    </section>
  );
}

