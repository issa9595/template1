import { getPrivateTastingViewModel } from "../../controllers/restaurantPrivateTastingController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { PrivateTastingHero } from "../organisms/PrivateTastingHero";
import { PrivateTastingOfferingSection } from "../organisms/PrivateTastingOfferingSection";
import { PrivateTastingBookingSection } from "../organisms/PrivateTastingBookingSection";
import { RestaurantFooter } from "../organisms/RestaurantFooter";

export function PrivateTastingPage() {
  const viewModel = getPrivateTastingViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main className="flex-1">
        <PrivateTastingHero hero={viewModel.hero} />
        <PrivateTastingOfferingSection details={viewModel.details} />
        <PrivateTastingBookingSection booking={viewModel.booking} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

