import { getPrivacyViewModel } from "../../controllers/restaurantPrivacyController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { PrivacyPolicyHero } from "../organisms/PrivacyPolicyHero";
import { PrivacyPolicyContent } from "../organisms/PrivacyPolicyContent";
import { RestaurantFooter } from "../organisms/RestaurantFooter";
import { PageMeta } from "../PageMeta";

export function PrivacyPolicyPage() {
  const viewModel = getPrivacyViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="relative flex min-h-screen flex-col bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main className="grow">
        <PageMeta
          title="Politique de confidentialité – L'Essence"
          description="Consultez la politique de confidentialité de L'Essence : utilisation des données personnelles, cookies et droits des utilisateurs."
        />
        <PrivacyPolicyHero hero={viewModel.hero} />
        <PrivacyPolicyContent viewModel={viewModel} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

