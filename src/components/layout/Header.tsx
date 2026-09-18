"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/data/actotive";

export function Header() {
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
      {navigation.map(item => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
    </nav>
    <a className="header-cta" href="#rfq">Request a quote <span>↗</span></a>
  </header>;
}
