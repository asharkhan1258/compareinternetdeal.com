import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand footer-brand"><span className="brand-mark">CIP</span><span>{site.brandName}</span></div>
          <p className="muted">Operated by {site.legalName}.</p>
          <p className="muted">{site.address}</p>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/how-it-works">How It Works</Link>
        </div>
        <div>
          <h4>Legal</h4>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/disclosure">Partner Disclosure</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</p>
        <p className="small">Internet service availability, speeds, pricing, and terms vary by provider and location. Provider names and trademarks belong to their respective owners.</p>
      </div>
    </footer>
  );
}
