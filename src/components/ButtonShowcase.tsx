"use client";

import { ThemeLook } from "@/types/site";

interface ButtonShowcaseProps {
  title: string;
  subtitle: string;
  chooseLabel: string;
  labels: [string, string, string];
  descriptions: [string, string, string];
  selectedLook: ThemeLook;
  onSelectLook: (look: ThemeLook) => void;
}

export function ButtonShowcase({
  title,
  subtitle,
  chooseLabel,
  labels,
  descriptions,
  selectedLook,
  onSelectLook,
}: ButtonShowcaseProps) {
  const looks: ThemeLook[] = ["gala", "studio", "vivid"];

  return (
    <section
      id="button-lab"
      className="event-section button-lab-section scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-alt)] p-8 shadow-sm"
    >
      <h2 className="section-heading font-serif text-3xl text-[var(--text-main)]">{title}</h2>
      <p className="mt-2 max-w-2xl text-[var(--text-soft)]">{subtitle}</p>
      <p className="mt-5 text-sm font-semibold text-[var(--text-main)]">{chooseLabel}</p>
      <div className="style-grid mt-6 grid gap-4 sm:grid-cols-3" role="group" aria-label={chooseLabel}>
        {looks.map((look, index) => {
          const isActive = selectedLook === look;

          return (
            <button
              key={look}
              type="button"
              onClick={() => onSelectLook(look)}
              aria-pressed={isActive}
              className={`look-option rounded-2xl border px-4 py-4 text-left transition ${
                isActive
                  ? "border-[var(--chip-active-border)] bg-[var(--chip-active-bg)] text-[var(--chip-active-text)] shadow-sm"
                  : "border-[var(--chip-border)] bg-[var(--chip-bg)] text-[var(--text-main)] hover:-translate-y-0.5"
              }`}
            >
              <span className={`look-glyph look-glyph-${look}`} aria-hidden="true" />
              <span className="block text-sm font-bold tracking-wide">{labels[index]}</span>
              <span
                className={`mt-1 block text-xs ${
                  isActive ? "text-[var(--chip-active-text)]/85" : "text-[var(--text-soft)]"
                }`}
              >
                {descriptions[index]}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
