import { EventPageClient } from "@/components/EventPageClient";
import { getSiteContent, isLocale } from "@/lib/i18n";
import { Locale } from "@/types/site";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "pt" }, { lang: "en" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {
      title: "Mensa Glam",
      description: "Mensa Glam event website",
    };
  }

  const content = getSiteContent(lang);

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default async function LocalePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const content = getSiteContent(locale);

  return <EventPageClient locale={locale} content={content} />;
}
