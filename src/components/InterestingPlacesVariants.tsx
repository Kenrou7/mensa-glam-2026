"use client";

import { InterestingPlace, PlacesPageCopy, PlacesVariant } from "@/types/places";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface InterestingPlacesVariantsProps {
  localePrefix: string;
  variant: PlacesVariant;
  copy: PlacesPageCopy;
  places: InterestingPlace[];
  variants: PlacesVariant[];
}

const categoryTone: Record<InterestingPlace["category"], string> = {
  cultura: "bg-amber-100 text-amber-900",
  historia: "bg-stone-200 text-stone-900",
  arquitectura: "bg-sky-100 text-sky-900",
  naturaleza: "bg-emerald-100 text-emerald-900",
  ciencia: "bg-cyan-100 text-cyan-900",
  arte: "bg-rose-100 text-rose-900",
  gastronomia: "bg-orange-100 text-orange-900",
};

function Header({ localePrefix, copy, variants, current }: { localePrefix: string; copy: PlacesPageCopy; variants: PlacesVariant[]; current: PlacesVariant }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Buenos Aires Guide</p>
            <h1 className="font-serif text-3xl text-stone-900">{copy.title}</h1>
            <p className="mt-1 text-sm text-stone-600">{copy.subtitle}</p>
          </div>
          <Link
            href={localePrefix}
            className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-100"
          >
            {copy.backLabel}
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="pr-2 text-xs font-semibold uppercase tracking-[0.12em] text-stone-500">{copy.variantsLabel}</span>
          {variants.map((option) => {
            const isActive = option === current;
            return (
              <Link
                key={option}
                href={`${localePrefix}/places/${option}`}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-stone-50"
                    : "border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
                }`}
              >
                {copy.variantNames[option]}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}

function MapsButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-fit items-center rounded-full border border-stone-300 px-3 py-1.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-100"
    >
      {label}
    </a>
  );
}

function Postcards({ places, copy }: { places: InterestingPlace[]; copy: PlacesPageCopy }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {places.map((place, index) => (
        <article
          key={place.slug}
          className={`overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
            index % 3 === 0 ? "sm:-rotate-1" : index % 3 === 1 ? "sm:rotate-1" : "sm:rotate-0"
          }`}
        >
          <Image src={place.image} alt={place.title} width={900} height={510} className="h-44 w-full object-cover" />
          <div className="space-y-3 p-4">
            <h2 className="font-serif text-2xl text-stone-900">{place.title}</h2>
            <p className="text-sm leading-relaxed text-stone-700">{place.description}</p>
            <MapsButton href={place.mapUrl} label={copy.mapsLabel} />
          </div>
        </article>
      ))}
    </div>
  );
}

function ByNeighborhood({ places, copy }: { places: InterestingPlace[]; copy: PlacesPageCopy }) {
  const grouped = useMemo(() => {
    return places.reduce<Record<string, InterestingPlace[]>>((acc, place) => {
      if (!acc[place.neighborhood]) {
        acc[place.neighborhood] = [];
      }
      acc[place.neighborhood].push(place);
      return acc;
    }, {});
  }, [places]);

  return (
    <div className="space-y-7">
      {Object.entries(grouped).map(([neighborhood, list]) => (
        <section key={neighborhood} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <h2 className="font-serif text-2xl text-stone-900">{neighborhood}</h2>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">{copy.neighborhoodsLabel}</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((place) => (
              <article key={place.slug} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
                <Image src={place.image} alt={place.title} width={700} height={420} className="h-36 w-full object-cover" />
                <div className="space-y-2 p-3">
                  <h3 className="font-semibold text-stone-900">{place.title}</h3>
                  <p className="line-clamp-4 text-sm text-stone-700">{place.description}</p>
                  <MapsButton href={place.mapUrl} label={copy.mapsLabel} />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function Spotlight({ places, copy }: { places: InterestingPlace[]; copy: PlacesPageCopy }) {
  const [selected, setSelected] = useState(places[0]?.slug ?? "");
  const featured = places.find((place) => place.slug === selected) ?? places[0];

  if (!featured) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
      <article className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
        <Image src={featured.image} alt={featured.title} width={1280} height={720} className="h-72 w-full object-cover" />
        <div className="space-y-3 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-700">{copy.featuredLabel}</p>
          <h2 className="font-serif text-3xl text-stone-900">{featured.title}</h2>
          <p className="text-stone-700">{featured.description}</p>
          <MapsButton href={featured.mapUrl} label={copy.mapsLabel} />
        </div>
      </article>
      <div className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
        <div className="grid gap-2">
          {places.map((place) => {
            const isActive = place.slug === featured.slug;
            return (
              <button
                key={place.slug}
                type="button"
                onClick={() => setSelected(place.slug)}
                className={`flex items-center gap-3 rounded-xl border p-2 text-left transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-stone-50"
                    : "border-stone-200 bg-stone-50 hover:bg-stone-100"
                }`}
              >
                <Image src={place.image} alt={place.title} width={120} height={72} className="h-14 w-20 rounded-md object-cover" />
                <span className="text-sm font-medium">{place.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Passport({ places, copy }: { places: InterestingPlace[]; copy: PlacesPageCopy }) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories = Array.from(new Set(places.map((place) => place.category)));
  const visible = activeCategory === "all" ? places : places.filter((place) => place.category === activeCategory);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveCategory("all")}
          className={`rounded-full border px-3 py-1.5 text-sm ${
            activeCategory === "all" ? "border-stone-900 bg-stone-900 text-stone-50" : "border-stone-300 bg-white"
          }`}
        >
          {copy.categoryAll}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-3 py-1.5 text-sm capitalize ${
              activeCategory === category ? "border-stone-900 bg-stone-900 text-stone-50" : "border-stone-300 bg-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((place) => (
          <article key={place.slug} className="rounded-2xl border border-stone-200 bg-white p-3 shadow-sm">
            <Image src={place.image} alt={place.title} width={700} height={420} className="h-40 w-full rounded-xl object-cover" />
            <div className="mt-3 space-y-2">
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${categoryTone[place.category]}`}>
                {place.category}
              </span>
              <h2 className="font-serif text-xl text-stone-900">{place.title}</h2>
              <p className="line-clamp-4 text-sm text-stone-700">{place.description}</p>
              <MapsButton href={place.mapUrl} label={copy.mapsLabel} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StoryRoute({ places, copy }: { places: InterestingPlace[]; copy: PlacesPageCopy }) {
  return (
    <div className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-stone-300 md:before:left-1/2">
      {places.map((place, index) => (
        <article key={place.slug} className="relative grid gap-3 md:grid-cols-2 md:items-center">
          <span className="absolute left-2 top-6 h-4 w-4 rounded-full bg-amber-500 md:left-1/2 md:-translate-x-1/2" />
          <div className={index % 2 === 0 ? "md:pr-10" : "md:order-2 md:pl-10"}>
            <Image src={place.image} alt={place.title} width={900} height={540} className="h-48 w-full rounded-2xl border border-stone-200 object-cover" />
          </div>
          <div className={`rounded-2xl border border-stone-200 bg-white p-4 shadow-sm ${index % 2 === 0 ? "md:pl-10" : "md:order-1 md:pr-10"}`}>
            <h2 className="font-serif text-2xl text-stone-900">{place.title}</h2>
            <p className="mt-2 text-sm text-stone-700">{place.description}</p>
            <div className="mt-3">
              <MapsButton href={place.mapUrl} label={copy.mapsLabel} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function CarouselDetail({ places, copy }: { places: InterestingPlace[]; copy: PlacesPageCopy }) {
  return (
    <div className="space-y-6">
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:px-0">
        {places.map((place) => (
          <a
            key={place.slug}
            href={`#${place.slug}`}
            className="min-w-64 snap-start overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1"
          >
            <Image src={place.image} alt={place.title} width={420} height={250} className="h-32 w-full object-cover" />
            <div className="p-3">
              <h2 className="font-semibold text-stone-900">{place.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-stone-600">{place.description}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {places.map((place) => (
          <article id={place.slug} key={place.slug} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm scroll-mt-28">
            <Image src={place.image} alt={place.title} width={800} height={480} className="h-44 w-full rounded-xl object-cover" />
            <h3 className="mt-3 font-serif text-2xl text-stone-900">{place.title}</h3>
            <p className="mt-2 text-sm text-stone-700">{place.description}</p>
            <div className="mt-3">
              <MapsButton href={place.mapUrl} label={copy.mapsLabel} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function InterestingPlacesVariants({ localePrefix, variant, copy, places, variants }: InterestingPlacesVariantsProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#fff7ed_0%,_#fffbeb_40%,_#ffffff_80%)]">
      <Header localePrefix={localePrefix} copy={copy} variants={variants} current={variant} />
      <main className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-8">
        {variant === "postcards" ? <Postcards places={places} copy={copy} /> : null}
        {variant === "neighborhoods" ? <ByNeighborhood places={places} copy={copy} /> : null}
        {variant === "spotlight" ? <Spotlight places={places} copy={copy} /> : null}
        {variant === "passport" ? <Passport places={places} copy={copy} /> : null}
        {variant === "route" ? <StoryRoute places={places} copy={copy} /> : null}
        {variant === "carousel" ? <CarouselDetail places={places} copy={copy} /> : null}
      </main>
    </div>
  );
}
