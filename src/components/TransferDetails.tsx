"use client";

import { useEffect, useRef, useState } from "react";

const transferData = [
  { label: "CBU", value: "0070181120000001410279" },
  { label: "ALIAS", value: "POESIA.FAROL.BOLA" },
] as const;

type TransferLabel = (typeof transferData)[number]["label"];

export function TransferDetails() {
  const [copied, setCopied] = useState<TransferLabel | null>(null);
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    };
  }, []);

  async function copyToClipboard(label: TransferLabel, value: string) {
    await navigator.clipboard.writeText(value);
    setCopied(label);

    if (feedbackTimer.current) clearTimeout(feedbackTimer.current);
    feedbackTimer.current = setTimeout(() => setCopied(null), 2000);
  }

  return (
    <div className="space-y-3 rounded-2xl border border-sky-200/30 bg-sky-300/10 p-3 text-left text-sky-100">
      {transferData.map(({ label, value }) => {
        const wasCopied = copied === label;

        return (
          <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
            <p className="min-w-0">
              <span className="block text-sm font-black">{label}:</span>
              <span className="block break-all text-base font-semibold sm:break-normal">{value}</span>
            </p>
            <button
              type="button"
              onClick={() => copyToClipboard(label, value)}
              className="inline-flex min-h-10 w-full shrink-0 items-center justify-center self-start rounded-xl bg-sky-950 px-4 py-2 text-sm font-bold text-sky-100 transition hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-950/30 sm:w-auto"
              aria-label={`Copiar ${label}`}
            >
              {wasCopied ? `✓ ${label} copiado` : "📋 Copiar"}
            </button>
          </div>
        );
      })}
      <span className="sr-only" aria-live="polite">
        {copied ? `${copied} copiado` : ""}
      </span>
    </div>
  );
}
