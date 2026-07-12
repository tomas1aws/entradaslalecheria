"use client";

import { useState } from "react";
import { ticketQuantities, type TicketQuantity } from "@/config/event";
import { formatCurrency, getPaymentHref, getTicketTotal } from "@/config/helpers";

function getTicketLabel(quantity: TicketQuantity) {
  return quantity === 1 ? "1 entrada" : `${quantity} entradas`;
}

export function PurchaseOptions() {
  const [selectedQuantity, setSelectedQuantity] = useState<TicketQuantity>(1);
  const href = getPaymentHref(selectedQuantity);
  const isPending = href.startsWith("#pago-pendiente");
  const ticketLabel = getTicketLabel(selectedQuantity);
  const total = formatCurrency(getTicketTotal(selectedQuantity));

  return (
    <section id="comprar" className="px-5 py-12 sm:px-8 lg:px-12" aria-labelledby="comprar-titulo">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200">Compra</p>
          <h2 id="comprar-titulo" className="mt-2 text-3xl font-black text-white">Elegí tus entradas</h2>
        </div>

        <div className="mt-7 rounded-3xl border border-sky-200/15 bg-slate-950/55 p-5 shadow-xl shadow-sky-950/20 sm:p-7">
          <fieldset aria-label="Cantidad de entradas">
            <legend className="text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
              Cantidad
            </legend>
            <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3" role="group" aria-label="Seleccionar cantidad de entradas">
              {ticketQuantities.map((quantity) => {
                const isSelected = quantity === selectedQuantity;
                const label = getTicketLabel(quantity);

                return (
                  <button
                    key={quantity}
                    type="button"
                    aria-label={`Seleccionar ${label}`}
                    aria-pressed={isSelected}
                    onClick={() => setSelectedQuantity(quantity)}
                    className={`min-h-12 rounded-2xl border px-3 py-3 text-base font-black transition focus:outline-none focus:ring-4 focus:ring-sky-200/70 sm:text-lg ${
                      isSelected
                        ? "border-white bg-sky-300 text-sky-950 shadow-lg shadow-sky-950/30 ring-2 ring-white/70"
                        : "border-sky-200/20 bg-white/10 text-white hover:border-sky-300/60 hover:bg-white/15"
                    }`}
                  >
                    <span aria-hidden="true">{quantity}</span>
                    <span className="sr-only">{isSelected ? " seleccionado" : ""}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <article aria-live="polite" className="mt-6 rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center transition sm:p-6">
            <h3 className="text-2xl font-black text-white">{ticketLabel}</h3>
            <p className="mt-3 text-3xl font-black text-sky-200">Total: {total}</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Link preparado para pagar exactamente {ticketLabel}. Revisá el monto antes de confirmar.
            </p>
            <p className="mt-5 rounded-2xl border border-amber-200/30 bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">
              Verificá que el monto del link coincida con la cantidad de entradas seleccionada.
            </p>
            {isPending ? (
              <p className="mt-5 rounded-2xl bg-amber-300/15 p-3 text-sm font-semibold text-amber-100" role="status">
                Link de pago pendiente de configuración.
              </p>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pagar ${ticketLabel} con Mercado Pago`}
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-center font-bold text-sky-950 transition hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-sky-200/70 sm:w-auto"
              >
                Pagar con Mercado Pago
              </a>
            )}
          </article>
        </div>
      </div>
    </section>
  );
}
