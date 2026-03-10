export interface PrivacyHeroModel {
  title: string;
  lastUpdatedLabel: string;
}

export interface PrivacySection {
  id: string;
  title: string;
  body: string;
  listItems?: string[];
  highlight?: boolean;
}

export interface PrivacyViewModel {
  hero: PrivacyHeroModel;
  sections: PrivacySection[];
}

export const privacyViewModel: PrivacyViewModel = {
  hero: {
    title: "Privacy Policy",
    lastUpdatedLabel: "Last Updated: March 2026",
  },
  sections: [
    {
      id: "introduction",
      title: "1. Introduction",
      body:
        "At L'Essence, we value the trust you place in us when sharing your personal information. This Privacy Policy outlines how we collect, use, and protect your data to ensure a seamless and secure dining experience. We are committed to protecting your privacy and being transparent about our practices.",
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect",
      body:
        "We collect information that helps us provide you with the exceptional service you expect from a high-end dining establishment. This may include:",
      listItems: [
        "Contact details (name, email address, phone number) for reservations and communication.",
        "Dietary preferences, allergies, and special occasion details to personalize your experience.",
        "Payment information for booking deposits and final settlements (processed through secure gateways).",
        "Digital interaction data via our website to improve our online services.",
      ],
    },
    {
      id: "how-we-use-your-information",
      title: "3. How We Use Your Information",
      body:
        "Your data is used primarily to manage reservations and provide bespoke services. We may also use your contact information to share news about seasonal menus, exclusive events, or special offers at L'Essence, provided you have opted in to receive such communications.",
    },
    {
      id: "data-security",
      title: "4. Data Security",
      body:
        "We implement state-of-the-art security measures to protect your personal information against unauthorized access, alteration, or destruction. Access to your sensitive data is restricted to authorized personnel only.",
      highlight: true,
    },
    {
      id: "your-rights",
      title: "5. Your Rights",
      body:
        "You have the right to access, correct, or request the deletion of your personal data held by L'Essence. If you wish to exercise these rights or have questions about our privacy practices, please contact our concierge team.",
    },
  ],
};

