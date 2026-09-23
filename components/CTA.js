import { Phone } from "lucide-react";
import { site } from "@/lib/site";
export default function CTA({title="Want help comparing your options?", text="Call our team to discuss internet options that may be available at your address."}){
  return <section className="cta"><div><h2>{title}</h2><p>{text}</p></div><a className="btn btn-light" href={`tel:${site.phoneHref}`}><Phone size={18}/> {site.phoneDisplay}</a></section>
}
