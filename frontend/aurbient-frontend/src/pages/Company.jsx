// src/pages/Company.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getTeamMembers } from "../utils/api";
import BlurText from "../components/BlurText";

import HeroSection from "../components/HeroSection";

export default function Company() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const data = await getTeamMembers();
      // Sort by order field
      const sorted = [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
      setTeam(sorted);
      setLoading(false);
    };
    fetchTeam();
  }, []);

  return (
    <>
      <HeroSection 
        kicker="Core Narrative"
        headline="Interfacing with living intelligence"
        subtext="Founded in 2020, Aurbient Technologies was built on a single, powerful conviction: that complexity is not a barrier, but an opportunity. We design intelligent systems that live, learn, and grow alongside your enterprise."
      />
      <div className="bg-bg text-text py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-dim to-transparent opacity-20 pointer-events-none blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-teal-dim to-transparent opacity-35 pointer-events-none blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
        {/* About Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-body text-accent uppercase tracking-[0.2em] block">
              // The Approach
            </span>
            <h2 className="font-heading text-text text-4xl md:text-5xl leading-[1.1] tracking-[-1px] max-w-lg">
              Compounding efficiencies, week over week.
            </h2>
            <p className="text-sm md:text-base text-muted font-body font-light leading-relaxed">
              We combine deep industrial expertise with state-of-the-art vector processing architectures and cognitive systems design to bridge operational gaps.
            </p>
            <p className="text-sm md:text-base text-muted font-body font-light leading-relaxed">
              We don't build software brochures. We design intelligent systems that live, learn, and grow alongside your enterprise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="liquid-glass border border-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl pointer-events-none" />
            <h3 className="font-heading text-text text-3xl tracking-[-1px] mb-6 uppercase">
              Vision Paradigm //
            </h3>
            <ul className="flex flex-col gap-6 font-body font-light text-sm text-muted">
              <li className="flex gap-4">
                <span className="text-accent font-semibold">01 /</span>
                <span>Deploy systems that compound operational return rather than offering single transaction patches.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">02 /</span>
                <span>Eliminate API frictional barriers to align workflows into continuous, single cognitive threads.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-accent font-semibold">03 /</span>
                <span>Uphold vector-level compliance, security, and low-latency architectural resilience across nations.</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Team Members Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-body text-accent uppercase tracking-[0.2em] block mb-4">
            // Core Minds
          </span>
          <BlurText 
            text="Meet the intelligence synthesists" 
            className="font-heading text-text text-5xl md:text-6xl lg:text-7xl leading-none tracking-[-3px] text-center"
          />
          <p className="mt-6 text-base text-muted font-body font-light leading-relaxed">
            Our team comprises low-latency systems architects, mathematical fine-tuners, and vector representations specialists dedicated to operational elegance.
          </p>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-12 h-12 rounded-full border-t-2 border-accent animate-spin" />
          </div>
        ) : (
          /* Team Grid */
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.id || index}
                variants={{
                  initial: { opacity: 0, y: 30, filter: "blur(5px)" },
                  animate: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(59,130,246,0.15)" }}
                className="liquid-glass border border-border rounded-[1.5rem] p-6 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer"
              >
                {/* Photo */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-border group-hover:border-accent/40 transition-colors">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex flex-col gap-1 mb-4">
                  <h3 className="font-heading text-text text-3xl tracking-[-1px] leading-tight">
                    {member.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider font-semibold text-accent font-body">
                    {member.role}
                  </span>
                </div>

                <p className="text-sm text-muted font-body font-light leading-relaxed flex-grow">
                  {member.bio}
                </p>

                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-muted hover:text-accent hover:scale-105 active:scale-95 transition-all duration-200"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    in
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
        </div>
      </div>
    </>
  );
}
