// src/components/AnimatedCounter.jsx
import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

export default function AnimatedCounter({ value, duration = 2, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const node = ref.current;
    if (!node) return;

    // Extract numerical value and non-numerical suffixes (like +, %, etc)
    const stringVal = String(value);
    const numericValue = parseFloat(stringVal.replace(/[^0-9.]/g, "")) || 0;
    const nonNumericPart = stringVal.replace(/[0-9.]/g, "");

    const controls = animate(0, numericValue, {
      duration: duration,
      ease: "easeOut",
      onUpdate(latest) {
        node.textContent = Math.round(latest) + nonNumericPart + suffix;
      },
    });

    return () => controls.stop();
  }, [value, duration, suffix, isInView]);

  return <span ref={ref}>0</span>;
}
