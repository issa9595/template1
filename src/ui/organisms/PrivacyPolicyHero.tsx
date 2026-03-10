import type { PrivacyHeroModel } from "../../domain/restaurantPrivacy";

interface PrivacyPolicyHeroProps {
  hero: PrivacyHeroModel;
}

export function PrivacyPolicyHero({ hero }: PrivacyPolicyHeroProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 border-b border-primary/20 pb-12">
        <h2 className="font-display text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
          {hero.title}
        </h2>
        <div className="mt-6 flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-sm">event_note</span>
          <p className="text-sm font-medium uppercase tracking-widest">
            {hero.lastUpdatedLabel}
          </p>
        </div>
      </div>
    </section>
  );
}

