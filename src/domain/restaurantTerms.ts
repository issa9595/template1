import type {
  PrivacyHeroModel,
  PrivacySection,
  PrivacyViewModel,
} from "./restaurantPrivacy";

export const termsViewModel: PrivacyViewModel = {
  hero: {
    title: "Terms of Service",
    lastUpdatedLabel: "Last updated: March 2026",
  } satisfies PrivacyHeroModel,
  sections: [
    {
      id: "introduction",
      title: "01. Introduction",
      body:
        "Welcome to L'Essence. These Terms of Service govern your use of our website and services. By accessing our site or making a reservation, you agree to be bound by these terms. Our commitment to excellence extends from our kitchen to your digital experience.\n\nPlease read these terms carefully before engaging with our digital platforms or making a commitment to dine with us.",
    },
    {
      id: "reservations-cancellations",
      title: "02. Reservations & Cancellations",
      body:
        "At L'Essence, we prepare each dish with precision and care based on our nightly attendance. Therefore, we require a credit card to secure all reservations.",
      listItems: [
        "Cancellations must be made at least 48 hours in advance.",
        "Late cancellations or no-shows will incur a fee of $150 per person.",
        "Large parties (6+) require a 50% deposit at the time of booking.",
      ],
    },
    {
      id: "dining-etiquette",
      title: "03. Dining Etiquette & Dress Code",
      body:
        "To maintain the refined atmosphere of L'Essence, we observe a formal dress code. We kindly request that gentlemen wear jackets and ladies wear evening attire. Athletic wear, shorts, and flip-flops are not permitted in the main dining room.\n\nWe ask all guests to be mindful of flash photography and mobile phone usage to ensure an uninterrupted experience for all patrons.",
    },
    {
      id: "dietary-restrictions",
      title: "04. Dietary Restrictions",
      body:
        "Our chef is pleased to accommodate dietary requirements when notified in advance. Please inform us of any allergies or restrictions at least 72 hours before your reservation. While we take every precaution, we cannot guarantee an environment 100% free of allergens.",
    },
    {
      id: "contact-legal",
      title: "Contact our Legal Team",
      body:
        "If you have any questions regarding these terms, please reach out to our administration at legal@lessence-restaurant.com.",
      highlight: true,
    },
  ] satisfies PrivacySection[],
};

