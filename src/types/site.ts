export type Locale = "es" | "pt" | "en";
export type ThemeLook = "gala" | "studio" | "vivid";

export interface SectionLink {
  id: string;
  label: string;
}

export interface DaySchedule {
  day: string;
  sessions: Array<{
    time: string;
    speaker: string;
  }>;
}

export interface SpeakerItem {
  name: string;
  description: string;
  image: string;
  pending?: boolean;
}

export interface TransportTip {
  title: string;
  detail: string;
}

export interface HotelRate {
  label: string;
  value: string;
}

export interface HotelItem {
  name: string;
  stars: number;
  image: string;
  address: string;
  mapUrl?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  bookingUrl: string;
  referenceCode?: string;
  ratesTitle: string;
  rates: HotelRate[];
  notes?: string[];
}

export interface SiteContent {
  localeName: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    brand: string;
    languageLabel: string;
    placesPreviewLabel: string;
    sections: SectionLink[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    date: string;
    city: string;
    registration: string;
    hotel: string;
    comingSoon: string;
  };
  buttonShowcase: {
    title: string;
    subtitle: string;
    chooseLabel: string;
    styles: [string, string, string];
    styleDescriptions: [string, string, string];
  };
  schedule: {
    title: string;
    note: string;
    days: DaySchedule[];
  };
  speakers: {
    title: string;
    subtitle: string;
    pendingLabel: string;
    items: SpeakerItem[];
  };
  venue: {
    title: string;
    subtitle: string;
    placeName: string;
    addressLabel: string;
    address: string;
    mapTitle: string;
    transportTitle: string;
    transport: TransportTip[];
  };
  thanks: {
    title: string;
    subtitle: string;
    logoAlt: string;
  };
  hotels: {
    title: string;
    subtitle: string;
    chooseLabel: string;
    chooseButton: string;
    directBooking: string;
    starsLabel: string;
    locationLabel: string;
    phoneLabel: string;
    whatsappLabel: string;
    emailLabel: string;
    copyEmail: string;
    copiedEmail: string;
    ratesLabel: string;
    referenceNeededTitle: string;
    referenceNeededDescription: string;
    referenceCodeLabel: string;
    autoRedirectLabel: string;
    secondsLabel: string;
    openNow: string;
    cancel: string;
    popupBlockedMessage: string;
    hotels: HotelItem[];
  };
}
