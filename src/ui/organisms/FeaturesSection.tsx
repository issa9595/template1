import type { FeatureModel } from "../../domain/landing";
import { SectionHeading } from "../atoms/SectionHeading";

interface FeaturesSectionProps {
  features: FeatureModel[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="border-t border-white/5 bg-black py-16 md:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4">
        <SectionHeading
          eyebrow="Architecture & composants"
          title="Pensée pour les landing pages modernes"
          subtitle="Une base simple mais solide pour organiser vos sections et composants, prête à être adaptée à votre produit."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/5 p-4 text-left"
            >
              <h3 className="text-sm font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-xs text-neutral-300">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

