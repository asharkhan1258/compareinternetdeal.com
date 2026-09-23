export const site = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "Compare Internet Plans",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "YOUR LEGAL BUSINESS NAME LLC",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(800) 555-0123",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "+18005550123",
  email: process.env.NEXT_PUBLIC_EMAIL || "help@example.com",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "example.com",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "YOUR VERIFIED BUSINESS ADDRESS",
  hours: process.env.NEXT_PUBLIC_HOURS || "Mon-Sat, 8:00 AM-8:00 PM ET",
  relationship: process.env.NEXT_PUBLIC_RELATIONSHIP || "independent",
};

export const providers = [
  { name: "AT&T", note: "Availability varies by location" },
  { name: "Spectrum", note: "Availability varies by location" },
  { name: "Verizon", note: "Availability varies by location" },
  { name: "Optimum", note: "Availability varies by location" },
  { name: "T-Mobile", note: "Availability varies by location" },
  { name: "CenturyLink", note: "Availability varies by location" },
];
