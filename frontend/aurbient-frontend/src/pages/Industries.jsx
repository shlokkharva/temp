// src/pages/Industries.jsx
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const industries = [
  {
    num: "01",
    title: "Logistics & Supply Chain",
    description: "We deploy adaptive orchestration layers that synchronize freight movement, prevent port bottleneck choke points, and recalculate dispatch variables in low milliseconds.",
    tags: ["Dynamic Routing", "Congestion Forecasting", "Autonomous Dispatch", "Freight Vectoring"],
    glow: "rgba(59, 130, 246, 0.08)"
  },
  {
    num: "02",
    title: "Quantitative Finance",
    description: "Architecting zero-latency extraction grids to parser market telemetry, read global signals, and compile earnings micro-signals at sub-second scales.",
    tags: ["Micro-Signals Parser", "Zero-Latency Grids", "Portfolio Optimization", "Trend Synthesis"],
    glow: "rgba(59, 130, 246, 0.08)"
  },
  {
    num: "03",
    title: "Aerospace & Satellites",
    description: "Powering telemetry ingests capable of managing hyper-dimensional coordinate files, trajectory drift equations, and robust off-grid data handshakes.",
    tags: ["Trajectory Engines", "Coordinate Mapping", "gRPC Pipelines", "Fail-Safe Handshakes"],
    glow: "rgba(59, 130, 246, 0.08)"
  },
  {
    num: "04",
    title: "Autonomous Enterprise",
    description: "Injecting self-refining digital workflows across core architectures, enabling back-offices to execute exception handling and compliance tasks autonomously.",
    tags: ["Agentic Back-office", "Exception Handling", "Self-Tuning Compliance", "Data Synthesis"],
    glow: "rgba(59, 130, 246, 0.08)"
  }
];

export default function Industries() {
  return (
    <>
      <HeroSection 
        kicker="Industry Verticals"
        headline="Sectors structured for compound scale"
        subtext="We adapt neural technologies directly to the unique dimensional challenges of mission-critical systems across four primary global sectors."
      />
      <div className="bg-[#111111] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Decorative bg gradient */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-teal-dim to-transparent opacity-20 pointer-events-none blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.01, 
                boxShadow: `0 0 50px ${ind.glow}`,
                borderColor: "rgba(0, 229, 192, 0.2)"
              }}
              className="liquid-glass border border-white/5 rounded-[1.5rem] p-8 flex flex-col justify-between min-h-[360px] transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading text-[#3B82F6] text-3xl">
                    // {ind.num}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {ind.tags.slice(0, 2).map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-wider font-body text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-heading text-white text-4xl tracking-[-1px] mb-4">
                  {ind.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 font-body font-light leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
                {ind.tags.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-body text-[#3B82F6]/70 bg-[#3B82F6]/5 px-2.5 py-1 rounded-full hover:text-[#3B82F6] transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
