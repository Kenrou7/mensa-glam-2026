import { InterestingPlacesVariants } from "@/components/InterestingPlacesVariants";
import { buenosAiresPlaces, getPlacesCopy, placesVariants } from "@/content/places";
import { isLocale } from "@/lib/i18n";
import { Locale } from "@/types/site";
import { PlacesVariant } from "@/types/places";
import { notFound } from "next/navigation";

type PlacesVariantPageProps = {
  params: Promise<{ lang: string; variant: string }>;
};

function isPlacesVariant(value: string): value is PlacesVariant {
  return placesVariants.includes(value as PlacesVariant);
}

export function generateStaticParams() {
  const languages: Locale[] = ["es", "pt", "en"];
  return languages.flatMap((lang) => placesVariants.map((variant) => ({ lang, variant })));
}

export default async function PlacesVariantPage({ params }: PlacesVariantPageProps) {
  const { lang, variant } = await params;

  if (!isLocale(lang) || !isPlacesVariant(variant)) {
    notFound();
  }

  const copy = getPlacesCopy(lang);

  return (
    <InterestingPlacesVariants
      localePrefix={`/${lang}`}
      variant={variant}
      copy={copy}
      places={buenosAiresPlaces}
      variants={placesVariants}
    />
  );
}
