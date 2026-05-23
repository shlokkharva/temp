// src/components/FadingVideo.jsx
import { useRef, useEffect } from "react";

const FADE_MS     = 500;
const FADE_OUT_LEAD = 0.55;

export default function FadingVideo({ src, className, style }) {
  const videoRef   = useRef(null);
  const rafRef     = useRef(null);
  const fadingRef  = useRef(false);

  function fadeTo(video, target) {
    const start     = parseFloat(video.style.opacity) || 0;
    const startTime = performance.now();
    cancelAnimationFrame(rafRef.current);

    function step(now) {
      const t   = Math.min((now - startTime) / FADE_MS, 1);
      const val = start + (target - start) * t;
      video.style.opacity = val;
      if (t < 1) rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.style.opacity = 0;

    function onLoaded() {
      v.style.opacity = 0;
      v.play().catch(() => {});
      fadeTo(v, 1);
    }

    function onTimeUpdate() {
      if (!fadingRef.current
          && v.duration - v.currentTime <= FADE_OUT_LEAD
          && v.duration - v.currentTime > 0) {
        fadingRef.current = true;
        fadeTo(v, 0);
      }
    }

    function onEnded() {
      v.style.opacity = 0;
      setTimeout(() => {
        v.currentTime = 0;
        v.play().catch(() => {});
        fadingRef.current = false;
        fadeTo(v, 1);
      }, 100);
    }

    v.addEventListener("loadeddata", onLoaded);
    v.addEventListener("timeupdate", onTimeUpdate);
    v.addEventListener("ended",      onEnded);

    return () => {
      cancelAnimationFrame(rafRef.current);
      v.removeEventListener("loadeddata", onLoaded);
      v.removeEventListener("timeupdate", onTimeUpdate);
      v.removeEventListener("ended",      onEnded);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay muted playsInline preload="auto"
      className={className}
      style={{ opacity: 0, ...style }}
    />
  );
}
