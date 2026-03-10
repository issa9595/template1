import { getTermsViewModel } from "../../controllers/restaurantTermsController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { PrivacyPolicyHero } from "../organisms/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "../organisms/PrivacyPolicyContent";
import { RestaurantFooter } from "../organisms/RestaurantFooter";

export function TermsOfServicePage() {
  const viewModel = getTermsViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="relative flex min-h-screen flex-col bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main className="grow">
        <PrivacyPolicyHero hero={viewModel.hero} />
        <PrivacyPolicyContent viewModel={viewModel} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

