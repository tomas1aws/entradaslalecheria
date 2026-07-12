import { eventConfig } from "@/config/event";
const details = [
  ["Fecha", eventConfig.date],
  ["Hora", eventConfig.time],
  ["Lugar", eventConfig.location],
] as const;

export function EventDetails() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12" aria-labelledby="info-evento">
      <div className="mx-auto max-w-6xl">
        <h2 id="info-evento" className="text-3xl font-bold text-white">Información del evento</h2>
        <div className="mt-6 grid justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {details.map(([label, value]) => (
            <article key={label} className="flex min-h-32 w-full flex-col items-center justify-center rounded-3xl border border-white/10 bg-white/[0.07] p-5 text-center backdrop-blur transition hover:border-sky-300/40">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-200">{label}</p>
              <p className="mt-3 max-w-full break-words text-2xl font-bold text-white">{value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
