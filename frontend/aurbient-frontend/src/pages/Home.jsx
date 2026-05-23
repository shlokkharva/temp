import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";

import HeroSection from "../components/HeroSection";

const BG    = "var(--color-bg)";
const TEAL  = "var(--color-accent)";
const BLUE  = "var(--color-accent)";
const DIM   = "#F5F5F5";
const DIM2  = "#666666";
const BORD  = "rgba(255,255,255,0.07)";

export default function Home() {
  return (
    <div style={{ background: "var(--color-bg)", color: "var(--color-text)", fontFamily: "'Barlow',sans-serif" }}>

      <HeroSection 
        kicker="Intelligence in Action"
        headline={
          <>
            Transforming complexity into{" "}
            <span style={{
              color: "var(--color-accent)",
              textShadow: `0 0 40px rgba(59,130,246,0.5), 0 0 80px rgba(59,130,246,0.2)`,
            }}>
              clarity.
            </span>
          </>
        }
        subtext="We combine strategy, technology, and automation to help businesses move faster, operate smarter, and scale with confidence."
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              to="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "12px 28px", borderRadius: "999px",
                background: `linear-gradient(135deg, rgba(59,130,246,0.3), rgba(59,130,246,0.15))`,
                border: `1px solid rgba(59,130,246,0.4)`,
                color: "#fff", textDecoration: "none",
                fontSize: "0.84rem", fontWeight: 500,
                backdropFilter: "blur(12px)",
                boxShadow: `0 0 24px rgba(59,130,246,0.2)`,
                transition: "all 0.25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 40px rgba(59,130,246,0.25), 0 0 80px rgba(59,130,246,0.15)`;
                e.currentTarget.style.borderColor = `rgba(59,130,246,0.5)`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = `0 0 24px rgba(59,130,246,0.2)`;
                e.currentTarget.style.borderColor = `rgba(59,130,246,0.4)`;
              }}
            >
              Start Your Journey ↗
            </Link>
            <Link
              to="/insights"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                color: "#F5F5F5", textDecoration: "none",
                fontSize: "0.84rem", fontWeight: 400, transition: "color 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "#F5F5F5"}
            >
              See how it works
              <span style={{
                width: "30px", height: "30px", borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.75rem",
              }}>→</span>
            </Link>
          </div>

          <div style={{
            display: "inline-flex", gap: "2.5rem",
            padding: "1rem 1.5rem",
            background: "rgba(17,17,17,0.6)",
            backdropFilter: "blur(12px)",
            borderRadius: "16px",
            border: `1px solid rgba(255,255,255,0.07)`,
          }}>
            {[["98%","Retention"], ["150+","Projects"], ["40%","Efficiency"]].map(([v, l]) => (
              <div key={l} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                <span style={{
                  fontWeight: 600,
                  fontSize: "1.8rem", lineHeight: 1, color: "#fff",
                }}>
                  <AnimatedCounter value={v} />
                </span>
                <span style={{ fontSize: "0.6rem", color: "#666666", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  {l}
                </span>
              </div>
            ))}
          </div>
        </div>
      </HeroSection>

      {/* ══════════════════════════════════════════ CAPABILITIES */}
      <section style={{ padding: "7rem 5rem", background: "var(--color-surface)" }}>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
          <span style={{ color:TEAL, fontSize:"0.67rem", fontWeight:600, letterSpacing:"0.22em", textTransform:"uppercase" }}>// Capabilities</span>
          <h2 style={{ fontWeight: 600, fontSize:"clamp(2.4rem,4vw,3.8rem)", lineHeight:1.0, letterSpacing:"-1.5px", margin:"0.6rem 0 3rem", color:"var(--color-text)" }}>
            Intelligence<br />evolved.
          </h2>
        </motion.div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem" }}>
          {[
            { sym:"◎", title:"AI Strategy",            tags:["Deep Analysis","Pattern Mapping","ROI Focus"], body:"We map your operations against AI opportunity — identifying where automation creates compounding returns." },
            { sym:"◈", title:"Systems Integration",     tags:["API First","Zero Downtime","Scalable"],       body:"Connect every tool into a single intelligent workflow that eliminates friction and accelerates delivery." },
            { sym:"↗", title:"Continuous Optimization", tags:["Live Monitoring","Auto-Tuning","A/B Tests"],  body:"Deployment is not the finish line. Our engines monitor, learn, and refine continuously." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6, delay: i * 0.1}}
              whileHover={{ scale:1.02, boxShadow:`0 0 35px rgba(80, 70, 200, 0.12)` }}
              style={{ background:"var(--color-bg)", border:`1px solid var(--color-border)`, borderRadius:"1.25rem", padding:"2rem", display:"flex", flexDirection:"column", gap:"1rem", cursor:"pointer", transition:"border-color 0.3s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor="var(--color-accent)"}
              onMouseLeave={e => e.currentTarget.style.borderColor="var(--color-border)"}
            >
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <span style={{ fontSize:"1.4rem", color:TEAL }}>{c.sym}</span>
                <div style={{ display:"flex", gap:"0.35rem", flexWrap:"wrap", justifyContent:"flex-end" }}>
                  {c.tags.map(t => <span key={t} style={{ fontSize:"0.57rem", padding:"2px 8px", borderRadius:"999px", background:"rgba(80, 70, 200, 0.1)", color:"var(--color-accent)", letterSpacing:"0.05em" }}>{t}</span>)}
                </div>
              </div>
              <h3 style={{ fontWeight: 600, fontSize:"1.55rem", margin:0, color:"var(--color-text)", letterSpacing:"-0.5px" }}>{c.title}</h3>
              <p style={{ fontSize:"0.78rem", color:"var(--color-muted)", lineHeight:1.75, margin:0, fontWeight:300 }}>{c.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════ STATS */}
      <section style={{ padding:"7rem 5rem", background: BG }}>
        <span style={{ color:TEAL, fontSize:"0.67rem", fontWeight:600, letterSpacing:"0.22em", textTransform:"uppercase" }}>// Operational Metrics</span>
        {[["150+","Projects Delivered Across Global Technology Sectors"],["98%","Client Retention — Relationships Built to Last"],["40%","Average Operational Efficiency Improvement"],["12","Countries Where Our Systems Run"]].map(([val, label]) => (
          <motion.div
            key={val}
            initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}}
            style={{ display:"flex", alignItems:"baseline", justifyContent:"space-between", borderBottom:`1px solid var(--color-border)`, padding:"2rem 0", gap:"2rem" }}
          >
            <span style={{ fontWeight: 600, fontSize:"clamp(3.5rem,7vw,6.5rem)", lineHeight:1, color:"var(--color-text)", letterSpacing:"-2px" }}>
              <AnimatedCounter value={val} />
            </span>
            <span style={{ fontSize:"0.88rem", color:"var(--color-muted)", textAlign:"right", maxWidth:"350px", lineHeight:1.55, fontWeight:300 }}>{label}</span>
          </motion.div>
        ))}
      </section>

      {/* ══════════════════════════════════════════ CTA */}
      <section style={{ padding:"7rem 5rem", background:"var(--color-surface)", display:"flex", flexDirection:"column", alignItems:"center", gap:"1.6rem", backgroundImage:`radial-gradient(ellipse 60% 50% at 50% 50%, rgba(80,70,200,0.05) 0%, transparent 70%)` }}>
        <span style={{ color:TEAL, fontSize:"0.67rem", fontWeight:600, letterSpacing:"0.22em", textTransform:"uppercase", background:"rgba(80,70,200,0.06)", padding:"5px 18px", borderRadius:"999px", border:"1px solid rgba(80,70,200,0.18)" }}>
          Ready when you are
        </span>
        <h2 style={{ fontWeight: 600, fontSize:"clamp(2.5rem,4.5vw,4rem)", color:"var(--color-text)", margin:0, letterSpacing:"-1.5px", lineHeight:1.05, textAlign:"center" }}>
          Build the future<br />of your business
        </h2>
        <p style={{ fontSize:"0.83rem", color:"var(--color-muted)", maxWidth:"380px", lineHeight:1.75, fontWeight:300, margin:0, textAlign:"center" }}>
          Automate workflow bottlenecks and scale your operational edge with neural precision.
        </p>
        <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent:"center" }}>
          <Link to="/contact" style={{ padding:"12px 30px", borderRadius:"999px", background:`var(--color-accent)`, border:"1px solid var(--color-accent)", color:"#fff", textDecoration:"none", fontSize:"0.83rem", fontWeight:500 }}>
            Start Your Journey ↗
          </Link>
          <Link to="/insights" style={{ padding:"12px 30px", borderRadius:"999px", background:"transparent", border:`1px solid var(--color-border)`, color:"var(--color-text)", textDecoration:"none", fontSize:"0.83rem", fontWeight:400 }}>
            View Case Studies
          </Link>
        </div>
      </section>
    </div>
  );
}
