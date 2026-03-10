import { PrimaryButton } from "../atoms/PrimaryButton";

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
}

export function Hero({
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-neutral-900 via-black to-black">
      <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center gap-8 px-4 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs text-neutral-200 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>Template landing prête à l’emploi</span>
        </div>
        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-2xl text-balance text-sm text-neutral-300 md:text-base">
            {subtitle}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton>{primaryCtaLabel}</PrimaryButton>
          {secondaryCtaLabel && (
            <PrimaryButton variant="secondary">
              {secondaryCtaLabel}
            </PrimaryButton>
          )}
        </div>
      </div>
    </section>
  );
}

