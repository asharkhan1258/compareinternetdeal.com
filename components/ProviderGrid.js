import { providers } from "@/lib/site";
export default function ProviderGrid(){
  return <div className="provider-grid">{providers.map(p=><div className="provider-card" key={p.name}><strong>{p.name}</strong><span>{p.note}</span></div>)}</div>
}
