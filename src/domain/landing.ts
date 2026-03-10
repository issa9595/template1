export interface HeroModel {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
}

export interface FeatureModel {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialModel {
  id: string;
  name: string;
  role: string;
  quote: string;
}

export interface CtaModel {
  title: string;
  description: string;
  buttonLabel: string;
}

export interface LandingViewModel {
  hero: HeroModel;
  features: FeatureModel[];
  testimonials: TestimonialModel[];
  cta: CtaModel;
}

export const landingViewModel: LandingViewModel = {
  hero: {
    title: "Un template moderne pour votre landing page",
    subtitle:
      "Structure claire, composants réutilisables et performance optimale dès le départ.",
    primaryCtaLabel: "Commencer maintenant",
    secondaryCtaLabel: "Voir la démo",
  },
  features: [
    {
      id: "feature-architecture",
      title: "Architecture propre",
      description:
        "Séparation nette entre domaine, contrôleurs et UI pour un projet maintenable.",
    },
    {
      id: "feature-ui",
      title: "UI atomique",
      description:
        "Atoms, molecules et organisms pour composer rapidement des sections complètes.",
    },
    {
      id: "feature-perf",
      title: "Performance",
      description: "Landing page optimisée pour un chargement rapide.",
    },
  ],
  testimonials: [
    {
      id: "testimonial-1",
      name: "Alex Martin",
      role: "Product Designer",
      quote:
        "Cette structure m’a permis de garder une landing propre tout en itérant rapidement sur le design.",
    },
  ],
  cta: {
    title: "Prêt à lancer votre landing ?",
    description:
      "Utilisez ce template comme base solide pour vos prochaines pages marketing.",
    buttonLabel: "Créer ma landing",
  },
};

