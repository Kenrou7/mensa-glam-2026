"use client";

import { ActionButtons } from "@/components/ActionButtons";
import { ButtonShowcase } from "@/components/ButtonShowcase";
import { HotelsSection } from "@/components/HotelsSection";
import { MensaMotifBackground } from "@/components/MensaMotifBackground";
import { NavBar } from "@/components/NavBar";
import { Locale, SiteContent, ThemeLook } from "@/types/site";
import Image from "next/image";
import { useState } from "react";

interface EventPageClientProps {
  locale: Locale;
  content: SiteContent;
}

export function EventPageClient({ locale, content }: EventPageClientProps) {
  const [look, setLook] = useState<ThemeLook>("gala");

  return (
    <div data-look={look} className="look-page theme-transition relative min-h-screen text-[var(--text-main)]">
      <MensaMotifBackground look={look} />
      <NavBar
        locale={locale}
        brand={content.nav.brand}
        languageLabel={content.nav.languageLabel}
        placesPreviewLabel={content.nav.placesPreviewLabel}
        sections={content.nav.sections}
      />

      <main className="event-main mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-14 pt-28 lg:px-8">
        <section
          id="overview"
          className="event-section event-hero scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-8 shadow-sm"
        >
          <p className="event-eyebrow text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            {content.hero.eyebrow}
          </p>
          <div className="event-hero-grid mt-5 grid gap-6 lg:grid-cols-[1fr_230px] lg:items-center">
            <div>
              <h1 className="event-title font-serif text-5xl leading-tight text-[var(--text-main)]">
                {content.hero.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-[var(--text-soft)]">{content.hero.subtitle}</p>
              <div className="event-chip-row mt-5 flex flex-wrap gap-2 text-sm font-semibold text-[var(--text-soft)]">
                <span className="event-chip rounded-full bg-[var(--chip-bg)] px-3 py-1">{content.hero.date}</span>
                <span className="event-chip rounded-full bg-[var(--chip-active-bg)] px-3 py-1 text-[var(--chip-active-text)]">
                  {content.hero.city}
                </span>
              </div>
              <div className="mt-7">
                <ActionButtons registrationLabel={content.hero.registration} comingSoonLabel={content.hero.comingSoon} />
              </div>
            </div>
            <div className="hero-emblem mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-[var(--chip-bg)] p-8 shadow-inner">
              <Image src="/globe.svg" alt={content.nav.brand} width={120} height={120} priority />
            </div>
          </div>
        </section>

        <ButtonShowcase
          title={content.buttonShowcase.title}
          subtitle={content.buttonShowcase.subtitle}
          chooseLabel={content.buttonShowcase.chooseLabel}
          labels={content.buttonShowcase.styles}
          descriptions={content.buttonShowcase.styleDescriptions}
          selectedLook={look}
          onSelectLook={setLook}
        />

        <section
          id="schedule"
          className="event-section section-schedule scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-8 shadow-sm"
        >
          <h2 className="section-heading font-serif text-3xl text-[var(--text-main)]">{content.schedule.title}</h2>
          <p className="mt-2 text-[var(--text-soft)]">{content.schedule.note}</p>
          <div className="schedule-grid mt-6 grid gap-4 md:grid-cols-2">
            {content.schedule.days.map((day) => (
              <article
                key={day.day}
                className="event-card schedule-card rounded-2xl border border-[var(--panel-border)] bg-[var(--panel-alt)] p-5"
              >
                <h3 className="font-serif text-2xl text-[var(--text-main)]">{day.day}</h3>
                <ul className="schedule-list mt-4 space-y-3 text-[var(--text-main)]">
                  {day.sessions.map((session) => (
                    <li key={`${day.day}-${session.time}-${session.speaker}`} className="schedule-item flex gap-3">
                      <span className="schedule-time min-w-16 font-semibold text-[var(--accent-strong)]">
                        {session.time}
                      </span>
                      <span>{session.speaker}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="speakers"
          className="event-section section-speakers scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-8 shadow-sm"
        >
          <h2 className="section-heading font-serif text-3xl text-[var(--text-main)]">{content.speakers.title}</h2>
          <p className="mt-2 text-[var(--text-soft)]">{content.speakers.subtitle}</p>
          <div className="speakers-grid mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.speakers.items.map((speaker) => (
              <article
                key={speaker.name}
                className="event-card speaker-card flex flex-col gap-3 rounded-2xl border border-[var(--panel-border)] bg-[var(--surface)] p-4"
              >
                <div className="speaker-media flex h-24 items-center justify-center rounded-xl bg-[var(--panel-alt)]">
                  <Image src={speaker.image} alt={speaker.name} width={48} height={48} />
                </div>
                <h3 className="font-semibold text-[var(--text-main)]">{speaker.name}</h3>
                <p className="text-sm text-[var(--text-soft)]">{speaker.description}</p>
                {speaker.pending ? (
                  <span className="mt-auto inline-flex w-fit rounded-full bg-[var(--chip-active-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--chip-active-text)]">
                    {content.speakers.pendingLabel}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section
          id="venue"
          className="event-section section-venue scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-8 shadow-sm"
        >
          <h2 className="section-heading font-serif text-3xl text-[var(--text-main)]">{content.venue.title}</h2>
          <p className="mt-2 text-[var(--text-soft)]">{content.venue.subtitle}</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <article className="event-card rounded-2xl border border-[var(--panel-border)] bg-[var(--panel-alt)] p-5">
              <h3 className="font-semibold text-[var(--text-main)]">{content.venue.placeName}</h3>
              <p className="mt-2 text-sm font-semibold text-[var(--text-soft)]">{content.venue.addressLabel}</p>
              <p className="text-[var(--text-soft)]">{content.venue.address}</p>
              <h4 className="mt-5 font-semibold text-[var(--text-main)]">{content.venue.transportTitle}</h4>
              <ul className="mt-3 space-y-2">
                {content.venue.transport.map((item) => (
                  <li key={item.title} className="text-sm text-[var(--text-soft)]">
                    <strong className="text-[var(--text-main)]">{item.title}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </article>
            <article className="event-card rounded-2xl border border-[var(--panel-border)] bg-[var(--panel-alt)] p-5">
              <h3 className="mb-3 font-semibold text-[var(--text-main)]">{content.venue.mapTitle}</h3>
              <iframe
                title={content.venue.mapTitle}
                src="https://maps.google.com/maps?q=Palacio%20Juncal%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="venue-map h-72 w-full rounded-xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>
        </section>

        <HotelsSection content={content.hotels} />

        <section
          id="thanks"
          className="event-section section-thanks scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-8 shadow-sm"
        >
          <h2 className="section-heading font-serif text-3xl text-[var(--text-main)]">{content.thanks.title}</h2>
          <p className="mt-2 text-[var(--text-soft)]">{content.thanks.subtitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {["/globe.svg", "/next.svg", "/vercel.svg"].map((logo) => (
              <div
                key={logo}
                className="event-card logo-card flex h-28 items-center justify-center rounded-2xl border border-[var(--panel-border)] bg-[var(--surface)]"
              >
                <Image src={logo} alt={content.thanks.logoAlt} width={96} height={30} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
