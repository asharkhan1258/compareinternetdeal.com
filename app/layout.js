import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallBar from "@/components/CallBar";
import { site } from "@/lib/site";

export const metadata = {
  title: { default: `${site.brandName} | Compare Home Internet Options`, template: `%s | ${site.brandName}` },
  description: "Compare available home internet options by location, service needs, and budget. Independent comparison and marketing service.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><CallBar/></body></html>;
}
