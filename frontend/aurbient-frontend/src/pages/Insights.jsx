// src/pages/Insights.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getCaseStudies } from "../utils/api";
import BlurText from "../components/BlurText";

import HeroSection from "../components/HeroSection";

export default function Insights() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      const data = await getCaseStudies();
      setCases(data);
      setLoading(false);
    };
    fetchCases();
  }, []);

  return (
    <>
      <HeroSection 
        kicker="Quantitative Proofs"
        headline="Operational impacts, documented"
        subtext="Real deployments, real efficiency. Read how Aurbient Technologies partners with pioneering global teams to map solutions that deliver enduring yield."
      />
      <div className="bg-bg text-text py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background soft orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-dim to-transparent opacity-30 pointer-events-none blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-teal-dim to-transparent opacity-20 pointer-events-none blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-12 h-12 rounded-full border-t-2 border-accent animate-spin" />
          </div>
        ) : (
          /* Case Studies Grid */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {cases.map((study, index) => (
              <motion.div
                key={study.id || index}
                variants={{
                  initial: { opacity: 0, y: 40, filter: "blur(5px)" },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 45px rgba(0, 229, 192, 0.15)" }}
                className="liquid-glass border border-border rounded-[1.5rem] overflow-hidden flex flex-col justify-between transition-all duration-300 group cursor-pointer h-full"
              >
                {/* Thumbnail Header */}
                <div className="relative h-56 overflow-hidden bg-border w-full">
                  <img
                    src={study.thumbnail}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Floating Client/Industry Tags */}
                  <div className="absolute bottom-4 left-6 flex flex-col gap-1.5">
                    <span className="text-[10px] uppercase tracking-widest font-body text-accent font-semibold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                      {study.client}
                    </span>
                    <span className="text-xs text-muted font-body font-light pl-1">
                      {study.industry}
                    </span>
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div className="mb-6">
                    <h3 className="font-heading text-text text-3xl tracking-[-1px] mb-4 group-hover:text-accent transition-colors leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted font-body font-light leading-relaxed">
                      {study.body}
                    </p>
                  </div>

                  {/* Impact Metric Row */}
                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border bg-white/[0.01] p-4 rounded-xl">
                    <div className="font-heading text-text text-4xl tracking-[-1px] text-glow-teal text-accent">
                      {study.result_stat}
                    </div>
                    <div className="text-xs text-muted font-body font-light leading-tight">
                      {study.result_label}
                    </div>
                  </div>
                </div>

                {/* Footer Publish Date */}
                <div className="px-8 pb-6 text-[10px] font-body text-muted text-right uppercase tracking-wider">
                  Published &middot; {study.published}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        </div>
      </div>
    </>
  );
}
