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
  }

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
    id:169,siteSlugs:["cala-montgo"],
    title:"Curso PADI Open Water Diver en L'Escala",
    destination:"L'Escala",region:"Costa Brava",slug:"curso-ssi-open-water-l-escala-18401",
    type:"Curso",level:"Inicial",duration:"5 días",audience:"Personas que buscan certificación PADI Open Water Diver",
    tags:["PADI","Open Water","L'Escala","5 días","18 m"],
    bookingStatus:"Disponible",provider:"Yumping",
    providerUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
    sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
    offers:[{id:"yumping-o18401",provider:"Yumping",url:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",sourceUrl:"https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",priceFrom:420,priceCurrency:"EUR",priceCheckedAt:"2026-10-01"}],
    maxDepth:"18 m",included:["Material didáctico","Material para prácticas","Teoría online","4 inmersiones desde barco"],
    notes:"La URL de Yumping contiene 'padi' pero la ficha actual se titula SSI Open Water Diver."
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
  }
];

export const activityTypes=["Bautismo","Fun Dive","Curso","Pecio","Fauna","Snorkel"];
export const activityRegions=Array.from(new Set(activities.map(a=>a.region))).sort();
