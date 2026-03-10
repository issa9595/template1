export interface GalleryHeroModel {
  eyebrow: string;
  title: string;
  description: string;
}

export type GalleryCategory = "All" | "Cuisine" | "Atmosphere" | "Events";

export interface GalleryImageModel {
  id: string;
  title: string;
  category: GalleryCategory;
  imageUrl: string;
  imageAlt: string;
}

export interface GalleryViewModel {
  hero: GalleryHeroModel;
  categories: GalleryCategory[];
  images: GalleryImageModel[];
}

export const galleryViewModel: GalleryViewModel = {
  hero: {
    eyebrow: "Visual Narrative",
    title: "Our Gallery",
    description:
      "A sensory journey through the meticulous craftsmanship, curated atmosphere, and unforgettable moments at L'Essence.",
  },
  categories: ["All", "Cuisine", "Atmosphere", "Events"],
  images: [
    {
      id: "main-dining-hall",
      title: "The Main Dining Hall",
      category: "Atmosphere",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCxizU-_kj1fyQbqli5cd8OkCraQQsWD_880GafzV44dCsg1SWhDbjGB3ELk-4EtpcRX_Xf0ZejE6kAv_-jvG36IMTBJtOPpM698y0UHY8m7kuyr8JAzzRlmdf_sQPNBQXCcUPgW9Hr8Hvhl88sQgrWBGBQIqS0fgwZZyKK2ZvkFKkwnv_8j366YyKX1oCT6JWrdQLdo5fEtT8FHQ2uHp-P41u6HLIUhd2BEBWZBGEnr2xg5PqaFk3hRqjVv6UkBn0gFslfpS1dM-g",
      imageAlt:
        "Main dining area with elegant lighting and tables at L'Essence",
    },
    {
      id: "signature-starters",
      title: "Signature Starters",
      category: "Cuisine",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB22Mr-xN18it5Sy-uIJXYDEg8DG1RAYvIlTZfA9rFNZR-eDq1MZxsQfmh0K8JEBKR8PqX3w36uaCdAHBYTAR-Opa8jKdM9hBW2Kop3X9FN3w9UftvJfrRx67CqB0nwDO5ppve-JYemG9C_Iw5kgPR0NQ5-F_HmY7Zz8PfxbLVcARKPVog_pQPmIwtl6CsdbpMOVkhLdzUwY5M7eipjE97sYmw0tBA-J5Ebh846ExTuXoqUe4bdPUzsK2dRqJhpCkIpQ0aP5a756t8",
      imageAlt: "Close up of a gourmet seafood dish at L'Essence",
    },
    {
      id: "mixologist-craft",
      title: "The Mixologist's Craft",
      category: "Atmosphere",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCz70PaJmc2MctHDg9pWjzdMse2djSu-i7maEwtUhDxueSo6z3N4dd3eA3Av8fBIS19UWPKrXzjmQyj0wjp1k-_XuwPF9mTwsyhEyliGd7YUstiUwFA5IiQZrn48dkcc992zthxqcSKdkRCw6Mk0XDo1XyuuQ-5Ag6h9MSEgG4-Nxagt-oFVb8Xduc3ACcO7HfJgtYBxixE9FLr9sJwjnHZU-RKlMRl3nFqG1StSe6ffDgMdkm-5MNQrNOGfOmQzpRKYqJikTToZm0",
      imageAlt: "Professional bartender crafting a cocktail",
    },
    {
      id: "sweet-finales",
      title: "Sweet Finales",
      category: "Cuisine",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuhR5jNyHhk4HpW66rFf0lLz_IwWtfFTvqp5in9AxN_EtLmhusYL94xww9k-0zmJMw8OeqaVpUTKD4lvyT0SdhxXL9d7T6GBlLs0xLonPp6xGLzm9lnlWx3yFh2dVeIMbjLo4N6SoAfjiGMy77IZkVcTWNM8GdKocooWGL27cGab9i6cXfbrQuade80xfwwv9zxBBKcD2XL9d3NxyLU_XWVqwOUj-VeUsp9i0DhADmssE9zwo-fTRlAyqOoB7Ze0GIE5KMn1gkc9Q",
      imageAlt: "Artfully plated dessert with fruit and cream",
    },
    {
      id: "curated-events",
      title: "Curated Events",
      category: "Events",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBiDVtRaaFwliAOcC-BbQ0QW2xgIpH_HYZpP-5qTvZh6CzugPS0-DReAtta2Xp4srYYgDPL1qnD6TKV4iMne22swcXefB7SMvwJhx_36HUp92M6puVZoNptK5wQ2oT0zaqiVoNaf0iDsl3D3IRxHg7lXl7NkotlhcesEaHjZAmvk0Oe__Y0sOqqYdX0lemaKVjqsuZsR8BcQD3QTb-_v_OF7FQrevigGbfFHI9261ETgn92VO4pxWV27gOjCMwLfBsNqlcug8QWHh4",
      imageAlt: "Meticulously set table for a gala event",
    },
    {
      id: "essence-of-kitchen",
      title: "The Essence of Our Kitchen",
      category: "Cuisine",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDZH6Nsprtv3Bn50ZIv4YpXgH6iudGRXqUwRsbPMFhBp3c2_RMdRolS3nMsthPF96trhj5t-F0Rt5zA2kJz8aWBUN9OxuOnPE9NKHejhvRjswMoktW_tQbLSZv2fYqJ-FBoRAFMEfm-CqdLgbKgxodmsxDrrR6lD2tPWm676IjHn5Ad5aHVnyFmJdhwXzGJRFKmc70KQxe7mOKO37cGfY0mXIZOB1a0qbOYNSNyoLeeaOSEAFjalJdh85M4B6zuA4ndB73bJM2nNG8",
      imageAlt:
        "Wide shot of a culinary spread in a kitchen setting at L'Essence",
    },
  ],
};

