export const navigation = [
  { label: "Home", href: "#top" },
  { label: "Products", href: "#products" },
  { label: "Engineering & Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Consulting", href: "#network" },
  { label: "Quality", href: "#quality" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#rfq" },
];

export const certifications = ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "DB2 Authorized", "YTSO Member"];

export const industries = [
  ["01", "Railway", "Mission-critical components for freight and rail infrastructure."],
  ["02", "Locomotive", "Independent aftermarket support for demanding operations."],
  ["03", "Rolling Stock", "Reliable passenger-car components for continuous service."],
  ["04", "Marine", "Engine and turbocharger expertise for marine fleets."],
] as const;

export const products = [
  { title: "Locomotive Spare Parts", copy: "Powertrain, braking and auxiliary systems", image: "https://actotive.co/images/card1.webp" },
  { title: "Turbocharger Components", copy: "Precision components for reliable performance", image: "https://actotive.co/images/card2.webp" },
  { title: "Passenger Car Components", copy: "Interior, mechanical and safety systems", image: "https://actotive.co/images/card3.webp" },
  { title: "Marine Engine Components", copy: "Parts sourcing for commercial marine operations", image: "https://actotive.co/images/card4.webp" },
  { title: "Freight Forwarding Services", copy: "Efficient freight forwarding for time-critical industrial shipments", image: "https://actotive.co/images/card5.webp" },
] as const;

export const industrialVisuals = {
  workshop: "/images/industrial/engineering-workshop.png",
  network: "/images/industrial/global-supply-network.png",
  rfq: "/images/industrial/turbocharger-rfq.png",
} as const;

export const services = ["Technical Consultation", "Component Sourcing", "Quality Assurance", "Supply Chain Management", "Technical Support", "Custom Solutions"];

export const advantages = ["Global Network", "Quality Assurance", "Competitive Sourcing", "Reliable Logistics", "Technical Expertise", "Customer-Centric Solutions"];

export const companyProfile = {
  overview: "ACTOTIVE RAIL TRADE is a global supplier of locomotive, rolling stock, passenger car and marine engine components, together with freight forwarding services. We combine technical expertise, product quality and responsive customer service to solve operational challenges worldwide.",
  mission: "To provide railway and marine industries with reliable, high-quality components and solutions that enhance operational efficiency, reduce maintenance costs and extend equipment lifespan.",
  vision: "To be the global partner of choice for railway and marine component solutions, recognized for technical expertise, product quality and a customer-centric approach.",
  values: ["Excellence", "Integrity", "Innovation", "Reliability", "Partnership"],
  authorization: "DB2 authorized freight railway operations · Republic of Türkiye Ministry of Transport and Infrastructure · Valid through 13 May 2031",
  aftermarketNotice: "Aftermarket products are designed to meet or exceed OEM specifications. Part numbers are used solely for reference and identification.",
} as const;
