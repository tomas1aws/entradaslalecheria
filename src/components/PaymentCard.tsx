import { type TicketQuantity } from "@/config/event";
import { formatCurrency, getPaymentHref, getTicketTotal } from "@/config/helpers";

type PaymentCardProps = { quantity: TicketQuantity };

export function PaymentCard({ quantity }: PaymentCardProps) {
  const href = getPaymentHref(quantity);
  const isPending = href.startsWith("#pago-pendiente");
  const label = quantity === 1 ? "entrada" : "entradas";

  return (
    <article className="flex h-full flex-col rounded-3xl border border-sky-200/15 bg-slate-950/55 p-5 shadow-xl shadow-sky-950/20 transition hover:-translate-y-1 hover:border-sky-300/50">
      <h3 className="text-2xl font-black text-white">{quantity} {label}</h3>
      <p className="mt-2 text-3xl font-black text-sky-200">{formatCurrency(getTicketTotal(quantity))}</p>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">Link preparado para pagar exactamente {quantity} {label}. Revisá el monto antes de confirmar.</p>
      {isPending && <p className="mt-4 rounded-2xl bg-amber-300/15 p-3 text-sm font-semibold text-amber-100">Link de pago pendiente de configuración.</p>}
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Pagar ${quantity} ${label} con Mercado Pago`} className="mt-5 inline-flex min-h-12 items-center justify-center rounded-2xl bg-sky-400 px-5 py-3 text-center font-bold text-sky-950 transition hover:bg-sky-200 focus:outline-none focus:ring-4 focus:ring-sky-200/70">
        Pagar con Mercado Pago
      </a>
    </article>
  );
}
