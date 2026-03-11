import { getRestaurantMenuViewModel } from "../../controllers/restaurantMenuController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { MenuHero } from "../organisms/MenuHero";
import { MenuCategoryTabs } from "../organisms/MenuCategoryTabs";
import { MenuContent } from "../organisms/MenuContent";
import { MenuCtaSection } from "../organisms/MenuCtaSection";
import { RestaurantFooter } from "../organisms/RestaurantFooter";
import { PageMeta } from "../PageMeta";

export function RestaurantMenuPage() {
  const viewModel = getRestaurantMenuViewModel();
  const footerVm = getRestaurantHomeViewModel();

  return (
    <div className="group/design-root relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <RestaurantNavbar brandName={footerVm.brandName} />
        <main className="flex-1">
          <PageMeta
            title="Menu – L'Essence"
            description="Explorez le menu de L'Essence : créations de saison, accords gourmands et plats signatures de notre Chef."
          />
          <MenuHero hero={viewModel.hero} />
          <MenuCategoryTabs sections={viewModel.sections} />
          <MenuContent viewModel={viewModel} />
        </main>
        <MenuCtaSection />
        <RestaurantFooter viewModel={footerVm} />
      </div>
    </div>
  );
}

