// src/components/BlurText.jsx
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BlurText({ text, className }) {
  const ref      = useRef(null);
  const [visible, setVisible] = useState(false);
  const words    = text.split(" ");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <p ref={ref} className={className}
       style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", rowGap:"0.1em" }}>
      {words.map((word, i) => {
        // Check if this word is 'Clarity' to render in Aurbient Teal with text-glow
        const isClarity = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") === "Clarity";
        return (
          <motion.span key={i}
            style={{ 
              display:"inline-block", 
              marginRight:"0.28em",
              color: isClarity ? "var(--color-teal)" : "inherit"
            }}
            className={isClarity ? "text-glow-teal" : ""}
            initial={{ filter:"blur(10px)", opacity:0, y:50 }}
            animate={visible ? { filter:"blur(0px)", opacity:1, y:0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: "easeOut",
              times: [0, 0.5, 1],
              filter: { duration: 0.7 },
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
