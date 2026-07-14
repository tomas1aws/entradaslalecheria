const faqs = [
  ["¿Tengo que enviar el nombre del asistente?", "Sí. Incluí el nombre completo de la persona que asistirá para facilitar la verificación."],
  ["¿Cuándo queda confirmada la compra?", "La compra queda confirmada cuando el organizador recibe el comprobante y verifica el pago."],
  ["¿Qué hago si pagué pero olvidé enviar el comprobante?", "Envialo cuanto antes por WhatsApp junto con el nombre completo del asistente."],
] as const;

export function FAQSection() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12" aria-labelledby="faq-titulo">
      <div className="mx-auto max-w-4xl">
        <h2 id="faq-titulo" className="text-3xl font-black text-white">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-white/10 bg-white/[0.07] p-5">
              <summary className="cursor-pointer list-none font-bold text-white focus:outline-none group-open:text-sky-200">{question}</summary>
              <p className="mt-3 leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
