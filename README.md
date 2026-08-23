# La Lechería — landing del evento

Landing informativa de **La Lechería**. La página comunica que las entradas están agotadas y conserva la información útil para quienes asistirán al reencuentro.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## Validaciones

```bash
npm run lint
npm run build
```

## Configuración del evento

Los datos compartidos por la landing se encuentran en `src/config/event.ts`:

- nombre;
- fecha;
- hora;
- lugar.

## Estructura principal

- `src/components/HeroSection.tsx`: presentación y logo del evento.
- `src/components/SoldOutSection.tsx`: mensaje destacado de entradas agotadas.
- `src/components/EventDetails.tsx`: fecha, hora y lugar.
- `src/components/FAQSection.tsx`: preguntas frecuentes vigentes.
- `public/images/logopng (2).png`: logo de La Lechería.
