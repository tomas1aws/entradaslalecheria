import Image from "next/image";

const steps = [
  "Elegí la cantidad de entradas.",
  "Realizá el pago mediante Mercado Pago.",
  "Guardá o capturá el comprobante.",
  "Enviá el comprobante junto con el nombre de quien realizó el pago, la cantidad de entradas abonadas y los nombres completos de todas las personas que asistirán.",
  "Esperá la confirmación del organizador.",
] as const;

export function TutorialSection() {
  return (
    <section className="px-5 py-12 sm:px-8 lg:px-12" aria-labelledby="tutorial-titulo">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 sm:p-8">
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
        </div>
        <div className="flex min-h-96 items-center justify-center">
          <Image
            src="/images/ejemplocomprobante.png"
            alt="Ejemplo real de comprobante de pago"
            width={1182}
            height={1330}
            className="h-auto w-full object-contain"
            sizes="(min-width: 1024px) 38vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
