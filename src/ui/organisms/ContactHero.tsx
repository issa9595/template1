import type { ContactHeroModel } from "../../domain/restaurantContact";

interface ContactHeroProps {
  hero: ContactHeroModel;
}

export function ContactHero({ hero }: ContactHeroProps) {
  return (
    <section className="relative flex h-[60vh] items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${hero.backgroundImageUrl}')`,
        }}
      />
      <div className="relative z-10 px-4 text-center">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.4em] text-primary">
          {hero.eyebrow}
        </span>
        <h2 className="mb-6 font-display text-5xl text-white md:text-7xl">
          {hero.title}
        </h2>
        <div className="mx-auto h-px w-24 bg-primary" />
      </div>
    </section>
  );
}

