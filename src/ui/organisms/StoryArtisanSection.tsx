import type { ArtisanModel } from "../../domain/restaurantStory";
import { useNavigate } from "react-router-dom";

interface StoryArtisanSectionProps {
  artisan: ArtisanModel;
  reverse?: boolean;
}

export function StoryArtisanSection({
  artisan,
  reverse = false,
}: StoryArtisanSectionProps) {
  const navigate = useNavigate();
  const isSommelier = artisan.id === "sommelier" && artisan.ctaLabel;

  const containerClasses = reverse
    ? "max-w-[1200px] mx-auto px-6 md:px-20 flex flex-col md:flex-row-reverse items-center gap-16 py-20"
    : "max-w-[1200px] mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 py-20 bg-primary/5";

  const image = (
    <div className="relative w-full md:w-1/2">
      <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
        <img
          src={artisan.imageUrl}
          alt={artisan.imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      {!reverse && (
        <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-primary p-8 lg:block">
          <p className="font-display text-2xl text-background-dark">
            The Craft
          </p>
        </div>
      )}
    </div>
  );

  const content = (
    <div className="w-full md:w-1/2">
      <h4 className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
        {artisan.eyebrow}
      </h4>
      <h2 className="mb-6 font-display text-4xl">{artisan.title}</h2>
      <p className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400">
        {artisan.description}
      </p>
      {artisan.quote && (
        <div className="border-l-2 border-primary py-2 pl-6">
          <p className="italic text-slate-500">{artisan.quote}</p>
        </div>
      )}
      {isSommelier && (
        <button
          type="button"
          onClick={() => navigate("/wine")}
          className="mt-6 flex items-center gap-2 border-b border-primary pb-1 text-primary font-bold transition-all hover:gap-4"
        >
          {artisan.ctaLabel}
          <span className="material-symbols-outlined">trending_flat</span>
        </button>
      )}
    </div>
  );

  return (
    <section className={reverse ? "bg-background-light dark:bg-background-dark" : "bg-primary/5"}>
      <div className={containerClasses}>
        {reverse ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </section>
  );
}

