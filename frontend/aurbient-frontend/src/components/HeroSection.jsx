import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NeuralWave from "./NeuralWave";

const LAYERS = {
  kicker:  { x: 0.016, y: 0.010 },
  headline:{ x: 0.010, y: 0.006 },
  sub:     { x: 0.006, y: 0.004 },
  children:{ x: 0.004, y: 0.003 },
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0,  filter: "blur(0px)" },
  transition: { duration: 0.8, ease: "easeOut", delay },
});

export default function HeroSection({ kicker, headline, subtext, children }) {
  const heroRef   = useRef(null);
  const kickerRef = useRef(null);
  const headRef   = useRef(null);
  const subRef    = useRef(null);
  const childRef  = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let cx = hero.offsetWidth / 2, cy = hero.offsetHeight / 2;

    const onResize = () => {
      cx = hero.offsetWidth / 2;
      cy = hero.offsetHeight / 2;
    };
    const onMove = (e) => {
      const r  = hero.getBoundingClientRect();
      if (e.clientY < r.top || e.clientY > r.bottom) return;
      const dx = e.clientX - (r.left + cx);
      const dy = e.clientY - (r.top  + cy);
      const apply = (el, m) => {
        if (el) el.style.transform = `translate(${dx * m.x}px, ${dy * m.y}px)`;
      };
      apply(kickerRef.current, LAYERS.kicker);
      apply(headRef.current,   LAYERS.headline);
      apply(subRef.current,    LAYERS.sub);
      apply(childRef.current,  LAYERS.children);
    };
    const onLeave = () => {
      [kickerRef, headRef, subRef, childRef].forEach(r => {
        if (r.current) r.current.style.transform = "translate(0px,0px)";
      });
    };

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("resize",     onResize);
    hero.addEventListener("mouseleave",   onLeave);
    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("resize",     onResize);
      hero.removeEventListener("mouseleave",   onLeave);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "var(--hero-bg)",
      }}
    >
      <NeuralWave />
      <div style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background: `
          radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.1) 50%, transparent 100%),
          linear-gradient(to top, var(--hero-surface) 0%, transparent 25%),
          linear-gradient(to bottom, var(--hero-surface) 0%, transparent 18%)
        `,
      }} />

      <div style={{
        position: "relative", zIndex: 10,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 5rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        {kicker && (
          <motion.div {...fadeUp(0.2)}>
            <div ref={kickerRef} style={{ transition: "transform 0.12s ease-out", willChange: "transform", marginBottom: "1.4rem" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                color: "var(--hero-accent)", fontSize: "0.68rem", fontWeight: 600,
                letterSpacing: "0.22em", textTransform: "uppercase",
              }}>
                <span style={{ width: "22px", height: "1px", background: "var(--hero-accent)", display: "inline-block" }} />
                {kicker}
                <span style={{ width: "22px", height: "1px", background: "var(--hero-accent)", display: "inline-block" }} />
              </span>
            </div>
          </motion.div>
        )}

        {headline && (
          <motion.div {...fadeUp(0.35)}>
            <div ref={headRef} style={{ transition: "transform 0.18s ease-out", willChange: "transform", marginBottom: "1.5rem" }}>
              <h1 className="font-heading" style={{
                margin: 0,
                fontWeight: 600,
                fontSize: "clamp(3rem, 5.5vw, 4.8rem)",
                lineHeight: 1.04, letterSpacing: "-1.5px", color: "var(--hero-text)",
              }}>
                {headline}
              </h1>
            </div>
          </motion.div>
        )}

        {subtext && (
          <motion.div {...fadeUp(0.5)}>
            <div ref={subRef} style={{ transition: "transform 0.22s ease-out", willChange: "transform", marginBottom: "2rem" }}>
              <p style={{
                margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.8,
                color: "#F5F5F5", maxWidth: "500px", fontWeight: 300,
              }}>
                {subtext}
              </p>
            </div>
          </motion.div>
        )}

        {children && (
          <motion.div {...fadeUp(0.62)}>
            <div ref={childRef} style={{ transition: "transform 0.25s ease-out", willChange: "transform" }}>
              {children}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
