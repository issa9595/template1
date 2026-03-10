import type { CtaModel } from "../../domain/landing";
import { PrimaryButton } from "../atoms/PrimaryButton";

interface CtaSectionProps {
  cta: CtaModel;
}

export function CtaSection({ cta }: CtaSectionProps) {
  return (
    <section className="border-t border-white/5 bg-black py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          {cta.title}
        </h2>
        <p className="mt-3 text-sm text-neutral-300">{cta.description}</p>
        <div className="mt-6 flex justify-center">
          <PrimaryButton>{cta.buttonLabel}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

