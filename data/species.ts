export type Species = {
  slug:string; name:string; scientificName:string; category:string; description:string;
  habitat:string; depth?:{min:number;max:number;sourceUrl:string}; size?:string; diet?:string; behavior?:string;
  conservation?:string; sources:string[]; checkedAt:string;
  image:{url:string;originalUrl:string;sourceUrl:string;author:string;license:string;licenseUrl:string;alt:string};
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Squatina_squatina_lanzarote.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Squatina_squatina_lanzarote.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Squatina_squatina_lanzarote.jpg",
      "author": "greenacre8; ajuste de color: Togabi",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "alt": "Angelote frente a Playa Chica, Lanzarote"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/3/31/Epinephelus_marginatus_Crete.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/3/31/Epinephelus_marginatus_Crete.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Epinephelus_marginatus_Crete.jpg",
      "author": "Max Ryazanov; edición: Mayra SA",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "alt": "Mero moreno; fotografía de referencia tomada en Creta"
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
      "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Morena_del_Mediterr%C3%A1neo_%28Muraena_helena%29%2C_Cabo_de_Palos%2C_Espa%C3%B1a%2C_2022-07-17%2C_DD_59.jpg/500px-Morena_del_Mediterr%C3%A1neo_%28Muraena_helena%29%2C_Cabo_de_Palos%2C_Espa%C3%B1a%2C_2022-07-17%2C_DD_59.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Morena_del_Mediterr%C3%A1neo_%28Muraena_helena%29%2C_Cabo_de_Palos%2C_Espa%C3%B1a%2C_2022-07-17%2C_DD_59.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Morena_del_Mediterráneo_(Muraena_helena),_Cabo_de_Palos,_España,_2022-07-17,_DD_59.jpg",
      "author": "Diego Delso, delso.photo",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": "Morena fotografiada en Cabo de Palos"
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
      "url": "https://upload.wikimedia.org/wikipedia/commons/0/02/Octopus_vulgaris_Cuvier%2C_1797.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/0/02/Octopus_vulgaris_Cuvier%2C_1797.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Octopus_vulgaris_Cuvier,_1797.jpg",
      "author": "Parent Géry",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Detalle del pulpo común; imagen de referencia"
    },
    "occurrences": [],
    "checkedAt": "2026-10-04"
  },
  {
    "slug": "gorgonia-roja",
    "name": "Gorgonia roja",
    "scientificName": "Paramuricea clavata",
    "category": "Gorgonias",
    "description": "Colonia de pólipos con aspecto de abanico ramificado, de tonos rojos y a veces extremos amarillos. Recibe alimento de la corriente. Mantén buena flotabilidad y evita rozarla.",
    "habitat": "Sustratos donde las colonias reciben corriente.",
    "size": "Colonias de hasta 1 m según L’Aquàrium.",
    "diet": "Zooplancton.",
    "behavior": "Animal colonial fijado al sustrato.",
    "sources": [
      "https://www.aquariumbcn.com/especies/invertebrados/gorgonia-roja/"
    ],
    "image": {
      "url": "https://upload.wikimedia.org/wikipedia/commons/4/47/Violescent_sea-whip_%28Paramuricea_clavata%29%2C_Ferranelles%2C_Medes_Islands%2C_Spain.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/4/47/Violescent_sea-whip_%28Paramuricea_clavata%29%2C_Ferranelles%2C_Medes_Islands%2C_Spain.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Violescent_sea-whip_(Paramuricea_clavata),_Ferranelles,_Medes_Islands,_Spain.jpg",
      "author": "Jouni Kuisma / DiveCodex, divecodex.com",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": "Gorgonia roja en Les Ferranelles, Illes Medes"
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
  }
];
