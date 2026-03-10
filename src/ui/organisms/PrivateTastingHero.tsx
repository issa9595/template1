import type { PrivateTastingHeroModel } from "../../domain/restaurantPrivateTasting";

interface PrivateTastingHeroProps {
  hero: PrivateTastingHeroModel;
}

export function PrivateTastingHero({ hero }: PrivateTastingHeroProps) {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden pt-20 md:h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${hero.backgroundImageUrl}')`,
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 font-display text-4xl font-bold text-white md:text-6xl">
          {hero.title}
        </h1>
        <p className="mx-auto max-w-2xl text-lg font-light text-white/90 md:text-xl">
          {hero.description}
        </p>
        <div className="mt-10">
          <a
            href="#booking-form"
            className="inline-flex rounded-lg bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-background-dark transition-all hover:bg-primary/90"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </section>
  );
}

