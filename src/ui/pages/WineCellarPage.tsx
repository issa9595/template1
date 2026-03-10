import { getWineCellarViewModel } from "../../controllers/restaurantWineCellarController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { WineHero } from "../organisms/WineHero";
import { WineCategoryNav } from "../organisms/WineCategoryNav";
import { WineSections } from "../organisms/WineSections";
import { WineSommelierCta } from "../organisms/WineSommelierCta";
import { RestaurantFooter } from "../organisms/RestaurantFooter";

export function WineCellarPage() {
  const viewModel = getWineCellarViewModel();
  const footerVm = getRestaurantHomeViewModel();

  return (
    <div className="min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={footerVm.brandName} />
      <main className="mx-auto max-w-7xl px-6 md:px-20">
        <WineHero hero={viewModel.hero} />
        <WineCategoryNav categories={viewModel.categories} />
        <WineSections viewModel={viewModel} />
        <WineSommelierCta cta={viewModel.sommelierCta} />
      </main>
      <RestaurantFooter viewModel={footerVm} />
    </div>
  );
}

