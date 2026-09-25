import { Locale } from "@/types/site";

export type PlacesVariant = "postcards" | "neighborhoods" | "spotlight" | "passport" | "route" | "carousel";

export interface InterestingPlace {
  slug: string;
  title: string;
  description: string;
  image: string;
  mapUrl: string;
  neighborhood: string;
  category: "cultura" | "historia" | "arquitectura" | "naturaleza" | "ciencia" | "arte" | "gastronomia";
}

export interface PlacesPageCopy {
  title: string;
  subtitle: string;
  mapsLabel: string;
  backLabel: string;
  variantsLabel: string;
  categoryAll: string;
  featuredLabel: string;
  neighborhoodsLabel: string;
  variantNames: Record<PlacesVariant, string>;
}

export type PlacesCopyByLocale = Record<Locale, PlacesPageCopy>;
