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

  if (isPlaceholder(eventConfig.whatsappNumber, "WHATSAPP_NUMBER")) {
    return "#whatsapp-pendiente";
  }

  return `https://wa.me/${eventConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getMailtoHref(): string {
  const subject = `Comprobante ${eventConfig.name}`;
  const body = `Hola, envío mi comprobante de pago para ${eventConfig.name}.

Entrada general:
Nombre completo del asistente:`;

  if (isPlaceholder(eventConfig.contactEmail, "CONTACT_EMAIL")) {
    return "#correo-pendiente";
  }

  return `mailto:${eventConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
