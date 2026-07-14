import Image from "next/image";

import { eventConfig } from "@/config/event";
import { formatCurrency, getPaymentHref } from "@/config/helpers";

const steps = [
  "Elegí la entrada general.",
  "Realizá el pago mediante Mercado Pago.",
  "Guardá o capturá el comprobante.",
  "Enviá el comprobante junto con el nombre completo de la persona que asistirá.",
  "Esperá la confirmación del organizador.",
] as const;

export function PurchaseFlowSection() {
  const href = getPaymentHref();
  const isPending = href.startsWith("#pago-pendiente");
  const total = formatCurrency(eventConfig.ticketPrice);

  return (
    <section id="comprar" className="px-5 py-10 sm:px-8 lg:px-12" aria-labelledby="comprar-titulo">
      <div className="mx-auto grid max-w-[1500px] items-start gap-8 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:items-stretch">
        <div className="flex h-full flex-col">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200">Compra</p>
            <h2 id="comprar-titulo" className="mt-2 text-3xl font-black text-white">Elegí tu entrada</h2>
          </div>

          <article aria-live="polite" className="mx-auto mt-7 flex w-full max-w-xl flex-1 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center shadow-xl shadow-sky-950/20 sm:p-7 lg:max-w-none">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-white">Entrada general</h3>
              <p className="mt-3 text-3xl font-black text-sky-200">Total: {total}</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300">
                Link preparado para pagar una entrada. Verificá el monto antes de confirmar.
              </p>
              <p className="mt-5 rounded-2xl border border-amber-200/30 bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">
                Verificá que el monto del link coincida con la entrada seleccionada.
              </p>
            </div>
            {isPending ? (
              <p className="mt-8 rounded-2xl bg-amber-300/15 p-3 text-sm font-semibold text-amber-100" role="status">
                Link de pago pendiente de configuración.
              </p>
            ) : (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pagar entrada general con Mercado Pago"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-center font-bold text-sky-950 transition hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-sky-200/70 sm:w-auto"
              >
                Pagar con Mercado Pago
              </a>
            )}
          </article>
        </div>

        <article className="h-full rounded-3xl border border-white/10 bg-white/[0.07] p-6 sm:p-8" aria-labelledby="tutorial-titulo">
          <h2 id="tutorial-titulo" className="text-3xl font-black text-white">¿Cómo confirmar tu compra?</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 text-slate-200">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-300 font-black text-sky-950">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-2xl border border-sky-200/30 bg-sky-300/10 p-4 font-bold leading-relaxed text-sky-100 sm:p-5">
            La compra no se considera confirmada hasta que el comprobante haya sido enviado y el pago haya sido verificado. También se validará el número de operación de Mercado Pago para evitar comprobantes duplicados o reutilizados.
          </p>
        </article>

        <div className="flex h-full items-center justify-center md:col-span-2 lg:col-span-1">
          <Image
            src="/images/ejcomprobante2.png"
            alt="Ejemplo real de comprobante de pago"
            width={1182}
            height={1330}
            className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:h-full lg:max-w-none"
            sizes="(min-width: 1024px) 24vw, (min-width: 768px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
