/**
 * HeroField — Full-banner flowing particle field
 * - Particles flow across the entire hero using a trig-based flow field
 * - Creates organic wavy streams across the full width
 * - Cursor repels nearby particles (antigravity.google style)
 * - Pills aligned to velocity, partial-clear trail effect
 * - Zero connecting lines — fully sparse/individual
 */
import { useEffect, useRef } from "react";

const COUNT = 420;
const MOUSE_RADIUS = 140;
const MOUSE_FORCE  = 2.8;

export default function HeroField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, time = 0;
    const mouse = { x: -999, y: -999 };

    /* ── resize ── */
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── mouse tracking ── */
    const onMouse = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = -999; mouse.y = -999; };
    window.addEventListener("mousemove", onMouse);
    canvas.addEventListener("mouseleave", onLeave);

    /* ── flow field angle at (x,y,t) ── */
    const flowAngle = (x, y, t) => {
      const nx = x / (canvas.width  || 1);
      const ny = y / (canvas.height || 1);
      return (
        Math.sin(nx * 3.5 + t * 0.55)   * Math.PI
      + Math.cos(ny * 2.8 + t * 0.38)   * Math.PI * 0.6
      + Math.sin((nx + ny) * 2.0 + t * 0.28) * Math.PI * 0.35
      );
    };

    /* ── spawn particles across the whole canvas ── */
    const makeParticle = (forceX) => {
      const W = canvas.width  || window.innerWidth;
      const H = canvas.height || window.innerHeight;
      return {
        x:    forceX !== undefined ? forceX : Math.random() * W,
        y:    Math.random() * H,
        vx:   (Math.random() - 0.5) * 0.6,
        vy:   (Math.random() - 0.5) * 0.4,
        // No longer hue span, we will use fixed accent blue
        hue:  217,

        size: 0.9 + Math.random() * 1.9,
        speed: 0.28 + Math.random() * 0.42,
        age:  Math.random() * 300,          // stagger so they don't all start same
      };
    };

    const particles = Array.from({ length: COUNT }, () => makeParticle());

    /* ── draw loop ── */
    const draw = () => {
      const W = canvas.width, H = canvas.height;
      if (!W || !H) { animId = requestAnimationFrame(draw); return; }
      time += 0.007;

      /* Soft trail — lower alpha = longer ghost trails */
      ctx.fillStyle = "rgba(17, 17, 17, 0.15)";
      ctx.fillRect(0, 0, W, H);

      particles.forEach(p => {
        p.age++;

        /* ── Flow field influence ── */
        const angle = flowAngle(p.x, p.y, time);
        p.vx += Math.cos(angle) * 0.018 * p.speed;
        p.vy += Math.sin(angle) * 0.009 * p.speed;  // weaker vertical pull → mostly horizontal flow

        /* ── Cursor repulsion ── */
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * MOUSE_FORCE;
          p.vx += (dx / dist) * force * 0.12;
          p.vy += (dy / dist) * force * 0.12;
        }

        /* ── Dampen velocity ── */
        p.vx *= 0.965;
        p.vy *= 0.965;

        /* ── Move ── */
        p.x += p.vx;
        p.y += p.vy;

        /* ── Wrap edges ── */
        if (p.x < -10)   { p.x = W + 10; p.y = Math.random() * H; }
        if (p.x > W + 10){ p.x = -10;    p.y = Math.random() * H; }
        if (p.y < -10)   p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        /* ── Compute pill orientation from velocity ── */
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy) || 0.01;
        const nx = p.vx / speed;
        const ny = p.vy / speed;
        const len = Math.max(2.5, Math.min(speed * 18, 9));

        /* ── Alpha pulses gently ── */
        const alpha = 0.22 + 0.55 * Math.abs(Math.sin(p.age * 0.012 + p.hue));

        /* ── Accent Blue color ── */
        const color = `rgba(59, 130, 246, ${alpha})`;

        ctx.beginPath();
        ctx.moveTo(p.x - nx * len, p.y - ny * len);
        ctx.lineTo(p.x + nx * len, p.y + ny * len);
        ctx.strokeStyle = color;
        ctx.lineWidth   = p.size;
        ctx.lineCap     = "round";
        ctx.shadowBlur  = speed > 0.8 ? 6 : 0;
        ctx.shadowColor = color;
        ctx.stroke();
        ctx.shadowBlur  = 0;
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
    />
  );
}
