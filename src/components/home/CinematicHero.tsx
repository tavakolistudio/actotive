"use client";

import { useEffect, useRef } from "react";
import { certifications } from "@/data/actotive";

const heroVideo = "/videos/actotive/actotive-cinematic-hero.mp4";

export function CinematicHero() {
  const root = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastFrame = useRef(-1);
  useEffect(() => {
    const section = root.current;
    const video = videoRef.current;
    if (!section || !video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    const sync = () => {
      if (reduced) { section.style.setProperty("--intro-progress", "1"); return; }
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / distance));
      section.style.setProperty("--intro-progress", progress.toString());
      if (Number.isFinite(video.duration)) {
        const frameRate = 30;
        const targetFrame = Math.min(Math.floor(video.duration * frameRate) - 1, Math.round(progress * video.duration * frameRate));
        if (targetFrame !== lastFrame.current) {
          lastFrame.current = targetFrame;
          const target = targetFrame / frameRate;
          const seekableVideo = video as HTMLVideoElement & { fastSeek?: (time: number) => void };
          video.pause();
          // Fast seek wakes video decoders that defer remote seeks; the exact
          // assignment immediately after it preserves frame-level progress.
          seekableVideo.fastSeek?.(target);
          video.currentTime = target;
        }
      }
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(sync); };
    video.addEventListener("loadedmetadata", sync);
    sync(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll);
      video.removeEventListener("loadedmetadata", sync);
    };
  }, []);
  return <section className="cinematic-hero" id="top" ref={root}>
    <div className="hero-sticky">
      <div className="video-stage" aria-hidden="true"><video ref={videoRef} src={heroVideo} muted playsInline preload="auto" /></div>
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
