"use client";

import { useEffect, useRef } from "react";
import { certifications } from "@/data/actotive";

const clips = ["/videos/actotive/01-train-breakdown.mp4", "/videos/actotive/02-breakdown-core.mp4", "/videos/actotive/03-core-globe.mp4"];

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  const videos = useRef<HTMLVideoElement[]>([]);
  useEffect(() => {
    const section = root.current; if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const sync = () => {
      if (reduced) { section.style.setProperty("--intro-progress", "1"); return; }
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      section.style.setProperty("--intro-progress", progress.toString());
      const index = Math.min(2, Math.floor(progress * 3));
      const local = Math.min(0.999, (progress - index / 3) * 3);
      videos.current.forEach((video, i) => {
        const opacity = i === index ? 1 : 0;
        video.style.opacity = opacity.toString();
        if (i === index && Number.isFinite(video.duration)) {
          const target = local * video.duration;
          if (Math.abs(video.currentTime - target) > 0.045) video.currentTime = target;
        }
      });
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); };
    const videoElements = videos.current;
    videoElements.forEach(video => video.addEventListener("loadedmetadata", sync));
    sync(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll);
      videoElements.forEach(video => video.removeEventListener("loadedmetadata", sync));
    };
  }, []);
  return <section className="cinematic-hero" id="top" ref={root}>
    <div className="hero-sticky">
      <div className="video-stage" aria-hidden="true">{clips.map((src, i) => <video key={src} ref={el => { if (el) videos.current[i] = el; }} src={src} muted playsInline preload={i === 0 ? "auto" : "metadata"} />)}</div>
      <div className="hero-scrim" />
      <div className="intro-mark"><span>ACTOTIVE</span><small>Rail & Marine Engineering</small></div>
      <div className="hero-content">
        <p className="eyebrow">Independent aftermarket supplier</p><h1>Powering global<br /><em>rail & marine</em><br />operations</h1>
        <p className="hero-copy">Locomotive, rolling stock and marine engine components.<br />Engineering expertise. Global delivery.</p>
        <div className="hero-actions"><a className="button primary" href="#rfq">Request a quote <span>↗</span></a><a className="button secondary" href="#products">Search parts <span>→</span></a></div>
      </div>
      <div className="scroll-prompt"><span /> Scroll to explore</div>
      <div className="hero-trust">{certifications.map(cert => <span key={cert}>{cert}</span>)}</div>
    </div>
  </section>;
}
