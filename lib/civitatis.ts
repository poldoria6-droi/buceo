export function buildCivitatisUrl(url:string){
  // Solo añade el AID a enlaces de Civitatis.
  // Los enlaces de otros partners (p. ej. Yumping) se mantienen intactos.
  if(!url.includes("civitatis.com")) return url;

  const aid=process.env.NEXT_PUBLIC_CIVITATIS_AID?.trim();
  if(!aid)return url;

  try{
    const parsed=new URL(url);
    parsed.searchParams.set("aid",aid);
    return parsed.toString();
  }catch{
    return url;
  }
}
