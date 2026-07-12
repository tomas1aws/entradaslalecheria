export const eventConfig = {
  name: "La Lechería",
  date: "29 de agosto",
  time: "22:30",
  location: "Club San Fernando",
  ticketPrice: 40000,
  currency: "ARS",
  paymentLinks: {
    1: "PAYMENT_LINK_1",
    2: "PAYMENT_LINK_2",
    3: "PAYMENT_LINK_3",
    4: "PAYMENT_LINK_4",
    5: "PAYMENT_LINK_5",
  },
  whatsappNumber: "WHATSAPP_NUMBER",
  contactEmail: "CONTACT_EMAIL",
} as const;

export type TicketQuantity = keyof typeof eventConfig.paymentLinks;

export const ticketQuantities = [1, 2, 3, 4, 5] as const satisfies readonly TicketQuantity[];
