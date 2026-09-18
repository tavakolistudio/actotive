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
] as const;

export const industrialVisuals = {
  workshop: "/images/industrial/engineering-workshop.png",
  network: "/images/industrial/global-supply-network.png",
  rfq: "/images/industrial/turbocharger-rfq.png",
} as const;

export const services = ["Parts Sourcing", "Engineering & Design", "Global Logistics", "Technical Support", "Quality Assurance"];

export const advantages = ["Global Network", "Quality Assurance", "Competitive Sourcing", "Reliable Logistics", "Technical Expertise", "Customer-Centric Solutions"];
