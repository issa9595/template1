export interface ContactHeroModel {
  eyebrow: string;
  title: string;
  backgroundImageUrl: string;
}

export interface ContactInfoModel {
  intro: string;
  address: string;
  phone: string;
  email: string;
}

export interface OpeningHourRow {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface OpeningHoursModel {
  title: string;
  rows: OpeningHourRow[];
}

export interface MapModel {
  label: string;
  backgroundImageUrl: string;
}

export interface ContactViewModel {
  hero: ContactHeroModel;
  info: ContactInfoModel;
  openingHours: OpeningHoursModel;
  map: MapModel;
}

export const contactViewModel: ContactViewModel = {
  hero: {
    eyebrow: "Connect With Us",
    title: "Inquiry & Location",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzbPldQUpCXivaQJMK1sFyrAs2GR4DE1HvX2ubDodXvctz0ptfIboVLFeQMYS6Qwg1FD3E-GcOnps0jc3kJg-GnH6FVmtYr-FKToiTfqzOgxm_WEdlLzNR6AsyQY92pmKprln88jGpK-JBAbqUPwsd4PIW0_PUu-9S47bVaRuGEJP3kbZWKIklaKa_xnFhDPuoVP1xG6UzWFE4cwdN8_AdUgG3t7-1DUNHAVLPS7Y-djRaATnXpAsI6WXuXE1ZXPZ0NbNgktFw3zQ",
  },
  info: {
    intro:
      "Whether you have a question about our menu, wish to discuss a private event, or simply want to share your experience, we look forward to hearing from you.",
    address: "12 Rue de la Paix, 75002 Paris, France",
    phone: "+33 (0) 1 42 61 57 22",
    email: "concierge@lessence-paris.com",
  },
  openingHours: {
    title: "Opening Hours",
    rows: [
      {
        label: "Tuesday – Friday",
        value: "12:00 – 14:30 | 19:00 – 22:30",
      },
      {
        label: "Saturday",
        value: "19:00 – 23:00",
      },
      {
        label: "Sunday – Monday",
        value: "Closed",
        highlight: true,
      },
    ],
  },
  map: {
    label: "Find us in the heart of Paris",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBI9WCKxOvngnzWs2gurxMq2H_HqP-DxDC7PUzDJwbNBO3ClQTjkkiU-YeK_YgCp1XfdbiBi1cNIkJFH72SFPaIoDUmzA5fL2pqj9q-Uo7WFdYSpUny485wi3clnOR6r06cU7PsARl-bKRf1iah3sDrdePWO9srb9tEGD28G0F6zrynwk_g6DFI4i9TMsTzhUGgfFeGevjBDt35sjMu1dxFgioMcms16pi5iW9bGG7atGIW4J8JhOPq7IgNJvdDUK3n3lr97ESZsfc",
  },
};

