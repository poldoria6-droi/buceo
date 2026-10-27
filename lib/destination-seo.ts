import type { Activity } from "@/data/types";
import type { DiveCenter } from "@/data/centers";
import type { Destination, DiveSite } from "@/data/dive-sites";
import { communityFor } from "@/lib/activity-filters";
import { getBookingOffers, getLowestPricedOffer } from "@/lib/affiliate";
import { rotateSlice } from "@/lib/internal-links";

const DESTINATION_KEYWORDS: Record<string, string[]> = {
  barcelona: [
    "barcelona", "mataró", "mataro", "sitges", "badalona", "calella",
    "vilanova", "arenys", "premià", "premia", "garraf", "vilafranca",
    "masnou", "castelldefels", "gavà", "llavaneres", "malgrat", "pineda",
    "sabadell", "terrassa", "manresa", "granollers", "hospitalet"
  ],
  "costa-brava": [
    "costa brava", "girona", "tossa", "lloret", "estartit", "medes",
    "escala", "palamós", "palamos", "platja d'aro", "calonge", "llafranc",
    "tamariu", "cap de creus", "cadaqués", "cadaques", "roses", "blanes",
    "sant feliu", "colera", "llançà", "llanca", "port de la selva", "begur", "pals"
  ],
  girona: [
    "girona", "costa brava", "tossa", "lloret", "estartit", "medes",
    "escala", "palamós", "palamos", "platja d'aro", "calonge", "llafranc",
    "tamariu", "cap de creus", "cadaqués", "cadaques", "roses", "blanes",
    "sant feliu", "colera", "llançà", "llanca", "port de la selva", "begur"
  ],
  tarragona: [
    "tarragona", "salou", "ametlla", "cambrils", "torredembarra",
    "calafell", "hospitalet de l'infant", "vendrell", "amposta", "sant carles", "la ràpita"
  ],
  malaga: [
    "málaga", "malaga", "marbella", "estepona", "benalmádena", "benalmadena",
    "torrox", "nerja", "fuengirola", "rincón de la victoria", "velez", "vélez",
    "mijas", "torremolinos", "manilva", "casares", " puerto banús", "puerto banus"
  ],
  marbella: [
    "marbella", "estepona", "puerto banús", "puerto banus", "san pedro",
    "benalmádena", "benalmadena", "fuengirola", "mijas", "manilva", "málaga", "malaga"
  ],
  cadiz: [
    "cádiz", "cadiz", "tarifa", "puerto de santa maría", "puerto de santa maria",
    "el palmar", "conil", "chiclana", "algeciras", "barbate", "zahara",
    "sancti petri", "rota", "chipiona", "san fernando", "la línea", "sotogrande"
  ],
  almeria: [
    "almería", "almeria", "cabo de gata", "roquetas", "aguadulce", "carboneras",
    "mojácar", "mojacar", "vera", "san josé", "san jose", "las negras", "níjar",
    "nijar", "adra", "el ejido", "garrucha", "agua amarga", "isleta del moro"
  ],
  granada: [
    "granada", "la herradura", "almuñécar", "almunecar", "calahonda",
    "motril", "salobreña", "salobrena", "castell de ferro", "torrenueva", "maro"
  ],
  huelva: [
    "huelva", "isla cristina", "ayamonte", "punta umbría", "punta umbria",
    "lepe", "islantilla", "cartaya", "mazagón", "matalascañas"
  ],
  murcia: [
    "murcia", "cabo de palos", "la manga", "mazarrón", "mazarron",
    "la azohía", "la azohia", "cartagena", "águilas", "aguilas",
    "isla plana", "san javier", "san pedro del pinatar", "los alcázares"
  ],
  "costa-blanca": [
    "alicante", "benidorm", "jávea", "javea", "xàbia", "calpe", "calp",
    "dénia", "denia", "altea", "moraira", "tabarca", "torrevieja",
    "santa pola", "villajoyosa", "campello", "guardamar", "orihuela", "serra gelada", "alfàs"
  ],
  alicante: [
    "alicante", "benidorm", "jávea", "javea", "xàbia", "calpe", "calp",
    "dénia", "denia", "altea", "moraira", "tabarca", "torrevieja",
    "santa pola", "villajoyosa", "campello", "guardamar", "orihuela", "serra gelada"
  ],
  valencia: [
    "valencia", "valència", "gandia", "gandía", "cullera", "sagunto",
    "pobla de farnals", "canet", "oliva", "puçol", "alboraya"
  ],
  castellon: [
    "castellón", "castellon", "burriana", "oropesa", "benicarló", "benicarlo",
    "vinaròs", "vinaros", "peñíscola", "peniscola", "alcossebre", "columbretes", "benicàssim"
  ],
  baleares: [
    "mallorca", "menorca", "ibiza", "formentera", "cabrera", "palma",
    "ciutadella", "ciudadela", "mahón", "portinatx", "sant antoni", "andratx",
    "calvià", "alcúdia", "pollença", "cala millor", "es pujols", "migjorn"
  ],
  mallorca: [
    "mallorca", "palma", "andratx", "calvià", "calvia", "cala millor",
    "santanyí", "santanyi", "alcúdia", "alcudia", "pollença", "pollensa",
    "santa ponsa", "sóller", "soller", "manacor", "illetas", "llucmajor", "porto cristo", "can pastilla"
  ],
  menorca: [
    "menorca", "ciudadela", "ciutadella", "mahón", "maó", "cala blanes",
    "fornells", "s'algar", "son bou", "cala galdana", "addaia", "binibèquer"
  ],
  ibiza: [
    "ibiza", "eivissa", "portinatx", "sant antoni", "san antonio",
    "santa eulària", "santa eulalia", "sant josep", "talamanca", "cala pada", "cala llonga", "playa d'en bossa"
  ],
  formentera: [
    "formentera", "es pujols", "migjorn", "mitjorn", "la savina", "ses illetes"
  ],
  canarias: [
    "tenerife", "gran canaria", "lanzarote", "fuerteventura", "el hierro",
    "la palma", "la gomera", "adeje", "las palmas", "puerto del carmen",
    "playa blanca", "costa teguise", "las galletas", "el médano", "radazul", "arinaga", "mogán"
  ],
  tenerife: [
    "tenerife", "adeje", "las galletas", "el médano", "el medano", "los abrigos",
    "radazul", "los cristianos", "las chafiras", "puerto colón", "puerto colon",
    "guía de isora", "guia de isora", "playa paraíso", "playa paraiso", "arona",
    "candelaria", "puerto de la cruz", "santa cruz de tenerife", "garachico", "tabaiba", "los gigantes"
  ],
  "gran-canaria": [
    "gran canaria", "las palmas", "mogán", "mogan", "puerto rico", "telde",
    "arinaga", "maspalomas", "sardina", "pozo izquierdo", "gáldar", "galdar",
    "arguineguín", "arguineguin", "playa del inglés", "las canteras", "risco verde"
  ],
  lanzarote: [
    "lanzarote", "puerto del carmen", "playa blanca", "costa teguise",
    "tías", "tias", "yaiza", "arrecife", "mala", "charco del palo", "playa chica"
  ],
  fuerteventura: [
    "fuerteventura", "caleta de fuste", "morro jable", "corralejo", "pájara", "pajara", "antigua", "la oliva"
  ],
  "el-hierro": [
    "el hierro", "la restinga", "el pinar"
  ],
  "la-palma": [
    "la palma", "los cancajos", "fuencaliente", "breña baja", "santa cruz de la palma", "tazacorte", "malpique"
  ],
  "la-gomera": [
    "la gomera", "san sebastián de la gomera", "valle gran rey"
  ],
  madrid: [
    "madrid", "alcalá de henares", "alcala de henares", "las rozas",
    "alcorcón", "alcorcon", "móstoles", "mostoles", "getafe", "majadahonda",
    "boadilla", "rivas", "san sebastián de los reyes", "pozuelo", "leganés", "fuenlabrada"
  ],
  "pais-vasco": [
    "país vasco", "pais vasco", "guipúzcoa", "gipuzkoa", "vizcaya", "bizkaia",
    "san sebastián", "san sebastian", "donostia", "hondarribia", "fuenterrabía",
    "getaria", "pasaia", "zarautz", "mutriku", "bilbao", "getxo", "bermeo",
    "armintza", "plentzia", "gorliz", "lekeitio", "ondarroa"
  ],
  "san-sebastian": [
    "san sebastián", "san sebastian", "donostia", "hondarribia", "fuenterrabía",
    "getaria", "pasaia", "zarautz", "mutriku", "guipúzcoa", "gipuzkoa"
  ],
  bilbao: [
    "bilbao", "getxo", "bermeo", "armintza", "plentzia", "gorliz",
    "lekeitio", "ondarroa", "sopelana", "santurtzi", "portugalete", "vizcaya", "bizkaia"
  ],
  galicia: [
    "galicia", "vigo", "pontevedra", "sanxenxo", "o grove", "cangas", "baiona",
    "isla de arousa", "illa de arousa", "a coruña", "la coruña", "finisterre",
    "fisterra", "ferrol", "malpica", "viveiro", "foz", "ribadeo", "portonovo", "marín"
  ],
  pontevedra: [
    "pontevedra", "vigo", "sanxenxo", "o grove", "cangas", "baiona",
    "isla de arousa", "illa de arousa", "portonovo", "marín", "bueu", "cíes", "ons", "vilagarcía"
  ],
  "a-coruna": [
    "a coruña", "la coruña", "coruña", "finisterre", "fisterra", "ferrol",
    "malpica", "oleiros", "sada", "ribeira", "porto do son", "muros"
  ],
  asturias: [
    "asturias", "gijón", "gijon", "llanes", "lastres", "cudillero",
    "aviles", "avilés", "ribadesella", "luanco", "candás", "tapia"
  ],
  gijon: [
    "gijón", "gijon", "llanes", "lastres", "cudillero", "aviles",
    "avilés", "ribadesella", "luanco", "candás", "asturias"
  ],
  cantabria: [
    "cantabria", "santander", "castro urdiales", "noja", "miengo",
    "suances", "laredo", "santoña", "san vicente de la barquera", "camargo", "pedreña"
  ],
  santander: [
    "santander", "isla de mouro", "castro urdiales", "noja", "miengo",
    "suances", "laredo", "santoña", "camargo", "pedreña", "cantabria"
  ],
};

export type DestinationClimateInfo = {
  waterTempWinter: string;
  waterTempSummer: string;
  bestMonths: string;
  wetsuitAdvice: string;
  marineEnvironment: string;
};

export type DestinationLocalLongTail = {
  heading: string;
  paragraphs: string[];
  extraFaqs: { question: string; answer: string }[];
};

const DESTINATION_LONGTAIL: Record<string, DestinationLocalLongTail> = {
  "cabo-de-palos": {
    heading: "Bucear en la Reserva de Islas Hormigas vs calas y el pecio Naranjito",
    paragraphs: [
      "En Cabo de Palos conviven dos tipos de buceo muy distintos a pocos minutos de barco. Por un lado están los bajos interiores y exteriores de la Reserva Marina de Cabo de Palos e Islas Hormigas (Bajo de Dentro, Piles I y II, Bajo de Testa), montañas submarinas en mar abierto donde se requiere titulación, seguro en vigor y presentar el DNI junto a tu carnet oficial para tramitar el cupo diario de la reserva.",
      "Por otro lado, si buscas hacer un bautismo de buceo desde playa o sacarte el curso Open Water sin corrientes, las calas resguardadas del faro (Cala Fría, La Escalerica o Cala Reona) ofrecen aguas tranquilas de entrada fácil, mientras que los buceadores Advanced tienen fuera de la reserva uno de los mejores barcos hundidos del Mediterráneo: el Naranjito (entre 28 y 43 metros)."
    ],
    extraFaqs: [
      {
        question: "¿Qué requisitos piden para bucear en la Reserva Marina de Islas Hormigas en Cabo de Palos?",
        answer: "Para bucear en los bajos de la reserva (como el Bajo de Dentro o Piles) los centros solicitan titulación mínima Open Water (muchos recomiendan Advanced o un mínimo de inmersiones registradas por las corrientes), seguro de buceo en vigor, declaración médica y presentar el DNI original para el permiso de la reserva."
      },
      {
        question: "¿Se puede hacer un bautismo de buceo en Cabo de Palos sin experiencia?",
        answer: "Sí. Los bautismos de buceo no se hacen en los bajos profundos de mar abierto, sino en las calas protegidas junto al faro de Cabo de Palos y La Manga, con aguas tranquilas a entre 5 y 10 metros de profundidad y todo el equipo incluido."
      }
    ]
  },
  "la-herradura": {
    heading: "Buceo desde playa en Marina del Este y acantilados de Maro–Cerro Gordo",
    paragraphs: [
      "La bahía de La Herradura (Almuñécar, Granada) tiene una ventaja geográfica única en Andalucía: queda abrazada por la Punta de la Mona al este y los acantilados de Cerro Gordo al oeste. Eso permite que, cuando sopla viento de levante, se bucee como en una piscina en el lado de Cerro Gordo, y cuando entra poniente, las playas de Marina del Este y Berengueles queden completamente en calma.",
      "Sus paredes de roca están tapizadas de astroides (coral naranja mediterráneo), espirógrafos, congrios y decenas de especies de nudibranquios, lo que convierte a Marina del Este en uno de los puntos favoritos de toda España tanto para bautismos desde la playa como para fotografía submarina."
    ],
    extraFaqs: [
      {
        question: "¿Es mejor bucear desde playa en Marina del Este o en barco por Maro-Cerro Gordo?",
        answer: "Para bautismos, cursos Open Water e inmersiones tranquilas de fotografía macro, la entrada desde la playa de Marina del Este (Los Berengueles) es comodísima. Para ver las paredes verticales de coral naranja, cuevas y bancos de peces en los acantilados de Maro-Cerro Gordo y la Punta de la Mona, merece la pena salir en barco desde el puerto deportivo."
      }
    ]
  },
  "tossa-de-mar": {
    heading: "Por qué la Mar Menuda de Tossa de Mar es la cuna del buceo desde playa en Cataluña",
    paragraphs: [
      "En Tossa de Mar casi toda la actividad subacuática gira en torno a la playa de la Mar Menuda (la Bauma). A diferencia de otros puntos de la Costa Brava donde es obligatorio embarcar, aquí entras caminando por una rampa natural de arena protegida por la illa de Tossa y en pocos metros te encuentras un laberinto de cañones graníticos entre los 6 y los 22 metros.",
      "Esa entrada progresiva sin oleaje explica por qué miles de buceadores de Barcelona y Girona hacen aquí su primer bautismo de buceo o las prácticas de mar del curso Open Water, mientras que los buceadores titulados disfrutan de salidas nocturnas o en barco a los bajos cercanos."
    ],
    extraFaqs: [
      {
        question: "¿Dónde se hacen los bautismos de buceo en Tossa de Mar?",
        answer: "La gran mayoría de bautismos y cursos de iniciación en Tossa de Mar entran directamente desde la cala de la Mar Menuda. Es un entorno resguardado de las olas donde empiezas haciendo pie y vas ganando profundidad poco a poco junto al instructor."
      }
    ]
  },
  lanzarote: {
    heading: "Playa Chica (Puerto del Carmen), el Museo Atlántico y los pecios del Quiquere",
    paragraphs: [
      "Lanzarote reúne en pocos kilómetros dos de las experiencias más buscadas de Canarias. En Puerto del Carmen, Playa Chica permite entrar caminando por la arena y asomarse en apenas cinco minutos de aleteo a veriles volcánicos que caen a más de 40 metros, con cuevas como La Catedral, meros como el famoso Félix y avistamientos frecuentes de angelotes en invierno y primavera.",
      "Al sur, en Playa Blanca, se encuentra el Museo Atlántico de Jason deCaires Taylor: el único museo escultórico subacuático de Europa, situado sobre un fondo limpio de arena a entre 12 y 14 metros de profundidad, accesible tanto para buceadores Open Water como mediante programas específicos de bautismo doble."
    ],
    extraFaqs: [
      {
        question: "¿Qué nivel hace falta para bucear en el Museo Atlántico de Lanzarote?",
        answer: "Las esculturas del Museo Atlántico en Playa Blanca están entre los 12 y los 14 metros de profundidad. Puedes visitarlo con cualquier titulación desde Open Water Diver (o Scuba Diver), e incluso muchos centros organizan bautismos dobles para principiantes donde primero haces una inmersión de adaptación en playa y después bajas al museo en barco."
      },
      {
        question: "¿Cuál es la mejor zona de Lanzarote para alojarse si vas a bucear?",
        answer: "Puerto del Carmen (junto a Playa Chica) es la base más cómoda porque concentra la mayoría de inmersiones desde costa y salidas a los pecios de El Quiquere. Playa Blanca es ideal para el Museo Atlántico y los fondos del sur, mientras que en el norte destacan Mala y las salidas a la reserva de La Graciosa."
      }
    ]
  },
  "el-hierro": {
    heading: "Cómo organizar un viaje de buceo a El Hierro (La Restinga) por tu cuenta",
    paragraphs: [
      "Casi todo el buceo en El Hierro se concentra en el pueblo pesquero de La Restinga, en el extremo sur de la isla, frente a la Reserva Marina del Mar de las Calmas. Resguardado de los vientos alisios por las cumbres volcánicas, el agua aquí tiene una transparencia que a menudo supera los 30 metros y alberga más de una docena de puntos a menos de diez minutos de navegación del muelle, coronados por el famoso volcán submarino de El Bajón.",
      "Para llegar desde la Península lo habitual es volar a Tenerife Norte (o Gran Canaria) y enlazar con un vuelo interinsular de Binter de 40 minutos al aeropuerto de Valverde, o cruzar en el ferry desde el puerto de Los Cristianos (Tenerife Sur) en unas 2 horas y media. Recuerda planificar siempre tu último día en seco (al menos 24 horas sin bucear) no solo por el vuelo de vuelta, sino porque para ir de La Restinga al puerto o al aeropuerto hay que cruzar la cumbre de la isla a más de 1.300 metros de altitud."
    ],
    extraFaqs: [
      {
        question: "¿Por qué hay que tener cuidado con la carretera al salir de La Restinga después de bucear?",
        answer: "Porque La Restinga está a nivel del mar pero la única carretera que sube hacia Valverde y el resto de El Hierro supera los 1.300 metros de altitud en pocos kilómetros. Por seguridad descompresiva, tras las inmersiones de la mañana debes respetar el tiempo prudencial que te indiquen en el centro antes de subir la cumbre en coche."
      }
    ]
  },
  "gran-canaria": {
    heading: "Reserva de El Cabrón (Arinaga), Sardina del Norte y los pecios de Las Palmas",
    paragraphs: [
      "Gran Canaria ofrece tres zonas de buceo muy distintas según el estado del mar y tu nivel. En el sureste, el Risco Verde y la Reserva Marina de El Cabrón (Arinaga) son famosos por sus arcos volcánicos y sus enormes bancos de roncadores, sargos, barracudas y angelotes.",
      "Si buscas aguas súper tranquilas para un bautismo o una inmersión nocturna cómoda, la bahía de Sardina del Norte (Gáldar) y los fondos del sur (Mogán y Puerto Rico) son ideales, mientras que frente a Las Palmas de Gran Canaria descansan grandes pecios como el Kalais o el Arona para buceadores avanzados."
    ],
    extraFaqs: [
      {
        question: "¿Dónde es mejor hacer un bautismo de buceo en Gran Canaria?",
        answer: "Para una primera experiencia sin corrientes, las zonas más tranquilas y recomendables son Sardina del Norte (en Gáldar), el entorno de Las Canteras / Tufia y las aguas abrigadas del sur en Puerto Rico, Mogán y Arguineguín."
      }
    ]
  },
  tabarca: {
    heading: "Bucear en la Reserva Marina de la Isla de Tabarca desde Santa Pola y Alicante",
    paragraphs: [
      "Declarada en 1986 como la primera reserva marina de España, la isla de Tabarca está rodeada por una enorme pradera de Posidonia oceanica que oxigena el agua y sirve de guardería a meros, doradas, dentones, nacras y bancos de espetones.",
      "Las salidas de buceo y snorkel a los bajos exteriores (como la Llosa de Tabarca) parten principalmente en embarcación desde el puerto de Santa Pola (a solo 15 minutos de navegación), Alicante o Guardamar. Para bucear dentro del perímetro de la reserva con botella es necesario tramitar permiso previo a través de un centro autorizado aportando tu DNI, titulación y seguro."
    ],
    extraFaqs: [
      {
        question: "¿Se puede hacer un bautismo de buceo o snorkel en la isla de Tabarca?",
        answer: "Sí, las excursiones guiadas de snorkel en las calas transparentes de Tabarca y los bautismos de buceo en las zonas autorizadas del entorno de la isla y Santa Pola son una de las actividades más reservadas del verano en Alicante."
      }
    ]
  }
};

export function getDestinationClimate(destination: Destination): DestinationClimateInfo {
  const comm = communityFor(destination.region);
  if (comm === "Canarias") {
    return {
      waterTempWinter: "18–20 °C",
      waterTempSummer: "22–24 °C",
      bestMonths: "Todo el año (12 meses de temporada activa, con mar especialmente en calma entre septiembre y noviembre)",
      wetsuitAdvice: "Neopreno húmedo de 5 mm o 7 mm cómodo durante todo el año.",
      marineEnvironment: "fondos volcánicos atlánticos de aguas templadas, veriles basálticos, arcos de lava y arenales limpios con alta visibilidad",
    };
  }
  if (comm === "Baleares") {
    return {
      waterTempWinter: "14–16 °C",
      waterTempSummer: "24–27 °C",
      bestMonths: "De mayo a octubre (siendo junio, septiembre y octubre los meses con mejor visibilidad y menor masificación)",
      wetsuitAdvice: "Neopreno de 5 mm en pleno verano (o 3 mm a poca cota) y 7 mm en primavera y otoño.",
      marineEnvironment: "aguas mediterráneas cristalinas filtradas por extensas praderas de Posidonia oceanica, cavernas calcáreas con contraluces y reservas marinas",
    };
  }
  if (comm === "Cataluña") {
    return {
      waterTempWinter: "13–15 °C",
      waterTempSummer: "21–24 °C",
      bestMonths: "De mayo a octubre (con máxima explosión de vida pelágica entre finales de agosto y octubre)",
      wetsuitAdvice: "Neopreno de 5 a 7 mm con capucha en verano (por las termoclinas a partir de 18 m) y semiseco de 7 mm en primavera y otoño.",
      marineEnvironment: "costa rocosa mediterránea, cañones, paredes tapizadas de gorgonias rojas y reservas marinas emblemáticas",
    };
  }
  if (comm === "Comunidad Valenciana" || comm === "Murcia") {
    return {
      waterTempWinter: "14–16 °C",
      waterTempSummer: "23–26 °C",
      bestMonths: "De abril a noviembre (con muchos centros operativos todo el año gracias al clima suave del sureste)",
      wetsuitAdvice: "Neopreno de 5 mm en verano y 7 mm o semiseco en primavera, otoño e invierno.",
      marineEnvironment: "bajos submarinos ricos en vida pelágica, reservas marinas mediterráneas, pecios históricos y calas resguardadas de aguas cálidas",
    };
  }
  if (comm === "Andalucía") {
    return {
      waterTempWinter: "15–17 °C",
      waterTempSummer: "20–24 °C",
      bestMonths: "De abril a noviembre (y todo el año en enclaves resguardados como La Herradura y Maro-Cerro Gordo)",
      wetsuitAdvice: "Neopreno de 7 mm o semiseco gran parte del año debido a las corrientes frescas de influencia atlántica; 5 mm en aguas someras en pleno verano.",
      marineEnvironment: "confluencia única entre la biodiversidad del océano Atlántico y el mar Mediterráneo, desde fondos volcánicos en Almería hasta acantilados con coral naranja en Granada, Málaga y el Estrecho",
    };
  }
  if (comm === "Madrid") {
    return {
      waterTempWinter: "26–28 °C (piscina climatizada)",
      waterTempSummer: "22–26 °C",
      bestMonths: "Todo el año (ideal para realizar el bautismo en piscina o completar la teoría y las aguas confinadas del Open Water antes de viajar a la costa)",
      wetsuitAdvice: "Neopreno corto o de 3–5 mm facilitado por la escuela durante las prácticas en piscina o foso.",
      marineEnvironment: "instalaciones acuáticas y piscinas climatizadas en Madrid donde completar la iniciación o las prácticas confinadas antes de las salidas al mar",
    };
  }
  return {
    waterTempWinter: "12–14 °C",
    waterTempSummer: "17–20 °C",
    bestMonths: "De junio a septiembre (cuando el mar Cantábrico y el Atlántico norte presentan las mejores condiciones de mar de fondo y visibilidad)",
    wetsuitAdvice: "Neopreno de 7 mm con capucha, traje semiseco o traje seco para inmersiones prolongadas.",
    marineEnvironment: "fondos atlánticos y cantábricos de gran riqueza biológica, paredes rocosas, bosques de laminarias y cañones costeros",
  };
}

export function getDestinationSeoData(
  destination: Destination,
  sites: DiveSite[],
  allActivities: Activity[],
  allCenters: DiveCenter[]
) {
  const siteSlugSet = new Set(sites.map((s) => s.slug));
  const destNameLower = destination.name.toLowerCase();
  const keywords = DESTINATION_KEYWORDS[destination.slug] || [destNameLower];

  const matchesKeyword = (text: string) => {
    const lower = text.toLowerCase();
    return (
      lower.includes(destNameLower) ||
      keywords.some((kw) => lower.includes(kw))
    );
  };

  const bookableActivities = allActivities.filter((a) => getBookingOffers(a).length > 0);

  // 1. Direct/Local matches (by siteSlug, destination name, or municipality keywords)
  const localActivities = bookableActivities.filter(
    (a) =>
      a.siteSlugs.some((ss) => siteSlugSet.has(ss)) ||
      matchesKeyword(a.destination) ||
      matchesKeyword(a.title)
  );

  // 2. Community/Regional fallback so smaller coves always show bookable options nearby
  const destCommunity = communityFor(destination.region);
  const regionalActivities = bookableActivities.filter(
    (a) => communityFor(a.region) === destCommunity && !localActivities.includes(a)
  );

  const combinedActivities = [...localActivities, ...regionalActivities];
  const primaryActivities = localActivities.length > 0 ? localActivities : combinedActivities;

  // Calculate real prices from primaryActivities
  const getMinPrice = (list: Activity[]) => {
    let min = Infinity;
    for (const a of list) {
      const offer = getLowestPricedOffer(getBookingOffers(a));
      const p = offer?.priceFrom ?? a.priceFrom;
      if (typeof p === "number" && p > 0 && p < min) min = p;
    }
    return min < Infinity ? min : undefined;
  };

  const baptisms = primaryActivities.filter((a) => a.type === "Bautismo");
  const courses = primaryActivities.filter((a) => a.type === "Curso");
  const funDives = primaryActivities.filter(
    (a) => a.type === "Fun Dive" || a.type === "Pecio" || a.type === "Fauna"
  );
  const snorkels = primaryActivities.filter((a) => a.type === "Snorkel");

  const lowestPrice = getMinPrice(primaryActivities);
  const baptismFrom = getMinPrice(baptisms);
  const courseFrom = getMinPrice(courses);
  const diveFrom = getMinPrice(funDives);

  const destSeed = destination.slug.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);

  // Prioritize a balanced mix of top bookable cards (up to 12) rotating deterministically
  const featuredActivities = [
    ...rotateSlice(localActivities, destSeed, 12),
    ...rotateSlice(regionalActivities, destSeed, Math.max(0, 9 - localActivities.length)),
  ].slice(0, 12);

  // Match verified diving schools in this destination or region
  const localCenters = allCenters.filter(
    (c) =>
      c.siteSlugs.some((ss) => siteSlugSet.has(ss)) ||
      matchesKeyword(c.location) ||
      matchesKeyword(c.name)
  );
  const regionalCenters = allCenters.filter(
    (c) => communityFor(c.region) === destCommunity && !localCenters.includes(c)
  );
  const matchedCenters = [
    ...rotateSlice(localCenters, destSeed, 12),
    ...rotateSlice(regionalCenters, destSeed, Math.max(0, 6 - localCenters.length)),
  ].slice(0, 12);

  const climate = getDestinationClimate(destination);

  const priceSummaryText = lowestPrice
    ? `desde ${lowestPrice} €`
    : "con reserva online directa";

  const localLongTail = DESTINATION_LONGTAIL[destination.slug];
  const faqs = [
    {
      question: `¿Cuánto cuesta bucear o hacer un bautismo de buceo en ${destination.name}?`,
      answer: `En ${destination.name} (${destination.region}) puedes reservar actividades subacuáticas ${priceSummaryText}. ${
        baptismFrom
          ? `Los bautismos de buceo para principiantes están disponibles desde ${baptismFrom} €, `
          : "Los bautismos de buceo suelen situarse entre 60 € y 95 €, "
      }${
        diveFrom
          ? `las salidas de inmersión desde ${diveFrom} € `
          : "las inmersiones guiadas entre 38 € y 55 € "
      }y ${
        courseFrom
          ? `los cursos y certificaciones oficiales (PADI / SSI) desde ${courseFrom} €.`
          : "los cursos Open Water Diver entre 350 € y 490 € con equipo y certificación incluidos."
      }`,
    },
    {
      question: `¿Hace falta experiencia previa para bucear en ${destination.name}?`,
      answer: `No. Si es tu primera vez, en ${destination.name} dispones de ${
        baptisms.length > 0 ? `${baptisms.length} opciones de ` : ""
      }bautismos de buceo (Discover Scuba Diving) guiados por un instructor titulado a poca profundidad (entre 5 y 12 metros), con todo el equipo de alquiler y el seguro incluidos. Para inmersiones en reserva o a mayor profundidad sí se requiere titulación Open Water o Advanced.`,
    },
    {
      question: `¿Cuáles son los mejores puntos de inmersión en ${destination.name}?`,
      answer: `Entre los puntos y zonas de buceo destacados de ${destination.name} se encuentran ${sites
        .slice(0, 4)
        .map((s) => `${s.name} (${s.depth}, nivel ${s.level.toLowerCase()})`)
        .join(", ")}. Son fondos caracterizados por ${climate.marineEnvironment}.`,
    },
    {
      question: `¿Cuál es la mejor época para bucear en ${destination.name} y qué temperatura tiene el agua?`,
      answer: `La temporada recomendada en ${destination.name} es: ${climate.bestMonths}. La temperatura del agua oscila entre ${climate.waterTempWinter} en los meses más frescos y ${climate.waterTempSummer} en verano. Recomendación térmica: ${climate.wetsuitAdvice}`,
    },
    ...(localLongTail ? localLongTail.extraFaqs : []),
  ];

  return {
    localCount: localActivities.length,
    totalCount: primaryActivities.length,
    baptismsCount: baptisms.length,
    coursesCount: courses.length,
    funDivesCount: funDives.length,
    snorkelsCount: snorkels.length,
    lowestPrice,
    baptismFrom,
    courseFrom,
    diveFrom,
    featuredActivities,
    matchedCenters,
    localCentersCount: localCenters.length,
    climate,
    localLongTail,
    faqs,
  };
}
