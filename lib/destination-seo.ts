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
  "illes-medes": [
    "illes medes", "islas medas", "estartit", "l'estartit", "montgrí", "montgri", "torroella"
  ],
  lestartit: [
    "estartit", "l'estartit", "illes medes", "islas medas", "montgrí", "montgri", "torroella"
  ],
  javea: [
    "jávea", "javea", "xàbia", "xabia", "cabo de san antonio", "portitxol", "granadella", "cabo de la nao"
  ],
  calpe: [
    "calpe", "calp", "ifach", "el racó", "morro de toix"
  ],
  "cabo-de-gata": [
    "cabo de gata", "san josé", "san jose", "las negras", "isleta del moro", "carboneras", "agua amarga", "níjar", "nijar"
  ],
  tarifa: [
    "tarifa", "isla de las palomas", "punta marroquí"
  ],
  aguilas: [
    "águilas", "aguilas", "calabardina", "el hornillo", "hornillo", "cabo cope", "isla del fraile"
  ],
  cartagena: [
    "cartagena", "la azohía", "la azohia", "isla plana", "cabo tiñoso", "tiñoso"
  ],
  "la-azohia": [
    "la azohía", "la azohia", "cabo tiñoso", "tiñoso", "isla plana", "cartagena"
  ],
  denia: [
    "dénia", "denia", "montgó", "montgo", "cova tallada"
  ],
  estepona: [
    "estepona", "manilva", "casares", "sotogrande", "marbella", "puerto banús", "puerto banus"
  ],
  torremolinos: [
    "torremolinos", "benalmádena", "benalmadena", "fuengirola", "mijas", "carihuela", "málaga", "malaga"
  ],
  "santa-pola": [
    "santa pola", "tabarca", "guardamar", "alicante", "alacant", "elche", "elx"
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
  },
  "illes-medes": {
    heading: "Cómo bucear en las Illes Medes: boyas míticas (La Vaca, El Dofí, Carall Bernat) y cupos",
    paragraphs: [
      "El Parque Natural del Montgrí y las Illes Medes lleva prohibiendo cualquier tipo de pesca en su reserva integral desde 1990. El resultado se nota nada más meter la cabeza bajo el agua: meros de más de veinte kilos que se acercan a mirarte las gafas sin ningún miedo, bancos compactos de corvinas y espetones, y paredes calcáreas cubiertas de gorgonias rojas y amarillas desde los 12 metros.",
      "Todas las salidas parten en barco desde el puerto de L’Estartit (a apenas 10 minutos de navegación) y amarran en boyas fijas con cupo diario limitado. Entre las inmersiones estrella destacan el túnel luminoso de La Vaca (apto desde Open Water con buen control de flotabilidad), las galerías de El Dofí (con su famosa estatua de bronce), la Pedra de Déu y los cortados más profundos del Carall Bernat y Tascons."
    ],
    extraFaqs: [
      {
        question: "¿Hace falta permiso especial o nivel Advanced para bucear en las Illes Medes?",
        answer: "El permiso y la tasa del parque natural los gestiona directamente tu centro de buceo de L’Estartit al reservar (solo tendrás que enseñar tu DNI, carnet de buceo y seguro en vigor). No es obligatorio ser Advanced: boyas como La Vaca, Salpatxot o Els Tascons tienen recorridos entre 10 y 18 metros perfectos para Open Water."
      },
      {
        question: "¿Dónde se hacen los bautismos de buceo si en las Medes piden carnet?",
        answer: "Como la zona estricta de las islas exige titulación, los bautismos de buceo y las primeras prácticas de curso salen desde el mismo puerto de L’Estartit hacia las calas abrigadas de la costa del Montgrí (como Cala Pedrosa o Punta Salines), donde el fondo es tranquilo, sin corriente y lleno de vida."
      }
    ]
  },
  lestartit: {
    heading: "Puerto de L’Estartit: salidas a las Illes Medes vs la costa del Montgrí",
    paragraphs: [
      "L’Estartit es el puerto base por excelencia del buceo en la Costa Brava. Sus barcos con ascensor en popa están diseñados específicamente para subir a bordo con el equipo puesto sin esfuerzo y tardan menos de diez minutos en llegar tanto a las boyas de la Reserva Marina de las Illes Medes como a los acantilados calcáreos del macizo del Montgrí.",
      "Si tienes carnet Open Water o Advanced, lo habitual es combinar una inmersión de mañana en las Medes (La Vaca, El Dofí o Carall Bernat) con una segunda salida por la costa del Montgrí (Cala Ferriol, El Falaguer o el pecio Reggio Messina), donde no se paga tasa de reserva y las paredes esconden cuevas ventiladas, langostas, congrios y nudibranquios."
    ],
    extraFaqs: [
      {
        question: "¿Qué diferencia hay entre bucear en las Illes Medes y en la costa del Montgrí desde L’Estartit?",
        answer: "En las Illes Medes verás una concentración única de grandes meros, doradas, águilas marinas y barracudas gracias a más de tres décadas de protección integral. La costa del Montgrí, justo enfrente, está mucho más resguardada cuando sopla tramontana, es ideal para bautismos y cursos, y sorprende por sus túneles de roca, gorgonias y vida pequeña."
      }
    ]
  },
  tenerife: {
    heading: "Dónde bucear en Tenerife: Las Galletas, pecio de Tabaiba, Montaña Amarilla y tortugas",
    paragraphs: [
      "Tenerife tiene la ventaja de que la mole del Teide frena los vientos alisios en toda la vertiente sur y suroeste (Costa Adeje, Los Cristianos, Las Galletas y Alcalá), dejando el mar en calma casi los 365 días del año. En esta franja marina Teno-Rasca los paisajes submarinos parecen esculpidos a mano: dunas de ceniza volcánica fosilizada en Montaña Amarilla, columnas basálticas en Los Chuchos o El Condesito y bahías tranquilas donde es muy habitual cruzarse con tortugas verdes, chuchos negros y angelotes.",
      "En la cara oriental de la isla (Radazul y Tabaiba, a diez minutos de Santa Cruz) te espera una de las mejores inmersiones desde costa de Canarias: el pecio de Tabaiba (El Peñón), un remolcador hundido expresamente para el buceo entre los 18 y los 32 metros al que se llega nadando desde la escalera del muelle."
    ],
    extraFaqs: [
      {
        question: "¿En qué zona de Tenerife es más fácil ver tortugas y rayas en un bautismo?",
        answer: "Las bahías abrigadas del sur y suroeste de Tenerife (como Abades, El Puertito de Armeñime, Playa Paraíso, Puerto Colón y el entorno de Las Galletas) tienen fondos de arena rubia y sebadal a entre 5 y 12 metros donde residen tortugas verdes, chuchos y sepias durante todo el año."
      },
      {
        question: "¿Puedo subir al Teide el mismo día que he buceado en Tenerife?",
        answer: "No. Las carreteras que suben al Parque Nacional del Teide superan los 2.000 metros de altitud (más presión reducida incluso que la cabina de un avión comercial). Si buceas por la mañana en Tenerife, nunca subas al Teide ni cruces por las cumbres ese mismo día; espera entre 12 y 24 horas o visita el Teide el día antes de empezar a bucear."
      }
    ]
  },
  menorca: {
    heading: "Reserva del Norte de Menorca (Fornells), cuevas de Ciutadella e Isla del Aire",
    paragraphs: [
      "Bajo el agua, Menorca destaca por dos cosas: una visibilidad que en verano supera con facilidad los 30 metros y una geología calcárea perforada como un queso gruyere. En el oeste (Ciutadella y Cala Blanca) se concentran algunas de las cavernas submarinas más fotogénicas del Mediterráneo, como el famoso Pont d’en Gil —donde puedes emerger en una bóveda de aire llena de estalactitas y atravesar una haloclina—, la Cueva de la Catedral o el Queso Suizo.",
      "Si buscas vida grande y bancos de peces, pon rumbo a la Reserva Marina del Norte de Menorca (con salidas desde Fornells y Cavalleria), hogar de grandes meros, dentones y langostas, o al extremo sureste (S’Algar y Punta Prima) para rodear los cañones y paredes de la Reserva de la Isla del Aire."
    ],
    extraFaqs: [
      {
        question: "¿Son peligrosas las cuevas de buceo de Menorca como el Pont d’en Gil?",
        answer: "La mayoría de las grutas recreativas de Menorca (como Pont d’en Gil, el Queso Suizo o Malakoff) son cavernas amplias con grandes entradas donde siempre ves el contraluz azul de la salida y que cuentan con cámaras de aire en superficie. Se visitan con guía local y linterna a cotas muy cómodas (entre 8 y 20 metros)."
      },
      {
        question: "¿Qué zona de Menorca elegir si cambia el viento (tramontana vs viento del sur)?",
        answer: "Al ser una isla estrecha, si entra tramontana del norte el mar se pone bravo en Fornells pero las calas del sur y suroeste (Ciutadella, Cala Galdana, Binibèquer y S’Algar) quedan como un plato; y cuando sopla viento del sur, el norte en Fornells y Cavalleria ofrece aguas completamente tranquilas."
      }
    ]
  },
  mallorca: {
    heading: "Reservas marinas de El Toro y Malgrats, Sa Dragonera, Tramuntana y Cabrera",
    paragraphs: [
      "El buceo en Mallorca ha dado un salto enorme gracias a su red de reservas marinas. A solo 20 minutos de Palma, en la costa de Calvià (Santa Ponsa), las reservas de El Toro y las Islas Malgrats ofrecen algunas de las inmersiones con más vida de Baleares: nubes de barracudas, grandes meros, doradas, corvinas, pulpos y un barco hundido de 33 metros frente a los islotes de Malgrats ideal para buceadores con título.",
      "Más al oeste, desde Port d’Andratx o Sant Elm se salta en pocos minutos al Parque Natural de Sa Dragonera (cuevas, paredes verticales y aguas limpísimas); en el norte brillan los túneles de Cabo Formentor y Pollença; y en el sur parten las excursiones de día completo para bucear en el santuario virgen del Parque Nacional de Cabrera."
    ],
    extraFaqs: [
      {
        question: "¿Dónde están las mejores zonas de Mallorca para hacer un bautismo de buceo?",
        answer: "Las aguas resguardadas de las Islas Malgrats (Santa Ponsa), Illetes, Cala Santanyí, Cala d’Or, Porto Cristo y la bahía de Alcúdia / Pollença son ideales para un primer bautismo porque combinan fondos de arena blanca y posidonia a poca profundidad sin corrientes."
      },
      {
        question: "¿Cómo se consigue permiso para bucear en el Parque Nacional de Cabrera desde Mallorca?",
        answer: "El buceo en Cabrera está regulado con cupos diarios estrictos. No tienes que tramitarlo por libre: los centros autorizados del sur de Mallorca (Colònia de Sant Jordi, Cala d’Or o Palma) gestionan la autorización conjunta cuando reservas tu plaza en la salida doble de barco."
      }
    ]
  },
  formentera: {
    heading: "Aguas de visibilidad récord en la Reserva de Es Freus, La Plataforma y Punta Prima",
    paragraphs: [
      "Formentera presume de tener las aguas más transparentes de toda España —con días de 35 y 40 metros de visibilidad— gracias a las inmensas praderas de Posidonia oceanica que rodean la isla, declaradas Patrimonio de la Humanidad por la UNESCO. Ese bosque submarino filtra y oxigena el mar dejando un azul turquesa que parece una piscina infinita.",
      "Desde el puerto de La Savina o Es Pujols los barcos llegan en pocos minutos a puntos míticos de la Reserva Marina de Es Freus como La Plataforma (una piscifactoría hundida entre los 11 y los 33 metros convertida en un imán gigante de barracudas, serviolas y meros), los arcos calcáreos y cuevas de luz de Punta Rasa (Cala Saona) y los secanos de Punta Prima."
    ],
    extraFaqs: [
      {
        question: "¿Merece la pena hacer un bautismo de buceo o snorkel en Formentera?",
        answer: "Es probablemente el lugar más agradecido de España para quien se pone una máscara por primera vez: al haber más de 30 metros de visibilidad y fondos de arena blanca, no existe sensación de oscuridad ni agobio y ves toda la vida marina desde que metes la cabeza en el agua."
      }
    ]
  },
  ibiza: {
    heading: "El gigante hundido Don Pedro, los bajos de Es Vedrà y las cuevas del norte de Ibiza",
    paragraphs: [
      "Más allá de sus calas, Ibiza guarda bajo el agua el mayor barco hundido visitable con buceo recreativo de todo el Mediterráneo: el Don Pedro. Este carguero de 142 metros de eslora descansa a solo una milla de la bocana del puerto de Ibiza sobre un fondo de 46 metros, pero su costado de babor y su puente suben hasta los 26 metros, permitiendo que buceadores Advanced (preferiblemente con Nitrox) recorran sus cubiertas rodeados de bancos de espetones y peces limón.",
      "Para todos los niveles, la costa oeste (Sant Antoni, Cala Tarida y Cala Vadella) ofrece las espectaculares terrazas sumergidas de Punta Galera, la reserva de los islotes de Poniente (Bledas y Es Vedrà, con el mítico bajo de La Bota) y, en el norte (Portinatx y Cala Xarraca), las famosas Cuevas de la Luz donde los rayos del sol entran como columnas de catedral."
    ],
    extraFaqs: [
      {
        question: "¿Qué titulación necesito para bucear en el pecio Don Pedro de Ibiza?",
        answer: "Al estar la parte más alta del casco en torno a los 25–26 metros de profundidad y caer hasta los 46 metros, los centros de Ibiza piden titulación mínima Advanced Open Water (o equivalente) y recomiendan encarecidamente bucear con aire enriquecido Nitrox para ampliar el margen sin descompresión."
      }
    ]
  },
  javea: {
    heading: "Reserva del Cabo de San Antonio, Isla del Descubridor y arcos del Cabo de la Nao",
    paragraphs: [
      "Jávea (Xàbia) tiene uno de los litorales más recortados y protegidos del viento de toda la Comunidad Valenciana. Al norte queda flanqueada por los imponentes acantilados de la Reserva Marina del Cabo de San Antonio (al pie del Montgó), y al sur por el Cabo de la Nao, el punto más oriental de la costa alicantina, lo que permite encontrar siempre una cara de la bahía con el mar en calma.",
      "La mayoría de salidas en barco parten del puerto o del Canal de la Fontana hacia más de veinte puntos situados a diez minutos de navegación: los cañones y túneles de la Isla del Descubridor y la Isla del Portitxol, las cavernas luminosas de La Catedral y los jardines de posidonia y pared de La Mona o Cabo Negro, ideales tanto para bautismos como para buceadores Open Water."
    ],
    extraFaqs: [
      {
        question: "¿Cuáles son las mejores calas de Jávea para bautismos de buceo y snorkel?",
        answer: "Las aguas cristalinas del entorno del Portitxol (La Barraca), la Granadella, Cala Blanca y los fondeos abrigados junto al Cabo de San Antonio y el Cabo de la Nao son perfectos para iniciarse entre arcos de roca calcárea, pulpos, sargos y estrellas de mar."
      }
    ]
  },
  calpe: {
    heading: "Buceo a los pies del Peñón de Ifach: Cala El Racó, Los Arcos y paredes del Morro de Toix",
    paragraphs: [
      "En Calpe tienes una de las inmersiones desde playa más cómodas y didácticas de Alicante: la Cala de El Racó, situada justo en la base sur del Peñón de Ifach y al lado mismo del puerto pesquero. Al estar protegida de los vientos del norte y del este por la propia mole de piedra del Peñón, el agua suele estar tranquila y cuenta con un recorrido submarino entre bloques calcáreos y praderas de posidonia lleno de pulpos, sepias, doradas y nudibranquios.",
      "Si sales en barco desde el puerto de Calpe, en cinco minutos recorres la pared exterior del Peñón de Ifach (donde se abren pasadizos como Los Arcos) o navegas hacia los cortados verticales del Morro de Toix, en el límite con Altea, tapizados de esponjas amarillas y gorgonias."
    ],
    extraFaqs: [
      {
        question: "¿Por qué la Cala El Racó de Calpe es tan popular para empezar a bucear?",
        answer: "Porque aparcas a pocos metros del agua a los pies del Peñón de Ifach, entras caminando por una cala abrigada sin oleaje y entre los 4 y los 14 metros de profundidad ya tienes roca, posidonia y muchísima vida mediterránea sin necesidad de embarcar."
      }
    ]
  },
  "cabo-de-gata": {
    heading: "Fondos volcánicos del Parque Natural de Cabo de Gata: La Amatista, Los Meros y el Vapor",
    paragraphs: [
      "El Parque Natural Marítimo-Terrestre de Cabo de Gata-Níjar (Almería) es el único rincón volcánico sumergido de la Península Ibérica y uno de los puntos con más horas de sol y menos lluvias de Europa. Bajo sus aguas transparentes, las antiguas coladas de lava y disyunciones columnares (como las del Arrecife de las Sirenas o Punta Baja) se mezclan con extensas praderas de Posidonia oceanica en un estado de conservación envidiable.",
      "Los centros de buceo se reparten en pueblos blancos con muchísimo encanto como San José, Las Negras, La Isleta del Moro y Carboneras (Isla de San Andrés). Desde allí se sale en zodiac a joyas como la Piedra de los Meros, la Cueva del Francés, los cañones de La Amatista o, para buceadores avanzados, el pecio del Vapor (Arna) frente al faro de Cabo de Gata."
    ],
    extraFaqs: [
      {
        question: "¿Qué pueblo de Cabo de Gata es mejor como base para bucear?",
        answer: "San José, La Isleta del Moro y Las Negras están en pleno corazón del parque natural y concentran la mayoría de salidas a las paredes volcánicas y reservas; mientras que Carboneras, en el extremo norte del parque, es comodísimo para bucear alrededor del Monumento Natural de la Isla de San Andrés y el cráter submarino."
      }
    ]
  },
  barcelona: {
    heading: "Buceo en Barcelona: dónde se bucea de verdad cerca de la ciudad (Maresme, Garraf–Sitges y Costa Brava)",
    paragraphs: [
      "Barcelona capital no tiene una reserva marina de referencia, así que casi todos los centros de buceo de la ciudad organizan sus inmersiones en tres zonas cercanas: el Maresme (Mataró y las Barres de Mataró, una cordillera de roca calcárea paralela a la costa llena de grietas con morenas, congrios y langostas), el litoral del Garraf y Sitges al sur, y la Costa Brava, a poco más de una hora en coche. Es lo que busca quien escribe «buceo Barcelona», «curso de submarinismo en Barcelona» o «scuba diving Barcelona»: una escuela con base en la ciudad y salidas fáciles de combinar con el trabajo.",
      "La escollera y los diques del entorno del Fòrum funcionan como un arrecife artificial donde se ven pulpos, sepias, congrios y morenas entre los 6 y los 18 metros, una inmersión muy cómoda para iniciarse o para repasar tras un tiempo sin bucear. Los cursos Open Water suelen combinar teoría y piscina entre semana con las inmersiones de mar en fin de semana. En invierno el agua baja hasta unos 13–14 °C y se bucea con traje de 7 mm o seco; de junio a octubre es la mejor época para bautismos y primeras inmersiones."
    ],
    extraFaqs: [
      {
        question: "¿Se puede bucear en Barcelona ciudad o hay que salir fuera?",
        answer: "Sí se puede bucear en el litoral de la propia ciudad (escollera y diques del Fòrum, entre 6 y 18 metros), pero las mejores inmersiones están algo más lejos: las Barres de Mataró en el Maresme, la costa del Garraf y Sitges al sur y, a poco más de una hora en coche, la Costa Brava con Tossa de Mar, Llafranc o L'Estartit."
      },
      {
        question: "¿Cuánto dura un curso de buceo Open Water en Barcelona?",
        answer: "Un curso Open Water Diver (PADI o SSI) se completa normalmente en 3–4 días intensivos, o repartido en varios fines de semana: teoría (también online), sesión de piscina o aguas confinadas y cuatro inmersiones en mar. Pregunta al centro si el equipo de alquiler y la certificación están incluidos en el precio."
      }
    ]
  },
  malaga: {
    heading: "Buceo en Málaga y Costa del Sol: Estepona, Torremolinos, Benalmádena y los acantilados de Maro",
    paragraphs: [
      "La Costa del Sol no tiene un único punto de buceo, sino tres zonas con carácter propio. En el oeste (Estepona, Marbella, Manilva) predominan los fondos de roca y las escolleras alimentados por las aguas del Estrecho de Gibraltar. En el centro (Torremolinos, Benalmádena y la bahía de Málaga) hay arrecifes rocosos como la Laja del Almirante, con lajas escalonadas, cardúmenes de sargos y congrios. Y en el este, junto a Nerja, el Paraje Natural de los Acantilados de Maro–Cerro Gordo ofrece cuevas, paredes y colonias de coral naranja (Astroides calycularis).",
      "Si viajas en familia, ten en cuenta las edades mínimas: la mayoría de centros PADI admiten el programa Bubblemaker desde los 8 años (en piscina o aguas muy someras) y el bautismo de buceo en mar desde los 10 años, con profundidad limitada a 12 metros. Se bucea los 365 días del año; el agua es más cálida de junio a octubre, pero en invierno la visibilidad suele ser excelente con un traje de 5–7 mm."
    ],
    extraFaqs: [
      {
        question: "¿Se puede hacer buceo con niños en la Costa del Sol?",
        answer: "Sí. Los centros de la Costa del Sol ofrecen Bubblemaker desde los 8 años (en piscina o aguas muy someras) y bautismos de buceo en mar desde los 10 años, siempre con instructor titulado, equipo adaptado y una profundidad máxima de 12 metros. Confirma la edad mínima exacta con el centro al reservar."
      },
      {
        question: "¿Qué zona de la Costa del Sol es mejor para bucear: Estepona, Torremolinos o Nerja?",
        answer: "Estepona y Marbella destacan por la vida de roca y cefalópodos con influencia del Estrecho; Torremolinos, Benalmádena y la bahía de Málaga por sus arrecifes de fácil acceso desde barco; y Nerja, por el Paraje Natural de Maro–Cerro Gordo con cuevas y coral naranja. Para un primer bautismo cualquiera de las tres sirve; para fotografía y paredes, Maro–Cerro Gordo."
      }
    ]
  },
  marbella: {
    heading: "Bucear en Marbella y Estepona: arrecifes de roca, escolleras y fauna del Estrecho",
    paragraphs: [
      "El litoral entre Marbella, San Pedro de Alcántara y Estepona es una zona de buceo de contrastes: fondos rocosos de influencia atlántica y mediterránea (como el Placer de las Bóvedas, entre 8 y 28 metros), con corvinas, meros, morenas y centollas, y lajas litorales y escolleras de poca profundidad en la bahía de Estepona (entre 5 y 20 metros) donde abundan pulpos, sepias y sargos gracias a los nutrientes que entran desde el Estrecho de Gibraltar.",
      "Las inmersiones suelen salir en embarcación desde los puertos deportivos de la zona (Marbella, Puerto Banús, Estepona), a pocos minutos de navegación. Por eso es una de las bases más cómodas de la Costa del Sol para quien busca «buceo en Estepona» o «buceo en Marbella»: bautismos y cursos para principiantes en la bahía y salidas más profundas para buceadores titulados."
    ],
    extraFaqs: [
      {
        question: "¿Qué se ve buceando en Estepona y Marbella?",
        answer: "En la bahía de Estepona abundan pulpos, sepias, sargos y morenas entre lajas y escolleras de 5 a 20 metros. En los fondos rocosos de Marbella (Placer de las Bóvedas, 8–28 metros) es habitual encontrar meros, corvinas, morenas y centollas."
      },
      {
        question: "¿Cuánto dura un bautismo de buceo en Marbella o Estepona?",
        answer: "Una actividad de bautismo completa suele durar entre 2 y 3 horas contando briefing, equipamiento y desplazamiento, con unos 30–40 minutos bajo el agua acompañado de un instructor. El equipo y el seguro van incluidos; solo necesitas traje de baño y toalla."
      }
    ]
  },
  alicante: {
    heading: "Bautismo y curso de buceo en Alicante: Santa Pola, Tabarca, Cabo de la Huerta y Serra Gelada",
    paragraphs: [
      "La provincia de Alicante concentra tres escenarios de buceo muy distintos. Al sur, la Reserva Marina de la Isla de Tabarca (la primera de España, declarada en 1986) a la que se sale principalmente desde el puerto de Santa Pola. En la propia ciudad, la microrreserva del Cabo de la Huerta (Cala Palmera) ofrece fondos someros de 4 a 14 metros con posidonia, pulpos y sepias, perfectos para bautismos. Y al norte, el Parque Natural de la Serra Gelada (Benidorm, l'Alfàs del Pi y Altea) prolonga bajo el mar sus acantilados de más de 300 metros entre losas, cuevas y praderas de posidonia.",
      "Quien busca «bautismo de buceo en Alicante» o «curso de buceo en Alicante» tiene aquí la ventaja de un clima suave todo el año: se bucea en cualquier mes, con el agua más cálida entre julio y octubre. Para un primer bautismo conviene elegir cala resguardada o Tabarca en verano; para el Open Water, los centros combinan teoría, piscina y cuatro inmersiones en Cabo de la Huerta, Santa Pola o la Serra Gelada según el viento."
    ],
    extraFaqs: [
      {
        question: "¿Dónde hacer un bautismo de buceo en Alicante?",
        answer: "Las opciones más habituales son las calas del Cabo de la Huerta en Alicante capital, el entorno de la Isla de Tabarca con salida desde Santa Pola o Alicante, y la zona de Benidorm–Altea (Serra Gelada). Todas permiten bautismos a poca profundidad (5–12 metros) con instructor titulado y equipo incluido."
      },
      {
        question: "¿Se sale desde Santa Pola o desde Alicante para bucear en Tabarca?",
        answer: "Santa Pola es el puerto más cercano a la isla (unos 15 minutos de navegación según los centros) y concentra la mayoría de salidas de buceo y snorkel; también hay salidas desde Alicante y Guardamar. Si buscas «buceo Santa Pola», es la mejor base para visitar la reserva de Tabarca."
      }
    ]
  },
  aguilas: {
    heading: "Buceo en Águilas (Murcia): Isla del Fraile, bahía del Hornillo y un litoral más tranquilo que Cabo de Palos",
    paragraphs: [
      "Águilas está en el extremo suroccidental del litoral de Murcia, casi en el límite con Almería, y su joya submarina es la Isla del Fraile: un islote escarpado frente a la bahía del Hornillo cuyas paredes sumergidas, de 5 a 24 metros, combinan praderas de posidonia con meros, morenas, barracudas y bancos de espetones. Es una inmersión apta para nivel inicial, por lo que sirve tanto para bautismos de buceo como para las prácticas de mar del curso Open Water.",
      "Frente a Cabo de Palos, que es mucho más conocido y recibe más buceadores en temporada alta, Águilas ofrece un buceo más tranquilo y con menos masificación, con otras zonas cercanas como Calabardina y Cabo Cope. Si buscas «buceo en Águilas, Murcia», es una base ideal para combinar un fin de semana de mar, playa y naturaleza."
    ],
    extraFaqs: [
      {
        question: "¿Se puede hacer un bautismo de buceo en Águilas sin experiencia?",
        answer: "Sí. La Isla del Fraile y las calas de la bahía del Hornillo tienen zonas de entrada fácil y poca profundidad (5–12 metros), así que los centros de Águilas ofrecen bautismos de buceo con instructor titulado, equipo y seguro incluidos, sin necesidad de saber bucear."
      },
      {
        question: "¿Qué se ve buceando en la Isla del Fraile de Águilas?",
        answer: "Praderas de Posidonia oceanica, meros morenos, morenas, barracudas y bancos de espetones en un entorno de paredes de roca de entre 5 y 24 metros. En verano y otoño la visibilidad suele ser muy buena."
      }
    ]
  },
  cartagena: {
    heading: "Buceo en Cartagena: Cabo Tiñoso, La Azohía y puerta de entrada a Cabo de Palos",
    paragraphs: [
      "Cartagena, con más de 2.200 años de historia, tiene su litoral escoltado por dos reservas marinas: la de Cabo de Palos–Islas Hormigas al este y la de Cabo Tiñoso al oeste. Esa ubicación central permite a los buceadores elegir cada día el lado con mejor mar: paredes calizas, cuevas, pecios históricos y una gran diversidad de vida pelágica y bentónica, con meros, dentones, barracudas y morenas entre los 6 y los 32 metros.",
      "Desde la ciudad se llega en unos 25–30 km tanto a La Azohía y Cabo Tiñoso como a Cabo de Palos, lo que convierte a Cartagena en una base cómoda para cursos Open Water, bautismos de buceo y salidas de nivel avanzado. Muchos buceadores del interior peninsular eligen esta zona por la combinación de reservas marinas, pecios y fauna de gran tamaño."
    ],
    extraFaqs: [
      {
        question: "¿Qué reservas marinas se pueden bucear cerca de Cartagena?",
        answer: "A ambos lados de Cartagena están la Reserva Marina de Cabo de Palos–Islas Hormigas (a unos 30 km al este) y la de Cabo Tiñoso (con base en La Azohía, a unos 25 km al oeste). Para bucear en las reservas se necesita titulación mínima, seguro en vigor y que el centro tramite el permiso."
      },
      {
        question: "¿Es mejor bucear en La Azohía o en Cabo de Palos?",
        answer: "Cabo de Palos es más famoso por los bajos de las Islas Hormigas y el pecio Naranjito, pero recibe más buceadores. La Azohía y Cabo Tiñoso ofrecen paredes verticales y cuevas con bóveda de aire en un entorno más tranquilo y de aguas protegidas, ideal para bautismos y cursos."
      }
    ]
  },
  "la-azohia": {
    heading: "Bucear en La Azohía y la Reserva Marina de Cabo Tiñoso: paredes, cuevas con bóveda de aire y bautismos tranquilos",
    paragraphs: [
      "La Azohía es un pequeño pueblo pesquero del municipio de Cartagena situado a los pies de la Reserva Marina de Cabo Tiñoso. Su bahía queda protegida del oleaje la mayor parte del año, lo que la convierte en una de las mejores zonas de Murcia para hacer un bautismo de buceo o las prácticas del curso Open Water, con entradas fáciles y profundidades de 6 a 30 metros.",
      "Fuera de la bahía, el entorno de Cabo Tiñoso esconde paredes verticales, cuevas con bóveda de aire y buena fauna: meros morenos, morenas, dentones y barracudas. Es un plan perfecto para quienes buscan una alternativa más tranquila a Cabo de Palos sin renunciar a la vida marina de una reserva."
    ],
    extraFaqs: [
      {
        question: "¿Es La Azohía un buen sitio para hacer el curso Open Water?",
        answer: "Sí. La bahía de La Azohía está resguardada la mayor parte del año y permite entradas fáciles desde la costa y barco, con fondos de roca y posidonia a poca profundidad para las primeras inmersiones, y paredes más profundas para completar después el nivel Advanced."
      }
    ]
  },
  denia: {
    heading: "Buceo en Dénia: Cova Tallada, Cabo de San Antonio y el macizo del Montgó",
    paragraphs: [
      "Dénia reúne dos de las inmersiones más espectaculares de la Costa Blanca norte. La Cova Tallada es una gruta calcárea al pie de los acantilados del Montgó, con bóvedas semisumergidas y contraluces turquesas entre 5 y 18 metros, de nivel intermedio. Y el Cabo de San Antonio (entre Dénia y Jávea) es una reserva marina donde el macizo del Montgó se desploma en el mar, creando paredes de 8 a 28 metros tapizadas de esponjas y gorgonias con meros, corvinas y barracudas.",
      "El puerto de Dénia es además el punto de salida de los ferris a Ibiza, Formentera y Mallorca, por lo que muchos viajeros combinan aquí un bautismo o una inmersión con su escapada a Baleares. Quien busca «buceo en Dénia» encuentra centros que ofrecen cursos, bautismos y salidas guiadas todo el año."
    ],
    extraFaqs: [
      {
        question: "¿Qué es la Cova Tallada y se puede bucear en ella?",
        answer: "La Cova Tallada es una gruta calcárea junto a los acantilados del Montgó, entre Dénia y Jávea, con bóvedas semisumergidas y aguas turquesas. Se puede bucear entre 5 y 18 metros en una inmersión de nivel intermedio, con pulpos, morenas y lubinas; también es un clásico del snorkel y el kayak."
      },
      {
        question: "¿Es mejor bucear en Dénia o en Jávea?",
        answer: "Comparten la misma costa del Montgó. Dénia ofrece la Cova Tallada y el Cabo de San Antonio, con salidas cómodas desde su puerto; Jávea suma el Portitxol, la Granadella y el entorno del Cabo de la Nao. Si tienes pocos días, muchos centros organizan salidas a ambas zonas."
      }
    ]
  },
  "costa-brava": {
    heading: "Bautismo de buceo en la Costa Brava: calas resguardadas, Medes, Cap de Creus y Els Ullastres",
    paragraphs: [
      "La Costa Brava (de Blanes a Portbou) es el mejor escenario de buceo de Cataluña: las Illes Medes frente a L'Estartit, con grandes meros centenarios protegidos desde hace décadas; Els Ullastres frente a Llafranc, con tres montañas submarinas de gorgonias rojas; y el Parque Natural del Cap de Creus, con corrientes que alimentan bosques de gorgonias y grandes dentones.",
      "Si buscas un bautismo de buceo en la Costa Brava o en Cataluña, lo ideal es elegir una cala resguardada de la tramontana, como la Mar Menuda de Tossa de Mar, Cala Montgó en L'Escala o Tamariu, donde se entra desde la playa entre 5 y 20 metros. Los puntos más expuestos, como Massa d'Or en el Cap de Creus, se reservan a buceadores avanzados. De junio a octubre es la mejor época; el resto del año se bucea con traje de 7 mm o seco."
    ],
    extraFaqs: [
      {
        question: "¿Dónde hacer un bautismo de buceo en la Costa Brava?",
        answer: "Las calas más recomendadas para un primer bautismo son la Mar Menuda en Tossa de Mar, Cala Montgó en L'Escala y Tamariu en Palafrugell, por su entrada desde playa, su protección frente al oleaje y sus fondos de entre 5 y 20 metros llenos de vida."
      },
      {
        question: "¿Qué diferencia hay entre bucear en las Illes Medes y en el Cap de Creus?",
        answer: "Las Illes Medes (L'Estartit) son una reserva con grandes meros confiados y nivel inicial o intermedio. El Cap de Creus es un parque natural con más corriente, paredes profundas y bosques de gorgonias, con inmersiones de nivel intermedio-avanzado como Cap Norfeu o Massa d'Or."
      }
    ]
  },
  madrid: {
    heading: "Buceo en Madrid: bautismos en piscina, teoría del Open Water y salidas al mar",
    paragraphs: [
      "Madrid no tiene mar, pero sí una de las mayores comunidades de buceadores de España. Los centros de la capital ofrecen bautismos en piscina climatizada o foso, la parte teórica de los cursos (PADI, SSI o TDI, también online) y las sesiones de aguas confinadas, para que al llegar a la costa solo falten las inmersiones de mar. Es la forma más cómoda de iniciarse sin perder días de vacaciones.",
      "El mar más cercano está a unas 3,5–5 horas por carretera (Valencia, Alicante, Cartagena y Cabo de Palos), y muchas escuelas madrileñas organizan salidas de fin de semana y viajes en grupo. Las inmersiones en ríos, pantanos y lagunas interiores están muy limitadas y reguladas por las confederaciones hidrográficas y los parques naturales, así que conviene consultar siempre con un centro autorizado antes de bucear en aguas continentales."
    ],
    extraFaqs: [
      {
        question: "¿Se puede hacer el curso de buceo Open Water desde Madrid?",
        answer: "Sí. Puedes hacer la teoría (presencial u online) y las sesiones de piscina en Madrid y completar las cuatro inmersiones de mar en un fin de semana en la costa, normalmente con el mismo centro. Así se obtiene la certificación Open Water Diver sin dedicar días enteros a la teoría en vacaciones."
      },
      {
        question: "¿Se puede bucear en ríos o pantanos cerca de Madrid?",
        answer: "Con carácter general el buceo en aguas continentales está muy restringido o prohibido en muchos pantanos, ríos y lagunas de parques naturales. Antes de planificar una inmersión consulta con un centro autorizado y con la confederación hidrográfica correspondiente."
      }
    ]
  },
  granada: {
    heading: "Buceo en Granada (Costa Tropical): La Herradura, Almuñécar, Punta de la Mona y Calahonda",
    paragraphs: [
      "El buceo en la provincia de Granada se concentra en la Costa Tropical: Motril, Salobreña, Almuñécar y La Herradura. Su joya es la Punta de la Mona, Zona de Especial Conservación con paredes verticales (de 8 a 32 metros) tapizadas de coral naranja, espirógrafos, pez luna ocasional y más de 40 especies de nudibranquios. Al este, la Laja de Calahonda (Motril) gana profundidad a pocos metros de la orilla y es hogar de caballitos de mar y cefalópodos.",
      "La Costa Tropical está a poco más de una hora de la ciudad de Granada y goza de un clima subtropical con unos 300 días de sol al año, lo que permite bucear en cualquier mes. Para bautismos y primeras inmersiones, La Herradura y Calahonda ofrecen entradas cómodas desde playa; para buceadores titulados, las paredes de la Punta de la Mona y Maro–Cerro Gordo."
    ],
    extraFaqs: [
      {
        question: "¿Dónde se puede bucear en Granada?",
        answer: "En la Costa Tropical granadina: La Herradura y Almuñécar (Punta de la Mona, Marina del Este), Salobreña y Motril (Laja de Calahonda). Hay centros de buceo con bautismos, cursos Open Water y salidas guiadas para titulados durante todo el año."
      },
      {
        question: "¿Qué diferencia hay entre bucear en La Herradura y en Calahonda?",
        answer: "La Herradura ofrece paredes con coral naranja y nudibranquios en la Punta de la Mona y entrada fácil desde playa en Marina del Este; Calahonda (Motril) tiene una laja que gana profundidad muy cerca de la orilla, libre de oleaje y con caballitos de mar y cefalópodos, muy apropiada para iniciación."
      }
    ]
  },
  cantabria: {
    heading: "Buceo en Cantabria: Isla de Mouro, Castro Urdiales, Noja y Suances",
    paragraphs: [
      "El Cantábrico guarda un buceo muy distinto al Mediterráneo: aguas frías y ricas en nutrientes, bosques de laminarias, paredes cubiertas de anémonas y gorgonias, y grandes congrios, bogavantes y centollas. La Isla de Mouro, frente al palacio de la Magdalena en Santander, es la inmersión de referencia (6–28 metros), mientras que Castro Urdiales ofrece acantilados verticales y cargaderos mineros sumergidos (8–30 metros).",
      "Los fondos someros de Noja (3–15 metros) y de la costa de Miengo y Suances permiten iniciarse y completar cursos en un entorno más resguardado. Por la temperatura del agua, el equipo de alquiler incluye normalmente traje de 7 mm con capucha o traje seco, y la mejor época es de junio a septiembre, con mejor visibilidad y mar más calmado."
    ],
    extraFaqs: [
      {
        question: "¿Se puede bucear en Castro Urdiales?",
        answer: "Sí. Castro Urdiales ofrece buceo en acantilados y cargaderos mineros sumergidos a entre 8 y 30 metros, con congrios, centollas, pulpos y cabrachos. Es una inmersión de nivel intermedio; los principiantes suelen iniciarse en calas más someras como Noja."
      },
      {
        question: "¿Qué traje hace falta para bucear en Cantabria?",
        answer: "El agua del Cantábrico ronda los 12–14 °C en invierno y 17–20 °C en verano, así que se recomienda traje de 7 mm con capucha y guantes, o traje seco para inmersiones largas. Los centros de buceo de Cantabria incluyen el equipo de alquiler en bautismos y cursos."
      }
    ]
  },
  fuerteventura: {
    heading: "Buceo en Fuerteventura: Corralejo, Isla de Lobos, Caleta de Fuste y Morro Jable",
    paragraphs: [
      "Fuerteventura reparte su buceo en tres zonas. Al norte, Corralejo y la Isla de Lobos (en el Parque Natural de las Dunas de Corralejo e Isla de Lobos) ofrecen fondos volcánicos y arenales con la fauna típica del Atlántico canario. En la costa este, la bahía abrigada de Caleta de Fuste (5–24 metros) alberga meros, abades, morenas negras y chuchos, y con suerte angelotes en las zonas de arena. Y al sur, el veril de Jandía frente al faro de Morro Jable (6–28 metros) cae sobre arena blanca congregando grandes meros y rayas mariposa.",
      "Los vientos alisios que soplan casi todo el año hacen que cada centro elija el lado más resguardado de la isla, y el agua se mantiene entre 18 y 24 °C, por lo que se bucea los doce meses. Quien busca «dive center Corralejo» o «centro de buceo en Fuerteventura» encuentra bautismos, cursos Open Water y salidas guiadas a todos los niveles."
    ],
    extraFaqs: [
      {
        question: "¿Dónde bucear en Fuerteventura: Corralejo, Caleta de Fuste o Morro Jable?",
        answer: "Corralejo es ideal para combinar buceo con la Isla de Lobos; Caleta de Fuste es una bahía abrigada perfecta para bautismos y cursos; y Morro Jable, en el sur de la isla, ofrece un veril de arena blanca con grandes meros para buceadores con algo de experiencia."
      },
      {
        question: "¿Se pueden ver angelotes buceando en Fuerteventura?",
        answer: "Los angelotes (tiburones ángel) son habituales en los fondos arenosos de Canarias y se han observado en zonas como Caleta de Fuste, aunque no está garantizado y depende de la época. Siempre se observan sin tocar ni perseguir al animal."
      }
    ]
  },
  tarifa: {
    heading: "Bucear en la Isla de las Palomas de Tarifa: donde chocan el Atlántico y el Mediterráneo",
    paragraphs: [
      "Tarifa ofrece un escenario submarino irrepetible en la península: la Isla de las Palomas (Punta Marroquí) marca la frontera exacta entre el océano Atlántico y el mar Mediterráneo. Esa mezcla constante de aguas limpias y nutrientes alimenta paredes repletas de gorgonias rojas y amarillas, coral naranja, enormes centollas, bogavantes, urtas, meros y el paso habitual de peces luna (Mola mola) y grandes bancos de voraces y sargos.",
      "Además, la forma de la Isla de las Palomas actúa como un escudo natural frente al viento: cuando sopla levante fuerte, se bucea a resguardo en el lado de poniente (Las Calderas, El Boquete o el pecio de Las Laminarias); y cuando entra viento de poniente, las embarcaciones fondean en las aguas mansas de la cara de levante (Puerto Pajares y el pecio histórico de vapor San Andrés)."
    ],
    extraFaqs: [
      {
        question: "¿Se puede bucear en Tarifa aunque haga viento de levante o poniente?",
        answer: "Sí. Mientras no sea un temporal extremo, el tómbolo y la Isla de las Palomas dividen el mar en dos caras opuestas: si sopla levante se sale por el lado de poniente, y si sopla poniente se bucea en la cara de levante, quedando el fondeo completamente protegido del oleaje."
      },
      {
        question: "¿Qué hay que tener en cuenta con las mareas y corrientes en Tarifa?",
        answer: "En el Estrecho de Gibraltar las mareas atlánticas mueven mucha agua. Por eso las inmersiones sencillas y los bautismos se hacen siempre en las calas abrigadas junto a la isla, mientras que las puntas exteriores (como Punta Marroquí o Las Piscinas) se planifican con los centros locales cuadrando la hora exacta del reparo de marea."
      }
    ]
  },
  estepona: {
    heading: "Bautismos de buceo en Estepona (mar y piscina) y salidas por la Costa del Sol occidental",
    paragraphs: [
      "Estepona es uno de los puntos más cómodos del oeste de Málaga para iniciarse en el submarinismo gracias a la cercanía de su puerto deportivo con las lajas rocosas de la bahía y la influencia directa de nutrientes que entran desde el Estrecho de Gibraltar, lo que garantiza abundante vida de roca (pulpos, sepias, congrios, morenas y bancos de sargos) a poca profundidad.",
      "Los centros de la zona permiten elegir entre bautismos directos en el mar desde playa o barco, bautismos previos en piscina para ganar total confianza con el regulador y programas dobles (piscina + mar abierto), además de cursos oficiales PADI y SSI durante gran parte del año."
    ],
    extraFaqs: [
      {
        question: "¿Es mejor hacer el bautismo de buceo en Estepona directamente en el mar o el pack piscina + mar?",
        answer: "Si ya te sientes cómodo nadando en el mar, el bautismo directo en la costa de Estepona (a entre 5 y 10 metros de profundidad con instructor) es la opción más rápida y económica. Si prefieres probar primero a respirar bajo el agua sin olas ni corriente, el doble bautismo de piscina + mar te permite practicar los ejercicios básicos en piscina antes de la salida al Mediterráneo."
      }
    ]
  },
  torremolinos: {
    heading: "Bucear en Torremolinos y Benalmádena: Laja Bermeja, cursos PADI y bautismos",
    paragraphs: [
      "El tramo costero que une La Carihuela (Torremolinos) con Puerto Marina (Benalmádena) concentra la actividad subacuática más accesible del área metropolitana de Málaga. A pocos minutos de navegación desde el puerto deportivo se encuentra la Laja Bermeja, un arrecife sumergido de roca escalonada entre los 8 y los 22 metros repleto de gorgonias, morenas, pulpos y cardúmenes de espáridos.",
      "Es una ubicación ideal si te alojas en Torremolinos, Benalmádena o Fuengirola y buscas sacarte el título Scuba Diver u Open Water Diver de PADI o reservar una primera experiencia subacuática sin desplazarte hasta Nerja o La Herradura."
    ],
    extraFaqs: [
      {
        question: "¿Desde dónde salen las inmersiones y cursos de buceo en Torremolinos?",
        answer: "Las prácticas y salidas en barco para quienes se alojan en Torremolinos se operan entre el litoral de La Carihuela y el vecino puerto deportivo de Benalmádena (Puerto Marina), situado a menos de 10 minutos, desde donde se accede a los arrecifes de la Laja Bermeja y la bahía de Málaga."
      }
    ]
  },
  "santa-pola": {
    heading: "Buceo en Santa Pola y salidas en barco a la Reserva Marina de la Isla de Tabarca",
    paragraphs: [
      "Santa Pola es el puerto natural más cercano a la Isla de Tabarca (primera reserva marina de España, situada a apenas 3 millas náuticas del cabo de Santa Pola). Esto convierte a las escuelas de Santa Pola en la base favorita tanto para hacer un primer bautismo de buceo (Discover Scuba Diving o Basic Diver) en aguas tranquilas y cristalinas como para embarcar hacia los bajos exteriores de la reserva.",
      "Gracias a las extensas praderas de Posidonia oceanica que rodean el cabo y el freu de Tabarca, la visibilidad suele ser excelente de primavera a otoño, con presencia constante de meros, doradas, espetones, pulpos y estrellas rojas."
    ],
    extraFaqs: [
      {
        question: "¿Se puede reservar un bautismo de buceo en Santa Pola sin experiencia previa?",
        answer: "Sí. En Santa Pola puedes realizar tanto el bautismo Discover Scuba Diving como el programa Basic Diver de 6 horas con teoría básica, sesión de adaptación y salida al mar junto a un instructor titulado, con todo el equipo y el seguro incluidos."
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
