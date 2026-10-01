export type BookingOffer = {
  id:string;
  provider:string;
  url:string;
  sourceUrl?:string;
  priceFrom?:number;
  priceCurrency?:string;
  priceCheckedAt?:string;
  notes?:string;
};

export type Activity = {
  id:number;
  title:string;
  destination:string;
  region:string;
  slug:string;
  type:"Bautismo"|"Fun Dive"|"Curso"|"Pecio"|"Fauna"|"Snorkel";
  level:"Inicial"|"Intermedio"|"Avanzado";
  duration:string;
  audience:string;
  tags:string[];
  bookingStatus:"Disponible"|"Próximamente";
  siteSlugs:string[];
  offers?:BookingOffer[];
  priceFrom?:number;
  priceCheckedAt?:string;
  priceCurrency?:string;
  provider:string;
  providerUrl:string;
  sourceUrl:string;
  rating?:number;
  reviewCount?:number;
  maxDepth?:string;
  included?:string[];
  cancellation?:string;
  meetingPoint?:string;
  minAge?:number;
  notes?:string;
};

export const activities:Activity[]=[
  {
    id:101,siteSlugs:["malgrats"],
    title:"Bautismo de buceo en Mallorca",
    destination:"Mallorca",region:"Baleares",slug:"bautismo-buceo-mallorca",
    type:"Bautismo",level:"Inicial",duration:"3–4 horas",audience:"Primera experiencia",
    tags:["Equipo incluido","Instructor","Barco","Islas Malgrats"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/santa-ponsa/bautismo-buceo-mallorca/",
    sourceUrl:"https://www.civitatis.com/es/santa-ponsa/bautismo-buceo-mallorca/",
    rating:8.8,reviewCount:20,
    included:["Recogida en hotel","Transporte en minibús y barco","Equipo de buceo completo","Instructores titulados","Seguro"],
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    minAge:9,
    notes:"Actividad en Santa Ponsa, en el entorno de la Reserva Natural de las Islas Malgrats."
  },
  {
    id:102,siteSlugs:["costa-ciudadela"],
    title:"Bautismo de buceo en la costa de Ciudadela",
    destination:"Menorca",region:"Baleares",slug:"bautismo-buceo-ciudadela",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Primera experiencia",
    tags:["Equipo incluido","Playa","Instructor","40 min de inmersión"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/ciudadela/bautismo-buceo-menorca/",
    sourceUrl:"https://www.civitatis.com/es/ciudadela/bautismo-buceo-menorca/",
    rating:9.4,reviewCount:213,maxDepth:"12 m",
    included:["Instructor en español","Equipo de buceo"],
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    meetingPoint:"Carrer des Canal 421",
    minAge:8,
    notes:"Acceso desde playa y aproximadamente 40 minutos de inmersión, según consumo de aire."
  },
  {
    id:103,siteSlugs:["las-galletas"],
    title:"Bautismo de buceo en Las Galletas",
    destination:"Tenerife",region:"Canarias",slug:"bautismo-buceo-las-galletas",
    type:"Bautismo",level:"Inicial",duration:"1 h 30 min–3 horas",audience:"Primera experiencia",
    tags:["Equipo incluido","Barco","Fotos","Diploma"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/las-galletas/bautismo-buceo-tenerife/",
    sourceUrl:"https://www.civitatis.com/es/las-galletas/bautismo-buceo-tenerife/",
    rating:9.7,reviewCount:150,maxDepth:"12 m",
    included:["Instructor en español","Equipo completo de buceo","Explicación teórica","Inmersión de 25–45 min","Fotografías","Diploma"],
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    meetingPoint:"Puerto de Las Galletas",
    minAge:10,
    notes:"Actividad desde el puerto de Las Galletas con salida en embarcación."
  },
  {
    id:104,siteSlugs:["maspalomas-buceo"],
    title:"Bautismo de buceo en Gran Canaria",
    destination:"Gran Canaria",region:"Canarias",slug:"bautismo-buceo-gran-canaria",
    type:"Bautismo",level:"Inicial",duration:"4 horas",audience:"Primera experiencia",
    tags:["Equipo incluido","Recogida","Instructor","Atlántico"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/maspalomas/bautismo-buceo-gran-canaria/",
    sourceUrl:"https://www.civitatis.com/es/maspalomas/bautismo-buceo-gran-canaria/",
    rating:9.5,reviewCount:105,
    included:["Recogida y traslado de regreso al hotel","Guía de habla española","Equipo y material de buceo","Seguro"],
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    meetingPoint:"Avenida de Italia, 2 (Playa del Inglés)",
    minAge:10,
    notes:"No requiere experiencia previa; la actividad se realiza en el sur de Gran Canaria."
  },
  {
    id:105,siteSlugs:["isla-fraile"],
    title:"Bautismo de buceo en la isla del Fraile",
    destination:"Águilas",region:"Murcia",slug:"bautismo-buceo-isla-fraile",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["Principiantes","Mediterráneo","Fauna","Isla del Fraile"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/aguilas/bautismo-buceo-isla-fraile/",
    sourceUrl:"https://www.civitatis.com/es/region-murcia/",
    priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-09-30",
    rating:10,reviewCount:3,
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    notes:"La ficha pública consultada muestra un precio desde 90 €."
  },
  {
    id:106,siteSlugs:["isla-plana"],
    title:"Bautismo de buceo en Isla Plana",
    destination:"Isla Plana",region:"Murcia",slug:"bautismo-buceo-isla-plana",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["Aguas tranquilas","Principiantes","Reserva Marina Cabo Tiñoso"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/isla-plana/bautismo-buceo-isla-plana/",
    sourceUrl:"https://www.civitatis.com/es/isla-plana/",
    priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-09-30",
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    notes:"La ficha pública consultada muestra un precio desde 100 €."
  },
  {
    id:107,siteSlugs:["las-negras"],
    title:"Bautismo de buceo en Las Negras",
    destination:"Cabo de Gata",region:"Andalucía",slug:"bautismo-buceo-las-negras",
    type:"Bautismo",level:"Inicial",duration:"Actividad de iniciación",audience:"Primera experiencia",
    tags:["Cabo de Gata","Instructor","Equipo","Hasta 12 m"],
    bookingStatus:"Disponible",provider:"Civitatis",
    providerUrl:"https://www.civitatis.com/es/negras/bautismo-buceo-las-negras/",
    sourceUrl:"https://www.civitatis.com/es/negras/bautismo-buceo-las-negras/",
    maxDepth:"12 m",
    cancellation:"Cancelación gratuita hasta 24 horas antes.",
    minAge:12,
    meetingPoint:"Calle Pescador, Las Negras",
    notes:"Actividad de iniciación con teoría previa y inmersión de hasta 12 m."
  },

  {
    id:112,siteSlugs:["cala-montgo"],
    title:"Curso PADI Open Water Diver en L'Escala",
    destination:"L'Escala",region:"Costa Brava",slug:"curso-padi-open-water-diver-lescala",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas que quieren obtener la certificación PADI Open Water Diver",
    tags:["PADI","Open Water","L'Escala","Costa Brava","Curso"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
    offers:[{
      id:"yumping-o18401",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401"
    }],
    notes:"Oferta específica de Yumping para L'Escala. Mantener el precio pendiente hasta verificar el importe de esta oferta concreta."
  },

  {
    id:118,siteSlugs:["playa-raco-calpe"],
    title:"Curso PADI Discover Scuba Diving Playa del Racó",
    destination:"Calpe",region:"Costa Blanca",slug:"padi-discover-scuba-diving-playa-del-raco-calpe-65789",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["PADI","Discover Scuba Diving","Playa del Racó","Calpe","Instructor","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
    offers:[{
      id:"yumping-o65789",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
      priceFrom:89,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    maxDepth:"6 m",
    included:["Monitor","Explicaciones previas","Clase teórica","Material necesario para la inmersión","Seguro"],
    minAge:10,
    notes:"Actividad de aproximadamente 2 horas en Playa del Racó, con 35–40 minutos bajo el agua. Yumping indica capacidad de 1–20 personas y disponibilidad en calendario en tiempo real."
  },

  {
    id:117,siteSlugs:["playa-chica"],
    title:"Curso Scuba Diver SSI en Lanzarote",
    destination:"Lanzarote",region:"Canarias",slug:"curso-scuba-diver-ssi-lanzarote-47174",
    type:"Curso",level:"Inicial",duration:"2 días · 14 horas",audience:"Personas con poco tiempo que quieren obtener la certificación SSI Scuba Diver",
    tags:["SSI","Scuba Diver","Lanzarote","Puerto del Carmen","Equipo incluido","Certificación"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
    offers:[{
      id:"yumping-o47174",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
      priceFrom:295,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    included:["Maestros de buceo expertos","Equipo para bucear","Material para las clases","Certificación SSI","Seguro necesario"],
    notes:"Oferta de Yumping en Puerto del Carmen. El curso dura 14 horas repartidas en 1 día y 1 mañana; capacidad indicada: 1–4 personas."
  },

  {
    id:116,siteSlugs:["arrecife-sirenas"],
    title:"Inmersión de buceo nocturna en Cabo de Gata",
    destination:"Cabo de Gata",region:"Andalucía",slug:"inmersion-buceo-nocturna-cabo-de-gata-68414",
    type:"Fun Dive",level:"Intermedio",duration:"40–60 min",audience:"Buceadores con licencia Open Water Diver",
    tags:["Nocturna","Cabo de Gata","Reserva marina","Barca","Divemaster"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414",
    offers:[{
      id:"yumping-o68414",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414",
      priceFrom:90,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01",
      notes:"Yumping muestra un precio desde 90 €. Mínimo 5 personas; se requiere licencia y seguro médico. El foco no está incluido."
    }],
    included:["Instructores profesionales","Barca hasta el punto de inmersión"],
    maxDepth:undefined,
    cancellation:"Las reservas con fecha fija no son reembolsables salvo mal tiempo o incidencias del proveedor.",
    notes:"Salida nocturna a partir de las 20:00 en la reserva marina de Cabo de Gata. Yumping indica calendario con disponibilidad en tiempo real."
  },

  {
    id:115,siteSlugs:["ametlla-mar"],
    title:"Bautizo de buceo en L'Ametlla de Mar",
    destination:"L'Ametlla de Mar",region:"Costa Daurada",slug:"bautizo-buceo-l-ametlla-de-mar-64566",
    type:"Bautismo",level:"Inicial",duration:"1 h 30 min",audience:"Primera experiencia",
    tags:["Bautismo","L'Ametlla de Mar","Equipo incluido","Instructor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566",
    offers:[{
      id:"yumping-o64566",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566",
      priceFrom:59,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    included:["Instructor","Equipo de buceo"],
    notes:"Actividad de iniciación de 90 minutos en L'Ametlla de Mar."
  },

  {
    id:114,siteSlugs:["punta-marroqui-tarifa"],
    title:"2 inmersiones de buceo + botella y plomos en Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"2-inmersiones-buceo-botella-plomos-tarifa-53872",
    type:"Fun Dive",level:"Intermedio",duration:"2 inmersiones de 30–45 min aprox.",audience:"Buceadores titulados",
    tags:["2 inmersiones","Botella","Plomos","Transporte","Guía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
    offers:[{
      id:"yumping-o53872",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
      priceFrom:60,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    included:["Transporte hasta el lugar de la inmersión","2 botellas","Plomos","Guía de buceo","Equipo de buceo"],
    cancellation:"Las reservas con fecha fija no son reembolsables salvo mal tiempo o incidencias del proveedor.",
    notes:"Se requiere título de buceo. Las dos inmersiones pueden hacerse el mismo día o en fechas distintas según disponibilidad. Yumping indica un grupo mínimo de 3 personas."
  },

  {
    id:113,siteSlugs:["punta-marroqui-tarifa"],
    title:"Salida de snorkel en Playa de Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"salida-snorkel-playa-tarifa-53881",
    type:"Snorkel",level:"Inicial",duration:"1 h 30 min",audience:"Personas que quieren descubrir el fondo marino sin buceo con botella",
    tags:["Snorkel","Tarifa","Material incluido","Fotos y vídeos"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
    offers:[{
      id:"yumping-o53881",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
      priceFrom:40,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01",
      notes:"Precio mostrado por Yumping: desde 40 € por persona. Grupos mínimos de 5 personas."
    }],
    included:["Monitor profesional","Charla explicativa","Material de snorkel","Fotos y vídeos de recuerdo"],
    minAge:undefined,
    notes:"Salida de snorkel de 1 h 30 min en Playa de Tarifa. Yumping indica un mínimo de 5 personas por grupo."
  },

  {
    id:111,siteSlugs:["punta-marroqui-tarifa"],
    title:"Bautismo de buceo de mar en Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"bautismo-buceo-mar-tarifa-19193",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["Bautismo","Mar","Tarifa","Instructor PADI","Equipo incluido"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
    offers:[{
      id:"yumping-o19193",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
      priceFrom:65,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01",
      notes:"La ficha actual muestra una opción desde 65 €; también aparece una variante con fotos desde 85 €."
    }],
    maxDepth:"5–10 m",
    included:["Clase teórica","Inmersión en mar","Equipo y material de buceo","Instructor"],
    minAge:10
  },

  {
    id:110,siteSlugs:["tabarca"],
    title:"Curso Open Water Diver PADI en la isla de Tabarca",
    destination:"Isla de Tabarca",region:"Alicante",slug:"curso-open-water-diver-padi-tabarca",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas que quieren obtener la certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Tabarca","Alicante","Curso","Transporte incluido"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
    offers:[{
      id:"yumping-o26318",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
      priceFrom:449,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }]
  },

  {
    id:109,siteSlugs:["tabarca"],
    title:"Curso PADI Open Water Diver en Jávea",
    destination:"Jávea",region:"Costa Blanca",slug:"curso-padi-open-water-javea",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas que quieren obtener la certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Jávea","Costa Blanca","Curso"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
    offers:[{
      id:"yumping-o14121",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
      priceFrom:425,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }]
  },

];

export const activityTypes=["Bautismo","Fun Dive","Curso","Pecio","Fauna","Snorkel"];
export const activityRegions=Array.from(new Set(activities.map(a=>a.region))).sort();
