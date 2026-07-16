import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-in text-center">
          <p className="mb-4 inline-flex rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
            Entradas disponibles · Compra sujeta a verificación
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            30 años después, volvemos a encontrarnos.
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-pretty text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Hay momentos que merecen volver a vivirse. La Lechería regresa para
            reunir a quienes fueron parte de aquella época en una noche única.
          </p>
          <p className="mx-auto mt-4 max-w-[700px] text-pretty text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Adquirí tu entrada de forma virtual o presencial siguiendo las
            instrucciones que encontrarás más abajo.
          </p>
          <div className="mx-auto mt-8 flex w-fit flex-col gap-4">
            <a href="#comprar" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-sky-300 px-7 py-3 font-bold text-sky-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-200/70">
              Comprar entradas
            </a>
            <a href="#enviar-comprobante" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-emerald-300 px-7 py-3 font-bold text-emerald-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-200/70">
              ¿Ya compraste?
            </a>
          </div>
        </div>
        <div className="flex min-h-80 animate-float items-center justify-center">
          <Image
            src="/images/logopng (2).png"
            alt="Logo de La Lechería"
            width={520}
            height={520}
            priority
            className="h-auto max-h-[26rem] w-full max-w-md object-contain"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
