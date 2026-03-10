export interface WineHeroModel {
  eyebrow: string;
  title: string;
  description: string;
  backgroundImageUrl: string;
}

export interface WineItemModel {
  id: string;
  name: string;
  details: string;
  price: string;
}

export interface WineCategoryModel {
  id: string;
  title: string;
  items: WineItemModel[];
}

export interface WineImageStripModel {
  left: { url: string; alt: string };
  right: { url: string; alt: string };
}

export interface SommelierCtaModel {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface WineCellarViewModel {
  hero: WineHeroModel;
  categories: {
    sparkling: WineCategoryModel;
    white: WineCategoryModel;
    red: WineCategoryModel;
  };
  images: WineImageStripModel;
  sommelierCta: SommelierCtaModel;
}

export const wineCellarViewModel: WineCellarViewModel = {
  hero: {
    eyebrow: "Established 1984",
    title: "The Wine Cellar",
    description:
      "A curated selection of the world's finest vintages, hand-selected for the discerning palate and paired for the ultimate culinary journey.",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTuWdRhdljcRZNq-qDvNa_CTaWfI2bl_zYDzJc6VxzOFovO4AQAM9J1AFtc_dcETF98bhWm9pn9GO2ugFpAPzEcTpa8LASCjCpQF4o9ryVB5xsHvzNSc0ZrYqK-i3CyExV2THlyOY9yxCj_Eoy0ksXENsL99z9qKjjEFU1Jwf2aHXaVT_EcRX0Ha68072jeyHXF0bPiUlYQIzfINpCbypLfx0awaZb-iNxQrMRf4dNiF8peDmL-Z-izSrtrXdD-BmY1bcXCM8U71Y",
  },
  categories: {
    sparkling: {
      id: "sparkling",
      title: "Champagne & Sparkling",
      items: [
        {
          id: "dom-perignon-p2",
          name: "Dom Pérignon P2 Plénitude Brut",
          details: "Épernay, France | 2003",
          price: "$550",
        },
        {
          id: "krug-grande-cuvee",
          name: "Krug Grande Cuvée 171ème Édition",
          details: "Reims, France | NV",
          price: "$380",
        },
        {
          id: "louis-roederer-cristal",
          name: "Louis Roederer 'Cristal'",
          details: "Reims, France | 2014",
          price: "$495",
        },
        {
          id: "taittinger-comtes",
          name: "Taittinger Comtes de Champagne",
          details: "Côte des Blancs, France | 2011",
          price: "$320",
        },
      ],
    },
    white: {
      id: "white",
      title: "White Wines",
      items: [
        {
          id: "coche-dury-meursault",
          name: "Coche-Dury Meursault",
          details: "Burgundy, France | 2018",
          price: "$620",
        },
        {
          id: "gaja-gaia-rey",
          name: "Gaja Gaia & Rey Chardonnay",
          details: "Langhe, Italy | 2020",
          price: "$295",
        },
        {
          id: "egon-muller-riesling",
          name: "Egon Müller Scharzhofberger Riesling",
          details: "Mosel, Germany | 2021",
          price: "$185",
        },
        {
          id: "cloudy-bay-te-koko",
          name: "Cloudy Bay 'Te Koko' Sauvignon Blanc",
          details: "Marlborough, NZ | 2019",
          price: "$125",
        },
      ],
    },
    red: {
      id: "red",
      title: "Red Wines",
      items: [
        {
          id: "chateau-margaux",
          name: "Château Margaux 1er Grand Cru Classé",
          details: "Bordeaux, France | 2010",
          price: "$1,250",
        },
        {
          id: "sassicaia",
          name: "Sassicaia Tenuta San Guido",
          details: "Bolgheri, Italy | 2016",
          price: "$440",
        },
        {
          id: "opus-one",
          name: "Opus One Proprietary Red",
          details: "Napa Valley, USA | 2018",
          price: "$580",
        },
        {
          id: "penfolds-grange",
          name: "Penfolds Grange BIN 95",
          details: "South Australia | 2017",
          price: "$890",
        },
      ],
    },
  },
  images: {
    left: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAqbOqpJJ48qG_ZmhRi3iZwTrlG7FRt87Aunj3Dz31arznLNM-PAyenejDq9aT3vI4TxYoBZjgbXFkVAI2Ra-zmupB4sz4OjMIgAweyKhOt80D9B6SslRkvrQ74F-DZRBcCER06kZ7H32ikIXM1OYcbToWk4lu9jwt-GjcE8UL4R0DcxeFEfZhKkZe7jk3oHJLjPM-8RnQi9zp9ra3zbaDOR5WV4YiDtIuzTUaWTk4PUSo8yml4NcgQFt_viRdS2g75nvfsIBjgf40",
      alt: "Close up of a premium wine glass",
    },
    right: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCS6ev5hoex-wQPhjsyRWDzXB0gbLtQHnBw3c0Kdov8phc5b9k5w2V-Ldu_O-3unTJhqTw9rsrFK4RoW7FDWCriHmnnOicupjcw7HlY246sD94aJbq_xTBtk3Re2PZ21wD_cm_Ss3siQhFxZ1Fc_DQqKjwUoCYHENrVgezV66vowdpQTvlDBjWx0LIBOEfA0z8GuXxNOuOfnmsMuaWTQdv4vJRcha7iPBqRJTjEF2rahmEPN8DNUQOW1FvsNAIK0SuQ62dl0TMK0lc",
      alt: "Pouring white wine in an elegant dining room",
    },
  },
  sommelierCta: {
    eyebrow: "Curated Experiences",
    title: "Sommelier's Selection",
    description:
      "Allow our Head Sommelier to guide you through a bespoke tasting of rare vintages and hidden gems from our private collection.",
    primaryLabel: "Book a Private Tasting",
    secondaryLabel: "Inquire for Rare Vintages",
  },
};

