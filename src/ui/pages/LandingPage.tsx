import { getLandingViewModel } from "../../controllers/landingController";
import { Hero } from "../molecules/Hero";
import { FeaturesSection } from "../organisms/FeaturesSection";
import { TestimonialsSection } from "../organisms/TestimonialsSection";
import { CtaSection } from "../organisms/CtaSection";
import { MainHeader } from "../organisms/MainHeader";
import { MainFooter } from "../organisms/MainFooter";

export function LandingPage() {
  const viewModel = getLandingViewModel();

  return (
    <div className="min-h-screen bg-black text-white">
      <MainHeader />
      <main>
        <Hero
          title={viewModel.hero.title}
          subtitle={viewModel.hero.subtitle}
          primaryCtaLabel={viewModel.hero.primaryCtaLabel}
          secondaryCtaLabel={viewModel.hero.secondaryCtaLabel}
        />
        <div id="features">
          <FeaturesSection features={viewModel.features} />
        </div>
        <div id="testimonials">
          <TestimonialsSection testimonials={viewModel.testimonials} />
        </div>
        <div id="cta">
          <CtaSection cta={viewModel.cta} />
        </div>
      </main>
      <MainFooter />
    </div>
  );
}

