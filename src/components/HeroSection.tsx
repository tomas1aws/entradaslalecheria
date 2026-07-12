import Image from "next/image";

import { eventConfig } from "@/config/event";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.18),transparent_30%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="animate-fade-in">
          <p className="mb-4 inline-flex rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
            Entradas disponibles · Compra sujeta a verificación
          </p>
          <h1 className="text-balance text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            {eventConfig.name}
          </h1>
          <a href="#comprar" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-sky-300 px-7 py-3 font-bold text-sky-950 shadow-lg shadow-sky-950/30 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-sky-200/70">
            Comprar entradas
          </a>
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
