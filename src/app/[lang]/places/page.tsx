import { redirect } from "next/navigation";

type PlacesIndexPageProps = {
  params: Promise<{ lang: string }>;
};

export default async function PlacesIndexPage({ params }: PlacesIndexPageProps) {
  const { lang } = await params;
  redirect(`/${lang}/places/postcards`);
}
