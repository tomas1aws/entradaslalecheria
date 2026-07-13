import { eventConfig } from "@/config/event";
import { formatCurrency, getPaymentHref } from "@/config/helpers";

export function PurchaseOptions() {
  const href = getPaymentHref();
  const isPending = href.startsWith("#pago-pendiente");
  const total = formatCurrency(eventConfig.ticketPrice);

  return (
    <section id="comprar" className="px-5 py-10 sm:px-8 lg:px-12" aria-labelledby="comprar-titulo">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200">Compra</p>
          <h2 id="comprar-titulo" className="mt-2 text-3xl font-black text-white">Elegí tu entrada</h2>
        </div>

        <article aria-live="polite" className="mx-auto mt-7 max-w-xl rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center shadow-xl shadow-sky-950/20 sm:p-7">
          <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-white">Entrada general</h3>
          <p className="mt-3 text-3xl font-black text-sky-200">Total: {total}</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-300">
            Link preparado para pagar una entrada. Verificá el monto antes de confirmar.
          </p>
          <p className="mt-5 rounded-2xl border border-amber-200/30 bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">
            Verificá que el monto del link coincida con la entrada seleccionada.
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
              aria-label="Pagar entrada general con Mercado Pago"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-center font-bold text-sky-950 transition hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-sky-200/70 sm:w-auto"
            >
              Pagar con Mercado Pago
            </a>
          )}
        </article>
      </div>
    </section>
  );
}
