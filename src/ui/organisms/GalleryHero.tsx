import type { GalleryHeroModel } from "../../domain/restaurantGallery";

interface GalleryHeroProps {
  hero: GalleryHeroModel;
}

export function GalleryHero({ hero }: GalleryHeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
      <div className="mb-12 flex flex-col items-center text-center lg:items-start lg:text-left">
        <span className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          {hero.eyebrow}
        </span>
        <h2 className="mb-6 font-display text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
          {hero.title}
        </h2>
        <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {hero.description}
        </p>
      </div>
    </section>
  );
}

