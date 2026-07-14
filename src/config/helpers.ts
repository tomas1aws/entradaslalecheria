import { eventConfig } from "./event";

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: eventConfig.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function isPlaceholder(value: string, prefix: string): boolean {
  return value.trim() === prefix || value.trim().startsWith(`${prefix}_`);
}

export function getPaymentHref(): string {
  const link = eventConfig.paymentLinks[1];
  return isPlaceholder(link, "PAYMENT_LINK") ? "#pago-pendiente-1" : link;
}

export function getWhatsappHref(): string {
  const message = `Hola, envío mi comprobante de pago para ${eventConfig.name}.

Entrada general:
Nombre completo del asistente:`;

  const sanitizedNumber = eventConfig.whatsappNumber.replace(/\D/g, "");

  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
}
