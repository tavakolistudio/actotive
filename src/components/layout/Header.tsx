"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/actotive";
import { localizedNavigation, localeCopy, type Locale } from "@/data/locale";

export function Header({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
    <a className="logo" href="#top" aria-label="ACTOTIVE home">ACT<span>O</span>TIVE</a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><i /><i /></button>
    <nav className={open ? "open" : ""} aria-label="Main navigation">
      {navigation.map((item, index) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{localizedNavigation[locale][index]}</a>)}
    </nav>
    <a className="header-cta" href="#rfq">{localeCopy[locale].quote} <span>↗</span></a><a className="language-switch" href={locale === "en" ? "/tr" : "/"} aria-label={locale === "en" ? "Switch to Turkish" : "Switch to English"}>{locale === "en" ? "TR" : "EN"}</a>
  </header>;
}
