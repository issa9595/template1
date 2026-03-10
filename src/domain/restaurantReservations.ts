export interface ReservationsHeroModel {
  title: string;
  subtitle: string;
  backgroundImageUrl: string;
}

export interface ReservationsFormModel {
  timeOptions: string[];
  guestOptions: string[];
}

export interface DiningHourRow {
  label: string;
  value: string;
}

export interface ReservationsInfoModel {
  diningHours: DiningHourRow[];
  bookingPolicy: string[];
}

export interface ReservationsViewModel {
  hero: ReservationsHeroModel;
  form: ReservationsFormModel;
  info: ReservationsInfoModel;
}

export const reservationsViewModel: ReservationsViewModel = {
  hero: {
    title: "Reservations",
    subtitle: "Secure your journey through the essence of fine dining.",
    backgroundImageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHK-S-8Q3Khc9CYudO-yONd96zuVpuvOdL2woDnHGpHBuapQPm6FqxUtnNacR2LdZVOEjPWr3myabCMXSlYVxfmswtPZD2eWcWkVZiCWEUPcZj3bVnTXzucHZaW_9m2idG8_PQ1H-aJKc5DzpQ2L4wlFdo7piL3j0N9LKSbjmgDXsUsNZqs6X38bWYs392mWXlBp05Ot9f_abO5cizOJ__lXodBrVvQg2fJkdIJVE8pm7oLrXEBjcLP1n4jJ0b85lPfzU1klwGrus",
  },
  form: {
    timeOptions: [
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
    ],
    guestOptions: [
      "2 People",
      "3 People",
      "4 People",
      "5 People",
      "6+ People",
    ],
  },
  info: {
    diningHours: [
      { label: "Monday - Thursday", value: "18:00 - 22:30" },
      { label: "Friday - Saturday", value: "17:30 - 23:30" },
      { label: "Sunday", value: "12:00 - 21:00" },
    ],
    bookingPolicy: [
      "For parties of 6 or more, please contact us directly at +1 (555) 0123. A credit card is required to secure your booking.",
      "Cancellation within 24 hours of the reservation time will incur a $50 per person fee.",
      "We hold tables for 15 minutes past the reservation time. Please call if you are running late.",
    ],
  },
};

