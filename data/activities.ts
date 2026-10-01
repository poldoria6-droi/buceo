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
    id:121,siteSlugs:["playa-chica"],
    title:"Bautismo de buceo en Arrecife",
    destination:"Arrecife",region:"Canarias",slug:"bautismo-buceo-arrecife-60308",
    type:"Bautismo",level:"Inicial",duration:"3 h 30 min (30 min de inmersión)",audience:"Primera experiencia",
    tags:["Bautismo","Arrecife","Playa Chica","Equipo incluido","Instructor","Seguro"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308",
    offers:[{
      id:"yumping-o60308",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
    offers:[{
      id:"yumping-o19796",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
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
    providerUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
    offers:[{
      id:"yumping-o1232",
      provider:"Yumping",
      url:"https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232?id_partner=449fb0b2d23ef85c3ee63f78b6e90eae&placement=button-cta&cmp=",
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
  }

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
];

export const activityTypes=["Bautismo","Fun Dive","Curso","Pecio","Fauna","Snorkel"];
export const activityRegions=Array.from(new Set(activities.map(a=>a.region))).sort();
