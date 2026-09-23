import Link from "next/link";
import { BadgeCheck, MapPin, Phone, ShieldCheck, Wifi, Scale, SearchCheck } from "lucide-react";
import ProviderGrid from "@/components/ProviderGrid";
import CTA from "@/components/CTA";
import { site } from "@/lib/site";

export default function Home(){
 return <>
  <section className="hero">
   <div className="container hero-grid">
    <div>
      <div className="eyebrow"><ShieldCheck size={16}/> Independent comparison service</div>
      <h1>Compare internet options for your address</h1>
      <p className="lead">Explore available home internet options based on your location, household needs, speed preferences, and budget.</p>
      <div className="hero-actions"><a className="btn btn-primary btn-lg" href={`tel:${site.phoneHref}`}><Phone size={20}/> Call {site.phoneDisplay}</a><Link className="btn btn-outline btn-lg" href="/compare">Compare Options</Link></div>
      <p className="microcopy">We are an independent marketing and comparison service. We are not an internet service provider. Availability and terms vary by provider and location.</p>
    </div>
    <div className="hero-card">
      <h3>What we can help you compare</h3>
      <div className="feature-row"><Wifi/><div><b>Internet availability</b><span>Options that may be available near you.</span></div></div>
      <div className="feature-row"><Scale/><div><b>Plan differences</b><span>Compare speeds, features, and general plan fit.</span></div></div>
      <div className="feature-row"><SearchCheck/><div><b>Service considerations</b><span>Understand key factors before choosing a provider.</span></div></div>
      <div className="feature-row"><BadgeCheck/><div><b>Clear disclosures</b><span>Provider relationships and ownership are identified transparently.</span></div></div>
    </div>
   </div>
  </section>

  <section className="section"><div className="container"><div className="section-head"><span className="kicker">Provider options</span><h2>Explore commonly available internet providers</h2><p>Provider names below are shown for comparison context only. Availability depends on your address and no affiliation or endorsement is implied unless specifically disclosed.</p></div><ProviderGrid/></div></section>

  <section className="section alt"><div className="container"><div className="section-head"><span className="kicker">Simple process</span><h2>How it works</h2></div><div className="steps"><div><span>1</span><h3>Tell us your location</h3><p>Share the service address or ZIP code you want to check.</p></div><div><span>2</span><h3>Discuss what you need</h3><p>Let us know your speed needs, household size, and budget range.</p></div><div><span>3</span><h3>Review available options</h3><p>We help you understand available choices and important plan details.</p></div></div></div></section>

  <section className="section"><div className="container trust-grid"><div><span className="kicker">Transparency first</span><h2>Know who you are speaking with</h2><p>{site.brandName} is operated by <strong>{site.legalName}</strong>. Our website is designed to clearly identify the business behind the service and explain what we do.</p><p>We do not claim to be the official customer-service department of any internet provider unless that relationship is specifically stated and supported by documentation.</p><Link href="/disclosure" className="text-link">Read our partner disclosure →</Link></div><div className="info-card"><MapPin/><h3>Business information</h3><p><strong>Legal entity:</strong><br/>{site.legalName}</p><p><strong>Business address:</strong><br/>{site.address}</p><p><strong>Hours:</strong><br/>{site.hours}</p><p><strong>Email:</strong><br/>{site.email}</p></div></div></section>

  <div className="container"><CTA/></div>
 </>
}
