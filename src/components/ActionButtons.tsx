"use client";

import { toast } from "sonner";

interface ActionButtonsProps {
  registrationLabel: string;
  comingSoonLabel: string;
}

export function ActionButtons({ registrationLabel, comingSoonLabel }: ActionButtonsProps) {
  const onComingSoon = () => toast.info(comingSoonLabel);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={onComingSoon}
        className="action-btn action-btn-primary rounded-full bg-[var(--button-primary-bg)] px-6 py-3 text-sm font-semibold text-[var(--button-primary-text)] shadow-sm transition hover:-translate-y-0.5 hover:brightness-105"
      >
        {registrationLabel}
      </button>
    </div>
  );
}
