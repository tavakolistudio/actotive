"use client";

import { useState } from "react";
import { certificateGallery } from "@/data/actotive";

export function CertificateGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : certificateGallery[activeIndex];

  return <>
    <div className="certificate-grid">{certificateGallery.map(({ title, label, image }, index) => <button type="button" className="certificate-card" onClick={() => setActiveIndex(index)} key={title} aria-label={`Open full preview of ${title}`}><img src={image} alt={`${title} certificate`} /><span>{title}</span><small>{label}</small><b>Full preview ↗</b></button>)}</div>
    {active && <div className="certificate-modal" role="dialog" aria-modal="true" aria-label={`${active.title} preview`}><button type="button" className="certificate-modal-backdrop" aria-label="Close preview" onClick={() => setActiveIndex(null)} /><div className="certificate-modal-panel"><button type="button" className="certificate-modal-close" onClick={() => setActiveIndex(null)} aria-label="Close preview">×</button><img src={active.image} alt={`${active.title} full certificate preview`} /><div><strong>{active.title}</strong><span>{active.label}</span><a href={active.href} target="_blank" rel="noreferrer">Open original document ↗</a></div></div></div>}
  </>;
}
