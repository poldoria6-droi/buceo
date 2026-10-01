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
];

export const activityTypes=["Bautismo","Fun Dive","Curso","Pecio","Fauna","Snorkel"];
export const activityRegions=Array.from(new Set(activities.map(a=>a.region))).sort();
