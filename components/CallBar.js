import { Phone } from "lucide-react";
import { site } from "@/lib/site";
export default function CallBar(){
  return <a className="mobile-callbar" href={`tel:${site.phoneHref}`}><Phone size={18}/> Call to compare: {site.phoneDisplay}</a>
}
