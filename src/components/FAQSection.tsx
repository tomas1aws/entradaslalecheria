const faqs = [
  ["¿Puedo comprar más de una entrada?", "Sí. Podés elegir entre 1 y 5 entradas con el selector de cantidad y pagar el total correspondiente."],
  ["¿Tengo que enviar los nombres de todos los asistentes?", "Sí. Incluí los nombres completos de todas las personas que asistirán para facilitar la verificación."],
  ["¿Cuándo queda confirmada la compra?", "La compra queda confirmada cuando el organizador recibe el comprobante y verifica el pago."],
  ["¿Qué hago si pagué pero olvidé enviar el comprobante?", "Envialo cuanto antes por cualquiera de los canales disponibles junto con el nombre de quien pagó, la cantidad de entradas y los nombres completos de los asistentes."],
  ["¿Puedo enviar el comprobante desde otro teléfono?", "Sí. Podés enviarlo por cualquiera de los canales disponibles; el medio utilizado ya permite identificar el contacto. Asegurate de indicar el nombre de quien realizó el pago, la cantidad de entradas y los nombres completos de los asistentes."],
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
