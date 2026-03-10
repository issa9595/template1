import type { SommelierCtaModel } from "../../domain/restaurantWineCellar";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../atoms/PrimaryButton";

interface WineSommelierCtaProps {
  cta: SommelierCtaModel;
}

export function WineSommelierCta({ cta }: WineSommelierCtaProps) {
  const navigate = useNavigate();

  return (
    <section className="mb-24 rounded-xl border border-primary/10 bg-primary/5 p-12 text-center">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-primary">
        {cta.eyebrow}
      </h3>
      <h2 className="mb-6 text-4xl font-bold">{cta.title}</h2>
      <p className="mx-auto mb-10 max-w-xl leading-relaxed italic text-slate-600 dark:text-slate-300">
        {cta.description}
      </p>
      <div className="flex flex-col justify-center gap-4 md:flex-row">
        <PrimaryButton
          className="px-10 py-4 text-sm"
          onClick={() => navigate("/private-tasting")}
        >
          {cta.primaryLabel}
        </PrimaryButton>
        <PrimaryButton
          variant="secondary"
          className="border border-primary text-primary px-10 py-4 text-sm hover:text-background-dark"
        >
          {cta.secondaryLabel}
        </PrimaryButton>
      </div>
    </section>
  );
}

