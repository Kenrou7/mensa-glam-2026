"use client";

import { BasePathImage } from "@/components/BasePathImage";
import { HotelItem, SiteContent } from "@/types/site";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface HotelsSectionProps {
  content: SiteContent["hotels"];
}

function normalizePhone(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return digits.startsWith("+") ? digits : `+${digits}`;
}

function formatWhatsAppNumber(whatsAppUrl: string) {
  const directMatch = whatsAppUrl.match(/wa\.me\/(\d+)/i);
  if (directMatch?.[1]) {
    return `+${directMatch[1]}`;
  }

  const digits = whatsAppUrl.replace(/[^\d]/g, "");
  if (digits.length > 0) {
    return `+${digits}`;
  }

  return whatsAppUrl;
}

function starRow(stars: number) {
  return "★".repeat(stars);
}

function secondUnitLabel(secondsLeft: number, pluralLabel: string) {
  if (secondsLeft !== 1) {
    return pluralLabel;
  }

  if (pluralLabel.endsWith("s")) {
    return pluralLabel.slice(0, -1);
  }

  return pluralLabel;
}

export function HotelsSection({ content }: HotelsSectionProps) {
  const [pendingHotel, setPendingHotel] = useState<HotelItem | null>(null);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const secondsUnit = secondUnitLabel(secondsLeft, content.secondsLabel);
  const dynamicReferenceDescription = content.referenceNeededDescription
    .replace("{seconds}", String(secondsLeft))
    .replace("{unit}", secondsUnit);

  const openBookingInNewTab = (bookingUrl: string) => {
    const newWindow = window.open(bookingUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
      return true;
    }

    return false;
  };

  useEffect(() => {
    if (!pendingHotel || !pendingHotel.referenceCode) {
      return;
    }

    const redirectAt = Date.now() + 5000;
    let completed = false;

    const updateCountdown = () => {
      if (completed) {
        return;
      }

      const remainingMs = redirectAt - Date.now();
      const nextSeconds = Math.max(0, Math.ceil(remainingMs / 1000));
      setSecondsLeft(nextSeconds);

      if (remainingMs <= 0) {
        completed = true;
        const opened = openBookingInNewTab(pendingHotel.bookingUrl);
        if (opened) {
          setPendingHotel(null);
          setSecondsLeft(5);
          return;
        }

        setSecondsLeft(0);
        toast.error(content.popupBlockedMessage);
      }
    };

    updateCountdown();

    const intervalId = window.setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [content.popupBlockedMessage, pendingHotel]);

  const chooseHotel = (hotel: HotelItem) => {
    if (hotel.referenceCode) {
      setSecondsLeft(5);
      setPendingHotel(hotel);
      return;
    }

    const opened = openBookingInNewTab(hotel.bookingUrl);
    if (!opened) {
      toast.error(content.popupBlockedMessage);
    }
  };

  const copyEmail = async (email: string) => {
    await navigator.clipboard.writeText(email);
    toast.success(content.copiedEmail);
  };

  return (
    <>
      <section
        id="hotels"
        className="event-section section-hotels scroll-mt-28 rounded-3xl border border-[var(--panel-border)] bg-[var(--panel-bg)] p-8 shadow-sm"
      >
        <h2 className="section-heading font-serif text-3xl text-[var(--text-main)]">{content.title}</h2>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {content.hotels.map((hotel) => (
            <article
              key={hotel.name}
              className="event-card flex h-full flex-col rounded-2xl border border-[var(--panel-border)] bg-[var(--surface)] p-4"
            >
              <div className="relative h-36 overflow-hidden rounded-xl border border-[var(--panel-border)]">
                <BasePathImage src={hotel.image} alt={hotel.name} fill className="object-cover" />
              </div>

              <h3 className="mt-4 font-serif text-2xl text-[var(--text-main)]">{hotel.name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--accent-strong)]">
                {content.starsLabel}: {starRow(hotel.stars)}
              </p>

              <div className="mt-4 space-y-2 text-sm text-[var(--text-soft)]">
                <p>
                  <strong className="text-[var(--text-main)]">{content.locationLabel}:</strong>{" "}
                  {hotel.mapUrl ? (
                    <a href={hotel.mapUrl} target="_blank" rel="noopener noreferrer" className="underline">
                      {hotel.address}
                    </a>
                  ) : (
                    hotel.address
                  )}
                </p>

                {hotel.phone ? (
                  <p>
                    <strong className="text-[var(--text-main)]">{content.phoneLabel}:</strong>{" "}
                    <a href={`tel:${normalizePhone(hotel.phone)}`} className="underline">
                      {hotel.phone}
                    </a>
                  </p>
                ) : null}

                {hotel.whatsapp ? (
                  <p>
                    <strong className="text-[var(--text-main)]">{content.whatsappLabel}:</strong>{" "}
                    <a href={hotel.whatsapp} target="_blank" rel="noopener noreferrer" className="underline">
                      {formatWhatsAppNumber(hotel.whatsapp)}
                    </a>
                  </p>
                ) : null}

                {hotel.email
                  ? (() => {
                      const email = hotel.email;
                      return (
                        <div className="flex items-center gap-2">
                          <p className="min-w-0 flex-1 truncate">
                            <strong className="text-[var(--text-main)]">{content.emailLabel}:</strong>{" "}
                            <a href={`mailto:${email}`} className="underline">
                              {email}
                            </a>
                          </p>
                          <button
                            type="button"
                            onClick={() => copyEmail(email)}
                            aria-label={content.copyEmail}
                            title={content.copyEmail}
                            className="rounded-md border border-[var(--chip-border)] px-2 py-1 text-xs font-semibold text-[var(--text-main)]"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              className="h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect x="9" y="9" width="11" height="11" rx="2" ry="2" />
                              <path d="M5 15V6a2 2 0 0 1 2-2h9" />
                            </svg>
                          </button>
                        </div>
                      );
                    })()
                  : null}

                {hotel.website ? (
                  <p>
                    <strong className="text-[var(--text-main)]">Web:</strong>{" "}
                    <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="underline">
                      {hotel.website}
                    </a>
                  </p>
                ) : null}
              </div>

              <div className="mt-4 rounded-xl border border-[var(--panel-border)] bg-[var(--panel-alt)] p-3">
                <p className="text-sm font-semibold text-[var(--text-main)]">{content.ratesLabel}</p>
                <ul className="mt-2 space-y-1 text-sm text-[var(--text-soft)]">
                  {hotel.rates.map((rate) => (
                    <li key={`${hotel.name}-${rate.label}`}>
                      <strong className="text-[var(--text-main)]">{rate.label}:</strong> {rate.value}
                    </li>
                  ))}
                </ul>
                {hotel.notes ? (
                  <ul className="mt-2 list-disc pl-5 text-sm text-[var(--text-soft)]">
                    {hotel.notes.map((note) => (
                      <li key={`${hotel.name}-${note}`}>{note}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="mt-auto pt-4">
                <button
                  type="button"
                  onClick={() => chooseHotel(hotel)}
                  className="w-full rounded-full bg-[var(--button-primary-bg)] px-4 py-3 text-sm font-semibold text-[var(--button-primary-text)] shadow-sm"
                >
                  {content.chooseButton}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {pendingHotel && pendingHotel.referenceCode ? (
        <div className="fixed inset-0 z-[70] grid place-items-center bg-black/55 p-4">
          <div className="w-full max-w-lg rounded-2xl border border-[var(--panel-border)] bg-[var(--surface)] p-6 shadow-2xl">
            <h3 className="font-serif text-2xl text-[var(--text-main)]">{content.referenceNeededTitle}</h3>
            <p className="mt-2 text-[var(--text-soft)]">{dynamicReferenceDescription}</p>

            <div className="mt-4 rounded-xl border border-[var(--panel-border)] bg-[var(--panel-alt)] p-4">
              <p className="text-sm font-semibold text-[var(--text-main)]">{pendingHotel.name}</p>
              <p className="mt-2 text-sm text-[var(--text-soft)]">
                <strong className="text-[var(--text-main)]">{content.referenceCodeLabel}:</strong>{" "}
                {pendingHotel.referenceCode}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  const opened = openBookingInNewTab(pendingHotel.bookingUrl);
                  if (opened) {
                    setPendingHotel(null);
                    setSecondsLeft(5);
                    return;
                  }

                  toast.error(content.popupBlockedMessage);
                }}
                className="rounded-full bg-[var(--button-primary-bg)] px-5 py-2 text-sm font-semibold text-[var(--button-primary-text)]"
              >
                {content.openNow}
              </button>
              <button
                type="button"
                onClick={() => setPendingHotel(null)}
                className="rounded-full border border-[var(--chip-border)] px-5 py-2 text-sm font-semibold text-[var(--text-main)]"
              >
                {content.cancel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
