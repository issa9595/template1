import { getContactViewModel } from "../../controllers/restaurantContactController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { ContactHero } from "../organisms/ContactHero";
import { ContactInfoAndForm } from "../organisms/ContactInfoAndForm";
import { ContactMapSection } from "../organisms/ContactMapSection";
import { RestaurantFooter } from "../organisms/RestaurantFooter";

export function ContactPage() {
  const contactVm = getContactViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main>
        <ContactHero hero={contactVm.hero} />
        <ContactInfoAndForm
          info={contactVm.info}
          openingHours={contactVm.openingHours}
        />
        <ContactMapSection map={contactVm.map} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

