import type { WineCellarViewModel } from "../../domain/restaurantWineCellar";

interface WineSectionsProps {
  viewModel: WineCellarViewModel;
}

export function WineSections({ viewModel }: WineSectionsProps) {
  const { categories, images } = viewModel;

  return (
    <div className="space-y-24 pb-24">
      {/* Champagne & sparkling */}
      <section id={categories.sparkling.id}>
        <div className="mb-10 flex items-center gap-4">
          <h3 className="text-3xl font-bold italic">
            {categories.sparkling.title}
          </h3>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {categories.sparkling.items.map((item) => (
            <div
              key={item.id}
              className="flex items-end justify-between border-b border-primary/10 pb-4"
            >
              <div className="space-y-1">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm italic text-slate-500 dark:text-slate-400">
                  {item.details}
                </p>
              </div>
              <span className="font-bold text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Break images */}
      <div className="grid h-80 grid-cols-1 gap-8 md:grid-cols-3">
        <div className="h-full overflow-hidden rounded-lg">
          <img
            src={images.left.url}
            alt={images.left.alt}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-full overflow-hidden rounded-lg md:col-span-2">
          <img
            src={images.right.url}
            alt={images.right.alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* White wines */}
      <section id={categories.white.id}>
        <div className="mb-10 flex items-center gap-4">
          <h3 className="text-3xl font-bold italic">{categories.white.title}</h3>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {categories.white.items.map((item) => (
            <div
              key={item.id}
              className="flex items-end justify-between border-b border-primary/10 pb-4"
            >
              <div className="space-y-1">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm italic text-slate-500 dark:text-slate-400">
                  {item.details}
                </p>
              </div>
              <span className="font-bold text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Red wines */}
      <section id={categories.red.id}>
        <div className="mb-10 flex items-center gap-4">
          <h3 className="text-3xl font-bold italic">{categories.red.title}</h3>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2">
          {categories.red.items.map((item) => (
            <div
              key={item.id}
              className="flex items-end justify-between border-b border-primary/10 pb-4"
            >
              <div className="space-y-1">
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm italic text-slate-500 dark:text-slate-400">
                  {item.details}
                </p>
              </div>
              <span className="font-bold text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

