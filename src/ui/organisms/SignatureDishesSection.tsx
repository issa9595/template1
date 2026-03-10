import type { DishModel } from "../../domain/restaurantHome";

interface SignatureDishesSectionProps {
  dishes: DishModel[];
}

export function SignatureDishesSection({
  dishes,
}: SignatureDishesSectionProps) {
  return (
    <section
      id="menu"
      className="bg-primary/5 py-24 px-6 dark:bg-white/2 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-display text-4xl text-slate-900 dark:text-slate-100 md:text-5xl">
            Signature Dishes
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
          <p className="mx-auto max-w-xl text-sm text-slate-500 dark:text-slate-400 md:text-base">
            A selection of our chef&apos;s most celebrated creations, crafted
            with passion and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.id}
              className="group overflow-hidden rounded-xl bg-background-light shadow-sm transition-shadow hover:shadow-xl dark:bg-background-dark"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={dish.imageUrl}
                  alt={dish.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute right-4 top-4 rounded bg-background-light/90 px-3 py-1 text-sm font-bold text-primary dark:bg-background-dark/90">
                  {dish.price}
                </div>
              </div>
              <div className="space-y-3 p-8">
                <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">
                  {dish.name}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

