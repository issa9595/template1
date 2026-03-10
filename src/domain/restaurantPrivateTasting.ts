export interface PrivateTastingHeroModel {
  title: string;
  description: string;
  backgroundImageUrl: string;
}

export interface PrivateTastingDetail {
  id: string;
  icon: "wine_bar" | "restaurant" | "school";
  title: string;
  description: string;
}

export interface PrivateTastingBookingModel {
  sidebarTitle: string;
  sidebarBody: string;
  badges: { id: string; icon: string; label: string }[];
  experiences: string[];
}

export interface PrivateTastingViewModel {
  hero: PrivateTastingHeroModel;
  details: PrivateTastingDetail[];
  booking: PrivateTastingBookingModel;
}

export const privateTastingViewModel: PrivateTastingViewModel = {
  hero: {
    title: "Private Sommelier Sessions",
    description:
      "An exclusive journey through rare vintages and artisanal pairings in the sanctuary of our private cellar.",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwFVsvmDGUOtkmPJ8bixbtjb5xrht5i9UiS-Kq-iDajizJewwRzAgeiKzNh9nlzylkPGS0QVd7O7vFERZpdZ8kaunaEuPnbrFvN1rY75brS0V7SexEf0wrNkJt0KIvxI5oXhUzMNoNK6c83aeBKz1ob35e1hTG5sRfiXSxDrEY8BSdQmG9d5BUNiwiLdInbJLAkM-wYu_S9sXipfJtUapylpPSdR16TwwgRRaUprU-9ksHkJTrkVePyQHgeLYz9GWaHdWuir1Gwxo",
  },
  details: [
    {
      id: "vertical-tastings",
      icon: "wine_bar",
      title: "Vertical Tastings",
      description:
        "Explore the evolution of a single estate through a sequence of rare vintages from our temperature-controlled private collection.",
    },
    {
      id: "artisanal-pairings",
      icon: "restaurant",
      title: "Artisanal Pairings",
      description:
        "Each vintage is complemented by a bespoke small bite, meticulously crafted by our Executive Chef to highlight specific flavor profiles.",
    },
    {
      id: "expert-guidance",
      icon: "school",
      title: "Expert Guidance",
      description:
        "Led by our Head Sommelier, gain insider knowledge on terroir, vinification techniques, and the heritage of the world's finest labels.",
    },
  ],
  booking: {
    sidebarTitle: "Begin Your Journey",
    sidebarBody:
      "Our private sessions are limited to ensure an intimate and educational atmosphere. Please share your preferences and our cellar concierge will contact you within 24 hours.",
    badges: [
      { id: "confirmed", icon: "verified", label: "Confirmed Availability" },
      { id: "secure", icon: "lock_open", label: "Secure Booking" },
    ],
    experiences: [
      "The Grand Cru Journey",
      "Regional Deep Dive: Burgundy",
      "Old World vs. New World Mastery",
      "The Rare & Forgotten Vintages",
    ],
  },
};

