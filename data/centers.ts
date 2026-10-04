export type DiveCenter = {id:string;slug:string;name:string;location:string;region:string;description:string;services:string[];siteSlugs:string[];destinationSlugs:string[];officialUrl?:string;coordinates?:{lat:number;lng:number;sourceUrl:string};rating?:{value:number;scale:number;count:number;sourceUrl:string};sources:string[];checkedAt:string};

export type CenterActivityLink = {activitySlug:string;centerId:string;sourceUrl:string;checkedAt:string};
export const centers: DiveCenter[] = [
  {
    "id": "20000-leguas-19713898",
    "slug": "20000-leguas-19713898",
    "name": "20000 Leguas",
    "location": "Alcalá de Henares",
    "region": "Comunidad de Madrid",
    "description": "20000 Leguas figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/20000-leguas--e19713898",
      "https://www.yumping.com/ofertas/buceo/madrid/padi-advanced-open-water-en-javea-o-mazarron--o31388",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-de-open-water-diver-en-javea--o31340"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "7-mares-las-canteras-5224",
    "slug": "7-mares-las-canteras-5224",
    "name": "7 Mares Las Canteras",
    "location": "Las Palmas de Gran Canaria",
    "region": "Canarias",
    "description": "7 Mares Las Canteras figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/7-mares-las-canteras--e5224",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-padi-open-water-diver-gran-canaria--o22547",
      "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-las-palmas-de-gran-canaria--o22442",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advance-open-water-diver-gran-canaria--o22549"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "abysub-19675603",
    "slug": "abysub-19675603",
    "name": "Abysub",
    "location": "Fuengirola",
    "region": "Andalucía",
    "description": "Abysub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/abysub--e19675603",
      "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-mar-desde-playa-fuengirola--o27182"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "active-scuba-divers-lanzarote-6456",
    "slug": "active-scuba-divers-lanzarote-6456",
    "name": "Active Scuba Divers Lanzarote",
    "location": "Costa Teguise",
    "region": "Canarias",
    "description": "Active Scuba Divers Lanzarote figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/active-scuba-divers-lanzarote--e6456",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-adventure-diver-en-lanzarote--o46770",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-ssi-open-water-diver-en-lanzarote--o46769",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-seal-team-en-lanzarote--o46764"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "adventure-experiences-5453",
    "slug": "adventure-experiences-5453",
    "name": "Adventure Experiences",
    "location": "Las Palmas de Gran Canaria",
    "region": "Canarias",
    "description": "Adventure Experiences figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-aereos/adventure-experiences--e5453",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-desde-playa-gran-canaria--o31590"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "albatros-diving-9862",
    "slug": "albatros-diving-9862",
    "name": "Albatros Diving",
    "location": "Cala Millor",
    "region": "Baleares",
    "description": "Albatros Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/albatros-diving--e9862",
      "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-millor-mallorca-3-horas--o57582",
      "https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-open-water-diver-en-cala-millor-3-dias--o86509",
      "https://www.yumping.com/ofertas/buceo/mallorca/excursion-de-snorkelling-en-mallorca-2-horas--o57580",
      "https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-discover-scuba-diving-cala-millor-3h--o86514"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "alisios-sub-lanzarote-19695222",
    "slug": "alisios-sub-lanzarote-19695222",
    "name": "Alisios Sub Lanzarote",
    "location": "Lanzarote · Tías",
    "region": "Canarias",
    "description": "Alisios Sub Lanzarote figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/alisios-sub-lanzarote--e19695222",
      "https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
      "https://www.yumping.com/ofertas/buceo/lanzarote/advanced-open-water-diver-en-tias--o19793"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "alpha-buceo-gijon-19776780",
    "slug": "alpha-buceo-gijon-19776780",
    "name": "Alpha Buceo Gijón",
    "location": "Gijón",
    "region": "Asturias",
    "description": "Alpha Buceo Gijón figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/es-MX/buceo/alpha-buceo-gijon--e19776780",
      "https://www.yumping.com/es-MX/ofertas/buceo/asturias/bautismo-de-buceo-desde-barco-en-gijon--o57409"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "amarilla-divers-19705755",
    "slug": "amarilla-divers-19705755",
    "name": "Amarilla Divers",
    "location": "Los Abrigos",
    "region": "Canarias",
    "description": "Amarilla Divers figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/amarilla-divers--e19705755",
      "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-tenerife-buceadores-titulados--o53263"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "anel-lides-serveis-ambientals-marins-19739802",
    "slug": "anel-lides-serveis-ambientals-marins-19739802",
    "name": "Anèl·lides Serveis Ambientals Marins",
    "location": "Barcelona",
    "region": "Cataluña",
    "description": "Anèl·lides Serveis Ambientals Marins figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/campamentos/anellides-serveis-ambientals-marins--e19739802",
      "https://www.yumping.com/ofertas/buceo/barcelona/practicar-snorkel-con-monitor-en-barcelona-2-horas--o49603"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "anemone-diving-center-19728090",
    "slug": "anemone-diving-center-19728090",
    "name": "Anemone Diving Center",
    "location": "Palamós",
    "region": "Cataluña",
    "description": "Anemone Diving Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/anemone-diving-center--e19728090",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-palamos-desde-playa--o56240",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-desde-barco-en-palamos--o56241",
      "https://www.yumping.com/ofertas/buceo/girona/padi-open-water-diver-en-palamos--o56242"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "arenal-diving-997",
    "slug": "arenal-diving-997",
    "name": "Arenal Diving",
    "location": "Sant Antoni de Portmany",
    "region": "Baleares",
    "description": "Arenal Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/arenal-diving--e997",
      "https://www.yumping.com/ofertas/buceo/ibiza/padi-advanced-open-water-bahia-san-antonio--o28445",
      "https://www.yumping.com/ofertas/buceo/ibiza/discover-scuba-diving-en-san-antonio-ibiza--o3993",
      "https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",
      "https://www.yumping.com/ofertas/buceo/ibiza/bono-10-inmersiones-botella-plomos-en-ibiza--o27210",
      "https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-en-bahia-de-san-antonio--o28444",
      "https://www.yumping.com/es-MX/ofertas/buceo/ibiza/bautizo-de-buceo-en-sant-antoni-de-portmany-ibiza--o30025",
      "https://www.yumping.com/ofertas/buceo/ibiza/padi-scuba-diver-sant-antoni-de-portmany-ibiza--o30034"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "asdon-aventura-madrid-19701987",
    "slug": "asdon-aventura-madrid-19701987",
    "name": "Asdón Aventura Madrid",
    "location": "Gargantilla de Lozoya",
    "region": "Comunidad de Madrid",
    "description": "Asdón Aventura Madrid figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/multiaventura/asdon-aventura-madrid--e19701987",
      "https://www.yumping.com/ofertas/buceo/madrid/inmersion-de-buceo-en-parque-natural-alto-tajo--o30366",
      "https://www.yumping.com/ofertas/buceo/madrid/bautizo-de-buceo-en-alto-tajo-guadalajara--o30365"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "atlantis-diving-lanzarote-19705315",
    "slug": "atlantis-diving-lanzarote-19705315",
    "name": "Atlantis Diving Lanzarote",
    "location": "Lanzarote · Puerto del Carmen",
    "region": "Canarias",
    "description": "Atlantis Diving Lanzarote figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/atlantis-diving-lanzarote--e19705315",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
      "https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote-desde-barco--o53013"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "aventura-tour-salou-19725112",
    "slug": "aventura-tour-salou-19725112",
    "name": "Aventura Tour Salou",
    "location": "Salou, Tarragona",
    "region": "Cataluña",
    "description": "Aventura Tour Salou figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/aventura-tour-salou--e19725112",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-en-salou-3-horas--o40959",
      "https://www.yumping.com/ofertas/buceo/tarragona/inmersion-de-buceo-nocturna-en-salou-1-hora--o56731"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "balkysub-2134",
    "slug": "balkysub-2134",
    "name": "Balkysub",
    "location": "Cabo de Palos · La Manga del Mar Menor",
    "region": "Murcia",
    "description": "Balkysub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/balkysub--e2134",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-hasta-6-metros-en-la-manga--o28355",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-padi-en-la-manga-del-mar-menor--o35110",
      "https://www.yumping.com/ofertas/buceo/murcia/snorkel-en-la-manga-discover-snorkeling-experience--o35112",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-open-water-diver-en-la-manga--o35125",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-padi-en-la-manga--o35127"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "barracuda-9404",
    "slug": "barracuda-9404",
    "name": "Barracuda",
    "location": "Alcoceber",
    "region": "Comunidad Valenciana",
    "description": "Barracuda figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/barracuda--e9404",
      "https://www.yumping.com/ofertas/buceo/castellon/acuc-open-water-diver-en-alcoceber-castellon--o29231",
      "https://www.yumping.com/ofertas/buceo/castellon/bautizo-de-buceo-piscina-y-mar-alcoceber--o29548",
      "https://www.yumping.com/ofertas/buceo/castellon/acuc-advanced-open-water-en-alcoceber-castellon--o29232"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "barracuda-oropesa-buceo-19864501",
    "slug": "barracuda-oropesa-buceo-19864501",
    "name": "Barracuda Oropesa Buceo",
    "location": "Oropesa del Mar",
    "region": "Comunidad Valenciana",
    "description": "Barracuda Oropesa Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/barracuda-oropesa-buceo--e19864501",
      "https://www.yumping.com/ofertas/buceo/castellon/curso-open-water-diver-en-puerto-oropesa-5-dias--o89894",
      "https://www.yumping.com/ofertas/buceo/castellon/curso-advanced-open-diver-en-puerto-oropesa-4-dias--o89900",
      "https://www.yumping.com/ofertas/buceo/castellon/bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h--o89889"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "black-frog-divers-19716651",
    "slug": "black-frog-divers-19716651",
    "name": "Black Frog Divers",
    "location": "Torrox",
    "region": "Andalucía",
    "description": "Black Frog Divers figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/black-frog-divers--e19716651",
      "https://www.yumping.com/ofertas/buceo/malaga/inmersion-de-buceo-en-la-costa-de-malaga--o34709",
      "https://www.yumping.com/ofertas/buceo/malaga/curso-padi-open-water-desde-torrox--o30602",
      "https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-torrox--o30586"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "blackstone-dive-center-19723727",
    "slug": "blackstone-dive-center-19723727",
    "name": "Blackstone Dive Center",
    "location": "El Médano · Tenerife",
    "region": "Canarias",
    "description": "Blackstone Dive Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/blackstone-dive-center--e19723727",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-para-iniciados-en-tenerife--o41742",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "blaumar-367",
    "slug": "blaumar-367",
    "name": "Blaumar",
    "location": "Mataró",
    "region": "Cataluña",
    "description": "Blaumar figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/blaumar--e367",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-buceo-open-water-diver-en-mataro--o60120",
      "https://www.yumping.com/ofertas/buceo/barcelona/salida-de-buceo-con-equipo-puerto-de-mataro--o60130",
      "https://www.yumping.com/ofertas/buceo/barcelona/sesion-de-buceo-de-iniciacion-en-mataro--o60117"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "blue-water-diving-19725514",
    "slug": "blue-water-diving-19725514",
    "name": "Blue Water Diving",
    "location": "Las Palmas de Gran Canaria · Puerto Rico",
    "region": "Canarias",
    "description": "Blue Water Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/es-MX/buceo/blue-water-diving--e19725514",
      "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-padi-las-palmas-3h--o36890",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/padi-discover-scuba-diving-en-playa-puerto-rico--o29435",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-padi-advanced-open-water--o38739",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-padi-rescate-y-primeros-auxilios--o38740",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/padi-open-water-en-las-palmas-3-dias--o38735"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "bluewater-menorca-19776741",
    "slug": "bluewater-menorca-19776741",
    "name": "Bluewater Menorca",
    "location": "Menorca",
    "region": "Baleares",
    "description": "Bluewater Menorca figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/bluewater-menorca--e19776741",
      "https://www.yumping.com/ofertas/buceo/menorca/bautismo-de-buceo-en-cala-galdana-2h-y-30min--o76665"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "brisubuceo-19763265",
    "slug": "brisubuceo-19763265",
    "name": "Brisubuceo",
    "location": "Las Galletas",
    "region": "Canarias",
    "description": "Brisubuceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/brisubuceo--e19763265",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-las-galletas-tenerife--o53976",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-en-las-galletas-3-dias--o47446"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-aguadulce-roquetas-19690161",
    "slug": "buceo-aguadulce-roquetas-19690161",
    "name": "Buceo Aguadulce Roquetas",
    "location": "Aguadulce · Roquetas de Mar",
    "region": "Andalucía",
    "description": "Buceo Aguadulce Roquetas figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/buceo-aguadulce-roquetas--e19690161",
      "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-roquetas-de-mar--o20488",
      "https://www.yumping.com/ofertas/buceo/almeria/padi-advanced-open-water-diver-en-roquetas-de-mar--o27804",
      "https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-roquetas-de-mar--o27803",
      "https://www.yumping.com/ofertas/buceo/almeria/bautismo-submarino-en-aguadulce-y-fotos--o37116",
      "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-para-parejas-en-aguadulce--o20493",
      "https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-para-ninos-aguadulce-desde-8-anos--o37277",
      "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-discover-scuba-diving-aguadulce--o20947"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-alcala-19707835",
    "slug": "buceo-alcala-19707835",
    "name": "Buceo Alcalá",
    "location": "Alcalá de Henares · Madrid",
    "region": "Comunidad de Madrid",
    "description": "Buceo Alcalá figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/buceo-alcala--e19707835",
      "https://www.yumping.com/ofertas/buceo/madrid/discover-scuba-diving-padi-alcala-de-henares--o25734",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-open-water-diver-alcala-de-henares-y-murcia--o27646",
      "https://www.yumping.com/ofertas/buceo/madrid/viaje-a-ibiza-desde-denia-5-inmersiones--o26333"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-aqualia-19635523",
    "slug": "buceo-aqualia-19635523",
    "name": "Buceo Aqualia",
    "location": "La Herradura",
    "region": "Andalucía",
    "description": "Buceo Aqualia figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/aqualia-dive--e19635523",
      "https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-personalizado-en-la-herradura--o16443",
      "https://www.yumping.com/ofertas/buceo/granada/padi-advanced-open-water-la-herradura--o16459",
      "https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-rescue-diver-en-la-herradura--o16465"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-calypso-19752686",
    "slug": "buceo-calypso-19752686",
    "name": "Buceo Calypso",
    "location": "Miengo",
    "region": "Cantabria",
    "description": "Buceo Calypso figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/buceo-calypso--e19752686",
      "https://www.yumping.com/ofertas/buceo/cantabria/bautizo-de-buceo-en-piscina-miengo-1h-30-min--o62672",
      "https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-advanced-open-water-diver-polanco--o62342",
      "https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-especialidad-nitrox-en-requejada--o62359",
      "https://www.yumping.com/ofertas/buceo/cantabria/titulo-de-buceo-open-water-diver-en-requejada--o62344"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-catalunya-costa-brava-19718043",
    "slug": "buceo-catalunya-costa-brava-19718043",
    "name": "Buceo Catalunya Costa Brava",
    "location": "Palamós",
    "region": "Cataluña",
    "description": "Buceo Catalunya Costa Brava figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-catalunya-costa-brava--e19718043",
      "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-palamos-2h--o58937",
      "https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-palamos-3-dias--o79990"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-costa-nerja-443",
    "slug": "buceo-costa-nerja-443",
    "name": "Buceo Costa Nerja",
    "location": "Nerja",
    "region": "Andalucía",
    "description": "Buceo Costa Nerja figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-costa-nerja--e443",
      "https://www.yumping.com/ofertas/buceo/malaga/curso-advanced-open-water-diver-2-o-3-dias-nerja--o62513",
      "https://www.yumping.com/ofertas/buceo/malaga/padi-open-water-diver-en-nerja-durante-4-dias--o62519",
      "https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",
      "https://www.yumping.com/ofertas/buceo/malaga/snorkel-para-ninos-acantilados-de-maro-cerro-gordo--o62522",
      "https://www.yumping.com/ofertas/buceo/malaga/progradiscover-scuba-3-horas-marina-del-este--o62511",
      "https://www.yumping.com/ofertas/buceo/malaga/snorkel-en-los-acantilados-de-maro-cerro-gordo--o62521"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-donosti-6147",
    "slug": "buceo-donosti-6147",
    "name": "Buceo Donosti",
    "location": "San Sebastián",
    "region": "País Vasco",
    "description": "Buceo Donosti figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-donosti--e6147",
      "https://www.yumping.com/ofertas/buceo/guipuzcoa/curso-open-water-diver-ssi-san-sebastian-3-4-dias--o86327",
      "https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-en-san-sebastian--o86324"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-estepona",
    "slug": "buceo-estepona",
    "name": "Buceo Estepona",
    "location": "Estepona · Manilva",
    "region": "Andalucía",
    "description": "Buceo Estepona figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/buceo-estepona--e19752364",
      "https://www.yumping.com/ofertas/buceo/malaga/dos-bautismos-de-buceo-piscina-y-mar-en-estepona--o61766",
      "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-del-sol-3-horas--o36366",
      "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-el-mar-en-estepona--o61764",
      "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",
      "https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-finisterre-1274",
    "slug": "buceo-finisterre-1274",
    "name": "Buceo Finisterre",
    "location": "Finisterre",
    "region": "Galicia",
    "description": "Buceo Finisterre figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/es-MX/buceo/buceo-finisterre--e1274",
      "https://www.yumping.com/es-MX/ofertas/buceo/acoruna/bautismo-de-buceo-en-finisterre--o507",
      "https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-costa-da-morte--o55667",
      "https://www.yumping.com/ofertas/buceo/acoruna/curso-padi-advanced-open-water-diver-en-finisterre--o505",
      "https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-padi-open-water-diver-en-finisterre--o511"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-hondarribia-11447",
    "slug": "buceo-hondarribia-11447",
    "name": "Buceo Hondarribia",
    "location": "Hondarribia",
    "region": "País Vasco",
    "description": "Buceo Hondarribia figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/buceo-hondarribia--e11447",
      "https://www.yumping.com/ofertas/buceo/guipuzcoa/inmersion-buceo-en-hondarribia-alquiler-equipo--o53172",
      "https://www.yumping.com/ofertas/buceo/guipuzcoa/buceo-alquiler-botella-y-plomos-hondarribia--o53171",
      "https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-hondarribia--o5411"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-isla-negra-19863884",
    "slug": "buceo-isla-negra-19863884",
    "name": "Buceo Isla Negra",
    "location": "San Juan de los Terreros",
    "region": "Andalucía",
    "description": "Buceo Isla Negra figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-isla-negra--e19863884",
      "https://www.yumping.com/ofertas/buceo/almeria/inmersion-con-botella-mas-plomos-en-almeria--o31010",
      "https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-padi-en-villariscos--o65210"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-las-negras-1286",
    "slug": "buceo-las-negras-1286",
    "name": "Buceo Las Negras",
    "location": "Cabo de Gata",
    "region": "Andalucía",
    "description": "Buceo Las Negras figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/buceo-las-negras--e1286",
      "https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-cabo-de-gata-3-dias--o68413"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-marina-19725165",
    "slug": "buceo-marina-19725165",
    "name": "Buceo Marina",
    "location": "La Herradura",
    "region": "Andalucía",
    "description": "Buceo Marina figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-marina--e19725165",
      "https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-en-granada-2-horas--o36122",
      "https://www.yumping.com/ofertas/buceo/granada/curso-padi-open-water-diver-en-granada--o36123",
      "https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-scuba-diver-granada--o36125"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-navarra-1977",
    "slug": "buceo-navarra-1977",
    "name": "Buceo Navarra",
    "location": "Mutilva Baja",
    "region": "Navarra",
    "description": "Buceo Navarra figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-navarra--e1977",
      "https://www.yumping.com/ofertas/buceo/navarra/curso-de-open-water-en-navarra-iniciacion-al-buceo--o10766"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-pandora-19690666",
    "slug": "buceo-pandora-19690666",
    "name": "Buceo Pandora",
    "location": "Arinaga · Risco Verde",
    "region": "Canarias",
    "description": "Buceo Pandora figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/es-MX/buceo/buceo-pandora--e19690666",
      "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-mar-desde-risco-verde--o28628",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bono-10-inmersiones--o28756",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/inmersion-desde-costa-en-gran-canaria-titulados--o28703"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-tenerife-3880",
    "slug": "buceo-tenerife-3880",
    "name": "Buceo Tenerife",
    "location": "Las Chafiras · Las Galletas · Tenerife",
    "region": "Canarias",
    "description": "Buceo Tenerife figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-tenerife--e3880",
      "https://www.yumping.com/ofertas/buceo/tenerife/inmersion-de-buceo-tenerife-con-alquiler-de-equipo--o50921",
      "https://www.yumping.com/ofertas/buceo/tenerife/inmersion-de-buceo-en-las-galletas-tenerife--o31304",
      "https://www.yumping.com/ofertas/buceo/tenerife/padi-open-water-diver-en-las-galletas-tenerife--o31296",
      "https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-desde-barco-tenerife--o31281"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buceo-valencia-19635236",
    "slug": "buceo-valencia-19635236",
    "name": "Buceo Valencia",
    "location": "La Pobla de Farnals · Valencia",
    "region": "Comunidad Valenciana",
    "description": "Buceo Valencia figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buceo-valencia--e19635236",
      "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-playa-pobla-marina-180-min--o45414",
      "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-piscina-valencia--o26644",
      "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-el-mar-de-valencia--o26649",
      "https://www.yumping.com/ofertas/buceo/valencia/curso-buceo-open-water-diver-en-mar--o26654"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "buddha-divers-19760797",
    "slug": "buddha-divers-19760797",
    "name": "Buddha Divers",
    "location": "Tarifa",
    "region": "Andalucía",
    "description": "Buddha Divers figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/buddha-divers--e19760797",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-open-water-en-tarifa-de-2-dias--o19201",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-scuba-diver-en-tarifa-de-2-dias--o19198",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-de-apnea-en-la-isla-de-las-palomas-4-horas--o70324"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "caballito-salao-19636067",
    "slug": "caballito-salao-19636067",
    "name": "Caballito Salao",
    "location": "La Azohía",
    "region": "Murcia",
    "description": "Caballito Salao figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/caballito-salao--e19636067",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-la-azohia--o7655",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-open-water-diver-en-la-azohia--o60038",
      "https://www.yumping.com/ofertas/buceo/murcia/salida-doble-de-buceo-en-cabo-tinoso-titulados--o4717"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "cala-santanyi-diving-center-15224",
    "slug": "cala-santanyi-diving-center-15224",
    "name": "Cala Santanyi Diving Center",
    "location": "Cala Santanyí",
    "region": "Baleares",
    "description": "Cala Santanyi Diving Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/cala-santanyi-diving-center--e15224",
      "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-santanyi--o56243",
      "https://www.yumping.com/es-MX/ofertas/buceo/mallorca/padi-open-water-diver-en-cala-santanyi--o56247",
      "https://www.yumping.com/ofertas/buceo/mallorca/padi-advanced-open-water-diver-cala-santanyi--o56250"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "calamar-gigante-19776791",
    "slug": "calamar-gigante-19776791",
    "name": "Calamar Gigante",
    "location": "Garrucha",
    "region": "Andalucía",
    "description": "Calamar Gigante figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/calamar-gigante--e19776791",
      "https://www.yumping.com/ofertas/buceo/almeria/curso-padi-open-water-diver-en-mojacar--o86677"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "calpe-multiaventura-315",
    "slug": "calpe-multiaventura-315",
    "name": "Calpe Multiaventura",
    "location": "Calpe",
    "region": "Comunidad Valenciana",
    "description": "Calpe Multiaventura figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/calpe-multiaventura--e315",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-open-water-diver-en-calpe-3-dias--o1226",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-advanced-open-water-en-calpe--o1227",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
      "https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-playa-en-calpe-1h-30-minutos--o1234"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "calypso-diving-estartit-7462",
    "slug": "calypso-diving-estartit-7462",
    "name": "Calypso Diving Estartit",
    "location": "L'Estartit · Torroella de Montgrí",
    "region": "Cataluña",
    "description": "Calypso Diving Estartit figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/calypso-diving-estartit--e7462",
      "https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-estartit-5-dias--o57566",
      "https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-padi-advanced-en-estartit-3-dias--o57567",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-mar-en-cala-pedrosa-estartit--o57564",
      "https://www.yumping.com/ofertas/buceo/girona/buceo-a-las-islas-medas-o-la-costa-del-montgri--o27211"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "cbs-centro-de-buceo-del-sureste-3879",
    "slug": "cbs-centro-de-buceo-del-sureste-3879",
    "name": "CBS Centro de Buceo del Sureste",
    "location": "La Azohía · Mazarrón · Puerto de Mazarrón",
    "region": "Murcia",
    "description": "CBS Centro de Buceo del Sureste figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/cbs-centro-de-buceo-del-sureste--e3879",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-diver-en-mazarron--o62684",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-scuba-diver-de-padi-en-la-azohia--o68794",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-desde-barco-en-mazarron--o32148",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-intensivo-buceo-open-water-mazarron-3-dias--o32149",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-feda-1-estrella-en-pto-de-mazarron--o32141"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centollo-dive-club-19777108",
    "slug": "centollo-dive-club-19777108",
    "name": "Centollo Dive Club",
    "location": "Tarifa",
    "region": "Andalucía",
    "description": "Centollo Dive Club figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/centollo-dive-club--e19777108",
      "https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
      "https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-mar-en-tarifa-2-horas--o53863",
      "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-tarifa-sin-equipo--o53865",
      "https://www.yumping.com/ofertas/buceo/cadiz/salidas-de-buceo-en-tarifa-grupos-pequenos-1h--o61941"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-buceo-altair-19754599",
    "slug": "centro-buceo-altair-19754599",
    "name": "Centro Buceo Altair",
    "location": "Alicante",
    "region": "Comunidad Valenciana",
    "description": "Centro Buceo Altair figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/centro-buceo-altair--e19754599",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-alicante-o-calpe--o27573"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-de-buceo-alpha-570",
    "slug": "centro-de-buceo-alpha-570",
    "name": "Centro de Buceo Alpha",
    "location": "Cabo de Gata",
    "region": "Andalucía",
    "description": "Centro de Buceo Alpha figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/centro-de-buceo-alpha--e570",
      "https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-de-buceo-naranjito-12156",
    "slug": "centro-de-buceo-naranjito-12156",
    "name": "Centro de Buceo Naranjito",
    "location": "Cabo de Palos",
    "region": "Murcia",
    "description": "Centro de Buceo Naranjito figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/centro-de-buceo-naranjito--e12156",
      "https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-cabo-de-palos--o14978",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-buceador-dos-estrellas-cabo-de-palos--o14989",
      "https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-barco-en-cabo-de-palos--o14983",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-al-buceo-open-water-murcia--o14809",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-advanced-open-water-diver-murcia--o14984"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-de-buceo-puerto-de-javea-3876",
    "slug": "centro-de-buceo-puerto-de-javea-3876",
    "name": "Centro de Buceo Puerto de Javea",
    "location": "Jávea",
    "region": "Comunidad Valenciana",
    "description": "Centro de Buceo Puerto de Javea figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/centro-de-buceo-puerto-de-javea--e3876",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-de-buceo-scorpora-581",
    "slug": "centro-de-buceo-scorpora-581",
    "name": "Centro de Buceo Scorpora",
    "location": "Serra Gelada",
    "region": "Comunidad Valenciana",
    "description": "Centro de Buceo Scorpora figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/centro-de-buceo-scorpora--e581",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-serra-gelada-3-horas--o64813"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-de-buceo-splash-3877",
    "slug": "centro-de-buceo-splash-3877",
    "name": "Centro de Buceo Splash",
    "location": "Orcoyen",
    "region": "Navarra",
    "description": "Centro de Buceo Splash figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/centro-de-buceo-splash--e3877",
      "https://www.yumping.com/ofertas/buceo/navarra/curso-buceador-open-water-diver-navarra--o34043"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "centro-escuela-de-buceo-mojacar-3673",
    "slug": "centro-escuela-de-buceo-mojacar-3673",
    "name": "Centro Escuela de Buceo Mojacar",
    "location": "Mojácar",
    "region": "Andalucía",
    "description": "Centro Escuela de Buceo Mojacar figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/centro-escuela-de-buceo-mojacar--e3673",
      "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-desde-playa-mojacar-medio-dia--o86956"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "club-de-buceo-noraysub-19754166",
    "slug": "club-de-buceo-noraysub-19754166",
    "name": "Club de Buceo NoraySub",
    "location": "Calahonda",
    "region": "Andalucía",
    "description": "Club de Buceo NoraySub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/club-de-buceo-noraysub--e19754166",
      "https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-en-calahonda-90-minutos--o63864"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "club-de-buceo-quimerasub-19690297",
    "slug": "club-de-buceo-quimerasub-19690297",
    "name": "Club de Buceo Quimerasub",
    "location": "Radazul",
    "region": "Canarias",
    "description": "Club de Buceo Quimerasub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/club-de-buceo-quimerasub--e19690297",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-y-video-hd-en-radazul--o63387"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "club-dofi-sub-7534",
    "slug": "club-dofi-sub-7534",
    "name": "Club Dofí-Sub",
    "location": "L'Ametlla de Mar · L'Ametlla de Mar, Tarragona",
    "region": "Cataluña",
    "description": "Club Dofí-Sub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/club-dofi-sub--e7534",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-discover-scuba-diving-lametlla--o1311",
      "https://www.yumping.com/ofertas/buceo/tarragona/curso-buceo-padi-open-water-diver-en-lametlla--o1314"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "dawn-dives-academy-8731",
    "slug": "dawn-dives-academy-8731",
    "name": "Dawn Dives Academy",
    "location": "Playa Blanca",
    "region": "Canarias",
    "description": "Dawn Dives Academy figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/dawn-dives-academy--e8731",
      "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h--o77225"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "deep-blue-diving-4028",
    "slug": "deep-blue-diving-4028",
    "name": "Deep Blue Diving",
    "location": "Caleta de Fuste",
    "region": "Canarias",
    "description": "Deep Blue Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/deep-blue-diving--e4028",
      "https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-caleta-de-fuste-y-fotos--o55340"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "dive-center-barcelona-19765577",
    "slug": "dive-center-barcelona-19765577",
    "name": "Dive Center Barcelona",
    "location": "Barcelona",
    "region": "Cataluña",
    "description": "Dive Center Barcelona figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/freeandivers--e19765577",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-diver-barcelona--o13955"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "dive-dive-3623",
    "slug": "dive-dive-3623",
    "name": "Dive&Dive",
    "location": "Calpe",
    "region": "Comunidad Valenciana",
    "description": "Dive&Dive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/divedive--e3623",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-padi-discover-scuba-diving-en-calpe-5h--o86705"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "divemadrid-3153",
    "slug": "divemadrid-3153",
    "name": "DIVEMADRID",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "DIVEMADRID figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/divemadrid--e3153",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-buceo-con-aire-enriquecido-nitrox-en-madrid--o27482"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "divemania-19697367",
    "slug": "divemania-19697367",
    "name": "Divemanía",
    "location": "A Coruña",
    "region": "Galicia",
    "description": "Divemanía figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/divemania--e19697367",
      "https://www.yumping.com/ofertas/buceo/acoruna/padi-open-water-diver-marinaseca--o28887",
      "https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-advanced-open-water-de-buceo-en-a-coruna--o33250"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diver-soul-tarifa-19755895",
    "slug": "diver-soul-tarifa-19755895",
    "name": "Diver Soul Tarifa",
    "location": "Tarifa",
    "region": "Andalucía",
    "description": "Diver Soul Tarifa figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diver-soul-tarifa--e19755895",
      "https://www.yumping.com/ofertas/buceo/cadiz/ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min--o66279",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-open-water-diver-en-tarifa-4-dias--o66281"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diversub-19751117",
    "slug": "diversub-19751117",
    "name": "Diversub",
    "location": "Platja d'Aro · Sant Antoni de Calonge",
    "region": "Cataluña",
    "description": "Diversub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diversub--e19751117",
      "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-platja-d-aro-2-horas--o62048",
      "https://www.yumping.com/ofertas/buceo/girona/bautizo-buceo-en-pareja-sant-antoni-de-calonge-2-h--o60679",
      "https://www.yumping.com/ofertas/buceo/girona/curso-iniciacion-al-buceo-4-dias-en-costa-brava--o60551"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-combat-19679828",
    "slug": "diving-combat-19679828",
    "name": "Diving & Combat",
    "location": "Tossa de Mar",
    "region": "Cataluña",
    "description": "Diving & Combat figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-combat--e19679828",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar--o61843",
      "https://www.yumping.com/ofertas/buceo/girona/snorkel-en-tossa-de-mar-2-horas-y-30--o61846"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-atlantis-19728197",
    "slug": "diving-atlantis-19728197",
    "name": "Diving Atlantis",
    "location": "Adeje · Guía de Isora",
    "region": "Canarias",
    "description": "Diving Atlantis figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-atlantis--e19728197",
      "https://www.yumping.com/ofertas/buceo/tenerife/open-water-diver-padi-en-tenerife-en-3-dias--o39502",
      "https://www.yumping.com/ofertas/buceo/tenerife/bono-de-10-inmersiones-tenerife--o22282"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-canarias-19696353",
    "slug": "diving-canarias-19696353",
    "name": "Diving Canarias",
    "location": "Radazul",
    "region": "Canarias",
    "description": "Diving Canarias figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-canarias--e19696353",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-diver-costa-de-radazul--o42638"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-dragonera-19777561",
    "slug": "diving-dragonera-19777561",
    "name": "Diving Dragonera",
    "location": "La Dragonera · Port d'Andratx",
    "region": "Baleares",
    "description": "Diving Dragonera figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-dragonera--e19777561",
      "https://www.yumping.com/ofertas/buceo/mallorca/discover-scuba-diving-parque-natural-dragonera--o56220",
      "https://www.yumping.com/ofertas/buceo/mallorca/tour-de-snorkel-por-isla-del-dragon-2-horas--o42889",
      "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-palma-de-mallorca-3h--o28721",
      "https://www.yumping.com/ofertas/buceo/mallorca/snorkel-en-el-parque-natural-de-la-dragonera--o56218"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-la-casa-del-mar-19755566",
    "slug": "diving-la-casa-del-mar-19755566",
    "name": "Diving La Casa del Mar",
    "location": "Lloret de Mar",
    "region": "Cataluña",
    "description": "Diving La Casa del Mar figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-la-casa-del-mar--e19755566",
      "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-lloret-de-mar-2-horas--o65860"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-menorca-19711815",
    "slug": "diving-menorca-19711815",
    "name": "Diving Menorca",
    "location": "Fornells, Menorca",
    "region": "Baleares",
    "description": "Diving Menorca figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-menorca--e19711815",
      "https://www.yumping.com/ofertas/buceo/menorca/inmersion-de-buceo-en-la-reserva-marina-menorquina--o28826",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-advanced-open-water-diver-en-menorca--o46790",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-padi-open-water-diver-en-la-reserva-marina--o28827"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-salou-19733479",
    "slug": "diving-salou-19733479",
    "name": "Diving Salou",
    "location": "Salou",
    "region": "Cataluña",
    "description": "Diving Salou figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-salou--e19733479",
      "https://www.yumping.com/ofertas/buceo/tarragona/curso-advanced-open-water-diver-en-salou--o53794"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "diving-stones-19621453",
    "slug": "diving-stones-19621453",
    "name": "Diving Stones",
    "location": "Benidorm",
    "region": "Comunidad Valenciana",
    "description": "Diving Stones figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/diving-stones--e19621453",
      "https://www.yumping.com/ofertas/buceo/alicante/excursion-de-snorkel-en-parque-natural-de-benidorm--o36446",
      "https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-en-benidorm-sin-equipo--o36148",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-scuba-diver-en-benidorm-dos-dias--o36243",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-en-serra-gelada--o36245",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-barco-en-isla-de-benidorm--o36111",
      "https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-con-equipo-en-benidorm--o36146"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "dolphins-diving-center-19745282",
    "slug": "dolphins-diving-center-19745282",
    "name": "Dolphins Diving Center",
    "location": "Lloret de Mar",
    "region": "Cataluña",
    "description": "Dolphins Diving Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/dolphins-diving-center--e19745282",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar--o13961",
      "https://www.yumping.com/ofertas/buceo/girona/curso-certificacion-open-water-diver-ssi-en-girona--o55808"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "dpm-diving-19763235",
    "slug": "dpm-diving-19763235",
    "name": "DPM Diving",
    "location": "Costa Adeje",
    "region": "Canarias",
    "description": "DPM Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/dpm-diving--e19763235",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-costa-adeje-de-4-horas--o80893"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "dream-dive-3506",
    "slug": "dream-dive-3506",
    "name": "Dream Dive",
    "location": "Tossa de Mar",
    "region": "Cataluña",
    "description": "Dream Dive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/dream-dive--e3506",
      "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-desde-playa-en-tossa-de-mar--o14621"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "ds-divers-19865168",
    "slug": "ds-divers-19865168",
    "name": "DS DIVERS",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "DS DIVERS figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/ds-divers--e19865168",
      "https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-basico-en-madrid-y-levante-grupos--o35725",
      "https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-desde-barco--o35727"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "ecodive-19729349",
    "slug": "ecodive-19729349",
    "name": "Ecodive",
    "location": "Rincón de la Victoria",
    "region": "Andalucía",
    "description": "Ecodive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/ecodive--e19729349",
      "https://www.yumping.com/ofertas/buceo/malaga/curso-de-open-water-diver-en-rincon-de-la-victoria--o68503",
      "https://www.yumping.com/ofertas/buceo/malaga/curso-buceo-scuba-diver-12m-rincon-de-la-victoria--o68500"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "el-azul-gran-canaria-dive-center-19741108",
    "slug": "el-azul-gran-canaria-dive-center-19741108",
    "name": "El Azul Gran Canaria Dive Center",
    "location": "Las Palmas de Gran Canaria",
    "region": "Canarias",
    "description": "El Azul Gran Canaria Dive Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/el-azul-gran-canaria-dive-center--e19741108",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-gran-canaria-3-h--o50685"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "enjoy-sup-school-19706025",
    "slug": "enjoy-sup-school-19706025",
    "name": "Enjoy Sup School",
    "location": "Noja",
    "region": "Cantabria",
    "description": "Enjoy Sup School figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/enjoy-sup-school--e19706025",
      "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-noja-2h--o22856"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "estacio-nautica-l-ametlla-de-mar-19763165",
    "slug": "estacio-nautica-l-ametlla-de-mar-19763165",
    "name": "Estació Náutica L'Ametlla De Mar",
    "location": "L'Ametlla de Mar · L'Ametlla de Mar, Tarragona",
    "region": "Cataluña",
    "description": "Estació Náutica L'Ametlla De Mar figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/estacio-nautica-lametlla-de-mar--e19763165",
      "https://www.yumping.com/ofertas/buceo/tarragona/ruta-de-snorkel-para-ninos-en-lametlla-de-mar--o64549",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "explora-cadiz-buceo-12616",
    "slug": "explora-cadiz-buceo-12616",
    "name": "Explora Cádiz Buceo",
    "location": "El Puerto de Santa María · Tarifa",
    "region": "Andalucía",
    "description": "Explora Cádiz Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/explora-cadiz-buceo--e12616",
      "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-la-isla-de-tarifa--o32270",
      "https://www.yumping.com/es-MX/ofertas/buceo/cadiz/iniciacion-open-water-diver-puerto-de-santa-maria--o28548",
      "https://www.yumping.com/es-MX/ofertas/buceo/cadiz/padi-advanced-open-water-puerto-de-santa-maria--o28550",
      "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-costa-de-gibraltar--o32266",
      "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-cadiz-desde-barco--o32284",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautizo-en-piscina-reportaje-fotos-submarino--o28511",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautizo-de-buceo-con-fotografia-puerto-santa-maria--o28483"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "formar-buceo-1295",
    "slug": "formar-buceo-1295",
    "name": "Formar Buceo",
    "location": "Gijón",
    "region": "Asturias",
    "description": "Formar Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/formar-buceo--e1295",
      "https://www.yumping.com/ofertas/buceo/asturias/bautismo-en-piscina-discover-scuba-diving-candas--o57621",
      "https://www.yumping.com/ofertas/buceo/asturias/curso-padi-scuba-diver-en-el-cantabrico-candas--o57622",
      "https://www.yumping.com/ofertas/buceo/asturias/inmersion-de-buceo-desde-puerto-musel-con-equipo--o89112",
      "https://www.yumping.com/ofertas/buceo/asturias/curso-buceo-advanced-open-water-padi-en-candas--o57625"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "formentera-divers-19748467",
    "slug": "formentera-divers-19748467",
    "name": "Formentera Divers",
    "location": "La Savina",
    "region": "Baleares",
    "description": "Formentera Divers figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/formentera-divers--e19748467",
      "https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-puerto-de-la-sabina-2-30h--o56957"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "fuerteocean-dive-center-19865138",
    "slug": "fuerteocean-dive-center-19865138",
    "name": "FuerteOcean Dive Center",
    "location": "Morro Jable",
    "region": "Canarias",
    "description": "FuerteOcean Dive Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/fuerte-ocean-dive-center--e19865138",
      "https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-piscina-y-mar-en-morro-jable--o23953",
      "https://www.yumping.com/ofertas/buceo/fuerteventura/tour-de-snorkel-desde-barco-por-costa-morro-jable--o69754"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "glups-diving-8875",
    "slug": "glups-diving-8875",
    "name": "Glups Diving",
    "location": "Cambrils · Salou",
    "region": "Cataluña",
    "description": "Glups Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/glups-diving--e8875",
      "https://www.yumping.com/ofertas/buceo/tarragona/dos-inmersiones-de-buceo-en-cambrils--o21162",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-discovery-scuba-diving-tarragona--o52840",
      "https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-avanzado-en-tarragona-2-3-dias--o52841"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "go-dive-tenerife-19750701",
    "slug": "go-dive-tenerife-19750701",
    "name": "Go-Dive Tenerife",
    "location": "Las Chafiras",
    "region": "Canarias",
    "description": "Go-Dive Tenerife figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/go-dive-tenerife--e19750701",
      "https://www.yumping.com/ofertas/buceo/tenerife/inmersiones-de-buceo-en-tenerife-con-fotos--o60253",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-padi-open-water-diver-en-tenerife-3-dias--o60252"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "godive-cadiz-19752527",
    "slug": "godive-cadiz-19752527",
    "name": "goDive Cadiz",
    "location": "El Palmar · Tarifa",
    "region": "Andalucía",
    "description": "goDive Cadiz figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/godive-cadiz--e19752527",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-2-inmersiones-en-tarifa--o61947",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-piscina-45-minutos-el-palmar--o61964"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "grassi-sub-10171",
    "slug": "grassi-sub-10171",
    "name": "Grassi Sub",
    "location": "L'Escala",
    "region": "Cataluña",
    "description": "Grassi Sub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/grassi-sub--e10171",
      "https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
      "https://www.yumping.com/ofertas/buceo/girona/safari-de-buceo-costa-del-montgri-5-horas--o36307",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-parque-natural-del-montgri-3h--o77668"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "h2o-sports-4617",
    "slug": "h2o-sports-4617",
    "name": "H2O Sports",
    "location": "Marbella",
    "region": "Andalucía",
    "description": "H2O Sports figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/h2o-sports--e4617",
      "https://www.yumping.com/ofertas/buceo/malaga/padi-rescue-diver-en-marbella--o30945",
      "https://www.yumping.com/ofertas/buceo/malaga/padi-advanced-open-water-en-marbella--o30939",
      "https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-marbella--o30936"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "island-watersports-lanzarote-4114",
    "slug": "island-watersports-lanzarote-4114",
    "name": "Island Watersports Lanzarote",
    "location": "Puerto del Carmen",
    "region": "Canarias",
    "description": "Island Watersports Lanzarote figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/island-watersports-lanzarote--e4114",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceador-de-rescate-padi-puerto-del-carmen--o15615",
      "https://www.yumping.com/ofertas/buceo/lanzarote/padi-advanced-open-water-puerto-del-carmen--o204",
      "https://www.yumping.com/ofertas/buceo/lanzarote/padi-rescue-diver-en-lanzarote--o205",
      "https://www.yumping.com/ofertas/buceo/lanzarote/padi-divemaster-puerto-del-carmen--o206"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "isub-san-jose-1284",
    "slug": "isub-san-jose-1284",
    "name": "Isub San Jose",
    "location": "Cabo de Gata · San José",
    "region": "Andalucía",
    "description": "Isub San Jose figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/isub-san-jose--e1284",
      "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata--o26563",
      "https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-en-cabo-de-gata--o36129",
      "https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-en-san-jose--o28185"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "karapat-dive-19752932",
    "slug": "karapat-dive-19752932",
    "name": "Karapat Dive",
    "location": "Gran Canaria · Las Canteras · Telde",
    "region": "Canarias",
    "description": "Karapat Dive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Pecio, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Pecio",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/karapat-dive--e19752932",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-doble-en-el-parque-de-la-atlantida-y-pecios--o64185",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-telde-3-horas--o62277",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-open-water-diver-en-telde-3-dias--o62278",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-telde-3-dias--o62279",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/snorkel-en-playa-de-las-canteras-2-horas--o64224"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "la-isla-flotante-19738451",
    "slug": "la-isla-flotante-19738451",
    "name": "La Isla Flotante",
    "location": "Es Pujols",
    "region": "Baleares",
    "description": "La Isla Flotante figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/la-isla-flotante--e19738451",
      "https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-aguas-abiertas-formentera-1h--o62795",
      "https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-con-titulacion-formentera--o62794",
      "https://www.yumping.com/ofertas/buceo/formentera/buceo-en-formentera-con-equipo-completo--o62796",
      "https://www.yumping.com/ofertas/buceo/formentera/open-water-diver-padi-en-formentera-5-dias--o62797",
      "https://www.yumping.com/ofertas/buceo/formentera/curso-de-buceo-scuba-diver-en-els-pujols--o64650"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "la-rana-buceo-19863397",
    "slug": "la-rana-buceo-19863397",
    "name": "La Rana Buceo",
    "location": "Jávea",
    "region": "Comunidad Valenciana",
    "description": "La Rana Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/la-rana-buceo--e19863397",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-javea-desde-embarcacion-y-fotos--o13445",
      "https://www.yumping.com/ofertas/buceo/alicante/salida-de-snorkel-desde-embarcacion-javea-2-5-h--o25800"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "lanzarote-non-stop-divers-19720740",
    "slug": "lanzarote-non-stop-divers-19720740",
    "name": "Lanzarote Non Stop Divers",
    "location": "Playa Blanca",
    "region": "Canarias",
    "description": "Lanzarote Non Stop Divers figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/lanzarote-non-stop-divers--e19720740",
      "https://www.yumping.com/ofertas/buceo/lanzarote/inmersiones-en-lanzarote-con-buceo-nocturno-gratis--o37280",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-en-lanzarote-4-dias--o37278"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "laredo-aventura-19726061",
    "slug": "laredo-aventura-19726061",
    "name": "Laredo Aventura",
    "location": "Noja",
    "region": "Cantabria",
    "description": "Laredo Aventura figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/laredo-aventura--e19726061",
      "https://www.yumping.com/ofertas/buceo/cantabria/ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja--o66105"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "liquid-planet-19714232",
    "slug": "liquid-planet-19714232",
    "name": "Liquid Planet",
    "location": "Tías",
    "region": "Canarias",
    "description": "Liquid Planet figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/liquid-planet--e19714232",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-de-sidemount-de-buceo-lanzarote--o33853",
      "https://www.yumping.com/ofertas/buceo/lanzarote/bautizo-buceo-lanzarote-con-torpedos-subacuaticos--o33852"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mar-de-hielo-19752104",
    "slug": "mar-de-hielo-19752104",
    "name": "Mar de Hielo",
    "location": "Salou · Salou, Tarragona",
    "region": "Cataluña",
    "description": "Mar de Hielo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/mar-de-hielo--e19752104",
      "https://www.yumping.com/ofertas/buceo/tarragona/salida-de-buceo-desde-embarcacion-tarragona--o61647",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-salou-3-horas--o61750",
      "https://www.yumping.com/ofertas/buceo/tarragona/salida-buceo-nocturna-desde-barco-salou-2-h-30--o61697",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-desde-barco-tarragona-3h--o61736",
      "https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-diver-padi-en-tarragona-3-dias--o61737",
      "https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-una-estrella-fedas-tarragona--o61758"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mardays-dive-resort-19698976",
    "slug": "mardays-dive-resort-19698976",
    "name": "MarDays Dive Resort",
    "location": "Jávea",
    "region": "Comunidad Valenciana",
    "description": "MarDays Dive Resort figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/mardays-dive-resort--e19698976",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-javea--o18720"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "maremasma-19718363",
    "slug": "maremasma-19718363",
    "name": "Maremasma",
    "location": "Foz",
    "region": "Galicia",
    "description": "Maremasma figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/maremasma--e19718363",
      "https://www.yumping.com/ofertas/buceo/lugo/descubrimiento-del-buceo-en-la-ria-de-viveiro--o53324",
      "https://www.yumping.com/ofertas/buceo/lugo/curso-de-buceo-open-water-diver-en-viveiro--o53325",
      "https://www.yumping.com/ofertas/buceo/lugo/salidas-de-buceo-en-la-ria-de-viveiro-titulados--o53327",
      "https://www.yumping.com/ofertas/buceo/lugo/cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h--o42327",
      "https://www.yumping.com/ofertas/buceo/lugo/ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h--o42326"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "marepolis-altea-19717923",
    "slug": "marepolis-altea-19717923",
    "name": "Marépolis Altea",
    "location": "Altea",
    "region": "Comunidad Valenciana",
    "description": "Marépolis Altea figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/marepolis-altea--e19717923",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-altea-desde-barco--o36653",
      "https://www.yumping.com/ofertas/buceo/alicante/padi-advanced-open-water-altea--o31342"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "marina-diving-tarragona-19724742",
    "slug": "marina-diving-tarragona-19724742",
    "name": "Marina Diving Tarragona",
    "location": "L'Ametlla de Mar · L'Ametlla de Mar, Tarragona",
    "region": "Cataluña",
    "description": "Marina Diving Tarragona figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/marina-diving-tarragona--e19724742",
      "https://www.yumping.com/ofertas/buceo/tarragona/ruta-de-snorkel-con-oceanografas-lametlla-de-mar--o64532",
      "https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-snsi-nitrox-ametlla-de-mar--o59377",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-en-cala-llobeta-en-calafat--o61500",
      "https://www.yumping.com/ofertas/buceo/tarragona/pack-open-water-snsi-nitrox-y-advanced-tarragona--o59893"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "maskydiving-19631792",
    "slug": "maskydiving-19631792",
    "name": "Maskydiving",
    "location": "Sitges · Vilafranca del Penedès",
    "region": "Cataluña",
    "description": "Maskydiving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/maskydiving--e19631792",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-en-sitges-open-water-diver--o14196",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-divemaster--o14207",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-rescate-en-el-mar--o14200",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver--o14199",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver--o14195"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "maskydiving-sitges-19732869",
    "slug": "maskydiving-sitges-19732869",
    "name": "Maskydiving Sitges",
    "location": "Sitges · Vilafranca del Penedès",
    "region": "Cataluña",
    "description": "Maskydiving Sitges figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/maskydiving-sitges--e19732869",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-divemaster-en-sitges--o68124",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver-en-sitges--o68123",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver-en-sitges--o68120"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "masmar-buceo-19785821",
    "slug": "masmar-buceo-19785821",
    "name": "MásMar Buceo",
    "location": "La Manga del Mar Menor",
    "region": "Murcia",
    "description": "MásMar Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/masmar-buceo--e19785821",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88731",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88730"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "medanodive-19748521",
    "slug": "medanodive-19748521",
    "name": "Medanodive",
    "location": "El Médano · El Médano, Tenerife",
    "region": "Canarias",
    "description": "Medanodive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive, Pecio, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive",
      "Pecio",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/medanodive--e19748521",
      "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-el-pecio-de-taibada-de-3-horas--o56808",
      "https://www.yumping.com/ofertas/buceo/tenerife/ssi-advance-open-water-diver-el-medano--o56771",
      "https://www.yumping.com/ofertas/buceo/tenerife/pack-2-inmersiones-desde-barco-suroeste-tenerife--o56715",
      "https://www.yumping.com/ofertas/buceo/tenerife/ssi-open-water-diver-tenerife-sur--o56714",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-ssi-scuba-diver-en-el-medano--o56710",
      "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceadores-certificados-tenerife--o56661",
      "https://www.yumping.com/ofertas/buceo/tenerife/pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h--o56660",
      "https://www.yumping.com/ofertas/buceo/tenerife/excursion-de-snorkel-en-tenerife-3-5-horas--o56659",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-buceo-45-min-tenerife-3-5-h--o56658"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mergullo-compostela-4581",
    "slug": "mergullo-compostela-4581",
    "name": "Mergullo Compostela",
    "location": "A Coruña · Santiago de Compostela",
    "region": "Galicia",
    "description": "Mergullo Compostela figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/mergullo-compostela--e4581",
      "https://www.yumping.com/ofertas/buceo/acoruna/curso-open-water-diver-en-santiago-de-compostela--o15303",
      "https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-a-coruna--o15307"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mirafondos-5916",
    "slug": "mirafondos-5916",
    "name": "Mirafondos",
    "location": "Las Canteras · Las Palmas de Gran Canaria",
    "region": "Canarias",
    "description": "Mirafondos figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/mirafondos--e5916",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-taurito--o45998",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-open-water-diver--o20549",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-gran-canaria-4-horas--o20699"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "molamola-dive-3781",
    "slug": "molamola-dive-3781",
    "name": "Molamola Dive",
    "location": "La Herradura · Málaga",
    "region": "Andalucía",
    "description": "Molamola Dive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/molamola-dive--e3781",
      "https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-para-parejas-en-la-herradura-5h--o60978",
      "https://www.yumping.com/ofertas/buceo/granada/curso-open-water-de-buceo-la-herradura--o62206",
      "https://www.yumping.com/ofertas/buceo/granada/inmersion-con-equipo-en-la-herradura-4-horas--o57606",
      "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-herradura-con-fotos--o55299",
      "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-malaga-para-grupos--o59347"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mon-diving-19725021",
    "slug": "mon-diving-19725021",
    "name": "Mon Diving",
    "location": "Dénia",
    "region": "Comunidad Valenciana",
    "description": "Mon Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/mon-diving--e19725021",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-advanced-open-water-diver-en-denia--o65287",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-economico-costa-de-denia--o56080",
      "https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-y-equipo-en-la-costa-de-denia--o65282",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-rescue-diver-y-efr-en-denia--o65447"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mouro-sub-14997",
    "slug": "mouro-sub-14997",
    "name": "Mouro Sub",
    "location": "Santander",
    "region": "Cantabria",
    "description": "Mouro Sub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/mouro-sub--e14997",
      "https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-en-la-isla-de-mouro--o12609",
      "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-la-isla-de-mouro--o43837",
      "https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-3-horas-en-cantabria--o62198",
      "https://www.yumping.com/ofertas/buceo/cantabria/curso-open-water-diver-con-certificacion-santander--o36886"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "mundo-activo-2268",
    "slug": "mundo-activo-2268",
    "name": "Mundo Activo",
    "location": "La Manga del Mar Menor",
    "region": "Murcia",
    "description": "Mundo Activo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/mundo-activo--e2268",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceador-de-rescate-primeros-auxilios--o17373",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-avanzado-aowd-de-padi-la-manga--o17372"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "n2o2-dive-19723909",
    "slug": "n2o2-dive-19723909",
    "name": "N2O2 Dive",
    "location": "Boadilla del Monte",
    "region": "Comunidad de Madrid",
    "description": "N2O2 Dive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/n2o2-dive--e19723909",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-discover-scuba-diving-en-boadilla--o68495",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-open-water-diver-en-boadilla--o44170",
      "https://www.yumping.com/ofertas/buceo/madrid/padi-bautizo-de-buceo-en-boadilla-del-monte--o44146"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "native-diving-7296",
    "slug": "native-diving-7296",
    "name": "Native Diving",
    "location": "Costa Teguise",
    "region": "Canarias",
    "description": "Native Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/native-diving--e7296",
      "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-con-1-inmersion-en-lanzarote--o38911",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-open-water-diver-padi-en-lanzarote-3-dias--o38944"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "nau-tech-19865760",
    "slug": "nau-tech-19865760",
    "name": "Nau Tech",
    "location": "Sitges",
    "region": "Cataluña",
    "description": "Nau Tech figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/nautech--e19865760",
      "https://www.yumping.com/ofertas/buceo/barcelona/alquiler-scooter-subacuatico-port-daiguadolc-1h--o91112"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "nauga-1272",
    "slug": "nauga-1272",
    "name": "Nauga",
    "location": "A Coruña",
    "region": "Galicia",
    "description": "Nauga figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/nauga--e1272",
      "https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-puerto-de-a-coruna-3h--o85250"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "nautica-medusa-4448",
    "slug": "nautica-medusa-4448",
    "name": "Náutica Medusa",
    "location": "Vilagarcía de Arousa",
    "region": "Galicia",
    "description": "Náutica Medusa figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/nautica-medusa--e4448",
      "https://www.yumping.com/ofertas/buceo/pontevedra/curso-de-buceo-open-water-en-vilagarcia--o4425"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "neodive-19745166",
    "slug": "neodive-19745166",
    "name": "NeoDive",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "NeoDive figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/neodive--e19745166",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-padi-divemaster-en-las-tablas--o31215",
      "https://www.yumping.com/ofertas/buceo/madrid/titulo-de-padi-rescue-diver-en-las-tablas--o31209",
      "https://www.yumping.com/ofertas/buceo/madrid/titulo-padi-advanced-open-water-diver-las-tablas--o31204"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "nojactiva-19702312",
    "slug": "nojactiva-19702312",
    "name": "NojActiva",
    "location": "Noja",
    "region": "Cantabria",
    "description": "NojActiva figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/multiaventura/nojactiva--e19702312",
      "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja--o66104"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "ocean-friends-buceo-y-apnea-19735920",
    "slug": "ocean-friends-buceo-y-apnea-19735920",
    "name": "Ocean Friends Buceo y Apnea",
    "location": "Los Abrigos",
    "region": "Canarias",
    "description": "Ocean Friends Buceo y Apnea figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/ocean-friends-buceo-y-apnea--e19735920",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife--o46044"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "oceanos-diving-center-19658724",
    "slug": "oceanos-diving-center-19658724",
    "name": "Océanos Diving Center",
    "location": "Lloret de Mar",
    "region": "Cataluña",
    "description": "Océanos Diving Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/oceanos-diving-center--e19658724",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar-3-h--o13953",
      "https://www.yumping.com/ofertas/buceo/girona/curso-buceo-padi-open-water-diver-en-lloret-de-mar--o65241"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "ohana-diving-19866849",
    "slug": "ohana-diving-19866849",
    "name": "Ohana Diving",
    "location": "L'Ametlla de Mar, Tarragona",
    "region": "Cataluña",
    "description": "Ohana Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/ohana-diving-s-l--e19866849",
      "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-tarragona-con-instructor--o41537"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "ok-castro-dive-club-de-buceo-19757525",
    "slug": "ok-castro-dive-club-de-buceo-19757525",
    "name": "Ok Castro Dive Club de Buceo",
    "location": "Castro Urdiales",
    "region": "Cantabria",
    "description": "Ok Castro Dive Club de Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive, Pecio, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive",
      "Pecio",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/es-MX/buceo/ok-castro-dive-club-de-buceo--e19757525",
      "https://www.yumping.com/es-MX/ofertas/buceo/cantabria/bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h--o70009",
      "https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-carguero-de-saltacaballo--o70020",
      "https://www.yumping.com/es-MX/ofertas/buceo/cantabria/inmersion-de-buceo-bajo-el-castillo-de-c-urdiales--o70016",
      "https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h--o70031",
      "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-castro-urdiales-desde-embarcacion-2h--o74685"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "orcasub-4378",
    "slug": "orcasub-4378",
    "name": "Orcasub",
    "location": "Platja Mitjorn",
    "region": "Baleares",
    "description": "Orcasub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/orcasub--e4378",
      "https://www.yumping.com/ofertas/buceo/formentera/inmersion-de-buceo-con-equipo-en-formentera--o36817",
      "https://www.yumping.com/ofertas/buceo/formentera/bautismo-de-buceo-en-playa-formentera-1-hora--o36810",
      "https://www.yumping.com/ofertas/buceo/formentera/curso-open-water-diver-padi-formentera--o36813",
      "https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-en-formentera-desde-barco--o50487",
      "https://www.yumping.com/ofertas/buceo/formentera/curso-scuba-diver-en-platja-migjorn-4-5-dias--o64641",
      "https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-por-la-costa-de-formentera-4-horas--o64660"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "palma-aquarium-19676636",
    "slug": "palma-aquarium-19676636",
    "name": "Palma Aquarium",
    "location": "Palma de Mallorca",
    "region": "Baleares",
    "description": "Palma Aquarium figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/aquariums/palma-aquarium--e19676636",
      "https://www.yumping.com/ofertas/buceo/mallorca/buceo-con-tiburones-en-el-palma-aquarium-mallorca--o56215"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "piraguilla-turismo-activo-7478",
    "slug": "piraguilla-turismo-activo-7478",
    "name": "Piraguilla Turismo Activo",
    "location": "Isla de Arousa",
    "region": "Galicia",
    "description": "Piraguilla Turismo Activo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/piraguilla-turismo-activo--e7478",
      "https://www.yumping.com/ofertas/buceo/pontevedra/excursion-de-snorkel-isla-de-arosa-media-jornada--o19836"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "posidonia-ecosports-19735788",
    "slug": "posidonia-ecosports-19735788",
    "name": "Posidonia Ecosports",
    "location": "Muchamiel",
    "region": "Comunidad Valenciana",
    "description": "Posidonia Ecosports figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/posidonia-ecosports--e19735788",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-muchamiel-con-instructor--o53070"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "posidonia-turismo-19711962",
    "slug": "posidonia-turismo-19711962",
    "name": "Posidonia turismo",
    "location": "Cabo de Palos",
    "region": "Murcia",
    "description": "Posidonia turismo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/posidonia-turismo--e19711962",
      "https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-snorkel-el-cabo-de-palos-con-fotos--o40398"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "pozo-scuba-11985",
    "slug": "pozo-scuba-11985",
    "name": "Pozo Scuba",
    "location": "El Cabrón · Gran Canaria · Pozo Izquierdo",
    "region": "Canarias",
    "description": "Pozo Scuba figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/pozo-scuba--e11985",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-la-costa-de-gran-canaria--o58995",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-pozo-izquierdo--o63831",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-pro-rec-tec-open-water-diver-en-gran-canaria--o59729",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-en-playa-de-el-cabron-gran-canaria-titulados--o58994"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "puerto-rico-diving-9853",
    "slug": "puerto-rico-diving-9853",
    "name": "Puerto Rico Diving",
    "location": "Puerto Rico",
    "region": "Canarias",
    "description": "Puerto Rico Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/es-MX/buceo/puerto-rico-diving--e9853",
      "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-open-water-puerto-rico--o29445",
      "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-scuba-diver-en-puerto-rico--o29501",
      "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-advanced-open-water-puerto-rico--o29461"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "puertobuceo-19748925",
    "slug": "puertobuceo-19748925",
    "name": "Puertobuceo",
    "location": "Algeciras, Cádiz · Tarifa",
    "region": "Andalucía",
    "description": "Puertobuceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/puertobuceo--e19748925",
      "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-la-costa-de-algeciras--o57620",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-punta-de-europa-tarifa-3h--o57389",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-open-water-diver-en-tarifa-4-dias--o57419"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "pura-vida-diving-19733439",
    "slug": "pura-vida-diving-19733439",
    "name": "Pura Vida Diving",
    "location": "Playa Blanca",
    "region": "Canarias",
    "description": "Pura Vida Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/pura-vida-diving--e19733439",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceo-open-water-en-lanzarote--o43093"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "quieres-bucear-19763171",
    "slug": "quieres-bucear-19763171",
    "name": "Quieres Bucear",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "Quieres Bucear figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/quieres-bucear--e19763171",
      "https://www.yumping.com/ofertas/buceo/madrid/bautismo-de-buceo-en-piscina-en-madrid-de-2-horas--o80025"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "rent-jet-ski-valencia-19746877",
    "slug": "rent-jet-ski-valencia-19746877",
    "name": "Rent Jet Ski Valencia",
    "location": "Valencia",
    "region": "Comunidad Valenciana",
    "description": "Rent Jet Ski Valencia figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/rent-jet-ski-valencia--e19746877",
      "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-valencia-capital--o56214",
      "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-puerto-de-valencia-2-horas--o62434"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "sa-caleta-tenerife-19643403",
    "slug": "sa-caleta-tenerife-19643403",
    "name": "Sa Caleta Tenerife",
    "location": "Arona",
    "region": "Canarias",
    "description": "Sa Caleta Tenerife figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/sa-caleta-tenerife--e19643403",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-open-water-diver-padi-tenerife-4-dias--o52006"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "scuba-legends-19736335",
    "slug": "scuba-legends-19736335",
    "name": "Scuba Legends",
    "location": "Puerto del Carmen",
    "region": "Canarias",
    "description": "Scuba Legends figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/scuba-legends--e19736335",
      "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-diver-en-lanzarote-3-dias--o54268",
      "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-lanzarote-puerto-del-carmen--o54296"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "scuba-plus-318",
    "slug": "scuba-plus-318",
    "name": "Scuba Plus",
    "location": "Cala Blanes, Menorca · Menorca",
    "region": "Baleares",
    "description": "Scuba Plus figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive, Pecio, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive",
      "Pecio",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/scuba-plus--e318",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-de-administrador-de-oxigeno-buceo-en-menorca--o53310",
      "https://www.yumping.com/ofertas/buceo/menorca/especialidad-de-buceo-en-cavernas-menorca--o53332",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-de-especialidad-en-ecologia-marina--o53311",
      "https://www.yumping.com/ofertas/buceo/menorca/bautizo-de-buceo-desde-playa-en-menorca--o2281",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-de-open-water-diver-en-menorca-4-dias--o8508",
      "https://www.yumping.com/ofertas/buceo/menorca/inmersion-ruta-de-los-meros-menorca-3-horas--o4645",
      "https://www.yumping.com/ofertas/buceo/menorca/buceo-en-el-submarino-en-menorca-3-horas--o4644",
      "https://www.yumping.com/ofertas/buceo/menorca/inmersion-doble-en-la-cueva-del-pont-den-gil--o4630",
      "https://www.yumping.com/ofertas/buceo/menorca/snorkel-por-la-costa-sur-de-menorca-3-horas-ninos--o88909",
      "https://www.yumping.com/ofertas/buceo/menorca/buceo-en-pecio-en-menorca-2-horas--o4643"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "scuba-elx-19698424",
    "slug": "scuba-elx-19698424",
    "name": "Scuba-Elx",
    "location": "Isla de Tabarca · Tabarca",
    "region": "Comunidad Valenciana",
    "description": "Scuba-Elx figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/scuba-elx--e19698424",
      "https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
      "https://www.yumping.com/ofertas/buceo/alicante/snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h--o48586",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-alrededores-isla-de-tabarca--o25323"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "scubaventura-9599",
    "slug": "scubaventura-9599",
    "name": "Scubaventura",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "Scubaventura figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/scubaventura--e9599",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-con-nitrox-en-madrid-2-dias--o66786"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "scubazul-19694933",
    "slug": "scubazul-19694933",
    "name": "ScubAzul",
    "location": "Málaga",
    "region": "Andalucía",
    "description": "ScubAzul figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/scubazul--e19694933",
      "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-de-malaga--o19109",
      "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-para-2-personas-malaga--o18335"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "scubkandalus-19752519",
    "slug": "scubkandalus-19752519",
    "name": "Scubkandalus",
    "location": "Tarifa",
    "region": "Andalucía",
    "description": "Scubkandalus figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/scubkandalus--e19752519",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-de-nitrox-en-costa-de-tarifa--o62081"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "sea-diver-instructors-19753626",
    "slug": "sea-diver-instructors-19753626",
    "name": "Sea Diver Instructors",
    "location": "Santa Cruz de Tenerife",
    "region": "Canarias",
    "description": "Sea Diver Instructors figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/sea-diver-instructors--e19753626",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-owd-en-santa-cruz-de-tenerife-4-dias--o63050"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "sea-sun-diving-sport-19748359",
    "slug": "sea-sun-diving-sport-19748359",
    "name": "Sea&Sun Diving-Sport",
    "location": "Cabo de Gata",
    "region": "Andalucía",
    "description": "Sea&Sun Diving-Sport figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/seasun-diving-sport--e19748359",
      "https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-en-cabo-de-gata--o59202"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "seaquest-diving-center-19761791",
    "slug": "seaquest-diving-center-19761791",
    "name": "Seaquest Diving Center",
    "location": "Ciutadella de Menorca · Menorca",
    "region": "Baleares",
    "description": "Seaquest Diving Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/seaquest-diving-center--e19761791",
      "https://www.yumping.com/ofertas/buceo/menorca/bautismo-de-buceo-en-playa-son-xoriguer-de-2-horas--o78828",
      "https://www.yumping.com/ofertas/buceo/menorca/bautismo-de-buceo-en-menorca-para-familias--o42798",
      "https://www.yumping.com/ofertas/buceo/menorca/basic-diver-ssi-en-playa-de-son-xoriguer-1-dia--o91299",
      "https://www.yumping.com/ofertas/buceo/menorca/tour-de-snorkel-desde-playa-de-son-xoriguer-1h--o91298",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-advanced-adventurer-ssi-en-son-xoriguer--o78834",
      "https://www.yumping.com/ofertas/buceo/menorca/curso-open-water-diver-ssi-en-son-xoriguer--o78831"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "siroco-aventuras-19694937",
    "slug": "siroco-aventuras-19694937",
    "name": "Siroco Aventuras",
    "location": "La Azohía",
    "region": "Murcia",
    "description": "Siroco Aventuras figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/multiaventura/siroco-aventuras--e19694937",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-murcia--o20620"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "sotacero-diving-19721722",
    "slug": "sotacero-diving-19721722",
    "name": "Sotacero Diving",
    "location": "El Masnou",
    "region": "Cataluña",
    "description": "Sotacero Diving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/sotacero-diving--e19721722",
      "https://www.yumping.com/ofertas/buceo/barcelona/primera-inmersion-de-buceo-en-el-mar-en-barcelona--o59703",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-fedas-b1e-en-barcelona-1-semana--o59704"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "spain-buceo-19745261",
    "slug": "spain-buceo-19745261",
    "name": "Spain Buceo",
    "location": "Valencia",
    "region": "Comunidad Valenciana",
    "description": "Spain Buceo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/spain-buceo--e19745261",
      "https://www.yumping.com/ofertas/buceo/valencia/padi-open-water-diver-en-valencia-capital--o56263"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "subfari-diving-center-19658719",
    "slug": "subfari-diving-center-19658719",
    "name": "Subfari Diving Center",
    "location": "Portinatx",
    "region": "Baleares",
    "description": "Subfari Diving Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/subfari-diving-center--e19658719",
      "https://www.yumping.com/ofertas/buceo/ibiza/bautismo-de-buceo-en-cala-portinatx-4h--o30367",
      "https://www.yumping.com/ofertas/buceo/ibiza/inmersion-de-buceo-con-equipo-en-ibiza-2-horas--o66230",
      "https://www.yumping.com/ofertas/buceo/ibiza/advanced-open-water-sant-antoni-de-portmany--o30036",
      "https://www.yumping.com/ofertas/buceo/ibiza/ssi-rescue-diver-en-sant-antoni-de-portmany--o30038",
      "https://www.yumping.com/ofertas/buceo/ibiza/curso-de-buceo-open-water-diver-en-ibiza-5-dias--o66225",
      "https://www.yumping.com/ofertas/buceo/ibiza/curso-padi-advanced-open-water-en-ibiza-5-dias--o66229",
      "https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-diver-en-sant-antoni-de-portmany--o30035"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "superdive-tossa-de-mar-19741634",
    "slug": "superdive-tossa-de-mar-19741634",
    "name": "SuperDive Tossa de Mar",
    "location": "Tossa de Mar",
    "region": "Cataluña",
    "description": "SuperDive Tossa de Mar figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/superdive-tossa-de-mar--e19741634",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar-3-horas--o51268",
      "https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-en-tossa-de-mar-3-dias--o57559",
      "https://www.yumping.com/ofertas/buceo/girona/curso-open-water-diver-padi-lloret-de-mar--o13963",
      "https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-tossa-de-mar-2-dias--o57563"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "sureste-divers-madrid-19753625",
    "slug": "sureste-divers-madrid-19753625",
    "name": "Sureste Divers Madrid",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "Sureste Divers Madrid figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/sureste-divers-madrid--e19753625",
      "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-fedas-b1-padi-owd-madrid--o63053"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "tenerife-dive-experience-19753459",
    "slug": "tenerife-dive-experience-19753459",
    "name": "Tenerife Dive Experience",
    "location": "Costa Adeje · Costa Adeje, Tenerife · Los Cristianos · Puerto Colón · Tenerife",
    "region": "Canarias",
    "description": "Tenerife Dive Experience figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Fun Dive, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Fun Dive",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/tenerife-dive-experience--e19753459",
      "https://www.yumping.com/ofertas/buceo/tenerife/clases-privadas-de-snorkel-en-costa-adeje-3-horas--o13574",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-dive-master-durante-2-semanas-tenerife--o61743",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-open-water-diver-ssi-en-costa-adeje-3-dias--o62902",
      "https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautizo-buceo-los-cristianos-desde-costa-2h-30-min--o61728",
      "https://www.yumping.com/ofertas/buceo/tenerife/snorkel-con-tortugas-en-la-costa-adeje-2h-30-min--o62824",
      "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceo-en-tenerife-4h--o62823",
      "https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h--o62816"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "the-blue-jump-ecodiving-19760820",
    "slug": "the-blue-jump-ecodiving-19760820",
    "name": "The Blue Jump Ecodiving",
    "location": "La Azohía",
    "region": "Murcia",
    "description": "The Blue Jump Ecodiving figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/the-blue-jump-ecodiving--e19760820",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-la-azohia-3h--o76694"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "tossasub-2204",
    "slug": "tossasub-2204",
    "name": "Tossasub",
    "location": "Tossa de Mar",
    "region": "Cataluña",
    "description": "Tossasub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/tossasub--e2204",
      "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-mar-discover-scuba-diving-en-mar-menuda--o61634",
      "https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-en-tossa-de-mar--o65112"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "touradvisor-19712157",
    "slug": "touradvisor-19712157",
    "name": "Touradvisor",
    "location": "Santa Ponça",
    "region": "Baleares",
    "description": "Touradvisor figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/touradvisor--e19712157",
      "https://www.yumping.com/ofertas/buceo/mallorca/snorkeling-a-las-islas-malgrats-desde-un-barco--o44539"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "travel-sub-9738",
    "slug": "travel-sub-9738",
    "name": "Travel Sub",
    "location": "Puerto Colón",
    "region": "Canarias",
    "description": "Travel Sub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/travel-sub--e9738",
      "https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-advanced-open-water-diver-radazul--o15398",
      "https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-radazul-tenerife--o15411"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "underwater-barcelona-19785830",
    "slug": "underwater-barcelona-19785830",
    "name": "Underwater barcelona",
    "location": "Barcelona",
    "region": "Cataluña",
    "description": "Underwater barcelona figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/underwater-barcelona--e19785830",
      "https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-playa-de-sant-sebastia-2h--o88750"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "unisub-7433",
    "slug": "unisub-7433",
    "name": "Unisub",
    "location": "L'Estartit · Torroella de Montgrí",
    "region": "Cataluña",
    "description": "Unisub figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso, Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso",
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/unisub--e7433",
      "https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-diver-lloret-de-mar--o13966",
      "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",
      "https://www.yumping.com/ofertas/buceo/girona/snorkel-en-parque-natural-de-las-islas-medas-2h--o88872"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "vadum-maris-diving-watersports-19756796",
    "slug": "vadum-maris-diving-watersports-19756796",
    "name": "Vadum Maris Diving&Watersports",
    "location": "Elche",
    "region": "Comunidad Valenciana",
    "description": "Vadum Maris Diving&Watersports figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/vadum-maris-divingwatersports--e19756796",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-elche-3-horas--o67940"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "vidaxperience-19750740",
    "slug": "vidaxperience-19750740",
    "name": "VidaXperience",
    "location": "Arrecife",
    "region": "Canarias",
    "description": "VidaXperience figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/vidaxperience--e19750740",
      "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "whitesand-surf-19867800",
    "slug": "whitesand-surf-19867800",
    "name": "Whitesand Surf",
    "location": "La Savina",
    "region": "Baleares",
    "description": "Whitesand Surf figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Snorkel. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Snorkel"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/whitesand-solutions--e19867800",
      "https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-parque-natural-ses-salines-2-30h--o91297"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "windblue-sports-19720798",
    "slug": "windblue-sports-19720798",
    "name": "Windblue Sports",
    "location": "Playa Blanca",
    "region": "Canarias",
    "description": "Windblue Sports figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/deportes-acuaticos/windblue-sports--e19720798",
      "https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o45915"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "yellowsub-tarifa-3682",
    "slug": "yellowsub-tarifa-3682",
    "name": "YellowSub Tarifa",
    "location": "Tarifa",
    "region": "Andalucía",
    "description": "YellowSub Tarifa figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/yellowsub-tarifa--e3682",
      "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-desde-playa-en-tarifa--o17298",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-discover-scuba-diving-tarifa--o17300",
      "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-diver-en-tarifa-3-dias--o17280"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "yo-buceo-barcelona-19753070",
    "slug": "yo-buceo-barcelona-19753070",
    "name": "Yo Buceo Barcelona",
    "location": "Barcelona",
    "region": "Cataluña",
    "description": "Yo Buceo Barcelona figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/yo-buceo-barcelona--e19753070",
      "https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-piscina-barcelona-3-horas--o62498",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-dive-en-costa-brava-8-sesiones--o62505",
      "https://www.yumping.com/ofertas/buceo/barcelona/titulo-advanced-open-water-diver-en-barcelona--o62501",
      "https://www.yumping.com/ofertas/buceo/barcelona/curso-scuba-diver-en-barcelona-3-dias--o62500"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "yo-buceo-cartagena-7262",
    "slug": "yo-buceo-cartagena-7262",
    "name": "Yo Buceo Cartagena",
    "location": "Cartagena",
    "region": "Murcia",
    "description": "Yo Buceo Cartagena figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/yo-buceo-cartagena--e7262",
      "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-cartagena--o30789",
      "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-open-water-diver-en-cartagena--o62455"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "yo-buceo-madrid-7212",
    "slug": "yo-buceo-madrid-7212",
    "name": "Yo Buceo Madrid",
    "location": "Madrid",
    "region": "Comunidad de Madrid",
    "description": "Yo Buceo Madrid figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/yo-buceo-madrid--e7212",
      "https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-con-extras--o35732"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "yo-buceo-toledo-19753068",
    "slug": "yo-buceo-toledo-19753068",
    "name": "Yo Buceo Toledo",
    "location": "Toledo",
    "region": "Castilla-La Mancha",
    "description": "Yo Buceo Toledo figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/yo-buceo-toledo--e19753068",
      "https://www.yumping.com/ofertas/buceo/toledo/buceo-de-bautismo-en-aguas-confinadas-en-toledo--o62508"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "yo-buceo-torrevieja-19636211",
    "slug": "yo-buceo-torrevieja-19636211",
    "name": "Yo Buceo Torrevieja",
    "location": "Torrevieja",
    "region": "Comunidad Valenciana",
    "description": "Yo Buceo Torrevieja figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/yo-buceo-torrevieja--e19636211",
      "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-mar-costa-blanca--o23943"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "zeus-dive-center-19719839",
    "slug": "zeus-dive-center-19719839",
    "name": "Zeus Dive Center",
    "location": "Maspalomas",
    "region": "Canarias",
    "description": "Zeus Dive Center figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Curso. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Curso"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/zeus-dive-center--e19719839",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-scuba-diver-en-canarias--o40455",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-sidemount-padi-maspalomas--o40462",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-divemaster-de-padi-en-maspalomas--o40460",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-advanced-open-water-diver-maspalomas--o40424",
      "https://www.yumping.com/ofertas/buceo/gran-canaria/hacer-el-curso-de-buceo-nitrox-padi-en-maspalomas--o40553"
    ],
    "checkedAt": "2026-10-04"
  },
  {
    "id": "zoea-mallorca-9078",
    "slug": "zoea-mallorca-9078",
    "name": "Zoea Mallorca",
    "location": "Calvià",
    "region": "Baleares",
    "description": "Zoea Mallorca figura como organizador en las ofertas de Yumping vinculadas a esta ficha. Su catálogo en Buceo Atlas incluye Bautismo, Fun Dive. Las localidades mostradas corresponden a sus actividades; confirma con la escuela el punto de encuentro.",
    "services": [
      "Bautismo",
      "Fun Dive"
    ],
    "siteSlugs": [],
    "destinationSlugs": [],
    "sources": [
      "https://www.yumping.com/buceo/zoea-mallorca--e9078",
      "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-reserva-marina-de-malgrats--o54957",
      "https://www.yumping.com/ofertas/buceo/mallorca/inmersion-en-reserva-marina-de-mallorca-con-equipo--o54959"
    ],
    "checkedAt": "2026-10-04"
  }
];
export const centerActivityLinks: CenterActivityLink[] = [
  {
    "activitySlug": "inmersion-de-buceo-tenerife-con-alquiler-de-equipo-50921",
    "centerId": "buceo-tenerife-3880",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/inmersion-de-buceo-tenerife-con-alquiler-de-equipo--o50921",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-las-galletas-tenerife-31304",
    "centerId": "buceo-tenerife-3880",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/inmersion-de-buceo-en-las-galletas-tenerife--o31304",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-diver-las-galletas-31296",
    "centerId": "buceo-tenerife-3880",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/padi-open-water-diver-en-las-galletas-tenerife--o31296",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-barco-tenerife-384",
    "centerId": "buceo-tenerife-3880",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-desde-barco-tenerife--o31281",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-en-el-pecio-de-taibada-de-3-horas-56808",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-el-pecio-de-taibada-de-3-horas--o56808",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ssi-advance-open-water-diver-el-medano-56771",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/ssi-advance-open-water-diver-el-medano--o56771",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "pack-2-inmersiones-desde-barco-suroeste-tenerife-56715",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/pack-2-inmersiones-desde-barco-suroeste-tenerife--o56715",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ssi-open-water-diver-tenerife-sur-388",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/ssi-open-water-diver-tenerife-sur--o56714",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-ssi-scuba-diver-en-el-medano-392",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-ssi-scuba-diver-en-el-medano--o56710",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-buceadores-certificados-tenerife-393",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceadores-certificados-tenerife--o56661",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h-394",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/pack-de-dos-sesiones-de-snorkel-en-tenerife-4-5-h--o56660",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "excursion-de-snorkel-en-tenerife-3-5-horas-395",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/excursion-de-snorkel-en-tenerife-3-5-horas--o56659",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-45-min-tenerife-3-5-h-396",
    "centerId": "medanodive-19748521",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-buceo-45-min-tenerife-3-5-h--o56658",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "clases-privadas-de-snorkel-en-costa-adeje-3-horas-13574",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/clases-privadas-de-snorkel-en-costa-adeje-3-horas--o13574",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-dive-master-durante-2-semanas-tenerife-61743",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-dive-master-durante-2-semanas-tenerife--o61743",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-ssi-en-costa-adeje-3-dias-62902",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-open-water-diver-ssi-en-costa-adeje-3-dias--o62902",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-los-cristianos-desde-costa-2h-30-min-385",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautizo-buceo-los-cristianos-desde-costa-2h-30-min--o61728",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-con-tortugas-en-la-costa-adeje-2h-30-min-386",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/snorkel-con-tortugas-en-la-costa-adeje-2h-30-min--o62824",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-tenerife-2h-387",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-buceo-en-tenerife-4h--o62823",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h-398",
    "centerId": "tenerife-dive-experience-19753459",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/tenerife/bautismo-de-buceo-2-inmersiones-sur-de-tenerife-4h--o62816",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salida-de-buceo-desde-embarcacion-tarragona-61647",
    "centerId": "mar-de-hielo-19752104",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/salida-de-buceo-desde-embarcacion-tarragona--o61647",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-cap-salou-3-horas-61750",
    "centerId": "mar-de-hielo-19752104",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-salou-3-horas--o61750",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salida-buceo-nocturna-desde-barco-cap-salou-2-h30-61697",
    "centerId": "mar-de-hielo-19752104",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/salida-buceo-nocturna-desde-barco-salou-2-h-30--o61697",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-barco-tarragona-3h-525",
    "centerId": "mar-de-hielo-19752104",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-desde-barco-tarragona-3h--o61736",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-padi-en-tarragona-3-dias-468",
    "centerId": "mar-de-hielo-19752104",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-diver-padi-en-tarragona-3-dias--o61737",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-una-estrella-fedas-tarragona-469",
    "centerId": "mar-de-hielo-19752104",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-una-estrella-fedas-tarragona--o61758",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-salou-3-horas-40959",
    "centerId": "aventura-tour-salou-19725112",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-en-salou-3-horas--o40959",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-nocturna-en-salou-1-hora-56731",
    "centerId": "aventura-tour-salou-19725112",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/inmersion-de-buceo-nocturna-en-salou-1-hora--o56731",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ruta-de-snorkel-por-calas-de-l-ametlla-de-mar-1h30-64532",
    "centerId": "marina-diving-tarragona-19724742",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/ruta-de-snorkel-con-oceanografas-lametlla-de-mar--o64532",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-snsi-nitrox-ametlla-de-mar-59377",
    "centerId": "marina-diving-tarragona-19724742",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/curso-open-water-snsi-nitrox-ametlla-de-mar--o59377",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-cala-llobeta-calafat-61500",
    "centerId": "marina-diving-tarragona-19724742",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-en-cala-llobeta-en-calafat--o61500",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "pack-open-water-snsi-nitrox-advanced-tarragona-520",
    "centerId": "marina-diving-tarragona-19724742",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/pack-open-water-snsi-nitrox-y-advanced-tarragona--o59893",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-desde-playa-fotos-cala-vidre-2-5h-41537",
    "centerId": "ohana-diving-19866849",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-tarragona-con-instructor--o41537",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ruta-de-snorkel-para-ninos-en-l-ametlla-de-mar-64549",
    "centerId": "estacio-nautica-l-ametlla-de-mar-19763165",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/ruta-de-snorkel-para-ninos-en-lametlla-de-mar--o64549",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-l-ametlla-de-mar-64566",
    "centerId": "estacio-nautica-l-ametlla-de-mar-19763165",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-en-l-ametlla-de-mar-90-minutos--o64566",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-discover-scuba-diving-l-ametlla-1311",
    "centerId": "club-dofi-sub-7534",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautismo-de-buceo-discover-scuba-diving-lametlla--o1311",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-lametlla-523",
    "centerId": "club-dofi-sub-7534",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/curso-buceo-padi-open-water-diver-en-lametlla--o1314",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-la-costa-de-algeciras-57620",
    "centerId": "puertobuceo-19748925",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-la-costa-de-algeciras--o57620",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-punta-de-europa-3-horas-248",
    "centerId": "puertobuceo-19748925",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-punta-de-europa-tarifa-3h--o57389",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-en-tarifa-4-dias-253",
    "centerId": "puertobuceo-19748925",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-open-water-diver-en-tarifa-4-dias--o57419",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-playa-son-xoriguer-de-2-horas-78828",
    "centerId": "seaquest-diving-center-19761791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/bautismo-de-buceo-en-playa-son-xoriguer-de-2-horas--o78828",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-para-familia-playa-cap-d-artrutx-2h-42798",
    "centerId": "seaquest-diving-center-19761791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/bautismo-de-buceo-en-menorca-para-familias--o42798",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "basic-diver-ssi-en-playa-de-son-xoriguer-1-dia-91299",
    "centerId": "seaquest-diving-center-19761791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/basic-diver-ssi-en-playa-de-son-xoriguer-1-dia--o91299",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "tour-de-snorkel-desde-playa-de-son-xoriguer-1h-91298",
    "centerId": "seaquest-diving-center-19761791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/tour-de-snorkel-desde-playa-de-son-xoriguer-1h--o91298",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-adventurer-ssi-en-son-xoriguer-78834",
    "centerId": "seaquest-diving-center-19761791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-advanced-adventurer-ssi-en-son-xoriguer--o78834",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-ssi-en-son-xoriguer-78831",
    "centerId": "seaquest-diving-center-19761791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-open-water-diver-ssi-en-son-xoriguer--o78831",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-administrador-de-oxigeno-buceo-en-menorca-53310",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-de-administrador-de-oxigeno-buceo-en-menorca--o53310",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "especialidad-de-buceo-en-cavernas-menorca-53332",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/especialidad-de-buceo-en-cavernas-menorca--o53332",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-especialidad-en-ecologia-marina-53311",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-de-especialidad-en-ecologia-marina--o53311",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-desde-playa-en-menorca-2281",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/bautizo-de-buceo-desde-playa-en-menorca--o2281",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-open-water-diver-en-menorca-4-dias-8508",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-de-open-water-diver-en-menorca-4-dias--o8508",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-ruta-de-los-meros-menorca-3-horas-4645",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/inmersion-ruta-de-los-meros-menorca-3-horas--o4645",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-en-el-submarino-en-menorca-3-horas-4644",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/buceo-en-el-submarino-en-menorca-3-horas--o4644",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-doble-en-la-cueva-del-pont-d-en-gil-4630",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/inmersion-doble-en-la-cueva-del-pont-den-gil--o4630",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-por-la-costa-oeste-de-menorca-1-5-horas-88909",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/snorkel-por-la-costa-sur-de-menorca-3-horas-ninos--o88909",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-pecio-menorca-4643",
    "centerId": "scuba-plus-318",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/buceo-en-pecio-en-menorca-2-horas--o4643",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-la-reserva-marina-menorquina-28826",
    "centerId": "diving-menorca-19711815",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/inmersion-de-buceo-en-la-reserva-marina-menorquina--o28826",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-en-menorca-46790",
    "centerId": "diving-menorca-19711815",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-advanced-open-water-diver-en-menorca--o46790",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-en-la-reserva-marina-28827",
    "centerId": "diving-menorca-19711815",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/curso-padi-open-water-diver-en-la-reserva-marina--o28827",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-cala-n-bosch-3-horas-76665",
    "centerId": "bluewater-menorca-19776741",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/menorca/bautismo-de-buceo-en-cala-galdana-2h-y-30min--o76665",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "doble-inmersion-atlantida-pecios-mogan-64185",
    "centerId": "karapat-dive-19752932",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-doble-en-el-parque-de-la-atlantida-y-pecios--o64185",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-telde-3-horas-364",
    "centerId": "karapat-dive-19752932",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-telde-3-horas--o62277",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-open-water-diver-en-telde-3-dias-365",
    "centerId": "karapat-dive-19752932",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-open-water-diver-en-telde-3-dias--o62278",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-telde-3-dias-366",
    "centerId": "karapat-dive-19752932",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-telde-3-dias--o62279",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-en-playa-de-las-canteras-2-horas-383",
    "centerId": "karapat-dive-19752932",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/snorkel-en-playa-de-las-canteras-2-horas--o64224",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-costa-gran-canaria-58995",
    "centerId": "pozo-scuba-11985",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-la-costa-de-gran-canaria--o58995",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-pozo-izquierdo-370",
    "centerId": "pozo-scuba-11985",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advanced-open-water-diver-pozo-izquierdo--o63831",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-pro-rec-tec-open-water-diver-en-gran-canaria-371",
    "centerId": "pozo-scuba-11985",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-pro-rec-tec-open-water-diver-en-gran-canaria--o59729",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-en-playa-de-el-cabron-gran-canaria-para-titulados-372",
    "centerId": "pozo-scuba-11985",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/buceo-en-playa-de-el-cabron-gran-canaria-titulados--o58994",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "dos-inmersiones-buceo-cambrils-21162",
    "centerId": "glups-diving-8875",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/dos-inmersiones-de-buceo-en-cambrils--o21162",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-discovery-scuba-diving-tarragona-521",
    "centerId": "glups-diving-8875",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/bautizo-de-buceo-discovery-scuba-diving-tarragona--o52840",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "advanced-open-water-diver-en-tarragona-2-3-dias-470",
    "centerId": "glups-diving-8875",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/curso-de-buceo-avanzado-en-tarragona-2-3-dias--o52841",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-salou-53794",
    "centerId": "diving-salou-19733479",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tarragona/curso-advanced-open-water-diver-en-salou--o53794",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-playa-mojacar-86956",
    "centerId": "centro-escuela-de-buceo-mojacar-3673",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-desde-playa-mojacar-medio-dia--o86956",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-calpe-3-dias-529",
    "centerId": "calpe-multiaventura-315",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-open-water-diver-en-calpe-3-dias--o1226",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-calpe-530",
    "centerId": "calpe-multiaventura-315",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-advanced-open-water-en-calpe--o1227",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-discover-scuba-diving-playa-calpe-1232",
    "centerId": "calpe-multiaventura-315",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-calpe--o1232",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-desde-playa-en-calpe-1h-30-minutos-464",
    "centerId": "calpe-multiaventura-315",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/snorkel-desde-playa-en-calpe-1h-30-minutos--o1234",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-vilagarcia-533",
    "centerId": "nautica-medusa-4448",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/pontevedra/curso-de-buceo-open-water-en-vilagarcia--o4425",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-santiago-compostela-534",
    "centerId": "mergullo-compostela-4581",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/acoruna/curso-open-water-diver-en-santiago-de-compostela--o15303",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-en-a-coruna-331",
    "centerId": "mergullo-compostela-4581",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-a-coruna--o15307",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-piscina-barcelona-3-horas-495",
    "centerId": "yo-buceo-barcelona-19753070",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-piscina-barcelona-3-horas--o62498",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-dive-en-costa-brava-8-sesiones-416",
    "centerId": "yo-buceo-barcelona-19753070",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-dive-en-costa-brava-8-sesiones--o62505",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "titulo-advanced-open-water-diver-en-barcelona-417",
    "centerId": "yo-buceo-barcelona-19753070",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/titulo-advanced-open-water-diver-en-barcelona--o62501",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-scuba-diver-en-barcelona-3-dias-418",
    "centerId": "yo-buceo-barcelona-19753070",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-scuba-diver-en-barcelona-3-dias--o62500",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-muchamiel-instructor-496",
    "centerId": "posidonia-ecosports-19735788",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-muchamiel-con-instructor--o53070",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-serra-gelada-3-horas-497",
    "centerId": "centro-de-buceo-scorpora-581",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-serra-gelada-3-horas--o64813",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-elche-3-horas-498",
    "centerId": "vadum-maris-diving-watersports-19756796",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-elche-3-horas--o67940",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-parejas-barco-javea-499",
    "centerId": "la-rana-buceo-19863397",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-javea-desde-embarcacion-y-fotos--o13445",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salida-de-snorkel-desde-barco-fotos-javea-2-5-h-465",
    "centerId": "la-rana-buceo-19863397",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/salida-de-snorkel-desde-embarcacion-javea-2-5-h--o25800",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-costa-malaga-500",
    "centerId": "scubazul-19694933",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-de-malaga--o19109",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-2-personas-malaga-501",
    "centerId": "scubazul-19694933",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-para-2-personas-malaga--o18335",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-6-metros-cabo-palos-502",
    "centerId": "balkysub-2134",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-hasta-6-metros-en-la-manga--o28355",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-padi-la-manga-35110",
    "centerId": "balkysub-2134",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-padi-en-la-manga-del-mar-menor--o35110",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-la-manga-35112",
    "centerId": "balkysub-2134",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/snorkel-en-la-manga-discover-snorkeling-experience--o35112",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-la-manga-35125",
    "centerId": "balkysub-2134",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-open-water-diver-en-la-manga--o35125",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "advanced-open-water-la-manga-35127",
    "centerId": "balkysub-2134",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-padi-en-la-manga--o35127",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-mar-cartagena-503",
    "centerId": "yo-buceo-cartagena-7262",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-cartagena--o30789",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-cartagena-62455",
    "centerId": "yo-buceo-cartagena-7262",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-open-water-diver-en-cartagena--o62455",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-scuba-diver-canarias-504",
    "centerId": "zeus-dive-center-19719839",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-scuba-diver-en-canarias--o40455",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-sidemount-padi-maspalomas-508",
    "centerId": "zeus-dive-center-19719839",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-sidemount-padi-maspalomas--o40462",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-divemaster-padi-maspalomas-509",
    "centerId": "zeus-dive-center-19719839",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-divemaster-de-padi-en-maspalomas--o40460",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-maspalomas-515",
    "centerId": "zeus-dive-center-19719839",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-advanced-open-water-diver-maspalomas--o40424",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-nitrox-padi-maspalomas-516",
    "centerId": "zeus-dive-center-19719839",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/hacer-el-curso-de-buceo-nitrox-padi-en-maspalomas--o40553",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-rescue-diver-primeros-auxilios-505",
    "centerId": "mundo-activo-2268",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceador-de-rescate-primeros-auxilios--o17373",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "aowd-padi-la-manga-17372",
    "centerId": "mundo-activo-2268",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-avanzado-aowd-de-padi-la-manga--o17372",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-gran-canaria-506",
    "centerId": "7-mares-las-canteras-5224",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-padi-open-water-diver-gran-canaria--o22547",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-las-palmas-de-gran-canaria-374",
    "centerId": "7-mares-las-canteras-5224",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-las-palmas-de-gran-canaria--o22442",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advance-open-water-diver-gran-canaria-380",
    "centerId": "7-mares-las-canteras-5224",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-advance-open-water-diver-gran-canaria--o22549",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-sitges-511",
    "centerId": "maskydiving-19631792",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-en-sitges-open-water-diver--o14196",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-divemaster-430",
    "centerId": "maskydiving-19631792",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-divemaster--o14207",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-rescate-en-el-mar-431",
    "centerId": "maskydiving-19631792",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-rescate-en-el-mar--o14200",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-advanced-open-water-diver-432",
    "centerId": "maskydiving-19631792",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver--o14199",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-padi-scuba-diver-en-playa-de-sitges-433",
    "centerId": "maskydiving-19631792",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver--o14195",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-radazul-512",
    "centerId": "diving-canarias-19696353",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-diver-costa-de-radazul--o42638",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-mazarron-513",
    "centerId": "cbs-centro-de-buceo-del-sureste-3879",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-advanced-open-water-diver-en-mazarron--o62684",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "scuba-diver-padi-la-azohia-68794",
    "centerId": "cbs-centro-de-buceo-del-sureste-3879",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-scuba-diver-de-padi-en-la-azohia--o68794",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-cabo-tinoso-barco-32148",
    "centerId": "cbs-centro-de-buceo-del-sureste-3879",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-desde-barco-en-mazarron--o32148",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-mazarron-32149",
    "centerId": "cbs-centro-de-buceo-del-sureste-3879",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-intensivo-buceo-open-water-mazarron-3-dias--o32149",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "feda-1-estrella-mazarron-32141",
    "centerId": "cbs-centro-de-buceo-del-sureste-3879",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-feda-1-estrella-en-pto-de-mazarron--o32141",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-iniciados-tenerife-514",
    "centerId": "blackstone-dive-center-19723727",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-para-iniciados-en-tenerife--o41742",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-tenerife-45-min-41732",
    "centerId": "blackstone-dive-center-19723727",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife-de-45-minutos--o41732",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "alquiler-scooter-subacuatico-port-daiguadolc-1h-517",
    "centerId": "nau-tech-19865760",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/alquiler-scooter-subacuatico-port-daiguadolc-1h--o91112",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-barco-cala-canyelles-519",
    "centerId": "oceanos-diving-center-19658724",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar-3-h--o13953",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-lloret-65241",
    "centerId": "oceanos-diving-center-19658724",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-buceo-padi-open-water-diver-en-lloret-de-mar--o65241",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-discover-scuba-diving-mar-menuda-522",
    "centerId": "tossasub-2204",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-mar-discover-scuba-diving-en-mar-menuda--o61634",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-mar-menuda-65112",
    "centerId": "tossasub-2204",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-en-tossa-de-mar--o65112",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-platja-daro-2-horas-524",
    "centerId": "diversub-19751117",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-platja-d-aro-2-horas--o62048",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-pareja-sant-antoni-60679",
    "centerId": "diversub-19751117",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautizo-buceo-en-pareja-sant-antoni-de-calonge-2-h--o60679",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-iniciacion-costa-brava-60551",
    "centerId": "diversub-19751117",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-iniciacion-al-buceo-4-dias-en-costa-brava--o60551",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-cabo-palos-526",
    "centerId": "centro-de-buceo-naranjito-12156",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-cabo-de-palos--o14978",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceador-dos-estrellas-cabo-palos-527",
    "centerId": "centro-de-buceo-naranjito-12156",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-buceador-dos-estrellas-cabo-de-palos--o14989",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-barco-cabo-palos-14983",
    "centerId": "centro-de-buceo-naranjito-12156",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-buceo-en-barco-en-cabo-de-palos--o14983",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-cabo-palos-14809",
    "centerId": "centro-de-buceo-naranjito-12156",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-iniciacion-al-buceo-open-water-murcia--o14809",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "advanced-open-water-cabo-palos-14984",
    "centerId": "centro-de-buceo-naranjito-12156",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-de-buceo-advanced-open-water-diver-murcia--o14984",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-calahonda-528",
    "centerId": "club-de-buceo-noraysub-19754166",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-en-calahonda-90-minutos--o63864",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-lescala",
    "centerId": "grassi-sub-10171",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-lescala--o18401",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-costa-montgri-36307",
    "centerId": "grassi-sub-10171",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/safari-de-buceo-costa-del-montgri-5-horas--o36307",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-parque-montgri-77668",
    "centerId": "grassi-sub-10171",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-parque-natural-del-montgri-3h--o77668",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-arrecife-60308",
    "centerId": "vidaxperience-19750740",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-arrecife-30-minutos--o60308",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-lanzarote-19796",
    "centerId": "alisios-sub-lanzarote-19695222",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o19796",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ssi-advanced-adventurer-en-tias-407",
    "centerId": "alisios-sub-lanzarote-19695222",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/advanced-open-water-diver-en-tias--o19793",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-discover-scuba-diving-playa-del-raco-calpe-65789",
    "centerId": "dive-dive-3623",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-buceo-en-calpe-salida-desde-la-playa--o65789",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-discover-scuba-diving-en-calpe-5h-462",
    "centerId": "dive-dive-3623",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-padi-discover-scuba-diving-en-calpe-5h--o86705",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-scuba-diver-ssi-lanzarote-47174",
    "centerId": "atlantis-diving-lanzarote-19705315",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-scuba-diver-ssi-en-lanzarote--o47174",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-barco-lanzarote-53013",
    "centerId": "atlantis-diving-lanzarote-19705315",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote-desde-barco--o53013",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-nocturna-cabo-de-gata-68414",
    "centerId": "centro-de-buceo-alpha-570",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/inmersion-de-buceo-nocturna-en-cabo-de-gata--o68414",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-buceo-botella-plomos-tarifa-53872",
    "centerId": "centollo-dive-club-19777108",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/2-inmersiones-de-buceo-botella-y-plomos-en-tarifa--o53872",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salida-snorkel-playa-tarifa-53881",
    "centerId": "centollo-dive-club-19777108",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/salida-de-snorkel-en-tarifa-1-hora-y-media--o53881",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-en-tarifa-2-horas-244",
    "centerId": "centollo-dive-club-19777108",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-mar-en-tarifa-2-horas--o53863",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-tarifa-sin-equipo-245",
    "centerId": "centollo-dive-club-19777108",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-en-tarifa-sin-equipo--o53865",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salidas-de-buceo-en-tarifa-grupos-pequenos-1h-246",
    "centerId": "centollo-dive-club-19777108",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/salidas-de-buceo-en-tarifa-grupos-pequenos-1h--o61941",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-mar-tarifa-19193",
    "centerId": "buddha-divers-19760797",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-de-mar-en-tarifa-de-3-horas--o19193",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-advanced-open-water-en-tarifa-de-2-dias-255",
    "centerId": "buddha-divers-19760797",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-open-water-en-tarifa-de-2-dias--o19201",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-scuba-diver-en-tarifa-de-2-dias-257",
    "centerId": "buddha-divers-19760797",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-scuba-diver-en-tarifa-de-2-dias--o19198",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-rescue-diver-en-tarifa-1-2-dias-258",
    "centerId": "buddha-divers-19760797",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-de-apnea-en-la-isla-de-las-palomas-4-horas--o70324",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-padi-tabarca",
    "centerId": "scuba-elx-19698424",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-padi-en-la-isla-de-tabarca--o26318",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h-463",
    "centerId": "scuba-elx-19698424",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/snorkel-cerca-de-la-isla-tabarca-para-adultos-3-h--o48586",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-alrededores-isla-de-tabarca-466",
    "centerId": "scuba-elx-19698424",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-alrededores-isla-de-tabarca--o25323",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-javea",
    "centerId": "centro-de-buceo-puerto-de-javea-3876",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-padi-open-water-diver-en-javea--o14121",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-1-inmersion-lanzarote-38911",
    "centerId": "native-diving-7296",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-con-1-inmersion-en-lanzarote--o38911",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-padi-lanzarote-38944",
    "centerId": "native-diving-7296",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-open-water-diver-padi-en-lanzarote-3-dias--o38944",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-lanzarote-54268",
    "centerId": "scuba-legends-19736335",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-diver-en-lanzarote-3-dias--o54268",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-puerto-carmen-54296",
    "centerId": "scuba-legends-19736335",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-en-lanzarote-puerto-del-carmen--o54296",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-adventure-diver-lanzarote-46770",
    "centerId": "active-scuba-divers-lanzarote-6456",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-adventure-diver-en-lanzarote--o46770",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-ssi-open-water-diver-lanzarote-46769",
    "centerId": "active-scuba-divers-lanzarote-6456",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-ssi-open-water-diver-en-lanzarote--o46769",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-seal-team-lanzarote-46764",
    "centerId": "active-scuba-divers-lanzarote-6456",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-seal-team-en-lanzarote--o46764",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-playa-blanca-45915",
    "centerId": "windblue-sports-19720798",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/inmersion-de-buceo-en-lanzarote--o45915",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersiones-lanzarote-nocturna-gratis-37280",
    "centerId": "lanzarote-non-stop-divers-19720740",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/inmersiones-en-lanzarote-con-buceo-nocturno-gratis--o37280",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-en-lanzarote-4-dias-403",
    "centerId": "lanzarote-non-stop-divers-19720740",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-padi-open-water-en-lanzarote-4-dias--o37278",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-ssi-playa-flamingo-43093",
    "centerId": "pura-vida-diving-19733439",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceo-open-water-en-lanzarote--o43093",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-tenerife-46044",
    "centerId": "ocean-friends-buceo-y-apnea-19735920",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-en-tenerife--o46044",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-las-galletas-53976",
    "centerId": "brisubuceo-19763265",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-las-galletas-tenerife--o53976",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-open-water-en-las-galletas-3-dias-401",
    "centerId": "brisubuceo-19763265",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-buceo-open-water-en-las-galletas-3-dias--o47446",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-video-radazul-60254",
    "centerId": "club-de-buceo-quimerasub-19690297",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautizo-de-buceo-y-video-hd-en-radazul--o63387",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-costa-adeje-80893",
    "centerId": "dpm-diving-19763235",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-costa-adeje-de-4-horas--o80893",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-discover-scuba-diving-puerto-colon-53291",
    "centerId": "travel-sub-9738",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-advanced-open-water-diver-radazul--o15398",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-barco-en-puerto-colon-3h-397",
    "centerId": "travel-sub-9738",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bautismo-de-buceo-en-radazul-tenerife--o15411",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-diver-padi-tenerife-39502",
    "centerId": "diving-atlantis-19728197",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/open-water-diver-padi-en-tenerife-en-3-dias--o39502",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bono-10-inmersiones-puerto-colon-22282",
    "centerId": "diving-atlantis-19728197",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/bono-de-10-inmersiones-tenerife--o22282",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-buceadores-titulados-tenerife-53263",
    "centerId": "amarilla-divers-19705755",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/2-inmersiones-en-tenerife-buceadores-titulados--o53263",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-tenerife-fotos-60253",
    "centerId": "go-dive-tenerife-19750701",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/inmersiones-de-buceo-en-tenerife-con-fotos--o60253",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-padi-open-water-diver-en-tenerife-3-dias-399",
    "centerId": "go-dive-tenerife-19750701",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-de-padi-open-water-diver-en-tenerife-3-dias--o60252",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-parque-natural-benidorm-36446",
    "centerId": "diving-stones-19621453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/excursion-de-snorkel-en-parque-natural-de-benidorm--o36446",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-benidorm-sin-equipo-36148",
    "centerId": "diving-stones-19621453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-en-benidorm-sin-equipo--o36148",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-scuba-diver-benidorm-36243",
    "centerId": "diving-stones-19621453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-scuba-diver-en-benidorm-dos-dias--o36243",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-serra-gelada-36245",
    "centerId": "diving-stones-19621453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-open-water-diver-en-serra-gelada--o36245",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-barco-en-isla-de-benidorm-493",
    "centerId": "diving-stones-19621453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-barco-en-isla-de-benidorm--o36111",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-con-equipo-en-benidorm-494",
    "centerId": "diving-stones-19621453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-con-equipo-en-benidorm--o36146",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-altea-barco-36653",
    "centerId": "marepolis-altea-19717923",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-altea-desde-barco--o36653",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-altea-31342",
    "centerId": "marepolis-altea-19717923",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/padi-advanced-open-water-altea--o31342",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-denia-65287",
    "centerId": "mon-diving-19725021",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-advanced-open-water-diver-en-denia--o65287",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-economico-denia-56080",
    "centerId": "mon-diving-19725021",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-economico-costa-de-denia--o56080",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-equipo-denia-65282",
    "centerId": "mon-diving-19725021",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/inmersion-de-buceo-y-equipo-en-la-costa-de-denia--o65282",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "rescue-diver-efr-denia-65447",
    "centerId": "mon-diving-19725021",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/curso-de-buceo-rescue-diver-y-efr-en-denia--o65447",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-tossa-51268",
    "centerId": "superdive-tossa-de-mar-19741634",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar-3-horas--o51268",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-tossa-57559",
    "centerId": "superdive-tossa-de-mar-19741634",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-en-tossa-de-mar-3-dias--o57559",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-scuba-diver-tossa-13963",
    "centerId": "superdive-tossa-de-mar-19741634",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-open-water-diver-padi-lloret-de-mar--o13963",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-tossa-57563",
    "centerId": "superdive-tossa-de-mar-19741634",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-tossa-de-mar-2-dias--o57563",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-playa-tossa-14621",
    "centerId": "dream-dive-3506",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-desde-playa-en-tossa-de-mar--o14621",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-tossa-61843",
    "centerId": "diving-combat-19679828",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-tossa-de-mar--o61843",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-tossa-61846",
    "centerId": "diving-combat-19679828",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/snorkel-en-tossa-de-mar-2-horas-y-30--o61846",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-sa-caleta-13961",
    "centerId": "dolphins-diving-center-19745282",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-el-mar-en-lloret-de-mar--o13961",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-ssi-lloret-55808",
    "centerId": "dolphins-diving-center-19745282",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-certificacion-open-water-diver-ssi-en-girona--o55808",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-fenals-65860",
    "centerId": "diving-la-casa-del-mar-19755566",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-lloret-de-mar-2-horas--o65860",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-estartit-57566",
    "centerId": "calypso-diving-estartit-7462",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-padi-open-water-diver-en-estartit-5-dias--o57566",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-estartit-57567",
    "centerId": "calypso-diving-estartit-7462",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-padi-advanced-en-estartit-3-dias--o57567",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-cala-pedrosa-estartit-57564",
    "centerId": "calypso-diving-estartit-7462",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-mar-en-cala-pedrosa-estartit--o57564",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-islas-medas-montgri-27211",
    "centerId": "calypso-diving-estartit-7462",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/buceo-a-las-islas-medas-o-la-costa-del-montgri--o27211",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-estartit-13966",
    "centerId": "unisub-7433",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-padi-advanced-open-water-diver-lloret-de-mar--o13966",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-montgri-3h-88870",
    "centerId": "unisub-7433",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-las-islas-medas-3h--o88870",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-islas-medas-88872",
    "centerId": "unisub-7433",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/snorkel-en-parque-natural-de-las-islas-medas-2h--o88872",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-palamos-playa-56240",
    "centerId": "anemone-diving-center-19728090",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-en-palamos-desde-playa--o56240",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-palamos-barco-56241",
    "centerId": "anemone-diving-center-19728090",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautismo-de-buceo-desde-barco-en-palamos--o56241",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-palamos-56242",
    "centerId": "anemone-diving-center-19728090",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/padi-open-water-diver-en-palamos--o56242",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-palamos-58937",
    "centerId": "buceo-catalunya-costa-brava-19718043",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/bautizo-de-buceo-en-palamos-2h--o58937",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-palamos-79990",
    "centerId": "buceo-catalunya-costa-brava-19718043",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/girona/curso-de-buceo-open-water-diver-palamos-3-dias--o79990",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-snorkel-cabo-palos-fotos",
    "centerId": "posidonia-turismo-19711962",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautizo-de-snorkel-el-cabo-de-palos-con-fotos--o40398",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-tomas-maestre-88731",
    "centerId": "masmar-buceo-19785821",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88731",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-piscina-san-javier-88730",
    "centerId": "masmar-buceo-19785821",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-mar-puerto-tomas-maestre-3h--o88730",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-la-azohia-7655",
    "centerId": "caballito-salao-19636067",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-la-azohia--o7655",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-la-azohia-60038",
    "centerId": "caballito-salao-19636067",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/curso-open-water-diver-en-la-azohia--o60038",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "doble-inmersion-cabo-tinoso-titulados-4717",
    "centerId": "caballito-salao-19636067",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/salida-doble-de-buceo-en-cabo-tinoso-titulados--o4717",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-cabo-tinoso-20620",
    "centerId": "siroco-aventuras-19694937",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-murcia--o20620",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-cabo-tinoso-la-azohia-76694",
    "centerId": "the-blue-jump-ecodiving-19760820",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/murcia/bautismo-de-buceo-en-cabo-tinoso-la-azohia-3h--o76694",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batizo-de-bceo-en-granada-horas-219",
    "centerId": "buceo-marina-19725165",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-en-granada-2-horas--o36122",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-padi-open-water-diver-en-granada-222",
    "centerId": "buceo-marina-19725165",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/curso-padi-open-water-diver-en-granada--o36123",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-de-bceo-padi-scba-diver-granada-224",
    "centerId": "buceo-marina-19725165",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-scuba-diver-granada--o36125",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batizo-de-bceo-personalizado-marina-del-este-h-220",
    "centerId": "buceo-aqualia-19635523",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/bautismo-de-buceo-personalizado-en-la-herradura--o16443",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-la-herradra-225",
    "centerId": "buceo-aqualia-19635523",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/padi-advanced-open-water-la-herradura--o16459",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-de-bceo-padi-resce-diver-en-la-herradra-226",
    "centerId": "buceo-aqualia-19635523",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/curso-de-buceo-padi-rescue-diver-en-la-herradura--o16465",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batizo-de-bceo-para-parejas-en-la-herradra-h-221",
    "centerId": "molamola-dive-3781",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/bautizo-de-buceo-para-parejas-en-la-herradura-5h--o60978",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-open-water-de-bceo-la-herradra-223",
    "centerId": "molamola-dive-3781",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/curso-open-water-de-buceo-la-herradura--o62206",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersio-n-con-eqipo-en-la-herradra-horas-227",
    "centerId": "molamola-dive-3781",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/granada/inmersion-con-equipo-en-la-herradura-4-horas--o57606",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-la-herradura-con-fotos-436",
    "centerId": "molamola-dive-3781",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-herradura-con-fotos--o55299",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-malaga-para-grupos-441",
    "centerId": "molamola-dive-3781",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-malaga-para-grupos--o59347",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-advanced-open-water-diver-o-di-as-nerja-228",
    "centerId": "buceo-costa-nerja-443",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/curso-advanced-open-water-diver-2-o-3-dias-nerja--o62513",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-diver-en-nerja-drante-di-as-229",
    "centerId": "buceo-costa-nerja-443",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/padi-open-water-diver-en-nerja-durante-4-dias--o62519",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-discover-scba-desde-barco-en-costa-de-nerja-230",
    "centerId": "buceo-costa-nerja-443",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/curso-discover-scuba-desde-barco-en-costa-de-nerja--o62523",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-ninos-maro-cerro-gordo-62522",
    "centerId": "buceo-costa-nerja-443",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/snorkel-para-ninos-acantilados-de-maro-cerro-gordo--o62522",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "progradiscover-scuba-3-horas-marina-del-este-434",
    "centerId": "buceo-costa-nerja-443",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/progradiscover-scuba-3-horas-marina-del-este--o62511",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-en-los-acantilados-de-maro-cerro-gordo-438",
    "centerId": "buceo-costa-nerja-443",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/snorkel-en-los-acantilados-de-maro-cerro-gordo--o62521",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batismo-de-bceo-en-cabo-de-gata-233",
    "centerId": "isub-san-jose-1284",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-cabo-de-gata--o26563",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batizo-de-bceo-en-cabo-de-gata-h-234",
    "centerId": "isub-san-jose-1284",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-en-cabo-de-gata--o36129",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-san-jose-462",
    "centerId": "isub-san-jose-1284",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-en-san-jose--o28185",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-open-water-en-cabo-de-gata-235",
    "centerId": "sea-sun-diving-sport-19748359",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-en-cabo-de-gata--o59202",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-open-water-diver-en-cabo-de-gata-di-as-236",
    "centerId": "buceo-las-negras-1286",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-cabo-de-gata-3-dias--o68413",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batismo-de-bceo-en-roqetas-de-mar-237",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-en-roquetas-de-mar--o20488",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-diver-en-roqetas-de-mar-238",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/padi-advanced-open-water-diver-en-roquetas-de-mar--o27804",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-open-water-diver-en-roqetas-de-mar-239",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/curso-open-water-diver-en-roquetas-de-mar--o27803",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batismo-sbmarino-perto-de-agadlce-y-vi-deos-h-240",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautismo-submarino-en-aguadulce-y-fotos--o37116",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batismo-de-bceo-para-parejas-en-agadlce-241",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-para-parejas-en-aguadulce--o20493",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "batizo-de-bceo-para-nin-os-agadlce-desde-an-os-242",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautizo-de-buceo-para-ninos-aguadulce-desde-8-anos--o37277",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "crso-advanced-open-water-perto-agadlce-di-as-243",
    "centerId": "buceo-aguadulce-roquetas-19690161",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/bautismo-de-buceo-discover-scuba-diving-aguadulce--o20947",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-doble-en-la-isla-de-tarifa-247",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-la-isla-de-tarifa--o32270",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "iniciacion-open-water-diver-puerto-de-santa-maria-260",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/cadiz/iniciacion-open-water-diver-puerto-de-santa-maria--o28548",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-puerto-de-santa-maria-261",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/cadiz/padi-advanced-open-water-puerto-de-santa-maria--o28550",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-doble-en-costa-de-gibraltar-262",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-costa-de-gibraltar--o32266",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-doble-en-cadiz-desde-barco-263",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/inmersion-de-buceo-doble-en-cadiz-desde-barco--o32284",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-en-piscina-reportaje-fotos-submarino-264",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautizo-en-piscina-reportaje-fotos-submarino--o28511",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-con-fotografia-puerto-santa-maria-265",
    "centerId": "explora-cadiz-buceo-12616",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautizo-de-buceo-con-fotografia-puerto-santa-maria--o28483",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-playa-en-tarifa-249",
    "centerId": "yellowsub-tarifa-3682",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-desde-playa-en-tarifa--o17298",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-discover-scuba-diving-tarifa-252",
    "centerId": "yellowsub-tarifa-3682",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-discover-scuba-diving-tarifa--o17300",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-advanced-diver-en-tarifa-3-dias-256",
    "centerId": "yellowsub-tarifa-3682",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-padi-advanced-diver-en-tarifa-3-dias--o17280",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-2-inmersiones-en-tarifa-250",
    "centerId": "godive-cadiz-19752527",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-2-inmersiones-en-tarifa--o61947",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-piscina-45-minutos-el-palmar-266",
    "centerId": "godive-cadiz-19752527",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/bautismo-de-buceo-en-piscina-45-minutos-el-palmar--o61964",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min-251",
    "centerId": "diver-soul-tarifa-19755895",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/ruta-guiada-de-snorkel-por-isla-de-tarifa-90-min--o66279",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-en-tarifa-4-dias-254",
    "centerId": "diver-soul-tarifa-19755895",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-open-water-diver-en-tarifa-4-dias--o66281",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-de-nitrox-en-costa-de-tarifa-259",
    "centerId": "scubkandalus-19752519",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cadiz/curso-de-buceo-de-nitrox-en-costa-de-tarifa--o62081",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-desde-barco-port-andratx-4h-267",
    "centerId": "diving-dragonera-19777561",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/discover-scuba-diving-parque-natural-dragonera--o56220",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "excursion-guiada-snorkel-por-costa-de-andratx-2h-271",
    "centerId": "diving-dragonera-19777561",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/tour-de-snorkel-por-isla-del-dragon-2-horas--o42889",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-playa-port-d-andratx-2-5h-272",
    "centerId": "diving-dragonera-19777561",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-palma-de-mallorca-3h--o28721",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-en-el-parque-natural-de-la-dragonera-2h30m-276",
    "centerId": "diving-dragonera-19777561",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/snorkel-en-el-parque-natural-de-la-dragonera--o56218",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-en-cala-santanyi-2h-268",
    "centerId": "cala-santanyi-diving-center-15224",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-santanyi--o56243",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-en-cala-santanyi-279",
    "centerId": "cala-santanyi-diving-center-15224",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/mallorca/padi-open-water-diver-en-cala-santanyi--o56247",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-diver-cala-santanyi-280",
    "centerId": "cala-santanyi-diving-center-15224",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/padi-advanced-open-water-diver-cala-santanyi--o56250",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-la-reserva-marina-de-malgrats-269",
    "centerId": "zoea-mallorca-9078",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-reserva-marina-de-malgrats--o54957",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-en-reserva-marina-de-mallorca-con-equipo-278",
    "centerId": "zoea-mallorca-9078",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/inmersion-en-reserva-marina-de-mallorca-con-equipo--o54959",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-cala-millor-mallorca-3-horas-270",
    "centerId": "albatros-diving-9862",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/bautismo-de-buceo-en-cala-millor-mallorca-3-horas--o57582",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-open-water-diver-en-cala-millor-3-dias-274",
    "centerId": "albatros-diving-9862",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-open-water-diver-en-cala-millor-3-dias--o86509",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "excursion-de-snorkelling-en-mallorca-2-horas-275",
    "centerId": "albatros-diving-9862",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/excursion-de-snorkelling-en-mallorca-2-horas--o57580",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-discover-scuba-diving-cala-millor-3h-284",
    "centerId": "albatros-diving-9862",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/curso-buceo-discover-scuba-diving-cala-millor-3h--o86514",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-con-tiburones-en-el-palma-aquarium-mallorca-273",
    "centerId": "palma-aquarium-19676636",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/buceo-con-tiburones-en-el-palma-aquarium-mallorca--o56215",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkeling-a-las-islas-malgrats-desde-un-barco-277",
    "centerId": "touradvisor-19712157",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/mallorca/snorkeling-a-las-islas-malgrats-desde-un-barco--o44539",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-cala-portinatx-2h30min-285",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/bautismo-de-buceo-en-cala-portinatx-4h--o30367",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-con-equipo-en-ibiza-2-horas-286",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/inmersion-de-buceo-con-equipo-en-ibiza-2-horas--o66230",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "basic-diver-de-ssi-en-portinatx-3-horas-288",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/advanced-open-water-sant-antoni-de-portmany--o30036",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ssi-diver-stress-and-rescue-en-portinatx-6-dias-289",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/ssi-rescue-diver-en-sant-antoni-de-portmany--o30038",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-open-water-diver-en-ibiza-5-dias-290",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/curso-de-buceo-open-water-diver-en-ibiza-5-dias--o66225",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-advanced-open-water-en-ibiza-5-dias-291",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/curso-padi-advanced-open-water-en-ibiza-5-dias--o66229",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ssi-scuba-diver-en-portinatx-3-dias-299",
    "centerId": "subfari-diving-center-19658719",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-diver-en-sant-antoni-de-portmany--o30035",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-bahia-san-antonio-287",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/padi-advanced-open-water-bahia-san-antonio--o28445",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-en-san-antonio-ibiza-292",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/discover-scuba-diving-en-san-antonio-ibiza--o3993",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersiones-de-buceo-en-san-antonio-bono-de-4-293",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/ibiza/2-inmersiones-de-buceo-en-san-antonio--o21707",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bono-10-inmersiones-botella-plomos-en-ibiza-295",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/bono-10-inmersiones-botella-plomos-en-ibiza--o27210",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-en-bahia-de-san-antonio-296",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/padi-open-water-en-bahia-de-san-antonio--o28444",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-desde-barco-cala-sant-antoni-3h30-297",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/ibiza/bautizo-de-buceo-en-sant-antoni-de-portmany-ibiza--o30025",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-para-parejas-en-punta-galera-3h30-298",
    "centerId": "arenal-diving-997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/ibiza/padi-scuba-diver-sant-antoni-de-portmany-ibiza--o30034",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-con-equipo-en-formentera-300",
    "centerId": "orcasub-4378",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/inmersion-de-buceo-con-equipo-en-formentera--o36817",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-playa-formentera-1-hora-302",
    "centerId": "orcasub-4378",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/bautismo-de-buceo-en-playa-formentera-1-hora--o36810",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-padi-formentera-303",
    "centerId": "orcasub-4378",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/curso-open-water-diver-padi-formentera--o36813",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-de-buceo-en-formentera-desde-barco-304",
    "centerId": "orcasub-4378",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-en-formentera-desde-barco--o50487",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-scuba-diver-en-platja-migjorn-4-5-dias-308",
    "centerId": "orcasub-4378",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/curso-scuba-diver-en-platja-migjorn-4-5-dias--o64641",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "tour-de-snorkel-por-la-costa-de-formentera-3-horas-312",
    "centerId": "orcasub-4378",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-por-la-costa-de-formentera-4-horas--o64660",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-aguas-abiertas-formentera-1h-301",
    "centerId": "la-isla-flotante-19738451",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-aguas-abiertas-formentera-1h--o62795",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "2-inmersiones-de-buceo-con-titulacion-formentera-305",
    "centerId": "la-isla-flotante-19738451",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/2-inmersiones-de-buceo-con-titulacion-formentera--o62794",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-en-formentera-con-equipo-completo-306",
    "centerId": "la-isla-flotante-19738451",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/buceo-en-formentera-con-equipo-completo--o62796",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-diver-padi-en-formentera-5-dias-307",
    "centerId": "la-isla-flotante-19738451",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/open-water-diver-padi-en-formentera-5-dias--o62797",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-scuba-diver-en-els-pujols-309",
    "centerId": "la-isla-flotante-19738451",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/curso-de-buceo-scuba-diver-en-els-pujols--o64650",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "tour-de-snorkel-parque-natural-ses-salines-2-30h-310",
    "centerId": "whitesand-surf-19867800",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/tour-de-snorkel-parque-natural-ses-salines-2-30h--o91297",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-puerto-de-la-sabina-2-30h-311",
    "centerId": "formentera-divers-19748467",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/formentera/bautizo-de-buceo-en-puerto-de-la-sabina-2-30h--o56957",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-playa-pobla-marina-180-min-313",
    "centerId": "buceo-valencia-19635236",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-playa-pobla-marina-180-min--o45414",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-piscina-valencia-314",
    "centerId": "buceo-valencia-19635236",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-piscina-valencia--o26644",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-el-mar-de-valencia-315",
    "centerId": "buceo-valencia-19635236",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-el-mar-de-valencia--o26649",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-open-water-diver-en-mar-316",
    "centerId": "buceo-valencia-19635236",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/curso-buceo-open-water-diver-en-mar--o26654",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-diver-en-valencia-capital-317",
    "centerId": "spain-buceo-19745261",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/padi-open-water-diver-en-valencia-capital--o56263",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-valencia-capital-318",
    "centerId": "rent-jet-ski-valencia-19746877",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-valencia-capital--o56214",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-puerto-de-valencia-2-horas-319",
    "centerId": "rent-jet-ski-valencia-19746877",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/valencia/bautismo-de-buceo-en-puerto-de-valencia-2-horas--o62434",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-finisterre-320",
    "centerId": "buceo-finisterre-1274",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/acoruna/bautismo-de-buceo-en-finisterre--o507",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-en-costa-da-morte-321",
    "centerId": "buceo-finisterre-1274",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-en-costa-da-morte--o55667",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-advanced-open-water-diver-en-finisterre-322",
    "centerId": "buceo-finisterre-1274",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/acoruna/curso-padi-advanced-open-water-diver-en-finisterre--o505",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-en-finisterre-323",
    "centerId": "buceo-finisterre-1274",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-padi-open-water-diver-en-finisterre--o511",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "excursion-de-snorkel-isla-de-arosa-media-jornada-324",
    "centerId": "piraguilla-turismo-activo-7478",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/pontevedra/excursion-de-snorkel-isla-de-arosa-media-jornada--o19836",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-doble-en-el-mar-en-foz-326",
    "centerId": "maremasma-19718363",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lugo/descubrimiento-del-buceo-en-la-ria-de-viveiro--o53324",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-padi-open-water-diver-en-foz-327",
    "centerId": "maremasma-19718363",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lugo/curso-de-buceo-open-water-diver-en-viveiro--o53325",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salida-de-buceo-en-ollo-do-mar-1-hora-328",
    "centerId": "maremasma-19718363",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lugo/salidas-de-buceo-en-la-ria-de-viveiro-titulados--o53327",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h-329",
    "centerId": "maremasma-19718363",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lugo/cinco-inmersiones-de-buceo-en-foz-con-monitor-1-h--o42327",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h-330",
    "centerId": "maremasma-19718363",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lugo/ruta-guiada-de-snorkel-con-lancha-ria-de-foz-2-h--o42326",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-en-puerto-de-a-coruna-3h-332",
    "centerId": "nauga-1272",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/acoruna/bautismo-de-buceo-en-mar-puerto-de-a-coruna-3h--o85250",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-diver-marinaseca-333",
    "centerId": "divemania-19697367",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/acoruna/padi-open-water-diver-marinaseca--o28887",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-water-de-buceo-en-a-coruna-334",
    "centerId": "divemania-19697367",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/acoruna/curso-advanced-open-water-de-buceo-en-a-coruna--o33250",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-puerto-del-musel-1h30m-335",
    "centerId": "formar-buceo-1295",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/asturias/bautismo-en-piscina-discover-scuba-diving-candas--o57621",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-fedas-1-estrella-puerto-de-el-musel-4-dias-337",
    "centerId": "formar-buceo-1295",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/asturias/curso-padi-scuba-diver-en-el-cantabrico-candas--o57622",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-desde-puerto-musel-con-equipo-338",
    "centerId": "formar-buceo-1295",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/asturias/inmersion-de-buceo-desde-puerto-musel-con-equipo--o89112",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-fedas-2-estrellas-puerto-de-el-musel-4-dias-339",
    "centerId": "formar-buceo-1295",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/asturias/curso-buceo-advanced-open-water-padi-en-candas--o57625",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-desde-barco-puerto-deportivo-gijon-336",
    "centerId": "alpha-buceo-gijon-19776780",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/asturias/bautismo-de-buceo-desde-barco-en-gijon--o57409",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-en-la-isla-de-mouro-3h-340",
    "centerId": "mouro-sub-14997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-en-la-isla-de-mouro--o12609",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-en-la-isla-de-mouro-341",
    "centerId": "mouro-sub-14997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-la-isla-de-mouro--o43837",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-barco-isla-de-la-torre-3h-352",
    "centerId": "mouro-sub-14997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/bautismo-de-buceo-3-horas-en-cantabria--o62198",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-con-certificacion-santander-353",
    "centerId": "mouro-sub-14997",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/curso-open-water-diver-con-certificacion-santander--o36886",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h-342",
    "centerId": "ok-castro-dive-club-de-buceo-19757525",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/cantabria/bautismo-de-buceo-desde-rampa-de-san-guillen-2-5-h--o70009",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-por-el-carguero-de-saltacaballo-343",
    "centerId": "ok-castro-dive-club-de-buceo-19757525",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-carguero-de-saltacaballo--o70020",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-bajo-el-castillo-de-c-urdiales-344",
    "centerId": "ok-castro-dive-club-de-buceo-19757525",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/cantabria/inmersion-de-buceo-bajo-el-castillo-de-c-urdiales--o70016",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h-345",
    "centerId": "ok-castro-dive-club-de-buceo-19757525",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/inmersion-de-buceo-por-el-cantil-de-las-anclas-3-h--o70031",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-en-castro-urdiales-desde-embarcacion-2h-346",
    "centerId": "ok-castro-dive-club-de-buceo-19757525",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-castro-urdiales-desde-embarcacion-2h--o74685",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-piscina-miengo-1h-30-min-347",
    "centerId": "buceo-calypso-19752686",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/bautizo-de-buceo-en-piscina-miengo-1h-30-min--o62672",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-advanced-open-water-diver-polanco-348",
    "centerId": "buceo-calypso-19752686",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-advanced-open-water-diver-polanco--o62342",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-especialidad-nitrox-en-requejada-349",
    "centerId": "buceo-calypso-19752686",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/curso-de-buceo-especialidad-nitrox-en-requejada--o62359",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "titulo-de-buceo-open-water-diver-en-requejada-350",
    "centerId": "buceo-calypso-19752686",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/titulo-de-buceo-open-water-diver-en-requejada--o62344",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-en-noja-2h-351",
    "centerId": "enjoy-sup-school-19706025",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-en-noja-2h--o22856",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja-354",
    "centerId": "laredo-aventura-19726061",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/ruta-de-snorkel-nocturno-en-la-playa-de-ris-noja--o66105",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja-355",
    "centerId": "nojactiva-19702312",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/cantabria/snorkel-nocturno-ruta-guiada-en-playa-de-ris-noja--o66104",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-buceo-en-playa-de-las-canteras-fotos-4h-356",
    "centerId": "mirafondos-5916",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-taurito--o45998",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-open-water-diver-en-las-palmas-5-dias-359",
    "centerId": "mirafondos-5916",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-open-water-diver--o20549",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-playa-las-canteras-4-horas-373",
    "centerId": "mirafondos-5916",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-gran-canaria-4-horas--o20699",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-desde-playa-gran-canaria-357",
    "centerId": "adventure-experiences-5453",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bautizo-de-buceo-desde-playa-gran-canaria--o31590",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-padi-las-palmas-3h-358",
    "centerId": "blue-water-diving-19725514",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautismo-de-buceo-padi-las-palmas-3h--o36890",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-discover-scuba-diving-en-playa-puerto-rico-360",
    "centerId": "blue-water-diving-19725514",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/padi-discover-scuba-diving-en-playa-puerto-rico--o29435",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-padi-advanced-open-water-377",
    "centerId": "blue-water-diving-19725514",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-buceo-padi-advanced-open-water--o38739",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-rescue-diver-emergency-first-response-378",
    "centerId": "blue-water-diving-19725514",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/curso-de-buceo-padi-rescate-y-primeros-auxilios--o38740",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-en-las-palmas-3-dias-379",
    "centerId": "blue-water-diving-19725514",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/padi-open-water-en-las-palmas-3-dias--o38735",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-open-water-puerto-rico-361",
    "centerId": "puerto-rico-diving-9853",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-open-water-puerto-rico--o29445",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-scuba-diver-en-puerto-rico-362",
    "centerId": "puerto-rico-diving-9853",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-scuba-diver-en-puerto-rico--o29501",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-puerto-rico-363",
    "centerId": "puerto-rico-diving-9853",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/padi-advanced-open-water-puerto-rico--o29461",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-caleta-de-fuste-y-fotos-367",
    "centerId": "deep-blue-diving-4028",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-caleta-de-fuste-y-fotos--o55340",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-en-morro-jable-3-horas-368",
    "centerId": "fuerteocean-dive-center-19865138",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/fuerteventura/bautismo-de-buceo-en-piscina-y-mar-en-morro-jable--o23953",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "tour-de-snorkel-por-la-costa-de-morro-jable-3h-369",
    "centerId": "fuerteocean-dive-center-19865138",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/fuerteventura/tour-de-snorkel-desde-barco-por-costa-morro-jable--o69754",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-gran-canaria-3-h-375",
    "centerId": "el-azul-gran-canaria-dive-center-19741108",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bautismo-de-buceo-en-gran-canaria-3-h--o50685",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-mar-desde-risco-verde-376",
    "centerId": "buceo-pandora-19690666",
    "sourceUrl": "https://www.yumping.com/es-MX/ofertas/buceo/gran-canaria/bautizo-de-buceo-en-mar-desde-risco-verde--o28628",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bono-10-inmersiones-381",
    "centerId": "buceo-pandora-19690666",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/bono-10-inmersiones--o28756",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-desde-costa-en-gran-canaria-titulados-382",
    "centerId": "buceo-pandora-19690666",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/gran-canaria/inmersion-desde-costa-en-gran-canaria-titulados--o28703",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-open-water-diver-padi-tenerife-4-dias-400",
    "centerId": "sa-caleta-tenerife-19643403",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-buceo-open-water-diver-padi-tenerife-4-dias--o52006",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-owd-en-santa-cruz-de-tenerife-4-dias-402",
    "centerId": "sea-diver-instructors-19753626",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/tenerife/curso-owd-en-santa-cruz-de-tenerife-4-dias--o63050",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h-404",
    "centerId": "dawn-dives-academy-8731",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/bautismo-de-buceo-doble-en-playa-blanca-yaiza-3h--o77225",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-sidemount-de-buceo-lanzarote-405",
    "centerId": "liquid-planet-19714232",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-de-sidemount-de-buceo-lanzarote--o33853",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-buceo-lanzarote-con-torpedos-subacuaticos-406",
    "centerId": "liquid-planet-19714232",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/bautizo-buceo-lanzarote-con-torpedos-subacuaticos--o33852",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceador-de-rescate-padi-puerto-del-carmen-408",
    "centerId": "island-watersports-lanzarote-4114",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/curso-buceador-de-rescate-padi-puerto-del-carmen--o15615",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-puerto-del-carmen-409",
    "centerId": "island-watersports-lanzarote-4114",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/padi-advanced-open-water-puerto-del-carmen--o204",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-rescue-diver-en-lanzarote-410",
    "centerId": "island-watersports-lanzarote-4114",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/padi-rescue-diver-en-lanzarote--o205",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-divemaster-puerto-del-carmen-411",
    "centerId": "island-watersports-lanzarote-4114",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/lanzarote/padi-divemaster-puerto-del-carmen--o206",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-parque-natural-alto-tajo-416",
    "centerId": "asdon-aventura-madrid-19701987",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/inmersion-de-buceo-en-parque-natural-alto-tajo--o30366",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-alto-tajo-guadalajara-417",
    "centerId": "asdon-aventura-madrid-19701987",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/bautizo-de-buceo-en-alto-tajo-guadalajara--o30365",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-piscina-en-madrid-de-2-horas-418",
    "centerId": "quieres-bucear-19763171",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/bautismo-de-buceo-en-piscina-en-madrid-de-2-horas--o80025",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-piscina-san-sebastian-1-5h-419",
    "centerId": "ds-divers-19865168",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-basico-en-madrid-y-levante-grupos--o35725",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-en-piscina-las-tablas-427",
    "centerId": "ds-divers-19865168",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-desde-barco--o35727",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-en-javea-o-mazarron-420",
    "centerId": "20000-leguas-19713898",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/padi-advanced-open-water-en-javea-o-mazarron--o31388",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-open-water-diver-en-javea-429",
    "centerId": "20000-leguas-19713898",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-de-open-water-diver-en-javea--o31340",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-discover-scuba-diving-en-boadilla-421",
    "centerId": "n2o2-dive-19723909",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-discover-scuba-diving-en-boadilla--o68495",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-open-water-diver-en-boadilla-424",
    "centerId": "n2o2-dive-19723909",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-open-water-diver-en-boadilla--o44170",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-bautizo-de-buceo-en-boadilla-del-monte-425",
    "centerId": "n2o2-dive-19723909",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/padi-bautizo-de-buceo-en-boadilla-del-monte--o44146",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-con-nitrox-en-madrid-2-dias-422",
    "centerId": "scubaventura-9599",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-con-nitrox-en-madrid-2-dias--o66786",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-fedas-b1-padi-owd-madrid-423",
    "centerId": "sureste-divers-madrid-19753625",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-fedas-b1-padi-owd-madrid--o63053",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-diver-en-madrid-y-levante-con-extras-426",
    "centerId": "yo-buceo-madrid-7212",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/open-water-diver-en-madrid-y-levante-con-extras--o35732",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-padi-alcala-de-henares-428",
    "centerId": "buceo-alcala-19707835",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/discover-scuba-diving-padi-alcala-de-henares--o25734",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-alcala-de-henares-y-murcia-433",
    "centerId": "buceo-alcala-19707835",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-open-water-diver-alcala-de-henares-y-murcia--o27646",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "viaje-a-ibiza-desde-denia-5-inmersiones-435",
    "centerId": "buceo-alcala-19707835",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/viaje-a-ibiza-desde-denia-5-inmersiones--o26333",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-padi-divemaster-en-las-tablas-430",
    "centerId": "neodive-19745166",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-de-buceo-padi-divemaster-en-las-tablas--o31215",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "titulo-de-padi-rescue-diver-en-las-tablas-431",
    "centerId": "neodive-19745166",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/titulo-de-padi-rescue-diver-en-las-tablas--o31209",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "titulo-padi-advanced-open-water-diver-las-tablas-432",
    "centerId": "neodive-19745166",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/titulo-padi-advanced-open-water-diver-las-tablas--o31204",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-con-aire-enriquecido-nitrox-en-madrid-434",
    "centerId": "divemadrid-3153",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/madrid/curso-buceo-con-aire-enriquecido-nitrox-en-madrid--o27482",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-playa-cabrera-de-mar-3h-419",
    "centerId": "sotacero-diving-19721722",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/primera-inmersion-de-buceo-en-el-mar-en-barcelona--o59703",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-fedas-b1e-en-barcelona-1-semana-428",
    "centerId": "sotacero-diving-19721722",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-fedas-b1e-en-barcelona-1-semana--o59704",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceador-1-estrella-fedas-en-mataro-420",
    "centerId": "blaumar-367",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-buceo-open-water-diver-en-mataro--o60120",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "salida-de-buceo-con-equipo-puerto-de-mataro-425",
    "centerId": "blaumar-367",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/salida-de-buceo-con-equipo-puerto-de-mataro--o60130",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-barco-en-mataro-427",
    "centerId": "blaumar-367",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/sesion-de-buceo-de-iniciacion-en-mataro--o60117",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-playa-de-sant-sebastia-2h-421",
    "centerId": "underwater-barcelona-19785830",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/bautizo-de-buceo-en-playa-de-sant-sebastia-2h--o88750",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-padi-divemaster-en-sitges-422",
    "centerId": "maskydiving-sitges-19732869",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-divemaster-en-sitges--o68124",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-advanced-open-water-diver-en-sitges-423",
    "centerId": "maskydiving-sitges-19732869",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-advanced-open-water-diver-en-sitges--o68123",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-padi-scuba-diver-en-sitges-424",
    "centerId": "maskydiving-sitges-19732869",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-de-buceo-padi-scuba-diver-en-sitges--o68120",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "open-water-1-star-diver-cmas-en-moll-de-la-vela-426",
    "centerId": "dive-center-barcelona-19765577",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/curso-open-water-diver-barcelona--o13955",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "practicar-snorkel-con-monitor-en-barcelona-2-horas-429",
    "centerId": "anel-lides-serveis-ambientals-marins-19739802",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/barcelona/practicar-snorkel-con-monitor-en-barcelona-2-horas--o49603",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-mar-desde-playa-de-fuengirola-3h-435",
    "centerId": "abysub-19675603",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-mar-desde-playa-fuengirola--o27182",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-de-buceo-en-la-costa-de-malaga-439",
    "centerId": "black-frog-divers-19716651",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/inmersion-de-buceo-en-la-costa-de-malaga--o34709",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-desde-torrox-451",
    "centerId": "black-frog-divers-19716651",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/curso-padi-open-water-desde-torrox--o30602",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-scuba-diver-en-torrox-452",
    "centerId": "black-frog-divers-19716651",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-torrox--o30586",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "dos-bautismos-de-buceo-piscina-y-mar-en-estepona-440",
    "centerId": "buceo-estepona",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/dos-bautismos-de-buceo-piscina-y-mar-en-estepona--o61766",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-la-costa-del-sol-3-horas-442",
    "centerId": "buceo-estepona",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-la-costa-del-sol-3-horas--o36366",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-el-mar-en-estepona-445",
    "centerId": "buceo-estepona",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautismo-de-buceo-en-el-mar-en-estepona--o61764",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-estepona-en-piscina-446",
    "centerId": "buceo-estepona",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/bautizo-de-buceo-en-estepona-en-piscina--o61760",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-buceo-open-water-diver-en-malaga-padi-447",
    "centerId": "buceo-estepona",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/curso-de-buceo-open-water-diver-en-malaga-padi--o40981",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-open-water-diver-en-rincon-de-la-victoria-443",
    "centerId": "ecodive-19729349",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/curso-de-open-water-diver-en-rincon-de-la-victoria--o68503",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceo-scuba-diver-12m-rincon-de-la-victoria-444",
    "centerId": "ecodive-19729349",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/curso-buceo-scuba-diver-12m-rincon-de-la-victoria--o68500",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-rescue-diver-en-marbella-448",
    "centerId": "h2o-sports-4617",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/padi-rescue-diver-en-marbella--o30945",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-advanced-open-water-en-marbella-449",
    "centerId": "h2o-sports-4617",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/padi-advanced-open-water-en-marbella--o30939",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "padi-scuba-diver-en-marbella-450",
    "centerId": "h2o-sports-4617",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/malaga/padi-scuba-diver-en-marbella--o30936",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-desde-barco-botella-carga-isla-terreros-457",
    "centerId": "buceo-isla-negra-19863884",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/inmersion-con-botella-mas-plomos-en-almeria--o31010",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "advanced-adventurer-ssi-en-puerto-de-las-aguilas-458",
    "centerId": "buceo-isla-negra-19863884",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/curso-advanced-open-water-padi-en-villariscos--o65210",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-padi-open-water-diver-en-mojacar-459",
    "centerId": "calamar-gigante-19776791",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/almeria/curso-padi-open-water-diver-en-mojacar--o86677",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "discover-scuba-diving-desde-barco-en-alicante-3h-460",
    "centerId": "centro-buceo-altair-19754599",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-alicante-o-calpe--o27573",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-costa-blanca-467",
    "centerId": "yo-buceo-torrevieja-19636211",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-en-mar-costa-blanca--o23943",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-en-puerto-oropesa-5-dias-471",
    "centerId": "barracuda-oropesa-buceo-19864501",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/castellon/curso-open-water-diver-en-puerto-oropesa-5-dias--o89894",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-advanced-open-diver-en-puerto-oropesa-4-dias-472",
    "centerId": "barracuda-oropesa-buceo-19864501",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/castellon/curso-advanced-open-diver-en-puerto-oropesa-4-dias--o89900",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h-473",
    "centerId": "barracuda-oropesa-buceo-19864501",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/castellon/bautismo-de-buceo-piscina-y-mar-puerto-oropesa-3h--o89889",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "acuc-open-water-diver-en-alcoceber-castellon-474",
    "centerId": "barracuda-9404",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/castellon/acuc-open-water-diver-en-alcoceber-castellon--o29231",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautizo-de-buceo-en-mar-alcoceber-475",
    "centerId": "barracuda-9404",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/castellon/bautizo-de-buceo-piscina-y-mar-alcoceber--o29548",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "acuc-advanced-open-water-en-alcoceber-castellon-476",
    "centerId": "barracuda-9404",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/castellon/acuc-advanced-open-water-en-alcoceber-castellon--o29232",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "inmersion-buceo-en-hondarribia-alquiler-equipo-477",
    "centerId": "buceo-hondarribia-11447",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/guipuzcoa/inmersion-buceo-en-hondarribia-alquiler-equipo--o53172",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-alquiler-botella-y-plomos-hondarribia-478",
    "centerId": "buceo-hondarribia-11447",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/guipuzcoa/buceo-alquiler-botella-y-plomos-hondarribia--o53171",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-hondarribia-481",
    "centerId": "buceo-hondarribia-11447",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-hondarribia--o5411",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-open-water-diver-ssi-san-sebastian-3-4-dias-479",
    "centerId": "buceo-donosti-6147",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/guipuzcoa/curso-open-water-diver-ssi-san-sebastian-3-4-dias--o86327",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-en-mar-en-san-sebastian-480",
    "centerId": "buceo-donosti-6147",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/guipuzcoa/bautismo-de-buceo-en-mar-en-san-sebastian--o86324",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-de-open-water-en-navarra-iniciacion-al-buceo-482",
    "centerId": "buceo-navarra-1977",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/navarra/curso-de-open-water-en-navarra-iniciacion-al-buceo--o10766",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "curso-buceador-open-water-diver-navarra-483",
    "centerId": "centro-de-buceo-splash-3877",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/navarra/curso-buceador-open-water-diver-navarra--o34043",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "buceo-de-bautismo-en-aguas-confinadas-en-toledo-484",
    "centerId": "yo-buceo-toledo-19753068",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/toledo/buceo-de-bautismo-en-aguas-confinadas-en-toledo--o62508",
    "checkedAt": "2026-10-04"
  },
  {
    "activitySlug": "bautismo-de-buceo-desde-playa-en-javea-487",
    "centerId": "mardays-dive-resort-19698976",
    "sourceUrl": "https://www.yumping.com/ofertas/buceo/alicante/bautismo-de-buceo-desde-playa-en-javea--o18720",
    "checkedAt": "2026-10-04"
  }
];
