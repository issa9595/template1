import type { GalleryCategory } from "../../domain/restaurantGallery";
import { GalleryFilterPill } from "../atoms/GalleryFilterPill";

interface GalleryFiltersProps {
  categories: GalleryCategory[];
}

export function GalleryFilters({ categories }: GalleryFiltersProps) {
  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 lg:px-10">
      <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
        {categories.map((category, index) => (
          <GalleryFilterPill
            key={category}
            label={category}
            active={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

