import type { CulinaryVisionModel } from "../../domain/restaurantStory";

interface CulinaryVisionSectionProps {
  vision: CulinaryVisionModel;
}

export function CulinaryVisionSection({ vision }: CulinaryVisionSectionProps) {
  return (
    <section className="mx-auto max-w-[1000px] py-24 px-6 text-center md:px-20">
      <span className="material-symbols-outlined mb-6 text-4xl text-primary">
        restaurant
      </span>
      <h3 className="mb-8 font-display text-3xl md:text-4xl">
        {vision.title}
      </h3>
      <p className="text-lg font-light italic leading-relaxed text-slate-700 dark:text-slate-300 md:text-xl">
        {vision.quote}
      </p>
      <div className="mt-12 flex justify-center gap-2">
        <div className="size-2 rounded-full bg-primary/30" />
        <div className="size-2 rounded-full bg-primary" />
        <div className="size-2 rounded-full bg-primary/30" />
      </div>
    </section>
  );
}

