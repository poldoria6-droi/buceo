export type Species = {
  slug:string; name:string; scientificName:string; category:string; description:string;
  habitat:string; depth?:{min:number;max:number;sourceUrl:string}; size?:string; diet?:string; behavior?:string;
  conservation?:string; sources:string[]; checkedAt:string;
  image:{url:string;originalUrl:string;sourceUrl:string;author:string;license:string;licenseUrl:string;alt:string;width?:number;height?:number};
  occurrences:{name:string;region:string;basin:string;lat:number;lng:number;precision:"Zona"|"Punto";sourceUrl:string;note:string}[];
};
export const species:Species[] = [
  {
    "slug": "angelote",
    "name": "Angelote",
    "scientificName": "Squatina squatina",
    "category": "Tiburones y rayas",
    "description": "Canarias es un núcleo importante para la conservación del angelote. Su presencia en el archipiélago está estudiada por Angel Shark Project. Los registros históricos de una zona no aseguran encontrarlo durante una inmersión.",
    "habitat": "Hábitats costeros canarios estudiados por el proyecto de conservación.",
    "conservation": "Angel Shark Project lo identifica como críticamente amenazado y protegido en España. Sigue su código de conducta y registra los avistamientos sin perturbar al animal.",
    "sources": [
      "https://angelsharknetwork.com/canaryislands/",
      "https://accedacris.ulpgc.es/handle/10553/35337"
    ],
    "image": {
      "url": "/images/fauna/angelote.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Squatina_squatina_lanzarote.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Squatina_squatina_lanzarote.jpg",
      "author": "greenacre8; ajuste de color: Togabi",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "alt": "Angelote frente a Playa Chica, Lanzarote",
      "width": 800,
      "height": 600
    },
    "occurrences": [
      {
        "name": "Entorno de Playa Chica",
        "region": "Canarias",
        "basin": "Atlántico",
        "lat": 28.92,
        "lng": -13.668,
        "precision": "Zona",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Squatina_squatina_lanzarote.jpg",
        "note": "Fotografía del 6 de noviembre de 2006 frente a la playa. Ubicación aproximada; no acredita presencia actual en los puntos cercanos."
      },
      {
        "name": "Las Teresitas",
        "region": "Canarias",
        "basin": "Atlántico",
        "lat": 28.508,
        "lng": -16.185,
        "precision": "Zona",
        "sourceUrl": "https://angelsharknetwork.com/canaryislands/",
        "note": "Área de cría confirmada por Angel Shark Project. Ubicación aproximada; no recomienda una actividad ni garantiza avistamientos."
      }
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "slug": "mero-moreno",
    "name": "Mero moreno",
    "scientificName": "Epinephelus marginatus",
    "category": "Peces",
    "description": "Pez de boca grande y cuerpo pardo con manchas claras. Su vida solitaria y territorial está ligada a refugios en roca. El rango biológico de profundidad es más amplio que el de una inmersión recreativa.",
    "habitat": "Fondos rocosos con grietas y cuevas.",
    "depth": {
      "min": 10,
      "max": 400,
      "sourceUrl": "https://www.aquariumbcn.com/especies/peces-oseos/mero-moreno/"
    },
    "size": "Hasta 150 cm según L’Aquàrium.",
    "diet": "Carnívoro.",
    "behavior": "Solitario y territorial.",
    "sources": [
      "https://www.aquariumbcn.com/especies/peces-oseos/mero-moreno/"
    ],
    "image": {
      "url": "/images/fauna/mero-moreno.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Epinephelus_marginatus_Crete.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Epinephelus_marginatus_Crete.jpg",
      "author": "Max Ryazanov; edición: Mayra SA",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "alt": "Mero moreno; fotografía de referencia tomada en Creta",
      "width": 960,
      "height": 470
    },
    "occurrences": [],
    "checkedAt": "2026-10-04"
  },
  {
    "slug": "morena",
    "name": "Morena",
    "scientificName": "Muraena helena",
    "category": "Peces",
    "description": "Pez de cuerpo alargado que se refugia entre las rocas. Puede verse asomado en una grieta; no introduzcas la mano ni acerques equipo a su refugio.",
    "habitat": "Grietas y cavidades de fondos rocosos.",
    "depth": {
      "min": 10,
      "max": 80,
      "sourceUrl": "https://www.aquariumbcn.com/especies/peces-oseos/morena/"
    },
    "size": "Hasta 150 cm según L’Aquàrium.",
    "diet": "Peces, crustáceos y cefalópodos.",
    "behavior": "Territorial, solitaria y con alimentación al crepúsculo.",
    "sources": [
      "https://www.aquariumbcn.com/especies/peces-oseos/morena/"
    ],
    "image": {
      "url": "/images/fauna/morena.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Morena_del_Mediterr%C3%A1neo_%28Muraena_helena%29%2C_Cabo_de_Palos%2C_Espa%C3%B1a%2C_2022-07-17%2C_DD_59.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Morena_del_Mediterráneo_(Muraena_helena),_Cabo_de_Palos,_España,_2022-07-17,_DD_59.jpg",
      "author": "Diego Delso, delso.photo",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": "Morena fotografiada en Cabo de Palos",
      "width": 960,
      "height": 960
    },
    "occurrences": [
      {
        "name": "Cabo de Palos",
        "region": "Murcia",
        "basin": "Mediterráneo",
        "lat": 37.63,
        "lng": -0.7,
        "precision": "Zona",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Morena_del_Mediterráneo_(Muraena_helena),_Cabo_de_Palos,_España,_2022-07-17,_DD_59.jpg",
        "note": "Fotografía del 17 de julio de 2022. La fuente no identifica el punto de inmersión; se representa la zona de forma aproximada."
      }
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "slug": "pulpo-comun",
    "name": "Pulpo común",
    "scientificName": "Octopus vulgaris",
    "category": "Cefalópodos",
    "description": "Cefalópodo con ocho brazos provistos de ventosas. Cambia de color y textura para camuflarse y suele permanecer oculto durante el día. Obsérvalo sin sacarlo de su refugio.",
    "habitat": "Fondos rocosos con refugios.",
    "diet": "Crustáceos, moluscos y peces.",
    "behavior": "Actividad principalmente nocturna; puede expulsar tinta para defenderse.",
    "sources": [
      "https://www.aquariumbcn.com/especies/invertebrados/pulpo-comun/"
    ],
    "image": {
      "url": "/images/fauna/pulpo-comun.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Octopus_vulgaris_Cuvier%2C_1797.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Octopus_vulgaris_Cuvier,_1797.jpg",
      "author": "Parent Géry",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Detalle del pulpo común; imagen de referencia",
      "width": 960,
      "height": 1422
    },
    "occurrences": [],
    "checkedAt": "2026-10-04"
  },
  {
    "slug": "gorgonia-roja",
    "name": "Gorgonia roja",
    "scientificName": "Paramuricea clavata",
    "category": "Cnidarios y corales",
    "description": "Colonia de pólipos con aspecto de abanico ramificado, de tonos rojos y a veces extremos amarillos. Recibe alimento de la corriente. Mantén buena flotabilidad y evita rozarla.",
    "habitat": "Sustratos donde las colonias reciben corriente.",
    "size": "Colonias de hasta 1 m según L’Aquàrium.",
    "diet": "Zooplancton.",
    "behavior": "Animal colonial fijado al sustrato.",
    "sources": [
      "https://www.aquariumbcn.com/especies/invertebrados/gorgonia-roja/"
    ],
    "image": {
      "url": "/images/fauna/gorgonia-roja.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/4/47/Violescent_sea-whip_%28Paramuricea_clavata%29%2C_Ferranelles%2C_Medes_Islands%2C_Spain.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Violescent_sea-whip_(Paramuricea_clavata),_Ferranelles,_Medes_Islands,_Spain.jpg",
      "author": "Jouni Kuisma / DiveCodex, divecodex.com",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": "Gorgonia roja en Les Ferranelles, Illes Medes",
      "width": 960,
      "height": 1281
    },
    "occurrences": [
      {
        "name": "Les Ferranelles, Illes Medes",
        "region": "Cataluña",
        "basin": "Mediterráneo",
        "lat": 42.0421,
        "lng": 3.22552,
        "precision": "Punto",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Violescent_sea-whip_(Paramuricea_clavata),_Ferranelles,_Medes_Islands,_Spain.jpg",
        "note": "La fuente fotográfica identifica Les Ferranelles y sus coordenadas. Registro histórico de 2011; no acredita el estado actual de las colonias."
      }
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "slug": "tortuga-boba",
    "name": "Tortuga boba",
    "scientificName": "Caretta caretta",
    "category": "Reptiles marinos",
    "description": "Tortuga marina de la familia Cheloniidae presente en el mar Mediterráneo y los océanos Atlántico, Pacífico e Índico. Se reconoce por su cabeza ancha y su caparazón de tonos pardos y rojizos.",
    "habitat": "Aguas abiertas pelágicas, fondos costeros y praderas marinas del Mediterráneo y el Atlántico.",
    "diet": "Invertebrados bentónicos, medusas, crustáceos y moluscos.",
    "behavior": "Especie migratoria que respira en superficie y alterna desplazamientos pelágicos con zonas costeras de alimentación.",
    "conservation": "Especie protegida en España y la Unión Europea. Mantén distancia en caso de avistamiento y nunca interceptes su ascenso a superficie.",
    "sources": [
      "https://es.wikipedia.org/wiki/Caretta_caretta",
      "https://commons.wikimedia.org/wiki/File:Loggerhead_sea_turtle.jpg"
    ],
    "image": {
      "url": "/images/fauna/tortuga-boba.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Loggerhead_sea_turtle.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Loggerhead_sea_turtle.jpg",
      "author": "ukanda",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "alt": "Tortuga boba (Caretta caretta)",
      "width": 960,
      "height": 638
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "barracuda",
    "name": "Espetón (barracuda mediterránea)",
    "scientificName": "Sphyraena viridensis",
    "category": "Peces",
    "description": "Pez perciforme de la familia Sphyraenidae —conocido como espetón en el Mediterráneo y bicuda en Canarias— de cuerpo alargado, plateado y con bandas transversales oscuras en el dorso.",
    "habitat": "Aguas abiertas sobre arrecifes rocosos, puntas y bajos con corriente en el Mediterráneo y el Atlántico oriental.",
    "diet": "Depredador piscívoro; se alimenta principalmente de peces y cefalópodos.",
    "behavior": "Suele observarse en pequeños grupos o formando bancos de decenas o más de cien individuos en la columna de agua.",
    "sources": [
      "https://es.wikipedia.org/wiki/Sphyraena_viridensis",
      "https://commons.wikimedia.org/wiki/File:Sphyraena_viridensis_678403639.jpg"
    ],
    "image": {
      "url": "/images/fauna/barracuda.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Sphyraena_viridensis_678403639.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sphyraena_viridensis_678403639.jpg",
      "author": "Xavier Mas",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "alt": "Espetón (barracuda mediterránea) (Sphyraena viridensis)",
      "width": 960,
      "height": 648
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "pez-luna",
    "name": "Pez luna",
    "scientificName": "Mola mola",
    "category": "Peces",
    "description": "Pez pelágico tetraodontiforme de la familia Molidae y uno de los peces óseos más pesados del mundo. Tiene el cuerpo aplastado lateralmente y, al extender sus aletas dorsal y anal, alcanza un perfil casi tan alto como largo.",
    "habitat": "Aguas abiertas templadas y tropicales del Mediterráneo y el Atlántico; ocasionalmente se acerca a bajos costeros.",
    "size": "Puede superar los 3 m de longitud y 1.000 kg de peso medio en ejemplares grandes.",
    "diet": "Zooplancton gelatinoso, medusas, salpas y pequeños crustáceos o peces.",
    "behavior": "Nadador pelágico que en ocasiones asciende cerca de la superficie o acude a estaciones de limpieza costeras.",
    "sources": [
      "https://es.wikipedia.org/wiki/Mola_mola",
      "https://commons.wikimedia.org/wiki/File:Mola_mola.jpg"
    ],
    "image": {
      "url": "/images/fauna/pez-luna.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/9/98/Mola_mola.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mola_mola.jpg",
      "author": "U.S. National Oceanic and Atmospheric Administration",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Pez luna (Mola mola)",
      "width": 960,
      "height": 750
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "raya-pastinaca",
    "name": "Raya látigo común (pastinaca)",
    "scientificName": "Dasyatis pastinaca",
    "category": "Tiburones y rayas",
    "description": "Elasmobranquio rajiforme de la familia Dasyatidae distribuido por todo el mar Mediterráneo, el mar Negro y el Atlántico oriental. Presenta disco romboidal y cola larga provista de aguijón dentado.",
    "habitat": "Fondos arenosos y fangosos costeros, a menudo próxima a arrecifes rocosos o praderas marinas.",
    "diet": "Crustáceos, peces bentónicos, cefalópodos y moluscos bivalvos.",
    "behavior": "Descansa posada o semienterrada en el sedimento; no te acerques en exceso para evitar que utilice su cola defensiva.",
    "sources": [
      "https://es.wikipedia.org/wiki/Dasyatis_pastinaca",
      "https://commons.wikimedia.org/wiki/File:Black_sea_fauna_stingray_01.jpg"
    ],
    "image": {
      "url": "/images/fauna/raya-pastinaca.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/4/46/Black_sea_fauna_stingray_01.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Black_sea_fauna_stingray_01.jpg",
      "author": "Florin DUMITRESCU",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Raya látigo común (pastinaca) (Dasyatis pastinaca)",
      "width": 504,
      "height": 379
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "caballito-de-mar",
    "name": "Caballito de mar común",
    "scientificName": "Hippocampus hippocampus",
    "category": "Peces",
    "description": "Pequeño pez óseo de la familia Syngnathidae de cabeza en ángulo recto respecto al cuerpo, hocico tubular corto y cola prensil con la que se sujeta a la vegetación submarina.",
    "habitat": "Fondos someros con algas, praderas de fanerógamas marinas y sustratos mixtos del Mediterráneo y Atlántico oriental.",
    "diet": "Pequeños crustáceos y zooplancton que aspira mediante su hocico tubular.",
    "behavior": "Se camufla inmóvil sujeto a hojas o algas; como en el resto del género, el macho incuba los huevos en su bolsa ventral.",
    "conservation": "Especie incluida en el Listado de Especies Silvestres en Régimen de Protección Especial en España y en el Apéndice II de CITES. No utilices flash a corta distancia ni alteres su sujeción.",
    "sources": [
      "https://es.wikipedia.org/wiki/Hippocampus_hippocampus",
      "https://commons.wikimedia.org/wiki/File:Hippocampus_hippocampus_(on_Ascophyllum_nodosum).jpg"
    ],
    "image": {
      "url": "/images/fauna/caballito-de-mar.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/2/25/Hippocampus_hippocampus_%28on_Ascophyllum_nodosum%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hippocampus_hippocampus_(on_Ascophyllum_nodosum).jpg",
      "author": "Hans Hillewaert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Caballito de mar común (Hippocampus hippocampus)",
      "width": 960,
      "height": 1280
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "vaquita-suiza",
    "name": "Vaquita suiza",
    "scientificName": "Peltodoris atromaculata",
    "category": "Moluscos",
    "description": "Molusco gasterópodo nudibranquio de la familia Discodorididae, inconfundible por su manto blanco salpicado de manchas irregulares de color pardo oscuro o negro y su penacho branquial retráctil.",
    "habitat": "Paredes rocosas umbrías, entradas de cuevas y fondos coralígenos del Mediterráneo y Atlántico próximo, estrechamente asociada a la esponja Petrosia ficiformis.",
    "diet": "Se alimenta casi exclusivamente de los tejidos de la esponja piedra (Petrosia ficiformis).",
    "behavior": "Bentónica y de desplazamiento muy lento sobre las esponjas de las que se nutre.",
    "sources": [
      "https://es.wikipedia.org/wiki/Peltodoris_atromaculata",
      "https://commons.wikimedia.org/wiki/File:Discodoris_atromaculata.jpg"
    ],
    "image": {
      "url": "/images/fauna/vaquita-suiza.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Discodoris_atromaculata.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Discodoris_atromaculata.jpg",
      "author": "Anders Finn Jørgensen from Copenhagen, Denmark",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "alt": "Vaquita suiza (Peltodoris atromaculata)",
      "width": 960,
      "height": 730
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "sepia",
    "name": "Sepia común",
    "scientificName": "Sepia officinalis",
    "category": "Cefalópodos",
    "description": "Molusco cefalópodo decapodiforme de la familia Sepiidae, provisto de cuerpo ovalado rodeado por una aleta ondulante y una concha interna calcárea (jibión) con la que regula su flotabilidad.",
    "habitat": "Fondos arenosos, fangosos y praderas de posidonia desde aguas someras en el Mediterráneo y el Atlántico oriental.",
    "diet": "Crustáceos (especialmente cangrejos y camarones), peces pequeños y otros moluscos.",
    "behavior": "Cambia rápidamente de color y textura mediante cromatóforos para mimetizarse con el fondo o comunicarse.",
    "sources": [
      "https://es.wikipedia.org/wiki/Sepia_officinalis",
      "https://commons.wikimedia.org/wiki/File:Sepia_com%C3%BAn_(Sepia_officinalis),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-21,_DD_62.jpg"
    ],
    "image": {
      "url": "/images/fauna/sepia.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/6/65/Sepia_com%C3%BAn_%28Sepia_officinalis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-21%2C_DD_62.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sepia_com%C3%BAn_(Sepia_officinalis),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-21,_DD_62.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Sepia común (Sepia officinalis)",
      "width": 960,
      "height": 640
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "denton",
    "name": "Dentón común",
    "scientificName": "Dentex dentex",
    "category": "Peces",
    "description": "Espárido depredador robusto de dorso azulado o verdoso y flancos plateados, cuyo nombre alude a los fuertes dientes cónicos visibles en la parte frontal de sus mandíbulas.",
    "habitat": "Fondos rocosos, acantilados submarinos y cantiles cerca de praderas de posidonia en el Mediterráneo, Cantábrico y Atlántico oriental.",
    "diet": "Peces, cefalópodos y moluscos.",
    "behavior": "Depredador activo que patrulla en solitario o en pequeños grupos sobre relieves rocosos y zonas de corriente.",
    "sources": [
      "https://es.wikipedia.org/wiki/Dentex_dentex",
      "https://commons.wikimedia.org/wiki/File:Dentex_dentex_Canary.jpg"
    ],
    "image": {
      "url": "/images/fauna/denton.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/9/92/Dentex_dentex_Canary.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dentex_dentex_Canary.jpg",
      "author": "michael_bommerer",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "alt": "Dentón común (Dentex dentex)",
      "width": 960,
      "height": 640
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "corvina",
    "name": "Corvina negra (corvallo)",
    "scientificName": "Sciaena umbra",
    "category": "Peces",
    "description": "Pez de la familia Sciaenidae de dorso arqueado, coloración pardo-bronceada con reflejos metálicos y aletas pélvicas y anal de tono negro ribeteadas en blanco.",
    "habitat": "Fondos rocosos con grietas, bóvedas, extraplomos y cercanías de praderas de posidonia en el Mediterráneo y el Atlántico oriental.",
    "diet": "Crustáceos, pequeños peces e invertebrados bentónicos.",
    "behavior": "Gregaria y de nado pausado; durante el día suele reunirse en pequeños grupos al abrigo de cornisas y cavidades rocosas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Sciaena_umbra",
      "https://commons.wikimedia.org/wiki/File:Corvinas_negras_(Sciaena_umbra),_Cabo_de_Palos,_Espa%C3%B1a,_2022-07-14,_DD_52_(cropped).jpg"
    ],
    "image": {
      "url": "/images/fauna/corvina.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Corvinas_negras_%28Sciaena_umbra%29%2C_Cabo_de_Palos%2C_Espa%C3%B1a%2C_2022-07-14%2C_DD_52_%28cropped%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Corvinas_negras_(Sciaena_umbra),_Cabo_de_Palos,_Espa%C3%B1a,_2022-07-14,_DD_52_(cropped).jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Corvina negra (corvallo) (Sciaena umbra)",
      "width": 960,
      "height": 641
    },
    "occurrences": [
      {
        "name": "Cabo de Palos",
        "region": "Murcia",
        "basin": "Mediterráneo",
        "lat": 37.63,
        "lng": -0.7,
        "precision": "Zona",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Corvinas_negras_(Sciaena_umbra),_Cabo_de_Palos,_Espa%C3%B1a,_2022-07-14,_DD_52_(cropped).jpg",
        "note": "Fotografía del 14 de julio de 2022 en Cabo de Palos. La fuente no identifica el punto de inmersión exacto; se representa la zona de forma aproximada."
      }
    ],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "sargo-comun",
    "name": "Sargo común",
    "scientificName": "Diplodus sargus",
    "category": "Peces",
    "description": "Espárido muy abundante en el Mediterráneo y el Atlántico oriental, de cuerpo ovalado y comprimido lateralmente, color plateado con bandas verticales oscuras y una mancha negra en el pedúnculo caudal.",
    "habitat": "Fondos rocosos costeros, escolleras, rompientes y praderas de posidonia.",
    "diet": "Omnívoro bentónico: moluscos, crustáceos, erizos de mar y algas.",
    "behavior": "Forma cardúmenes activos o nada en pequeños grupos cerca de paredes y bloques rocosos.",
    "sources": [
      "https://es.wikipedia.org/wiki/Diplodus_sargus",
      "https://commons.wikimedia.org/wiki/File:Sargo_com%C3%BAn_(Diplodus_sargus),_Madeira,_Portugal,_2019-05-31,_DD_29.jpg"
    ],
    "image": {
      "url": "/images/fauna/sargo-comun.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Sargo_com%C3%BAn_%28Diplodus_sargus%29%2C_Madeira%2C_Portugal%2C_2019-05-31%2C_DD_29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sargo_com%C3%BAn_(Diplodus_sargus),_Madeira,_Portugal,_2019-05-31,_DD_29.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Sargo común (Diplodus sargus)",
      "width": 960,
      "height": 581
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "salpa",
    "name": "Salema (salpa)",
    "scientificName": "Sarpa salpa",
    "category": "Peces",
    "description": "Pez perciforme de la familia Sparidae fácil de identificar por su cuerpo ovalado plateado recorrido por entre diez y doce líneas longitudinales doradas de la cabeza a la cola.",
    "habitat": "Fondos rocosos iluminados y praderas de Posidonia oceanica a poca y media profundidad en el Mediterráneo y Atlántico oriental.",
    "diet": "Principalmente herbívora en estado adulto; ramonea algas y hojas de fanerógamas marinas.",
    "behavior": "Muy gregaria; se desplaza en bancos compactos y coordinados que pastan sobre las rocas y la posidonia.",
    "sources": [
      "https://es.wikipedia.org/wiki/Sarpa_salpa",
      "https://commons.wikimedia.org/wiki/File:Salema_(Sarpa_salpa),_Catania,_Sicilia,_Italia,_2025-04-04,_DD_90.jpg"
    ],
    "image": {
      "url": "/images/fauna/salpa.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Salema_%28Sarpa_salpa%29%2C_Catania%2C_Sicilia%2C_Italia%2C_2025-04-04%2C_DD_90.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Salema_(Sarpa_salpa),_Catania,_Sicilia,_Italia,_2025-04-04,_DD_90.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Salema (salpa) (Sarpa salpa)",
      "width": 960,
      "height": 640
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "castanuela",
    "name": "Castañuela",
    "scientificName": "Chromis chromis",
    "category": "Peces",
    "description": "Pequeño pez de la familia Pomacentridae omnipresente en el Mediterráneo y el Atlántico oriental. Los adultos son de color pardo oscuro o negruzco con cola ahorquillada, mientras que los alevines lucen un intenso azul eléctrico.",
    "habitat": "En la columna de agua sobre fondos rocosos, paredes y praderas de posidonia desde la superficie hasta cotas medias.",
    "diet": "Zooplancton y pequeños organismos en suspensión.",
    "behavior": "Forma grandes nubes en aguas abiertas sobre el arrecife y se repliega rápidamente hacia las grietas ante cualquier amenaza.",
    "sources": [
      "https://es.wikipedia.org/wiki/Chromis_chromis",
      "https://commons.wikimedia.org/wiki/File:Mediterranean_Damselfish,_Var,_Provence-Alpes-C%C3%B4te_d%27Azur,_FR_imported_from_iNaturalist_photo_140272057_(cropped).jpg"
    ],
    "image": {
      "url": "/images/fauna/castanuela.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Mediterranean_Damselfish%2C_Var%2C_Provence-Alpes-C%C3%B4te_d%27Azur%2C_FR_imported_from_iNaturalist_photo_140272057_%28cropped%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mediterranean_Damselfish,_Var,_Provence-Alpes-C%C3%B4te_d%27Azur,_FR_imported_from_iNaturalist_photo_140272057_(cropped).jpg",
      "author": "Julien Renoult",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "alt": "Castañuela (Chromis chromis)",
      "width": 960,
      "height": 621
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "serrano",
    "name": "Serrano",
    "scientificName": "Serranus scriba",
    "category": "Peces",
    "description": "Pez de la familia Serranidae emparentado con los meros, reconocible por las bandas verticales oscuras del cuerpo, una mancha azulada o violácea muy característica en el vientre y dibujos vermiculados en la cabeza.",
    "habitat": "Fondos rocosos costeros y praderas de posidonia en el Mediterráneo, el mar Negro y el Atlántico oriental.",
    "diet": "Pequeños peces, crustáceos y cefalópodos.",
    "behavior": "Territorial, solitario y hermafrodita simultáneo; suele vigilar su entorno detenido a poca distancia del sustrato.",
    "sources": [
      "https://es.wikipedia.org/wiki/Serranus_scriba",
      "https://commons.wikimedia.org/wiki/File:Serranidae_-_Serranus_scriba.JPG"
    ],
    "image": {
      "url": "/images/fauna/serrano.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Serranidae_-_Serranus_scriba.JPG",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Serranidae_-_Serranus_scriba.JPG",
      "author": "Hectonichus",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Serrano (Serranus scriba)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "doncella",
    "name": "Doncella (julia)",
    "scientificName": "Coris julis",
    "category": "Peces",
    "description": "Lábrido alargado de viva coloración muy común en aguas someras del Mediterráneo y del Atlántico oriental. Presenta marcado dimorfismo cromático, con ejemplares terminales dotados de una banda lateral anaranjada o turquesa en zigzag y una mancha oscura tras la aleta pectoral.",
    "habitat": "Fondos rocosos poco profundos, praderas de posidonia y claros de arena cercanos.",
    "size": "Hasta 25 cm de longitud.",
    "diet": "Pequeños crustáceos, gasterópodos, erizos juveniles y gusanos marinos.",
    "behavior": "Activa durante el día; por la noche o cuando percibe peligro se entierra rápidamente bajo la arena.",
    "sources": [
      "https://es.wikipedia.org/wiki/Coris_julis",
      "https://commons.wikimedia.org/wiki/File:Doncella_(Coris_julis),_Cabo_de_Palos,_Espa%C3%B1a,_2022-07-17,_DD_69.jpg"
    ],
    "image": {
      "url": "/images/fauna/doncella.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Doncella_%28Coris_julis%29%2C_Cabo_de_Palos%2C_Espa%C3%B1a%2C_2022-07-17%2C_DD_69.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Doncella_(Coris_julis),_Cabo_de_Palos,_Espa%C3%B1a,_2022-07-17,_DD_69.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Doncella (julia) (Coris julis)",
      "width": 960,
      "height": 640
    },
    "occurrences": [
      {
        "name": "Cabo de Palos",
        "region": "Murcia",
        "basin": "Mediterráneo",
        "lat": 37.63,
        "lng": -0.7,
        "precision": "Zona",
        "sourceUrl": "https://commons.wikimedia.org/wiki/File:Doncella_(Coris_julis),_Cabo_de_Palos,_Espa%C3%B1a,_2022-07-17,_DD_69.jpg",
        "note": "Fotografía del 17 de julio de 2022 en Cabo de Palos. La fuente no identifica el punto de inmersión exacto; se representa la zona de forma aproximada."
      }
    ],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "escorpora",
    "name": "Cabracho (escórpora)",
    "scientificName": "Scorpaena scrofa",
    "category": "Peces",
    "description": "Pez escorpénido bentónico de color rojizo o anaranjado jaspeado, cabeza grande recubierta de apéndices cutáneos y radios espinosos conectados a glándulas venenosas.",
    "habitat": "Fondos rocosos, coralígenos, detríticos y lechos de arena o posidonia entre los 10 y 500 m de profundidad.",
    "depth": {
      "min": 10,
      "max": 500,
      "sourceUrl": "https://es.wikipedia.org/wiki/Scorpaena_scrofa"
    },
    "size": "Puede alcanzar cerca de 3 kg de peso (habitualmente menos de 1,5–2 kg) y hasta 50 cm.",
    "diet": "Peces, crustáceos y moluscos que captura al acecho.",
    "behavior": "Solitario y maestro del camuflaje; permanece inmóvil sobre la roca. No apoyes nunca las manos en el fondo, ya que su picadura es muy dolorosa.",
    "sources": [
      "https://es.wikipedia.org/wiki/Scorpaena_scrofa",
      "https://commons.wikimedia.org/wiki/File:Red_Scorpionfish_(cropped).jpg"
    ],
    "image": {
      "url": "/images/fauna/escorpora.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/6/60/Red_Scorpionfish_%28cropped%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Red_Scorpionfish_(cropped).jpg",
      "author": "Vicmicallef",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Cabracho (escórpora) (Scorpaena scrofa)",
      "width": 960,
      "height": 545
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "congrio",
    "name": "Congrio común",
    "scientificName": "Conger conger",
    "category": "Peces",
    "description": "Pez anguiliforme de la familia Congridae de cuerpo cilíndrico sin escamas, piel grisácea o negruzca y una larga aleta dorsal continua unida a la caudal y la anal.",
    "habitat": "Grietas profundas de arrecifes rocosos, escolleras y estructuras de pecios en el Mediterráneo y el Atlántico norte oriental.",
    "diet": "Carnívoro nocturno: peces, cefalópodos (pulpos y calamares) y crustáceos.",
    "behavior": "Durante el día permanece refugiado en oquedades y tuberías de barcos hundidos, saliendo a cazar al anochecer.",
    "sources": [
      "https://es.wikipedia.org/wiki/Conger_conger",
      "https://commons.wikimedia.org/wiki/File:European_conger.jpg"
    ],
    "image": {
      "url": "/images/fauna/congrio.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/European_conger.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:European_conger.jpg",
      "author": "West Brom 4ever",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Congrio común (Conger conger)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "salmonete-de-roca",
    "name": "Salmonete de roca",
    "scientificName": "Mullus surmuletus",
    "category": "Peces",
    "description": "Pez perciforme de la familia Mullidae de tonos rosados y rojizos con bandas longitudinales amarillas y un par de largos barbillones táctiles bajo el mentón.",
    "habitat": "Fondos mixtos de arena, grava, praderas de posidonia y base de escolleras rocosas en el Mediterráneo y el Atlántico norte.",
    "diet": "Pequeños crustáceos, gusanos poliquetos y moluscos del sedimento.",
    "behavior": "Rastrea incansablemente los fondos arenosos con sus barbillones sensoriales, a menudo acompañado de sargos o lábridos que aprovechan las presas levantadas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Mullus_surmuletus",
      "https://commons.wikimedia.org/wiki/File:Mullus_surmuletus.jpg"
    ],
    "image": {
      "url": "/images/fauna/salmonete-de-roca.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mullus_surmuletus.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mullus_surmuletus.jpg",
      "author": "Hans Hillewaert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Salmonete de roca (Mullus surmuletus)",
      "width": 960,
      "height": 540
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "dorada",
    "name": "Dorada",
    "scientificName": "Sparus aurata",
    "category": "Peces",
    "description": "Espárido costero de cuerpo alto y comprimido, flancos plateados y una franja dorada inconfundible entre ambos ojos acompañada de una mancha negra sobre el opérculo.",
    "habitat": "Fondos arenosos litorales, praderas de fanerógamas marinas, escolleras y estuarios del Mediterráneo y el Atlántico oriental.",
    "diet": "Potente dentición molariforme adaptada a triturar moluscos bivalvos, gasterópodos y crustáceos.",
    "behavior": "Se desplaza en solitario o en pequeños grupos buscando alimento sobre fondos blandos y rocosos someros.",
    "sources": [
      "https://es.wikipedia.org/wiki/Sparus_aurata",
      "https://commons.wikimedia.org/wiki/File:Sparus_aurata,_Alpes-Maritimes,_Provence-Alpes-C%C3%B4te_d%27Azur,_FR_imported_from_iNaturalist_photo_207799710.jpg"
    ],
    "image": {
      "url": "/images/fauna/dorada.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sparus_aurata%2C_Alpes-Maritimes%2C_Provence-Alpes-C%C3%B4te_d%27Azur%2C_FR_imported_from_iNaturalist_photo_207799710.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sparus_aurata,_Alpes-Maritimes,_Provence-Alpes-C%C3%B4te_d%27Azur,_FR_imported_from_iNaturalist_photo_207799710.jpg",
      "author": "Julien Renoult",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "alt": "Dorada (Sparus aurata)",
      "width": 960,
      "height": 640
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "lubina",
    "name": "Lubina (róbalo)",
    "scientificName": "Dicentrarchus labrax",
    "category": "Peces",
    "description": "Pez perciforme de la familia Moronidae de cuerpo fusiforme e hidrodinámico, dorso gris plomizo, vientre plateado y dos aletas dorsales bien diferenciadas.",
    "habitat": "Aguas costeras oxigenadas, rompientes rocosas, playas de arena y desembocaduras en el Mediterráneo y el Atlántico desde África hasta Noruega.",
    "diet": "Peces gregarios (sardinas, boquerones), crustáceos y cefalópodos.",
    "behavior": "Depredador ágil y desconfiado que aprovecha las corrientes y la espuma de la costa para cazar.",
    "sources": [
      "https://es.wikipedia.org/wiki/Dicentrarchus_labrax",
      "https://commons.wikimedia.org/wiki/File:Moronidae_Dicentrarchus_labrax_1.jpg"
    ],
    "image": {
      "url": "/images/fauna/lubina.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/Moronidae_Dicentrarchus_labrax_1.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Moronidae_Dicentrarchus_labrax_1.jpg",
      "author": "NasserHalaweh",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Lubina (róbalo) (Dicentrarchus labrax)",
      "width": 960,
      "height": 639
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "pez-limon",
    "name": "Pez limón (seriola o medregal)",
    "scientificName": "Seriola dumerili",
    "category": "Peces",
    "description": "Gran carángido pelágico —llamado pez limón, seriola, lecha o medregal en Canarias— de cuerpo estilizado plateado-azulado con una banda oblicua oscura sobre el ojo y reflejos amarillentos en los flancos y la cola.",
    "habitat": "Aguas abiertas en torno a bajos submarinos, cabos expuestos a corrientes y pecios en el Mediterráneo y el Atlántico.",
    "diet": "Peces pelágicos (jureles, caballas, bogas) y cefalópodos.",
    "behavior": "Nadador veloz y curioso que patrulla en grupos o en solitario las zonas de corriente y las nubes de peces pasto.",
    "sources": [
      "https://es.wikipedia.org/wiki/Seriola_dumerili",
      "https://commons.wikimedia.org/wiki/File:Pez_lim%C3%B3n_(Seriola_dumerili),_Madeira,_Portugal,_2019-05-31,_DD_31.jpg"
    ],
    "image": {
      "url": "/images/fauna/pez-limon.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/7/71/Pez_lim%C3%B3n_%28Seriola_dumerili%29%2C_Madeira%2C_Portugal%2C_2019-05-31%2C_DD_31.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pez_lim%C3%B3n_(Seriola_dumerili),_Madeira,_Portugal,_2019-05-31,_DD_31.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Pez limón (seriola o medregal) (Seriola dumerili)",
      "width": 960,
      "height": 629
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "tembladera",
    "name": "Tembladera (raya torpedo)",
    "scientificName": "Torpedo marmorata",
    "category": "Tiburones y rayas",
    "description": "Raya eléctrica de la familia Torpedinidae con disco casi circular de aspecto jaspeado o marmóreo pardo y cola corta y musculosa rematada por una aleta caudal triangular.",
    "habitat": "Fondos arenosos, fangosos y praderas marinas costeras del Atlántico oriental y el mar Mediterráneo.",
    "diet": "Peces bentónicos y crustáceos que paraliza mediante órganos eléctricos situados a los lados de la cabeza.",
    "behavior": "De hábitos principalmente nocturnos; durante el día descansa enterrada en la arena dejando visibles solo los ojos y espiráculos. No debe tocarse.",
    "sources": [
      "https://es.wikipedia.org/wiki/Torpedo_marmorata",
      "https://commons.wikimedia.org/wiki/File:Torpedo_marmorata2.jpg"
    ],
    "image": {
      "url": "/images/fauna/tembladera.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/1/10/Torpedo_marmorata2.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Torpedo_marmorata2.jpg",
      "author": "Philippe Guillaume",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "alt": "Tembladera (raya torpedo) (Torpedo marmorata)",
      "width": 913,
      "height": 685
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "pintarroja",
    "name": "Pintarroja",
    "scientificName": "Scyliorhinus canicula",
    "category": "Tiburones y rayas",
    "description": "Pequeño tiburón demersal de la familia Scyliorhinidae (tiburones gato), de cuerpo esbelto recubierto de numerosas manchas oscuras sobre fondo pardo claro y dos aletas dorsales situadas muy atrás.",
    "habitat": "Fondos arenosos, de grava, detríticos o coralígenos de la plataforma continental en el Atlántico noreste, Cantábrico y Mediterráneo.",
    "diet": "Moluscos, crustáceos, poliquetos y pequeños peces bentónicos.",
    "behavior": "Especie ovípara y mayoritariamente nocturna; deposita cápsulas córneas translúcidas («bolsas de sirena») sujetas mediante zarcillos a gorgonias y algas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Scyliorhinus_canicula",
      "https://commons.wikimedia.org/wiki/File:Scyliorhinus_canicula.jpg"
    ],
    "image": {
      "url": "/images/fauna/pintarroja.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Scyliorhinus_canicula.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Scyliorhinus_canicula.jpg",
      "author": "Hans Hillewaert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Pintarroja (Scyliorhinus canicula)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "bogavante",
    "name": "Bogavante europeo",
    "scientificName": "Homarus gammarus",
    "category": "Crustáceos",
    "description": "Gran crustáceo decápodo marino de caparazón azul oscuro o negruzco con motas amarillentas y un primer par de patas transformado en dos grandes pinzas asimétricas.",
    "habitat": "Oquedades y galerías de fondos rocosos en el Atlántico oriental, el Cantábrico y zonas frías o profundas del Mediterráneo.",
    "size": "Puede alcanzar hasta 60 cm de longitud.",
    "diet": "Moluscos bivalvos, crustáceos, equinodermos, gusanos y restos orgánicos.",
    "behavior": "Solitario, territorial y de actividad nocturna; durante el día se resguarda dentro de cuevas dejando asomar las antenas y las pinzas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Homarus_gammarus",
      "https://commons.wikimedia.org/wiki/File:KreeftbijDenOsse.jpg"
    ],
    "image": {
      "url": "/images/fauna/bogavante.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0b/KreeftbijDenOsse.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:KreeftbijDenOsse.jpg",
      "author": "Bart Braun",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Bogavante europeo (Homarus gammarus)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "langosta-europea",
    "name": "Langosta europea (langosta común)",
    "scientificName": "Palinurus elephas",
    "category": "Crustáceos",
    "description": "Crustáceo decápodo del infraorden Achelata de caparazón rojizo-parduzco cubierto de espinas, sin pinzas en las patas marchadoras y provisto de dos antenas muy largas y robustas.",
    "habitat": "Paredes rocosas profundas, cuevas, grietas y fondos coralígenos del Mediterráneo y del Atlántico oriental.",
    "diet": "Moluscos, equinodermos, crustáceos, esponjas y algas calcáreas.",
    "behavior": "De hábitos nocturnos; durante el día se oculta en fisuras rocosas dejando visibles sus largas antenas sensoriales.",
    "sources": [
      "https://es.wikipedia.org/wiki/Palinurus_elephas",
      "https://commons.wikimedia.org/wiki/File:Monaco.Mus%C3%A9e_oc%C3%A9anographique089.jpg"
    ],
    "image": {
      "url": "/images/fauna/langosta-europea.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1f/Monaco.Mus%C3%A9e_oc%C3%A9anographique089.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Monaco.Mus%C3%A9e_oc%C3%A9anographique089.jpg",
      "author": "Georges Jansoone (JoJan)",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0",
      "alt": "Langosta europea (langosta común) (Palinurus elephas)",
      "width": 960,
      "height": 723
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "cigarra-de-mar",
    "name": "Cigarra de mar (langosta mocha)",
    "scientificName": "Scyllarides latus",
    "category": "Crustáceos",
    "description": "Crustáceo decápodo de la familia Scyllaridae —llamado cigarra de mar en el Mediterráneo y langosta canaria o mocha en el Atlántico— caracterizado por carecer de pinzas y tener el segundo par de antenas transformado en placas anchas y aplanadas.",
    "habitat": "Techos de cuevas, extraplomos y arrecifes rocosos del mar Mediterráneo y la costa atlántica oriental.",
    "size": "Los adultos alcanzan alrededor de 30 cm de longitud.",
    "diet": "Especializada en moluscos bivalvos y gasterópodos (como lapas).",
    "behavior": "Bien camuflada y de hábitos nocturnos; pasa el día inmóvil sujeta a las bóvedas y paredes sombrías de las cuevas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Scyllarides_latus",
      "https://commons.wikimedia.org/wiki/File:Scyllarides_latus.jpg"
    ],
    "image": {
      "url": "/images/fauna/cigarra-de-mar.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/7/71/Scyllarides_latus.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Scyllarides_latus.jpg",
      "author": "Peterkoelbl",
      "license": "CC BY-SA 2.5",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.5",
      "alt": "Cigarra de mar (langosta mocha) (Scyllarides latus)",
      "width": 960,
      "height": 640
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "centollo",
    "name": "Centollo europeo",
    "scientificName": "Maja squinado",
    "category": "Crustáceos",
    "description": "Gran cangrejo braquiuro de caparazón triangular u ovalado de tonos rojizos o pardos, densamente cubierto de espinas, tubérculos y pequeños organismos que utiliza para camuflarse.",
    "habitat": "Fondos rocosos, detríticos y praderas de posidonia en el Mediterráneo y el Atlántico adyacente.",
    "size": "El caparazón puede medir hasta 20 cm de diámetro.",
    "diet": "Algas, moluscos, equinodermos y pequeños invertebrados bentónicos.",
    "behavior": "Camina pausadamente sobre el sustrato y adorna su caparazón con fragmentos de algas y esponjas para pasar desapercibido.",
    "sources": [
      "https://es.wikipedia.org/wiki/Maja_squinado",
      "https://commons.wikimedia.org/wiki/File:Maja_squinado_swimming.jpg"
    ],
    "image": {
      "url": "/images/fauna/centollo.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Maja_squinado_swimming.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Maja_squinado_swimming.jpg",
      "author": "Govern de les Illes Balears",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Centollo europeo (Maja squinado)",
      "width": 960,
      "height": 450
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "calamar",
    "name": "Calamar común",
    "scientificName": "Loligo vulgaris",
    "category": "Cefalópodos",
    "description": "Cefalópodo decapodiforme de la familia Loliginidae con manto cilíndrico y estilizado, dos aletas romboidales en la mitad posterior del cuerpo y diez tentáculos.",
    "habitat": "Columna de agua desde la superficie hasta los 500 m de profundidad en el Mediterráneo y el Atlántico oriental.",
    "depth": {
      "min": 0,
      "max": 500,
      "sourceUrl": "https://es.wikipedia.org/wiki/Loligo_vulgaris"
    },
    "size": "Manto de hasta 40 cm de longitud.",
    "diet": "Peces, crustáceos y otros cefalópodos.",
    "behavior": "Nadador pelágico rápido y gregario que se acerca a fondos costeros para depositar sus puestas de cápsulas gelatinosas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Loligo_vulgaris",
      "https://commons.wikimedia.org/wiki/File:Loligo_vulgaris.jpg"
    ],
    "image": {
      "url": "/images/fauna/calamar.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Loligo_vulgaris.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Loligo_vulgaris.jpg",
      "author": "Hans Hillewaert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Calamar común (Loligo vulgaris)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "nacra",
    "name": "Nacra",
    "scientificName": "Pinna nobilis",
    "category": "Moluscos",
    "description": "El mayor molusco bivalvo endémico del mar Mediterráneo. Su concha triangular en forma de abanico vive clavada verticalmente en el sustrato hasta un tercio de su longitud mediante filamentos de biso.",
    "habitat": "Praderas de Posidonia oceanica y Cymodocea nodosa y fondos arenosos con sustrato firme.",
    "size": "Puede alcanzar hasta 120 cm de longitud y superar los 20 años de vida.",
    "diet": "Filtradora de fitoplancton y materia orgánica en suspensión.",
    "behavior": "Sésil; entierra el extremo agudo de las valvas en el sedimento y entreabre el borde superior para filtrar agua.",
    "conservation": "Especie estrictamente protegida y en situación crítica en el Mediterráneo. No la toques ni generes turbulencias con las aletas cerca de las valvas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Pinna_nobilis",
      "https://commons.wikimedia.org/wiki/File:Pinnidae_-_Pinna_nobilis.jpg"
    ],
    "image": {
      "url": "/images/fauna/nacra.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Pinnidae_-_Pinna_nobilis.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pinnidae_-_Pinna_nobilis.jpg",
      "author": "Hectonichus",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Nacra (Pinna nobilis)",
      "width": 600,
      "height": 800
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "nudibranquio-azul",
    "name": "Babosa de mar regia (nudibranquio azul)",
    "scientificName": "Felimare picta",
    "category": "Moluscos",
    "description": "El nudibranquio de mayor tamaño del Mediterráneo (familia Chromodorididae), de cuerpo alargado azul oscuro o violáceo recorrido por líneas amarillas o naranjas y una corona posterior de 11 branquias.",
    "habitat": "Fondos rocosos sombríos, paredes verticales y estructuras sumergidas con esponjas en el Mediterráneo y el Atlántico.",
    "size": "Alcanza hasta 19 cm de longitud.",
    "diet": "Se alimenta de esponjas marinas del género Dysidea e Ircinia, de las que incorpora compuestos químicos defensivos.",
    "behavior": "Reptante bentónico cuya coloración aposemática advierte a los depredadores de su toxicidad.",
    "sources": [
      "https://es.wikipedia.org/wiki/Felimare_picta",
      "https://commons.wikimedia.org/wiki/File:Hypselodoris_picta_on_SS_Rosslyn,_300412.JPG"
    ],
    "image": {
      "url": "/images/fauna/nudibranquio-azul.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Hypselodoris_picta_on_SS_Rosslyn%2C_300412.JPG",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hypselodoris_picta_on_SS_Rosslyn,_300412.JPG",
      "author": "Darren Fa",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Babosa de mar regia (nudibranquio azul) (Felimare picta)",
      "width": 960,
      "height": 1280
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "erizo-comun",
    "name": "Erizo de mar común",
    "scientificName": "Paracentrotus lividus",
    "category": "Equinodermos",
    "description": "Equinodermo regular de la familia Parechinidae provisto de caparazón globoso ligeramente aplanado y espinas robustas de color variable entre violáceo, verdoso y pardo oscuro.",
    "habitat": "Fondos rocosos litorales y praderas de Posidonia oceanica en el Mediterráneo y el Atlántico oriental.",
    "diet": "Principalmente herbívoro; raspa algas y hojas de fanerógamas con su aparato masticador («linterna de Aristóteles»).",
    "behavior": "A menudo excava pequeñas oquedades circulares en la roca caliza y cubre su caparazón con fragmentos de conchas o algas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Paracentrotus_lividus",
      "https://commons.wikimedia.org/wiki/File:Paracentrotus_lividus_profil.JPG"
    ],
    "image": {
      "url": "/images/fauna/erizo-comun.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Paracentrotus_lividus_profil.JPG",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Paracentrotus_lividus_profil.JPG",
      "author": "Frédéric Ducarme",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Erizo de mar común (Paracentrotus lividus)",
      "width": 960,
      "height": 719
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "erizo-negro",
    "name": "Erizo negro",
    "scientificName": "Arbacia lixula",
    "category": "Equinodermos",
    "description": "Erizo de mar de color negro intenso sin reflejos claros, con espinas punzantes y una zona oral desnuda alrededor de la boca que le permite adherirse con gran fuerza a la roca.",
    "habitat": "Paredes rocosas verticales y bloques someros batidos por el oleaje en el Mediterráneo y el Atlántico oriental (incluidas Canarias).",
    "diet": "Algas calcáreas incrustantes y pequeños organismos sésiles que raspa sobre la roca desnuda.",
    "behavior": "A diferencia del erizo común, nunca se cubre con conchas ni fragmentos vegetales y tolera zonas de fuerte hidrodinamismo.",
    "sources": [
      "https://en.wikipedia.org/wiki/Arbacia_lixula",
      "https://commons.wikimedia.org/wiki/File:Arbacia_lixula_(oursin_noir).JPG"
    ],
    "image": {
      "url": "/images/fauna/erizo-negro.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/5/54/Arbacia_lixula_%28oursin_noir%29.JPG",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Arbacia_lixula_(oursin_noir).JPG",
      "author": "Frédéric Ducarme",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Erizo negro (Arbacia lixula)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "estrella-roja",
    "name": "Estrella de mar roja",
    "scientificName": "Echinaster sepositus",
    "category": "Equinodermos",
    "description": "Estrella de mar muy representativa del Mediterráneo y del Atlántico oriental contiguo, dotada de cinco brazos cilíndricos estilizados y una superficie porosa de color rojo o anaranjado vivo.",
    "habitat": "Fondos rocosos, paredes coralígenas y praderas de posidonia desde aguas someras hasta cotas profundas.",
    "diet": "Esponjas, pequeños invertebrados coloniales y detritos orgánicos.",
    "behavior": "Se desplaza lentamente mediante sus pies ambulacrales sobre paredes rocosas y rizomas de posidonia.",
    "sources": [
      "https://es.wikipedia.org/wiki/Echinaster_sepositus",
      "https://commons.wikimedia.org/wiki/File:Estrella_roja_del_Mediterr%C3%A1neo_(Echinaster_sepositus),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-31,_DD_79.jpg"
    ],
    "image": {
      "url": "/images/fauna/estrella-roja.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Estrella_roja_del_Mediterr%C3%A1neo_%28Echinaster_sepositus%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-31%2C_DD_79.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Estrella_roja_del_Mediterr%C3%A1neo_(Echinaster_sepositus),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-31,_DD_79.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Estrella de mar roja (Echinaster sepositus)",
      "width": 960,
      "height": 960
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "pepino-de-mar",
    "name": "Pepino de mar (holoturia)",
    "scientificName": "Holothuria tubulosa",
    "category": "Equinodermos",
    "description": "Equinodermo holoturoideo de cuerpo cilíndrico alargado y tegumento coriáceo de color pardo rojizo o marrón oscuro, cubierto de papilas cónicas en el dorso.",
    "habitat": "Fondos arenosos, detríticos y claros entre praderas de posidonia; es la holoturia más frecuente del Mediterráneo occidental.",
    "diet": "Sedimentívoro: ingiere arena para digerir la materia orgánica y microorganismos que contiene, devolviendo el sedimento limpio.",
    "behavior": "Desempeña un papel clave en la oxigenación y reciclaje de los fondos marinos.",
    "sources": [
      "https://es.wikipedia.org/wiki/Holothuria_tubulosa",
      "https://commons.wikimedia.org/wiki/File:Holothuria_tubulosa_Banyuls.jpg"
    ],
    "image": {
      "url": "/images/fauna/pepino-de-mar.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/4/48/Holothuria_tubulosa_Banyuls.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Holothuria_tubulosa_Banyuls.jpg",
      "author": "Renaud Coupa",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Pepino de mar (holoturia) (Holothuria tubulosa)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "gorgonia-blanca",
    "name": "Gorgonia blanca",
    "scientificName": "Eunicella singularis",
    "category": "Cnidarios y corales",
    "description": "Octocoral colonial de la familia Gorgoniidae que forma abanicos ramificados con ramas largas y rectas de color blanco o blanco verdoso debido a las algas endosimbiontes de sus pólipos.",
    "habitat": "Fondos rocosos e inclinados bien iluminados y expuestos a corrientes moderadas en el mar Mediterráneo.",
    "diet": "Captura microplancton mediante sus pólipos y aprovecha los nutrientes de sus zooxantelas simbióticas.",
    "behavior": "Colonia sésil muy sensible al roce de aletas y al anclaje; mantén siempre una flotabilidad neutra a su alrededor.",
    "sources": [
      "https://es.wikipedia.org/wiki/Eunicella_singularis",
      "https://commons.wikimedia.org/wiki/File:Eunicella_singularis_(Esper,_1794)_3.jpg"
    ],
    "image": {
      "url": "/images/fauna/gorgonia-blanca.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Eunicella_singularis_%28Esper%2C_1794%29_3.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Eunicella_singularis_(Esper,_1794)_3.jpg",
      "author": "Parent Géry",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "alt": "Gorgonia blanca (Eunicella singularis)",
      "width": 960,
      "height": 1412
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "coral-rojo",
    "name": "Coral rojo",
    "scientificName": "Corallium rubrum",
    "category": "Cnidarios y corales",
    "description": "Octocoral colonial de la familia Coralliidae provisto de un esqueleto calcáreo arborescente de color rojo intenso sobre el que se abren pequeños pólipos blancos retráctiles de ocho tentáculos pinnados.",
    "habitat": "Cuevas, grietas umbrías, extraplomos y paredes coralígenas poco iluminadas del Mediterráneo y Atlántico próximo.",
    "diet": "Zooplancton y partículas orgánicas que filtran sus pólipos en zonas de corriente.",
    "behavior": "Especie colonial de crecimiento extremadamente lento (apenas unos milímetros por año).",
    "conservation": "Especie vulnerable a la recolección y al impacto físico de los buceadores. Está prohibido recolectarlo o dañarlo; extrema el control del equipo en cuevas y bóvedas.",
    "sources": [
      "https://es.wikipedia.org/wiki/Corallium_rubrum",
      "https://commons.wikimedia.org/wiki/File:Corallium_rubrum_(Linnaeus,_1758)_11.jpg"
    ],
    "image": {
      "url": "/images/fauna/coral-rojo.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Corallium_rubrum_%28Linnaeus%2C_1758%29_11.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Corallium_rubrum_(Linnaeus,_1758)_11.jpg",
      "author": "Géry PARENT",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "alt": "Coral rojo (Corallium rubrum)",
      "width": 960,
      "height": 666
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "coral-naranja",
    "name": "Coral naranja",
    "scientificName": "Astroides calycularis",
    "category": "Cnidarios y corales",
    "description": "Madreporario colonial de la familia Dendrophylliidae (única especie del género Astroides) cuyos pólipos de color naranja brillante tapizan la roca formando densos cojinetes estrellados.",
    "habitat": "Paredes verticales sombrías, entradas de cuevas y arcos rocosos con circulación de agua en el Mediterráneo suroccidental y el entorno del Estrecho de Gibraltar.",
    "diet": "Zooplancton que captura al desplegar sus tentáculos urticantes, especialmente con poca luz.",
    "behavior": "Colonia sésil calcárea; cualquier golpe de aleta o botella puede fracturar sus cálices.",
    "conservation": "Incluido en el Catálogo Español de Especies Amenazadas (Vulnerable). Evita apoyar manos o aletas en las paredes donde crece.",
    "sources": [
      "https://es.wikipedia.org/wiki/Astroides_calycularis",
      "https://commons.wikimedia.org/wiki/File:Astroides_calycularis_2008a.jpg"
    ],
    "image": {
      "url": "/images/fauna/coral-naranja.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Astroides_calycularis_2008a.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Astroides_calycularis_2008a.jpg",
      "author": "Manfred Werner / Tsui",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "http://creativecommons.org/licenses/by-sa/3.0/",
      "alt": "Coral naranja (Astroides calycularis)",
      "width": 960,
      "height": 574
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "anemona-comun",
    "name": "Anémona de mar común (ortiguilla)",
    "scientificName": "Anemonia viridis",
    "category": "Cnidarios y corales",
    "description": "Cnidario antozoo de la familia Actiniidae —conocido también como ortiguilla en Andalucía— provisto de decenas de largos tentáculos poco retráctiles de color verde o parduzco con las puntas violetas.",
    "habitat": "Fondos rocosos bien iluminados y aguas someras del Mediterráneo y el Atlántico oriental.",
    "diet": "Pequeños peces, crustáceos y moluscos que paraliza con los cnidocitos de sus tentáculos, además de la aportación energética de sus algas simbióticas.",
    "behavior": "Fijada a la roca mediante su disco basal; a menudo alberga pequeños peces (como gobios) o crustáceos simbióticos entre sus tentáculos urticantes.",
    "sources": [
      "https://es.wikipedia.org/wiki/Anemonia_viridis",
      "https://commons.wikimedia.org/wiki/File:An%C3%A9mona_de_mar_com%C3%BAn_(Anemonia_viridis),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-21,_DD_07.jpg"
    ],
    "image": {
      "url": "/images/fauna/anemona-comun.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/2/25/An%C3%A9mona_de_mar_com%C3%BAn_%28Anemonia_viridis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2020-07-21%2C_DD_07.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:An%C3%A9mona_de_mar_com%C3%BAn_(Anemonia_viridis),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2020-07-21,_DD_07.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Anémona de mar común (ortiguilla) (Anemonia viridis)",
      "width": 960,
      "height": 960
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "anemona-joya",
    "name": "Anémona joya",
    "scientificName": "Corynactis viridis",
    "category": "Cnidarios y corales",
    "description": "Pequeño antozoo del orden Corallimorpharia de colores vivos (rosa, fucsia, verde, naranja o amarillo) con tentáculos cortos terminados en una característica esfera blanca o acrosfera.",
    "habitat": "Paredes verticales sombrías, extraplomos y pecios expuestos a corriente en el Atlántico nororiental y el mar Mediterráneo.",
    "diet": "Microplancton y pequeños invertebrados en suspensión.",
    "behavior": "Se reproduce asexualmente por fisión, formando densos tapices multicolores de individuos genéticamente idénticos sobre la roca.",
    "sources": [
      "https://es.wikipedia.org/wiki/Corynactis_viridis",
      "https://commons.wikimedia.org/wiki/File:An%C3%A9monas_joya_(Corynactis_viridis),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2023-07-27,_DD_36.jpg"
    ],
    "image": {
      "url": "/images/fauna/anemona-joya.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/1/18/An%C3%A9monas_joya_%28Corynactis_viridis%29%2C_Parque_natural_de_la_Arr%C3%A1bida%2C_Portugal%2C_2023-07-27%2C_DD_36.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:An%C3%A9monas_joya_(Corynactis_viridis),_Parque_natural_de_la_Arr%C3%A1bida,_Portugal,_2023-07-27,_DD_36.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Anémona joya (Corynactis viridis)",
      "width": 960,
      "height": 960
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "medusa-luminiscente",
    "name": "Medusa luminiscente (clavel de mar)",
    "scientificName": "Pelagia noctiluca",
    "category": "Cnidarios y corales",
    "description": "Medusa escifozoa de distribución mediterránea y atlántica, con umbrela semiesférica rosada o violácea cubierta de verrugas urticantes, cuatro brazos orales largos y ocho finos tentáculos marginales.",
    "habitat": "Aguas abiertas pelágicas, aunque las corrientes y los vientos pueden concentrarla cerca de la costa.",
    "diet": "Zooplancton, crustáceos planctónicos y huevos o larvas de peces.",
    "behavior": "Especie bioluminiscente capaz de emitir destellos verdosos en la oscuridad. Sus cnidocitos son muy urticantes: vigila la deriva de sus largos tentáculos durante los ascensos y paradas de seguridad.",
    "sources": [
      "https://es.wikipedia.org/wiki/Pelagia_noctiluca",
      "https://commons.wikimedia.org/wiki/File:Pelagia_noctiluca_(Sardinia).jpg"
    ],
    "image": {
      "url": "/images/fauna/medusa-luminiscente.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/7/77/Pelagia_noctiluca_%28Sardinia%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Pelagia_noctiluca_(Sardinia).jpg",
      "author": "Hans Hillewaert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Medusa luminiscente (clavel de mar) (Pelagia noctiluca)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "huevo-frito",
    "name": "Medusa huevo frito (aguacuajada)",
    "scientificName": "Cotylorhiza tuberculata",
    "category": "Cnidarios y corales",
    "description": "Medusa rizostomea propia del mar Mediterráneo y el Mar Menor, inconfundible por su umbrela aplanada amarillenta con un abultamiento central anaranjado que recuerda a un huevo frito y ocho brazos cortos con apéndices de puntas azules o violetas.",
    "habitat": "Aguas costeras templadas y cálidas del Mediterráneo, especialmente al final del verano y en otoño.",
    "diet": "Microplancton que filtra a través de sus brazos orales y nutrientes aportados por sus zooxantelas simbióticas.",
    "behavior": "De natación activa y pulsátil; su capacidad urticante para el ser humano es muy baja y suele ir acompañada de pequeños jureles juveniles que se refugian entre sus brazos.",
    "sources": [
      "https://es.wikipedia.org/wiki/Cotylorhiza_tuberculata",
      "https://commons.wikimedia.org/wiki/File:Cassiopea_Jellyfish_(Cotylorhiza_tuberculata)_-_Mar_Jonio,_Italy.jpg"
    ],
    "image": {
      "url": "/images/fauna/huevo-frito.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Cassiopea_Jellyfish_%28Cotylorhiza_tuberculata%29_-_Mar_Jonio%2C_Italy.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Cassiopea_Jellyfish_(Cotylorhiza_tuberculata)_-_Mar_Jonio,_Italy.jpg",
      "author": "Antonio Sontuoso",
      "license": "CC BY-SA 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/2.0",
      "alt": "Medusa huevo frito (aguacuajada) (Cotylorhiza tuberculata)",
      "width": 800,
      "height": 800
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "posidonia",
    "name": "Posidonia",
    "scientificName": "Posidonia oceanica",
    "category": "Plantas y algas",
    "description": "Planta fanerógama marina endémica del mar Mediterráneo (no es un alga): posee raíces, tallo rizomatoso, hojas acintadas de hasta un metro dispuestas en haces y produce flores en otoño y frutos flotantes («olivas de mar») en primavera.",
    "habitat": "Fondos arenosos y rocosos bien iluminados del litoral mediterráneo, donde forma extensas praderas submarinas.",
    "behavior": "Ingeniera de ecosistemas: oxigena el agua, fija carbono, frena la erosión de las playas y sirve de refugio y guardería a cientos de especies mediterráneas.",
    "conservation": "Hábitat prioritario de interés comunitario en la Unión Europea. Está prohibido fondear anclas sobre las praderas de posidonia.",
    "sources": [
      "https://es.wikipedia.org/wiki/Posidonia_oceanica",
      "https://commons.wikimedia.org/wiki/File:Posidonia_oceanica_(L).jpg"
    ],
    "image": {
      "url": "/images/fauna/posidonia.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/5/50/Posidonia_oceanica_%28L%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Posidonia_oceanica_(L).jpg",
      "author": "Frédéric Ducarme",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "alt": "Posidonia (Posidonia oceanica)",
      "width": 960,
      "height": 720
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  },
  {
    "slug": "delfin-mular",
    "name": "Delfín mular",
    "scientificName": "Tursiops truncatus",
    "category": "Mamíferos marinos",
    "description": "Cetáceo odontoceto de la familia Delphinidae de cuerpo robusto y fusiforme, coloración gris más oscura en el dorso que en el vientre, aleta dorsal falciforme y hocico corto bien definido.",
    "habitat": "Aguas costeras, plataformas continentales, islas y cañones submarinos del Mediterráneo y el Atlántico.",
    "diet": "Peces demersales y pelágicos, calamares y sepias.",
    "behavior": "Mamífero marino social e inteligente que vive en grupos (manadas) y puede avistarse durante las navegaciones de aproximación a los puntos de buceo.",
    "conservation": "Especie protegida en aguas españolas (Real Decreto 1727/2007 de protección de cetáceos). Las embarcaciones deben mantener la distancia reglamentaria y nunca cortar su rumbo.",
    "sources": [
      "https://es.wikipedia.org/wiki/Tursiops_truncatus",
      "https://commons.wikimedia.org/wiki/File:Tursiops_truncatus_01-cropped.jpg"
    ],
    "image": {
      "url": "/images/fauna/delfin-mular.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Tursiops_truncatus_01-cropped.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tursiops_truncatus_01-cropped.jpg",
      "author": "NASA",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Delfín mular (Tursiops truncatus)",
      "width": 960,
      "height": 709
    },
    "occurrences": [],
    "checkedAt": "2026-10-18"
  }
];
