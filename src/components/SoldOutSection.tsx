export function SoldOutSection() {
  return (
    <section className="px-5 py-8 sm:px-8 sm:py-10 lg:px-12" aria-labelledby="sold-out-title">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-sky-300/50 bg-gradient-to-br from-sky-950/90 via-blue-950/80 to-slate-950 p-7 text-center shadow-2xl shadow-sky-950/40 sm:p-10 lg:p-12">
        <div className="absolute left-8 top-7 size-2 rounded-full bg-sky-300/70" aria-hidden="true" />
        <div className="absolute right-10 top-12 size-1.5 rounded-full bg-blue-300/70" aria-hidden="true" />
        <div className="absolute bottom-9 left-[18%] size-1 rounded-full bg-white/60" aria-hidden="true" />
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-sky-200">Gracias por ser parte</p>
        <h1 id="sold-out-title" className="mt-4 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
          ¡ENTRADAS AGOTADAS!
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-200 sm:text-xl">
          La respuesta superó todas nuestras expectativas. Gracias a todos los que van a ser parte de este reencuentro.
        </p>
        <p className="mt-6 text-xl font-black text-sky-200 sm:text-2xl">Ahora sí: nos vemos el 29 de agosto.</p>
      </div>
    </section>
  );
}
