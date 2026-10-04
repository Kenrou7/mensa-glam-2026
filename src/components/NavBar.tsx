"use client";

import { Locale, SectionLink } from "@/types/site";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface NavBarProps {
  locale: Locale;
  brand: string;
  languageLabel: string;
  sections: SectionLink[];
}

const localeLabels: Record<Locale, string> = {
  es: "ES",
  pt: "PT",
  en: "EN",
};

const localeOrder: Locale[] = ["es", "pt", "en"];

export function NavBar({ locale, brand, languageLabel, sections }: NavBarProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const activeIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeSection),
  );
  const progressPercent =
    sections.length > 1 ? Math.round((activeIndex / (sections.length - 1)) * 100) : 100;

  useEffect(() => {
    const observers = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        if (!element) {
          return null;
        }

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
        );

        observer.observe(element);
        return observer;
      })
      .filter(Boolean) as IntersectionObserver[];

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--nav-border)] bg-[var(--nav-bg)] backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <a href="#overview" className="font-serif text-xl tracking-wide text-[var(--text-main)]">
          {brand}
        </a>
        <div className="hidden items-center gap-2 md:flex">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-[var(--chip-active-bg)] text-[var(--chip-active-text)]"
                    : "text-[var(--text-soft)] hover:bg-[var(--chip-bg)]"
                }`}
              >
                {section.label}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-semibold uppercase text-[var(--text-soft)] sm:inline">
            {languageLabel}
          </span>
          {localeOrder.map((item) => (
            <Link
              key={item}
              href={`/${item}`}
              className={`rounded-full border px-2.5 py-1 text-xs font-bold tracking-wide transition ${
                item === locale
                  ? "border-[var(--chip-active-border)] bg-[var(--chip-active-bg)] text-[var(--chip-active-text)]"
                  : "border-[var(--chip-border)] text-[var(--text-soft)] hover:bg-[var(--chip-bg)]"
              }`}
            >
              {localeLabels[item]}
            </Link>
          ))}
        </div>
      </nav>
      <div className="nav-progress" aria-hidden="true">
        <span className="nav-progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>
    </header>
  );
}
