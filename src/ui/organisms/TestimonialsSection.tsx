import type { TestimonialModel } from "../../domain/landing";
import { SectionHeading } from "../atoms/SectionHeading";

interface TestimonialsSectionProps {
  testimonials: TestimonialModel[];
}

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="border-t border-white/5 bg-linear-to-b from-black to-neutral-950 py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4">
        <SectionHeading
          eyebrow="Avis"
          title="Ce que pensent les équipes produit"
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 text-left"
            >
              <blockquote className="text-sm text-neutral-100">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="text-xs text-neutral-300">
                <span className="font-medium text-white">
                  {testimonial.name}
                </span>{" "}
                · {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

