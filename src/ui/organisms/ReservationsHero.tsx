import type { ReservationsHeroModel } from "../../domain/restaurantReservations";

interface ReservationsHeroProps {
  hero: ReservationsHeroModel;
}

export function ReservationsHero({ hero }: ReservationsHeroProps) {
  return (
    <section className="relative flex h-[40vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${hero.backgroundImageUrl}')` }}
      />
      <div className="relative z-20 px-4 text-center">
        <h2 className="mb-4 font-display text-4xl text-white md:text-6xl">
          {hero.title}
        </h2>
        <div className="mx-auto h-1 w-20 bg-primary" />
        <p className="mx-auto mt-6 max-w-lg text-lg font-light italic text-white/90">
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
}

