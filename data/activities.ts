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
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
    offers:[{
      id:"yumping-o18401",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
      priceFrom:400,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    maxDepth:"18 m",
    included:["Formación PADI","Inmersiones","Equipo"],
    notes:"Yumping muestra el curso PADI Open Water Diver en Estartit/L'Escala desde 400 €."
  },

  {
    id:121,siteSlugs:["playa-chica"],
    title:"Bautismo de buceo en Arrecife",
    destination:"Arrecife",region:"Canarias",slug:"bautismo-buceo-arrecife-60308",
    type:"Bautismo",level:"Inicial",duration:"3 h 30 min (30 min de inmersión)",audience:"Primera experiencia",
    tags:["Bautismo","Arrecife","Playa Chica","Equipo incluido","Instructor","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308",
    offers:[{
      id:"yumping-o60308",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308",
      priceFrom:75,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    included:["Equipo de buceo autónomo","Seguro de buceo","Instructor"],
    minAge:undefined,
    notes:"La actividad dura aproximadamente 3 h 30 min, con 30 minutos de inmersión en Playa Chica. Yumping indica capacidad de 1–5 personas y encuentro a las 9:30."
  },

  {
    id:120,siteSlugs:["playa-chica"],
    title:"Inmersión de buceo en Lanzarote",
    destination:"Lanzarote",region:"Canarias",slug:"inmersion-buceo-lanzarote-19796",
    type:"Fun Dive",level:"Intermedio",duration:"Según el punto de inmersión",audience:"Buceadores con titulación Open Water Diver o superior",
    tags:["Inmersión","Lanzarote","Open Water Diver","Instructor","Barco","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
    offers:[{
      id:"yumping-o19796",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
      priceFrom:40,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01",
      notes:"Yumping muestra desde 40 € por persona. El alquiler de material no está incluido; la actividad incluye instructor, equipo necesario indicado en la oferta, seguro de accidentes y salida en barco."
    }],
    included:["Instructor","Equipo de buceo indicado en la oferta","Seguro de accidentes","Salida en barco"],
    notes:"La oferta se realiza en distintos puntos de la costa de Lanzarote y requiere titulación Open Water Diver o superior."
  },

  {
    id:119,siteSlugs:["playa-raco-calpe"],
    title:"PADI Discover Scuba Diving desde playa en Calpe",
    destination:"Calpe",region:"Costa Blanca",slug:"padi-discover-scuba-diving-playa-calpe-1232",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["PADI","Discover Scuba Diving","Calpe","Playa","Instructor","Seguro RC"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
    offers:[{
      id:"yumping-o1232",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
      priceFrom:75,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }],
    maxDepth:"6–8 m",
    included:["Material para la inmersión","Instructor","Curso de teoría inicial","Seguro RC"],
    minAge:10,
    notes:"Actividad de 2 horas, con aproximadamente 30–45 minutos bajo el agua. Yumping indica capacidad de 1–100 personas y calendario con disponibilidad en tiempo real."
  },

  {
    id:118,siteSlugs:["playa-raco-calpe"],
    title:"Curso PADI Discover Scuba Diving Playa del Racó",
    destination:"Calpe",region:"Costa Blanca",slug:"padi-discover-scuba-diving-playa-del-raco-calpe-65789",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["PADI","Discover Scuba Diving","Playa del Racó","Calpe","Instructor","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
    offers:[{
      id:"yumping-o65789",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
    offers:[{
      id:"yumping-o47174",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414",
    offers:[{
      id:"yumping-o68414",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566",
    offers:[{
      id:"yumping-o64566",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
    offers:[{
      id:"yumping-o53872",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
    offers:[{
      id:"yumping-o53881",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
    offers:[{
      id:"yumping-o19193",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
    offers:[{
      id:"yumping-o26318",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
    offers:[{
      id:"yumping-o14121",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
      sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
      priceFrom:425,
      priceCurrency:"EUR",
      priceCheckedAt:"2026-10-01"
    }]
  },


  {
    id:122,siteSlugs:["costa-teguise"],
    title:"Bautismo de buceo con 1 inmersión en Lanzarote",
    destination:"Costa Teguise",region:"Canarias",slug:"bautismo-buceo-1-inmersion-lanzarote-38911",
    type:"Bautismo",level:"Inicial",duration:"2 horas · 45 min en el agua",audience:"Primera experiencia",
    tags:["Discover Scuba","1 inmersión","Costa Teguise","Equipo incluido","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-con-1-inmersion-en-lanzarote--o38911",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-con-1-inmersion-en-lanzarote--o38911",
    offers:[{id:"yumping-o38911",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-con-1-inmersion-en-lanzarote--o38911",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-con-1-inmersion-en-lanzarote--o38911",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"6 m",minAge:10,included:["Equipo completo","Briefing","Seguro"],
    notes:"Yumping indica 2 horas de actividad, con unos 45 min en el agua, y descenso hasta 6 m."
  },

  {
    id:123,siteSlugs:["costa-teguise"],
    title:"Curso Open Water Diver PADI en Lanzarote 3 días",
    destination:"Costa Teguise",region:"Canarias",slug:"curso-open-water-diver-padi-lanzarote-38944",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas que buscan certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Costa Teguise","3 días","Transporte","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-open-water-diver-padi-en-lanzarote-3-dias--o38944",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-open-water-diver-padi-en-lanzarote-3-dias--o38944",
    offers:[{id:"yumping-o38944",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-open-water-diver-padi-en-lanzarote-3-dias--o38944",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-open-water-diver-padi-en-lanzarote-3-dias--o38944",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Equipo completo","Transporte hotel-centro-punto de buceo","Instructor","Seguro"],
    notes:"Curso de 3 días; Yumping indica grupos de hasta 16 personas."
  },

  {
    id:124,siteSlugs:["playa-chica"],
    title:"Inmersión de buceo en Lanzarote desde barco",
    destination:"Puerto del Carmen",region:"Canarias",slug:"inmersion-buceo-barco-lanzarote-53013",
    type:"Fun Dive",level:"Intermedio",duration:"3 horas",audience:"Buceadores titulados",
    tags:["Barco","Inmersión","Puerto del Carmen","Open Water","Transporte"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote-desde-barco--o53013",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote-desde-barco--o53013",
    offers:[{id:"yumping-o53013",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote-desde-barco--o53013",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote-desde-barco--o53013",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Inmersión desde barco","Transporte centro-puerto","Salida en barco"],
    notes:"Yumping muestra desde 40 € para una inmersión y desde 80 € para doble inmersión. El alquiler de material no está incluido."
  },

  {
    id:125,siteSlugs:["playa-chica"],
    title:"Curso PADI Open Water Diver en Lanzarote 3 días",
    destination:"Puerto del Carmen",region:"Canarias",slug:"curso-padi-open-water-lanzarote-54268",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas que buscan certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Puerto del Carmen","3 días","9 sesiones prácticas"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-diver-en-lanzarote-3-dias--o54268",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-diver-en-lanzarote-3-dias--o54268",
    offers:[{id:"yumping-o54268",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-diver-en-lanzarote-3-dias--o54268",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-diver-en-lanzarote-3-dias--o54268",priceFrom:479,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Equipo completo","Seguro","Instructor","Transporte hotel-centro-punto de buceo"],
    notes:"Yumping indica 5 inmersiones en aguas confinadas y 4 en mar abierto, con grupos de máximo 4 personas."
  },

  {
    id:126,siteSlugs:["costa-teguise"],
    title:"Curso PADI Adventure Diver en Lanzarote",
    destination:"Costa Teguise",region:"Canarias",slug:"curso-padi-adventure-diver-lanzarote-46770",
    type:"Curso",level:"Avanzado",duration:"1–2 días",audience:"Buceadores que quieren ampliar habilidades",
    tags:["PADI","Adventure Diver","Costa Teguise","3 inmersiones","Nocturna","Pecios"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-adventure-diver-en-lanzarote--o46770",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-adventure-diver-en-lanzarote--o46770",
    offers:[{id:"yumping-o46770",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-adventure-diver-en-lanzarote--o46770",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-adventure-diver-en-lanzarote--o46770",priceFrom:200,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"30 m",included:["3 inmersiones","Material","Manual","Logbook","Certificación","Seguros"],
    minAge:15,
    notes:"Incluye 3 inmersiones de aventura; las modalidades pueden incluir nocturno, pecios o hasta 30 m."
  },

  {
    id:127,siteSlugs:["playa-blanca-lanzarote"],
    title:"Inmersión de buceo en Playa Blanca, 4 horas",
    destination:"Playa Blanca",region:"Canarias",slug:"inmersion-buceo-playa-blanca-45915",
    type:"Fun Dive",level:"Intermedio",duration:"4 horas",audience:"Buceadores con experiencia/titulación",
    tags:["Playa Blanca","Botella","Plomos","Guía","Seguro RC"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o45915",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o45915",
    offers:[{id:"yumping-o45915",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o45915",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o45915",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Guía","Botella y plomos","Seguro de Responsabilidad Civil"],
    notes:"Yumping indica una duración aproximada de 4 horas y que el material personal puede alquilarse aparte."
  },

  {
    id:128,siteSlugs:["playa-blanca-lanzarote"],
    title:"Inmersiones en Lanzarote con buceo nocturno gratis",
    destination:"Playa Blanca",region:"Canarias",slug:"inmersiones-lanzarote-nocturna-gratis-37280",
    type:"Fun Dive",level:"Avanzado",duration:"2 h 30 min aprox.",audience:"Buceadores titulados",
    tags:["Pack 10 inmersiones","Nocturna","Playa Blanca","Equipo","Transporte"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersiones-en-lanzarote-con-buceo-nocturno-gratis--o37280",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersiones-en-lanzarote-con-buceo-nocturno-gratis--o37280",
    offers:[{id:"yumping-o37280",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersiones-en-lanzarote-con-buceo-nocturno-gratis--o37280",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersiones-en-lanzarote-con-buceo-nocturno-gratis--o37280",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Pack de 10 inmersiones","Equipo completo","Transporte","Refresco en intervalo","Instructores"],
    notes:"Oferta de 10 inmersiones con buceo nocturno incluido/gratis según condiciones de la ficha. Grupos máximos de 4."
  },

  {
    id:129,siteSlugs:["costa-teguise"],
    title:"Curso SSI Open Water Diver en Lanzarote",
    destination:"Costa Teguise",region:"Canarias",slug:"curso-ssi-open-water-diver-lanzarote-46769",
    type:"Curso",level:"Inicial",duration:"3–4 días",audience:"Personas que quieren iniciarse y certificarse en SSI",
    tags:["SSI","Open Water","Costa Teguise","Piscina","9 sesiones prácticas"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-ssi-open-water-diver-en-lanzarote--o46769",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-ssi-open-water-diver-en-lanzarote--o46769",
    offers:[{id:"yumping-o46769",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-ssi-open-water-diver-en-lanzarote--o46769",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-ssi-open-water-diver-en-lanzarote--o46769",priceFrom:475,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Profesor","Equipo","Teoría presencial","5 clases de piscina","4 inmersiones mar","Kit teórico","Logbook","Certificado","Seguros"],
    minAge:10
  },

  {
    id:130,siteSlugs:["playa-blanca-lanzarote"],
    title:"Open Water Diver SSI en Playa Flamingo, 4 días",
    destination:"Playa Blanca",region:"Canarias",slug:"open-water-ssi-playa-flamingo-43093",
    type:"Curso",level:"Inicial",duration:"4 días + e-learning",audience:"Personas que quieren obtener la certificación SSI",
    tags:["SSI","Open Water","Playa Flamingo","4 días","E-learning"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceo-open-water-en-lanzarote--o43093",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceo-open-water-en-lanzarote--o43093",
    offers:[{id:"yumping-o43093",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceo-open-water-en-lanzarote--o43093",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceo-open-water-en-lanzarote--o43093",priceFrom:475,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Teoría SSI online","Formación práctica","Equipo","Instructor"],
    notes:"Curso presencial de 4 días más el tiempo necesario para completar la formación online."
  },

  {
    id:131,siteSlugs:["playa-chica"],
    title:"Bautismo de buceo en Lanzarote, Puerto del Carmen",
    destination:"Puerto del Carmen",region:"Canarias",slug:"bautismo-buceo-puerto-carmen-54296",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Primera experiencia",
    tags:["Puerto del Carmen","Bautismo","Equipo","Instructor","Tasas"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-lanzarote-puerto-del-carmen--o54296",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-lanzarote-puerto-del-carmen--o54296",
    offers:[{id:"yumping-o54296",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-lanzarote-puerto-del-carmen--o54296",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-lanzarote-puerto-del-carmen--o54296",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"12 m",included:["Bautismo","Equipo completo","Instructor","Tasas"],
    notes:"Yumping indica 2,5 horas de actividad y dos turnos disponibles; capacidad de 1–4 personas."
  },

  {
    id:132,siteSlugs:["costa-teguise"],
    title:"Curso PADI Seal Team en Lanzarote",
    destination:"Costa Teguise",region:"Canarias",slug:"curso-padi-seal-team-lanzarote-46764",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Niños desde 8 años que quieren iniciarse en el buceo",
    tags:["PADI","Seal Team","Niños","Costa Teguise","5 misiones"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-seal-team-en-lanzarote--o46764",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-seal-team-en-lanzarote--o46764",
    offers:[{id:"yumping-o46764",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-seal-team-en-lanzarote--o46764",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-seal-team-en-lanzarote--o46764",priceFrom:295,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Materiales","5 misiones acuáticas","Teoría","Logbook","Certificación","Seguro de buceo"],
    minAge:8,
    notes:"Programa PADI Seal Team dirigido a niños desde 8 años; Yumping indica grupos de hasta 100 personas."
  },

  {
    id:133,siteSlugs:["los-abrigos"],
    title:"Bautismo de buceo en Tenerife",
    destination:"Los Abrigos",region:"Canarias",slug:"bautismo-buceo-tenerife-46044",
    type:"Bautismo",level:"Inicial",duration:"1 h 30 min–3 h",audience:"Primera experiencia",
    tags:["Bautismo","Los Abrigos","Instructor","20–45 min de inmersión"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife--o46044",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife--o46044",
    offers:[{id:"yumping-o46044",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife--o46044",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife--o46044",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10, maxDepth:"poca profundidad", included:["Instructor","Nociones básicas de buceo"],
    notes:"Yumping indica una inmersión de aproximadamente 20–45 minutos y una actividad total de 1:30 a 3:00."
  },

  {
    id:134,siteSlugs:["las-galletas"],
    title:"Bautismo de buceo en Las Galletas, Tenerife",
    destination:"Las Galletas",region:"Canarias",slug:"bautismo-buceo-las-galletas-53976",
    type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Primera experiencia",
    tags:["Bautismo","Las Galletas","12 m","Equipo","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-las-galletas-tenerife--o53976",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-las-galletas-tenerife--o53976",
    offers:[{id:"yumping-o53976",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-las-galletas-tenerife--o53976",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-las-galletas-tenerife--o53976",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,maxDepth:"12 m",included:["Equipo de buceo","Seguro de buceo","Instructor profesional"],
    notes:"Yumping indica que no se necesita experiencia y que la actividad puede realizarse durante todo el año."
  },

  {
    id:135,siteSlugs:["el-medano"],
    title:"Bautizo de buceo en Tenerife de 45 minutos",
    destination:"El Médano",region:"Canarias",slug:"bautizo-buceo-tenerife-45-min-41732",
    type:"Bautismo",level:"Inicial",duration:"45 min de inmersión",audience:"Primera experiencia",
    tags:["Bautismo","El Médano","45 min","Instructor","Recogida"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",
    offers:[{id:"yumping-o41732",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Instrucción previa","Posibilidad de recogida"],
    notes:"Yumping indica grupos de 1–6 personas y recogida posible en aeropuerto, estaciones y alojamientos."
  },

  {
    id:136,siteSlugs:["radazul"],
    title:"Bautizo de buceo en mar + vídeo en Radazul",
    destination:"Radazul",region:"Canarias",slug:"bautizo-buceo-video-radazul-60254",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["Radazul","Vídeo","Bautismo","Mar"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-y-video-hd-en-radazul--o63387",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-y-video-hd-en-radazul--o63387",
    offers:[{id:"yumping-o63387",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-y-video-hd-en-radazul--o63387",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-y-video-hd-en-radazul--o63387",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Inmersión en mar","Vídeo","Instructor"],
    notes:"Actividad de 3 horas en Radazul con vídeo incluido."
  },

  {
    id:137,siteSlugs:["costa-adeje"],
    title:"Bautismo de buceo en Costa Adeje de 4 horas",
    destination:"Costa Adeje",region:"Canarias",slug:"bautismo-buceo-costa-adeje-80893",
    type:"Bautismo",level:"Inicial",duration:"4 horas",audience:"Primera experiencia",
    tags:["Costa Adeje","Bautismo","Equipo","Instructor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-costa-adeje-de-4-horas--o80893",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-costa-adeje-de-4-horas--o80893",
    offers:[{id:"yumping-o80893",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-costa-adeje-de-4-horas--o80893",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-costa-adeje-de-4-horas--o80893",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Material necesario","Instructor"],
    notes:"Yumping indica que no se requiere experiencia previa y una edad mínima de 10 años."
  },

  {
    id:138,siteSlugs:["puerto-colon"],
    title:"PADI Discover Scuba Diving en Puerto Colón",
    destination:"Puerto Colón",region:"Canarias",slug:"padi-discover-scuba-diving-puerto-colon-53291",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["PADI","Discover Scuba","Puerto Colón","3 h"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-advanced-open-water-diver-radazul--o15398",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-advanced-open-water-diver-radazul--o15398",
    offers:[{id:"yumping-o15398",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-advanced-open-water-diver-radazul--o15398",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-advanced-open-water-diver-radazul--o15398",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Instructor","Equipo"],
    notes:"Oferta PADI Discover Scuba Diving en Puerto Colón; Yumping la muestra desde 110 €."
  },

  {
    id:139,siteSlugs:["playa-paraiso"],
    title:"Bautizo de buceo en Tenerife de 45 minutos",
    destination:"Playa Paraíso",region:"Canarias",slug:"bautizo-buceo-playa-paraiso-45-min-41732",
    type:"Bautismo",level:"Inicial",duration:"45 min de inmersión",audience:"Primera experiencia",
    tags:["Playa Paraíso","Bautismo","45 min","Instructor","Transporte"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",
    offers:[{id:"yumping-o41732-playa-paraiso",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Posibilidad de recogida"],
    notes:"Misma oferta Yumping disponible en Playa Paraíso según la zona indicada por la ficha."
  },

  {
    id:140,siteSlugs:["las-chafiras"],
    title:"PADI Open Water Diver en Las Galletas Tenerife",
    destination:"Las Chafiras",region:"Canarias",slug:"padi-open-water-diver-las-galletas-31296",
    type:"Curso",level:"Inicial",duration:"5 mañanas",audience:"Personas que quieren obtener la certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Las Galletas","5 mañanas","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/padi-open-water-diver-en-las-galletas-tenerife--o31296",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/padi-open-water-diver-en-las-galletas-tenerife--o31296",
    offers:[{id:"yumping-o31296",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/padi-open-water-diver-en-las-galletas-tenerife--o31296",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/padi-open-water-diver-en-las-galletas-tenerife--o31296",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Formación PADI","Equipo de buceo"],
    notes:"Yumping indica una duración aproximada de 5 mañanas. Oferta mostrada bajo Las Galletas y proveedor Buceo Tenerife."
  },

  {
    id:141,siteSlugs:["guia-de-isora"],
    title:"Open Water Diver PADI en Tenerife en 3 días",
    destination:"Guía de Isora",region:"Canarias",slug:"open-water-diver-padi-tenerife-39502",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas que quieren obtener la certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Guía de Isora","3 días","Recogida"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/open-water-diver-padi-en-tenerife-en-3-dias--o39502",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/open-water-diver-padi-en-tenerife-en-3-dias--o39502",
    offers:[{id:"yumping-o39502",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/open-water-diver-padi-en-tenerife-en-3-dias--o39502",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/open-water-diver-padi-en-tenerife-en-3-dias--o39502",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Curso PADI","Recogida y regreso al alojamiento"],
    notes:"Curso de 3 jornadas completas, con recogida y regreso según alojamiento."
  },

  {
    id:142,siteSlugs:["puerto-colon"],
    title:"Bono de 10 inmersiones desde Puerto Colón",
    destination:"Adeje",region:"Canarias",slug:"bono-10-inmersiones-puerto-colon-22282",
    type:"Fun Dive",level:"Intermedio",duration:"5 días",audience:"Buceadores con certificación",
    tags:["10 inmersiones","Puerto Colón","5 días","Bono"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bono-de-10-inmersiones-tenerife--o22282",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bono-de-10-inmersiones-tenerife--o22282",
    offers:[{id:"yumping-o22282",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bono-de-10-inmersiones-tenerife--o22282",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bono-de-10-inmersiones-tenerife--o22282",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["10 inmersiones","Salidas desde Puerto Colón"],
    notes:"Bono de 10 inmersiones en 5 días; cada inmersión dura aproximadamente 30–50 minutos."
  },

  {
    id:143,siteSlugs:["los-abrigos"],
    title:"2 inmersiones en Tenerife para buceadores titulados",
    destination:"Los Abrigos",region:"Canarias",slug:"2-inmersiones-buceadores-titulados-tenerife-53263",
    type:"Fun Dive",level:"Intermedio",duration:"2 inmersiones · 40 min aprox. cada una",audience:"Buceadores con certificado",
    tags:["2 inmersiones","Los Abrigos","Botella","Plomos","Transporte"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-tenerife-buceadores-titulados--o53263",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-tenerife-buceadores-titulados--o53263",
    offers:[{id:"yumping-o53263",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-tenerife-buceadores-titulados--o53263",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-tenerife-buceadores-titulados--o53263",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Alquiler de equipo","Botella y plomos","Transporte"],
    notes:"Yumping indica capacidad de 1–4 personas y salidas de lunes a viernes a las 9:00; fines de semana bajo petición."
  },

  {
    id:144,siteSlugs:["las-chafiras"],
    title:"2 inmersiones de buceo en Tenerife con fotos",
    destination:"Las Chafiras",region:"Canarias",slug:"2-inmersiones-tenerife-fotos-60253",
    type:"Fun Dive",level:"Intermedio",duration:"4–5 horas",audience:"Buceadores certificados",
    tags:["2 inmersiones","Fotos","Las Chafiras","Barco","Playa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/inmersiones-de-buceo-en-tenerife-con-fotos--o60253",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/inmersiones-de-buceo-en-tenerife-con-fotos--o60253",
    offers:[{id:"yumping-o60253",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/inmersiones-de-buceo-en-tenerife-con-fotos--o60253",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/inmersiones-de-buceo-en-tenerife-con-fotos--o60253",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["2 inmersiones","Equipo completo","Guía","Reportaje fotográfico"],
    notes:"Yumping indica 15 puntos de inmersión posibles y salidas desde playa o barco. No incluye seguro de buceo."
  },

  {
    id:157,siteSlugs:["isla-benidorm"],
    title:"Excursión de Snorkel en Parque Natural de Benidorm",
    destination:"Benidorm",region:"Alicante",slug:"snorkel-parque-natural-benidorm-36446",
    type:"Snorkel",level:"Inicial",duration:"Consultar",audience:"Personas que sepan nadar",
    tags:["Benidorm","Snorkel","Parque Natural","Aventura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/excursion-de-snorkel-en-parque-natural-de-benidorm--o36446",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/excursion-de-snorkel-en-parque-natural-de-benidorm--o36446",
    offers:[{id:"yumping-o36446",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/excursion-de-snorkel-en-parque-natural-de-benidorm--o36446",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/excursion-de-snorkel-en-parque-natural-de-benidorm--o36446",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Actividad guiada de snorkel"]
  },

  {
    id:158,siteSlugs:["isla-benidorm"],
    title:"Inmersión de buceo en Benidorm sin equipo",
    destination:"Benidorm",region:"Alicante",slug:"inmersion-buceo-benidorm-sin-equipo-36148",
    type:"Fun Dive",level:"Intermedio",duration:"Según actividad",audience:"Buceadores con titulación",
    tags:["Benidorm","Sin equipo","Barco","Inmersión"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-en-benidorm-sin-equipo--o36148",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-en-benidorm-sin-equipo--o36148",
    offers:[{id:"yumping-o36148",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-en-benidorm-sin-equipo--o36148",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-en-benidorm-sin-equipo--o36148",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Monitor","Patrón"],
    notes:"El participante debe aportar su propio equipo y disponer de titulación de buceo."
  },

  {
    id:159,siteSlugs:["isla-benidorm"],
    title:"Curso Scuba Diver en Benidorm",
    destination:"Benidorm",region:"Alicante",slug:"curso-scuba-diver-benidorm-36243",
    type:"Curso",level:"Inicial",duration:"2 días",audience:"Personas que quieren obtener PADI Scuba Diver",
    tags:["PADI","Scuba Diver","Benidorm","Piscina","Mar"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-scuba-diver-en-benidorm-dos-dias--o36243",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-scuba-diver-en-benidorm-dos-dias--o36243",
    offers:[{id:"yumping-o36243",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/curso-scuba-diver-en-benidorm-dos-dias--o36243",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-scuba-diver-en-benidorm-dos-dias--o36243",priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,maxDepth:"12 m",included:["Inmersiones en piscina y mar","Teoría","Certificación PADI","Material"]
  },

  {
    id:160,siteSlugs:["serra-gelada"],
    title:"Curso Open Water Diver en Serra Gelada",
    destination:"Benidorm",region:"Alicante",slug:"curso-open-water-serra-gelada-36245",
    type:"Curso",level:"Inicial",duration:"Según ritmo del participante",audience:"Personas que buscan PADI Open Water Diver",
    tags:["PADI","Open Water","Serra Gelada","Benidorm"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-en-serra-gelada--o36245",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-en-serra-gelada--o36245",
    offers:[{id:"yumping-o36245",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-en-serra-gelada--o36245",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-en-serra-gelada--o36245",priceFrom:460,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,included:["Formación PADI","Material"]
  },

  {
    id:161,siteSlugs:["altea"],
    title:"Bautismo de buceo en Altea, desde barco",
    destination:"Altea",region:"Alicante",slug:"bautismo-buceo-altea-barco-36653",
    type:"Bautismo",level:"Inicial",duration:"Media jornada",audience:"Primera experiencia",
    tags:["Altea","Barco","Cala","Bautismo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-altea-desde-barco--o36653",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-altea-desde-barco--o36653",
    offers:[{id:"yumping-o36653",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-altea-desde-barco--o36653",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-altea-desde-barco--o36653",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Material","Barco","Inmersión ~30 min","Instructor","Seguro"]
  },

  {
    id:162,siteSlugs:["altea"],
    title:"PADI Advanced Open Water, Altea",
    destination:"Altea",region:"Alicante",slug:"padi-advanced-open-water-altea-31342",
    type:"Curso",level:"Avanzado",duration:"2 días",audience:"Buceadores con Open Water Diver",
    tags:["PADI","Advanced","Altea","2 días"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/padi-advanced-open-water-altea--o31342",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/padi-advanced-open-water-altea--o31342",
    offers:[{id:"yumping-o31342",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/padi-advanced-open-water-altea--o31342",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/padi-advanced-open-water-altea--o31342",priceFrom:299,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Formación PADI Advanced","Prácticas","Instructor"]
  },

  {
    id:163,siteSlugs:["cabo-san-antonio"],
    title:"Curso Advanced Open Water Diver en Denia",
    destination:"Dénia",region:"Alicante",slug:"curso-advanced-open-water-denia-65287",
    type:"Curso",level:"Avanzado",duration:"Según ritmo",audience:"Buceadores con Open Water Diver",
    tags:["PADI","Advanced","Dénia","30 m","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-advanced-open-water-diver-en-denia--o65287",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-advanced-open-water-diver-en-denia--o65287",
    offers:[{id:"yumping-o65287",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/curso-advanced-open-water-diver-en-denia--o65287",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-advanced-open-water-diver-en-denia--o65287",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"30 m",included:["Teoría","Material","Equipo","Inmersiones","Certificado PADI","Seguro"]
  },

  {
    id:164,siteSlugs:["cabo-san-antonio"],
    title:"Bautismo de Buceo Económico costa de Denia 3h",
    destination:"Dénia",region:"Alicante",slug:"bautismo-buceo-economico-denia-56080",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Primera experiencia",
    tags:["Dénia","Bautismo","6 m","Equipo","Diploma"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-economico-costa-de-denia--o56080",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-economico-costa-de-denia--o56080",
    offers:[{id:"yumping-o56080",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-economico-costa-de-denia--o56080",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-economico-costa-de-denia--o56080",priceFrom:125,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,maxDepth:"6 m",included:["Charla previa","Equipo completo","Bautismo","Diploma","Seguros"]
  },

  {
    id:165,siteSlugs:["cabo-san-antonio"],
    title:"Inmersión de buceo y equipo en la costa de Denia",
    destination:"Dénia",region:"Alicante",slug:"inmersion-buceo-equipo-denia-65282",
    type:"Fun Dive",level:"Intermedio",duration:"3–4 horas",audience:"Buceadores titulados",
    tags:["Dénia","Barco","Equipo","Inmersión","Guía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-y-equipo-en-la-costa-de-denia--o65282",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-y-equipo-en-la-costa-de-denia--o65282",
    offers:[{id:"yumping-o65282",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-y-equipo-en-la-costa-de-denia--o65282",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-y-equipo-en-la-costa-de-denia--o65282",priceFrom:125,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo completo","Briefing","Embarcación","Equipo experto","Seguro"]
  },

  {
    id:166,siteSlugs:["cabo-san-antonio"],
    title:"Curso de buceo Rescue Diver y EFR en Denia",
    destination:"Dénia",region:"Alicante",slug:"rescue-diver-efr-denia-65447",
    type:"Curso",level:"Avanzado",duration:"3–5 días",audience:"Buceadores con Advanced Open Water Diver",
    tags:["PADI Rescue Diver","EFR","Dénia","Rescate"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-rescue-diver-y-efr-en-denia--o65447",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-rescue-diver-y-efr-en-denia--o65447",
    offers:[{id:"yumping-o65447",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-rescue-diver-y-efr-en-denia--o65447",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-rescue-diver-y-efr-en-denia--o65447",priceFrom:600,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Teoría","Prácticas de rescate","Primeros auxilios","Instructor"]
  },

  {
    id:167,siteSlugs:["cala-montgo"],
    title:"Bautismo de buceo Costa del Montgrí 3 horas",
    destination:"L'Escala",region:"Costa Brava",slug:"bautismo-buceo-costa-montgri-36307",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["L'Escala","Montgrí","3 horas","Equipo","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/safari-de-buceo-costa-del-montgri-5-horas--o36307",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/safari-de-buceo-costa-del-montgri-5-horas--o36307",
    offers:[{id:"yumping-o36307",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/safari-de-buceo-costa-del-montgri-5-horas--o36307",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/safari-de-buceo-costa-del-montgri-5-horas--o36307",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Instructor","Seguro","Equipo completo"],
    notes:"Yumping indica 3 horas de actividad y grupos de hasta 20 personas."
  },

  {
    id:168,siteSlugs:["cala-montgo"],
    title:"Bautismo de buceo en Parque Natural del Montgrí 3h",
    destination:"L'Escala",region:"Costa Brava",slug:"bautismo-buceo-parque-montgri-77668",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["L'Escala","Parque Natural","Montgrí","Equipo","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-parque-natural-del-montgri-3h--o77668",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-parque-natural-del-montgri-3h--o77668",
    offers:[{id:"yumping-o77668",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-parque-natural-del-montgri-3h--o77668",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-parque-natural-del-montgri-3h--o77668",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Instructor","Seguro","Equipo completo"],
    notes:"Actividad progresiva desde costa; Yumping indica horario diario a las 15:00 y 1–4 personas."
  },

  {
    id:170,siteSlugs:["mar-menuda"],
    title:"Discover Scuba Diving en Tossa de Mar 3 horas",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"discover-scuba-tossa-51268",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["Discover Scuba","Tossa","3 horas","Instructor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar-3-horas--o51268",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar-3-horas--o51268",
    offers:[{id:"yumping-o51268",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar-3-horas--o51268",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar-3-horas--o51268",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Experiencia Discover Scuba"],
    notes:"Yumping indica una duración total de 3 horas y grupos de 1–10 personas."
  },

  {
    id:171,siteSlugs:["mar-menuda"],
    title:"Bautizo de buceo desde playa en Tossa de Mar",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"bautizo-buceo-playa-tossa-14621",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min–3 horas",audience:"Primera experiencia",
    tags:["Tossa","Playa","45 min","Equipo","Instructor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-desde-playa-en-tossa-de-mar--o14621",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-desde-playa-en-tossa-de-mar--o14621",
    offers:[{id:"yumping-o14621",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-desde-playa-en-tossa-de-mar--o14621",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-desde-playa-en-tossa-de-mar--o14621",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Equipo completo","Instructor","Seguro","Fotos no profesionales"],
    notes:"Yumping indica unos 45 minutos bajo el agua y actividad total de 3 horas."
  },

  {
    id:172,siteSlugs:["mar-menuda"],
    title:"Bautismo de buceo en Tossa de Mar 2,5h",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"bautismo-buceo-tossa-61843",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Primera experiencia",
    tags:["Tossa","2,5 horas","Playa","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar--o61843",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar--o61843",
    offers:[{id:"yumping-o61843",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar--o61843",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar--o61843",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Bautismo desde playa","Equipo completo","Seguro","Instructor"]
  },

  {
    id:173,siteSlugs:["mar-menuda"],
    title:"Snorkel en Tossa de Mar 2 horas y 30",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"snorkel-tossa-61846",
    type:"Snorkel",level:"Inicial",duration:"2 h 30 min",audience:"Personas desde 8 años",
    tags:["Snorkel","Tossa","Guía","Material","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-tossa-de-mar-2-horas-y-30--o61846",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-tossa-de-mar-2-horas-y-30--o61846",
    offers:[{id:"yumping-o61846",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-tossa-de-mar-2-horas-y-30--o61846",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-tossa-de-mar-2-horas-y-30--o61846",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:8,included:["Monitor","Material de snorkel","Ruta guiada","Seguro"]
  },

  {
    id:174,siteSlugs:["mar-menuda"],
    title:"Curso PADI Open Water en Tossa de Mar, 3 días",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"curso-padi-open-water-tossa-57559",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas que buscan certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Tossa","3 días","4 inmersiones"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-en-tossa-de-mar-3-dias--o57559",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-en-tossa-de-mar-3-dias--o57559",
    offers:[{id:"yumping-o57559",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-en-tossa-de-mar-3-dias--o57559",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-en-tossa-de-mar-3-dias--o57559",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Certificado PADI","Equipo","Material didáctico","Seguro","4 inmersiones en mar"]
  },

  {
    id:175,siteSlugs:["mar-menuda"],
    title:"PADI Scuba Diver en Tossa de Mar",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"padi-scuba-diver-tossa-13963",
    type:"Curso",level:"Inicial",duration:"1 día",audience:"Personas que buscan la certificación PADI Scuba Diver",
    tags:["PADI","Scuba Diver","Tossa","9 horas","3 sesiones"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-open-water-diver-padi-lloret-de-mar--o13963",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-open-water-diver-padi-lloret-de-mar--o13963",
    offers:[{id:"yumping-o13963",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-open-water-diver-padi-lloret-de-mar--o13963",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-open-water-diver-padi-lloret-de-mar--o13963",priceFrom:290,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Material teórico","3 sesiones prácticas","Certificación PADI","Material de buceo"]
  },

  {
    id:176,siteSlugs:["mar-menuda"],
    title:"PADI Advanced Open Water Tossa de Mar 2 días",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"padi-advanced-tossa-57563",
    type:"Curso",level:"Avanzado",duration:"2 días",audience:"Buceadores con experiencia previa",
    tags:["PADI","Advanced","Tossa","5 módulos","2 días"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-tossa-de-mar-2-dias--o57563",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-tossa-de-mar-2-dias--o57563",
    offers:[{id:"yumping-o57563",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-tossa-de-mar-2-dias--o57563",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-tossa-de-mar-2-dias--o57563",priceFrom:330,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["5 módulos","Formación PADI"]
  },

  {
    id:177,siteSlugs:["mar-menuda"],
    title:"Curso de buceo Open Water Diver en Mar Menuda",
    destination:"Tossa de Mar",region:"Costa Brava",slug:"open-water-mar-menuda-65112",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas que buscan Open Water Diver",
    tags:["Open Water","Mar Menuda","Tossa","Transporte"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-en-tossa-de-mar--o65112",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-en-tossa-de-mar--o65112",
    offers:[{id:"yumping-o65112",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-en-tossa-de-mar--o65112",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-en-tossa-de-mar--o65112",priceFrom:429,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Curso Open Water","Transporte"],
    notes:"Oferta de Tossasub en Mar Menuda con transporte incluido según la ficha."
  },

  {
    id:178,siteSlugs:["lloret-de-mar"],
    title:"Bautismo de buceo desde Playa Sa Caleta, 2h30",
    destination:"Lloret de Mar",region:"Costa Brava",slug:"bautismo-sa-caleta-13961",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Primera experiencia",
    tags:["Lloret","Sa Caleta","45–50 min","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar--o13961",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar--o13961",
    offers:[{id:"yumping-o13961",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar--o13961",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar--o13961",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:8,included:["Instructor","Equipo completo"],
    notes:"Yumping indica unos 45–50 minutos de inmersión y una actividad total de unas 2,5 horas."
  },

  {
    id:179,siteSlugs:["lloret-de-mar"],
    title:"Bautizo de buceo en Platja de Fenals 2 horas",
    destination:"Lloret de Mar",region:"Costa Brava",slug:"bautismo-fenals-65860",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["Lloret","Fenals","40 min","Equipo","Instructor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-lloret-de-mar-2-horas--o65860",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-lloret-de-mar-2-horas--o65860",
    offers:[{id:"yumping-o65860",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-lloret-de-mar-2-horas--o65860",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-lloret-de-mar-2-horas--o65860",priceFrom:66,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Equipo"],
    notes:"Yumping indica una duración total aproximada de 2 horas y unos 40 minutos de inmersión."
  },

  {
    id:180,siteSlugs:["lloret-de-mar"],
    title:"Curso certificación Open Water Diver SSI en Girona",
    destination:"Lloret de Mar",region:"Costa Brava",slug:"open-water-ssi-lloret-55808",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas que buscan certificación SSI",
    tags:["SSI","Open Water","Lloret","3 días","18 m"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-certificacion-open-water-diver-ssi-en-girona--o55808",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-certificacion-open-water-diver-ssi-en-girona--o55808",
    offers:[{id:"yumping-o55808",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-certificacion-open-water-diver-ssi-en-girona--o55808",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-certificacion-open-water-diver-ssi-en-girona--o55808",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,maxDepth:"18 m",included:["Curso","Material","Monitor","Seguros"]
  },

  {
    id:181,siteSlugs:["lloret-de-mar"],
    title:"Curso PADI Open Water Diver en Lloret de Mar",
    destination:"Lloret de Mar",region:"Costa Brava",slug:"padi-open-water-lloret-65241",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Personas que buscan certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Lloret","2–3 días","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-buceo-padi-open-water-diver-en-lloret-de-mar--o65241",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-buceo-padi-open-water-diver-en-lloret-de-mar--o65241",
    offers:[{id:"yumping-o65241",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-buceo-padi-open-water-diver-en-lloret-de-mar--o65241",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-buceo-padi-open-water-diver-en-lloret-de-mar--o65241",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:14,included:["Instructor","Equipo completo","Manual PADI","Título PADI","Seguros"]
  },

  {
    id:182,siteSlugs:["platja-daro"],
    title:"Bautizo de buceo en Platja d'Aro 2 horas",
    destination:"Platja d'Aro",region:"Costa Brava",slug:"bautizo-buceo-platja-daro-60480",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["Platja d'Aro","Bautismo","2 horas","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-platja-daro-2-horas--o60480",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-platja-daro-2-horas--o60480",
    offers:[{id:"yumping-o60480",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-platja-daro-2-horas--o60480",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-platja-daro-2-horas--o60480",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Equipo","Seguro"]
  },

  {
    id:183,siteSlugs:["l-estartit"],
    title:"Curso PADI Open Water Diver en Estartit, 5 días",
    destination:"L'Estartit",region:"Costa Brava",slug:"padi-open-water-estartit-57566",
    type:"Curso",level:"Inicial",duration:"5 días",audience:"Personas que quieren certificarse como PADI Open Water Diver",
    tags:["PADI","Open Water","L'Estartit","Cala Pedrosa","5 días"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-estartit-5-dias--o57566",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-estartit-5-dias--o57566",
    offers:[{id:"yumping-o57566",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-estartit-5-dias--o57566",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-estartit-5-dias--o57566",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,maxDepth:"18 m",included:["Formación PADI","Inmersiones","Equipo"],
    notes:"Curso de aproximadamente 5 días, con opción de fecha concreta, fecha abierta y bono regalo."
  },

  {
    id:184,siteSlugs:["l-estartit"],
    title:"Curso PADI Advanced en Estartit, 3 días",
    destination:"L'Estartit",region:"Costa Brava",slug:"padi-advanced-estartit-57567",
    type:"Curso",level:"Avanzado",duration:"2,5 días · 5 inmersiones",audience:"Buceadores con Open Water Diver o equivalente",
    tags:["PADI","Advanced","L'Estartit","5 inmersiones","Barco"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-padi-advanced-en-estartit-3-dias--o57567",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-padi-advanced-en-estartit-3-dias--o57567",
    offers:[{id:"yumping-o57567",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-padi-advanced-en-estartit-3-dias--o57567",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-padi-advanced-en-estartit-3-dias--o57567",priceFrom:330,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Titulación PADI","Equipo completo","5 inmersiones","Monitor","Embarcación"],
    notes:"El anuncio indica 2 días y medio y 5 inmersiones, aunque el título comercial habla de 3 días."
  },

  {
    id:185,siteSlugs:["l-estartit"],
    title:"Bautismo de mar en Cala Pedrosa, Estartit",
    destination:"L'Estartit",region:"Costa Brava",slug:"bautismo-cala-pedrosa-estartit-57564",
    type:"Bautismo",level:"Inicial",duration:"Menos de una jornada",audience:"Primera experiencia",
    tags:["Cala Pedrosa","L'Estartit","Bautismo","Costa Brava"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-mar-en-cala-pedrosa-estartit--o57564",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-mar-en-cala-pedrosa-estartit--o57564",
    offers:[{id:"yumping-o57564",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-mar-en-cala-pedrosa-estartit--o57564",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-mar-en-cala-pedrosa-estartit--o57564",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Equipo de buceo"],
    notes:"Oferta con más de 10 opiniones y reservas verificadas en Yumping."
  },

  {
    id:186,siteSlugs:["l-estartit"],
    title:"PADI Advanced Open Water Diver en l'Estartit",
    destination:"L'Estartit",region:"Costa Brava",slug:"padi-advanced-estartit-13966",
    type:"Curso",level:"Avanzado",duration:"1–2 semanas aprox.",audience:"Buceadores con certificación Open Water Diver",
    tags:["PADI","Advanced","L'Estartit","5 inmersiones","Unisub"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-diver-lloret-de-mar--o13966",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-diver-lloret-de-mar--o13966",
    offers:[{id:"yumping-o13966",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-diver-lloret-de-mar--o13966",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-diver-lloret-de-mar--o13966",priceFrom:389,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Formación PADI","5 inmersiones"],
    notes:"La ficha está publicada como l'Estartit/Torroella de Montgrí, aunque la URL contiene 'lloret-de-mar'."
  },

  {
    id:187,siteSlugs:["el-montgri"],
    title:"Buceo a las Islas Medas o la Costa del Montgrí",
    destination:"Torroella de Montgrí",region:"Costa Brava",slug:"buceo-islas-medas-montgri-27211",
    type:"Fun Dive",level:"Intermedio",duration:"2 horas",audience:"Buceadores con titulación mínima nivel 1 / 1★ o equivalente",
    tags:["Islas Medas","Montgrí","Barco","Botella","Plomos"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/buceo-a-las-islas-medas-o-la-costa-del-montgri--o27211",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/buceo-a-las-islas-medas-o-la-costa-del-montgri--o27211",
    offers:[{id:"yumping-o27211",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/buceo-a-las-islas-medas-o-la-costa-del-montgri--o27211",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/buceo-a-las-islas-medas-o-la-costa-del-montgri--o27211",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Barco","Botella 12 o 15 L","Cinturón","Plomos"],
    notes:"La tasa de las Medas se cobra aparte (5 € por persona e inmersión) según la ficha."
  },

  {
    id:188,siteSlugs:["el-montgri"],
    title:"Bautizo de buceo Parque Natural del Montgrí, 3h",
    destination:"Torroella de Montgrí",region:"Costa Brava",slug:"bautizo-montgri-3h-88870",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Primera experiencia",
    tags:["Montgrí","Islas Medas","Barco","GoPro opcional"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",
    offers:[{id:"yumping-o88870",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"10 m",included:["Instructor","Nociones básicas","Equipo y seguridad","Seguros"],
    notes:"La ficha también ofrece una variante con GoPro desde 102 €. La inmersión dura unos 20 minutos."
  },

  {
    id:189,siteSlugs:["el-montgri"],
    title:"Bautizo de buceo Parque Natural del Montgrí + GoPro, 3h",
    destination:"L'Estartit",region:"Costa Brava",slug:"bautizo-montgri-gopro-88870",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Primera experiencia",
    tags:["Montgrí","GoPro","Barco","20 min","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",
    offers:[{id:"yumping-o88870-gopro",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",priceFrom:102,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"10 m",included:["Instructor","Equipo","Seguros","Reportaje GoPro"],
    notes:"Es la variante GoPro de la misma ficha SKU 88870."
  },

  {
    id:190,siteSlugs:["el-montgri"],
    title:"Snorkel en Parque Natural de las Islas Medas, 2h",
    destination:"Torroella de Montgrí",region:"Costa Brava",slug:"snorkel-islas-medas-88872",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas que quieren hacer snorkel en las Islas Medas",
    tags:["Snorkel","Islas Medas","Parque Natural","2 horas"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-parque-natural-de-las-islas-medas-2h--o88872",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-parque-natural-de-las-islas-medas-2h--o88872",
    offers:[{id:"yumping-o88872",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-parque-natural-de-las-islas-medas-2h--o88872",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/snorkel-en-parque-natural-de-las-islas-medas-2h--o88872",priceFrom:33,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Actividad de snorkel guiada"],
    notes:"Yumping indica 2 horas de duración y hasta 50 personas."
  },

  {
    id:191,siteSlugs:["palamos"],
    title:"Bautismo de Buceo en Palamós desde playa",
    destination:"Palamós",region:"Costa Brava",slug:"bautismo-palamos-playa-56240",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["Palamós","Playa","40 min","Anemone Diving"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-palamos-desde-playa--o56240",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-palamos-desde-playa--o56240",
    offers:[{id:"yumping-o56240",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-palamos-desde-playa--o56240",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-palamos-desde-playa--o56240",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Charla teórica","Instructor","Material"],
    notes:"La ficha indica unas 2 horas de actividad desde playa."
  },

  {
    id:192,siteSlugs:["palamos"],
    title:"Bautismo de Buceo desde Barco en Palamós",
    destination:"Palamós",region:"Costa Brava",slug:"bautismo-palamos-barco-56241",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Primera experiencia",
    tags:["Palamós","Barco","Equipo","Instructor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-desde-barco-en-palamos--o56241",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-desde-barco-en-palamos--o56241",
    offers:[{id:"yumping-o56241",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-desde-barco-en-palamos--o56241",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-desde-barco-en-palamos--o56241",priceFrom:105,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Salida en barco","Equipo de buceo","Seguros"],
    notes:"La actividad dura unas 3 horas y está dirigida a principiantes."
  },

  {
    id:193,siteSlugs:["palamos"],
    title:"PADI Open Water Diver en Palamós",
    destination:"Palamós",region:"Costa Brava",slug:"padi-open-water-palamos-56242",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Personas que quieren obtener la certificación PADI Open Water Diver",
    tags:["PADI","Open Water","Palamós","18 m","Anemone Diving"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/padi-open-water-diver-en-palamos--o56242",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/padi-open-water-diver-en-palamos--o56242",
    offers:[{id:"yumping-o56242",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/padi-open-water-diver-en-palamos--o56242",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/padi-open-water-diver-en-palamos--o56242",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Formación PADI","Teoría","Prácticas","Equipo"]
  },

  {
    id:194,siteSlugs:["palamos"],
    title:"Bautizo de buceo en Palamós, 2h",
    destination:"Palamós",region:"Costa Brava",slug:"bautizo-palamos-58937",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Primera experiencia",
    tags:["Palamós","2 horas","40 min","Equipo"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-palamos-2h--o58937",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-palamos-2h--o58937",
    offers:[{id:"yumping-o58937",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-palamos-2h--o58937",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-palamos-2h--o58937",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Instructor","Equipo"]
  },

  {
    id:195,siteSlugs:["palamos"],
    title:"Curso de buceo Open Water Diver Palamós 3 días",
    destination:"Palamós",region:"Costa Brava",slug:"open-water-palamos-79990",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas que buscan certificación Open Water Diver",
    tags:["Open Water","Palamós","3 días","18 m"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-palamos-3-dias--o79990",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-palamos-3-dias--o79990",
    offers:[{id:"yumping-o79990",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-palamos-3-dias--o79990",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-palamos-3-dias--o79990",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,maxDepth:"18 m",included:["Formación","Teoría","Prácticas","Certificación"]
  },

  {
    id:196,siteSlugs:["sant-antoni-de-calonge"],
    title:"Bautizo buceo en pareja Sant Antoni de Calonge 2 h",
    destination:"Sant Antoni de Calonge",region:"Costa Brava",slug:"bautizo-pareja-sant-antoni-60679",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Parejas o 2 personas",
    tags:["Sant Antoni de Calonge","Pareja","Cala Gogo","40 min"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-buceo-en-pareja-sant-antoni-de-calonge-2-h--o60679",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-buceo-en-pareja-sant-antoni-de-calonge-2-h--o60679",
    offers:[{id:"yumping-o60679",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/bautizo-buceo-en-pareja-sant-antoni-de-calonge-2-h--o60679",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/bautizo-buceo-en-pareja-sant-antoni-de-calonge-2-h--o60679",priceFrom:140,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Material","Inmersión 40 min"],
    notes:"Precio indicado por actividad para 2 personas."
  },

  {
    id:197,siteSlugs:["sant-antoni-de-calonge"],
    title:"Curso iniciación al buceo 4 días en Costa Brava",
    destination:"Sant Antoni de Calonge",region:"Costa Brava",slug:"curso-iniciacion-costa-brava-60551",
    type:"Curso",level:"Inicial",duration:"4 jornadas",audience:"Personas que quieren iniciarse en el submarinismo",
    tags:["Costa Brava","4 días","4 inmersiones","Playa","Barco"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-iniciacion-al-buceo-4-dias-en-costa-brava--o60551",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-iniciacion-al-buceo-4-dias-en-costa-brava--o60551",
    offers:[{id:"yumping-o60551",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-iniciacion-al-buceo-4-dias-en-costa-brava--o60551",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-iniciacion-al-buceo-4-dias-en-costa-brava--o60551",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["4 inmersiones","Playa y mar abierto","Instructor"],
    notes:"Curso de 4 jornadas que pueden repartirse según disponibilidad del participante."
  },

  {
    id:198,siteSlugs:["cabo-palos-reserva"],
    title:"Bautizo de buceo en barco en Cabo de Palos",
    destination:"Cabo de Palos",region:"Murcia",slug:"bautizo-barco-cabo-palos-14983",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","Cabo de Palos"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-barco-en-cabo-de-palos--o14983",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-barco-en-cabo-de-palos--o14983",
    offers:[{id:"yumping-o14983",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-barco-en-cabo-de-palos--o14983",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-barco-en-cabo-de-palos--o14983",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,
    maxDepth:"6 m",
    included:["Nociones básicas de buceo","Equipo completo","Instructor","Diploma"],
    notes:"Actividad de iniciación con inmersión desde barco.",
    priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:199,siteSlugs:["cabo-palos-reserva"],
    title:"Curso de iniciación al buceo Open Water PADI en Cabo de Palos",
    destination:"Cabo de Palos",region:"Murcia",slug:"open-water-cabo-palos-14809",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","Cabo de Palos"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-al-buceo-open-water-murcia--o14809",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-al-buceo-open-water-murcia--o14809",
    offers:[{id:"yumping-o14809",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-al-buceo-open-water-murcia--o14809",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-al-buceo-open-water-murcia--o14809",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,
    maxDepth:"18 m",
    included:["5 módulos teóricos","5 inmersiones","Equipo completo","Material didáctico","Seguro","Titulación internacional"],
    notes:"La quinta inmersión se realiza en la Reserva Marina de Cabo de Palos.",
    priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:200,siteSlugs:["cabo-palos-reserva"],
    title:"Curso Advanced Open Water Diver PADI en Cabo de Palos",
    destination:"Cabo de Palos",region:"Murcia",slug:"advanced-open-water-cabo-palos-14984",
    type:"Curso",level:"Avanzado",duration:"3 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","Cabo de Palos"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-advanced-open-water-diver-murcia--o14984",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-advanced-open-water-diver-murcia--o14984",
    offers:[{id:"yumping-o14984",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-advanced-open-water-diver-murcia--o14984",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-advanced-open-water-diver-murcia--o14984",priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"30 m",
    included:["Formación teórica","5 inmersiones","Material de buceo","Instructor"],
    notes:"Curso Advanced de 3 días, repartible en dos inmersiones diarias y una quinta el tercer día.",
    priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:201,siteSlugs:["cabo-palos-reserva"],
    title:"Bautizo de Snorkel el Cabo de Palos con fotos",
    destination:"Cabo de Palos",region:"Murcia",slug:"bautizo-snorkel-cabo-palos-fotos",
    type:"Snorkel",level:"Inicial",duration:"60–90 minutos",audience:"Personas interesadas en snorkel en Cabo de Palos",
    tags:["Snorkel","Cabo de Palos","Fotos","Familias"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-snorkel-el-cabo-de-palos-con-fotos--o40398",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-snorkel-el-cabo-de-palos-con-fotos--o40398",
    offers:[{id:"yumping-o40398",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-snorkel-el-cabo-de-palos-con-fotos--o40398",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-snorkel-el-cabo-de-palos-con-fotos--o40398",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:202,siteSlugs:["la-manga-mar-menor"],
    title:"Bautismo de buceo en mar, Puerto Tomás Maestre, 3h",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"bautismo-tomas-maestre-88731",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88731",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88731",
    offers:[{id:"yumping-o88731",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88731",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88731",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"6 m",
    included:["Monitor profesional","Equipo técnico y seguridad","Charla previa","Seguro"],
    notes:"Inmersión de iniciación en el Mar Menor.",
    priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:203,siteSlugs:["la-manga-mar-menor"],
    title:"Bautismo de Buceo PADI en La Manga del Mar Menor",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"bautismo-padi-la-manga-35110",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-padi-en-la-manga-del-mar-menor--o35110",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-padi-en-la-manga-del-mar-menor--o35110",
    offers:[{id:"yumping-o35110",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-padi-en-la-manga-del-mar-menor--o35110",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-padi-en-la-manga-del-mar-menor--o35110",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"6 m",
    included:["1 inmersión","Instructor","Equipo completo","Seguro","Fotografías","Diploma"],
    notes:"Precio actual 80 € con descuento; el precio mostrado de referencia es 90 €.",
    priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:204,siteSlugs:["la-manga-mar-menor"],
    title:"Bautismo de buceo en piscina San Javier, 3h",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"bautismo-piscina-san-javier-88730",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88730",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88730",
    offers:[{id:"yumping-o88730",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88730",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88730",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"Piscina",
    included:["Instructor","Equipo","Inmersión de aproximadamente 1 h"],
    notes:"Primera toma de contacto con el equipo en piscina.",
    priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:205,siteSlugs:["la-manga-mar-menor"],
    title:"Snorkel en La Manga – Discover Snorkeling Experience",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"snorkel-la-manga-35112",
    type:"Snorkel",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en snorkel en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/snorkel-en-la-manga-discover-snorkeling-experience--o35112",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/snorkel-en-la-manga-discover-snorkeling-experience--o35112",
    offers:[{id:"yumping-o35112",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/snorkel-en-la-manga-discover-snorkeling-experience--o35112",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/snorkel-en-la-manga-discover-snorkeling-experience--o35112",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Excursión de snorkel","Instructor","Equipo","Snacks","Seguro","Diploma"],
    notes:"Actividad de baja dificultad, apta para familia o pareja.",
    priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:206,siteSlugs:["la-manga-mar-menor"],
    title:"Curso iniciación Open Water Diver en La Manga, 5 días",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"open-water-la-manga-35125",
    type:"Curso",level:"Inicial",duration:"3–5 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-open-water-diver-en-la-manga--o35125",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-open-water-diver-en-la-manga--o35125",
    offers:[{id:"yumping-o35125",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-open-water-diver-en-la-manga--o35125",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-open-water-diver-en-la-manga--o35125",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,
    maxDepth:"18 m",
    included:["5 inmersiones","Manual PADI","Instructor PADI","Equipo completo","Seguro","Certificación PADI","Snacks"],
    notes:"El curso permite realizarse entre 3 y 5 días.",
    priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:207,siteSlugs:["la-manga-mar-menor"],
    title:"Curso Advanced Open Water PADI en La Manga, 4 días",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"advanced-open-water-la-manga-35127",
    type:"Curso",level:"Avanzado",duration:"3–4 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-padi-en-la-manga--o35127",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-padi-en-la-manga--o35127",
    offers:[{id:"yumping-o35127",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-padi-en-la-manga--o35127",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-padi-en-la-manga--o35127",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["5 inmersiones","Formación PADI","Equipo","Instructor","Certificación"],
    notes:"Curso Advanced de PADI para buceadores con Open Water.",
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:208,siteSlugs:["la-manga-mar-menor"],
    title:"Curso AOWD PADI en La Manga",
    destination:"La Manga del Mar Menor",region:"Murcia",slug:"aowd-padi-la-manga-17372",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","La Manga del Mar Menor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-avanzado-aowd-de-padi-la-manga--o17372",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-avanzado-aowd-de-padi-la-manga--o17372",
    offers:[{id:"yumping-o17372",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-avanzado-aowd-de-padi-la-manga--o17372",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-avanzado-aowd-de-padi-la-manga--o17372",priceFrom:325,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["5 inmersiones","Material homologado","Seguros","Certificado"],
    notes:"Dos inmersiones fijas: profunda y navegación; tres optativas.",
    priceFrom:325,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:209,siteSlugs:["la-azohia"],
    title:"Bautismo de buceo en La Azohía",
    destination:"La Azohía",region:"Murcia",slug:"bautismo-la-azohia-7655",
    type:"Bautismo",level:"Inicial",duration:"2,5 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","La Azohía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-la-azohia--o7655",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-la-azohia--o7655",
    offers:[{id:"yumping-o7655",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-la-azohia--o7655",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-la-azohia--o7655",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Explicación teórica","Equipo de buceo","Instructor","Inmersión"],
    notes:"Actividad de iniciación en la Bahía de Mazarrón.",
    priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:210,siteSlugs:["la-azohia"],
    title:"Bautismo de buceo en Cabo Tiñoso desde La Azohía",
    destination:"La Azohía",region:"Murcia",slug:"bautismo-cabo-tinoso-20620",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","La Azohía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-murcia--o20620",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-murcia--o20620",
    offers:[{id:"yumping-o20620",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-murcia--o20620",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-murcia--o20620",priceFrom:84.7,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Traslado en barco","Clase teórica","Instructor","Equipo"],
    notes:"Salida desde La Azohía hacia Cala Cerrada, en el Parque Natural del Cabo Tiñoso.",
    priceFrom:84.7,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:211,siteSlugs:["la-azohia"],
    title:"Bautismo de Buceo en Cabo Tiñoso, La Azohía 3h",
    destination:"La Azohía",region:"Murcia",slug:"bautismo-cabo-tinoso-la-azohia-76694",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas que quieren iniciarse en el buceo",
    tags:["Bautismo","Cabo Tiñoso","La Azohía","Fotos"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-la-azohia-3h--o76694",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-la-azohia-3h--o76694",
    offers:[{id:"yumping-o76694",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-la-azohia-3h--o76694",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-la-azohia-3h--o76694",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:212,siteSlugs:["la-azohia"],
    title:"Curso PADI Scuba Diver en La Azohía",
    destination:"La Azohía",region:"Murcia",slug:"scuba-diver-padi-la-azohia-68794",
    type:"Curso",level:"Inicial",duration:"2 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","La Azohía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-scuba-diver-de-padi-en-la-azohia--o68794",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-scuba-diver-de-padi-en-la-azohia--o68794",
    offers:[{id:"yumping-o68794",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-scuba-diver-de-padi-en-la-azohia--o68794",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-scuba-diver-de-padi-en-la-azohia--o68794",priceFrom:375,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,
    maxDepth:"12 m",
    included:["Inmersiones prácticas","Sesiones teóricas","Equipo","Entrenadores profesionales"],
    notes:"Curso PADI Scuba Diver de 2 días.",
    priceFrom:375,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:213,siteSlugs:["la-azohia"],
    title:"Curso Open Water Diver en La Azohía",
    destination:"La Azohía",region:"Murcia",slug:"open-water-la-azohia-60038",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","La Azohía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-open-water-diver-en-la-azohia--o60038",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-open-water-diver-en-la-azohia--o60038",
    offers:[{id:"yumping-o60038",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-open-water-diver-en-la-azohia--o60038",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-open-water-diver-en-la-azohia--o60038",priceFrom:625,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Formación","Inmersiones","Equipo"],
    notes:"Duración habitual 4 días, adaptable según necesidades.",
    priceFrom:625,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:214,siteSlugs:["la-azohia"],
    title:"Salida doble de buceo en Cabo Tiñoso para titulados",
    destination:"La Azohía",region:"Murcia",slug:"doble-inmersion-cabo-tinoso-titulados-4717",
    type:"Fun Dive",level:"Intermedio",duration:"4–5 horas",audience:"Personas interesadas en fun dive en Murcia",
    tags:["Buceo","Murcia","Yumping","La Azohía"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/salida-doble-de-buceo-en-cabo-tinoso-titulados--o4717",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/salida-doble-de-buceo-en-cabo-tinoso-titulados--o4717",
    offers:[{id:"yumping-o4717",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/salida-doble-de-buceo-en-cabo-tinoso-titulados--o4717",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/salida-doble-de-buceo-en-cabo-tinoso-titulados--o4717",priceFrom:165,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["2 inmersiones","Barco","Botella y plomos","Tasas de la reserva"],
    notes:"Pensada para buceadores titulados; el equipo completo no está incluido.",
    priceFrom:165,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:215,siteSlugs:["puerto-mazarron"],
    title:"Bautismo de buceo desde barco en Cabo Tiñoso, 3h",
    destination:"Puerto de Mazarrón",region:"Murcia",slug:"bautismo-cabo-tinoso-barco-32148",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Murcia",
    tags:["Buceo","Murcia","Yumping","Puerto de Mazarrón"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-desde-barco-en-mazarron--o32148",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-desde-barco-en-mazarron--o32148",
    offers:[{id:"yumping-o32148",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-desde-barco-en-mazarron--o32148",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-desde-barco-en-mazarron--o32148",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Barco","Equipo","Seguro"],
    notes:"Bautismo desde barco en Cabo Tiñoso.",
    priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:216,siteSlugs:["puerto-mazarron"],
    title:"Curso intensivo Open Water en Mazarrón, 3 días",
    destination:"Puerto de Mazarrón",region:"Murcia",slug:"open-water-mazarron-32149",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","Puerto de Mazarrón"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-intensivo-buceo-open-water-mazarron-3-dias--o32149",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-intensivo-buceo-open-water-mazarron-3-dias--o32149",
    offers:[{id:"yumping-o32149",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-intensivo-buceo-open-water-mazarron-3-dias--o32149",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-intensivo-buceo-open-water-mazarron-3-dias--o32149",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Teoría PADI","Prácticas","Equipo completo","Formación"],
    notes:"Curso intensivo de aproximadamente 18 horas.",
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:217,siteSlugs:["puerto-mazarron"],
    title:"Curso de buceo FEDA 1 Estrella en Puerto de Mazarrón",
    destination:"Puerto de Mazarrón",region:"Murcia",slug:"feda-1-estrella-mazarron-32141",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","Puerto de Mazarrón"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-feda-1-estrella-en-pto-de-mazarron--o32141",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-feda-1-estrella-en-pto-de-mazarron--o32141",
    offers:[{id:"yumping-o32141",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-feda-1-estrella-en-pto-de-mazarron--o32141",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-feda-1-estrella-en-pto-de-mazarron--o32141",priceFrom:385,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,
    maxDepth:"25 m",
    included:["Profesor","Material didáctico","Inmersiones desde barco","Equipo completo","Licencia FEDA","Diploma","Seguros"],
    notes:"Curso FEDA 1 Estrella; el certificado médico no está incluido.",
    priceFrom:385,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:218,siteSlugs:["cartagena"],
    title:"Curso Open Water Diver en Cartagena",
    destination:"Cartagena",region:"Murcia",slug:"open-water-cartagena-62455",
    type:"Curso",level:"Inicial",duration:"2–5 días",audience:"Personas interesadas en curso en Murcia",
    tags:["Buceo","Murcia","Yumping","Cartagena"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-open-water-diver-en-cartagena--o62455",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-open-water-diver-en-cartagena--o62455",
    offers:[{id:"yumping-o62455",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-open-water-diver-en-cartagena--o62455",sourceUrl:"https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-open-water-diver-en-cartagena--o62455",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Módulos teóricos online","Repaso presencial","Prácticas","Certificación"],
    notes:"La ficha actual de Yumping se presenta como curso Open Water; el proveedor indica formación flexible.",
    priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:219,siteSlugs:["la-herradura"],
    title:"Bautizo de Buceo en Granada 2 horas",
    destination:"La Herradura",region:"Andalucía",slug:"batizo-de-bceo-en-granada-horas-219",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-en-granada-2-horas--o36122",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-en-granada-2-horas--o36122",
    offers:[{id:"yumping-o36122",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-en-granada-2-horas--o36122",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-en-granada-2-horas--o36122",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:220,siteSlugs:["la-herradura"],
    title:"Bautizo de buceo personalizado Marina del Este, 2h",
    destination:"La Herradura",region:"Andalucía",slug:"batizo-de-bceo-personalizado-marina-del-este-h-220",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-personalizado-en-la-herradura--o16443",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-personalizado-en-la-herradura--o16443",
    offers:[{id:"yumping-o16443",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-personalizado-en-la-herradura--o16443",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-personalizado-en-la-herradura--o16443",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:221,siteSlugs:["la-herradura"],
    title:"Bautizo de buceo para parejas en La Herradura 5h",
    destination:"La Herradura",region:"Andalucía",slug:"batizo-de-bceo-para-parejas-en-la-herradra-h-221",
    type:"Bautismo",level:"Inicial",duration:"5 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-para-parejas-en-la-herradura-5h--o60978",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-para-parejas-en-la-herradura-5h--o60978",
    offers:[{id:"yumping-o60978",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-para-parejas-en-la-herradura-5h--o60978",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-para-parejas-en-la-herradura-5h--o60978",priceFrom:135,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:135,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:222,siteSlugs:["la-herradura"],
    title:"Curso PADI Open Water Diver en Granada",
    destination:"La Herradura",region:"Andalucía",slug:"crso-padi-open-water-diver-en-granada-222",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-padi-open-water-diver-en-granada--o36123",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-padi-open-water-diver-en-granada--o36123",
    offers:[{id:"yumping-o36123",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/curso-padi-open-water-diver-en-granada--o36123",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-padi-open-water-diver-en-granada--o36123",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:223,siteSlugs:["la-herradura"],
    title:"Curso Open Water de buceo La Herradura",
    destination:"La Herradura",region:"Andalucía",slug:"crso-open-water-de-bceo-la-herradra-223",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-open-water-de-buceo-la-herradura--o62206",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-open-water-de-buceo-la-herradura--o62206",
    offers:[{id:"yumping-o62206",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/curso-open-water-de-buceo-la-herradura--o62206",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-open-water-de-buceo-la-herradura--o62206",priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:224,siteSlugs:["la-herradura"],
    title:"Curso de Buceo PADI Scuba Diver Granada",
    destination:"La Herradura",region:"Andalucía",slug:"crso-de-bceo-padi-scba-diver-granada-224",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-scuba-diver-granada--o36125",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-scuba-diver-granada--o36125",
    offers:[{id:"yumping-o36125",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-scuba-diver-granada--o36125",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-scuba-diver-granada--o36125",priceFrom:295,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:295,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:225,siteSlugs:["la-herradura"],
    title:"PADI Advanced Open Water, La Herradura",
    destination:"La Herradura",region:"Andalucía",slug:"padi-advanced-open-water-la-herradra-225",
    type:"Curso",level:"Avanzado",duration:"Según formación",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/padi-advanced-open-water-la-herradura--o16459",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/padi-advanced-open-water-la-herradura--o16459",
    offers:[{id:"yumping-o16459",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/padi-advanced-open-water-la-herradura--o16459",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/padi-advanced-open-water-la-herradura--o16459",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:226,siteSlugs:["la-herradura"],
    title:"Curso de buceo PADI Rescue Diver en La Herradura",
    destination:"La Herradura",region:"Andalucía",slug:"crso-de-bceo-padi-resce-diver-en-la-herradra-226",
    type:"Curso",level:"Avanzado",duration:"Según formación",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-rescue-diver-en-la-herradura--o16465",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-rescue-diver-en-la-herradura--o16465",
    offers:[{id:"yumping-o16465",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-rescue-diver-en-la-herradura--o16465",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-rescue-diver-en-la-herradura--o16465",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:227,siteSlugs:["la-herradura"],
    title:"Inmersión con equipo en La Herradura 4 horas",
    destination:"La Herradura",region:"Andalucía",slug:"inmersio-n-con-eqipo-en-la-herradra-horas-227",
    type:"Fun Dive",level:"Intermedio",duration:"4–5 horas",audience:"Personas interesadas en fun dive en Andalucía",
    tags:["Buceo","Andalucía","Yumping","La Herradura"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/granada/inmersion-con-equipo-en-la-herradura-4-horas--o57606",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/inmersion-con-equipo-en-la-herradura-4-horas--o57606",
    offers:[{id:"yumping-o57606",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/granada/inmersion-con-equipo-en-la-herradura-4-horas--o57606",sourceUrl:"https://www.yumping.com/ofertas/buceo/granada/inmersion-con-equipo-en-la-herradura-4-horas--o57606",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:228,siteSlugs:["nerja"],
    title:"Curso Advanced Open Water Diver 2 o 3 días Nerja",
    destination:"Nerja",region:"Andalucía",slug:"crso-advanced-open-water-diver-o-di-as-nerja-228",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Nerja"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-advanced-open-water-diver-2-o-3-dias-nerja--o62513",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-advanced-open-water-diver-2-o-3-dias-nerja--o62513",
    offers:[{id:"yumping-o62513",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-advanced-open-water-diver-2-o-3-dias-nerja--o62513",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-advanced-open-water-diver-2-o-3-dias-nerja--o62513",priceFrom:355,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:355,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:229,siteSlugs:["nerja"],
    title:"PADI Open Water Diver en Nerja durante 4 días",
    destination:"Nerja",region:"Andalucía",slug:"padi-open-water-diver-en-nerja-drante-di-as-229",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Nerja"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-open-water-diver-en-nerja-durante-4-dias--o62519",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-open-water-diver-en-nerja-durante-4-dias--o62519",
    offers:[{id:"yumping-o62519",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/padi-open-water-diver-en-nerja-durante-4-dias--o62519",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-open-water-diver-en-nerja-durante-4-dias--o62519",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:230,siteSlugs:["nerja"],
    title:"Curso Discover Scuba desde barco en costa de Nerja",
    destination:"Nerja",region:"Andalucía",slug:"crso-discover-scba-desde-barco-en-costa-de-nerja-230",
    type:"Bautismo",level:"Inicial",duration:"4 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Nerja"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",
    offers:[{id:"yumping-o62523",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:231,siteSlugs:["nerja"],
    title:"Curso de buceo Scuba Diver en costa de Nerja",
    destination:"Nerja",region:"Andalucía",slug:"crso-de-bceo-scba-diver-en-costa-de-nerja-231",
    type:"Curso",level:"Inicial",duration:"2 días + teoría online",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Nerja"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",
    offers:[{id:"yumping-o62523-scubadiver",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",priceFrom:310,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:310,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:232,siteSlugs:["maro-cerro-gordo"],
    title:"Snorkel para niños acantilados de Maro Cerro Gordo",
    destination:"Nerja",region:"Andalucía",slug:"snorkel-ninos-maro-cerro-gordo-62522",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Familias con niños desde 8 años",
    tags:["Snorkel","Maro-Cerro Gordo","Niños","Nerja"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-para-ninos-acantilados-de-maro-cerro-gordo--o62522",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-para-ninos-acantilados-de-maro-cerro-gordo--o62522",
    offers:[{id:"yumping-o62522",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-para-ninos-acantilados-de-maro-cerro-gordo--o62522",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-para-ninos-acantilados-de-maro-cerro-gordo--o62522",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:8,
    priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:233,siteSlugs:["arrecife-sirenas"],
    title:"Bautismo de buceo en Cabo de Gata",
    destination:"Cabo de Gata",region:"Andalucía",slug:"batismo-de-bceo-en-cabo-de-gata-233",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Cabo de Gata"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata--o26563",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata--o26563",
    offers:[{id:"yumping-o26563",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata--o26563",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata--o26563",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:234,siteSlugs:["arrecife-sirenas"],
    title:"Bautizo de buceo en Cabo de Gata, 3h",
    destination:"Cabo de Gata",region:"Andalucía",slug:"batizo-de-bceo-en-cabo-de-gata-h-234",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Cabo de Gata"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-en-cabo-de-gata--o36129",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-en-cabo-de-gata--o36129",
    offers:[{id:"yumping-o36129",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-en-cabo-de-gata--o36129",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-en-cabo-de-gata--o36129",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:235,siteSlugs:["arrecife-sirenas"],
    title:"Curso OPEN WATER en Cabo de Gata",
    destination:"Cabo de Gata",region:"Andalucía",slug:"crso-open-water-en-cabo-de-gata-235",
    type:"Curso",level:"Inicial",duration:"2–3 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Cabo de Gata"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-en-cabo-de-gata--o59202",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-en-cabo-de-gata--o59202",
    offers:[{id:"yumping-o59202",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-en-cabo-de-gata--o59202",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-en-cabo-de-gata--o59202",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:236,siteSlugs:["arrecife-sirenas"],
    title:"Curso Open Water Diver en Cabo de Gata 4 días",
    destination:"Cabo de Gata",region:"Andalucía",slug:"crso-open-water-diver-en-cabo-de-gata-di-as-236",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Cabo de Gata"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-cabo-de-gata-3-dias--o68413",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-cabo-de-gata-3-dias--o68413",
    offers:[{id:"yumping-o68413",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-cabo-de-gata-3-dias--o68413",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-cabo-de-gata-3-dias--o68413",priceFrom:430,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:430,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:237,siteSlugs:["roquetas-de-mar"],
    title:"Bautismo de buceo en Roquetas de Mar",
    destination:"Roquetas de Mar",region:"Andalucía",slug:"batismo-de-bceo-en-roqetas-de-mar-237",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Roquetas de Mar"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-roquetas-de-mar--o20488",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-roquetas-de-mar--o20488",
    offers:[{id:"yumping-o20488",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-roquetas-de-mar--o20488",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-roquetas-de-mar--o20488",priceFrom:49.9,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:49.9,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:238,siteSlugs:["roquetas-de-mar"],
    title:"PADI Advanced Open Water Diver en Roquetas de Mar",
    destination:"Roquetas de Mar",region:"Andalucía",slug:"padi-advanced-open-water-diver-en-roqetas-de-mar-238",
    type:"Curso",level:"Avanzado",duration:"3–5 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Roquetas de Mar"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/padi-advanced-open-water-diver-en-roquetas-de-mar--o27804",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/padi-advanced-open-water-diver-en-roquetas-de-mar--o27804",
    offers:[{id:"yumping-o27804",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/padi-advanced-open-water-diver-en-roquetas-de-mar--o27804",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/padi-advanced-open-water-diver-en-roquetas-de-mar--o27804",priceFrom:330,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:330,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:239,siteSlugs:["roquetas-de-mar"],
    title:"Curso Open Water Diver en Roquetas de Mar",
    destination:"Roquetas de Mar",region:"Andalucía",slug:"crso-open-water-diver-en-roqetas-de-mar-239",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Roquetas de Mar"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-roquetas-de-mar--o27803",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-roquetas-de-mar--o27803",
    offers:[{id:"yumping-o27803",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-roquetas-de-mar--o27803",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-roquetas-de-mar--o27803",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:240,siteSlugs:["aguadulce"],
    title:"Bautismo submarino Puerto de Aguadulce y vídeos 2h",
    destination:"Aguadulce",region:"Andalucía",slug:"batismo-sbmarino-perto-de-agadlce-y-vi-deos-h-240",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Aguadulce"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-submarino-en-aguadulce-y-fotos--o37116",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-submarino-en-aguadulce-y-fotos--o37116",
    offers:[{id:"yumping-o37116",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-submarino-en-aguadulce-y-fotos--o37116",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-submarino-en-aguadulce-y-fotos--o37116",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:241,siteSlugs:["aguadulce"],
    title:"Bautismo de buceo para parejas en Aguadulce",
    destination:"Aguadulce",region:"Andalucía",slug:"batismo-de-bceo-para-parejas-en-agadlce-241",
    type:"Bautismo",level:"Inicial",duration:"2h30",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Aguadulce"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-para-parejas-en-aguadulce--o20493",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-para-parejas-en-aguadulce--o20493",
    offers:[{id:"yumping-o20493",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-para-parejas-en-aguadulce--o20493",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-para-parejas-en-aguadulce--o20493",priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:242,siteSlugs:["aguadulce"],
    title:"Bautizo de buceo para niños Aguadulce desde 8 años",
    destination:"Aguadulce",region:"Andalucía",slug:"batizo-de-bceo-para-nin-os-agadlce-desde-an-os-242",
    type:"Bautismo",level:"Inicial",duration:"1 hora aprox.",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Aguadulce"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-para-ninos-aguadulce-desde-8-anos--o37277",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-para-ninos-aguadulce-desde-8-anos--o37277",
    offers:[{id:"yumping-o37277",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-para-ninos-aguadulce-desde-8-anos--o37277",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-para-ninos-aguadulce-desde-8-anos--o37277",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:243,siteSlugs:["aguadulce"],
    title:"Curso Advanced Open Water, Puerto Aguadulce 5 días",
    destination:"Aguadulce",region:"Andalucía",slug:"crso-advanced-open-water-perto-agadlce-di-as-243",
    type:"Curso",level:"Avanzado",duration:"3–5 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Aguadulce"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-discover-scuba-diving-aguadulce--o20947",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-discover-scuba-diving-aguadulce--o20947",
    offers:[{id:"yumping-o20947",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-discover-scuba-diving-aguadulce--o20947",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-discover-scuba-diving-aguadulce--o20947",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:244,siteSlugs:["punta-marroqui-tarifa"],
    title:"Bautismo de buceo en mar en Tarifa, 2 horas",
    destination:"Tarifa",region:"Andalucía",slug:"bautismo-de-buceo-en-mar-en-tarifa-2-horas-244",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-mar-en-tarifa-2-horas--o53863",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-mar-en-tarifa-2-horas--o53863",
    offers:[{id:"yumping-o53863",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-mar-en-tarifa-2-horas--o53863",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-mar-en-tarifa-2-horas--o53863",priceFrom:59.99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:59.99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:245,siteSlugs:["punta-marroqui-tarifa"],
    title:"Inmersión de buceo en Tarifa sin equipo",
    destination:"Tarifa",region:"Andalucía",slug:"inmersion-de-buceo-en-tarifa-sin-equipo-245",
    type:"Fun Dive",level:"Intermedio",duration:"Según inmersión",audience:"Personas interesadas en fun dive en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-tarifa-sin-equipo--o53865",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-tarifa-sin-equipo--o53865",
    offers:[{id:"yumping-o53865",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-tarifa-sin-equipo--o53865",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-tarifa-sin-equipo--o53865",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:246,siteSlugs:["punta-marroqui-tarifa"],
    title:"Salidas de buceo en Tarifa grupos pequeños 1h",
    destination:"Tarifa",region:"Andalucía",slug:"salidas-de-buceo-en-tarifa-grupos-pequenos-1h-246",
    type:"Fun Dive",level:"Intermedio",duration:"1 hora",audience:"Personas interesadas en fun dive en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salidas-de-buceo-en-tarifa-grupos-pequenos-1h--o61941",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salidas-de-buceo-en-tarifa-grupos-pequenos-1h--o61941",
    offers:[{id:"yumping-o61941",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/salidas-de-buceo-en-tarifa-grupos-pequenos-1h--o61941",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/salidas-de-buceo-en-tarifa-grupos-pequenos-1h--o61941",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:247,siteSlugs:["punta-marroqui-tarifa"],
    title:"Inmersión doble en la isla de Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"inmersion-doble-en-la-isla-de-tarifa-247",
    type:"Fun Dive",level:"Intermedio",duration:"Media jornada",audience:"Personas interesadas en fun dive en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-la-isla-de-tarifa--o32270",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-la-isla-de-tarifa--o32270",
    offers:[{id:"yumping-o32270",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-la-isla-de-tarifa--o32270",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-la-isla-de-tarifa--o32270",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:248,siteSlugs:["punta-marroqui-tarifa"],
    title:"Bautismo de buceo en Punta de Europa, 3 horas",
    destination:"Tarifa",region:"Andalucía",slug:"bautismo-de-buceo-en-punta-de-europa-3-horas-248",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-punta-de-europa-tarifa-3h--o57389",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-punta-de-europa-tarifa-3h--o57389",
    offers:[{id:"yumping-o57389",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-punta-de-europa-tarifa-3h--o57389",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-punta-de-europa-tarifa-3h--o57389",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:249,siteSlugs:["punta-marroqui-tarifa"],
    title:"Bautismo de buceo desde playa en Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"bautismo-de-buceo-desde-playa-en-tarifa-249",
    type:"Bautismo",level:"Inicial",duration:"< media jornada",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-desde-playa-en-tarifa--o17298",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-desde-playa-en-tarifa--o17298",
    offers:[{id:"yumping-o17298",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-desde-playa-en-tarifa--o17298",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-desde-playa-en-tarifa--o17298",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:250,siteSlugs:["punta-marroqui-tarifa"],
    title:"Bautismo de buceo, 2 inmersiones en Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"bautismo-de-buceo-2-inmersiones-en-tarifa-250",
    type:"Bautismo",level:"Inicial",duration:"1–2 días",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-2-inmersiones-en-tarifa--o61947",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-2-inmersiones-en-tarifa--o61947",
    offers:[{id:"yumping-o61947",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-2-inmersiones-en-tarifa--o61947",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-2-inmersiones-en-tarifa--o61947",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:251,siteSlugs:["punta-marroqui-tarifa"],
    title:"Ruta guiada de snorkel por isla de Tarifa 90 min",
    destination:"Tarifa",region:"Andalucía",slug:"ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min-251",
    type:"Snorkel",level:"Inicial",duration:"90 minutos",audience:"Personas interesadas en snorkel en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min--o66279",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min--o66279",
    offers:[{id:"yumping-o66279",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min--o66279",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min--o66279",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:252,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso Discover Scuba Diving, Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"curso-discover-scuba-diving-tarifa-252",
    type:"Curso",level:"Inicial",duration:"Jornada completa",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-discover-scuba-diving-tarifa--o17300",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-discover-scuba-diving-tarifa--o17300",
    offers:[{id:"yumping-o17300",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-discover-scuba-diving-tarifa--o17300",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-discover-scuba-diving-tarifa--o17300",priceFrom:159,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:159,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:253,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso PADI Open Water Diver en Tarifa 4 días",
    destination:"Tarifa",region:"Andalucía",slug:"curso-padi-open-water-diver-en-tarifa-4-dias-253",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-open-water-diver-en-tarifa-4-dias--o57419",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-open-water-diver-en-tarifa-4-dias--o57419",
    offers:[{id:"yumping-o57419",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-open-water-diver-en-tarifa-4-dias--o57419",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-open-water-diver-en-tarifa-4-dias--o57419",priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:254,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso PADI Open Water Diver en Tarifa 4 días",
    destination:"Tarifa",region:"Andalucía",slug:"curso-padi-open-water-diver-en-tarifa-4-dias-254",
    type:"Curso",level:"Inicial",duration:"3–4 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-open-water-diver-en-tarifa-4-dias--o66281",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-open-water-diver-en-tarifa-4-dias--o66281",
    offers:[{id:"yumping-o66281",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-open-water-diver-en-tarifa-4-dias--o66281",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-open-water-diver-en-tarifa-4-dias--o66281",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:255,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso PADI Advanced Open Water en Tarifa de 2 días",
    destination:"Tarifa",region:"Andalucía",slug:"curso-padi-advanced-open-water-en-tarifa-de-2-dias-255",
    type:"Curso",level:"Avanzado",duration:"2 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-open-water-en-tarifa-de-2-dias--o19201",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-open-water-en-tarifa-de-2-dias--o19201",
    offers:[{id:"yumping-o19201",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-open-water-en-tarifa-de-2-dias--o19201",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-open-water-en-tarifa-de-2-dias--o19201",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:256,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso PADI Advanced Diver en Tarifa, 3 días",
    destination:"Tarifa",region:"Andalucía",slug:"curso-padi-advanced-diver-en-tarifa-3-dias-256",
    type:"Curso",level:"Avanzado",duration:"3 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-diver-en-tarifa-3-dias--o17280",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-diver-en-tarifa-3-dias--o17280",
    offers:[{id:"yumping-o17280",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-diver-en-tarifa-3-dias--o17280",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-diver-en-tarifa-3-dias--o17280",priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:257,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso PADI Scuba Diver en Tarifa de 2 días",
    destination:"Tarifa",region:"Andalucía",slug:"curso-padi-scuba-diver-en-tarifa-de-2-dias-257",
    type:"Curso",level:"Inicial",duration:"2 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-scuba-diver-en-tarifa-de-2-dias--o19198",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-scuba-diver-en-tarifa-de-2-dias--o19198",
    offers:[{id:"yumping-o19198",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-scuba-diver-en-tarifa-de-2-dias--o19198",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-scuba-diver-en-tarifa-de-2-dias--o19198",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:258,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso PADI Rescue Diver en Tarifa, 1–2 días",
    destination:"Tarifa",region:"Andalucía",slug:"curso-padi-rescue-diver-en-tarifa-1-2-dias-258",
    type:"Curso",level:"Avanzado",duration:"1–2 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-apnea-en-la-isla-de-las-palomas-4-horas--o70324",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-apnea-en-la-isla-de-las-palomas-4-horas--o70324",
    offers:[{id:"yumping-o70324",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-apnea-en-la-isla-de-las-palomas-4-horas--o70324",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-apnea-en-la-isla-de-las-palomas-4-horas--o70324",priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:259,siteSlugs:["punta-marroqui-tarifa"],
    title:"Curso de buceo de Nitrox en costa de Tarifa",
    destination:"Tarifa",region:"Andalucía",slug:"curso-de-buceo-de-nitrox-en-costa-de-tarifa-259",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","Tarifa"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-de-nitrox-en-costa-de-tarifa--o62081",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-de-nitrox-en-costa-de-tarifa--o62081",
    offers:[{id:"yumping-o62081",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-de-nitrox-en-costa-de-tarifa--o62081",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-de-nitrox-en-costa-de-tarifa--o62081",priceFrom:160,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:160,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:260,siteSlugs:["puerto-santa-maria"],
    title:"Iniciación Open Water Diver Puerto de Santa María",
    destination:"El Puerto de Santa María",region:"Andalucía",slug:"iniciacion-open-water-diver-puerto-de-santa-maria-260",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Puerto de Santa María"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/iniciacion-open-water-diver-puerto-de-santa-maria--o28548",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/iniciacion-open-water-diver-puerto-de-santa-maria--o28548",
    offers:[{id:"yumping-o28548",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/iniciacion-open-water-diver-puerto-de-santa-maria--o28548",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/iniciacion-open-water-diver-puerto-de-santa-maria--o28548",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:261,siteSlugs:["puerto-santa-maria"],
    title:"PADI Advanced Open Water, Puerto de Santa María",
    destination:"El Puerto de Santa María",region:"Andalucía",slug:"padi-advanced-open-water-puerto-de-santa-maria-261",
    type:"Curso",level:"Avanzado",duration:"2 días",audience:"Personas interesadas en curso en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Puerto de Santa María"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/padi-advanced-open-water-puerto-de-santa-maria--o28550",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/padi-advanced-open-water-puerto-de-santa-maria--o28550",
    offers:[{id:"yumping-o28550",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/padi-advanced-open-water-puerto-de-santa-maria--o28550",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cadiz/padi-advanced-open-water-puerto-de-santa-maria--o28550",priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:262,siteSlugs:["puerto-santa-maria"],
    title:"Inmersión de buceo doble en costa de Gibraltar",
    destination:"El Puerto de Santa María",region:"Andalucía",slug:"inmersion-de-buceo-doble-en-costa-de-gibraltar-262",
    type:"Fun Dive",level:"Intermedio",duration:"Media jornada",audience:"Personas interesadas en fun dive en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Puerto de Santa María"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-costa-de-gibraltar--o32266",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-costa-de-gibraltar--o32266",
    offers:[{id:"yumping-o32266",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-costa-de-gibraltar--o32266",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-costa-de-gibraltar--o32266",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:263,siteSlugs:["puerto-santa-maria"],
    title:"Inmersión de buceo doble en Cádiz desde barco",
    destination:"El Puerto de Santa María",region:"Andalucía",slug:"inmersion-de-buceo-doble-en-cadiz-desde-barco-263",
    type:"Fun Dive",level:"Intermedio",duration:"Media jornada",audience:"Personas interesadas en fun dive en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Puerto de Santa María"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-cadiz-desde-barco--o32284",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-cadiz-desde-barco--o32284",
    offers:[{id:"yumping-o32284",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-cadiz-desde-barco--o32284",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-cadiz-desde-barco--o32284",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:264,siteSlugs:["puerto-santa-maria"],
    title:"Bautizo en piscina + reportaje fotos submarino",
    destination:"El Puerto de Santa María",region:"Andalucía",slug:"bautizo-en-piscina-reportaje-fotos-submarino-264",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Puerto de Santa María"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-en-piscina-reportaje-fotos-submarino--o28511",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-en-piscina-reportaje-fotos-submarino--o28511",
    offers:[{id:"yumping-o28511",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-en-piscina-reportaje-fotos-submarino--o28511",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-en-piscina-reportaje-fotos-submarino--o28511",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:265,siteSlugs:["puerto-santa-maria"],
    title:"Bautizo de buceo con fotografía Puerto Santa María",
    destination:"El Puerto de Santa María",region:"Andalucía",slug:"bautizo-de-buceo-con-fotografia-puerto-santa-maria-265",
    type:"Bautismo",level:"Inicial",duration:"90 min–2 h",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Puerto de Santa María"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-de-buceo-con-fotografia-puerto-santa-maria--o28483",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-de-buceo-con-fotografia-puerto-santa-maria--o28483",
    offers:[{id:"yumping-o28483",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-de-buceo-con-fotografia-puerto-santa-maria--o28483",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautizo-de-buceo-con-fotografia-puerto-santa-maria--o28483",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:266,siteSlugs:["el-palmar-cadiz"],
    title:"Bautismo de buceo en piscina 45 minutos El Palmar",
    destination:"El Palmar",region:"Andalucía",slug:"bautismo-de-buceo-en-piscina-45-minutos-el-palmar-266",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Personas interesadas en bautismo en Andalucía",
    tags:["Buceo","Andalucía","Yumping","El Palmar"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-piscina-45-minutos-el-palmar--o61964",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-piscina-45-minutos-el-palmar--o61964",
    offers:[{id:"yumping-o61964",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-piscina-45-minutos-el-palmar--o61964",sourceUrl:"https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-piscina-45-minutos-el-palmar--o61964",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:267,siteSlugs:["port-andratx"],
    title:"Discover Scuba Diving desde barco Port Andratx 4h",destination:"Port d'Andratx",region:"Baleares",slug:"discover-scuba-diving-desde-barco-port-andratx-4h-267",
    type:"Bautismo",level:"Inicial",duration:"4 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Port d'Andratx"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/discover-scuba-diving-parque-natural-dragonera--o56220",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/discover-scuba-diving-parque-natural-dragonera--o56220",
    offers:[{id:"yumping-o56220",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/discover-scuba-diving-parque-natural-dragonera--o56220",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/discover-scuba-diving-parque-natural-dragonera--o56220",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:268,siteSlugs:["cala-santanyi"],
    title:"Discover Scuba Diving en Cala Santanyi, 2h",destination:"Cala Santanyí",region:"Baleares",slug:"discover-scuba-diving-en-cala-santanyi-2h-268",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Santanyí"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-santanyi--o56243",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-santanyi--o56243",
    offers:[{id:"yumping-o56243",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-santanyi--o56243",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-santanyi--o56243",priceFrom:88,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:88,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:269,siteSlugs:["malgrats"],
    title:"Bautismo de buceo en la Reserva Marina de Malgrats",destination:"Calvià",region:"Baleares",slug:"bautismo-de-buceo-en-la-reserva-marina-de-malgrats-269",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Calvià"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-reserva-marina-de-malgrats--o54957",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-reserva-marina-de-malgrats--o54957",
    offers:[{id:"yumping-o54957",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-reserva-marina-de-malgrats--o54957",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-reserva-marina-de-malgrats--o54957",priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:270,siteSlugs:["cala-millor-mallorca"],
    title:"Bautismo de buceo en Cala Millor Mallorca 3 horas",destination:"Cala Millor",region:"Baleares",slug:"bautismo-de-buceo-en-cala-millor-mallorca-3-horas-270",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Millor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-millor-mallorca-3-horas--o57582",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-millor-mallorca-3-horas--o57582",
    offers:[{id:"yumping-o57582",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-millor-mallorca-3-horas--o57582",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-millor-mallorca-3-horas--o57582",priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:271,siteSlugs:["port-andratx"],
    title:"Excursión guiada snorkel por costa de Andratx, 2h",destination:"Port d'Andratx",region:"Baleares",slug:"excursion-guiada-snorkel-por-costa-de-andratx-2h-271",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Port d'Andratx"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/tour-de-snorkel-por-isla-del-dragon-2-horas--o42889",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/tour-de-snorkel-por-isla-del-dragon-2-horas--o42889",
    offers:[{id:"yumping-o42889",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/tour-de-snorkel-por-isla-del-dragon-2-horas--o42889",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/tour-de-snorkel-por-isla-del-dragon-2-horas--o42889",priceFrom:49,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:49,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:272,siteSlugs:["port-andratx"],
    title:"Bautismo de Buceo desde playa Port d'Andratx, 2.5h",destination:"Port d'Andratx",region:"Baleares",slug:"bautismo-de-buceo-desde-playa-port-d-andratx-2-5h-272",
    type:"Bautismo",level:"Inicial",duration:"2,5 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Port d'Andratx"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-palma-de-mallorca-3h--o28721",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-palma-de-mallorca-3h--o28721",
    offers:[{id:"yumping-o28721",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-palma-de-mallorca-3h--o28721",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-palma-de-mallorca-3h--o28721",priceFrom:129,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:129,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:273,siteSlugs:["palma-aquarium"],
    title:"Buceo con tiburones en el Palma Aquarium Mallorca",destination:"Palma de Mallorca",region:"Baleares",slug:"buceo-con-tiburones-en-el-palma-aquarium-mallorca-273",
    type:"Fun Dive",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en fun dive en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Palma de Mallorca"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/buceo-con-tiburones-en-el-palma-aquarium-mallorca--o56215",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/buceo-con-tiburones-en-el-palma-aquarium-mallorca--o56215",
    offers:[{id:"yumping-o56215",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/buceo-con-tiburones-en-el-palma-aquarium-mallorca--o56215",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/buceo-con-tiburones-en-el-palma-aquarium-mallorca--o56215",priceFrom:210,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:210,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:274,siteSlugs:["cala-millor-mallorca"],
    title:"Curso buceo Open Water Diver en Cala Millor 3 días",destination:"Cala Millor",region:"Baleares",slug:"curso-buceo-open-water-diver-en-cala-millor-3-dias-274",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Millor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-open-water-diver-en-cala-millor-3-dias--o86509",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-open-water-diver-en-cala-millor-3-dias--o86509",
    offers:[{id:"yumping-o86509",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-open-water-diver-en-cala-millor-3-dias--o86509",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-open-water-diver-en-cala-millor-3-dias--o86509",priceFrom:550,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:550,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:275,siteSlugs:["cala-millor-mallorca"],
    title:"Excursión de snorkelling en Mallorca, 2 horas",destination:"Cala Millor",region:"Baleares",slug:"excursion-de-snorkelling-en-mallorca-2-horas-275",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Millor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/excursion-de-snorkelling-en-mallorca-2-horas--o57580",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/excursion-de-snorkelling-en-mallorca-2-horas--o57580",
    offers:[{id:"yumping-o57580",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/excursion-de-snorkelling-en-mallorca-2-horas--o57580",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/excursion-de-snorkelling-en-mallorca-2-horas--o57580",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:276,siteSlugs:["dragonera-mallorca"],
    title:"Snorkel en el parque natural de la Dragonera 2h30m",destination:"La Dragonera",region:"Baleares",slug:"snorkel-en-el-parque-natural-de-la-dragonera-2h30m-276",
    type:"Snorkel",level:"Inicial",duration:"2,5 horas",audience:"Personas interesadas en snorkel en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","La Dragonera"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/snorkel-en-el-parque-natural-de-la-dragonera--o56218",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/snorkel-en-el-parque-natural-de-la-dragonera--o56218",
    offers:[{id:"yumping-o56218",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/snorkel-en-el-parque-natural-de-la-dragonera--o56218",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/snorkel-en-el-parque-natural-de-la-dragonera--o56218",priceFrom:69,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:69,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:277,siteSlugs:["malgrats"],
    title:"Snorkeling a las Islas Malgrats desde un barco",destination:"Santa Ponça",region:"Baleares",slug:"snorkeling-a-las-islas-malgrats-desde-un-barco-277",
    type:"Snorkel",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en snorkel en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Santa Ponça"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/snorkeling-a-las-islas-malgrats-desde-un-barco--o44539",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/snorkeling-a-las-islas-malgrats-desde-un-barco--o44539",
    offers:[{id:"yumping-o44539",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/snorkeling-a-las-islas-malgrats-desde-un-barco--o44539",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/snorkeling-a-las-islas-malgrats-desde-un-barco--o44539",priceFrom:61,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:61,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:278,siteSlugs:["malgrats"],
    title:"Inmersión en Reserva Marina de Mallorca con equipo",destination:"Calvià",region:"Baleares",slug:"inmersion-en-reserva-marina-de-mallorca-con-equipo-278",
    type:"Fun Dive",level:"Intermedio",duration:"Consultar disponibilidad",audience:"Personas interesadas en fun dive en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Calvià"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/inmersion-en-reserva-marina-de-mallorca-con-equipo--o54959",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/inmersion-en-reserva-marina-de-mallorca-con-equipo--o54959",
    offers:[{id:"yumping-o54959",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/inmersion-en-reserva-marina-de-mallorca-con-equipo--o54959",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/inmersion-en-reserva-marina-de-mallorca-con-equipo--o54959",priceFrom:81,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:81,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:279,siteSlugs:["cala-santanyi"],
    title:"Curso Open Water Diver en Cala Santanyi",destination:"Cala Santanyí",region:"Baleares",slug:"curso-open-water-diver-en-cala-santanyi-279",
    type:"Curso",level:"Inicial",duration:"2–4 días",audience:"Personas interesadas en curso en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Santanyí"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/mallorca/padi-open-water-diver-en-cala-santanyi--o56247",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/mallorca/padi-open-water-diver-en-cala-santanyi--o56247",
    offers:[{id:"yumping-o56247",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/mallorca/padi-open-water-diver-en-cala-santanyi--o56247",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/mallorca/padi-open-water-diver-en-cala-santanyi--o56247",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:280,siteSlugs:["cala-santanyi"],
    title:"Curso Advanced Open Water Diver Cala Santanyi",destination:"Cala Santanyí",region:"Baleares",slug:"curso-advanced-open-water-diver-cala-santanyi-280",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Santanyí"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/padi-advanced-open-water-diver-cala-santanyi--o56250",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/padi-advanced-open-water-diver-cala-santanyi--o56250",
    offers:[{id:"yumping-o56250",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/padi-advanced-open-water-diver-cala-santanyi--o56250",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/padi-advanced-open-water-diver-cala-santanyi--o56250",priceFrom:415,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:415,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:281,siteSlugs:["malgrats"],
    title:"PADI Advanced Open Water Diver en Santa Ponça",destination:"Santa Ponça",region:"Baleares",slug:"padi-advanced-open-water-diver-en-santa-ponca-281",
    type:"Curso",level:"Avanzado",duration:"2–5 días",audience:"Personas interesadas en curso en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Santa Ponça"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-santa-ponsa-3h--o35953",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-santa-ponsa-3h--o35953",
    offers:[{id:"yumping-o35953",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-santa-ponsa-3h--o35953",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-santa-ponsa-3h--o35953",priceFrom:435,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:435,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:282,siteSlugs:["malgrats"],
    title:"Curso de iniciación al buceo en Santa Ponsa, 3h",destination:"Santa Ponça",region:"Baleares",slug:"curso-de-iniciacion-al-buceo-en-santa-ponsa-3h-282",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Santa Ponça"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-alcudia-4horas--o35954",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-alcudia-4horas--o35954",
    offers:[{id:"yumping-o35954",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-alcudia-4horas--o35954",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-alcudia-4horas--o35954",priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:283,siteSlugs:["malgrats"],
    title:"Bautismo de buceo desde barco Santa Ponça, 3 horas",destination:"Santa Ponça",region:"Baleares",slug:"bautismo-de-buceo-desde-barco-santa-ponca-3-horas-283",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Santa Ponça"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-palma-de-mallorca--o35950",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-palma-de-mallorca--o35950",
    offers:[{id:"yumping-o35950",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-palma-de-mallorca--o35950",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-de-iniciacion-al-buceo-en-palma-de-mallorca--o35950",priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:284,siteSlugs:["cala-millor-mallorca"],
    title:"Curso buceo Discover Scuba Diving, Cala Millor, 3h",destination:"Cala Millor",region:"Baleares",slug:"curso-buceo-discover-scuba-diving-cala-millor-3h-284",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Mallorca",
    tags:["Buceo","Mallorca","Baleares","Yumping","Cala Millor"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-discover-scuba-diving-cala-millor-3h--o86514",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-discover-scuba-diving-cala-millor-3h--o86514",
    offers:[{id:"yumping-o86514",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-discover-scuba-diving-cala-millor-3h--o86514",sourceUrl:"https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-discover-scuba-diving-cala-millor-3h--o86514",priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:285,siteSlugs:["portinatx-ibiza"],
    title:"Bautismo de buceo en Cala Portinatx, 2h30min",destination:"Portinatx",region:"Baleares",slug:"bautismo-de-buceo-en-cala-portinatx-2h30min-285",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Personas interesadas en bautismo en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/bautismo-de-buceo-en-cala-portinatx-4h--o30367",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/bautismo-de-buceo-en-cala-portinatx-4h--o30367",
    offers:[{id:"yumping-o30367",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/bautismo-de-buceo-en-cala-portinatx-4h--o30367",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/bautismo-de-buceo-en-cala-portinatx-4h--o30367",priceFrom:130,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,maxDepth:"5 m",included:["Clase teórica","Inmersión","Instructores profesionales","Tarjeta de reconocimiento Try Scuba","Seguros de Responsabilidad Civil y Accidentes"],
    notes:"Bautismo de iniciación en Cala Portinatx. Yumping indica una duración aproximada de 2 horas y media, inmersión de hasta 5 m y edad mínima de 10 años; no requiere titulación previa.",priceFrom:130,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:286,siteSlugs:["portinatx-ibiza"],
    title:"Inmersión de buceo con equipo en Ibiza 2 horas",destination:"Portinatx",region:"Baleares",slug:"inmersion-de-buceo-con-equipo-en-ibiza-2-horas-286",
    type:"Fun Dive",level:"Intermedio",duration:"2 horas",audience:"Personas interesadas en fun dive en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/inmersion-de-buceo-con-equipo-en-ibiza-2-horas--o66230",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/inmersion-de-buceo-con-equipo-en-ibiza-2-horas--o66230",
    offers:[{id:"yumping-o66230",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/inmersion-de-buceo-con-equipo-en-ibiza-2-horas--o66230",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/inmersion-de-buceo-con-equipo-en-ibiza-2-horas--o66230",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Equipo completo de buceo","Inmersión"],
    notes:"Inmersión para buceadores titulados en distintas zonas de Ibiza, entre ellas Isla Margaritas, Isla Murada y Punta Xarraca. Yumping indica unas 2 horas de duración y horario de tarde.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:287,siteSlugs:["san-antonio-ibiza"],
    title:"PADI Advanced Open Water, Bahía San Antonio",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"padi-advanced-open-water-bahia-san-antonio-287",
    type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-advanced-open-water-bahia-san-antonio--o28445",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-advanced-open-water-bahia-san-antonio--o28445",
    offers:[{id:"yumping-o28445",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/padi-advanced-open-water-bahia-san-antonio--o28445",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-advanced-open-water-bahia-san-antonio--o28445",priceFrom:445,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Curso PADI Advanced Open Water en la bahía de San Antonio. Precio actual mostrado por Yumping: 445 €.",priceFrom:445,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:288,siteSlugs:["portinatx-ibiza"],
    title:"Basic Diver de SSI en Portinatx, 3 horas",destination:"Portinatx",region:"Baleares",slug:"basic-diver-de-ssi-en-portinatx-3-horas-288",
    type:"Curso",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en curso en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/advanced-open-water-sant-antoni-de-portmany--o30036",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/advanced-open-water-sant-antoni-de-portmany--o30036",
    offers:[{id:"yumping-o30036",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/advanced-open-water-sant-antoni-de-portmany--o30036",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/advanced-open-water-sant-antoni-de-portmany--o30036",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Programa Basic Diver de SSI en Portinatx, con una duración indicada de 3 horas. Precio actual mostrado por Yumping: 150 €.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:289,siteSlugs:["portinatx-ibiza"],
    title:"SSI Diver Stress and Rescue en Portinatx, 6 días",destination:"Portinatx",region:"Baleares",slug:"ssi-diver-stress-and-rescue-en-portinatx-6-dias-289",
    type:"Curso",level:"Avanzado",duration:"6 días",audience:"Personas interesadas en curso en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/ssi-rescue-diver-en-sant-antoni-de-portmany--o30038",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/ssi-rescue-diver-en-sant-antoni-de-portmany--o30038",
    offers:[{id:"yumping-o30038",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/ssi-rescue-diver-en-sant-antoni-de-portmany--o30038",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/ssi-rescue-diver-en-sant-antoni-de-portmany--o30038",priceFrom:550,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Formación SSI Diver Stress and Rescue en Portinatx con una duración indicada de 6 días. Precio actual mostrado por Yumping: 550 €.",priceFrom:550,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:290,siteSlugs:["portinatx-ibiza"],
    title:"Curso de buceo Open Water Diver en Ibiza 5 días",destination:"Portinatx",region:"Baleares",slug:"curso-de-buceo-open-water-diver-en-ibiza-5-dias-290",
    type:"Curso",level:"Inicial",duration:"5 días",audience:"Personas interesadas en curso en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/curso-de-buceo-open-water-diver-en-ibiza-5-dias--o66225",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/curso-de-buceo-open-water-diver-en-ibiza-5-dias--o66225",
    offers:[{id:"yumping-o66225",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/curso-de-buceo-open-water-diver-en-ibiza-5-dias--o66225",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/curso-de-buceo-open-water-diver-en-ibiza-5-dias--o66225",priceFrom:580,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Titulación Open Water Diver","Monitores","Equipo de buceo","Teoría","5 inmersiones en piscina","4 inmersiones en mar abierto","Seguros"],
    notes:"Curso Open Water Diver de 5 días en Portinatx. La ficha indica 5 inmersiones en piscina y 4 en mar abierto, además de titulación Open Water Diver.",priceFrom:580,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:291,siteSlugs:["portinatx-ibiza"],
    title:"Curso PADI Advanced Open Water en Ibiza 5 días",destination:"Portinatx",region:"Baleares",slug:"curso-padi-advanced-open-water-en-ibiza-5-dias-291",
    type:"Curso",level:"Avanzado",duration:"5 días",audience:"Personas interesadas en curso en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/curso-padi-advanced-open-water-en-ibiza-5-dias--o66229",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/curso-padi-advanced-open-water-en-ibiza-5-dias--o66229",
    offers:[{id:"yumping-o66229",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/curso-padi-advanced-open-water-en-ibiza-5-dias--o66229",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/curso-padi-advanced-open-water-en-ibiza-5-dias--o66229",priceFrom:540,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor","Equipo de buceo","Teoría","3 inmersiones en mar abierto","Seguros"],
    notes:"Curso PADI Advanced Open Water de 5 días en Portinatx. Yumping describe tres inmersiones de formación, con profunda y navegación obligatorias y una tercera de elección.",priceFrom:540,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:292,siteSlugs:["san-antonio-ibiza"],
    title:"Discover Scuba Diving en San Antonio, Ibiza",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"discover-scuba-diving-en-san-antonio-ibiza-292",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/discover-scuba-diving-en-san-antonio-ibiza--o3993",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/discover-scuba-diving-en-san-antonio-ibiza--o3993",
    offers:[{id:"yumping-o3993",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/discover-scuba-diving-en-san-antonio-ibiza--o3993",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/discover-scuba-diving-en-san-antonio-ibiza--o3993",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"12 m",included:["Excursión en barco","Equipo completo","Instrucción","Seguro de Responsabilidad Civil y de Accidentes"],
    notes:"Discover Scuba Diving de PADI en San Antonio. La ficha indica unas 3 horas, profundidad máxima de 12 m y una inmersión de unos 25–30 minutos.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:293,siteSlugs:["san-antonio-ibiza"],
    title:"Inmersiones de buceo en San Antonio, bono de 4",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"inmersiones-de-buceo-en-san-antonio-bono-de-4-293",
    type:"Fun Dive",level:"Intermedio",duration:"2 días · 4 inmersiones",audience:"Personas interesadas en fun dive en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",
    offers:[{id:"yumping-o21707-4",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",priceFrom:262,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de buceo","Seguro de buceo"],
    notes:"Bono de 4 inmersiones en San Antonio para buceadores con titulación. Yumping indica 2 días, con 2 inmersiones de aproximadamente 50 minutos cada una en la jornada de salida. Precio actual: 262 €.",priceFrom:262,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:294,siteSlugs:["san-antonio-ibiza"],
    title:"2 Inmersiones de buceo en San Antonio",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"2-inmersiones-de-buceo-en-san-antonio-294",
    type:"Fun Dive",level:"Intermedio",duration:"Media jornada",audience:"Personas interesadas en fun dive en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",
    offers:[{id:"yumping-o21707",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",priceFrom:130,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de buceo","Seguro de Responsabilidad Civil y de Accidentes","IVA"],
    notes:"Dos inmersiones en San Antonio para personas con titulación. La ficha indica que la duración depende del consumo de las dos botellas y que se realizan por la mañana.",priceFrom:130,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:295,siteSlugs:["san-antonio-ibiza"],
    title:"Bono 10 inmersiones + botella + plomos en Ibiza",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"bono-10-inmersiones-botella-plomos-en-ibiza-295",
    type:"Fun Dive",level:"Intermedio",duration:"Según planificación",audience:"Personas interesadas en fun dive en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/bono-10-inmersiones-botella-plomos-en-ibiza--o27210",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/bono-10-inmersiones-botella-plomos-en-ibiza--o27210",
    offers:[{id:"yumping-o27210",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/bono-10-inmersiones-botella-plomos-en-ibiza--o27210",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/bono-10-inmersiones-botella-plomos-en-ibiza--o27210",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Bono de 10 inmersiones con botella y plomos en Ibiza. Precio actual mostrado por Yumping: 420 €.",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:296,siteSlugs:["san-antonio-ibiza"],
    title:"PADI Open Water en Bahía de San Antonio",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"padi-open-water-en-bahia-de-san-antonio-296",
    type:"Curso",level:"Inicial",duration:"3–4 días",audience:"Personas interesadas en curso en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-en-bahia-de-san-antonio--o28444",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-en-bahia-de-san-antonio--o28444",
    offers:[{id:"yumping-o28444",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-en-bahia-de-san-antonio--o28444",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-en-bahia-de-san-antonio--o28444",priceFrom:500,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Instructor","Material didáctico online","Material de buceo","Seguro de Responsabilidad Civil y de Accidentes","IVA"],
    notes:"Curso PADI Open Water en la bahía de San Antonio. La ficha indica 3–4 días, 5 sesiones en aguas confinadas y 4 en mar abierto, hasta 18 m.",priceFrom:500,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:297,siteSlugs:["san-antonio-ibiza"],
    title:"Bautizo de buceo desde barco Cala Sant Antoni 3h30",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"bautizo-de-buceo-desde-barco-cala-sant-antoni-3h30-297",
    type:"Bautismo",level:"Inicial",duration:"3 h 30 min aprox.",audience:"Personas interesadas en bautismo en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/bautizo-de-buceo-en-sant-antoni-de-portmany-ibiza--o30025",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/bautizo-de-buceo-en-sant-antoni-de-portmany-ibiza--o30025",
    offers:[{id:"yumping-o30025",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/bautizo-de-buceo-en-sant-antoni-de-portmany-ibiza--o30025",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/ibiza/bautizo-de-buceo-en-sant-antoni-de-portmany-ibiza--o30025",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"8 m",included:["Instructor experto","Equipo de buceo","Explicación teórica","Inmersión desde barco","Seguro de Responsabilidad Civil y accidentes"],
    notes:"Bautismo desde barco en distintos puntos de la costa de Ibiza según la meteorología. Yumping indica unas 3 horas y media y profundidad máxima de 8 m.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:298,siteSlugs:["punta-galera-ibiza"],
    title:"Bautismo buceo para parejas en Punta Galera, 3h30",destination:"Sant Antoni de Portmany",region:"Baleares",slug:"bautismo-buceo-para-parejas-en-punta-galera-3h30-298",
    type:"Bautismo",level:"Inicial",duration:"3 h 30 min aprox.",audience:"Personas interesadas en bautismo en Sant Antoni de Portmany",
    tags:["Buceo","Baleares","Yumping","Sant Antoni de Portmany"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-scuba-diver-sant-antoni-de-portmany-ibiza--o30034",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-scuba-diver-sant-antoni-de-portmany-ibiza--o30034",
    offers:[{id:"yumping-o30034",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/padi-scuba-diver-sant-antoni-de-portmany-ibiza--o30034",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-scuba-diver-sant-antoni-de-portmany-ibiza--o30034",priceFrom:290,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Bautismo de buceo para exactamente 2 personas en Punta Galera. Yumping indica una duración aproximada de 3 horas y media y precio por actividad de 290 €.",priceFrom:290,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:299,siteSlugs:["portinatx-ibiza"],
    title:"SSI Scuba Diver en Portinatx, 3 días",destination:"Portinatx",region:"Baleares",slug:"ssi-scuba-diver-en-portinatx-3-dias-299",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Portinatx",
    tags:["Buceo","Baleares","Yumping","Portinatx"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-diver-en-sant-antoni-de-portmany--o30035",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-diver-en-sant-antoni-de-portmany--o30035",
    offers:[{id:"yumping-o30035",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-diver-en-sant-antoni-de-portmany--o30035",sourceUrl:"https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-diver-en-sant-antoni-de-portmany--o30035",priceFrom:440,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Curso SSI Scuba Diver en Portinatx con una duración indicada de 3 días. Precio actual mostrado por Yumping: 440 €.",priceFrom:440,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:300,siteSlugs:["platja-migjorn-formentera"],
    title:"Inmersión de Buceo con equipo en Formentera",destination:"Platja Mitjorn",region:"Baleares",slug:"inmersion-de-buceo-con-equipo-en-formentera-300",
    type:"Fun Dive",level:"Intermedio",duration:"Según inmersión",audience:"Personas interesadas en fun dive en Platja Mitjorn",
    tags:["Buceo","Baleares","Yumping","Platja Mitjorn"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/inmersion-de-buceo-con-equipo-en-formentera--o36817",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/inmersion-de-buceo-con-equipo-en-formentera--o36817",
    offers:[{id:"yumping-o36817",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/inmersion-de-buceo-con-equipo-en-formentera--o36817",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/inmersion-de-buceo-con-equipo-en-formentera--o36817",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Material de buceo"],
    notes:"Inmersiones con equipo en distintas zonas de Formentera, elegidas según la titulación y el tipo de ruta. Yumping muestra un precio desde 60 €.",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:301,siteSlugs:["es-pujols-formentera"],
    title:"Bautizo de buceo en aguas abiertas Formentera 1h",destination:"Es Pujols",region:"Baleares",slug:"bautizo-de-buceo-en-aguas-abiertas-formentera-1h-301",
    type:"Bautismo",level:"Inicial",duration:"1–1 h 30 min",audience:"Personas interesadas en bautismo en Es Pujols",
    tags:["Buceo","Baleares","Yumping","Es Pujols"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-aguas-abiertas-formentera-1h--o62795",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-aguas-abiertas-formentera-1h--o62795",
    offers:[{id:"yumping-o62795",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-aguas-abiertas-formentera-1h--o62795",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-aguas-abiertas-formentera-1h--o62795",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Bautismo de buceo en aguas abiertas con salida desde el puerto de La Savina. La localización exacta se elige según disponibilidad y condiciones.",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:302,siteSlugs:["platja-migjorn-formentera"],
    title:"Bautismo de Buceo en Playa Formentera 1 hora",destination:"Platja Mitjorn",region:"Baleares",slug:"bautismo-de-buceo-en-playa-formentera-1-hora-302",
    type:"Bautismo",level:"Inicial",duration:"1 hora aprox.",audience:"Personas interesadas en bautismo en Platja Mitjorn",
    tags:["Buceo","Baleares","Yumping","Platja Mitjorn"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautismo-de-buceo-en-playa-formentera-1-hora--o36810",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautismo-de-buceo-en-playa-formentera-1-hora--o36810",
    offers:[{id:"yumping-o36810",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/bautismo-de-buceo-en-playa-formentera-1-hora--o36810",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautismo-de-buceo-en-playa-formentera-1-hora--o36810",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"4–5 m",included:["Equipo completo de buceo","Material de buceo","Instructor de buceo titulado","Seguros"],
    notes:"Bautismo directamente desde la playa de Formentera. Yumping indica una duración aproximada de 1 hora, inmersión de 30–40 minutos y profundidad máxima de 4–5 m.",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:303,siteSlugs:["platja-migjorn-formentera"],
    title:"Curso Open Water Diver Padi Formentera",destination:"Platja Mitjorn",region:"Baleares",slug:"curso-open-water-diver-padi-formentera-303",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Platja Mitjorn",
    tags:["Buceo","Baleares","Yumping","Platja Mitjorn"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-open-water-diver-padi-formentera--o36813",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-open-water-diver-padi-formentera--o36813",
    offers:[{id:"yumping-o36813",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/curso-open-water-diver-padi-formentera--o36813",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-open-water-diver-padi-formentera--o36813",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Curso completo PADI Open Water Diver","Tramitación del Carnet","Equipo completo","4 Prácticas en piscina","5 Clases teóricas","4 inmersiones en el mar","Instructores titulados"],
    notes:"Curso completo PADI Open Water Diver en Formentera. La ficha indica 4–5 días, 4 prácticas en piscina, 5 clases teóricas y 4 inmersiones en el mar, con material incluido.",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:304,siteSlugs:["platja-migjorn-formentera"],
    title:"2 inmersiones de buceo en Formentera desde barco",destination:"Platja Mitjorn",region:"Baleares",slug:"2-inmersiones-de-buceo-en-formentera-desde-barco-304",
    type:"Fun Dive",level:"Intermedio",duration:"Según inmersiones",audience:"Personas interesadas en fun dive en Platja Mitjorn",
    tags:["Buceo","Baleares","Yumping","Platja Mitjorn"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-en-formentera-desde-barco--o50487",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-en-formentera-desde-barco--o50487",
    offers:[{id:"yumping-o50487",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-en-formentera-desde-barco--o50487",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-en-formentera-desde-barco--o50487",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Dos inmersiones desde barco en Formentera. La ficha de Yumping muestra un precio desde 120 € por persona.",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:305,siteSlugs:["es-pujols-formentera"],
    title:"2 inmersiones de buceo con titulación Formentera",destination:"Es Pujols",region:"Baleares",slug:"2-inmersiones-de-buceo-con-titulacion-formentera-305",
    type:"Fun Dive",level:"Intermedio",duration:"Según zona",audience:"Personas interesadas en fun dive en Es Pujols",
    tags:["Buceo","Baleares","Yumping","Es Pujols"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-con-titulacion-formentera--o62794",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-con-titulacion-formentera--o62794",
    offers:[{id:"yumping-o62794",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-con-titulacion-formentera--o62794",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-con-titulacion-formentera--o62794",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Dos inmersiones para buceadores con titulación. La salida parte del puerto pesquero de La Savina y permite elegir entre distintos puntos según disponibilidad y condiciones.",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:306,siteSlugs:["es-pujols-formentera"],
    title:"Buceo en Formentera con equipo completo",destination:"Es Pujols",region:"Baleares",slug:"buceo-en-formentera-con-equipo-completo-306",
    type:"Fun Dive",level:"Intermedio",duration:"Según inmersión",audience:"Personas interesadas en fun dive en Es Pujols",
    tags:["Buceo","Baleares","Yumping","Es Pujols"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/buceo-en-formentera-con-equipo-completo--o62796",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/buceo-en-formentera-con-equipo-completo--o62796",
    offers:[{id:"yumping-o62796",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/buceo-en-formentera-con-equipo-completo--o62796",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/buceo-en-formentera-con-equipo-completo--o62796",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Experiencia de buceo en Formentera con equipo completo. La ficha actual muestra un precio desde 60 €.",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:307,siteSlugs:["es-pujols-formentera"],
    title:"Open Water Diver PADI en Formentera 5 días",destination:"Es Pujols",region:"Baleares",slug:"open-water-diver-padi-en-formentera-5-dias-307",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Es Pujols",
    tags:["Buceo","Baleares","Yumping","Es Pujols"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/open-water-diver-padi-en-formentera-5-dias--o62797",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/open-water-diver-padi-en-formentera-5-dias--o62797",
    offers:[{id:"yumping-o62797",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/open-water-diver-padi-en-formentera-5-dias--o62797",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/open-water-diver-padi-en-formentera-5-dias--o62797",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Curso Open Water Diver PADI","5 lecciones teóricas","4 inmersiones en aguas confinadas","4 inmersiones en playa","Titulación internacional","Instructor","Material de buceo","Instalaciones con duchas y aseo"],
    notes:"Curso PADI Open Water Diver de 4–5 días. Yumping indica 5 lecciones teóricas, 4 inmersiones en aguas confinadas, 4 inmersiones en playa y titulación internacional.",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:308,siteSlugs:["platja-migjorn-formentera"],
    title:"Curso Scuba Diver en Platja Migjorn 4-5 días",destination:"Platja Mitjorn",region:"Baleares",slug:"curso-scuba-diver-en-platja-migjorn-4-5-dias-308",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Platja Mitjorn",
    tags:["Buceo","Baleares","Yumping","Platja Mitjorn"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-scuba-diver-en-platja-migjorn-4-5-dias--o64641",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-scuba-diver-en-platja-migjorn-4-5-dias--o64641",
    offers:[{id:"yumping-o64641",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/curso-scuba-diver-en-platja-migjorn-4-5-dias--o64641",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-scuba-diver-en-platja-migjorn-4-5-dias--o64641",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Curso Scuba Diver en Platja Migjorn con una duración de 4–5 días. Precio actual mostrado por Yumping: 350 €.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:309,siteSlugs:["es-pujols-formentera"],
    title:"Curso de buceo Scuba Diver en Els Pujols",destination:"Es Pujols",region:"Baleares",slug:"curso-de-buceo-scuba-diver-en-els-pujols-309",
    type:"Curso",level:"Inicial",duration:"Según formación",audience:"Personas interesadas en curso en Es Pujols",
    tags:["Buceo","Baleares","Yumping","Es Pujols"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-de-buceo-scuba-diver-en-els-pujols--o64650",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-de-buceo-scuba-diver-en-els-pujols--o64650",
    offers:[{id:"yumping-o64650",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/curso-de-buceo-scuba-diver-en-els-pujols--o64650",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/curso-de-buceo-scuba-diver-en-els-pujols--o64650",priceFrom:355,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Curso Scuba Diver en Els Pujols. Precio actual mostrado por Yumping: 355 €.",priceFrom:355,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:310,siteSlugs:["la-savina-formentera"],
    title:"Tour de snorkel, Parque Natural Ses Salines, 2:30h",destination:"La Savina",region:"Baleares",slug:"tour-de-snorkel-parque-natural-ses-salines-2-30h-310",
    type:"Snorkel",level:"Inicial",duration:"2 h 30 min",audience:"Personas interesadas en snorkel en La Savina",
    tags:["Buceo","Baleares","Yumping","La Savina"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-parque-natural-ses-salines-2-30h--o91297",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-parque-natural-ses-salines-2-30h--o91297",
    offers:[{id:"yumping-o91297",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-parque-natural-ses-salines-2-30h--o91297",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-parque-natural-ses-salines-2-30h--o91297",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Tour de snorkel de 2 horas y media en el Parque Natural de Ses Salines, con salida en la zona de La Savina.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:311,siteSlugs:["la-savina-formentera"],
    title:"Bautizo de buceo en Puerto de la Sabina 2:30h",destination:"La Savina",region:"Baleares",slug:"bautizo-de-buceo-en-puerto-de-la-sabina-2-30h-311",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Personas interesadas en bautismo en La Savina",
    tags:["Buceo","Baleares","Yumping","La Savina"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-puerto-de-la-sabina-2-30h--o56957",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-puerto-de-la-sabina-2-30h--o56957",
    offers:[{id:"yumping-o56957",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-puerto-de-la-sabina-2-30h--o56957",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-puerto-de-la-sabina-2-30h--o56957",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Bautizo de buceo con salida desde Puerto de La Savina. Precio actual mostrado por Yumping: 150 €.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:312,siteSlugs:["platja-migjorn-formentera"],
    title:"Tour de snorkel por la costa de Formentera 3 horas",destination:"Platja Mitjorn",region:"Baleares",slug:"tour-de-snorkel-por-la-costa-de-formentera-3-horas-312",
    type:"Snorkel",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en snorkel en Platja Mitjorn",
    tags:["Buceo","Baleares","Yumping","Platja Mitjorn"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-por-la-costa-de-formentera-4-horas--o64660",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-por-la-costa-de-formentera-4-horas--o64660",
    offers:[{id:"yumping-o64660",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-por-la-costa-de-formentera-4-horas--o64660",sourceUrl:"https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-por-la-costa-de-formentera-4-horas--o64660",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    
    notes:"Tour de snorkel por la costa de Formentera con una duración indicada de 3 horas. La ficha actual muestra salida desde Platja Mitjorn y transporte incluido.",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:313,siteSlugs:["pobla-farnals"],
    title:"Bautismo de buceo en Playa Pobla Marina 180 min",destination:"Valencia",region:"Comunidad Valenciana",slug:"bautismo-de-buceo-en-playa-pobla-marina-180-min-313",
    type:"Bautismo",level:"Inicial",duration:"180 minutos",audience:"Personas interesadas en bautismo en Valencia",
    tags:["Buceo","Comunidad Valenciana","Yumping","Valencia"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-playa-pobla-marina-180-min--o45414",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-playa-pobla-marina-180-min--o45414",offers:[{id:"yumping-o45414",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-playa-pobla-marina-180-min--o45414",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-playa-pobla-marina-180-min--o45414",priceFrom:86,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Instructor especializado","Material necesario","Traje de neopreno","Parte teórica y práctica","Seguro de accidentes y RC","Diploma"],notes:"Bautismo en mar abierto desde Playa Pobla Marina. Yumping indica 180 minutos de duración, unos 40–45 minutos de inmersión, edad mínima de 12 años y actividad sujeta a condiciones de clima y corriente.",
    priceFrom:86,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:314,siteSlugs:["valencia-capital"],
    title:"Bautismo de buceo en piscina Valencia",destination:"Valencia",region:"Comunidad Valenciana",slug:"bautismo-de-buceo-en-piscina-valencia-314",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Valencia",
    tags:["Buceo","Comunidad Valenciana","Yumping","Valencia"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-piscina-valencia--o26644",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-piscina-valencia--o26644",offers:[{id:"yumping-o26644",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-piscina-valencia--o26644",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-piscina-valencia--o26644",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,maxDepth:"<12 m",included:["Explicación teórica","Equipo completo","Experiencia en piscina","Seguro de responsabilidad civil y accidentes","Instructor","Diploma"],notes:"Bautismo en piscina con unos 40 minutos en el agua. Yumping indica edad mínima de 16 años, saber nadar y una profundidad inferior a 12 m.",
    priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:315,siteSlugs:["valencia-capital"],
    title:"Bautismo de buceo en el mar de Valencia",destination:"Valencia",region:"Comunidad Valenciana",slug:"bautismo-de-buceo-en-el-mar-de-valencia-315",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Valencia",
    tags:["Buceo","Comunidad Valenciana","Yumping","Valencia"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-el-mar-de-valencia--o26649",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-el-mar-de-valencia--o26649",offers:[{id:"yumping-o26649",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-el-mar-de-valencia--o26649",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-el-mar-de-valencia--o26649",priceFrom:86,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Explicación teórica","Equipo completo","Experiencia de buceo en el mar","Seguro de responsabilidad civil y accidentes","Instructor","Diploma"],notes:"Bautismo en el mar de Valencia. Yumping indica unas 2 horas de actividad, unos 40 minutos en el agua, edad mínima de 12 años y requisitos de saber nadar.",
    priceFrom:86,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:316,siteSlugs:["pobla-farnals"],
    title:"Curso buceo Open Water Diver en mar",destination:"La Pobla de Farnals",region:"Comunidad Valenciana",slug:"curso-buceo-open-water-diver-en-mar-316",
    type:"Curso",level:"Inicial",duration:"1 semana",audience:"Personas interesadas en curso en La Pobla de Farnals",
    tags:["Buceo","Comunidad Valenciana","Yumping","La Pobla de Farnals"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/curso-buceo-open-water-diver-en-mar--o26654",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/curso-buceo-open-water-diver-en-mar--o26654",offers:[{id:"yumping-o26654",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/curso-buceo-open-water-diver-en-mar--o26654",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/curso-buceo-open-water-diver-en-mar--o26654",priceFrom:299,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,maxDepth:"18 m",included:["Kit de material didáctico","Todo el equipo durante el curso","Inmersiones en el mar","Seguro de responsabilidad y accidentes","Tramitación internacional"],notes:"Curso Open Water Diver en La Pobla de Farnals con una duración aproximada de una semana. Yumping indica 5 módulos teóricos, 5 módulos de manejo de equipo e inmersiones en mar abierto hasta 18 m; edad mínima de 16 años.",
    priceFrom:299,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:317,siteSlugs:["valencia-capital"],
    title:"PADI Open Water Diver en Valencia Capital",destination:"Valencia",region:"Comunidad Valenciana",slug:"padi-open-water-diver-en-valencia-capital-317",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en Valencia",
    tags:["Buceo","Comunidad Valenciana","Yumping","Valencia"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/padi-open-water-diver-en-valencia-capital--o56263",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/padi-open-water-diver-en-valencia-capital--o56263",offers:[{id:"yumping-o56263",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/padi-open-water-diver-en-valencia-capital--o56263",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/padi-open-water-diver-en-valencia-capital--o56263",priceFrom:310,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Material didáctico PADI","Clases de teoría","4 inmersiones en el mar","Seguros de buceo","Instructor profesional","Petición de expedición del certificado"],notes:"Curso PADI Open Water Diver en Valencia capital. La ficha indica una duración habitual de 4–5 días y cuatro inmersiones en el mar; requiere saber nadar.",
    priceFrom:310,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:318,siteSlugs:["valencia-capital"],
    title:"Bautismo de buceo en Valencia capital",destination:"Valencia",region:"Comunidad Valenciana",slug:"bautismo-de-buceo-en-valencia-capital-318",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Valencia",
    tags:["Buceo","Comunidad Valenciana","Yumping","Valencia"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-valencia-capital--o56214",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-valencia-capital--o56214",offers:[{id:"yumping-o56214",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-valencia-capital--o56214",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-valencia-capital--o56214",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Todo el material necesario","Seguro de bautismo","Instructor personalizado y titulado"],notes:"Bautismo desde Valencia capital. Yumping indica unas 2 horas, explicación de seguridad y equipo, y acompañamiento de instructor titulado; la actividad depende de las condiciones del mar.",
    priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:319,siteSlugs:["valencia-capital"],
    title:"Bautismo de buceo en Puerto de Valencia 2 horas",destination:"Valencia",region:"Comunidad Valenciana",slug:"bautismo-de-buceo-en-puerto-de-valencia-2-horas-319",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Valencia",
    tags:["Buceo","Comunidad Valenciana","Yumping","Valencia"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-puerto-de-valencia-2-horas--o62434",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-puerto-de-valencia-2-horas--o62434",offers:[{id:"yumping-o62434",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-puerto-de-valencia-2-horas--o62434",sourceUrl:"https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-puerto-de-valencia-2-horas--o62434",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Bautismo realizado en La Marina de Valencia durante aproximadamente 2 horas, incluyendo preparación, instrucción e inmersión.",
    priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:320,siteSlugs:["finisterre"],
    title:"Bautismo de buceo en Finisterre",destination:"Finisterre",region:"Galicia",slug:"bautismo-de-buceo-en-finisterre-320",
    type:"Bautismo",level:"Inicial",duration:"Durante el día",audience:"Personas interesadas en bautismo en Finisterre",
    tags:["Buceo","Yumping","Finisterre"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/bautismo-de-buceo-en-finisterre--o507",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/bautismo-de-buceo-en-finisterre--o507",offers:[{id:"yumping-o507",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/bautismo-de-buceo-en-finisterre--o507",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/bautismo-de-buceo-en-finisterre--o507",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Material necesario","Instructor","Paseo en barco","Seguro de responsabilidad civil y accidentes"],notes:"Primera experiencia de buceo en Finisterre. Yumping indica una clase teórica previa, inmersión acompañada por instructores y paseo en barco por la ría de Corcubión.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:321,siteSlugs:["finisterre"],
    title:"Bautismo de Buceo en mar en Costa da Morte",destination:"Finisterre",region:"Galicia",slug:"bautismo-de-buceo-en-mar-en-costa-da-morte-321",
    type:"Bautismo",level:"Inicial",duration:"2–3 horas",audience:"Personas interesadas en bautismo en Finisterre",
    tags:["Buceo","Yumping","Finisterre"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-costa-da-morte--o55667",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-costa-da-morte--o55667",offers:[{id:"yumping-o55667",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-costa-da-morte--o55667",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-costa-da-morte--o55667",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"3–5 m",included:["Equipo de buceo completo","Traslado en barco","Ducha y vestuario"],notes:"Bautismo en el entorno de la Costa da Morte. La ficha indica entre 2 y 3 horas, traslado en barco desde el centro hasta la zona de buceo y una primera inmersión de 3–5 m.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:322,siteSlugs:["finisterre"],
    title:"Curso Padi Advanced Open Water Diver en Finisterre",destination:"Finisterre",region:"Galicia",slug:"curso-padi-advanced-open-water-diver-en-finisterre-322",
    type:"Curso",level:"Avanzado",duration:"Varios días",audience:"Personas interesadas en curso en Finisterre",
    tags:["Buceo","Yumping","Finisterre"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/acoruna/curso-padi-advanced-open-water-diver-en-finisterre--o505",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/curso-padi-advanced-open-water-diver-en-finisterre--o505",offers:[{id:"yumping-o505",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/acoruna/curso-padi-advanced-open-water-diver-en-finisterre--o505",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/curso-padi-advanced-open-water-diver-en-finisterre--o505",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Lecciones teóricas","Clases prácticas","Materiales","Instructor profesional","Seguro de responsabilidad civil y accidentes"],notes:"Curso PADI Advanced Open Water Diver en Finisterre. Incluye cinco módulos de teoría, prácticas y cuatro inmersiones en el mar; la ficha exige saber nadar y certificado médico.",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:323,siteSlugs:["finisterre"],
    title:"Curso PADI Open Water Diver en Finisterre",destination:"Finisterre",region:"Galicia",slug:"curso-padi-open-water-diver-en-finisterre-323",
    type:"Curso",level:"Inicial",duration:"Según formación",audience:"Personas interesadas en curso en Finisterre",
    tags:["Buceo","Yumping","Finisterre"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-padi-open-water-diver-en-finisterre--o511",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-padi-open-water-diver-en-finisterre--o511",offers:[{id:"yumping-o511",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-padi-open-water-diver-en-finisterre--o511",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-padi-open-water-diver-en-finisterre--o511",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso PADI Open Water Diver en Finisterre. La oferta actual muestra un precio desde 420 €; la duración se adapta al proceso formativo.",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:324,siteSlugs:["isla-arousa"],
    title:"Excursión de snorkel, isla de Arosa, media jornada",destination:"Isla de Arousa",region:"Galicia",slug:"excursion-de-snorkel-isla-de-arosa-media-jornada-324",
    type:"Snorkel",level:"Inicial",duration:"Media jornada",audience:"Personas interesadas en snorkel en Isla de Arousa",
    tags:["Buceo","Yumping","Isla de Arousa"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/pontevedra/excursion-de-snorkel-isla-de-arosa-media-jornada--o19836",sourceUrl:"https://www.yumping.com/ofertas/buceo/pontevedra/excursion-de-snorkel-isla-de-arosa-media-jornada--o19836",offers:[{id:"yumping-o19836",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/pontevedra/excursion-de-snorkel-isla-de-arosa-media-jornada--o19836",sourceUrl:"https://www.yumping.com/ofertas/buceo/pontevedra/excursion-de-snorkel-isla-de-arosa-media-jornada--o19836",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Material técnico","Sesión de snorkel","Seguros"],notes:"Sesión guiada de snorkel en la Isla de Arousa, con material técnico y seguros. La ficha también ofrece una variante de jornada completa.",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:325,siteSlugs:["isla-arousa"],
    title:"Sesión de snorkel isla de Arosa, jornada completa",destination:"Isla de Arousa",region:"Galicia",slug:"sesion-de-snorkel-isla-de-arosa-jornada-completa-325",
    type:"Snorkel",level:"Inicial",duration:"8 horas",audience:"Personas interesadas en snorkel en Isla de Arousa",
    tags:["Buceo","Yumping","Isla de Arousa"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/pontevedra/sesion-de-snorkel-isla-de-arosa-jornada-completa--o19837",sourceUrl:"https://www.yumping.com/ofertas/buceo/pontevedra/sesion-de-snorkel-isla-de-arosa-jornada-completa--o19837",offers:[{id:"yumping-o19837",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/pontevedra/sesion-de-snorkel-isla-de-arosa-jornada-completa--o19837",sourceUrl:"https://www.yumping.com/ofertas/buceo/pontevedra/sesion-de-snorkel-isla-de-arosa-jornada-completa--o19837",priceFrom:25,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Material de snorkel","Sesión guiada","Seguros"],notes:"Variante de jornada completa de la actividad de snorkel en la Isla de Arousa, con material y orientación para conocer los fondos del entorno del Islote de Areoso.",priceFrom:25,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:326,siteSlugs:["foz"],
    title:"Bautismo de buceo doble en el mar en Foz",destination:"Foz",region:"Galicia",slug:"bautismo-de-buceo-doble-en-el-mar-en-foz-326",
    type:"Bautismo",level:"Inicial",duration:"1 hora de inmersión aprox.",audience:"Personas interesadas en bautismo en Foz",
    tags:["Buceo","Yumping","Foz"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lugo/descubrimiento-del-buceo-en-la-ria-de-viveiro--o53324",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/descubrimiento-del-buceo-en-la-ria-de-viveiro--o53324",offers:[{id:"yumping-o53324",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lugo/descubrimiento-del-buceo-en-la-ria-de-viveiro--o53324",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/descubrimiento-del-buceo-en-la-ria-de-viveiro--o53324",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,notes:"Bautismo doble en Foz: una inmersión en aguas confinadas y otra en el mar. Yumping indica aproximadamente 1 hora de inmersión en el mar y edad mínima de 16 años.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:327,siteSlugs:["foz"],
    title:"Curso de buceo PADI Open Water Diver en Foz",destination:"Foz",region:"Galicia",slug:"curso-de-buceo-padi-open-water-diver-en-foz-327",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Foz",
    tags:["Buceo","Yumping","Foz"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lugo/curso-de-buceo-open-water-diver-en-viveiro--o53325",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/curso-de-buceo-open-water-diver-en-viveiro--o53325",offers:[{id:"yumping-o53325",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lugo/curso-de-buceo-open-water-diver-en-viveiro--o53325",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/curso-de-buceo-open-water-diver-en-viveiro--o53325",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Material didáctico","Seguro de buceo obligatorio","Equipo de buceo","Salidas en barco"],notes:"Curso PADI Open Water Diver en Foz. La ficha indica 4 días, 5 módulos teóricos, una sesión en aguas confinadas y cuatro sesiones en aguas abiertas. Requiere saber nadar, mínimo 12 años, certificado médico y 2 fotos de carné.",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:328,siteSlugs:["foz"],
    title:"Salida de buceo en Ollo do Mar, 1 hora",destination:"Foz",region:"Galicia",slug:"salida-de-buceo-en-ollo-do-mar-1-hora-328",
    type:"Fun Dive",level:"Intermedio",duration:"50–60 minutos aprox.",audience:"Personas interesadas en fun dive en Foz",
    tags:["Buceo","Yumping","Foz"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lugo/salidas-de-buceo-en-la-ria-de-viveiro-titulados--o53327",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/salidas-de-buceo-en-la-ria-de-viveiro-titulados--o53327",offers:[{id:"yumping-o53327",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lugo/salidas-de-buceo-en-la-ria-de-viveiro-titulados--o53327",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/salidas-de-buceo-en-la-ria-de-viveiro-titulados--o53327",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Salida de buceo en barco","Botella","Lastre","Uso de duchas y vestuario"],notes:"Salida en embarcación para buceadores titulados, con inmersión en Ollo do Mar. Yumping exige Open Water o Buceador 1 Estrella y seguro de buceo en vigor.",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:329,siteSlugs:["foz"],
    title:"Cinco inmersiones de buceo en Foz con monitor 1 h",destination:"Foz",region:"Galicia",slug:"cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h-329",
    type:"Fun Dive",level:"Intermedio",duration:"5 × 60 minutos aprox.",audience:"Personas interesadas en fun dive en Foz",
    tags:["Buceo","Yumping","Foz"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lugo/cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h--o42327",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h--o42327",offers:[{id:"yumping-o42327",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lugo/cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h--o42327",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h--o42327",priceFrom:175,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:7,notes:"Bono de cinco inmersiones de aproximadamente una hora cada una en Foz y alrededores. Yumping indica capacidad de 1–8 personas y edad mínima de 7 años.",priceFrom:175,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:330,siteSlugs:["foz"],
    title:"Ruta guiada de snorkel con lancha ría de Foz 2 h",destination:"Foz",region:"Galicia",slug:"ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h-330",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Foz",
    tags:["Buceo","Yumping","Foz"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lugo/ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h--o42326",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h--o42326",offers:[{id:"yumping-o42326",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lugo/ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h--o42326",sourceUrl:"https://www.yumping.com/ofertas/buceo/lugo/ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h--o42326",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Lancha","Material de snorkel","Guía"],notes:"Ruta guiada de snorkel de unas 2 horas por la Ría de Foz desde lancha. La actividad está guiada por biólogos marinos y proporciona el material necesario.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:331,siteSlugs:["a-coruna"],
    title:"Bautismo de buceo en mar en A Coruña",destination:"A Coruña",region:"Galicia",slug:"bautismo-de-buceo-en-mar-en-a-coruna-331",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en A Coruña",
    tags:["Buceo","Yumping","A Coruña"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-a-coruna--o15307",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-a-coruna--o15307",offers:[{id:"yumping-o15307",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-a-coruna--o15307",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-a-coruna--o15307",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Material técnico","Instructor profesional","Seguros","Salida en embarcación"],notes:"Primera experiencia de buceo en A Coruña con explicación previa, salida en embarcación e instructor. Yumping indica una duración total de 3 horas.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:332,siteSlugs:["a-coruna"],
    title:"Discover Scuba Diving en Puerto de A Coruña, 3h",destination:"A Coruña",region:"Galicia",slug:"discover-scuba-diving-en-puerto-de-a-coruna-3h-332",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en A Coruña",
    tags:["Buceo","Yumping","A Coruña"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-puerto-de-a-coruna-3h--o85250",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-puerto-de-a-coruna-3h--o85250",offers:[{id:"yumping-o85250",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-puerto-de-a-coruna-3h--o85250",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-puerto-de-a-coruna-3h--o85250",priceFrom:125,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,notes:"Programa Discover Scuba Diving en el Puerto de A Coruña. La ficha indica una duración aproximada de 3 horas, edad mínima de 16 años, equipación y briefing previo.",priceFrom:125,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:333,siteSlugs:["a-coruna"],
    title:"PADI Open Water Diver, Marinaseca",destination:"A Coruña",region:"Galicia",slug:"padi-open-water-diver-marinaseca-333",
    type:"Curso",level:"Inicial",duration:"4–5 días",audience:"Personas interesadas en curso en A Coruña",
    tags:["Buceo","Yumping","A Coruña"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/acoruna/padi-open-water-diver-marinaseca--o28887",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/padi-open-water-diver-marinaseca--o28887",offers:[{id:"yumping-o28887",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/acoruna/padi-open-water-diver-marinaseca--o28887",sourceUrl:"https://www.yumping.com/ofertas/buceo/acoruna/padi-open-water-diver-marinaseca--o28887",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,maxDepth:"18 m",included:["Certificación PADI Open Water Diver","Material de buceo","Material didáctico","Seguros obligatorios","Acceso a piscina climatizada","Salidas en barco","Grupos reducidos de máximo 4 personas","IVA"],notes:"Curso PADI Open Water Diver en Marinaseca. Yumping indica 4–5 días, al menos 5 inmersiones en piscina y 4 inmersiones en mar hasta 18 m. Requiere al menos 16 años y reconocimiento médico.",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:334,siteSlugs:["a-coruna"],
    title:"Curso Advanced Open Water de buceo en A Coruña",destination:"A Coruña",region:"Galicia",slug:"curso-advanced-open-water-de-buceo-en-a-coruna-334",
    type:"Curso",level:"Avanzado",duration:"5–6 días",audience:"Personas interesadas en curso en A Coruña",
    tags:["Buceo","Yumping","A Coruña"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-advanced-open-water-de-buceo-en-a-coruna--o33250",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-advanced-open-water-de-buceo-en-a-coruna--o33250",offers:[{id:"yumping-o33250",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-advanced-open-water-de-buceo-en-a-coruna--o33250",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-advanced-open-water-de-buceo-en-a-coruna--o33250",priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["5 inmersiones de aventura","Formación teórica y práctica"],notes:"Curso Advanced certificado por PADI en A Coruña. La ficha indica una duración de 5–6 días y cinco inmersiones de aventura a elegir.",priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:335,siteSlugs:["gijon-musel"],
    title:"Bautismo de buceo en mar, Puerto del Musel, 1h30m",destination:"Gijón",region:"Asturias",slug:"bautismo-de-buceo-en-mar-puerto-del-musel-1h30m-335",
    type:"Bautismo",level:"Inicial",duration:"1 h 30 min",audience:"Personas interesadas en bautismo en Gijón",
    tags:["Buceo","Yumping","Gijón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/asturias/bautismo-en-piscina-discover-scuba-diving-candas--o57621",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/bautismo-en-piscina-discover-scuba-diving-candas--o57621",offers:[{id:"yumping-o57621",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/asturias/bautismo-en-piscina-discover-scuba-diving-candas--o57621",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/bautismo-en-piscina-discover-scuba-diving-candas--o57621",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:8,notes:"Bautismo de buceo en el Puerto del Musel, Gijón. Yumping indica 1 h 30 min de duración y edad mínima de 8 años; la actividad se realiza en el Muelle del Rendiello.",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:336,siteSlugs:["gijon-musel"],
    title:"Bautismo buceo desde barco, Puerto Deportivo Gijón",destination:"Gijón",region:"Asturias",slug:"bautismo-buceo-desde-barco-puerto-deportivo-gijon-336",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Gijón",
    tags:["Buceo","Yumping","Gijón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/asturias/bautismo-de-buceo-desde-barco-en-gijon--o57409",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/asturias/bautismo-de-buceo-desde-barco-en-gijon--o57409",offers:[{id:"yumping-o57409",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/asturias/bautismo-de-buceo-desde-barco-en-gijon--o57409",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/asturias/bautismo-de-buceo-desde-barco-en-gijon--o57409",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Instructor","Charla teórica","Material necesario","Desplazamiento en barco","Cuota de socio","Seguro"],notes:"Bautismo desde barco en Gijón. La ficha indica unas 2 horas, edad mínima de 10 años, charla previa, equipo, desplazamiento en barco y supervisión de instructor.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:337,siteSlugs:["gijon-musel"],
    title:"Curso FEDAS 1 estrella, Puerto de El Musel, 4 días",destination:"Gijón",region:"Asturias",slug:"curso-fedas-1-estrella-puerto-de-el-musel-4-dias-337",
    type:"Curso",level:"Inicial",duration:"3–4 días",audience:"Personas interesadas en curso en Gijón",
    tags:["Buceo","Yumping","Gijón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/asturias/curso-padi-scuba-diver-en-el-cantabrico-candas--o57622",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/curso-padi-scuba-diver-en-el-cantabrico-candas--o57622",offers:[{id:"yumping-o57622",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/asturias/curso-padi-scuba-diver-en-el-cantabrico-candas--o57622",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/curso-padi-scuba-diver-en-el-cantabrico-candas--o57622",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:14,included:["Material didáctico","Inmersiones","Clases teóricas y prácticas","Equipo de buceo","Seguro"],notes:"Curso FEDAS 1 Estrella en Gijón. Yumping indica 3–4 días, edad mínima de 14 años, certificado médico y clases teóricas y prácticas.",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:338,siteSlugs:["gijon-musel"],
    title:"Inmersión de buceo desde Puerto Musel con equipo",destination:"Gijón",region:"Asturias",slug:"inmersion-de-buceo-desde-puerto-musel-con-equipo-338",
    type:"Fun Dive",level:"Intermedio",duration:"40–60 minutos",audience:"Personas interesadas en fun dive en Gijón",
    tags:["Buceo","Yumping","Gijón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/asturias/inmersion-de-buceo-desde-puerto-musel-con-equipo--o89112",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/inmersion-de-buceo-desde-puerto-musel-con-equipo--o89112",offers:[{id:"yumping-o89112",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/asturias/inmersion-de-buceo-desde-puerto-musel-con-equipo--o89112",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/inmersion-de-buceo-desde-puerto-musel-con-equipo--o89112",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Monitor","Explicaciones","Equipo completo de buceo"],notes:"Inmersión para buceadores titulados desde el Puerto de El Musel. La ficha indica 40–60 minutos, equipo completo incluido y requisito mínimo B1E/PADI Open Water y seguro/licencia vigente.",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:339,siteSlugs:["gijon-musel"],
    title:"Curso FEDAS 2 estrellas Puerto de El Musel, 4 días",destination:"Gijón",region:"Asturias",slug:"curso-fedas-2-estrellas-puerto-de-el-musel-4-dias-339",
    type:"Curso",level:"Avanzado",duration:"3–4 días",audience:"Personas interesadas en curso en Gijón",
    tags:["Buceo","Yumping","Gijón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/asturias/curso-buceo-advanced-open-water-padi-en-candas--o57625",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/curso-buceo-advanced-open-water-padi-en-candas--o57625",offers:[{id:"yumping-o57625",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/asturias/curso-buceo-advanced-open-water-padi-en-candas--o57625",sourceUrl:"https://www.yumping.com/ofertas/buceo/asturias/curso-buceo-advanced-open-water-padi-en-candas--o57625",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:16,included:["Material didáctico","Equipo completo","Clases teóricas y prácticas","Embarcación","Titulación FEDAS-CMAS 2 estrellas"],notes:"Curso FEDAS-CMAS 2 Estrellas + especialidad SVB/RCP. Yumping indica 3–4 días, edad mínima de 16 años y requisito de B1E + 20 inmersiones registradas.",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:340,siteSlugs:["isla-mouro"],
    title:"Bautismo buceo en la Isla de Mouro, 3h",destination:"Santander",region:"Cantabria",slug:"bautismo-buceo-en-la-isla-de-mouro-3h-340",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Santander",
    tags:["Buceo","Yumping","Santander"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-en-la-isla-de-mouro--o12609",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-en-la-isla-de-mouro--o12609",offers:[{id:"yumping-o12609",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-en-la-isla-de-mouro--o12609",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-en-la-isla-de-mouro--o12609",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Equipo autónomo completo","Instructor titulado","Traslado en barco","Seguro de accidentes y responsabilidad civil"],notes:"Bautismo en la Reserva Marina de la Isla de Mouro, en la Bahía de Santander. Yumping indica 3 horas, edad mínima de 12 años, saber nadar y traslado en barco; si el tiempo no permite ir a Mouro, se realiza en Isla de la Torre.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:341,siteSlugs:["isla-mouro"],
    title:"Snorkel en la Isla de Mouro",destination:"Santander",region:"Cantabria",slug:"snorkel-en-la-isla-de-mouro-341",
    type:"Snorkel",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en snorkel en Santander",
    tags:["Buceo","Yumping","Santander"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-la-isla-de-mouro--o43837",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-la-isla-de-mouro--o43837",offers:[{id:"yumping-o43837",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-la-isla-de-mouro--o43837",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-la-isla-de-mouro--o43837",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Actividad de snorkel en la Isla de Mouro. Yumping indica unas 3 horas de duración y material de superficie; la oferta consultada tiene una valoración publicada de una opinión.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:342,siteSlugs:["castro-urdiales"],
    title:"Bautismo de buceo desde rampa de San Guillén 2.5 h",destination:"Castro Urdiales",region:"Cantabria",slug:"bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h-342",
    type:"Bautismo",level:"Inicial",duration:"2,5 horas",audience:"Personas interesadas en bautismo en Castro Urdiales",
    tags:["Buceo","Yumping","Castro Urdiales"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h--o70009",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h--o70009",offers:[{id:"yumping-o70009",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h--o70009",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h--o70009",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:14,notes:"Bautismo desde la rampa de San Guillén. La ficha indica 2,5 horas totales, 40 minutos de inmersión en el mar, edad mínima de 14 años y material incluido.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:343,siteSlugs:["castro-urdiales"],
    title:"Inmersión de buceo por el carguero de Saltacaballo",destination:"Castro Urdiales",region:"Cantabria",slug:"inmersion-de-buceo-por-el-carguero-de-saltacaballo-343",
    type:"Pecio",level:"Intermedio",duration:"3 h 30 min",audience:"Personas interesadas en pecio en Castro Urdiales",
    tags:["Buceo","Yumping","Castro Urdiales"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-carguero-de-saltacaballo--o70020",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-carguero-de-saltacaballo--o70020",offers:[{id:"yumping-o70020",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-carguero-de-saltacaballo--o70020",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-carguero-de-saltacaballo--o70020",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de buceo","Embarcación semirrígida"],notes:"Inmersión desde embarcación en los restos del carguero de Saltacaballo. Yumping indica unas 3 horas y media, salida desde el muelle de Castro Urdiales y equipo proporcionado por el centro.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:344,siteSlugs:["castro-urdiales"],
    title:"Inmersión de buceo bajo el castillo de C.Urdiales",destination:"Castro Urdiales",region:"Cantabria",slug:"inmersion-de-buceo-bajo-el-castillo-de-c-urdiales-344",
    type:"Pecio",level:"Intermedio",duration:"3 h 30 min aprox.",audience:"Personas interesadas en pecio en Castro Urdiales",
    tags:["Buceo","Yumping","Castro Urdiales"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/inmersion-de-buceo-bajo-el-castillo-de-c-urdiales--o70016",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/inmersion-de-buceo-bajo-el-castillo-de-c-urdiales--o70016",offers:[{id:"yumping-o70016",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/inmersion-de-buceo-bajo-el-castillo-de-c-urdiales--o70016",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/cantabria/inmersion-de-buceo-bajo-el-castillo-de-c-urdiales--o70016",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Briefing","Instructor titulado","Equipo de buceo","Barco","Seguros"],notes:"Inmersión en barco bajo el castillo de Castro Urdiales, donde se observan restos de cañones. La ficha indica unas 3,5 horas y exige titulación y reconocimiento médico en regla.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:345,siteSlugs:["castro-urdiales"],
    title:"Inmersión de buceo por el cantil de Las Anclas 3 h",destination:"Castro Urdiales",region:"Cantabria",slug:"inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h-345",
    type:"Fun Dive",level:"Avanzado",duration:"3 h 30 min",audience:"Personas interesadas en fun dive en Castro Urdiales",
    tags:["Buceo","Yumping","Castro Urdiales"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h--o70031",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h--o70031",offers:[{id:"yumping-o70031",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h--o70031",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h--o70031",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"39 m",included:["Monitor titulado","Briefing","Material de buceo","Barco","Seguros"],notes:"Inmersión por un cantil rocoso con dos antiguas anclas. Yumping indica alrededor de 39 m de profundidad y exige titulación B2E; incluye monitor, briefing, material y barco.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:346,siteSlugs:["castro-urdiales"],
    title:"Snorkel en Castro-Urdiales desde embarcación 2h",destination:"Castro Urdiales",region:"Cantabria",slug:"snorkel-en-castro-urdiales-desde-embarcacion-2h-346",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Castro Urdiales",
    tags:["Buceo","Yumping","Castro Urdiales"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-castro-urdiales-desde-embarcacion-2h--o74685",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-castro-urdiales-desde-embarcacion-2h--o74685",offers:[{id:"yumping-o74685",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-castro-urdiales-desde-embarcacion-2h--o74685",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-castro-urdiales-desde-embarcacion-2h--o74685",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:14,included:["Equipo","Instructor","Embarcación"],notes:"Snorkel desde embarcación en Castro Urdiales. Yumping indica 2 horas, edad mínima de 14 años y un máximo de 8 personas por salida.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:347,siteSlugs:["miengo"],
    title:"Bautizo de buceo en piscina Miengo 1h 30 min",destination:"Miengo",region:"Cantabria",slug:"bautizo-de-buceo-en-piscina-miengo-1h-30-min-347",
    type:"Bautismo",level:"Inicial",duration:"1 h 30 min",audience:"Personas interesadas en bautismo en Miengo",
    tags:["Buceo","Yumping","Miengo"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautizo-de-buceo-en-piscina-miengo-1h-30-min--o62672",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautizo-de-buceo-en-piscina-miengo-1h-30-min--o62672",offers:[{id:"yumping-o62672",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/bautizo-de-buceo-en-piscina-miengo-1h-30-min--o62672",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautizo-de-buceo-en-piscina-miengo-1h-30-min--o62672",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Bautismo en piscina","Briefing","Inmersión controlada","Instructor profesional","Material de buceo"],notes:"Bautismo de buceo en piscina en Miengo. La ficha indica aproximadamente 1 hora y media, briefing, inmersión controlada en aguas confinadas y un mínimo de 3 personas por grupo.",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:348,siteSlugs:["miengo"],
    title:"Curso de buceo Advanced Open Water Diver Polanco",destination:"Miengo",region:"Cantabria",slug:"curso-de-buceo-advanced-open-water-diver-polanco-348",
    type:"Curso",level:"Avanzado",duration:"4 días",audience:"Personas interesadas en curso en Miengo",
    tags:["Buceo","Yumping","Miengo"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-advanced-open-water-diver-polanco--o62342",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-advanced-open-water-diver-polanco--o62342",offers:[{id:"yumping-o62342",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-advanced-open-water-diver-polanco--o62342",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-advanced-open-water-diver-polanco--o62342",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Curso Advanced Open Water Diver","Instructor profesional","Material didáctico","4 inmersiones en el mar","Seguro","Equipación completa"],notes:"Curso Advanced Open Water Diver en Miengo. Yumping indica 4 días, orientado a buceadores con OWD, cuatro inmersiones en mar y formación en aguas confinadas.",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:349,siteSlugs:["miengo"],
    title:"Curso de buceo especialidad Nitrox en Requejada",destination:"Miengo",region:"Cantabria",slug:"curso-de-buceo-especialidad-nitrox-en-requejada-349",
    type:"Curso",level:"Avanzado",duration:"2 días",audience:"Personas interesadas en curso en Miengo",
    tags:["Buceo","Yumping","Miengo"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-especialidad-nitrox-en-requejada--o62359",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-especialidad-nitrox-en-requejada--o62359",offers:[{id:"yumping-o62359",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-especialidad-nitrox-en-requejada--o62359",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-especialidad-nitrox-en-requejada--o62359",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Profesor","Clases teóricas e inmersiones","Seguros","Titulación"],notes:"Curso de especialidad Nitrox en Requejada. La ficha indica 2 días, mínimo 12 inmersiones previas en mar abierto y OWD SNSI, con clases teóricas e inmersiones.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:350,siteSlugs:["miengo"],
    title:"Título de buceo Open Water Diver en Requejada",destination:"Miengo",region:"Cantabria",slug:"titulo-de-buceo-open-water-diver-en-requejada-350",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Miengo",
    tags:["Buceo","Yumping","Miengo"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/titulo-de-buceo-open-water-diver-en-requejada--o62344",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/titulo-de-buceo-open-water-diver-en-requejada--o62344",offers:[{id:"yumping-o62344",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/titulo-de-buceo-open-water-diver-en-requejada--o62344",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/titulo-de-buceo-open-water-diver-en-requejada--o62344",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Profesionales titulados","Material","Teoría y práctica","Seguros","Titulación de buceo"],notes:"Curso Open Water Diver de 4 días en Requejada. Yumping indica una primera inmersión en aguas confinadas y cuatro inmersiones en mar abierto hasta 18 m, con titulación al superar las pruebas.",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:351,siteSlugs:["noja"],
    title:"Snorkel en Noja 2h",destination:"Noja",region:"Cantabria",slug:"snorkel-en-noja-2h-351",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Noja",
    tags:["Buceo","Yumping","Noja"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-noja-2h--o22856",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-noja-2h--o22856",offers:[{id:"yumping-o22856",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-noja-2h--o22856",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-noja-2h--o22856",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Snorkel de 2 horas","Material necesario","Instructor titulado","Fotografías de la experiencia","Seguro de accidentes y Responsabilidad Civil"],notes:"Snorkel de 2 horas en la playa de Trengandín. Yumping indica que es apto para todas las edades con requisito de saber nadar; incluye material, instructor, fotografías y seguro.",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:352,siteSlugs:["isla-mouro"],
    title:"Bautismo de buceo desde barco Isla de la Torre, 3h",destination:"Santander",region:"Cantabria",slug:"bautismo-de-buceo-desde-barco-isla-de-la-torre-3h-352",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Santander",
    tags:["Buceo","Yumping","Santander"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-3-horas-en-cantabria--o62198",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-3-horas-en-cantabria--o62198",offers:[{id:"yumping-o62198",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-3-horas-en-cantabria--o62198",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-3-horas-en-cantabria--o62198",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,included:["Bautismo de buceo","Charla y teoría","Equipación completa","Vestuarios","Seguro","Traslado en barco","1 instructor por persona","Diploma"],notes:"Bautismo desde embarcación hacia Isla de la Torre, en la Bahía de Santander. La ficha indica 3 horas, inmersión de unos 35–40 minutos y edad mínima de 12 años.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:353,siteSlugs:["isla-mouro"],
    title:"Curso Open Water Diver con Certificación Santander",destination:"Santander",region:"Cantabria",slug:"curso-open-water-diver-con-certificacion-santander-353",
    type:"Curso",level:"Inicial",duration:"2–4 días",audience:"Personas interesadas en curso en Santander",
    tags:["Buceo","Yumping","Santander"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-open-water-diver-con-certificacion-santander--o36886",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-open-water-diver-con-certificacion-santander--o36886",offers:[{id:"yumping-o36886",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/curso-open-water-diver-con-certificacion-santander--o36886",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/curso-open-water-diver-con-certificacion-santander--o36886",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,maxDepth:"18 m",included:["Material didáctico","Equipo completo de buceo","2 inmersiones teórico-prácticas en piscinas","4 inmersiones en mar abierto","Tramitación de la licencia","Salidas en barco"],notes:"Curso Open Water Diver en Santander. Yumping indica 2–4 días, 2 inmersiones teórico-prácticas en piscina y 4 en mar abierto; edad mínima de 10 años y autorización paterna para menores.",priceFrom:360,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:354,siteSlugs:["noja"],
    title:"Ruta de snorkel nocturno en la playa de Ris Noja",destination:"Noja",region:"Cantabria",slug:"ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja-354",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Noja",
    tags:["Buceo","Yumping","Noja"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja--o66105",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja--o66105",offers:[{id:"yumping-o66105",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja--o66105",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja--o66105",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de snorkel completo","Guía experto","Briefing","Ruta guiada de 2 horas","Seguros"],notes:"Ruta guiada de snorkel nocturno en la playa de Ris, Noja. Yumping indica 2 horas y actividad sujeta a las mareas; incluye equipo completo, guía, briefing, ruta y seguros.",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:355,siteSlugs:["noja"],
    title:"Snorkel nocturno ruta guiada en playa de Ris Noja",destination:"Noja",region:"Cantabria",slug:"snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja-355",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Noja",
    tags:["Buceo","Yumping","Noja"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja--o66104",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja--o66104",offers:[{id:"yumping-o66104",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja--o66104",sourceUrl:"https://www.yumping.com/ofertas/buceo/cantabria/snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja--o66104",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Otra oferta de snorkel nocturno en la playa de Ris de Noja. Yumping indica 2 horas de duración; se realiza por la noche y el horario depende de la época y la hora de anochecer.",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:356,siteSlugs:["las-canteras"],
    title:"Bautismo buceo en Playa de las Canteras+fotos, 4h",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"bautismo-buceo-en-playa-de-las-canteras-fotos-4h-356",
    type:"Bautismo",level:"Inicial",duration:"4 horas aprox.",audience:"Personas interesadas en bautismo en Las Palmas de Gran Canaria",
    tags:["Buceo","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-taurito--o45998",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-taurito--o45998",offers:[{id:"yumping-o45998",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-taurito--o45998",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-taurito--o45998",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructores profesionales","Equipo completo de buceo","Fotografías","Clase teórica","Inmersión","Seguros"],notes:"Bautismo de iniciación desde Las Palmas de Gran Canaria con clase teórica, inmersión y fotografías. Yumping indica unas 4 horas y transporte desde el centro hasta el punto de inmersión y regreso.",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:357,siteSlugs:["las-canteras"],
    title:"Bautizo de buceo desde playa, Gran Canaria",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"bautizo-de-buceo-desde-playa-gran-canaria-357",
    type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Las Palmas de Gran Canaria",
    tags:["Buceo","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-desde-playa-gran-canaria--o31590",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-desde-playa-gran-canaria--o31590",offers:[{id:"yumping-o31590",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-desde-playa-gran-canaria--o31590",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-desde-playa-gran-canaria--o31590",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"3 m",included:["Equipo completo","Monitor","Seguro de accidentes y RC"],notes:"Bautismo desde playa con unas 2 horas de actividad y una inmersión aproximada de 30–35 minutos. Yumping indica una profundidad máxima de 3 m y exige certificado médico.",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:358,siteSlugs:["las-canteras"],
    title:"Bautismo de Buceo PADI Las Palmas 3h",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"bautismo-de-buceo-padi-las-palmas-3h-358",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Las Palmas de Gran Canaria",
    tags:["Buceo","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-padi-las-palmas-3h--o36890",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-padi-las-palmas-3h--o36890",offers:[{id:"yumping-o36890",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-padi-las-palmas-3h--o36890",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-padi-las-palmas-3h--o36890",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Equipo completo de buceo","Instructor titulado","Material didáctico","Titulación al finalizar"],notes:"Bautismo PADI en Las Palmas con parte teórica, inmersión en piscina y segunda inmersión en mar. Yumping indica edad mínima de 10 años.",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:359,siteSlugs:["las-canteras"],
    title:"Curso Buceo Open Water Diver en Las Palmas, 5 días",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"curso-buceo-open-water-diver-en-las-palmas-5-dias-359",
    type:"Curso",level:"Inicial",duration:"5 días",audience:"Personas interesadas en curso en Las Palmas de Gran Canaria",
    tags:["Buceo","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-open-water-diver--o20549",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-open-water-diver--o20549",offers:[{id:"yumping-o20549",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-open-water-diver--o20549",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-open-water-diver--o20549",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:15,maxDepth:"18 m",included:["Curso teórico","6 inmersiones","Seguro","Certificación","Transporte a las inmersiones","IVA"],notes:"Curso Open Water Diver de 5 días en Las Palmas. La ficha indica 6 lecciones teóricas, 6 inmersiones y formación hasta 18 m; incluye transporte a las inmersiones.",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:360,siteSlugs:["puerto-rico-gran-canaria"],
    title:"PADI Discover Scuba Diving en playa, Puerto Rico",destination:"Puerto Rico",region:"Canarias",slug:"padi-discover-scuba-diving-en-playa-puerto-rico-360",
    type:"Bautismo",level:"Inicial",duration:"2 horas aprox.",audience:"Personas interesadas en bautismo en Puerto Rico",
    tags:["Buceo","Yumping","Puerto Rico"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-discover-scuba-diving-en-playa-puerto-rico--o29435",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-discover-scuba-diving-en-playa-puerto-rico--o29435",offers:[{id:"yumping-o29435",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-discover-scuba-diving-en-playa-puerto-rico--o29435",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-discover-scuba-diving-en-playa-puerto-rico--o29435",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Programa PADI Discover Scuba Diving en playa en Puerto Rico, Gran Canaria. Yumping indica aproximadamente 2 horas y lo clasifica como primera toma de contacto con el buceo.",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:361,siteSlugs:["puerto-rico-gran-canaria"],
    title:"PADI Open Water Puerto Rico",destination:"Puerto Rico",region:"Canarias",slug:"padi-open-water-puerto-rico-361",
    type:"Curso",level:"Inicial",duration:"3 días aprox.",audience:"Personas interesadas en curso en Puerto Rico",
    tags:["Buceo","Yumping","Puerto Rico"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-open-water-puerto-rico--o29445",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-open-water-puerto-rico--o29445",offers:[{id:"yumping-o29445",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-open-water-puerto-rico--o29445",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-open-water-puerto-rico--o29445",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Material","Instructor","Barco","Seguros","IGIC"],notes:"Curso PADI Open Water en Puerto Rico, Mogán. La ficha indica unos 3 días, prácticas en piscina y 4 inmersiones en el mar, llegando a 18 m en la última inmersión.",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:362,siteSlugs:["puerto-rico-gran-canaria"],
    title:"PADI Scuba Diver en Puerto Rico",destination:"Puerto Rico",region:"Canarias",slug:"padi-scuba-diver-en-puerto-rico-362",
    type:"Curso",level:"Inicial",duration:"2 días aprox.",audience:"Personas interesadas en curso en Puerto Rico",
    tags:["Buceo","Yumping","Puerto Rico"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-scuba-diver-en-puerto-rico--o29501",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-scuba-diver-en-puerto-rico--o29501",offers:[{id:"yumping-o29501",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-scuba-diver-en-puerto-rico--o29501",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-scuba-diver-en-puerto-rico--o29501",priceFrom:230,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"12 m",included:["Teoría","Prácticas en piscina","2 inmersiones en el mar","Instructores","Seguros","Material","IGIC"],notes:"Curso PADI Scuba Diver de aproximadamente 2 días. Yumping indica prácticas en piscina, teoría y 2 inmersiones en el mar, con certificación para bucear hasta 12 m.",priceFrom:230,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:363,siteSlugs:["puerto-rico-gran-canaria"],
    title:"PADI Advanced Open Water, Puerto Rico",destination:"Puerto Rico",region:"Canarias",slug:"padi-advanced-open-water-puerto-rico-363",
    type:"Curso",level:"Avanzado",duration:"2 días aprox.",audience:"Personas interesadas en curso en Puerto Rico",
    tags:["Buceo","Yumping","Puerto Rico"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-advanced-open-water-puerto-rico--o29461",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-advanced-open-water-puerto-rico--o29461",offers:[{id:"yumping-o29461",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-advanced-open-water-puerto-rico--o29461",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-advanced-open-water-puerto-rico--o29461",priceFrom:345,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"30 m",included:["Instructor","Material","Seguros","5 inmersiones","IGIC"],notes:"Curso PADI Advanced Open Water en Puerto Rico, Mogán. Yumping indica aproximadamente 2 días y 5 inmersiones, incluyendo trabajo de flotabilidad y orientación y una experiencia hasta 30 m.",priceFrom:345,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:364,siteSlugs:["telde"],
    title:"Bautismo de buceo en Telde 3 horas",destination:"Telde",region:"Canarias",slug:"bautismo-de-buceo-en-telde-3-horas-364",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Telde",
    tags:["Buceo","Yumping","Telde"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-telde-3-horas--o62277",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-telde-3-horas--o62277",offers:[{id:"yumping-o62277",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-telde-3-horas--o62277",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-telde-3-horas--o62277",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Práctica en piscina","Inmersión en el mar","Titulación Try Scuba SSI","Diploma Try Scuba SSI","Seguro de buceo"],notes:"Bautismo en Telde con duración aproximada de 3 horas. La ficha indica práctica en piscina, una inmersión en el mar y opción de fotografías o vídeo; incluye titulación Try Scuba SSI y seguro de buceo.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:365,siteSlugs:["telde"],
    title:"Curso de buceo Open Water Diver en Telde 3 días",destination:"Telde",region:"Canarias",slug:"curso-de-buceo-open-water-diver-en-telde-3-dias-365",
    type:"Curso",level:"Inicial",duration:"3 días aprox.",audience:"Personas interesadas en curso en Telde",
    tags:["Buceo","Yumping","Telde"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-open-water-diver-en-telde-3-dias--o62278",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-open-water-diver-en-telde-3-dias--o62278",offers:[{id:"yumping-o62278",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-open-water-diver-en-telde-3-dias--o62278",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-open-water-diver-en-telde-3-dias--o62278",priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Material didáctico","Seguro de accidentes","Tramitación de la certificación","Tarjeta de certificación"],notes:"Curso Open Water Diver en Telde de aproximadamente 3 días. La ficha indica teoría online o presencial, seguro de accidentes, tramitación de la certificación y tarjeta de certificación.",priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:366,siteSlugs:["telde"],
    title:"Curso Advanced Open Water Diver Telde 3 días",destination:"Telde",region:"Canarias",slug:"curso-advanced-open-water-diver-telde-3-dias-366",
    type:"Curso",level:"Avanzado",duration:"3 días",audience:"Personas interesadas en curso en Telde",
    tags:["Buceo","Yumping","Telde"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-telde-3-dias--o62279",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-telde-3-dias--o62279",offers:[{id:"yumping-o62279",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-telde-3-dias--o62279",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-telde-3-dias--o62279",priceFrom:250,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,maxDepth:"40 m",included:["Teoría online","Material didáctico","Tutoría del instructor","5 inmersiones en el mar","Tramitación de la certificación","Tarjeta de certificación","Equipo completo"],notes:"Curso Advanced Open Water Diver de 3 días en Telde para quienes ya tienen OWD. Yumping indica 5 inmersiones de aventura y edad mínima de 12 años.",priceFrom:250,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:367,siteSlugs:["caleta-de-fuste"],
    title:"Bautismo de buceo en Caleta de Fuste y fotos",destination:"Caleta de Fuste",region:"Canarias",slug:"bautismo-de-buceo-en-caleta-de-fuste-y-fotos-367",
    type:"Bautismo",level:"Inicial",duration:"2–2,5 horas",audience:"Personas interesadas en bautismo en Caleta de Fuste",
    tags:["Buceo","Yumping","Caleta de Fuste"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-caleta-de-fuste-y-fotos--o55340",sourceUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-caleta-de-fuste-y-fotos--o55340",offers:[{id:"yumping-o55340",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-caleta-de-fuste-y-fotos--o55340",sourceUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-caleta-de-fuste-y-fotos--o55340",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"6 m",included:["30 minutos de teoría","Sesión en piscina","Inmersión en el mar","Alquiler de equipo","Fotos"],notes:"Discover Scuba Diving en Caleta de Fuste. Yumping indica 30 minutos de teoría, sesión en piscina y una inmersión en el mar a unos 6 m, con fotografías.",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:368,siteSlugs:["morro-jable"],
    title:"Bautismo de buceo en mar en Morro Jable, 3 horas",destination:"Morro Jable",region:"Canarias",slug:"bautismo-de-buceo-en-mar-en-morro-jable-3-horas-368",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Morro Jable",
    tags:["Buceo","Yumping","Morro Jable"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-piscina-y-mar-en-morro-jable--o23953",sourceUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-piscina-y-mar-en-morro-jable--o23953",offers:[{id:"yumping-o23953",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-piscina-y-mar-en-morro-jable--o23953",sourceUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-piscina-y-mar-en-morro-jable--o23953",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Bautismo en Morro Jable. La ficha de Yumping muestra 95 € y una experiencia en aguas abiertas; la oferta consultada incluye información de la salida en Fuerteventura.",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:369,siteSlugs:["morro-jable"],
    title:"Tour de snorkel por la costa de Morro Jable, 3h",destination:"Morro Jable",region:"Canarias",slug:"tour-de-snorkel-por-la-costa-de-morro-jable-3h-369",
    type:"Snorkel",level:"Inicial",duration:"2 horas aprox.",audience:"Personas interesadas en snorkel en Morro Jable",
    tags:["Buceo","Yumping","Morro Jable"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/tour-de-snorkel-desde-barco-por-costa-morro-jable--o69754",sourceUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/tour-de-snorkel-desde-barco-por-costa-morro-jable--o69754",offers:[{id:"yumping-o69754",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/fuerteventura/tour-de-snorkel-desde-barco-por-costa-morro-jable--o69754",sourceUrl:"https://www.yumping.com/ofertas/buceo/fuerteventura/tour-de-snorkel-desde-barco-por-costa-morro-jable--o69754",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:8,notes:"Ruta de snorkel desde Morro Jable en barco por la costa este de Fuerteventura. Yumping indica unas 2 horas en la información general, edad mínima de 8 años y recorrido con varias paradas.",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:370,siteSlugs:["pozo-izquierdo"],
    title:"Curso Advanced Open Water Diver Pozo Izquierdo",destination:"Pozo Izquierdo",region:"Canarias",slug:"curso-advanced-open-water-diver-pozo-izquierdo-370",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Pozo Izquierdo",
    tags:["Buceo","Canarias","Yumping","Pozo Izquierdo"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-pozo-izquierdo--o63831",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-pozo-izquierdo--o63831",offers:[{id:"yumping-o63831",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-pozo-izquierdo--o63831",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-pozo-izquierdo--o63831",priceFrom:240,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Instructor de buceo","Equipo completo","Seguro","Curso"],notes:"Curso Advanced Open Water Diver en Pozo Izquierdo. La ficha indica 5 inmersiones: profundidad y orientación obligatorias y tres de aventura a elegir. Duración aproximada de 2–3 días.",priceFrom:240,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:371,siteSlugs:["pozo-izquierdo"],
    title:"Curso Pro Rec Tec Open Water Diver en Gran Canaria",destination:"Pozo Izquierdo",region:"Canarias",slug:"curso-pro-rec-tec-open-water-diver-en-gran-canaria-371",
    type:"Curso",level:"Inicial",duration:"3 días · 5 horas/día",audience:"Personas interesadas en curso en Pozo Izquierdo",
    tags:["Buceo","Canarias","Yumping","Pozo Izquierdo"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-pro-rec-tec-open-water-diver-en-gran-canaria--o59729",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-pro-rec-tec-open-water-diver-en-gran-canaria--o59729",offers:[{id:"yumping-o59729",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-pro-rec-tec-open-water-diver-en-gran-canaria--o59729",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-pro-rec-tec-open-water-diver-en-gran-canaria--o59729",priceFrom:285,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Todo el material de buceo necesario","Libro de registro de inmersiones","Certificado Open Water Diver Pro Rec Tec"],notes:"Curso Pro Rec Tec Open Water Diver en Gran Canaria. La ficha indica 3 días, 5 horas por día y 6 inmersiones, empezando en aguas confinadas y continuando en mar abierto. Profundidad indicada: 18 m con compañero.",priceFrom:285,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:372,siteSlugs:["el-cabron"],
    title:"Buceo en playa de El Cabrón Gran Canaria para titulados",destination:"El Cabrón",region:"Canarias",slug:"buceo-en-playa-de-el-cabron-gran-canaria-para-titulados-372",
    type:"Fun Dive",level:"Intermedio",duration:"1 hora aprox.",audience:"Personas interesadas en fun dive en El Cabrón",
    tags:["Buceo","Canarias","Yumping","El Cabrón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-en-playa-de-el-cabron-gran-canaria-titulados--o58994",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-en-playa-de-el-cabron-gran-canaria-titulados--o58994",offers:[{id:"yumping-o58994",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-en-playa-de-el-cabron-gran-canaria-titulados--o58994",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-en-playa-de-el-cabron-gran-canaria-titulados--o58994",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Inmersión para buceadores titulados en Playa de El Cabrón. Yumping indica una duración habitual de 1 hora y describe una plataforma rocosa a unos 12 m que desciende otros 23 m.",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:373,siteSlugs:["las-canteras"],
    title:"Bautizo de buceo en Playa Las Canteras, 4 horas",destination:"Las Canteras",region:"Canarias",slug:"bautizo-de-buceo-en-playa-las-canteras-4-horas-373",
    type:"Bautismo",level:"Inicial",duration:"4 horas",audience:"Personas interesadas en bautismo en Las Canteras",
    tags:["Buceo","Canarias","Yumping","Las Canteras"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-gran-canaria-4-horas--o20699",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-gran-canaria-4-horas--o20699",offers:[{id:"yumping-o20699",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-gran-canaria-4-horas--o20699",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-gran-canaria-4-horas--o20699",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de buceo","Clase teórica previa","Transporte al punto de buceo","Instructor","Seguro"],notes:"Bautismo en Playa de Las Canteras con charla previa, reparto de equipo y una inmersión en zona controlada según las condiciones del mar. Yumping indica unas 4 horas de actividad y transporte desde el centro hasta el punto de buceo.",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:374,siteSlugs:["las-canteras"],
    title:"Bautismo de buceo Las Palmas de Gran Canaria",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"bautismo-de-buceo-las-palmas-de-gran-canaria-374",
    type:"Bautismo",level:"Inicial",duration:"3–4 horas",audience:"Personas interesadas en bautismo en Las Palmas de Gran Canaria",
    tags:["Buceo","Canarias","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-las-palmas-de-gran-canaria--o22442",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-las-palmas-de-gran-canaria--o22442",offers:[{id:"yumping-o22442",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-las-palmas-de-gran-canaria--o22442",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-las-palmas-de-gran-canaria--o22442",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de buceo","Instructor","Seguro","Transporte","Registro del programa en PADI"],notes:"Bautismo de buceo en las costas de Las Palmas. La ficha indica 3–4 horas, charla teórica, traslado al punto de inmersión e inmersión supervisada por instructor; requisito de saber nadar.",priceFrom:60,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:375,siteSlugs:["las-canteras"],
    title:"Bautismo de buceo en Gran Canaria 3 h",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"bautismo-de-buceo-en-gran-canaria-3-h-375",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Las Palmas de Gran Canaria",
    tags:["Buceo","Canarias","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-gran-canaria-3-h--o50685",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-gran-canaria-3-h--o50685",offers:[{id:"yumping-o50685",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-gran-canaria-3-h--o50685",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-gran-canaria-3-h--o50685",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Equipo completo de buceo","Instructor titulado","Material didáctico","Titulación al finalizar"],notes:"Bautismo de iniciación en Las Palmas de Gran Canaria. Yumping indica 3 horas, clase teórica, una inmersión en piscina climatizada de 1 hora y una segunda inmersión en mar de aproximadamente 1 hora; edad mínima de 10 años.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:376,siteSlugs:["risco-verde"],
    title:"Bautizo de Buceo en mar desde Risco Verde",destination:"Risco Verde",region:"Canarias",slug:"bautizo-de-buceo-en-mar-desde-risco-verde-376",
    type:"Bautismo",level:"Inicial",duration:"5 horas aprox.",audience:"Personas interesadas en bautismo en Risco Verde",
    tags:["Buceo","Canarias","Yumping","Risco Verde"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-mar-desde-risco-verde--o28628",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-mar-desde-risco-verde--o28628",offers:[{id:"yumping-o28628",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-mar-desde-risco-verde--o28628",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-mar-desde-risco-verde--o28628",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Clase teórica de unos 40 minutos","Equipo completo","Instructor experto","Seguro de Responsabilidad Civil y Accidentes"],notes:"Bautismo desde Risco Verde. Yumping indica una clase teórica de unos 40 minutos antes de la inmersión y exige certificado médico; los horarios varían entre invierno y verano.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:377,siteSlugs:["las-canteras"],
    title:"Curso buceo PADI Advanced Open Water",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"curso-buceo-padi-advanced-open-water-377",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Las Palmas de Gran Canaria",
    tags:["Buceo","Canarias","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-padi-advanced-open-water--o38739",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-padi-advanced-open-water--o38739",offers:[{id:"yumping-o38739",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-padi-advanced-open-water--o38739",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-padi-advanced-open-water--o38739",priceFrom:345,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:15,included:["Certificado oficial PADI Advanced Open Water","Monitores titulados","Cinco inmersiones","Matrícula del curso","Equipo de buceo completo"],notes:"Curso PADI Advanced Open Water en Gran Canaria. Yumping indica 5 inmersiones: profundidad y navegación obligatorias y tres de elección; requiere Open Water o equivalente y declaración médica.",priceFrom:345,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:378,siteSlugs:["las-canteras"],
    title:"Curso PADI Rescue Diver + Emergency First Response",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"curso-padi-rescue-diver-emergency-first-response-378",
    type:"Curso",level:"Avanzado",duration:"3 días aprox.",audience:"Personas interesadas en curso en Las Palmas de Gran Canaria",
    tags:["Buceo","Canarias","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-padi-rescate-y-primeros-auxilios--o38740",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-padi-rescate-y-primeros-auxilios--o38740",offers:[{id:"yumping-o38740",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-padi-rescate-y-primeros-auxilios--o38740",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-padi-rescate-y-primeros-auxilios--o38740",priceFrom:399,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:15,included:["Certificado oficial PADI Rescue Diver + EFR","Monitores titulados","Equipo de buceo","Curso EFR","Matrícula","Tasas de certificación"],notes:"Curso PADI Rescue Diver + Emergency First Response. La ficha indica unos 3 días, formación para responder a emergencias y requisito de Advanced Open Water o equivalente; edad mínima 15 años, 12 para Junior.",priceFrom:399,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:379,siteSlugs:["las-canteras"],
    title:"PADI Open Water en Las Palmas 3 días",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"padi-open-water-en-las-palmas-3-dias-379",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Las Palmas de Gran Canaria",
    tags:["Buceo","Canarias","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-open-water-en-las-palmas-3-dias--o38735",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-open-water-en-las-palmas-3-dias--o38735",offers:[{id:"yumping-o38735",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-open-water-en-las-palmas-3-dias--o38735",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/padi-open-water-en-las-palmas-3-dias--o38735",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Seguros","Monitores profesionales","Material completo","Certificado oficial PADI Open Water Diver","Matrícula"],notes:"Curso PADI Open Water Diver de 3 días en Las Palmas. Yumping indica clases teóricas y prácticas, transporte desde el alojamiento y edad mínima de 10 años con acompañamiento adulto para menores.",priceFrom:455,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:380,siteSlugs:["las-canteras"],
    title:"Curso Advance Open Water Diver, Gran Canaria",destination:"Las Palmas de Gran Canaria",region:"Canarias",slug:"curso-advance-open-water-diver-gran-canaria-380",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Las Palmas de Gran Canaria",
    tags:["Buceo","Canarias","Yumping","Las Palmas de Gran Canaria"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advance-open-water-diver-gran-canaria--o22549",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advance-open-water-diver-gran-canaria--o22549",offers:[{id:"yumping-o22549",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advance-open-water-diver-gran-canaria--o22549",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advance-open-water-diver-gran-canaria--o22549",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Clases teóricas y prácticas","Manuales del curso","Certificación","Transporte"],notes:"Curso Advanced Open Water en Las Palmas. Yumping indica cinco inmersiones especiales: dos obligatorias y tres a elegir. Incluye teoría, manuales, certificación y transporte; no incluye equipo.",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:381,siteSlugs:["arinaga"],
    title:"Bono 10 inmersiones",destination:"Arinaga",region:"Canarias",slug:"bono-10-inmersiones-381",
    type:"Fun Dive",level:"Intermedio",duration:"Duración variable",audience:"Personas interesadas en fun dive en Arinaga",
    tags:["Buceo","Canarias","Yumping","Arinaga"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bono-10-inmersiones--o28756",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bono-10-inmersiones--o28756",offers:[{id:"yumping-o28756",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/bono-10-inmersiones--o28756",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/bono-10-inmersiones--o28756",priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["10 inmersiones desde costa","Equipo completo con botella y plomos","Guía profesional","Seguros"],notes:"Bono de 10 inmersiones en Arinaga con una inmersión adicional gratuita. Yumping indica que está dirigido a titulados PADI o equivalente, con equipo completo, botella y plomos, y elección del punto según las condiciones del mar.",priceFrom:280,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:382,siteSlugs:["arinaga"],
    title:"Inmersión desde costa en Gran Canaria titulados",destination:"Arinaga",region:"Canarias",slug:"inmersion-desde-costa-en-gran-canaria-titulados-382",
    type:"Fun Dive",level:"Intermedio",duration:"2 horas por inmersión",audience:"Personas interesadas en fun dive en Arinaga",
    tags:["Buceo","Canarias","Yumping","Arinaga"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/inmersion-desde-costa-en-gran-canaria-titulados--o28703",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/inmersion-desde-costa-en-gran-canaria-titulados--o28703",offers:[{id:"yumping-o28703",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/inmersion-desde-costa-en-gran-canaria-titulados--o28703",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/inmersion-desde-costa-en-gran-canaria-titulados--o28703",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Servicio de guía","Botella","Plomos"],notes:"Salidas de buceo desde costa para personas con titulación PADI o similar. Yumping indica aproximadamente 2 horas para una inmersión y 5 horas para dos, con guía, botella y plomos incluidos. Los puntos habituales incluyen El Cabrón, Tufia y Sardina del Norte.",priceFrom:30,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:383,siteSlugs:["las-canteras"],
    title:"Snorkel en Playa de las Canteras 2 horas",destination:"Las Canteras",region:"Canarias",slug:"snorkel-en-playa-de-las-canteras-2-horas-383",
    type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Las Canteras",
    tags:["Buceo","Canarias","Yumping","Las Canteras"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/snorkel-en-playa-de-las-canteras-2-horas--o64224",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/snorkel-en-playa-de-las-canteras-2-horas--o64224",offers:[{id:"yumping-o64224",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/gran-canaria/snorkel-en-playa-de-las-canteras-2-horas--o64224",sourceUrl:"https://www.yumping.com/ofertas/buceo/gran-canaria/snorkel-en-playa-de-las-canteras-2-horas--o64224",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Transporte desde las instalaciones","Guía","Material de snorkel"],notes:"Ruta de snorkel guiada en Playa de Las Canteras. Yumping indica unas 2 horas, transporte desde las instalaciones hasta la zona y grupos de 2–5 personas.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:384,siteSlugs:["las-galletas"],
    title:"Bautismo de Buceo desde barco, Tenerife",destination:"Las Galletas",region:"Canarias",slug:"bautismo-de-buceo-desde-barco-tenerife-384",
    type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Las Galletas",
    tags:["Buceo","Canarias","Yumping","Las Galletas"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-desde-barco-tenerife--o31281",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-desde-barco-tenerife--o31281",offers:[{id:"yumping-o31281",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-desde-barco-tenerife--o31281",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-desde-barco-tenerife--o31281",priceFrom:69,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Bautismo desde barco en Tenerife, con salida desde Las Galletas. La ficha actual muestra 69 € y registra 14 opiniones; el proveedor es Buceo Tenerife.",priceFrom:69,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:385,siteSlugs:["los-cristianos-tenerife"],
    title:"Bautizo buceo Los Cristianos desde Costa 2h 30 min",destination:"Los Cristianos",region:"Canarias",slug:"bautizo-buceo-los-cristianos-desde-costa-2h-30-min-385",
    type:"Bautismo",level:"Inicial",duration:"2 h 30 min",audience:"Personas interesadas en bautismo en Los Cristianos",
    tags:["Buceo","Canarias","Yumping","Los Cristianos"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautizo-buceo-los-cristianos-desde-costa-2h-30-min--o61728",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautizo-buceo-los-cristianos-desde-costa-2h-30-min--o61728",offers:[{id:"yumping-o61728",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautizo-buceo-los-cristianos-desde-costa-2h-30-min--o61728",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautizo-buceo-los-cristianos-desde-costa-2h-30-min--o61728",priceFrom:65,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:10,included:["Transporte desde el centro hasta la zona de buceo y regreso"],notes:"Bautismo desde costa en Los Cristianos. Yumping indica 2 horas y 30 minutos, con 30–50 minutos de inmersión, edad mínima de 10 años y transporte ida y vuelta desde el centro.",priceFrom:65,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:386,siteSlugs:["costa-adeje"],
    title:"Snorkel con tortugas en la Costa Adeje 2h 30 min",destination:"Costa Adeje",region:"Canarias",slug:"snorkel-con-tortugas-en-la-costa-adeje-2h-30-min-386",
    type:"Snorkel",level:"Inicial",duration:"2 h 30 min",audience:"Personas interesadas en snorkel en Costa Adeje",
    tags:["Buceo","Canarias","Yumping","Costa Adeje"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/snorkel-con-tortugas-en-la-costa-adeje-2h-30-min--o62824",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/snorkel-con-tortugas-en-la-costa-adeje-2h-30-min--o62824",offers:[{id:"yumping-o62824",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/snorkel-con-tortugas-en-la-costa-adeje-2h-30-min--o62824",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/snorkel-con-tortugas-en-la-costa-adeje-2h-30-min--o62824",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Snorkel en zona de avistamiento de tortugas","Guía privado","Equipo de snorkel","Transporte en zodiac","Seguro de accidentes","Acceso a MySSI"],notes:"Snorkel guiado en Costa Adeje. Yumping indica 2 horas y 30 minutos, salida hacia una bahía protegida en zodiac y requisito de formar un grupo mínimo de 4 personas.",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:387,siteSlugs:["puerto-colon"],
    title:"Inmersión de buceo en Tenerife 2h",destination:"Puerto Colón",region:"Canarias",slug:"inmersion-de-buceo-en-tenerife-2h-387",
    type:"Fun Dive",level:"Intermedio",duration:"2 horas aprox.",audience:"Personas interesadas en fun dive en Puerto Colón",
    tags:["Buceo","Canarias","Yumping","Puerto Colón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceo-en-tenerife-4h--o62823",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceo-en-tenerife-4h--o62823",offers:[{id:"yumping-o62823",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceo-en-tenerife-4h--o62823",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceo-en-tenerife-4h--o62823",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["1 inmersión en mar","Instructor/guía","Transporte en furgoneta y/o zodiac"],notes:"Inmersión para buceadores certificados Open Water o equivalente. Yumping indica unas 2 horas y elección del punto según condiciones ambientales, nivel y preferencias.",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:388,siteSlugs:["el-medano"],
    title:"SSI Open Water Diver Tenerife Sur",destination:"El Médano",region:"Canarias",slug:"ssi-open-water-diver-tenerife-sur-388",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en El Médano",
    tags:["Buceo","Canarias","Yumping","El Médano"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/ssi-open-water-diver-tenerife-sur--o56714",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/ssi-open-water-diver-tenerife-sur--o56714",offers:[{id:"yumping-o56714",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/ssi-open-water-diver-tenerife-sur--o56714",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/ssi-open-water-diver-tenerife-sur--o56714",priceFrom:370,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso SSI Open Water Diver en el sur de Tenerife. Precio actual mostrado por Yumping: 370 €.",priceFrom:370,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },

  {
    id:392,siteSlugs:["el-medano"],
    title:"Curso SSI Scuba Diver en el Médano",destination:"El Médano",region:"Canarias",slug:"curso-ssi-scuba-diver-en-el-medano-392",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en El Médano",
    tags:["Buceo","Canarias","Yumping","El Médano"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-ssi-scuba-diver-en-el-medano--o56710",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-ssi-scuba-diver-en-el-medano--o56710",offers:[{id:"yumping-o56710",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/curso-ssi-scuba-diver-en-el-medano--o56710",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-ssi-scuba-diver-en-el-medano--o56710",priceFrom:220,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso SSI Scuba Diver en El Médano. La ficha actual muestra 220 €.",priceFrom:220,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:393,siteSlugs:["el-medano"],
    title:"2 inmersiones buceadores certificados Tenerife",destination:"El Médano",region:"Canarias",slug:"2-inmersiones-buceadores-certificados-tenerife-393",
    type:"Fun Dive",level:"Intermedio",duration:"Según actividad",audience:"Personas interesadas en fun dive en El Médano",
    tags:["Buceo","Canarias","Yumping","El Médano"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceadores-certificados-tenerife--o56661",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceadores-certificados-tenerife--o56661",offers:[{id:"yumping-o56661",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceadores-certificados-tenerife--o56661",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceadores-certificados-tenerife--o56661",priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Transporte"],notes:"Dos inmersiones para buceadores certificados en Tenerife. La ficha actual muestra 99 € e indica salida desde el entorno de El Médano.",priceFrom:99,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:394,siteSlugs:["el-medano"],
    title:"Pack de dos sesiones de snorkel en Tenerife 4,5 h",destination:"El Médano",region:"Canarias",slug:"pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h-394",
    type:"Snorkel",level:"Inicial",duration:"4 h 30 min",audience:"Personas interesadas en snorkel en El Médano",
    tags:["Buceo","Canarias","Yumping","El Médano"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h--o56660",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h--o56660",offers:[{id:"yumping-o56660",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h--o56660",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h--o56660",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Transporte"],notes:"Pack de dos sesiones de snorkel en Tenerife con una duración total de 4 horas y media. Yumping muestra 45 € con descuento.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:395,siteSlugs:["el-medano"],
    title:"Excursión de snorkel en Tenerife 3,5 horas",destination:"El Médano",region:"Canarias",slug:"excursion-de-snorkel-en-tenerife-3-5-horas-395",
    type:"Snorkel",level:"Inicial",duration:"3 h 30 min",audience:"Personas interesadas en snorkel en El Médano",
    tags:["Buceo","Canarias","Yumping","El Médano"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/excursion-de-snorkel-en-tenerife-3-5-horas--o56659",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/excursion-de-snorkel-en-tenerife-3-5-horas--o56659",offers:[{id:"yumping-o56659",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/excursion-de-snorkel-en-tenerife-3-5-horas--o56659",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/excursion-de-snorkel-en-tenerife-3-5-horas--o56659",priceFrom:25,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Transporte"],notes:"Excursión de snorkel de 3 horas y media en Tenerife. Yumping muestra 25 € con descuento e incluye transporte.",priceFrom:25,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:396,siteSlugs:["el-medano"],
    title:"Bautizo buceo 45 min Tenerife 3,5 h",destination:"El Médano",region:"Canarias",slug:"bautizo-buceo-45-min-tenerife-3-5-h-396",
    type:"Bautismo",level:"Inicial",duration:"3 h 30 min aprox.",audience:"Personas interesadas en bautismo en El Médano",
    tags:["Buceo","Canarias","Yumping","El Médano"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-buceo-45-min-tenerife-3-5-h--o56658",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-buceo-45-min-tenerife-3-5-h--o56658",offers:[{id:"yumping-o56658",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-buceo-45-min-tenerife-3-5-h--o56658",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautizo-buceo-45-min-tenerife-3-5-h--o56658",priceFrom:79,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Bautismo de buceo en el área de El Médano con una duración total aproximada de 3 horas y media y 45 minutos de inmersión. Yumping muestra 79 €.",priceFrom:79,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:397,siteSlugs:["puerto-colon"],
    title:"Bautismo de buceo desde barco en Puerto Colón, 3h",destination:"Puerto Colón",region:"Canarias",slug:"bautismo-de-buceo-desde-barco-en-puerto-colon-3h-397",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Puerto Colón",
    tags:["Buceo","Canarias","Yumping","Puerto Colón"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-radazul-tenerife--o15411",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-radazul-tenerife--o15411",offers:[{id:"yumping-o15411",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-radazul-tenerife--o15411",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-radazul-tenerife--o15411",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Equipo de buceo","Instructor","Seguros"],notes:"Bautismo con salida desde Puerto Colón. La ficha indica unas 3 horas de actividad, con unos 20 minutos bajo el agua, y formación básica sobre equipo y seguridad.",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:398,siteSlugs:["costa-adeje"],
    title:"Bautismo de buceo 2 inmersiones sur de Tenerife 4h",destination:"Costa Adeje",region:"Canarias",slug:"bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h-398",
    type:"Bautismo",level:"Inicial",duration:"4 horas aprox.",audience:"Personas interesadas en bautismo en Costa Adeje",
    tags:["Buceo","Canarias","Yumping","Costa Adeje"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h--o62816",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h--o62816",offers:[{id:"yumping-o62816",provider:"Yumping",url:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h--o62816",sourceUrl:"https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h--o62816",priceFrom:125,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"12 m",included:["2 inmersiones hasta 12 m con instructor","Lección teórico-práctica","Equipo completo","Certificación Basic Diver","Seguros"],notes:"Bautismo de 4 horas con dos inmersiones y lección teórico-práctica. La ficha permite decidir la zona según las condiciones del día y menciona Playa de las Vistas, Radazul/Tabaiba, El Balito, Abades y otros puntos del sur de Tenerife.",priceFrom:125,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:399,siteSlugs:["las-chafiras"],
    title:"Curso de PADI Open Water Diver en Tenerife 3 días",destination:"Las Chafiras",region:"Canarias",slug:"curso-de-padi-open-water-diver-en-tenerife-3-dias-399",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Las Chafiras",
    tags:["Buceo","Canarias","Yumping","Las Chafiras"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-padi-open-water-diver-en-tenerife-3-dias--o60252",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-padi-open-water-diver-en-tenerife-3-dias--o60252",offers:[{id:"yumping-o60252",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-padi-open-water-diver-en-tenerife-3-dias--o60252",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-padi-open-water-diver-en-tenerife-3-dias--o60252",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Curso PADI Open Water Diver","Todo el material de buceo","Aguas confinadas y 4 inmersiones en mar","Libro PADI","Seguro de buceo"],notes:"Curso PADI Open Water Diver de 3 días en Tenerife. La ficha indica teoría, prácticas en aguas confinadas y cuatro inmersiones en mar abierto, hasta 18 m, con equipo y seguro incluidos.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:400,siteSlugs:["costa-adeje"],
    title:"Curso buceo Open Water Diver PADI Tenerife 4 días",destination:"Arona",region:"Canarias",slug:"curso-buceo-open-water-diver-padi-tenerife-4-dias-400",
    type:"Curso",level:"Inicial",duration:"4 días aprox.",audience:"Personas interesadas en curso en Arona",
    tags:["Buceo","Canarias","Yumping","Arona"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-open-water-diver-padi-tenerife-4-dias--o52006",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-open-water-diver-padi-tenerife-4-dias--o52006",offers:[{id:"yumping-o52006",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-open-water-diver-padi-tenerife-4-dias--o52006",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-open-water-diver-padi-tenerife-4-dias--o52006",priceFrom:410,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",notes:"Curso PADI Open Water Diver de aproximadamente 4 días en el sur de Tenerife. La ficha indica formación supervisada, transporte a los puntos de inmersión y certificación hasta 18 m.",priceFrom:410,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:401,siteSlugs:["las-galletas"],
    title:"Curso de buceo Open Water en Las Galletas 3 días",destination:"Las Galletas",region:"Canarias",slug:"curso-de-buceo-open-water-en-las-galletas-3-dias-401",
    type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Las Galletas",
    tags:["Buceo","Canarias","Yumping","Las Galletas"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-en-las-galletas-3-dias--o47446",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-en-las-galletas-3-dias--o47446",offers:[{id:"yumping-o47446",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-en-las-galletas-3-dias--o47446",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-en-las-galletas-3-dias--o47446",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso Open Water de 3 días en Las Galletas. Precio actual mostrado por Yumping: 380 €.",priceFrom:380,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:402,siteSlugs:["santa-cruz-tenerife"],
    title:"Curso OWD en Santa Cruz de Tenerife 4 días",destination:"Santa Cruz de Tenerife",region:"Canarias",slug:"curso-owd-en-santa-cruz-de-tenerife-4-dias-402",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Santa Cruz de Tenerife",
    tags:["Buceo","Canarias","Yumping","Santa Cruz de Tenerife"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-owd-en-santa-cruz-de-tenerife-4-dias--o63050",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-owd-en-santa-cruz-de-tenerife-4-dias--o63050",offers:[{id:"yumping-o63050",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tenerife/curso-owd-en-santa-cruz-de-tenerife-4-dias--o63050",sourceUrl:"https://www.yumping.com/ofertas/buceo/tenerife/curso-owd-en-santa-cruz-de-tenerife-4-dias--o63050",priceFrom:375,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso OWD de 4 días en Santa Cruz de Tenerife. Yumping indica una duración prevista de 4 días, ampliable si el alumno lo necesita. Precio actual mostrado: 375 €.",priceFrom:375,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:403,siteSlugs:["playa-blanca-lanzarote"],
    title:"Curso PADI Open Water en Lanzarote 4 días",destination:"Playa Blanca",region:"Canarias",slug:"curso-padi-open-water-en-lanzarote-4-dias-403",
    type:"Curso",level:"Inicial",duration:"4 días",audience:"Personas interesadas en curso en Playa Blanca",
    tags:["Buceo","Canarias","Yumping","Playa Blanca"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-en-lanzarote-4-dias--o37278",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-en-lanzarote-4-dias--o37278",offers:[{id:"yumping-o37278",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-en-lanzarote-4-dias--o37278",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-en-lanzarote-4-dias--o37278",priceFrom:495,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:8,notes:"Curso PADI Open Water de 4 días en Playa Blanca. Yumping indica edad mínima de 8 años y cinco inmersiones acompañadas por instructores.",priceFrom:495,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:404,siteSlugs:["playa-blanca-lanzarote"],
    title:"Bautismo de buceo doble en Playa Blanca, Yaiza 3h",destination:"Playa Blanca",region:"Canarias",slug:"bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h-404",
    type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Playa Blanca",
    tags:["Buceo","Canarias","Yumping","Playa Blanca"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h--o77225",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h--o77225",offers:[{id:"yumping-o77225",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h--o77225",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h--o77225",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:14,notes:"Bautismo doble en Playa Blanca con una duración aproximada de 3 horas. Yumping indica edad mínima de 14 años y transfer gratuito para alojados en Playa Blanca.",priceFrom:90,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:405,siteSlugs:["tias-lanzarote"],
    title:"Curso de Sidemount de buceo Lanzarote",destination:"Tías",region:"Canarias",slug:"curso-de-sidemount-de-buceo-lanzarote-405",
    type:"Curso",level:"Avanzado",duration:"3 días",audience:"Personas interesadas en curso en Tías",
    tags:["Buceo","Canarias","Yumping","Tías"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-de-sidemount-de-buceo-lanzarote--o33853",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-de-sidemount-de-buceo-lanzarote--o33853",offers:[{id:"yumping-o33853",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-de-sidemount-de-buceo-lanzarote--o33853",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-de-sidemount-de-buceo-lanzarote--o33853",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Teoría de Sidemount","Configuración del equipo","Práctica en aguas confinadas","Prácticas en aguas abiertas","Transporte"],notes:"Curso de Sidemount de 3 días en Lanzarote para personas con experiencia previa. La ficha describe configuración con dos botellas laterales y prácticas en aguas confinadas y abiertas; incluye transporte.",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:406,siteSlugs:["tias-lanzarote"],
    title:"Bautizo buceo Lanzarote con torpedos subacuáticos",destination:"Tías",region:"Canarias",slug:"bautizo-buceo-lanzarote-con-torpedos-subacuaticos-406",
    type:"Fun Dive",level:"Intermedio",duration:"3 horas aprox.",audience:"Personas interesadas en fun dive en Tías",
    tags:["Buceo","Canarias","Yumping","Tías"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautizo-buceo-lanzarote-con-torpedos-subacuaticos--o33852",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautizo-buceo-lanzarote-con-torpedos-subacuaticos--o33852",offers:[{id:"yumping-o33852",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/bautizo-buceo-lanzarote-con-torpedos-subacuaticos--o33852",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautizo-buceo-lanzarote-con-torpedos-subacuaticos--o33852",priceFrom:105,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:15,maxDepth:"12 m",notes:"Experiencia con torpedos subacuáticos en Puerto del Carmen. Yumping indica unas 3 horas, profundidad máxima de 12 m, nivel previo de buceador de aguas abiertas y recomendación para mayores de 15 años.",priceFrom:105,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:407,siteSlugs:["tias-lanzarote"],
    title:"SSI Advanced Adventurer en Tías",destination:"Tías",region:"Canarias",slug:"ssi-advanced-adventurer-en-tias-407",
    type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Tías",
    tags:["Buceo","Canarias","Yumping","Tías"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/advanced-open-water-diver-en-tias--o19793",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/advanced-open-water-diver-en-tias--o19793",offers:[{id:"yumping-o19793",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/advanced-open-water-diver-en-tias--o19793",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/advanced-open-water-diver-en-tias--o19793",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    minAge:12,maxDepth:"30 m",notes:"Curso SSI Advanced Adventurer en Tías de 2–3 días. Yumping indica requisito de Open Water Diver o equivalente, edad mínima de 12 años y formación para inmersiones especiales.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:408,siteSlugs:["puerto-del-carmen"],
    title:"Curso Buceador de Rescate PADI Puerto del Carmen",destination:"Puerto del Carmen",region:"Canarias",slug:"curso-buceador-de-rescate-padi-puerto-del-carmen-408",
    type:"Curso",level:"Avanzado",duration:"3 días",audience:"Personas interesadas en curso en Puerto del Carmen",
    tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceador-de-rescate-padi-puerto-del-carmen--o15615",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceador-de-rescate-padi-puerto-del-carmen--o15615",offers:[{id:"yumping-o15615",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceador-de-rescate-padi-puerto-del-carmen--o15615",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceador-de-rescate-padi-puerto-del-carmen--o15615",priceFrom:285,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    included:["Formación Rescue Diver PADI"],notes:"Curso PADI Rescue Diver en Puerto del Carmen de 3 días. La ficha lo presenta como formación de rescate para ampliar conocimientos y experiencia como buceador.",priceFrom:285,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:409,siteSlugs:["puerto-del-carmen"],
    title:"PADI Advanced Open Water, Puerto del Carmen",destination:"Puerto del Carmen",region:"Canarias",slug:"padi-advanced-open-water-puerto-del-carmen-409",
    type:"Curso",level:"Avanzado",duration:"2,5 días aprox.",audience:"Personas interesadas en curso en Puerto del Carmen",
    tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-advanced-open-water-puerto-del-carmen--o204",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-advanced-open-water-puerto-del-carmen--o204",offers:[{id:"yumping-o204",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-advanced-open-water-puerto-del-carmen--o204",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-advanced-open-water-puerto-del-carmen--o204",priceFrom:285,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"30 m",notes:"Curso PADI Advanced Open Water en Puerto del Carmen. Yumping indica unos 2,5 días y cinco inmersiones de formación.",priceFrom:285,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:410,siteSlugs:["puerto-del-carmen"],
    title:"PADI Rescue Diver en Lanzarote",destination:"Puerto del Carmen",region:"Canarias",slug:"padi-rescue-diver-en-lanzarote-410",
    type:"Curso",level:"Avanzado",duration:"3–4 días",audience:"Personas interesadas en curso en Puerto del Carmen",
    tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-rescue-diver-en-lanzarote--o205",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-rescue-diver-en-lanzarote--o205",offers:[{id:"yumping-o205",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-rescue-diver-en-lanzarote--o205",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-rescue-diver-en-lanzarote--o205",priceFrom:335,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso PADI Rescue Diver en Puerto del Carmen. La ficha indica 3–4 días y formación específica para afrontar situaciones de emergencia durante la inmersión.",priceFrom:335,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:411,siteSlugs:["puerto-del-carmen"],
    title:"PADI Divemaster, Puerto del Carmen",destination:"Puerto del Carmen",region:"Canarias",slug:"padi-divemaster-puerto-del-carmen-411",
    type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Puerto del Carmen",
    tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-divemaster-puerto-del-carmen--o206",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-divemaster-puerto-del-carmen--o206",offers:[{id:"yumping-o206",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-divemaster-puerto-del-carmen--o206",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-divemaster-puerto-del-carmen--o206",priceFrom:588,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso PADI Divemaster en Puerto del Carmen. Precio actual mostrado por Yumping: 588 €.",priceFrom:588,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:412,siteSlugs:["playa-blanca-lanzarote"],title:"Curso PADI Advanced Open Water en Lanzarote 2 días",destination:"Playa Blanca",region:"Canarias",slug:"curso-padi-advanced-open-water-en-lanzarote-2-dias-412",
    type:"Curso",level:"Avanzado",duration:"2 días",audience:"Personas interesadas en curso en Playa Blanca",tags:["Buceo","Canarias","Yumping","Playa Blanca"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-advanced-open-water-en-lanzarote-2-dias--o37279",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-advanced-open-water-en-lanzarote-2-dias--o37279",offers:[{id:"yumping-o37279",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-advanced-open-water-en-lanzarote-2-dias--o37279",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-advanced-open-water-en-lanzarote-2-dias--o37279",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"30 m",notes:"Curso PADI Advanced Open Water en Lanzarote. La ficha indica dos días de formación y cinco inmersiones de aventura.",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:413,siteSlugs:["puerto-del-carmen"],title:"PADI Open Water Diver en Lanzarote",destination:"Puerto del Carmen",region:"Canarias",slug:"padi-open-water-diver-en-lanzarote-413",
    type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Puerto del Carmen",tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-open-water-diver-lanzarote--o203",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-open-water-diver-lanzarote--o203",offers:[{id:"yumping-o203",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-open-water-diver-lanzarote--o203",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/padi-open-water-diver-lanzarote--o203",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso PADI Open Water Diver en Puerto del Carmen. Precio actual mostrado por Yumping: 450 €.",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:414,siteSlugs:["puerto-del-carmen"],title:"Snorkel Lanzarote 60 minutos",destination:"Puerto del Carmen",region:"Canarias",slug:"snorkel-lanzarote-60-minutos-414",
    type:"Snorkel",level:"Inicial",duration:"60 minutos",audience:"Personas interesadas en snorkel en Puerto del Carmen",tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/snorkel-lanzarote-60-minutos--o37275",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/snorkel-lanzarote-60-minutos--o37275",offers:[{id:"yumping-o37275",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/snorkel-lanzarote-60-minutos--o37275",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/snorkel-lanzarote-60-minutos--o37275",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Actividad de snorkel de 60 minutos en Lanzarote. Precio actual mostrado por Yumping: 40 €.",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {
    id:415,siteSlugs:["puerto-del-carmen"],title:"Curso Nitrox en Lanzarote",destination:"Puerto del Carmen",region:"Canarias",slug:"curso-nitrox-en-lanzarote-415",
    type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Puerto del Carmen",tags:["Buceo","Canarias","Yumping","Puerto del Carmen"],bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-nitrox-en-lanzarote--o33854",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-nitrox-en-lanzarote--o33854",offers:[{id:"yumping-o33854",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-nitrox-en-lanzarote--o33854",sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/curso-nitrox-en-lanzarote--o33854",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    notes:"Curso de especialidad Nitrox en Lanzarote. Precio actual mostrado por Yumping: 120 €.",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"
  },
  {id:416,siteSlugs:[],title:"Inmersión de Buceo en Parque Natural Alto Tajo",destination:"Gargantilla de Lozoya",region:"Comunidad de Madrid",slug:"inmersion-de-buceo-en-parque-natural-alto-tajo-416",type:"Fun Dive",level:"Intermedio",duration:"45 min aprox.",audience:"Personas interesadas en fun dive en Gargantilla de Lozoya",tags:["Buceo","Madrid","Yumping","Gargantilla de Lozoya"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/inmersion-de-buceo-en-parque-natural-alto-tajo--o30366",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/inmersion-de-buceo-en-parque-natural-alto-tajo--o30366",offers:[{id:"yumping-o30366",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/inmersion-de-buceo-en-parque-natural-alto-tajo--o30366",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/inmersion-de-buceo-en-parque-natural-alto-tajo--o30366",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Inmersión para buceadores con titulación en el Parque Natural del Alto Tajo. La ficha de Yumping indica una duración aproximada de 45 minutos, condicionada por la duración de la botella.",priceFrom:40,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:417,siteSlugs:[],title:"Bautizo de Buceo en Alto Tajo, Guadalajara",destination:"Gargantilla de Lozoya",region:"Comunidad de Madrid",slug:"bautizo-de-buceo-en-alto-tajo-guadalajara-417",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Gargantilla de Lozoya",tags:["Buceo","Madrid","Yumping","Gargantilla de Lozoya"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/bautizo-de-buceo-en-alto-tajo-guadalajara--o30365",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/bautizo-de-buceo-en-alto-tajo-guadalajara--o30365",offers:[{id:"yumping-o30365",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/bautizo-de-buceo-en-alto-tajo-guadalajara--o30365",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/bautizo-de-buceo-en-alto-tajo-guadalajara--o30365",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautizo de buceo publicado por Yumping en el entorno del Alto Tajo. Precio mostrado desde 55 €.",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:418,siteSlugs:[],title:"Bautismo de buceo en piscina en Madrid de 2 horas",destination:"Madrid",region:"Comunidad de Madrid",slug:"bautismo-de-buceo-en-piscina-en-madrid-de-2-horas-418",type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/bautismo-de-buceo-en-piscina-en-madrid-de-2-horas--o80025",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/bautismo-de-buceo-en-piscina-en-madrid-de-2-horas--o80025",offers:[{id:"yumping-o80025",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/bautismo-de-buceo-en-piscina-en-madrid-de-2-horas--o80025",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/bautismo-de-buceo-en-piscina-en-madrid-de-2-horas--o80025",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautismo en piscina en Madrid. La ficha indica unas 2 horas de actividad y una inmersión de aproximadamente 1 hora en piscina.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:419,siteSlugs:[],title:"Discover Scuba Diving piscina San Sebastián, 1'5h",destination:"Madrid",region:"Comunidad de Madrid",slug:"discover-scuba-diving-piscina-san-sebastian-1-5h-419",type:"Bautismo",level:"Inicial",duration:"1 h 30 min",audience:"Personas interesadas en bautismo en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-basico-en-madrid-y-levante-grupos--o35725",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-basico-en-madrid-y-levante-grupos--o35725",offers:[{id:"yumping-o35725",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-basico-en-madrid-y-levante-grupos--o35725",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-basico-en-madrid-y-levante-grupos--o35725",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Discover Scuba Diving en piscina. Yumping indica una duración aproximada de 1 hora y media y edad mínima de 10 años.",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:420,siteSlugs:[],title:"PADI Advanced Open Water en Jávea o Mazarrón",destination:"Alcalá de Henares",region:"Comunidad de Madrid",slug:"padi-advanced-open-water-en-javea-o-mazarron-420",type:"Curso",level:"Avanzado",duration:"3–4 días",audience:"Personas interesadas en curso en Alcalá de Henares",tags:["Buceo","Madrid","Yumping","Alcalá de Henares"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/padi-advanced-open-water-en-javea-o-mazarron--o31388",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/padi-advanced-open-water-en-javea-o-mazarron--o31388",offers:[{id:"yumping-o31388",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/padi-advanced-open-water-en-javea-o-mazarron--o31388",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/padi-advanced-open-water-en-javea-o-mazarron--o31388",priceFrom:290,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso PADI Advanced Open Water de 3–4 días que, según Yumping, puede realizarse en aguas de Jávea o Mazarrón. Incluye cinco inmersiones y titulación PADI.",priceFrom:290,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:421,siteSlugs:[],title:"Curso de buceo Discover Scuba Diving en Boadilla",destination:"Boadilla del Monte",region:"Comunidad de Madrid",slug:"curso-de-buceo-discover-scuba-diving-en-boadilla-421",type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Boadilla del Monte",tags:["Buceo","Madrid","Yumping","Boadilla del Monte"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-discover-scuba-diving-en-boadilla--o68495",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-discover-scuba-diving-en-boadilla--o68495",offers:[{id:"yumping-o68495",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-discover-scuba-diving-en-boadilla--o68495",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-discover-scuba-diving-en-boadilla--o68495",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Discover Scuba Diving PADI en Boadilla del Monte. Yumping indica 2 horas de duración y edad mínima de 10 años; se realiza en aguas confinadas de piscina climatizada.",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:422,siteSlugs:[],title:"Curso de buceo con Nitrox en Madrid 2 días",destination:"Madrid",region:"Comunidad de Madrid",slug:"curso-de-buceo-con-nitrox-en-madrid-2-dias-422",type:"Curso",level:"Avanzado",duration:"2 días",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-con-nitrox-en-madrid-2-dias--o66786",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-con-nitrox-en-madrid-2-dias--o66786",offers:[{id:"yumping-o66786",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-con-nitrox-en-madrid-2-dias--o66786",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-con-nitrox-en-madrid-2-dias--o66786",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso de buceo con Nitrox en Madrid. La oferta actual de Yumping muestra 110 € y una duración de 2 días.",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:423,siteSlugs:[],title:"Curso de buceo FEDAS B1 PADI OWD Madrid",destination:"Madrid",region:"Comunidad de Madrid",slug:"curso-de-buceo-fedas-b1-padi-owd-madrid-423",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-fedas-b1-padi-owd-madrid--o63053",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-fedas-b1-padi-owd-madrid--o63053",offers:[{id:"yumping-o63053",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-fedas-b1-padi-owd-madrid--o63053",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-fedas-b1-padi-owd-madrid--o63053",priceFrom:335,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta de formación inicial publicada por Yumping con referencia FEDAS B1 / PADI OWD. Precio mostrado desde 335 €.",priceFrom:335,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:424,siteSlugs:[],title:"Curso de buceo Open Water Diver en Boadilla",destination:"Boadilla del Monte",region:"Comunidad de Madrid",slug:"curso-de-buceo-open-water-diver-en-boadilla-424",type:"Curso",level:"Inicial",duration:"2 fines de semana",audience:"Personas interesadas en curso en Boadilla del Monte",tags:["Buceo","Madrid","Yumping","Boadilla del Monte"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-open-water-diver-en-boadilla--o44170",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-open-water-diver-en-boadilla--o44170",offers:[{id:"yumping-o44170",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-open-water-diver-en-boadilla--o44170",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-open-water-diver-en-boadilla--o44170",priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Open Water Diver en Boadilla. Yumping indica dos fines de semana, con teoría y prácticas en aguas confinadas en Madrid y salida posterior a la costa para mar abierto; edad mínima 12 años.",priceFrom:320,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:425,siteSlugs:[],title:"PADI Bautizo de buceo en Boadilla del Monte",destination:"Boadilla del Monte",region:"Comunidad de Madrid",slug:"padi-bautizo-de-buceo-en-boadilla-del-monte-425",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Boadilla del Monte",tags:["Buceo","Madrid","Yumping","Boadilla del Monte"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/padi-bautizo-de-buceo-en-boadilla-del-monte--o44146",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/padi-bautizo-de-buceo-en-boadilla-del-monte--o44146",offers:[{id:"yumping-o44146",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/padi-bautizo-de-buceo-en-boadilla-del-monte--o44146",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/padi-bautizo-de-buceo-en-boadilla-del-monte--o44146",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautizo PADI en Boadilla del Monte. Precio actual mostrado por Yumping: desde 45 €.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:426,siteSlugs:[],title:"Open Water Diver en Madrid y Levante, con extras",destination:"Madrid",region:"Comunidad de Madrid",slug:"open-water-diver-en-madrid-y-levante-con-extras-426",type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-con-extras--o35732",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-con-extras--o35732",offers:[{id:"yumping-o35732",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-con-extras--o35732",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-con-extras--o35732",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso PADI Open Water que comienza con teoría y piscina en Madrid y continúa con cuatro inmersiones desde barco en Levante. Yumping indica que puede completarse en 3 días y muestra 425 €.",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:427,siteSlugs:[],title:"Curso PADI Open Water Diver en piscina Las Tablas",destination:"Madrid",region:"Comunidad de Madrid",slug:"curso-padi-open-water-diver-en-piscina-las-tablas-427",type:"Curso",level:"Inicial",duration:"1–2 días",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-desde-barco--o35727",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-desde-barco--o35727",offers:[{id:"yumping-o35727",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-desde-barco--o35727",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-desde-barco--o35727",priceFrom:200,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Parte inicial del PADI Open Water Diver en piscina en Madrid: teoría online y prácticas en aguas confinadas. La ficha indica 1–2 días para esta fase y un precio desde 200 €.",priceFrom:200,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:428,siteSlugs:[],title:"Discover Scuba Diving PADI, Alcalá de Henares",destination:"Alcalá de Henares",region:"Comunidad de Madrid",slug:"discover-scuba-diving-padi-alcala-de-henares-428",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Alcalá de Henares",tags:["Buceo","Madrid","Yumping","Alcalá de Henares"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/discover-scuba-diving-padi-alcala-de-henares--o25734",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/discover-scuba-diving-padi-alcala-de-henares--o25734",offers:[{id:"yumping-o25734",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/discover-scuba-diving-padi-alcala-de-henares--o25734",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/discover-scuba-diving-padi-alcala-de-henares--o25734",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Discover Scuba Diving PADI en Alcalá de Henares. Precio mostrado desde 100 €.",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:429,siteSlugs:[],title:"Curso de Open Water Diver en Jávea",destination:"Alcalá de Henares",region:"Comunidad de Madrid",slug:"curso-de-open-water-diver-en-javea-429",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Alcalá de Henares",tags:["Buceo","Madrid","Yumping","Alcalá de Henares"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-open-water-diver-en-javea--o31340",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-open-water-diver-en-javea--o31340",offers:[{id:"yumping-o31340",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-open-water-diver-en-javea--o31340",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-open-water-diver-en-javea--o31340",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Open Water Diver ofrecido por Yumping desde Madrid con realización del tramo en mar en Jávea. Precio mostrado desde 350 €.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:430,siteSlugs:[],title:"Curso de buceo PADI Divemaster en Las Tablas",destination:"Madrid",region:"Comunidad de Madrid",slug:"curso-de-buceo-padi-divemaster-en-las-tablas-430",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-padi-divemaster-en-las-tablas--o31215",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-padi-divemaster-en-las-tablas--o31215",offers:[{id:"yumping-o31215",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-padi-divemaster-en-las-tablas--o31215",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-padi-divemaster-en-las-tablas--o31215",priceFrom:670,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso PADI Divemaster en Las Tablas, Madrid. Precio mostrado desde 670 €.",priceFrom:670,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:431,siteSlugs:[],title:"Título de PADI Rescue Diver en Las Tablas",destination:"Madrid",region:"Comunidad de Madrid",slug:"titulo-de-padi-rescue-diver-en-las-tablas-431",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/titulo-de-padi-rescue-diver-en-las-tablas--o31209",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/titulo-de-padi-rescue-diver-en-las-tablas--o31209",offers:[{id:"yumping-o31209",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/titulo-de-padi-rescue-diver-en-las-tablas--o31209",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/titulo-de-padi-rescue-diver-en-las-tablas--o31209",priceFrom:370,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso PADI Rescue Diver en Las Tablas. Precio mostrado desde 370 €.",priceFrom:370,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:432,siteSlugs:[],title:"Título PADI Advanced Open Water Diver, Las Tablas",destination:"Madrid",region:"Comunidad de Madrid",slug:"titulo-padi-advanced-open-water-diver-las-tablas-432",type:"Curso",level:"Avanzado",duration:"3–4 días",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/titulo-padi-advanced-open-water-diver-las-tablas--o31204",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/titulo-padi-advanced-open-water-diver-las-tablas--o31204",offers:[{id:"yumping-o31204",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/titulo-padi-advanced-open-water-diver-las-tablas--o31204",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/titulo-padi-advanced-open-water-diver-las-tablas--o31204",priceFrom:370,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso PADI Advanced Open Water Diver en Las Tablas. Yumping indica una duración aproximada de 3–4 días y un precio desde 370 €.",priceFrom:370,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:433,siteSlugs:[],title:"Curso Open Water Diver Alcalá de Henares y Murcia",destination:"Alcalá de Henares",region:"Comunidad de Madrid",slug:"curso-open-water-diver-alcala-de-henares-y-murcia-433",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Alcalá de Henares",tags:["Buceo","Madrid","Yumping","Alcalá de Henares"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-open-water-diver-alcala-de-henares-y-murcia--o27646",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-open-water-diver-alcala-de-henares-y-murcia--o27646",offers:[{id:"yumping-o27646",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-open-water-diver-alcala-de-henares-y-murcia--o27646",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-open-water-diver-alcala-de-henares-y-murcia--o27646",priceFrom:490,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Open Water Diver con base en Alcalá de Henares y realización de la formación práctica según la oferta. Precio mostrado desde 490 €.",priceFrom:490,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:434,siteSlugs:[],title:"Curso Buceo con Aire Enriquecido Nitrox en Madrid",destination:"Madrid",region:"Comunidad de Madrid",slug:"curso-buceo-con-aire-enriquecido-nitrox-en-madrid-434",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-buceo-con-aire-enriquecido-nitrox-en-madrid--o27482",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-buceo-con-aire-enriquecido-nitrox-en-madrid--o27482",offers:[{id:"yumping-o27482",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/curso-buceo-con-aire-enriquecido-nitrox-en-madrid--o27482",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/curso-buceo-con-aire-enriquecido-nitrox-en-madrid--o27482",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso de buceo con aire enriquecido Nitrox en Madrid. Precio mostrado desde 120 €.",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:435,siteSlugs:[],title:"Viaje a Ibiza desde Denia + 5 inmersiones",destination:"Madrid",region:"Comunidad de Madrid",slug:"viaje-a-ibiza-desde-denia-5-inmersiones-435",type:"Fun Dive",level:"Intermedio",duration:"Consultar disponibilidad",audience:"Personas interesadas en fun dive en Madrid",tags:["Buceo","Madrid","Yumping","Madrid"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/madrid/viaje-a-ibiza-desde-denia-5-inmersiones--o26333",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/viaje-a-ibiza-desde-denia-5-inmersiones--o26333",offers:[{id:"yumping-o26333",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/madrid/viaje-a-ibiza-desde-denia-5-inmersiones--o26333",sourceUrl:"https://www.yumping.com/ofertas/buceo/madrid/viaje-a-ibiza-desde-denia-5-inmersiones--o26333",priceFrom:424,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Viaje de buceo a Ibiza desde Dénia con cinco inmersiones. Yumping muestra que incluye alojamiento, comida y transporte, con precio desde 424 €.",priceFrom:424,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:416,siteSlugs:[],title:"Curso Open Water Dive en Costa Brava 8 sesiones",destination:"Barcelona",region:"Cataluña",slug:"curso-open-water-dive-en-costa-brava-8-sesiones-416",type:"Curso",level:"Inicial",duration:"8 sesiones",audience:"Personas interesadas en curso en Barcelona",tags:["Buceo","Yumping","Barcelona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-dive-en-costa-brava-8-sesiones--o62505",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-dive-en-costa-brava-8-sesiones--o62505",offers:[{id:"yumping-o62505",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-dive-en-costa-brava-8-sesiones--o62505",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-dive-en-costa-brava-8-sesiones--o62505",priceFrom:379,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso Open Water Dive en Costa Brava 8 sesiones\" en Barcelona. Precio mostrado desde 379 €.",priceFrom:379,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:417,siteSlugs:[],title:"Título Advanced Open Water Diver en Barcelona",destination:"Barcelona",region:"Cataluña",slug:"titulo-advanced-open-water-diver-en-barcelona-417",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Barcelona",tags:["Buceo","Yumping","Barcelona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/titulo-advanced-open-water-diver-en-barcelona--o62501",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/titulo-advanced-open-water-diver-en-barcelona--o62501",offers:[{id:"yumping-o62501",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/titulo-advanced-open-water-diver-en-barcelona--o62501",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/titulo-advanced-open-water-diver-en-barcelona--o62501",priceFrom:345,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Título Advanced Open Water Diver en Barcelona\" en Barcelona. Precio mostrado desde 345 €.",priceFrom:345,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:418,siteSlugs:[],title:"Curso Scuba Diver en Barcelona 3 días",destination:"Barcelona",region:"Cataluña",slug:"curso-scuba-diver-en-barcelona-3-dias-418",type:"Curso",level:"Inicial",duration:"3 días",audience:"Personas interesadas en curso en Barcelona",tags:["Buceo","Yumping","Barcelona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-scuba-diver-en-barcelona-3-dias--o62500",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-scuba-diver-en-barcelona-3-dias--o62500",offers:[{id:"yumping-o62500",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-scuba-diver-en-barcelona-3-dias--o62500",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-scuba-diver-en-barcelona-3-dias--o62500",priceFrom:225,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso Scuba Diver en Barcelona 3 días\" en Barcelona. Precio mostrado desde 225 €.",priceFrom:225,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:419,siteSlugs:[],title:"Bautismo de buceo en Playa Cabrera de Mar, 3h",destination:"El Masnou",region:"Cataluña",slug:"bautismo-de-buceo-en-playa-cabrera-de-mar-3h-419",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en El Masnou",tags:["Buceo","Yumping","El Masnou"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/primera-inmersion-de-buceo-en-el-mar-en-barcelona--o59703",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/primera-inmersion-de-buceo-en-el-mar-en-barcelona--o59703",offers:[{id:"yumping-o59703",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/primera-inmersion-de-buceo-en-el-mar-en-barcelona--o59703",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/primera-inmersion-de-buceo-en-el-mar-en-barcelona--o59703",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo en Playa Cabrera de Mar, 3h\" en El Masnou. Precio mostrado desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:420,siteSlugs:[],title:"Curso de Buceador 1 Estrella FEDAS en Mataró",destination:"Mataró",region:"Cataluña",slug:"curso-de-buceador-1-estrella-fedas-en-mataro-420",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Mataró",tags:["Buceo","Yumping","Mataró"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-buceo-open-water-diver-en-mataro--o60120",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-buceo-open-water-diver-en-mataro--o60120",offers:[{id:"yumping-o60120",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-buceo-open-water-diver-en-mataro--o60120",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-buceo-open-water-diver-en-mataro--o60120",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de Buceador 1 Estrella FEDAS en Mataró\" en Mataró. Precio mostrado desde 425 €.",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:421,siteSlugs:[],title:"Bautizo de buceo en Playa de Sant Sebastià, 2h",destination:"Barcelona",region:"Cataluña",slug:"bautizo-de-buceo-en-playa-de-sant-sebastia-2h-421",type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Barcelona",tags:["Buceo","Yumping","Barcelona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-playa-de-sant-sebastia-2h--o88750",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-playa-de-sant-sebastia-2h--o88750",offers:[{id:"yumping-o88750",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-playa-de-sant-sebastia-2h--o88750",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-playa-de-sant-sebastia-2h--o88750",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautizo de buceo en Playa de Sant Sebastià, 2h\" en Barcelona. Precio mostrado desde 80 €.",priceFrom:80,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:422,siteSlugs:[],title:"Curso de buceo PADI Divemaster en Sitges",destination:"Sitges",region:"Cataluña",slug:"curso-de-buceo-padi-divemaster-en-sitges-422",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Sitges",tags:["Buceo","Yumping","Sitges"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-divemaster-en-sitges--o68124",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-divemaster-en-sitges--o68124",offers:[{id:"yumping-o68124",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-divemaster-en-sitges--o68124",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-divemaster-en-sitges--o68124",priceFrom:695,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo PADI Divemaster en Sitges\" en Sitges. Precio mostrado desde 695 €.",priceFrom:695,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:423,siteSlugs:[],title:"Curso de buceo Advanced Open Water Diver en Sitges",destination:"Sitges",region:"Cataluña",slug:"curso-de-buceo-advanced-open-water-diver-en-sitges-423",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Sitges",tags:["Buceo","Yumping","Sitges"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver-en-sitges--o68123",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver-en-sitges--o68123",offers:[{id:"yumping-o68123",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver-en-sitges--o68123",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver-en-sitges--o68123",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo Advanced Open Water Diver en Sitges\" en Sitges. Precio mostrado desde 390 €.",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:424,siteSlugs:[],title:"Curso de buceo PADI Scuba Diver en Sitges",destination:"Vilafranca del Penedès",region:"Cataluña",slug:"curso-de-buceo-padi-scuba-diver-en-sitges-424",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Vilafranca del Penedès",tags:["Buceo","Yumping","Vilafranca del Penedès"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver-en-sitges--o68120",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver-en-sitges--o68120",offers:[{id:"yumping-o68120",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver-en-sitges--o68120",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver-en-sitges--o68120",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo PADI Scuba Diver en Sitges\" en Vilafranca del Penedès. Precio mostrado desde 400 €.",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:425,siteSlugs:[],title:"Salida de buceo con equipo Puerto de Mataró",destination:"Mataró",region:"Cataluña",slug:"salida-de-buceo-con-equipo-puerto-de-mataro-425",type:"Fun Dive",level:"Intermedio",duration:"Consultar disponibilidad",audience:"Personas interesadas en fun dive en Mataró",tags:["Buceo","Yumping","Mataró"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/salida-de-buceo-con-equipo-puerto-de-mataro--o60130",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/salida-de-buceo-con-equipo-puerto-de-mataro--o60130",offers:[{id:"yumping-o60130",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/salida-de-buceo-con-equipo-puerto-de-mataro--o60130",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/salida-de-buceo-con-equipo-puerto-de-mataro--o60130",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Salida de buceo con equipo Puerto de Mataró\" en Mataró. Precio mostrado desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:426,siteSlugs:[],title:"Open Water 1 Star Diver CMAS en Moll de la Vela",destination:"Barcelona",region:"Cataluña",slug:"open-water-1-star-diver-cmas-en-moll-de-la-vela-426",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Barcelona",tags:["Buceo","Yumping","Barcelona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-diver-barcelona--o13955",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-diver-barcelona--o13955",offers:[{id:"yumping-o13955",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-diver-barcelona--o13955",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-diver-barcelona--o13955",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Open Water 1 Star Diver CMAS en Moll de la Vela\" en Barcelona. Precio mostrado desde 350 €.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:427,siteSlugs:[],title:"Bautismo de buceo desde barco en Mataró",destination:"Mataró",region:"Cataluña",slug:"bautismo-de-buceo-desde-barco-en-mataro-427",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Mataró",tags:["Buceo","Yumping","Mataró"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/sesion-de-buceo-de-iniciacion-en-mataro--o60117",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/sesion-de-buceo-de-iniciacion-en-mataro--o60117",offers:[{id:"yumping-o60117",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/sesion-de-buceo-de-iniciacion-en-mataro--o60117",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/sesion-de-buceo-de-iniciacion-en-mataro--o60117",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo desde barco en Mataró\" en Mataró. Precio mostrado desde 95 €.",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:428,siteSlugs:[],title:"Curso FEDAS B1E en Barcelona, 1 semana",destination:"El Masnou",region:"Cataluña",slug:"curso-fedas-b1e-en-barcelona-1-semana-428",type:"Curso",level:"Inicial",duration:"1 semana",audience:"Personas interesadas en curso en El Masnou",tags:["Buceo","Yumping","El Masnou"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-fedas-b1e-en-barcelona-1-semana--o59704",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-fedas-b1e-en-barcelona-1-semana--o59704",offers:[{id:"yumping-o59704",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-fedas-b1e-en-barcelona-1-semana--o59704",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-fedas-b1e-en-barcelona-1-semana--o59704",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso FEDAS B1E en Barcelona, 1 semana\" en El Masnou. Precio mostrado desde 350 €.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:429,siteSlugs:[],title:"Practicar snorkel con monitor en Barcelona 2 horas",destination:"Barcelona",region:"Cataluña",slug:"practicar-snorkel-con-monitor-en-barcelona-2-horas-429",type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Barcelona",tags:["Buceo","Yumping","Barcelona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/practicar-snorkel-con-monitor-en-barcelona-2-horas--o49603",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/practicar-snorkel-con-monitor-en-barcelona-2-horas--o49603",offers:[{id:"yumping-o49603",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/practicar-snorkel-con-monitor-en-barcelona-2-horas--o49603",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/practicar-snorkel-con-monitor-en-barcelona-2-horas--o49603",priceFrom:25,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Practicar snorkel con monitor en Barcelona 2 horas\" en Barcelona. Precio mostrado desde 25 €.",priceFrom:25,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:430,siteSlugs:[],title:"Curso de buceo Divemaster",destination:"Vilafranca del Penedès",region:"Cataluña",slug:"curso-de-buceo-divemaster-430",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Vilafranca del Penedès",tags:["Buceo","Yumping","Vilafranca del Penedès"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-divemaster--o14207",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-divemaster--o14207",offers:[{id:"yumping-o14207",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-divemaster--o14207",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-divemaster--o14207",priceFrom:695,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo Divemaster\" en Vilafranca del Penedès. Precio mostrado desde 695 €.",priceFrom:695,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:431,siteSlugs:[],title:"Curso de rescate en el mar",destination:"Vilafranca del Penedès",region:"Cataluña",slug:"curso-de-rescate-en-el-mar-431",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Vilafranca del Penedès",tags:["Buceo","Yumping","Vilafranca del Penedès"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-rescate-en-el-mar--o14200",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-rescate-en-el-mar--o14200",offers:[{id:"yumping-o14200",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-rescate-en-el-mar--o14200",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-rescate-en-el-mar--o14200",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de rescate en el mar\" en Vilafranca del Penedès. Precio mostrado desde 350 €.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:432,siteSlugs:[],title:"Curso de buceo Advanced Open Water Diver",destination:"Vilafranca del Penedès",region:"Cataluña",slug:"curso-de-buceo-advanced-open-water-diver-432",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Vilafranca del Penedès",tags:["Buceo","Yumping","Vilafranca del Penedès"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver--o14199",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver--o14199",offers:[{id:"yumping-o14199",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver--o14199",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver--o14199",priceFrom:325,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo Advanced Open Water Diver\" en Vilafranca del Penedès. Precio mostrado desde 325 €.",priceFrom:325,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:433,siteSlugs:[],title:"Curso de buceo Padi Scuba Diver en Playa de Sitges",destination:"Vilafranca del Penedès",region:"Cataluña",slug:"curso-de-buceo-padi-scuba-diver-en-playa-de-sitges-433",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Vilafranca del Penedès",tags:["Buceo","Yumping","Vilafranca del Penedès"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver--o14195",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver--o14195",offers:[{id:"yumping-o14195",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver--o14195",sourceUrl:"https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver--o14195",priceFrom:275,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo Padi Scuba Diver en Playa de Sitges\" en Vilafranca del Penedès. Precio mostrado desde 275 €.",priceFrom:275,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:434,siteSlugs:[],title:"PrograDiscover Scuba 3 horas Marina del Este",destination:"Nerja",region:"Andalucía",slug:"progradiscover-scuba-3-horas-marina-del-este-434",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Nerja",tags:["Buceo","Yumping","Nerja"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/progradiscover-scuba-3-horas-marina-del-este--o62511",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/progradiscover-scuba-3-horas-marina-del-este--o62511",offers:[{id:"yumping-o62511",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/progradiscover-scuba-3-horas-marina-del-este--o62511",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/progradiscover-scuba-3-horas-marina-del-este--o62511",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"PrograDiscover Scuba 3 horas Marina del Este\" en Nerja. Precio mostrado desde 75 €.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:435,siteSlugs:[],title:"Bautizo de buceo mar desde playa de Fuengirola, 3h",destination:"Fuengirola",region:"Andalucía",slug:"bautizo-de-buceo-mar-desde-playa-de-fuengirola-3h-435",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Fuengirola",tags:["Buceo","Yumping","Fuengirola"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-mar-desde-playa-fuengirola--o27182",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-mar-desde-playa-fuengirola--o27182",offers:[{id:"yumping-o27182",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-mar-desde-playa-fuengirola--o27182",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-mar-desde-playa-fuengirola--o27182",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautizo de buceo mar desde playa de Fuengirola, 3h\" en Fuengirola. Precio mostrado desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:436,siteSlugs:[],title:"Bautismo de buceo en La Herradura con fotos",destination:"La Herradura",region:"Andalucía",slug:"bautismo-de-buceo-en-la-herradura-con-fotos-436",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en La Herradura",tags:["Buceo","Yumping","La Herradura"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-herradura-con-fotos--o55299",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-herradura-con-fotos--o55299",offers:[{id:"yumping-o55299",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-herradura-con-fotos--o55299",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-herradura-con-fotos--o55299",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo en La Herradura con fotos\" en La Herradura. Precio mostrado desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:437,siteSlugs:[],title:"Excursión de snorkel en Torrox con aperitivos",destination:"Torrox",region:"Andalucía",slug:"excursion-de-snorkel-en-torrox-con-aperitivos-437",type:"Snorkel",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en snorkel en Torrox",tags:["Buceo","Yumping","Torrox"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/excursion-de-snorkel-en-torrox-con-aperitivos--o34695",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/excursion-de-snorkel-en-torrox-con-aperitivos--o34695",offers:[{id:"yumping-o34695",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/excursion-de-snorkel-en-torrox-con-aperitivos--o34695",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/excursion-de-snorkel-en-torrox-con-aperitivos--o34695",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Excursión de snorkel en Torrox con aperitivos\" en Torrox. Precio mostrado desde 35 €.",priceFrom:35,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:438,siteSlugs:[],title:"Snorkel en los Acantilados de Maro Cerro-Gordo",destination:"Nerja",region:"Andalucía",slug:"snorkel-en-los-acantilados-de-maro-cerro-gordo-438",type:"Snorkel",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en snorkel en Nerja",tags:["Buceo","Yumping","Nerja"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-en-los-acantilados-de-maro-cerro-gordo--o62521",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-en-los-acantilados-de-maro-cerro-gordo--o62521",offers:[{id:"yumping-o62521",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-en-los-acantilados-de-maro-cerro-gordo--o62521",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/snorkel-en-los-acantilados-de-maro-cerro-gordo--o62521",priceFrom:39,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Snorkel en los Acantilados de Maro Cerro-Gordo\" en Nerja. Precio mostrado desde 39 €.",priceFrom:39,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:439,siteSlugs:[],title:"Inmersión de buceo en la costa de Málaga",destination:"Torrox",region:"Andalucía",slug:"inmersion-de-buceo-en-la-costa-de-malaga-439",type:"Fun Dive",level:"Intermedio",duration:"Consultar disponibilidad",audience:"Personas interesadas en fun dive en Torrox",tags:["Buceo","Yumping","Torrox"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/inmersion-de-buceo-en-la-costa-de-malaga--o34709",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/inmersion-de-buceo-en-la-costa-de-malaga--o34709",offers:[{id:"yumping-o34709",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/inmersion-de-buceo-en-la-costa-de-malaga--o34709",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/inmersion-de-buceo-en-la-costa-de-malaga--o34709",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Inmersión de buceo en la costa de Málaga\" en Torrox. Precio mostrado desde 38 €.",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:440,siteSlugs:[],title:"Dos bautismos de buceo piscina y mar en Estepona",destination:"Estepona",region:"Andalucía",slug:"dos-bautismos-de-buceo-piscina-y-mar-en-estepona-440",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Estepona",tags:["Buceo","Yumping","Estepona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/dos-bautismos-de-buceo-piscina-y-mar-en-estepona--o61766",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/dos-bautismos-de-buceo-piscina-y-mar-en-estepona--o61766",offers:[{id:"yumping-o61766",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/dos-bautismos-de-buceo-piscina-y-mar-en-estepona--o61766",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/dos-bautismos-de-buceo-piscina-y-mar-en-estepona--o61766",priceFrom:135,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Dos bautismos de buceo piscina y mar en Estepona\" en Estepona. Precio mostrado desde 135 €.",priceFrom:135,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:441,siteSlugs:[],title:"Bautizo de buceo en Málaga para grupos",destination:"Málaga",region:"Andalucía",slug:"bautizo-de-buceo-en-malaga-para-grupos-441",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Málaga",tags:["Buceo","Yumping","Málaga"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-malaga-para-grupos--o59347",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-malaga-para-grupos--o59347",offers:[{id:"yumping-o59347",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-malaga-para-grupos--o59347",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-malaga-para-grupos--o59347",priceFrom:65,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautizo de buceo en Málaga para grupos\" en Málaga. Precio mostrado desde 65 €.",priceFrom:65,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:442,siteSlugs:[],title:"Bautismo de Buceo en La Costa del Sol 3 horas",destination:"Manilva",region:"Andalucía",slug:"bautismo-de-buceo-en-la-costa-del-sol-3-horas-442",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Manilva",tags:["Buceo","Yumping","Manilva"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-del-sol-3-horas--o36366",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-del-sol-3-horas--o36366",offers:[{id:"yumping-o36366",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-del-sol-3-horas--o36366",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-del-sol-3-horas--o36366",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de Buceo en La Costa del Sol 3 horas\" en Manilva. Precio mostrado desde 85 €.",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:443,siteSlugs:[],title:"Curso de Open Water Diver en Rincón de la Victoria",destination:"Rincón de la Victoria",region:"Andalucía",slug:"curso-de-open-water-diver-en-rincon-de-la-victoria-443",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Rincón de la Victoria",tags:["Buceo","Yumping","Rincón de la Victoria"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-open-water-diver-en-rincon-de-la-victoria--o68503",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-open-water-diver-en-rincon-de-la-victoria--o68503",offers:[{id:"yumping-o68503",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-open-water-diver-en-rincon-de-la-victoria--o68503",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-open-water-diver-en-rincon-de-la-victoria--o68503",priceFrom:399,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de Open Water Diver en Rincón de la Victoria\" en Rincón de la Victoria. Precio mostrado desde 399 €.",priceFrom:399,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:444,siteSlugs:[],title:"Curso buceo Scuba Diver 12m Rincón de la Victoria",destination:"Rincón de la Victoria",region:"Andalucía",slug:"curso-buceo-scuba-diver-12m-rincon-de-la-victoria-444",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Rincón de la Victoria",tags:["Buceo","Yumping","Rincón de la Victoria"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-buceo-scuba-diver-12m-rincon-de-la-victoria--o68500",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-buceo-scuba-diver-12m-rincon-de-la-victoria--o68500",offers:[{id:"yumping-o68500",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-buceo-scuba-diver-12m-rincon-de-la-victoria--o68500",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-buceo-scuba-diver-12m-rincon-de-la-victoria--o68500",priceFrom:325,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso buceo Scuba Diver 12m Rincón de la Victoria\" en Rincón de la Victoria. Precio mostrado desde 325 €.",priceFrom:325,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:445,siteSlugs:[],title:"Bautismo de buceo en el mar en Estepona",destination:"Estepona",region:"Andalucía",slug:"bautismo-de-buceo-en-el-mar-en-estepona-445",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Estepona",tags:["Buceo","Yumping","Estepona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-el-mar-en-estepona--o61764",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-el-mar-en-estepona--o61764",offers:[{id:"yumping-o61764",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-el-mar-en-estepona--o61764",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-el-mar-en-estepona--o61764",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo en el mar en Estepona\" en Estepona. Precio mostrado desde 85 €.",priceFrom:85,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:446,siteSlugs:[],title:"Bautizo de buceo en Estepona en piscina",destination:"Estepona",region:"Andalucía",slug:"bautizo-de-buceo-en-estepona-en-piscina-446",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Estepona",tags:["Buceo","Yumping","Estepona"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",offers:[{id:"yumping-o61760",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautizo de buceo en Estepona en piscina\" en Estepona. Precio mostrado desde 75 €.",priceFrom:75,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:447,siteSlugs:[],title:"Curso de buceo Open Water Diver en Málaga PADI",destination:"Manilva",region:"Andalucía",slug:"curso-de-buceo-open-water-diver-en-malaga-padi-447",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Manilva",tags:["Buceo","Yumping","Manilva"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981",offers:[{id:"yumping-o40981",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso de buceo Open Water Diver en Málaga PADI\" en Manilva. Precio mostrado desde 450 €.",priceFrom:450,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:448,siteSlugs:[],title:"PADI Rescue Diver en Marbella",destination:"Marbella",region:"Andalucía",slug:"padi-rescue-diver-en-marbella-448",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Marbella",tags:["Buceo","Yumping","Marbella"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-rescue-diver-en-marbella--o30945",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-rescue-diver-en-marbella--o30945",offers:[{id:"yumping-o30945",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/padi-rescue-diver-en-marbella--o30945",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-rescue-diver-en-marbella--o30945",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"PADI Rescue Diver en Marbella\" en Marbella. Precio mostrado desde 425 €.",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:449,siteSlugs:[],title:"PADI Advanced Open Water en Marbella",destination:"Marbella",region:"Andalucía",slug:"padi-advanced-open-water-en-marbella-449",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Marbella",tags:["Buceo","Yumping","Marbella"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-advanced-open-water-en-marbella--o30939",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-advanced-open-water-en-marbella--o30939",offers:[{id:"yumping-o30939",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/padi-advanced-open-water-en-marbella--o30939",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-advanced-open-water-en-marbella--o30939",priceFrom:459,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"PADI Advanced Open Water en Marbella\" en Marbella. Precio mostrado desde 459 €.",priceFrom:459,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:450,siteSlugs:[],title:"PADI Scuba Diver en Marbella",destination:"Marbella",region:"Andalucía",slug:"padi-scuba-diver-en-marbella-450",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Marbella",tags:["Buceo","Yumping","Marbella"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-marbella--o30936",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-marbella--o30936",offers:[{id:"yumping-o30936",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-marbella--o30936",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-marbella--o30936",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"PADI Scuba Diver en Marbella\" en Marbella. Precio mostrado desde 420 €.",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:451,siteSlugs:[],title:"Curso PADI Open Water desde Torrox",destination:"Torrox",region:"Andalucía",slug:"curso-padi-open-water-desde-torrox-451",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Torrox",tags:["Buceo","Yumping","Torrox"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-padi-open-water-desde-torrox--o30602",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-padi-open-water-desde-torrox--o30602",offers:[{id:"yumping-o30602",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/curso-padi-open-water-desde-torrox--o30602",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/curso-padi-open-water-desde-torrox--o30602",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso PADI Open Water desde Torrox\" en Torrox. Precio mostrado desde 390 €.",priceFrom:390,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:452,siteSlugs:[],title:"PADI Scuba Diver en Torrox",destination:"Torrox",region:"Andalucía",slug:"padi-scuba-diver-en-torrox-452",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Torrox",tags:["Buceo","Yumping","Torrox"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-torrox--o30586",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-torrox--o30586",offers:[{id:"yumping-o30586",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-torrox--o30586",sourceUrl:"https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-torrox--o30586",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"PADI Scuba Diver en Torrox\" en Torrox. Precio mostrado desde 300 €.",priceFrom:300,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:453,siteSlugs:[],title:"Bautismo de buceo por Cabo de Gata-Níjar, 3 horas",destination:"La Isleta",region:"Andalucía",slug:"bautismo-de-buceo-por-cabo-de-gata-nijar-3-horas-453",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en La Isleta",tags:["Buceo","Yumping","La Isleta"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-3-horas--o31018",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-3-horas--o31018",offers:[{id:"yumping-o453",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-3-horas--o31018",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-3-horas--o31018",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo por Cabo de Gata-Níjar, 3 horas\" en La Isleta. Precio mostrado desde 95 €.",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:454,siteSlugs:[],title:"Bautismo de buceo en Las Negras Cabo de Gata",destination:"Carboneras",region:"Andalucía",slug:"bautismo-de-buceo-en-las-negras-cabo-de-gata-454",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Carboneras",tags:["Buceo","Yumping","Carboneras"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-las-negras-cabo-de-gata--o31017",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-las-negras-cabo-de-gata--o31017",offers:[{id:"yumping-o454",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-las-negras-cabo-de-gata--o31017",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-las-negras-cabo-de-gata--o31017",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo en Las Negras Cabo de Gata\" en Carboneras. Precio mostrado desde 150 €.",priceFrom:150,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:455,siteSlugs:[],title:"Bautismo de buceo en Cabo de Gata Níjar 2 h",destination:"Níjar",region:"Andalucía",slug:"bautismo-de-buceo-en-cabo-de-gata-nijar-2-h-455",type:"Bautismo",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en bautismo en Níjar",tags:["Buceo","Yumping","Níjar"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-nijar-2-h--o31016",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-nijar-2-h--o31016",offers:[{id:"yumping-o455",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-nijar-2-h--o31016",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata-nijar-2-h--o31016",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo en Cabo de Gata Níjar 2 h\" en Níjar. Precio mostrado desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:456,siteSlugs:[],title:"Bautismo de buceo desde barco, Cala del Cuartel",destination:"San Juan de los Terreros",region:"Andalucía",slug:"bautismo-de-buceo-desde-barco-cala-del-cuartel-456",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en San Juan de los Terreros",tags:["Buceo","Yumping","San Juan de los Terreros"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-mar-en-almeria-2-horas--o31019",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-mar-en-almeria-2-horas--o31019",offers:[{id:"yumping-o31019",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-mar-en-almeria-2-horas--o31019",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-mar-en-almeria-2-horas--o31019",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo desde barco, Cala del Cuartel\" en San Juan de los Terreros. Precio mostrado desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:457,siteSlugs:[],title:"Inmersión desde barco botella+carga, Isla Terreros",destination:"San Juan de los Terreros",region:"Andalucía",slug:"inmersion-desde-barco-botella-carga-isla-terreros-457",type:"Fun Dive",level:"Intermedio",duration:"Consultar disponibilidad",audience:"Personas interesadas en fun dive en San Juan de los Terreros",tags:["Buceo","Yumping","San Juan de los Terreros"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-con-botella-mas-plomos-en-almeria--o31010",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-con-botella-mas-plomos-en-almeria--o31010",offers:[{id:"yumping-o31010",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-con-botella-mas-plomos-en-almeria--o31010",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/inmersion-con-botella-mas-plomos-en-almeria--o31010",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Inmersión desde barco botella+carga, Isla Terreros\" en San Juan de los Terreros. Precio mostrado desde 38 €.",priceFrom:38,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:458,siteSlugs:[],title:"Advanced Adventurer SSI en Puerto de las Águilas",destination:"San Juan de los Terreros",region:"Andalucía",slug:"advanced-adventurer-ssi-en-puerto-de-las-aguilas-458",type:"Curso",level:"Avanzado",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en San Juan de los Terreros",tags:["Buceo","Yumping","San Juan de los Terreros"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-padi-en-villariscos--o65210",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-padi-en-villariscos--o65210",offers:[{id:"yumping-o65210",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-padi-en-villariscos--o65210",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-padi-en-villariscos--o65210",priceFrom:330,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Advanced Adventurer SSI en Puerto de las Águilas\" en San Juan de los Terreros. Precio mostrado desde 330 €.",priceFrom:330,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:459,siteSlugs:[],title:"Curso PADI Open Water Diver en Mojácar",destination:"Garrucha",region:"Andalucía",slug:"curso-padi-open-water-diver-en-mojacar-459",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Garrucha",tags:["Buceo","Yumping","Garrucha"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-padi-open-water-diver-en-mojacar--o86677",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-padi-open-water-diver-en-mojacar--o86677",offers:[{id:"yumping-o86677",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/almeria/curso-padi-open-water-diver-en-mojacar--o86677",sourceUrl:"https://www.yumping.com/ofertas/buceo/almeria/curso-padi-open-water-diver-en-mojacar--o86677",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso PADI Open Water Diver en Mojácar\" en Garrucha. Precio mostrado desde 400 €.",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:460,siteSlugs:[],title:"Discover Scuba Diving desde barco en Alicante, 3h",destination:"Alicante",region:"Alicante",slug:"discover-scuba-diving-desde-barco-en-alicante-3h-460",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Alicante",tags:["Buceo","Yumping","Alicante"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-alicante-o-calpe--o27573",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-alicante-o-calpe--o27573",offers:[{id:"yumping-o27573",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-alicante-o-calpe--o27573",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-alicante-o-calpe--o27573",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Discover Scuba Diving desde barco en Alicante, 3h\" en Alicante. Precio mostrado desde 120 €.",priceFrom:120,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:461,siteSlugs:[],title:"Snorkel desde barco en Calpe, 2 horas",destination:"Calpe",region:"Alicante",slug:"snorkel-desde-barco-en-calpe-2-horas-461",type:"Snorkel",level:"Inicial",duration:"2 horas",audience:"Personas interesadas en snorkel en Calpe",tags:["Buceo","Yumping","Calpe"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-barco-en-calpe-2-horas--o36445",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-barco-en-calpe-2-horas--o36445",offers:[{id:"yumping-o461",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-barco-en-calpe-2-horas--o36445",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-barco-en-calpe-2-horas--o36445",priceFrom:29,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Snorkel desde barco en Calpe, 2 horas\" en Calpe. Precio mostrado desde 29 €.",priceFrom:29,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:462,siteSlugs:[],title:"Curso PADI Discover Scuba Diving en Calpe, 5h",destination:"Calpe",region:"Alicante",slug:"curso-padi-discover-scuba-diving-en-calpe-5h-462",type:"Bautismo",level:"Inicial",duration:"5 horas",audience:"Personas interesadas en bautismo en Calpe",tags:["Buceo","Yumping","Calpe"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-padi-discover-scuba-diving-en-calpe-5h--o86705",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-padi-discover-scuba-diving-en-calpe-5h--o86705",offers:[{id:"yumping-o86705",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/curso-padi-discover-scuba-diving-en-calpe-5h--o86705",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/curso-padi-discover-scuba-diving-en-calpe-5h--o86705",priceFrom:149,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Curso PADI Discover Scuba Diving en Calpe, 5h\" en Calpe. Precio mostrado desde 149 €.",priceFrom:149,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:463,siteSlugs:[],title:"Snorkel cerca de la Isla Tabarca para adultos 3 h",destination:"Tabarca",region:"Alicante",slug:"snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h-463",type:"Snorkel",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en snorkel en Tabarca",tags:["Buceo","Yumping","Tabarca"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h--o48586",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h--o48586",offers:[{id:"yumping-o48586",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h--o48586",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h--o48586",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Snorkel cerca de la Isla Tabarca para adultos 3 h\" en Tabarca. Precio mostrado desde 45 €.",priceFrom:45,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:464,siteSlugs:[],title:"Snorkel desde playa en Calpe, 1h 30 minutos",destination:"Calpe",region:"Alicante",slug:"snorkel-desde-playa-en-calpe-1h-30-minutos-464",type:"Snorkel",level:"Inicial",duration:"1 h 30 min",audience:"Personas interesadas en snorkel en Calpe",tags:["Buceo","Yumping","Calpe"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-playa-en-calpe-1h-30-minutos--o1234",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-playa-en-calpe-1h-30-minutos--o1234",offers:[{id:"yumping-o1234",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-playa-en-calpe-1h-30-minutos--o1234",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-playa-en-calpe-1h-30-minutos--o1234",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Snorkel desde playa en Calpe, 1h 30 minutos\" en Calpe. Precio mostrado desde 20 €.",priceFrom:20,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:465,siteSlugs:[],title:"Salida de snorkel desde barco + fotos Jávea, 2.5 h",destination:"Jávea",region:"Alicante",slug:"salida-de-snorkel-desde-barco-fotos-javea-2-5-h-465",type:"Snorkel",level:"Inicial",duration:"2 h 30 min",audience:"Personas interesadas en snorkel en Jávea",tags:["Buceo","Yumping","Jávea"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/salida-de-snorkel-desde-embarcacion-javea-2-5-h--o25800",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/salida-de-snorkel-desde-embarcacion-javea-2-5-h--o25800",offers:[{id:"yumping-o25800",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/salida-de-snorkel-desde-embarcacion-javea-2-5-h--o25800",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/salida-de-snorkel-desde-embarcacion-javea-2-5-h--o25800",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Salida de snorkel desde barco + fotos Jávea, 2.5 h\" en Jávea. Precio mostrado desde 50 €.",priceFrom:50,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:466,siteSlugs:[],title:"Bautismo de buceo alrededores Isla de Tabarca",destination:"Tabarca",region:"Alicante",slug:"bautismo-de-buceo-alrededores-isla-de-tabarca-466",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Tabarca",tags:["Buceo","Yumping","Tabarca"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-alrededores-isla-de-tabarca--o25323",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-alrededores-isla-de-tabarca--o25323",offers:[{id:"yumping-o25323",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-alrededores-isla-de-tabarca--o25323",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-alrededores-isla-de-tabarca--o25323",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo alrededores Isla de Tabarca\" en Tabarca. Precio mostrado desde 110 €.",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:467,siteSlugs:[],title:"Bautismo de buceo en mar Costa Blanca",destination:"Torrevieja",region:"Alicante",slug:"bautismo-de-buceo-en-mar-costa-blanca-467",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Torrevieja",tags:["Buceo","Yumping","Torrevieja"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-mar-costa-blanca--o23943",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-mar-costa-blanca--o23943",offers:[{id:"yumping-o23943",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-mar-costa-blanca--o23943",sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-mar-costa-blanca--o23943",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Oferta publicada por Yumping para \"Bautismo de buceo en mar Costa Blanca\" en Torrevieja. Precio mostrado desde 95 €.",priceFrom:95,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:468,siteSlugs:[],title:"Curso Open Water Diver Padi en Tarragona 3 días",destination:"Salou",region:"Cataluña",slug:"curso-open-water-diver-padi-en-tarragona-3-dias-468",type:"Curso",level:"Inicial",duration:"3 días mínimo",audience:"Personas interesadas en curso en Salou",tags:["Buceo","Yumping","Salou"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-diver-padi-en-tarragona-3-dias--o61737",sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-diver-padi-en-tarragona-3-dias--o61737",offers:[{id:"yumping-o61737",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-diver-padi-en-tarragona-3-dias--o61737",sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-diver-padi-en-tarragona-3-dias--o61737",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso PADI Open Water Diver publicado por Yumping en Tarragona. La ficha indica un mínimo de 3 días y muestra un precio desde 400 €.",priceFrom:400,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:469,siteSlugs:[],title:"Curso de Buceo Una Estrella FEDAS Tarragona",destination:"Salou",region:"Cataluña",slug:"curso-de-buceo-una-estrella-fedas-tarragona-469",type:"Curso",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en curso en Salou",tags:["Buceo","Yumping","Salou"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-una-estrella-fedas-tarragona--o61758",sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-una-estrella-fedas-tarragona--o61758",offers:[{id:"yumping-o61758",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-una-estrella-fedas-tarragona--o61758",sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-una-estrella-fedas-tarragona--o61758",priceFrom:490,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso de Buceo Una Estrella FEDAS en Tarragona, ofrecido por Mar de Hielo. Yumping muestra un precio desde 490 €.",priceFrom:490,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:470,siteSlugs:[],title:"Advanced Open Water Diver en Tarragona 2 - 3 días",destination:"Salou",region:"Cataluña",slug:"advanced-open-water-diver-en-tarragona-2-3-dias-470",type:"Curso",level:"Avanzado",duration:"2–3 días",audience:"Personas interesadas en curso en Salou",tags:["Buceo","Yumping","Salou"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-avanzado-en-tarragona-2-3-dias--o52841",sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-avanzado-en-tarragona-2-3-dias--o52841",offers:[{id:"yumping-o52841",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-avanzado-en-tarragona-2-3-dias--o52841",sourceUrl:"https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-avanzado-en-tarragona-2-3-dias--o52841",priceFrom:399,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Advanced Open Water Diver en Tarragona. La ficha actual de Yumping indica una duración de 2–3 días y un precio desde 399 €.",priceFrom:399,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:471,siteSlugs:[],title:"Curso Open Water Diver en Puerto Oropesa, 5 días",destination:"Oropesa del Mar",region:"Castellón",slug:"curso-open-water-diver-en-puerto-oropesa-5-dias-471",type:"Curso",level:"Inicial",duration:"5 días",audience:"Personas interesadas en curso en Oropesa del Mar",tags:["Buceo","Yumping","Oropesa del Mar"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/castellon/curso-open-water-diver-en-puerto-oropesa-5-dias--o89894",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/curso-open-water-diver-en-puerto-oropesa-5-dias--o89894",offers:[{id:"yumping-o89894",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/castellon/curso-open-water-diver-en-puerto-oropesa-5-dias--o89894",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/curso-open-water-diver-en-puerto-oropesa-5-dias--o89894",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Open Water Diver en Puerto Oropesa. Yumping indica 5 días completos, no necesariamente consecutivos por meteorología, edad mínima de 16 años y precio desde 425 €.",priceFrom:425,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:472,siteSlugs:[],title:"Curso Advanced Open Diver en Puerto Oropesa, 4 días",destination:"Oropesa del Mar",region:"Castellón",slug:"curso-advanced-open-diver-en-puerto-oropesa-4-dias-472",type:"Curso",level:"Avanzado",duration:"4 días",audience:"Personas interesadas en curso en Oropesa del Mar",tags:["Buceo","Yumping","Oropesa del Mar"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/castellon/curso-advanced-open-diver-en-puerto-oropesa-4-dias--o89900",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/curso-advanced-open-diver-en-puerto-oropesa-4-dias--o89900",offers:[{id:"yumping-o89900",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/castellon/curso-advanced-open-diver-en-puerto-oropesa-4-dias--o89900",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/curso-advanced-open-diver-en-puerto-oropesa-4-dias--o89900",priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Advanced Open Diver en Puerto Oropesa. Yumping indica 4 días completos, edad mínima de 16 años y precio desde 395 €.",priceFrom:395,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:473,siteSlugs:[],title:"Bautismo de buceo piscina y mar Puerto Oropesa, 3h",destination:"Oropesa del Mar",region:"Castellón",slug:"bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h-473",type:"Bautismo",level:"Inicial",duration:"3 horas",audience:"Personas interesadas en bautismo en Oropesa del Mar",tags:["Buceo","Yumping","Oropesa del Mar"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/castellon/bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h--o89889",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h--o89889",offers:[{id:"yumping-o89889",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/castellon/bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h--o89889",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h--o89889",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautismo en Puerto Oropesa combinando teoría, piscina y mar. Yumping indica 3 horas tras la parte teórica, edad mínima de 8 años y profundidad máxima de 12 m.",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:474,siteSlugs:[],title:"ACUC Open Water Diver en Alcoceber, Castellón",destination:"Alcoceber",region:"Castellón",slug:"acuc-open-water-diver-en-alcoceber-castellon-474",type:"Curso",level:"Inicial",duration:"Lunes a viernes aprox.",audience:"Personas interesadas en curso en Alcoceber",tags:["Buceo","Yumping","Alcoceber"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/castellon/acuc-open-water-diver-en-alcoceber-castellon--o29231",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/acuc-open-water-diver-en-alcoceber-castellon--o29231",offers:[{id:"yumping-o29231",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/castellon/acuc-open-water-diver-en-alcoceber-castellon--o29231",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/acuc-open-water-diver-en-alcoceber-castellon--o29231",priceFrom:410,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso ACUC Open Water Diver en Alcoceber. Yumping indica una duración aproximada de lunes a viernes y un precio desde 410 €.",priceFrom:410,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:475,siteSlugs:[],title:"Bautizo de buceo en mar, Alcoceber",destination:"Alcoceber",region:"Castellón",slug:"bautizo-de-buceo-en-mar-alcoceber-475",type:"Bautismo",level:"Inicial",duration:"3 horas aprox.",audience:"Personas interesadas en bautismo en Alcoceber",tags:["Buceo","Yumping","Alcoceber"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/castellon/bautizo-de-buceo-piscina-y-mar-alcoceber--o29548",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/bautizo-de-buceo-piscina-y-mar-alcoceber--o29548",offers:[{id:"yumping-o29548",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/castellon/bautizo-de-buceo-piscina-y-mar-alcoceber--o29548",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/bautizo-de-buceo-piscina-y-mar-alcoceber--o29548",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautismo de buceo en mar en Alcoceber. Yumping indica unas 3 horas de duración y muestra un precio desde 100 €.",priceFrom:100,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:476,siteSlugs:[],title:"ACUC Advanced Open Water en Alcoceber, Castellón",destination:"Alcoceber",region:"Castellón",slug:"acuc-advanced-open-water-en-alcoceber-castellon-476",type:"Curso",level:"Avanzado",duration:"4 días aprox.",audience:"Personas interesadas en curso en Alcoceber",tags:["Buceo","Yumping","Alcoceber"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/castellon/acuc-advanced-open-water-en-alcoceber-castellon--o29232",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/acuc-advanced-open-water-en-alcoceber-castellon--o29232",offers:[{id:"yumping-o29232",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/castellon/acuc-advanced-open-water-en-alcoceber-castellon--o29232",sourceUrl:"https://www.yumping.com/ofertas/buceo/castellon/acuc-advanced-open-water-en-alcoceber-castellon--o29232",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso ACUC Advanced Open Water en Alcoceber. Yumping indica una duración aproximada de 4 días y un precio desde 350 €.",priceFrom:350,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:477,siteSlugs:[],title:"Inmersión buceo en Hondarribia+alquiler equipo",destination:"Hondarribia",region:"País Vasco",slug:"inmersion-buceo-en-hondarribia-alquiler-equipo-477",type:"Fun Dive",level:"Intermedio",duration:"3 horas aprox.",audience:"Personas interesadas en fun dive en Hondarribia",tags:["Buceo","Yumping","Hondarribia"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/inmersion-buceo-en-hondarribia-alquiler-equipo--o53172",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/inmersion-buceo-en-hondarribia-alquiler-equipo--o53172",offers:[{id:"yumping-o53172",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/guipuzcoa/inmersion-buceo-en-hondarribia-alquiler-equipo--o53172",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/inmersion-buceo-en-hondarribia-alquiler-equipo--o53172",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Inmersión para buceadores titulados en Hondarribia. Yumping indica unas 3 horas de actividad, aproximadamente 1 hora de inmersión, alquiler de equipo completo y precio desde 70 €.",priceFrom:70,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:478,siteSlugs:[],title:"Buceo alquiler botella y plomos Hondarribia",destination:"Hondarribia",region:"País Vasco",slug:"buceo-alquiler-botella-y-plomos-hondarribia-478",type:"Fun Dive",level:"Intermedio",duration:"3 horas aprox.",audience:"Personas interesadas en fun dive en Hondarribia",tags:["Buceo","Yumping","Hondarribia"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/buceo-alquiler-botella-y-plomos-hondarribia--o53171",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/buceo-alquiler-botella-y-plomos-hondarribia--o53171",offers:[{id:"yumping-o53171",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/guipuzcoa/buceo-alquiler-botella-y-plomos-hondarribia--o53171",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/buceo-alquiler-botella-y-plomos-hondarribia--o53171",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Salida de buceo desde el puerto de Hondarribia para titulados. Yumping indica una hora de inmersión y unas 3 horas de actividad total; incluye botella y plomos y muestra 55 €.",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:479,siteSlugs:[],title:"Curso Open Water Diver SSI, San Sebastián 3-4 días",destination:"San Sebastián",region:"País Vasco",slug:"curso-open-water-diver-ssi-san-sebastian-3-4-dias-479",type:"Curso",level:"Inicial",duration:"3–4 días",audience:"Personas interesadas en curso en San Sebastián",tags:["Buceo","Yumping","San Sebastián"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/curso-open-water-diver-ssi-san-sebastian-3-4-dias--o86327",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/curso-open-water-diver-ssi-san-sebastian-3-4-dias--o86327",offers:[{id:"yumping-o86327",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/guipuzcoa/curso-open-water-diver-ssi-san-sebastian-3-4-dias--o86327",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/curso-open-water-diver-ssi-san-sebastian-3-4-dias--o86327",priceFrom:540,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Open Water Diver SSI en San Sebastián. Yumping indica que normalmente se completa en 3–4 días y muestra un precio desde 540 €.",priceFrom:540,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:480,siteSlugs:[],title:"Bautismo de buceo en mar en San Sebastián",destination:"San Sebastián",region:"País Vasco",slug:"bautismo-de-buceo-en-mar-en-san-sebastian-480",type:"Bautismo",level:"Inicial",duration:"3 horas aprox.",audience:"Personas interesadas en bautismo en San Sebastián",tags:["Buceo","Yumping","San Sebastián"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-en-san-sebastian--o86324",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-en-san-sebastian--o86324",offers:[{id:"yumping-o86324",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-en-san-sebastian--o86324",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-en-san-sebastian--o86324",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautismo de buceo en San Sebastián sin necesidad de titulación. Yumping indica unas 3 horas, edad mínima de 10 años y precio desde 110 €.",priceFrom:110,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:481,siteSlugs:[],title:"Bautismo de buceo en mar Hondarribia",destination:"Hondarribia",region:"País Vasco",slug:"bautismo-de-buceo-en-mar-hondarribia-481",type:"Bautismo",level:"Inicial",duration:"3 horas aprox.",audience:"Personas interesadas en bautismo en Hondarribia",tags:["Buceo","Yumping","Hondarribia"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-hondarribia--o5411",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-hondarribia--o5411",offers:[{id:"yumping-o5411",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-hondarribia--o5411",sourceUrl:"https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-hondarribia--o5411",priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautismo de buceo en Hondarribia. Yumping indica unas 3 horas de actividad y muestra un precio desde 115 €.",priceFrom:115,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:482,siteSlugs:[],title:"Curso de Open Water en Navarra iniciación al buceo",destination:"Mutilva Baja",region:"Navarra",slug:"curso-de-open-water-en-navarra-iniciacion-al-buceo-482",type:"Curso",level:"Inicial",duration:"3 días mínimo · hasta 1 semana",audience:"Personas interesadas en curso en Mutilva Baja",tags:["Buceo","Yumping","Mutilva Baja"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/navarra/curso-de-open-water-en-navarra-iniciacion-al-buceo--o10766",sourceUrl:"https://www.yumping.com/ofertas/buceo/navarra/curso-de-open-water-en-navarra-iniciacion-al-buceo--o10766",offers:[{id:"yumping-o10766",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/navarra/curso-de-open-water-en-navarra-iniciacion-al-buceo--o10766",sourceUrl:"https://www.yumping.com/ofertas/buceo/navarra/curso-de-open-water-en-navarra-iniciacion-al-buceo--o10766",priceFrom:415,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso oficial Open Water Diver en Navarra. Yumping indica un mínimo de 3 días, posibilidad de repartirlo en dos fines de semana, hasta cuatro inmersiones de práctica y certificación hasta 18 m. Precio desde 415 €.",priceFrom:415,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:483,siteSlugs:[],title:"Curso Buceador Open Water Diver Navarra",destination:"Orcoyen",region:"Navarra",slug:"curso-buceador-open-water-diver-navarra-483",type:"Curso",level:"Inicial",duration:"12 horas aprox.",audience:"Personas interesadas en curso en Orcoyen",tags:["Buceo","Yumping","Orcoyen"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/navarra/curso-buceador-open-water-diver-navarra--o34043",sourceUrl:"https://www.yumping.com/ofertas/buceo/navarra/curso-buceador-open-water-diver-navarra--o34043",offers:[{id:"yumping-o34043",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/navarra/curso-buceador-open-water-diver-navarra--o34043",sourceUrl:"https://www.yumping.com/ofertas/buceo/navarra/curso-buceador-open-water-diver-navarra--o34043",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Curso Buceador Open Water Diver en Navarra. Yumping indica unas 12 horas de duración y formación teórica y práctica en mar abierto. Precio desde 420 €.",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
  {id:484,siteSlugs:[],title:"Buceo de Bautismo en aguas confinadas en Toledo",destination:"Toledo",region:"Castilla-La Mancha",slug:"buceo-de-bautismo-en-aguas-confinadas-en-toledo-484",type:"Bautismo",level:"Inicial",duration:"Consultar disponibilidad",audience:"Personas interesadas en bautismo en Toledo",tags:["Buceo","Yumping","Toledo"],bookingStatus:"Disponible",provider:"Yumping",providerUrl:"https://www.yumping.com/ofertas/buceo/toledo/buceo-de-bautismo-en-aguas-confinadas-en-toledo--o62508",sourceUrl:"https://www.yumping.com/ofertas/buceo/toledo/buceo-de-bautismo-en-aguas-confinadas-en-toledo--o62508",offers:[{id:"yumping-o62508",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/toledo/buceo-de-bautismo-en-aguas-confinadas-en-toledo--o62508",sourceUrl:"https://www.yumping.com/ofertas/buceo/toledo/buceo-de-bautismo-en-aguas-confinadas-en-toledo--o62508",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],notes:"Bautismo de buceo en aguas confinadas en Toledo, ofrecido por Yo Buceo Toledo. Yumping muestra un precio desde 55 €.",priceFrom:55,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"},
];

export const activityTypes=["Bautismo","Fun Dive","Curso","Pecio","Fauna","Snorkel"];
export const activityRegions=Array.from(new Set(activities.map(a=>a.region))).sort();
