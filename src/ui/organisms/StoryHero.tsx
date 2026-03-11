import type { StoryHeroModel } from "../../domain/restaurantStory";

interface StoryHeroProps {
  hero: StoryHeroModel;
}

export function StoryHero({ hero }: StoryHeroProps) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
      />
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
        <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          {hero.eyebrow}
        </span>
        <h2 className="mb-6 font-display text-5xl font-bold text-white md:text-7xl">
          {hero.title}
        </h2>
        <div className="h-px w-24 bg-primary" />
      </div>
    </section>
  );
}

