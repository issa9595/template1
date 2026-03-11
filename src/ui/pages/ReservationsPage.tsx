import { getReservationsViewModel } from "../../controllers/restaurantReservationsController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { ReservationsHero } from "../organisms/ReservationsHero";
import { ReservationsFormSection } from "../organisms/ReservationsFormSection";
import { ReservationsInfoSection } from "../organisms/ReservationsInfoSection";
import { RestaurantFooter } from "../organisms/RestaurantFooter";
import { PageMeta } from "../PageMeta";

export function ReservationsPage() {
  const viewModel = getReservationsViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="min-h-screen bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main>
        <PageMeta
          title="Réservations – L'Essence"
          description="Réservez votre table à L'Essence : service du soir, menus dégustation et expériences personnalisées."
        />
        <ReservationsHero hero={viewModel.hero} />
        <ReservationsFormSection form={viewModel.form} variant="overlap" />
        <ReservationsInfoSection info={viewModel.info} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

