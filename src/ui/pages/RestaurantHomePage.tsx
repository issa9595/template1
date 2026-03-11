import { PageMeta } from "../PageMeta";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { getReservationsViewModel } from "../../controllers/restaurantReservationsController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { RestaurantHero } from "../organisms/RestaurantHero";
import { StorySection } from "../organisms/StorySection";
import { SignatureDishesSection } from "../organisms/SignatureDishesSection";
import { ReservationsFormSection } from "../organisms/ReservationsFormSection";
import { RestaurantFooter } from "../organisms/RestaurantFooter";

export function RestaurantHomePage() {
  const viewModel = getRestaurantHomeViewModel();
  const reservationsVm = getReservationsViewModel();

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={viewModel.brandName} />
      <main className="flex-1">
        <PageMeta
          title="L'Essence – Restaurant gastronomique à Paris"
          description="Découvrez L'Essence, restaurant gastronomique à Paris : cuisine d'auteur, cave d'exception et expérience fine dining complète."
        />
        <RestaurantHero hero={viewModel.hero} />
        <StorySection
          story={viewModel.story}
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuCksBfn8fGghMpWGN04bDExYE-Xxk3_4PC03b6pjURJJiuAoYaGXs9-OopOwU3tCAWEqlGIALvqbadax12y36SizGff-kRA6QCu2iqQXAyN5XojFNnwiQpRB35s2cMfLK-VUqgS35g_nFfwjXiUV0rm5m9C2BAU5AoN9woUvPt9Bo_r-UcvZR2My1MhNtikYSs0Gp1g5mokf_VksecgFlxzh-9VKjZcHAnQ8aUH2McNOpNuilTg5ETc-XJYneui1b6Qq7SkpbRHl0Q"
          imageAlt="Elegant interior of L'Essence featuring gold accents"
        />
        <SignatureDishesSection dishes={viewModel.dishes} />
        <ReservationsFormSection
          form={reservationsVm.form}
          variant="standalone"
        />
      </main>
      <RestaurantFooter viewModel={viewModel} />
    </div>
  );
}

