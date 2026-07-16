import { eventConfig } from "@/config/event";
import { getWhatsappHref } from "@/config/helpers";

export function ContactSection() {
  return (
    <section id="enviar-comprobante" className="px-5 py-12 sm:px-8 lg:px-12" aria-labelledby="contacto-titulo">
      <div className="mx-auto max-w-6xl rounded-3xl border border-sky-200/20 bg-sky-950/70 p-6 sm:p-8">
        <h2 id="contacto-titulo" className="text-3xl font-black text-white">Enviar comprobante</h2>
        <p className="mt-3 max-w-3xl text-slate-200">Después de pagar, enviá el comprobante con los datos solicitados para que el organizador pueda verificar tu compra.</p>
        <div className="mt-6 flex justify-center">
          <a href={getWhatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 w-full max-w-xl items-center justify-center rounded-2xl bg-emerald-300 px-5 py-3 text-center font-black text-emerald-950 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-200/70 sm:text-lg">Enviar comprobante por WhatsApp</a>
        </div>
        <div className="mt-5 rounded-2xl bg-emerald-300/10 p-4 text-center text-sm font-semibold text-emerald-100 sm:text-base">
          <p>Enviá el comprobante únicamente por WhatsApp al número:</p>
          <p className="mt-1 text-lg font-black text-white">{eventConfig.whatsappNumber}</p>
        </div>
      </div>
    </section>
  );
}
