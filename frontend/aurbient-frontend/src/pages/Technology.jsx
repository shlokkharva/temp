// src/pages/Technology.jsx
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

const techLayers = [
  {
    layer: "Layer 01",
    name: "Cognitive Synthesizers",
    desc: "Autonomous reasoning nodes capable of hyper-dimensional inference. Powered by tailored local LLMs optimized for operational flowcharts and exception routing.",
    stack: ["Fine-Tuned LLMs", "Multi-Agent gRPC", "Synthesizer Cores", "Dynamic Reasoning"]
  },
  {
    layer: "Layer 02",
    name: "Vector & Knowledge Grids",
    desc: "Realtime similarity matching indices that ingestion thousands of structured and unstructured documents per second, mapping them directly to active workflows.",
    stack: ["pgvector Core", "Hierarchical Indexes", "Metadata Routing", "Crossfade Vectoring"]
  },
  {
    layer: "Layer 03",
    name: "Low-Latency Ingest Nodes",
    desc: "High-speed streaming endpoints configured using Rust and Go to ingest orbital metrics, portfolio adjustments, and shipment telemetry without thread overhead.",
    stack: ["Rust / Go Cores", "gRPC Streaming", "WebSocket Clusters", "Zero-Allocation"]
  },
  {
    layer: "Layer 04",
    name: "Visual Interfacing Systems",
    desc: "Stunning glassmorphic web dashboards and analytics interfaces designed with React, HTML5 canvas loops, and Framer Motion for immediate micro-action deployment.",
    stack: ["React 18+", "Tailwind CSS 3.x", "Canvas Elements", "rAF Rendering"]
  }
];

export default function Technology() {
  return (
    <>
      <HeroSection 
        kicker="Architecture & Stack"
        headline="The stack built for cognitive speed"
        subtext="Aurbient's technology system merges enterprise-grade containerization with localized vector representation grids, delivering intelligence at the absolute speed of need."
      />
      <div className="bg-bg text-text py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Glow effects */}
        <div className="bg-neural-glow top-1/4 right-1/3" />
        <div className="bg-neural-glow bottom-1/4 left-1/4" />

        <div className="max-w-7xl mx-auto relative z-10">

        {/* Stack Layers Timeline */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {techLayers.map((layer, index) => (
            <motion.div
              key={layer.layer}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="liquid-glass border border-border rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-accent/20 transition-all duration-300 group cursor-pointer"
            >
              {/* Left Side */}
              <div className="flex-1">
                <div className="text-xs font-body text-accent uppercase tracking-widest font-semibold mb-3">
                  {layer.layer} //
                </div>
                <h3 className="font-heading text-text text-4xl tracking-[-1px] mb-4 group-hover:text-accent transition-colors">
                  {layer.name}
                </h3>
                <p className="text-sm md:text-base text-muted font-body font-light leading-relaxed max-w-2xl">
                  {layer.desc}
                </p>
              </div>

              {/* Right Side Stack Badges */}
              <div className="flex flex-wrap md:flex-col lg:flex-row gap-2 w-full md:w-auto md:min-w-[200px] justify-start md:justify-center">
                {layer.stack.map((item) => (
                  <span 
                    key={item} 
                    className="text-[10px] md:text-xs font-body uppercase tracking-wider text-text bg-border border border-border px-3 py-1.5 rounded-full hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-300"
                  >
                    {item}
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
