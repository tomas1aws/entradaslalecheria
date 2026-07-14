import { eventConfig } from "@/config/event";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-slate-300 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-black text-white">{eventConfig.name}</p>
          <p>{eventConfig.date} · {eventConfig.location}</p>
        </div>
        <div className="text-sm sm:text-right">
          <p>Canal oficial: WhatsApp {eventConfig.whatsappNumber}.</p>
          <p>Compra sujeta a verificación del organizador.</p>
        </div>
      </div>
    </footer>
  );
}
