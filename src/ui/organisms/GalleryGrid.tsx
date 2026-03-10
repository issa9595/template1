import type { GalleryViewModel } from "../../domain/restaurantGallery";

interface GalleryGridProps {
  viewModel: GalleryViewModel;
}

export function GalleryGrid({ viewModel }: GalleryGridProps) {
  const [main, starters, mixologist, dessert, events, kitchen] =
    viewModel.images;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:col-span-8">
          <div
            className="aspect-video w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${main.imageUrl}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-display text-xl italic text-white">
              {main.title}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:col-span-4">
          <div
            className="aspect-square w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${starters.imageUrl}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-display text-xl italic text-white">
              {starters.title}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:col-span-4">
          <div
            className="aspect-3/4 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${mixologist.imageUrl}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-display text-xl italic text-white">
              {mixologist.title}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:col-span-4">
          <div
            className="aspect-3/4 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${dessert.imageUrl}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-display text-xl italic text-white">
              {dessert.title}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:col-span-4">
          <div
            className="aspect-3/4 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${events.imageUrl}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-display text-xl italic text-white">
              {events.title}
            </p>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 md:col-span-12">
          <div
            className="aspect-21/9 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${kitchen.imageUrl}')` }}
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/60 to-transparent p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="font-display text-xl italic text-white">
              {kitchen.title}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button className="group flex items-center gap-2 rounded-full border border-primary px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white">
          Load More
          <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-y-1">
            expand_more
          </span>
        </button>
      </div>
    </section>
  );
}

