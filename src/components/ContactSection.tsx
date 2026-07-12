import { eventConfig } from "@/config/event";
import { getMailtoHref, getWhatsappHref, isPlaceholder } from "@/config/helpers";

export function ContactSection() {
  const whatsappPending = isPlaceholder(eventConfig.whatsappNumber, "WHATSAPP_NUMBER");
  const emailPending = isPlaceholder(eventConfig.contactEmail, "CONTACT_EMAIL");

  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12" aria-labelledby="contacto-titulo">
      <div className="mx-auto max-w-6xl rounded-3xl border border-sky-200/20 bg-sky-950/70 p-6 sm:p-8">
        <h2 id="contacto-titulo" className="text-3xl font-black text-white">Enviar comprobante</h2>
        <p className="mt-3 max-w-3xl text-slate-200">Después de pagar, enviá el comprobante con los datos solicitados para que el organizador pueda verificar tu compra.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href={getWhatsappHref()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-emerald-300 px-5 py-3 text-center font-black text-emerald-950 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-200/70">Enviar comprobante por WhatsApp</a>
          <a href={getMailtoHref()} className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-sky-300 px-5 py-3 text-center font-black text-sky-950 transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-200/70">Enviar comprobante por correo</a>
        </div>
        {(whatsappPending || emailPending) && (
          <div className="mt-5 rounded-2xl bg-amber-300/10 p-4 text-sm font-semibold text-amber-100">
            {whatsappPending && <p>El contacto de WhatsApp todavía no fue configurado.</p>}
            {emailPending && <p>El correo de contacto todavía no fue configurado.</p>}
          </div>
        )}
      </div>
    </section>
  );
}
