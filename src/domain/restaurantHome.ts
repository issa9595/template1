export interface HeroModel {
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  backgroundImageUrl: string;
}

export interface StoryModel {
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
}

export interface DishModel {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ReservationModel {
  title: string;
  description: string;
  timeSlots: string[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface LocationInfo {
  addressLines: string[];
  phoneLabel: string;
  phoneHref: string;
}

export interface SocialLink {
  id: string;
  icon: "instagram" | "pinterest" | "x" | "facebook";
  label: string;
  href: string;
}

export interface RestaurantHomeViewModel {
  brandName: string;
  hero: HeroModel;
  story: StoryModel;
  dishes: DishModel[];
  reservations: ReservationModel;
  footerSections: {
    quickLinks: FooterSection;
    location: LocationInfo;
    social: SocialLink[];
  };
  copyright: string;
}

export const restaurantHomeViewModel: RestaurantHomeViewModel = {
  brandName: "L'Essence",
  hero: {
    title: "L'Essence",
    subtitle: "Refined Gastronomy in the Heart of the City",
    primaryCtaLabel: "View Menu",
    secondaryCtaLabel: "Reserve a Table",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC49RgRooCF6cGU1PtIwPbTZq_iOEih3-g5d-VaFMhl-v76V8bZd-FzyhC94bIQAKjQ_WaAIRRPe5NRQzLHbeJUNm4E__oVM5yuKTco6FjEZtR0Zq12q2mHYPudMlkYy7MB7VvQuINzLt-I8k2IthntrxZ1a35MGp9i60L1gA1r7bwnCSOC77GsQJ674dwwckco_0X0Jn4Kdcg7S9vJwF37yQ11r8X4UdFmIngCbP9uPmrsfHC81ud64pZQqOBLcPEmcExQGW8zpNk",
  },
  story: {
    eyebrow: "Established 1994",
    title: "Our Story",
    body: [
      "Experience a culinary journey where tradition meets innovation. Our philosophy centers on sourcing the finest seasonal ingredients to create unforgettable gastronomic experiences.",
      "Led by Michelin-starred techniques, we believe that dining is an art form—a harmonious blend of sensory delight, meticulous technique, and the soul of the terroir.",
    ].join("\n\n"),
    linkLabel: "Learn more about our heritage",
  },
  dishes: [
    {
      id: "pan-seared-scallops",
      name: "Pan-Seared Scallops",
      description:
        "Diver-caught scallops with silky cauliflower purée, crispy pancetta, and herb-infused oil.",
      price: "$24",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDfL6yqJWQtuigD4cox9Z8pW1edr_28hcOGMS3z7Rz62Sk53NWxDeTiDvnhO6M4OHUeZ_2tqNQNjGon6Hn8YtI3uV6GjedsDVz_TnLIzATXe0SkVjk1x6lKEXUWVAwkfT8W4kagWfaud_GzXwlzv68bN2OyJXW6fUdZT1Fh4_VQR6YmThsE5xojiFHe6TIOOI75FiEl1H4EjC-oX0LcsXux6m8OTK-gbnyt2O6aa9V7MWsGOBMg_L6YXAnO4e2wF1IqkJYPQYuPE7w",
      imageAlt:
        "Plate of pan-seared scallops with green pea puree at L'Essence",
    },
    {
      id: "truffle-risotto",
      name: "Truffle Risotto",
      description:
        "Acquerello rice, aged 24-month Parmigiano-Reggiano, and freshly shaved Périgord black truffle.",
      price: "$32",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCie1_VR10HJY3KvyDwZ3a8MrX-jz_px2UlKVGfpmKsaE1WigTmmh0TpUNTFYWD4pCsPHxT1NU7-XwPUXZUXP3heSf9hKbXoZ9shlQX2z9PWj241mT0j3UtHBFnaEZiwpQ-U1-qhFczXdRZyOBmpSZ3mnzyaNN-3bPVU6uWbNCywRC8PNH6jbloH1UUh6cciaHB7umgFWISBZTebs8Y_rMUVAN-NzWdGr92h536P0gg7IuXp1yKUM5B_FtqKlHKomnATwl_fJeQ4kU",
      imageAlt: "Creamy truffle risotto with shaved black truffle at L'Essence",
    },
    {
      id: "a5-wagyu-beef",
      name: "A5 Wagyu Beef",
      description:
        "Japanese Kagoshima Wagyu, glazed seasonal root vegetables, and a red wine reduction.",
      price: "$58",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDdLusG79v0h0KrFP4nY4fwAAgrQm1DL28fGnRM2UARTHm7llA4vdmYZ3ZOPF5IyRYXQxTvqo-r3FgdkczPm_UkI_NqXLjc5ohPWQ6IKYxXadcxDeV3BcjZeB8H4TZVh8M5t8xxkKWNh0ts_m65GSlWRi00TUBo042-a41STCj-O7hxlWGx-D3aSQZP3YDBWVgCZWGf_X9E4jjPWl2-3kXRKEX8M6UaKl6cUG8HfxbphJquLNwd9lgAl1tAREORyCIpHJ_8mTWkR7c",
      imageAlt: "A5 Wagyu beef steak with roasted root vegetables at L'Essence",
    },
  ],
  reservations: {
    title: "Reservations",
    description:
      "Join us for an evening of culinary excellence. Please fill out the form below to request a table.",
    timeSlots: ["18:00", "19:00", "20:00", "21:00"],
  },
  footerSections: {
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Menu", href: "/menu" },
        { label: "Wine List", href: "/wine" },
        { label: "Gallery", href: "/gallery" },
        { label: "Reservations", href: "/reservations" },
        { label: "Private Tasting", href: "/private-tasting" },
        { label: "Contact", href: "/contact" },
      ],
    },
    location: {
      addressLines: [
        "123 Avenue de la Gastronomie",
        "75008 Paris, France",
      ],
      phoneLabel: "+33 1 23 45 67 89",
      phoneHref: "tel:+33123456789",
    },
    social: [
      {
        id: "instagram",
        icon: "instagram",
        label: "Instagram",
        href: "#",
      },
      {
        id: "pinterest",
        icon: "pinterest",
        label: "Pinterest",
        href: "#",
      },
      {
        id: "x",
        icon: "x",
        label: "X",
        href: "#",
      },
      {
        id: "facebook",
        icon: "facebook",
        label: "Facebook",
        href: "#",
      },
    ],
  },
  copyright: "© 2024 L'Essence Restaurant Group. All rights reserved.",
};

