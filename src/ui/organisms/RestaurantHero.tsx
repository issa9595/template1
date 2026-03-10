import type { HeroModel } from "../../domain/restaurantHome";
import { PrimaryButton } from "../atoms/PrimaryButton";

interface RestaurantHeroProps {
  hero: HeroModel;
}

export function RestaurantHero({ hero }: RestaurantHeroProps) {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-black/40" />
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 font-display text-6xl font-bold tracking-tight text-white md:text-8xl">
          {hero.title}
        </h1>
        <p className="mb-10 font-display text-lg font-light italic tracking-wide text-white/90 md:text-xl">
          {hero.subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryButton className="w-full min-w-[180px] sm:w-auto">
            {hero.primaryCtaLabel}
          </PrimaryButton>
          <PrimaryButton
            variant="secondary"
            className="w-full min-w-[180px] sm:w-auto"
          >
            {hero.secondaryCtaLabel}
          </PrimaryButton>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-3xl text-white/50">
          expand_more
        </span>
      </div>
    </section>
  );
}

