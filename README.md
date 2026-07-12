# La Lechería | Entradas

Landing estática para vender entradas del evento **La Lechería** mediante links fijos de pago de Mercado Pago. No incluye backend, base de datos, webhooks, login ni confirmación automática: la compra se verifica manualmente luego de recibir el comprobante.

## Stack

- Next.js con App Router
- TypeScript estricto
- Tailwind CSS
- ESLint
- Sitio estático listo para Vercel

## Instalación

```bash
npm install
```

## Ejecución local

```bash
npm run dev
```

Abrí `http://localhost:3000` en el navegador.

## Checks de calidad

```bash
npm run lint
npm run build
```

## Deploy en Vercel

1. Subí este repositorio a GitHub, GitLab o Bitbucket.
2. En Vercel, elegí **Add New Project**.
3. Importá el repositorio.
4. Vercel detecta Next.js automáticamente.
5. No hace falta configurar variables de entorno.
6. Ejecutá el deploy.

## Dónde modificar los datos del evento

Todos los datos modificables están centralizados en:

```txt
src/config/event.ts
```

Ahí se cambian nombre, fecha, horario, lugar, precio unitario, links de pago, WhatsApp y correo.

## Cómo cambiar los links de Mercado Pago

En `src/config/event.ts`, reemplazá cada placeholder por el link fijo real correspondiente al importe correcto:

```ts
paymentLinks: {
  1: "PAYMENT_LINK_1",
  2: "PAYMENT_LINK_2",
  3: "PAYMENT_LINK_3",
  4: "PAYMENT_LINK_4",
  5: "PAYMENT_LINK_5",
}
```

Importes esperados:

- 1 entrada: $40.000 ARS
- 2 entradas: $80.000 ARS
- 3 entradas: $120.000 ARS
- 4 entradas: $160.000 ARS
- 5 entradas: $200.000 ARS

## Cómo cambiar el WhatsApp

En `src/config/event.ts`, reemplazá:

```ts
whatsappNumber: "WHATSAPP_NUMBER"
```

Usá el formato internacional sin `+`, espacios ni guiones. Ejemplo para Argentina: `549XXXXXXXXXX`.

## Cómo cambiar el correo

En `src/config/event.ts`, reemplazá:

```ts
contactEmail: "CONTACT_EMAIL"
```

por el correo real que recibirá los comprobantes.

## Imágenes futuras

La landing funciona con placeholders visuales aunque las imágenes todavía no existan.

Cuando estén listas, colocá los archivos con estos nombres:

```txt
public/images/evento-principal.jpg
public/images/comprobante-ejemplo.jpg
```

- `evento-principal.jpg`: flyer o imagen principal del evento.
- `comprobante-ejemplo.jpg`: ejemplo visual de comprobante para la sección tutorial.

Actualmente se muestran los placeholders “Imagen del evento próximamente” y “Ejemplo de comprobante”.

## Placeholders pendientes

Antes de publicar la landing final, reemplazar:

- `PAYMENT_LINK_1`
- `PAYMENT_LINK_2`
- `PAYMENT_LINK_3`
- `PAYMENT_LINK_4`
- `PAYMENT_LINK_5`
- `WHATSAPP_NUMBER`
- `CONTACT_EMAIL`
- `public/images/evento-principal.jpg` cuando exista el flyer real
- `public/images/comprobante-ejemplo.jpg` cuando exista el ejemplo real

## Notas importantes

- Los botones de pago abren en pestaña nueva con `target="_blank"` y `rel="noopener noreferrer"`.
- Si un link o contacto sigue como placeholder, la interfaz muestra un aviso claro y no rompe la aplicación.
- La compra queda sujeta a verificación manual del organizador.
