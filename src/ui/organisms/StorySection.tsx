import type { StoryModel } from "../../domain/restaurantHome";

interface StorySectionProps {
  story: StoryModel;
  imageUrl: string;
  imageAlt: string;
}

export function StorySection({ story, imageUrl, imageAlt }: StorySectionProps) {
  return (
    <section
      id="story"
      className="bg-background-light py-24 px-6 dark:bg-background-dark lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="group relative">
            <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-xl border border-primary/20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <img
              src={imageUrl}
              alt={imageAlt}
              className="aspect-4/5 w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="order-1 space-y-8 lg:order-2">
          <span className="block text-sm font-bold uppercase tracking-[0.2em] text-primary">
            {story.eyebrow}
          </span>
          <h2 className="font-display text-4xl leading-tight text-slate-900 dark:text-slate-100 md:text-5xl lg:text-6xl">
            {story.title}
          </h2>
          <p className="text-lg font-light leading-relaxed text-slate-600 dark:text-slate-400 whitespace-pre-line">
            {story.body}
          </p>
          <div className="pt-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-primary font-bold transition-all hover:gap-4"
            >
              {story.linkLabel}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

