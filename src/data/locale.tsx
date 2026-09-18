export type Locale = "en" | "tr";

export const localizedNavigation = {
  en: ["Home", "Products", "Engineering & Services", "Industries", "Consulting", "Quality", "About", "Contact"],
  tr: ["Ana Sayfa", "Ürünler", "Mühendislik & Hizmetler", "Sektörler", "Danışmanlık", "Kalite", "Hakkımızda", "İletişim"],
} as const;

export const localeCopy = {
  en: { quote: "Request a quote", heroEyebrow: "Independent aftermarket supplier", heroTitle: <>Powering global<br /><em>rail & marine</em><br />operations</>, heroDescription: <>Locomotive, rolling stock and marine engine components.<br />Engineering expertise. Global delivery.</>, searchParts: "Search parts", scroll: "Scroll to explore", footer: "Independent aftermarket supplier for global rail and marine operations." },
  tr: { quote: "Teklif isteyin", heroEyebrow: "Bağımsız satış sonrası tedarikçi", heroTitle: <>Küresel <br /><em>demiryolu ve deniz</em><br />operasyonlarına güç veriyoruz</>, heroDescription: <>Lokomotif, demiryolu araçları ve deniz motoru bileşenleri.<br />Mühendislik uzmanlığı. Küresel teslimat.</>, searchParts: "Parça ara", scroll: "Keşfetmek için kaydırın", footer: "Küresel demiryolu ve deniz operasyonları için bağımsız satış sonrası tedarikçi." },
} as const;
