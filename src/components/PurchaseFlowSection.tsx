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
      <div className="mx-auto grid max-w-[1600px] items-start gap-8 lg:grid-cols-4 lg:items-stretch">
        <div className="flex h-full flex-col lg:col-span-2">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200">Compra</p>
            <h2 id="comprar-titulo" className="mt-2 text-3xl font-black text-white">Elegí el método</h2>
          </div>

          <article className="mt-7 flex-1 rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center shadow-xl shadow-sky-950/20 sm:p-7">
            <section aria-labelledby="pago-virtual-titulo" aria-live="polite" className="mx-auto max-w-xl">
              <div className="space-y-4">
                <div>
                  <h3 id="pago-virtual-titulo" className="text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl">Pago virtual</h3>
                  <p className="mt-3 text-3xl font-black text-sky-200">Total: {total}</p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300">
                    Realizá el pago mediante Mercado Pago utilizando el link correspondiente. Luego enviá el comprobante por WhatsApp para validar tu compra.
                  </p>
                </div>
                <p className="rounded-2xl border border-amber-200/30 bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">
                  Verificá que el monto del link coincida con la entrada seleccionada.
                </p>
              </div>
              <div className="pt-4">
                {isPending ? (
                  <p className="rounded-2xl bg-amber-300/15 p-3 text-sm font-semibold text-amber-100" role="status">
                    Link de pago pendiente de configuración.
                  </p>
                ) : (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pagar entrada con Mercado Pago"
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-center font-bold text-sky-950 transition hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-sky-200/70"
                  >
                    Pagar con Mercado Pago
                  </a>
                )}
              </div>
            </section>

            <hr className="my-8 border-0 border-t border-white/15 sm:my-10" />

            <section aria-labelledby="pago-presencial-titulo" className="mx-auto max-w-xl">
              <div className="space-y-5">
                <div>
                  <h3 id="pago-presencial-titulo" className="text-xl font-black uppercase tracking-[0.08em] text-white sm:text-2xl">Pago presencial</h3>
                  <p className="mt-3 text-3xl font-black text-sky-200">Total: {total}</p>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300">
                    Podés adquirir tu entrada personalmente en el Quincho de Tenis antes del evento.
                  </p>
                </div>
                <div className="text-sm text-sky-100">
                  <p className="font-semibold">Punto de venta físico</p>
                  <p className="mt-1 text-lg font-black text-white">Quincho de Tenis</p>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex min-h-12 w-full items-center justify-center rounded-2xl bg-white/10 px-5 py-3 text-center font-bold text-slate-200" aria-disabled="true">
                  Comprar en el Quincho de Tenis
                </div>
              </div>
            </section>
          </article>
        </div>

        <article className="flex h-full flex-col box-border rounded-3xl border border-white/10 bg-white/[0.07] p-6 sm:p-8" aria-labelledby="tutorial-titulo">
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

        <div className="flex h-auto w-full items-center justify-center overflow-hidden lg:h-full">
          <Image
            src="/images/ejcomprobante2.png"
            alt="Ejemplo real de comprobante de pago"
            width={1182}
            height={1330}
            className="h-auto w-full max-w-sm object-contain sm:max-w-md lg:h-full lg:w-auto lg:max-w-full"
            sizes="(min-width: 1024px) 23vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
