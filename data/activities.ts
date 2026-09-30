export type Activity = {
  id:number; title:string; destination:string; region:string; slug:string;
  type:"Bautismo"|"Fun Dive"|"Curso"|"Pecio"|"Fauna"|"Snorkel";
  level:"Inicial"|"Intermedio"|"Avanzado"; duration:string; audience:string;
  tags:string[]; bookingStatus:"Próximamente";
};

export const activities:Activity[]=[
{id:1,title:"Bautismo de buceo en la Costa Brava",destination:"L’Estartit",region:"Costa Brava",slug:"bautismo-costa-brava",type:"Bautismo",level:"Inicial",duration:"Media jornada",audience:"Primera experiencia",tags:["Equipo incluido","Instructor","Mediterráneo"],bookingStatus:"Próximamente"},
{id:2,title:"Bautismo de buceo en Tossa de Mar",destination:"Tossa de Mar",region:"Costa Brava",slug:"bautismo-tossa-de-mar",type:"Bautismo",level:"Inicial",duration:"Media jornada",audience:"Primera experiencia",tags:["Cala","Principiantes","Instructor"],bookingStatus:"Próximamente"},
{id:3,title:"2 inmersiones en Illes Medes",destination:"Illes Medes",region:"Costa Brava",slug:"dos-inmersiones-illes-medes",type:"Fun Dive",level:"Intermedio",duration:"Media jornada",audience:"Buceadores certificados",tags:["Reserva marina","Barco","Fauna"],bookingStatus:"Próximamente"},
{id:4,title:"Buceo en pecio Boreas",destination:"Palamós",region:"Costa Brava",slug:"pecio-boreas",type:"Pecio",level:"Avanzado",duration:"Media jornada",audience:"Buceadores certificados",tags:["Pecio","Barco","Profundidad"],bookingStatus:"Próximamente"},
{id:5,title:"Buceo en la Reserva de Cabo de Palos",destination:"Cabo de Palos",region:"Murcia",slug:"reserva-cabo-de-palos",type:"Fun Dive",level:"Intermedio",duration:"Media jornada",audience:"Buceadores certificados",tags:["Reserva","Fauna","Barco"],bookingStatus:"Próximamente"},
{id:6,title:"Inmersión al Naranjito",destination:"Cabo de Palos",region:"Murcia",slug:"naranjito-cabo-de-palos",type:"Pecio",level:"Avanzado",duration:"Media jornada",audience:"Buceadores certificados",tags:["Pecio","Historia","Barco"],bookingStatus:"Próximamente"},
{id:7,title:"Buceo en Tabarca",destination:"Isla de Tabarca",region:"Alicante",slug:"buceo-tabarca",type:"Fun Dive",level:"Inicial",duration:"Media jornada",audience:"Principiantes y certificados",tags:["Reserva","Posidonia","Barco"],bookingStatus:"Próximamente"},
{id:8,title:"Buceo en El Toro",destination:"Mallorca",region:"Baleares",slug:"buceo-el-toro",type:"Fauna",level:"Intermedio",duration:"Media jornada",audience:"Buceadores certificados",tags:["Reserva","Fauna","Roca"],bookingStatus:"Próximamente"},
{id:9,title:"Buceo en Cabrera",destination:"Cabrera",region:"Baleares",slug:"buceo-cabrera",type:"Fauna",level:"Intermedio",duration:"Día completo",audience:"Buceadores certificados",tags:["Parque nacional","Aguas claras","Fauna"],bookingStatus:"Próximamente"},
{id:10,title:"Buceo en La Restinga",destination:"El Hierro",region:"Canarias",slug:"buceo-la-restinga",type:"Fauna",level:"Inicial",duration:"Media jornada",audience:"Principiantes y certificados",tags:["Volcánico","Fauna","Reserva"],bookingStatus:"Próximamente"},
{id:11,title:"Buceo en El Cabrón",destination:"Gran Canaria",region:"Canarias",slug:"buceo-el-cabron",type:"Fauna",level:"Intermedio",duration:"Media jornada",audience:"Buceadores certificados",tags:["Volcánico","Raya","Vida marina"],bookingStatus:"Próximamente"},
{id:12,title:"Buceo en Maro–Cerro Gordo",destination:"Nerja",region:"Andalucía",slug:"buceo-maro-cerro-gordo",type:"Fun Dive",level:"Inicial",duration:"Media jornada",audience:"Principiantes y certificados",tags:["Reserva","Cala","Mediterráneo"],bookingStatus:"Próximamente"}
];

export const activityTypes=["Bautismo","Fun Dive","Curso","Pecio","Fauna","Snorkel"];
export const activityRegions=Array.from(new Set(activities.map(a=>a.region))).sort();
