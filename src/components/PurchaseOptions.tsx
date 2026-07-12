import { ticketQuantities } from "@/config/event";
import { PaymentCard } from "./PaymentCard";

export function PurchaseOptions() {
  return (
    <section id="comprar" className="px-5 py-12 sm:px-8 lg:px-12" aria-labelledby="comprar-titulo">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-200">Compra</p>
            <h2 id="comprar-titulo" className="mt-2 text-3xl font-black text-white">Elegí tus entradas</h2>
          </div>
          <p className="rounded-2xl border border-amber-200/30 bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">
            Verificá que el monto del link coincida con la cantidad de entradas seleccionada.
          </p>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {ticketQuantities.map((quantity) => <PaymentCard key={quantity} quantity={quantity} />)}
        </div>
      </div>
    </section>
  );
}
