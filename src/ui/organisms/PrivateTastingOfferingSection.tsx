import type { PrivateTastingDetail } from "../../domain/restaurantPrivateTasting";

interface PrivateTastingOfferingSectionProps {
  details: PrivateTastingDetail[];
}

export function PrivateTastingOfferingSection({
  details,
}: PrivateTastingOfferingSectionProps) {
  return (
    <section className="mx-auto max-w-7xl py-20 px-6 md:px-20 lg:px-40">
      <div className="mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          The Offering
        </span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl">
          A Curated Masterclass
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {details.map((detail) => (
          <article
            key={detail.id}
            className="flex flex-col items-center rounded-xl border border-primary/10 bg-white/50 p-8 text-center transition-all hover:border-primary/30 dark:bg-white/5"
          >
            <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-3xl text-primary">
                {detail.icon}
              </span>
            </div>
            <h3 className="mb-3 font-display text-xl font-bold">
              {detail.title}
            </h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              {detail.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

