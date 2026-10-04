# Escuelas, experiencias y reservas

Se conservan las 471 actividades. Revisión del 4 de octubre de 2026: 464 URLs de Yumping comprobadas, 445 ofertas con organizador identificado mediante «Ofrecido por» y 172 organizadores agrupados por ID estable del proveedor. 18 ofertas respondieron 410 y sus reservas se pausan; los fallos transitorios permanecen pendientes, no se consideran retiradas.

Las localidades de las fichas corresponden a las actividades ofrecidas, no a direcciones físicas comprobadas. No se inventan coordenadas, valoraciones ni puntos donde opera una escuela. La relación actividad → escuela → otras actividades es bidireccional. Los proveedores y los parámetros afiliados se mantienen.

Los textos de actividad son resúmenes propios y datos estructurados contrastados; no reproducen íntegramente descripciones ajenas. Excepciones y suplementos requieren revisión del desglose y confirmación en el proveedor. Disponibilidad y pago se confirman fuera de Atlas.

## Fauna

Primera selección: cinco fichas con fuentes biológicas e imágenes de Commons con autor y licencia. Las asociaciones geográficas incorporan fuente, precisión (zona/punto) y limitaciones. Los rangos de profundidad biológica no son profundidad recomendada ni rango habitual de avistamiento. No se propagan especies desde una comunidad a sus puntos. Aún falta ampliar a decenas/centenares, completar temporadas y frecuencias, y documentar más asociaciones.

## Pendiente

Importar nuevas ofertas de Yumping después de identificar las que faltan, conservando deduplicación global por oID/URL/slug/ID. Completar fichas editoriales de actividad con condiciones estructuradas. Netlify requiere acceso de cuenta para retirar el sitio. Cloudflare Pages se deja para la fase futura solicitada.

## Comprobaciones

`npm run test:data`: carga efectiva de todos los lotes, IDs y slugs únicos, oferta Yumping única entre actividades, enlaces afiliados, ofertas pausadas, centros y relaciones con fuente, filtros geográficos y procedencia de fauna.

`npm run build`: TypeScript y generación de rutas. La CI ejecuta ambos comandos.
