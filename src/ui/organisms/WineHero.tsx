import type { WineHeroModel } from "../../domain/restaurantWineCellar";

interface WineHeroProps {
  hero: WineHeroModel;
}

export function WineHero({ hero }: WineHeroProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="group relative h-[500px] w-full overflow-hidden rounded-xl">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
        />
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">
          <span className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            {hero.eyebrow}
          </span>
          <h2 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            {hero.title}
          </h2>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-white/90 md:text-xl">
            {hero.description}
          </p>
          <div className="mt-10">
            <span className="material-symbols-outlined text-4xl text-white animate-bounce">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

