import { redirect } from "next/navigation";

type PlacesIndexPageProps = {
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "pt" }, { lang: "en" }];
}

export default async function PlacesIndexPage({ params }: PlacesIndexPageProps) {
  const { lang } = await params;
  redirect(`/${lang}/places/postcards`);
}
