// src/pages/Solutions.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getServices } from "../utils/api";
import HeroSection from "../components/HeroSection";

// Map icon names to custom SVGs
const getIcon = (name) => {
  const props = { className: "w-6 h-6 text-accent" };
  switch (name) {
    case "brain":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M6 12h12M7.5 7.5l9 9M7.5 16.5l9-9" />
        </svg>
      );
    case "hub":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="12" cy="20" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
          <line x1="12" y1="6" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="18" />
          <line x1="6" y1="12" x2="9" y2="12" />
          <line x1="15" y1="12" x2="18" y2="12" />
        </svg>
      );
    case "trending_up":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "query_stats":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
    case "smart_toy":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4M8 15h.01M16 15h.01" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      );
  }
};

export default function Solutions() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      // Sort by order field
      const sorted = [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
      setServices(sorted);
      setLoading(false);
    };
    fetchServices();
  }, []);

  return (
    <>
      <HeroSection 
        kicker="Neural Offerings"
        headline="Intelligent systems engineered for velocity"
        subtext="From cognitive strategic analysis to ultra-low latency real-time data pipelines, our solutions are architected to establish an enduring, compounding operational advantage."
      />
      <div className="bg-bg text-text py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Decorative gradients */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-dim to-transparent opacity-30 pointer-events-none blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-dim to-transparent opacity-20 pointer-events-none blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-12 h-12 rounded-full border-t-2 border-accent animate-spin" />
          </div>
        ) : (
          /* Cards Grid */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id || index}
                variants={{
                  initial: { opacity: 0, y: 30, filter: "blur(5px)" },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.15)" }}
                className="liquid-glass rounded-[1.25rem] p-8 min-h-[380px] flex flex-col justify-between transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(service.icon_name)}
                    </div>
                    <span className="text-[10px] font-semibold text-accent uppercase tracking-wider font-body">
                      // {service.kicker || "Service"}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {(service.tags || []).map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase tracking-wider font-body text-muted bg-border px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-text text-3xl tracking-[-1px] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted font-body font-light leading-relaxed">
                    {service.description}
                  </p>
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
