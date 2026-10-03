# Centros, actividades y canales de reserva

La ficha `/centros/[slug]` permite consultar y reservar las actividades del centro. Cada actividad enlaza de vuelta a su organizador. El catálogo `/centros` permite buscar por nombre y localidad; el mapa y la navegación dan acceso a los centros. Las coordenadas del centro son opcionales: solo se dibuja un marcador cuando existen coordenadas documentadas. Las fichas se incluyen en el sitemap.

## Datos

- `data/centers.ts`: identidad estable del centro, servicios, ubicación, puntos donde opera, fuentes y fecha de comprobación. Las valoraciones incluyen escala, recuento y fuente; no se reutiliza la valoración de una actividad como valoración del centro.
- `centerActivityLinks`: actividad por slug → centro por ID, con fuente y fecha. Una coincidencia de localidad o tipo de experiencia no acredita el organizador.
- `Activity.offers`: uno o varios canales de reserva de la misma experiencia. Conservar los IDs y URLs concretos de cada proveedor. No fusionar experiencias de distintos centros ni modalidades distintas por tener el mismo nombre.
- `BookingOffer.status`: `paused` oculta una oferta retirada. La disponibilidad por fecha se confirma en el proveedor; tener una URL no prueba plazas disponibles.
- Si no hay oferta activa, la ficha muestra información y permite visitar la web oficial cuando esté documentada.

Los enlaces de Yumping mantienen el identificador de afiliado existente; Civitatis utiliza `NEXT_PUBLIC_CIVITATIS_AID` cuando está configurado. Sin ese valor no debe darse por confirmada la atribución de comisión en Civitatis. Esta revisión comprueba la construcción de URLs, no la atribución comercial en los paneles externos.

## Estado de la migración

Se conservan las 471 actividades del catálogo. Se eliminan 390 posiciones vacías producidas por dobles comas; no se eliminan ofertas.

Primera relación documentada: Buceo Estepona organiza las ofertas Yumping 61760 y 40981. Ambas páginas identifican al organizador en «Ofrecido por», consultadas el 3 de octubre de 2026. No se han inventado valoración, dirección exacta, web oficial ni puntos de inmersión. Las otras 469 actividades continúan accesibles y reservables, pero requieren confirmar el centro organizador antes de aparecer en una ficha de centro.

La diferencia previa de aproximadamente 350 registros frente a 200 en Vercel todavía requiere comparar el despliegue publicado y sus filtros. Corregir las posiciones vacías no demuestra que esa diferencia esté resuelta.

## Verificación

`npm run test:centers` comprueba integridad del catálogo, relaciones en ambos sentidos, ausencia de atribución por localidad, múltiples proveedores, parámetros afiliados, conservación del destino exacto y exclusión de URLs inválidas/ofertas pausadas.

`npm run build` comprueba TypeScript y genera las rutas. Antes de producción debe revisarse visualmente el flujo mapa → centro → actividad → proveedor y el retorno al centro, también desde móvil.
