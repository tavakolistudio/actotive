export type Locale = "en" | "tr";

export const localizedNavigation = {
  en: ["Home", "Products", "Engineering & Services", "Industries", "Consulting", "Quality", "About", "Contact"],
  tr: ["Ana Sayfa", "Ürünler", "Mühendislik & Hizmetler", "Sektörler", "Danışmanlık", "Kalite", "Hakkımızda", "İletişim"],
} as const;

export const localeCopy = {
  en: { quote: "Request a quote", heroEyebrow: "Independent aftermarket supplier", heroTitle: <>Powering global<br /><em>rail & marine</em><br />operations</>, heroDescription: <>Supplier of EMD, GE & ALCO locomotive parts, turbochargers and marine engine components.<br />Expert engineering solutions and global distribution.</>, heroProof: ["Global Delivery", "Quality Components", "DB2 Authorized Freight Railway Operations"], heroFacts: ["Trusted by Railway Operators Worldwide", "Independent Aftermarket Supplier", "DB2 Authorized", "Based in Yalova, Türkiye", "Engineering Excellence"], searchParts: "Search parts", scroll: "Scroll to explore", footer: "Independent aftermarket supplier for global rail and marine operations." },
  tr: { quote: "Teklif isteyin", heroEyebrow: "Bağımsız satış sonrası tedarikçi", heroTitle: <>Küresel <br /><em>demiryolu ve deniz</em><br />operasyonlarına güç veriyoruz</>, heroDescription: <>EMD, GE ve ALCO lokomotif parçaları, turboşarjlar ve deniz motoru bileşenleri tedarikçisi.<br />Uzman mühendislik çözümleri ve küresel dağıtım.</>, heroProof: ["Küresel Teslimat", "Kaliteli Bileşenler", "DB2 Yetkili Yük Demiryolu Operasyonları"], heroFacts: ["Dünya Çapında Demiryolu Operatörlerinin Güvendiği", "Bağımsız Satış Sonrası Tedarikçi", "DB2 Yetkili", "Yalova, Türkiye Merkezli", "Mühendislik Mükemmeliyeti"], searchParts: "Parça ara", scroll: "Keşfetmek için kaydırın", footer: "Küresel demiryolu ve deniz operasyonları için bağımsız satış sonrası tedarikçi." },
} as const;
