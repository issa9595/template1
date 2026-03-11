export interface StoryHeroModel {
  eyebrow: string;
  title: string;
  backgroundImageUrl: string;
}

export interface CulinaryVisionModel {
  title: string;
  quote: string;
}

export interface ArtisanModel {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  quote?: string;
  ctaLabel?: string;
}

export interface JourneyStep {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface StoryViewModel {
  hero: StoryHeroModel;
  culinaryVision: CulinaryVisionModel;
  artisans: ArtisanModel[];
  journey: JourneyStep[];
}

export const storyViewModel: StoryViewModel = {
  hero: {
    eyebrow: "Est. 1994",
    title: "Our Heritage",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBP--i2G8Ub0DuRIOMhbuo1U-QozG5MLN2sfGtMcYyKkZUEm6CtgPVUtYX7TH23h_b3cQ9x32Ara6GxrOiO2-d9eR6rc8PU-glCqfjLT-ffcj3gVYjDhSZsO7osgiNnnWImod0u8Gcg1IPoWIeZUWVig3dTndGbK5-9y2EcOEDEhGg5NHB0zQDNq3pSa8soreOuU1kHlGt-8F3q0KPr4MWNxCFuXObM0SWYphzfLDFXefD4uEQ2SEuNyEZUK1SpMpNueGy6ZsADTEQ",
  },
  culinaryVision: {
    title: "Culinary Vision",
    quote:
      '"At L\'Essence, we believe in the harmony of seasonal ingredients and avant-garde techniques. Our philosophy is rooted in the pursuit of absolute purity and elegance in every dish we serve. Every plate is a canvas, and every ingredient is a note in a symphony of flavors."',
  },
  artisans: [
    {
      id: "chef",
      eyebrow: "The Artisans",
      title: "Chef Julian Vasseur",
      description:
        "With three decades of experience across Michelin-starred kitchens in Lyon and Paris, Chef Julian brings a rigorous technical foundation paired with an experimental spirit. His approach is defined by \"The Essence\"—the stripping away of the superfluous to reveal the true soul of the ingredient.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2nR4RzRyg5O15aWaNVxtuInP5i7KIGFxOL8cyhmzHbBnsHwY4fKnjLJkpSyFNBHqk3lbE5rkwdINSN2kijpw7KQ-rwrBGjR1llpaiVJcQk3MoxMu0J_bPZmaohfmQZSLfcaAk51bjp4DS8ZL3DTOZpOtvSQE_PAvbjx64_Z-TM_VoQTPQfKpc2OA1fU-HWlwnj24Yj1dMkRAEooY4ieuulEHyGIzJ06uMM0CoV2Dbjwdban0O2D9Xlr1Ec9XsMXnelsWccJUjCDw",
      imageAlt: "Head Chef working in the kitchen",
      quote: '"Nature provides the masterpiece; we simply provide the frame."',
    },
    {
      id: "sommelier",
      eyebrow: "Curation",
      title: "Sommelier Elena Rossi",
      description:
        "Elena's cellar is a curated library of over 2,000 labels, focusing on small-batch biodynamic producers and rare vintages. Her pairings are designed to challenge and delight, creating a narrative arc that spans the entire dining experience.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBsIuv83N_MgFBaUn54F9OSOQHJbBXmbw43Sn466NzuBLmpe-OlunTqteE8xHZgaKtCZVpF42wP0DjQGHT9xg_-klHFCqhVIO4dW7lUsnuy1x7eTEP6cpOAErUkVSExFZnYwyMHgN5hjtWfkB-qWIH3hXIPnVUAVr6OaZQgBSqjrhj7zq01GrpEF-6C2hBXqnRb5BAZGv35qwcvnaqUheKzoL5XvAfa5oVCxu0j3Xf_GHDGwO47aVkpEfZmag1KMphwwdJlt3mgGkg",
      imageAlt: "Sommelier pouring red wine into a glass",
      ctaLabel: "Explore our Wine List",
    },
  ],
  journey: [
    {
      id: "1994",
      year: "1994",
      title: "The Inception",
      description:
        "L'Essence opens its doors as a small 20-seat bistro in the heart of the historic district.",
    },
    {
      id: "2005",
      year: "2005",
      title: "First Star",
      description:
        "Recognition from the culinary world arrives with our first Michelin star, marking a new era of refinement.",
    },
    {
      id: "2018",
      year: "2018",
      title: "The Modern Revival",
      description:
        "A complete redesign of the space and a shift towards sustainable, farm-to-table sourcing.",
    },
    {
      id: "today",
      year: "Today",
      title: "A Legacy Continues",
      description:
        "Continuing to push the boundaries of gastronomy while staying true to our foundational roots.",
    },
  ],
};

