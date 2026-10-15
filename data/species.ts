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
      "url": "/images/fauna/angelote.jpg",
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
      "url": "/images/fauna/mero-moreno.jpg",
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
      "url": "/images/fauna/morena.jpg",
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
      "url": "/images/fauna/pulpo-comun.jpg",
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
      "url": "/images/fauna/gorgonia-roja.jpg",
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
  },
  {
    "slug": "tortuga-marina",
    "name": "Tortuga marina",
    "scientificName": "Caretta caretta / Chelonia mydas",
    "category": "Reptiles marinos",
    "description": "En aguas españolas es posible avistar principalmente la tortuga boba (Caretta caretta) y la tortuga verde (Chelonia mydas), especialmente en las Islas Canarias donde residen y se alimentan ejemplares juveniles y adultos. Son animales estrictamente protegidos que deben observarse sin aproximarse en exceso ni cortar su trayectoria hacia la superficie.",
    "habitat": "Fondos arenosos, praderas de sebas o posidonia y aguas abiertas pelágicas.",
    "depth": {
      "min": 0,
      "max": 100,
      "sourceUrl": "https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/estrategias-marinas/reptiles-marinos.html"
    },
    "size": "Caparazón de 70 a 120 cm según MITECO.",
    "diet": "Medusas, crustáceos, moluscos y algas marinas.",
    "behavior": "Respiran aire en superficie y realizan inmersiones periódicas. Se alimentan en fondos someros y viajan por corrientes atlánticas y mediterráneas.",
    "conservation": "Especies amenazadas y estrictamente protegidas en España y la Unión Europea. Prohibido tocar, alimentar o acosar.",
    "sources": [
      "https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/estrategias-marinas/reptiles-marinos.html",
      "https://www.aquariumbcn.com/especies/reptiles/tortuga-boba/"
    ],
    "image": {
      "url": "/images/fauna/tortuga-marina.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Caretta_caretta_01.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Caretta_caretta_01.jpg",
      "author": "Strobilomyces",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "alt": "Tortuga boba nadando en aguas costeras"
    },
    "occurrences": [
      {
        "name": "El Puertito y Los Cristianos",
        "region": "Canarias",
        "basin": "Atlántico",
        "lat": 28.118,
        "lng": -16.75,
        "precision": "Zona",
        "sourceUrl": "https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/estrategias-marinas/reptiles-marinos.html",
        "note": "Zona atlántica con registros habituales de tortuga boba y verde en fondos de arena y sebadales de Tenerife sur."
      },
      {
        "name": "Reserva Marina de El Cabrón",
        "region": "Canarias",
        "basin": "Atlántico",
        "lat": 27.88,
        "lng": -15.37,
        "precision": "Punto",
        "sourceUrl": "https://www.miteco.gob.es/es/costas/temas/proteccion-medio-marino/estrategias-marinas/reptiles-marinos.html",
        "note": "Avistamientos documentados de ejemplares en tránsito y alimentación en Gran Canaria."
      }
    ],
    "checkedAt": "2026-10-15"
  },
  {
    "slug": "barracuda",
    "name": "Barracuda mediterránea (Espetón)",
    "scientificName": "Sphyraena viridensis",
    "category": "Peces",
    "description": "Depredador hidrodinámico con dientes afilados y cuerpo plateado con bandas transversales oscuras. Suele formar densos bancos circulares o patrullar en solitario las puntas rocosas y zonas de corriente de las reservas marinas españolas.",
    "habitat": "Aguas abiertas y arrecifes costeros expuestos a corrientes.",
    "depth": {
      "min": 2,
      "max": 50,
      "sourceUrl": "https://www.aquariumbcn.com/especies/peces-oseos/espeton/"
    },
    "size": "De 60 a 120 cm de longitud.",
    "diet": "Peces pelágicos (sardinas, bogas, jureles y caballas).",
    "behavior": "Cazador activo que suele tolerar con calma la presencia de buceadores que mantengan buena flotabilidad neutra.",
    "sources": [
      "https://www.aquariumbcn.com/especies/peces-oseos/espeton/"
    ],
    "image": {
      "url": "/images/fauna/barracuda.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Sphyraena_viridensis.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sphyraena_viridensis.jpg",
      "author": "Roberto Pillon",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "alt": "Banco de barracudas mediterráneas en aguas abiertas"
    },
    "occurrences": [
      {
        "name": "Illes Medes",
        "region": "Cataluña",
        "basin": "Mediterráneo",
        "lat": 42.049,
        "lng": 3.223,
        "precision": "Zona",
        "sourceUrl": "https://parcsnaturals.gencat.cat",
        "note": "Grandes bancos de espetones en La Vaca y Carall Bernat durante toda la temporada."
      },
      {
        "name": "Islas Hormigas (Cabo de Palos)",
        "region": "Murcia",
        "basin": "Mediterráneo",
        "lat": 37.65,
        "lng": -0.68,
        "precision": "Punto",
        "sourceUrl": "https://www.reservasmarinas.net",
        "note": "Bancos compactos permanentes en el Bajo de Fuera y Bajo de Dentro."
      }
    ],
    "checkedAt": "2026-10-15"
  },
  {
    "slug": "pez-luna",
    "name": "Pez luna",
    "scientificName": "Mola mola",
    "category": "Peces",
    "description": "El pez óseo más pesado del mundo. Su morfología discoidal sin cola diferenciada y su impresionante porte lo convierten en uno de los encuentros más emocionantes del buceo en España. Suele ascender a cotas accesibles en primavera para que peces desparasitadores limpien su piel.",
    "habitat": "Aguas pelágicas templadas y tropicales; se aproxima a paredes de costa para limpieza.",
    "depth": {
      "min": 5,
      "max": 400,
      "sourceUrl": "https://www.aquariumbcn.com/especies/peces-oseos/pez-luna/"
    },
    "size": "Hasta 3 metros y más de 1.000 kg.",
    "diet": "Principalmente medusas, zooplancton gelatinoso y calamares.",
    "behavior": "Movimiento lento y parsimonioso mediante sus aletas dorsal y anal. Muy sensible al acoso; si se le nada encima huye hacia el azul profundo.",
    "sources": [
      "https://www.aquariumbcn.com/especies/peces-oseos/pez-luna/"
    ],
    "image": {
      "url": "/images/fauna/pez-luna.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/8/84/Mola_mola.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mola_mola.jpg",
      "author": "Per-Ola Norman",
      "license": "Dominio público",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "alt": "Pez luna (Mola mola) en aguas abiertas"
    },
    "occurrences": [
      {
        "name": "Mar Menuda (Tossa de Mar)",
        "region": "Cataluña",
        "basin": "Mediterráneo",
        "lat": 41.713,
        "lng": 2.936,
        "precision": "Zona",
        "sourceUrl": "https://www.aquariumbcn.com",
        "note": "Encuentros estacionales documentados entre mayo y julio en las estaciones de desparasitación."
      },
      {
        "name": "La Herradura y Punta de la Mona",
        "region": "Andalucía",
        "basin": "Mediterráneo",
        "lat": 36.73,
        "lng": -3.73,
        "precision": "Zona",
        "sourceUrl": "https://www.miteco.gob.es",
        "note": "Avistamientos documentados en paso pelágico primaveral frente a la costa granadina."
      }
    ],
    "checkedAt": "2026-10-15"
  },
  {
    "slug": "chucho-raya",
    "name": "Chucho / Raya común",
    "scientificName": "Dasyatis pastinaca",
    "category": "Tiburones y rayas",
    "description": "Pez cartilaginoso con cuerpo aplanado en forma de rombo que suele reposar semienterrado en la arena. Posee una espina serrada en la base de la cola con fines puramente defensivos. En las Islas Canarias y el Mediterráneo es un habitante habitual de calas y fondos blandos.",
    "habitat": "Fondos arenosos, fangosos y praderas marinas.",
    "depth": {
      "min": 5,
      "max": 200,
      "sourceUrl": "https://www.aquariumbcn.com/especies/peces-cartilaginosos/pastinaca/"
    },
    "size": "Envergadura de hasta 150 cm.",
    "diet": "Moluscos bivalvos, crustáceos y pequeños gusanos que desentierra del sustrato blando.",
    "behavior": "Pacífico y dócil. Si no se le cerca ni se pisa, permite observaciones cercanas de gran belleza sin alterar su descanso.",
    "sources": [
      "https://www.aquariumbcn.com/especies/peces-cartilaginosos/pastinaca/"
    ],
    "image": {
      "url": "/images/fauna/chucho-raya.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/c/c9/Dasyatis_pastinaca_Crete.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Dasyatis_pastinaca_Crete.jpg",
      "author": "Max Ryazanov",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "alt": "Raya común posada sobre fondo arenoso"
    },
    "occurrences": [
      {
        "name": "Sardina del Norte",
        "region": "Canarias",
        "basin": "Atlántico",
        "lat": 28.14,
        "lng": -15.69,
        "precision": "Punto",
        "sourceUrl": "https://www.miteco.gob.es",
        "note": "Frecuente en la bahía arenosa y en las inmersiones nocturnas de Gran Canaria."
      },
      {
        "name": "Playa Chica (Lanzarote)",
        "region": "Canarias",
        "basin": "Atlántico",
        "lat": 28.92,
        "lng": -13.7,
        "precision": "Punto",
        "sourceUrl": "https://turismolanzarote.com",
        "note": "Observaciones regulares de chuchos negros y pastinacas en el veril de la playa."
      }
    ],
    "checkedAt": "2026-10-15"
  },
  {
    "slug": "caballito-de-mar",
    "name": "Caballito de mar común",
    "scientificName": "Hippocampus hippocampus",
    "category": "Peces",
    "description": "Pez teleósteo de silueta inconfundible con cola prensil y cabeza en ángulo recto. Se sujeta a tallos de posidonia y algas para resistir las corrientes. Es una especie muy sensible y emblemática protegida por convenios internacionales.",
    "habitat": "Praderas de Posidonia oceanica, Zostera marina y fondos costeros protegidos.",
    "depth": {
      "min": 1,
      "max": 30,
      "sourceUrl": "https://www.miteco.gob.es/es/biodiversidad/temas/inventarios-nacionales/hippocampus_hippocampus_tcm30-197621.pdf"
    },
    "size": "De 8 a 15 cm de longitud.",
    "diet": "Pequeños copépodos y crustáceos diminutos que succiona con su hocico tubular.",
    "behavior": "Nado pausado mediante la aleta dorsal. Los machos incuban los huevos fecundados en una bolsa ventral especializada.",
    "conservation": "Vulnerable y protegido. Prohibido manipular, iluminar con focos directos continuos o alterar su sustrato de anclaje.",
    "sources": [
      "https://www.miteco.gob.es/es/biodiversidad/temas/inventarios-nacionales/hippocampus_hippocampus_tcm30-197621.pdf"
    ],
    "image": {
      "url": "/images/fauna/caballito-de-mar.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/5/58/Hippocampus_hippocampus_01.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hippocampus_hippocampus_01.jpg",
      "author": "Hans Hillewaert",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": "Caballito de mar común sujeto a vegetación marina"
    },
    "occurrences": [
      {
        "name": "Cabo de Gata",
        "region": "Andalucía",
        "basin": "Mediterráneo",
        "lat": 36.72,
        "lng": -2.2,
        "precision": "Zona",
        "sourceUrl": "https://www.miteco.gob.es",
        "note": "Poblaciones localizadas en las praderas de posidonia de calas resguardadas del parque natural."
      },
      {
        "name": "Rías Baixas",
        "region": "Galicia",
        "basin": "Atlántico",
        "lat": 42.23,
        "lng": -8.9,
        "precision": "Zona",
        "sourceUrl": "https://www.miteco.gob.es",
        "note": "Registros en fondos de fanerógamas del Proyecto Hippocampus del IIM-CSIC."
      }
    ],
    "checkedAt": "2026-10-15"
  },
  {
    "slug": "vaquita-suiza",
    "name": "Vaquita suiza (Nudibranquio)",
    "scientificName": "Discodoris atromaculata",
    "category": "Moluscos e invertebrados",
    "description": "Uno de los nudibranquios más espectaculares y fáciles de identificar del Mediterráneo. Su manto blanco con manchas pardas oscuras recuerda al pelaje vacuno. Vive en estrecha simbiosis trófica alimentándose casi en exclusiva de la esponja Petrosia ficiformis.",
    "habitat": "Paredes umbrías, cornisas, grietas y entradas de cuevas donde crecen esponjas.",
    "depth": {
      "min": 5,
      "max": 40,
      "sourceUrl": "https://www.aquariumbcn.com/especies/invertebrados/vaquita-suiza/"
    },
    "size": "Hasta 12 cm de longitud.",
    "diet": "Esponja incrustante pétrea (Petrosia ficiformis).",
    "behavior": "Hermafrodita. Se desplaza lentamente sobre las colonias de esponjas dejando espirales de puestas de huevos blancos.",
    "sources": [
      "https://www.aquariumbcn.com/especies/invertebrados/vaquita-suiza/"
    ],
    "image": {
      "url": "/images/fauna/vaquita-suiza.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/5/56/Peltodoris_atromaculata_in_Cabo_de_Palos.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Peltodoris_atromaculata_in_Cabo_de_Palos.jpg",
      "author": "Diego Delso",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "alt": "Vaquita suiza sobre una esponja en Cabo de Palos"
    },
    "occurrences": [
      {
        "name": "Illes Medes (La Vaca y El Salpatxot)",
        "region": "Cataluña",
        "basin": "Mediterráneo",
        "lat": 42.051,
        "lng": 3.22,
        "precision": "Punto",
        "sourceUrl": "https://parcsnaturals.gencat.cat",
        "note": "Frecuente en las paredes umbrías y túneles con esponjas pétreas."
      },
      {
        "name": "Cabo de Palos",
        "region": "Murcia",
        "basin": "Mediterráneo",
        "lat": 37.65,
        "lng": -0.68,
        "precision": "Zona",
        "sourceUrl": "https://www.reservasmarinas.net",
        "note": "Fotografiada y documentada en los bajos y piedras de la reserva marina."
      }
    ],
    "checkedAt": "2026-10-15"
  },
  {
    "slug": "sepia",
    "name": "Sepia común",
    "scientificName": "Sepia officinalis",
    "category": "Cefalópodos",
    "description": "Maestra indiscutible del camuflaje submarino. Posee diez brazos (dos de ellos tentáculos retráctiles de caza), ojos en forma de W y una concha interna calcárea conocida como jibión. En primavera acude a aguas someras para el desove.",
    "habitat": "Fondos mixtos de arena, roca y praderas de posidonia oceanica.",
    "depth": {
      "min": 1,
      "max": 100,
      "sourceUrl": "https://www.aquariumbcn.com/especies/invertebrados/sepia-comun/"
    },
    "size": "De 20 a 40 cm de longitud de manto.",
    "diet": "Crustáceos (cangrejos y camarones) y pequeños peces costeros.",
    "behavior": "Solitaria y territorial. Modifica al instante el color y la textura rugosa de su piel según su estado de ánimo o el entorno.",
    "sources": [
      "https://www.aquariumbcn.com/especies/invertebrados/sepia-comun/"
    ],
    "image": {
      "url": "/images/fauna/sepia.jpg",
      "originalUrl": "https://upload.wikimedia.org/wikipedia/commons/0/07/Sepia_officinalis_%28aquarium%29.jpg",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Sepia_officinalis_(aquarium).jpg",
      "author": "Tino Strauss",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "alt": "Sepia común mostrando patrones de color y camuflaje"
    },
    "occurrences": [
      {
        "name": "Cala Montgó y L'Escala",
        "region": "Cataluña",
        "basin": "Mediterráneo",
        "lat": 42.105,
        "lng": 3.159,
        "precision": "Zona",
        "sourceUrl": "https://visitlescala.com",
        "note": "Habitual en las praderas de posidonia y fondos de arena en inmersiones de iniciación."
      },
      {
        "name": "Mar Menuda (Tossa de Mar)",
        "region": "Cataluña",
        "basin": "Mediterráneo",
        "lat": 41.713,
        "lng": 2.936,
        "precision": "Punto",
        "sourceUrl": "https://infotossa.com",
        "note": "Encuentros constantes en inmersiones nocturnas y cursos de buceo en cala."
      }
    ],
    "checkedAt": "2026-10-15"
  }
];
