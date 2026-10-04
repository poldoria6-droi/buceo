export type BookingOffer = {
  id:string;
  provider:string;
  url:string;
  sourceUrl?:string;
  priceFrom?:number;
  priceCurrency?:string;
  priceCheckedAt?:string;
  notes?:string;
  status?:"active"|"paused";
};


export type ActivityOperator = {
  name: string;
  location?: string;
  sourceUrl: string;
  checkedAt: string;
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
  operator?: ActivityOperator;
};
