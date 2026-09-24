export const site = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "Compare Internet Deal",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "CORETEL INTERNET LLC",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "(855) 216-7634",
  phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || "+18552167634",
  email: process.env.NEXT_PUBLIC_EMAIL || "help@compareinternetdeal.com",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "compareinternetdeal.com",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "7538 Utopia Pkwy, Fresh Meadows, NY 11366-1527",
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
