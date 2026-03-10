export interface MenuHeroModel {
  eyebrow: string;
  title: string;
  description: string;
}

export interface MenuItemModel {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface MenuSectionModel {
  id: string;
  title: string;
  items: MenuItemModel[];
}

export interface MenuPageViewModel {
  hero: MenuHeroModel;
  sections: {
    starters: MenuSectionModel;
    mains: MenuSectionModel;
    sides: MenuSectionModel;
    desserts: MenuSectionModel;
  };
  images: {
    starters: { url: string; alt: string };
    mains: { url: string; alt: string };
  };
}

export const restaurantMenuViewModel: MenuPageViewModel = {
  hero: {
    eyebrow: "Gastronomic Journey",
    title: "The Winter Menu",
    description:
      "A curated selection of seasonal ingredients, harvested at their peak and prepared with artisanal precision to celebrate the essence of nature.",
  },
  sections: {
    starters: {
      id: "starters",
      title: "Starters",
      items: [
        {
          id: "hokkaido-scallop-crudo",
          name: "Hokkaido Scallop Crudo",
          description:
            "Hand-dived scallops, citrus emulsion, Oscietra caviar, and micro-sorrel.",
          price: "$34",
        },
        {
          id: "heirloom-beetroot-textures",
          name: "Heirloom Beetroot Textures",
          description:
            "Roasted, pickled, and dehydrated beets with whipped goat's curd and honeycomb.",
          price: "$28",
        },
        {
          id: "foie-gras-torchon",
          name: "Foie Gras Torchon",
          description:
            "Spiced fig jam, toasted brioche, and 12-year aged balsamic reduction.",
          price: "$42",
        },
      ],
    },
    mains: {
      id: "mains",
      title: "Main Courses",
      items: [
        {
          id: "wild-turbot-leek",
          name: "Wild Turbot & Leek",
          description:
            "Pan-seared turbot, charcoal-grilled leeks, and a Champagne beurre blanc.",
          price: "$68",
        },
        {
          id: "wagyu-beef-tenderloin",
          name: "Wagyu Beef Tenderloin",
          description:
            "Grade A5 Wagyu, smoked potato purée, bone marrow jus, and black truffle.",
          price: "$95",
        },
        {
          id: "salt-baked-celeriac",
          name: "Salt-Baked Celeriac",
          description:
            "Wild mushrooms, hazelnuts, and a roasted vegetable demi-glace.",
          price: "$48",
        },
      ],
    },
    sides: {
      id: "sides",
      title: "Side Dishes",
      items: [
        {
          id: "truffle-mash",
          name: "Truffle Mash",
          description: "Ratje potatoes, Perigord truffle",
          price: "$16",
        },
        {
          id: "honey-glazed-carrots",
          name: "Honey Glazed Carrots",
          description: "Wild flower honey, cumin seeds",
          price: "$14",
        },
        {
          id: "bitter-greens",
          name: "Bitter Greens",
          description: "Lemon, chili, toasted garlic",
          price: "$12",
        },
      ],
    },
    desserts: {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          id: "grand-cru-chocolate",
          name: "Grand Cru Chocolate",
          description: "70% cacao, sea salt, olive oil ice cream",
          price: "$22",
        },
        {
          id: "poached-pear",
          name: "Poached Pear",
          description: "Saffron, vanilla bean, almond brittle",
          price: "$18",
        },
        {
          id: "selection-of-cheeses",
          name: "Selection of Cheeses",
          description: "Artisanal local cheeses, honeycomb",
          price: "$26",
        },
      ],
    },
  },
  images: {
    starters: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSUcBTbJLGVZB1GhBWiCx1RuJXZ1kBGLLCC_EPgOH7sP6YmRpx-yAyNS7TIWba5Ec22rlPeIFhV01TBMxIpfxy6G6zvB0EL3DP4PmHWzbzwmYzxpo5YKn5oOC9vGun1yD0WorQjgK0nDlCtecSeQNXEUTnwa7lefO2NpQ0mO3zWEpOgePSI9QjG4wp21or8U6TZtejXRkrB6SRah_8Hx5SAnrvp0UTy8oqjJ3buXdDMuB0ht3oecjqpXN7-ojpIHE7thtmqUF1Zrk",
      alt: "Gourmet scallop appetizer with delicate garnish",
    },
    mains: {
      url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNYqQmOpp3KpkDV2Tqlbgz5VC8FEhJ-yoWkNe_Gt93jXC7P3KjXv0JBxEajEJ9VQyUKto8DCYZ_dHeGFe9DhQNINjqnZA0MC5RI-AKXIdnQSetnKZdpSaTa8niHyXEMmUls-SQlW8rXgR5TCHeRzz16aPY71IXT7O6fz5AleM6Mry4eX3BQDcZPkvGNrHgX-MxEGny9kKFu7FZrM0h50Q9vBpg_wMqOCXWUPIUabABZoePLjBtOQuQ5Ds0E1Lh3Z_VwtXRNbNK5Lw",
      alt: "Exquisite roasted lamb dish with vegetables",
    },
  },
};

