import { getStoryViewModel } from "../../controllers/restaurantStoryController";
import { getRestaurantHomeViewModel } from "../../controllers/restaurantHomeController";
import { RestaurantNavbar } from "../organisms/RestaurantNavbar";
import { StoryHero } from "../organisms/StoryHero";
import { CulinaryVisionSection } from "../organisms/CulinaryVisionSection";
import { StoryArtisanSection } from "../organisms/StoryArtisanSection";
import { StoryJourneySection } from "../organisms/StoryJourneySection";
import { RestaurantFooter } from "../organisms/RestaurantFooter";
import { PageMeta } from "../PageMeta";

export function StoryPage() {
  const storyVm = getStoryViewModel();
  const homeVm = getRestaurantHomeViewModel();

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <RestaurantNavbar brandName={homeVm.brandName} />
      <main className="flex-1">
        <PageMeta
          title="Notre histoire – L'Essence"
          description="Découvrez l'histoire de L'Essence : la vision du Chef, l'équipe en salle et la philosophie gastronomique du restaurant."
        />
        <StoryHero hero={storyVm.hero} />
        <CulinaryVisionSection vision={storyVm.culinaryVision} />
        <StoryArtisanSection artisan={storyVm.artisans[0]} />
        <StoryArtisanSection artisan={storyVm.artisans[1]} reverse />
        <StoryJourneySection steps={storyVm.journey} />
      </main>
      <RestaurantFooter viewModel={homeVm} />
    </div>
  );
}

