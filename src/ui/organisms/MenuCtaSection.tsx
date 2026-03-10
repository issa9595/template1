import { PrimaryButton } from "../atoms/PrimaryButton";

export function MenuCtaSection() {
  return (
    <div className="flex flex-col items-center gap-8 border-t border-primary/10 py-12">
      <div className="space-y-2 text-center">
        <h4 className="font-display text-2xl italic">
          Complement your meal
        </h4>
        <p className="text-sm text-slate-500">
          Explore our award-winning cellar selection
        </p>
      </div>
      <PrimaryButton
        as="link"
        to="/wine"
        className="inline-flex items-center gap-3 rounded-full px-10 py-4 text-xs shadow-lg hover:shadow-primary/20"
      >
        View Wine &amp; Spirits
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </PrimaryButton>
    </div>
  );
}

