import Link from "next/link";
import { Phone, Menu } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" aria-label={`${site.brandName} home`}>
          <span className="brand-mark">CIP</span>
          <span>{site.brandName}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/compare">Compare Plans</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <a className="btn btn-primary header-call" href={`tel:${site.phoneHref}`}>
          <Phone size={17} /> {site.phoneDisplay}
        </a>
      </div>
    </header>
  );
}
