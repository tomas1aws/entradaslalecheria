import { eventConfig } from "@/config/event";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-slate-300 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-black text-white">{eventConfig.name}</p>
          <p>{eventConfig.date} · {eventConfig.location}</p>
        </div>
        <p className="text-sm sm:text-right">30 años después, volvemos a encontrarnos.</p>
      </div>
    </footer>
  );
}
