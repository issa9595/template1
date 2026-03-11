import type { JourneyStep } from "../../domain/restaurantStory";

interface StoryJourneySectionProps {
  steps: JourneyStep[];
}

export function StoryJourneySection({ steps }: StoryJourneySectionProps) {
  return (
    <section className="border-y border-primary/10 bg-background-light py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-[1000px] px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-display text-4xl">The Journey</h2>
          <p className="text-slate-500">A timeline of passion and excellence</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-primary/20 md:block" />
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const containerClasses = isEven
                ? "relative flex flex-col items-center md:flex-row"
                : "relative flex flex-col items-center md:flex-row-reverse";

              const textAlignClasses = isEven
                ? "md:w-1/2 md:pr-12 text-center md:text-right"
                : "md:w-1/2 md:pl-12 text-center md:text-left";

              return (
                <div key={step.id} className={containerClasses}>
                  <div className={textAlignClasses}>
                    <h5 className="mb-1 text-xl font-bold text-primary">
                      {step.year}
                    </h5>
                    <h6 className="mb-2 font-display text-lg">{step.title}</h6>
                    <p className="text-sm text-slate-500">
                      {step.description}
                    </p>
                  </div>
                  <div className="absolute left-1/2 hidden size-4 -translate-x-1/2 rounded-full bg-primary z-10 md:block" />
                  <div className="md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

