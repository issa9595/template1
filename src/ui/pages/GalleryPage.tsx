import { getGalleryViewModel } from "../../controllers/restaurantGalleryController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { GalleryHero } from "../organisms/GalleryHero";
import { GalleryFilters } from "../organisms/GalleryFilters";
import { GalleryGrid } from "../organisms/GalleryGrid";
import { RestaurantFooter } from "../organisms/RestaurantFooter";

export function GalleryPage() {
  const viewModel = getGalleryViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="flex min-h-screen flex-col bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main className="flex-1 pt-4">
        <GalleryHero hero={viewModel.hero} />
        <GalleryFilters categories={viewModel.categories} />
        <GalleryGrid viewModel={viewModel} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

