export function buildCivitatisUrl(url:string){
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
