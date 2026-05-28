import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [buildFeedback, setBuildFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBuildSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !email.includes('@')) {
      setBuildFeedback('❌ Please provide your name and valid email to start the conversation.');
      return;
    }
    setBuildFeedback(`✓ Thank you, ${name}. An ecosystem architect will reach out within 24h. Let's build.`);
    setName('');
    setEmail('');
    setTimeout(() => setBuildFeedback(''), 5000);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80", title: "Automation Ecosystems" },
    { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", title: "Operational Visibility" },
    { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80", title: "Cloud Infrastructure" },
    { img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1200&q=80", title: "AI Workflow Systems" }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      category: "Manufacturing Operations",
      text: "“Aurbient Technologies helped us improve operational visibility and streamline internal workflow coordination across departments. Their understanding of both technology and business operations brought structure and clarity to our reporting processes.”",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Operations Management Team",
      company: "Onix Private limited"
    },
    {
      category: "Business Automation & Digital Systems",
      text: "“The team demonstrated a strong understanding of automation workflows and operational efficiency. Their ability to align technology with practical business requirements helped us improve communication flow and management accessibility.”",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Director",
      company: "Industrial Business Solutions Pvt. Ltd."
    },
    {
      category: "Enterprise Digital Infrastructure",
      text: "“Aurbient Technologies delivered a modern and scalable digital environment that improved our online communication structure and operational accessibility. Their strategic approach made the implementation process smooth and highly professional.”",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Management Team",
      company: "Nexora Enterprise Group"
    },
    {
      category: "AI & Workflow Systems",
      text: "“What stood out most was their systems-thinking approach. Instead of only focusing on development, they analyzed operational challenges and proposed intelligent workflow solutions that supported long-term scalability.”",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      name: "Operations Lead",
      company: "Vertex Process Systems"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main style={{ background: "#F4F9FB" }}>
      {/* 1. Cinematic Hero Section */}
      <section className="hero" style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        background: 'linear-gradient(180deg, #FDFEFE 0%, #F4F9FB 100%)', 
        padding: '160px 0 120px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Subtle Ambient Background Gradients */}
        <div style={{ position: 'absolute', top: '-10%', left: '30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(19,170,179,0.06) 0%, transparent 70%)', filter: 'blur(50px)', zIndex: 0 }}></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(19,170,179,0.04) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }}></div>

        <div className="container hero-flex" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '60px', alignItems: 'center' }}>
          <div className="hero-text">
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px', 
              background: 'rgba(19,170,179,0.08)', 
              color: 'var(--color-accent)', 
              borderRadius: '100px', 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              letterSpacing: '1.5px', 
              textTransform: 'uppercase', 
              marginBottom: '28px',
              border: '1.5px solid rgba(19,170,179,0.15)'
            }}>
              <i className="fas fa-project-diagram" style={{ fontSize: '0.9rem' }}></i> Enterprise IT Services & AI Automation
            </span>
            
            <h1 style={{ 
              fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', 
              lineHeight: '1.15', 
              fontWeight: '800', 
              color: 'var(--color-primary)', 
              marginBottom: '24px',
              letterSpacing: '-0.03em'
            }}>
              Modern IT Services & <span style={{ color: 'var(--color-accent)' }}>Intelligent Automation</span>
            </h1>
            
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#4B6B7F', 
              marginBottom: '40px', 
              maxWidth: '90%', 
              lineHeight: '1.75' 
            }}>
              We design, build, and manage custom software, enterprise systems integration, secure cloud infrastructure, and self-healing AI workflows that unify your business operations.
            </p>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-premium" style={{ 
                background: "var(--color-accent)", 
                color: 'white', 
                padding: "18px 48px", 
                fontSize: '1.1rem', 
                borderRadius: '100px', 
                boxShadow: '0 10px 30px rgba(19,170,179,0.3)', 
                transition: 'all 0.3s ease',
                fontWeight: '600'
              }}>
                Contact Us →
              </Link>
            </div>
          </div>

          {/* Interactive Slide Viewer */}
          <div className="hero-visual" style={{ 
            position: 'relative', 
            height: '520px', 
            width: '100%', 
            borderRadius: '32px', 
            overflow: 'hidden', 
            boxShadow: '0 30px 60px rgba(14,25,33,0.15)',
            border: '8px solid white'
          }}>
            {slides.map((slide, index) => (
              <div key={index} style={{ 
                position: 'absolute', 
                inset: 0, 
                opacity: currentSlide === index ? 1 : 0, 
                transition: 'opacity 1s ease-in-out', 
                zIndex: 1 
              }}>
                <img src={slide.img} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  background: 'linear-gradient(to top, rgba(14,25,33,0.9), transparent)', 
                  padding: '50px 32px 32px', 
                  color: 'white', 
                  zIndex: 2 
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', display: 'block', marginBottom: '8px' }}>Flagship Capability</span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white', margin: 0 }}>{slide.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Deep Midnight Blue Stat Break (Philosophy Section) */}
      <section style={{ 
        padding: "100px 0", 
        background: "linear-gradient(135deg, var(--color-primary) 0%, #0C171F 100%)", 
        color: "white",
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(19,170,179,0.1) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "16px", display: "block" }}>The Friction Gap</span>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", margin: "0 0 20px 0", lineHeight: "1.25", color: 'white' }}>
              Fragmented workflows, disconnected systems, operational blind spots.
            </h2>
            <p style={{ color: "#A5C5D6", fontSize: "1.15rem", lineHeight: "1.8", margin: 0 }}>
              Modern enterprises are built on fragile connective tissue — data silos, manual handoffs, invisible inefficiencies. The cost is not just time, but strategic inertia.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { stat: "73%", desc: "of leaders report disjointed systems block real-time decisions" },
              { stat: "58%", desc: "operational data never reaches execution layers" },
              { stat: "2.4x", desc: "faster scaling with orchestrated intelligence" }
            ].map((stat, i) => (
              <div key={i} className="eco-card" style={{ 
                background: "rgba(255, 255, 255, 0.03)", 
                border: "1px solid rgba(255, 255, 255, 0.08)", 
                padding: "40px", 
                borderRadius: "24px", 
                textAlign: "center",
                backdropFilter: "blur(10px)"
              }}>
                <h3 style={{ fontSize: "3.5rem", fontWeight: "800", color: "var(--color-accent)", margin: "0 0 12px 0", lineHeight: 1 }}>{stat.stat}</h3>
                <p style={{ color: "#E4F1F3", fontSize: "1.05rem", lineHeight: "1.6", margin: 0, opacity: 0.85 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>High-Performance Architecture</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 16px 0" }}>Our Core Services</h2>
            <p style={{ color: "#58798C", fontSize: "1.1rem", margin: 0 }}>High-performance engineering designed to unify your enterprise operations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { icon: "fa-code", title: "Custom Software", desc: "Premium, highly reliable custom web apps, mobile apps, and dashboard platforms designed for maximum execution speed." },
              { icon: "fa-network-wired", title: "Systems Integration", desc: "Connecting legacy databases, CRM, ERP, and API endpoints into one unified network layer with zero latency." },
              { icon: "fa-cloud", title: "Cloud & AI Automation", desc: "Secure cloud deployment and intelligent self-healing AI agents that automate 24/7 business workflows." }
            ].map((serv, idx) => (
              <div key={idx} className="eco-card" style={{ 
                background: '#FFFFFF', 
                padding: '48px 40px', 
                borderRadius: '24px', 
                boxShadow: '0 15px 40px rgba(14,25,33,0.03)', 
                border: '1.5px solid #E2EBE7', 
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  marginBottom: '28px', 
                  background: 'rgba(19,170,179,0.08)', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: 'var(--color-accent)'
                }}>
                  <i className={`fas ${serv.icon}`} style={{ fontSize: "1.8rem" }}></i>
                </div>
                <h3 style={{ margin: "0 0 16px 0", fontSize: '1.4rem', color: 'var(--color-primary)', fontWeight: '700' }}>{serv.title}</h3>
                <p style={{ color: "#58798C", margin: 0, fontSize: '1.05rem', lineHeight: '1.7' }}>{serv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Transformation Layer Section */}
      <section style={{ padding: "100px 0", background: "#F4F9FB" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Harmony</span>
              <h2 style={{ fontSize: "2.6rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 24px 0", lineHeight: "1.25" }}>
                From operational friction to intelligent flow
              </h2>
              <p style={{ color: "#395568", lineHeight: "1.8", fontSize: "1.15rem", marginBottom: "30px" }}>
                The transformation isn’t incremental — it’s a re-architecture of how work propagates through your organization. Aurbient designs the invisible layer that aligns systems, data, and teams into a singular intelligent motion.
              </p>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, padding: "20px", background: "white", borderRadius: "16px", border: "1px solid #E2EBE7" }}>
                  <h4 style={{ fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-primary)" }}><i className="fas fa-bolt" style={{ color: "var(--color-accent)", marginRight: "8px" }}></i> Speed</h4>
                  <p style={{ margin: 0, color: "#58798C", fontSize: "0.95rem" }}>Removing manual latency and bottleneck dependency.</p>
                </div>
                <div style={{ flex: 1, padding: "20px", background: "white", borderRadius: "16px", border: "1px solid #E2EBE7" }}>
                  <h4 style={{ fontWeight: 700, margin: "0 0 8px 0", color: "var(--color-primary)" }}><i className="fas fa-bullseye" style={{ color: "var(--color-accent)", marginRight: "8px" }}></i> Precision</h4>
                  <p style={{ margin: 0, color: "#58798C", fontSize: "0.95rem" }}>Ensuring every data transmission has total integrity.</p>
                </div>
              </div>
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "-5%", left: "-5%", width: "110%", height: "110%", background: "radial-gradient(circle, rgba(19,170,179,0.15) 0%, transparent 60%)", filter: "blur(30px)", zIndex: 0 }}></div>
              <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80" 
                alt="Intelligent Flow Transformation" 
                style={{ width: "100%", height: "450px", objectFit: "cover", borderRadius: "24px", boxShadow: "0 20px 45px rgba(14,25,33,0.12)", position: "relative", zIndex: 1 }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. How Future-Ready Businesses Function */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Operational Directives</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 16px 0" }}>How future-ready businesses function</h2>
            <p style={{ color: "#395568", margin: 0, fontSize: "1.1rem" }}>Visibility. Automation. Intelligence. Synchronized infrastructure. Operational confidence.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { icon: "fa-eye", border: "var(--color-accent)", title: "Total visibility", desc: "No blind spots. Real-time operational observability across every layer of your enterprise architecture." },
              { icon: "fa-microchip", border: "var(--color-primary)", title: "Adaptive automation", desc: "Workflows that organically evolve with business conditions, breaking away from static rules." },
              { icon: "fa-chart-line", border: "#85D4D9", title: "Systemic intelligence", desc: "Invisible AI woven directly into decision architecture, creating exponential leverage." }
            ].map((item, idx) => (
              <div key={idx} className="eco-card" style={{ 
                padding: '48px 40px', 
                background: 'white', 
                borderRadius: '24px', 
                borderTop: `4px solid ${item.border}`, 
                boxShadow: '0 15px 40px rgba(14,25,33,0.03)',
                borderLeft: '1px solid #E2EBE7',
                borderRight: '1px solid #E2EBE7',
                borderBottom: '1px solid #E2EBE7',
              }}>
                <div style={{ width: '60px', height: '60px', background: '#F4F9FB', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', color: 'var(--color-accent)' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: "1.6rem" }}></i>
                </div>
                <h3 style={{ margin: "0 0 16px 0", fontSize: '1.45rem', color: 'var(--color-primary)', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ color: "#58798C", fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries as Living Ecosystems */}
      <section style={{ padding: "100px 0", background: "#F4F9FB", borderTop: "1px solid #E2EBE7" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Cross-Industry Domain Mastery</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>Industries as living ecosystems</h2>
            <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Connected workflows, operational depth, and intelligence scaled across domains</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: "fa-industry", path: "/industries/manufacturing", title: "Manufacturing", desc: "Intelligent production flow, IIoT synchronization, autonomous quality layers." },
              { icon: "fa-boxes", path: "/industries/logistics", title: "Logistics", desc: "Orchestrated supply chains, demand intelligence, real-time fleet adaptation." },
              { icon: "fa-store", path: "/industries/retail-commerce", title: "Retail", desc: "Inventory ecosystems, unified commerce, predictive customer operations." },
              { icon: "fa-building", path: "/industries/enterprise-operations", title: "Enterprise", desc: "Finance & HR automation, cognitive processes, enterprise operating layer." }
            ].map((ind, i) => (
              <Link key={i} to={ind.path} style={{ textDecoration: 'none' }}>
                <div className="eco-card" style={{ 
                  padding: '36px', 
                  background: '#FFFFFF', 
                  borderRadius: '20px', 
                  border: '1.5px solid #E2EBE7', 
                  transition: 'all 0.3s ease',
                  height: '100%',
                  boxSizing: 'border-box'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ background: 'rgba(19, 170, 179, 0.08)', padding: '14px', borderRadius: '14px', color: 'var(--color-accent)' }}>
                      <i className={`fas ${ind.icon}`} style={{ fontSize: "1.3rem" }}></i>
                    </div>
                    <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-primary)', fontWeight: 700 }}>{ind.title}</h3>
                  </div>
                  <p style={{ color: "#58798C", margin: 0, lineHeight: '1.65', fontSize: '0.95rem' }}>{ind.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Case Studies */}
      <section style={{ padding: "100px 0", background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Proven Impact</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "600", color: "var(--color-primary)", margin: 0 }}>Featured Case Studies</h2>
            <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Detailed architectural breakdowns of how we transform complex operational bottlenecks into streamlined, intelligent ecosystems.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "30px", marginBottom: "48px" }}>
            {[
              {
                id: "01",
                title: "Improving Production Visibility Through Operational Digitization",
                industry: "Manufacturing / Industrial Operations",
                img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
              },
              {
                id: "02",
                title: "Building an AI-Driven Sales & Management Ecosystem",
                industry: "Business Operations / Sales Management",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              },
              {
                id: "03",
                title: "Modernizing Digital Infrastructure for Enterprise Communication",
                industry: "Enterprise / Digital Infrastructure",
                img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80"
              }
            ].map((caseStudy) => (
              <Link 
                key={caseStudy.id} 
                to={`/case-studies/${caseStudy.id}`} 
                style={{ textDecoration: "none", display: "flex", flexDirection: "column" }}
              >
                <div className="eco-card" style={{ 
                  transition: "transform 0.3s ease, box-shadow 0.3s ease", 
                  display: "flex", 
                  flexDirection: "column", 
                  height: "100%", 
                  padding: 0, 
                  overflow: "hidden",
                  borderRadius: "24px",
                  background: "#F4F9FB",
                  border: "1.5px solid #E2EBE7"
                }}>
                  <img 
                    src={caseStudy.img} 
                    alt={caseStudy.title} 
                    style={{ width: "100%", height: "220px", objectFit: "cover" }} 
                  />
                  <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>Case Study {caseStudy.id}</span>
                    <h3 style={{ fontSize: "1.35rem", marginBottom: "16px", flex: 1, color: "var(--color-primary)", fontWeight: 700, lineHeight: 1.3 }}>{caseStudy.title}</h3>
                    <div style={{ color: "#58798C", fontSize: "0.9rem", fontWeight: "600" }}>{caseStudy.industry}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <Link to="/case-studies" className="btn-premium" style={{ background: "transparent", color: "var(--color-primary)", border: "2px solid rgba(26, 42, 53, 0.15)", padding: "16px 40px", fontSize: "1.1rem", borderRadius: "100px", display: "inline-block", fontWeight: "600", transition: "all 0.3s ease", textDecoration: "none" }}>
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Thought Leadership (The Intelligence Horizon) */}
      <section style={{ padding: "100px 0", background: "#F4F9FB", borderTop: "1px solid #E2EBE7" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Knowledge Streams</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>The intelligence horizon</h2>
            <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Perspectives on the future of operational infrastructure</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { icon: "fa-microphone-alt", border: "var(--color-primary)", title: "The rise of intelligent operations", desc: "Why ambient intelligence will replace fragmented automation stacks in enterprise management." },
              { icon: "fa-chart-bar", border: "var(--color-accent)", title: "Beyond AI: systemic visibility", desc: "Organizations need unified operational memory and analytics, not just local chat assistants." },
              { icon: "fa-cloud", border: "#85D4D9", title: "Future operating layer", desc: "Unified, predictable, and highly adaptive enterprise infrastructure as a modern competitive advantage." }
            ].map((item, idx) => (
              <div key={idx} className="eco-card" style={{ 
                background: 'white', 
                padding: '40px', 
                borderRadius: '24px', 
                borderBottom: `4px solid ${item.border}`, 
                boxShadow: '0 10px 30px rgba(14,25,33,0.03)',
                borderLeft: '1px solid #E2EBE7',
                borderRight: '1px solid #E2EBE7',
                borderTop: '1px solid #E2EBE7',
              }}>
                <div style={{ width: '50px', height: '50px', background: 'rgba(19,170,179,0.06)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--color-accent)' }}>
                  <i className={`fas ${item.icon}`} style={{ fontSize: "1.3rem" }}></i>
                </div>
                <h3 style={{ margin: "0 0 16px 0", fontSize: '1.3rem', color: 'var(--color-primary)', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ color: "#58798C", lineHeight: '1.65', margin: 0, fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials (Operational Impact) */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Validation</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>Operational Impact</h2>
            <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Direct feedback from enterprises transforming their digital infrastructure with Aurbient Technologies.</p>
          </div>
          
          <div style={{ position: "relative", maxWidth: "850px", margin: "0 auto", padding: "0 20px" }}>
            {/* Left Navigation Arrow */}
            <button 
              className="testimonial-arrow"
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
              style={{ 
                position: "absolute", 
                left: "-60px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "white", 
                border: "1px solid #E2EBE7", 
                color: "var(--color-primary)", 
                fontSize: "1.1rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                zIndex: 10,
                transition: "all 0.3s ease",
                outline: "none"
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Right Navigation Arrow */}
            <button 
              className="testimonial-arrow"
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
              style={{ 
                position: "absolute", 
                right: "-60px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                width: "50px", 
                height: "50px", 
                borderRadius: "50%", 
                background: "white", 
                border: "1px solid #E2EBE7", 
                color: "var(--color-primary)", 
                fontSize: "1.1rem", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                zIndex: 10,
                transition: "all 0.3s ease",
                outline: "none"
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>

            {/* Slider Wrapper */}
            <div style={{ overflow: "hidden", width: "100%", borderRadius: "24px", border: "1.5px solid #E2EBE7", boxShadow: "0 20px 40px rgba(14,25,33,0.04)" }}>
              <div style={{ 
                display: "flex", 
                width: "100%",
                transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)", 
                transform: `translateX(-${activeTestimonial * 100}%)` 
              }}>
                {testimonials.map((item, index) => (
                  <div key={index} style={{ flex: "0 0 100%", maxWidth: "100%", boxSizing: "border-box", padding: "40px" }}>
                    <div style={{ position: "relative", width: "100%", boxSizing: "border-box" }}>
                      <i className="fas fa-quote-right" style={{ position: "absolute", top: "0", right: "0", fontSize: "3rem", color: "rgba(19, 170, 179, 0.05)" }}></i>
                      <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "20px", display: "block" }}>{item.category}</span>
                      <p style={{ color: "#1a2a35", lineHeight: "1.75", fontStyle: "italic", marginBottom: "30px", fontSize: "1.1rem" }}>{item.text}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                        <img src={item.img} alt={item.name} style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4F1F3" }} />
                        <div>
                          <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", color: "var(--color-primary)", fontWeight: "700" }}>{item.name}</h4>
                          <small style={{ color: "#58798C", fontWeight: "600", fontSize: "0.9rem" }}>{item.company}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
              {testimonials.map((_, index) => (
                <button 
                  key={index} 
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  style={{ 
                    width: activeTestimonial === index ? "24px" : "8px", 
                    height: "8px", 
                    borderRadius: "8px", 
                    background: activeTestimonial === index ? "var(--color-accent)" : "#CBE7E9", 
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Tech Integration Slider */}
      <section style={{ padding: "60px 0", background: "#F4F9FB", borderTop: "1px solid #E2EBE7", borderBottom: "1px solid #E2EBE7" }}>
        <div className="container" style={{ textAlign: "center", marginBottom: "30px" }}>
          <span style={{ fontSize: "0.85rem", color: "#58798C", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px" }}>Seamlessly interfacing with your ecosystem</span>
        </div>
        <div className="tech-slider">
          <div className="tech-slide-track">
            {[
              { name: "n8n", url: "https://cdn.simpleicons.org/n8n" },
              { name: "Zapier", url: "https://cdn.simpleicons.org/zapier" },
              { name: "Make", url: "https://cdn.simpleicons.org/make" },
              { name: "Apache Airflow", url: "https://cdn.simpleicons.org/apacheairflow" },
              { name: "Selenium", url: "https://cdn.simpleicons.org/selenium" },
              { name: "UiPath", url: "https://cdn.simpleicons.org/uipath" },
              { name: "Power Automate", url: "https://cdn.simpleicons.org/microsoftpowerautomate" },
              { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow" },
              { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch" },
              { name: "LangChain", url: "https://cdn.simpleicons.org/langchain" },
              { name: "Hugging Face", url: "https://cdn.simpleicons.org/huggingface" },
              { name: "Ollama", url: "https://cdn.simpleicons.org/ollama" },
              { name: "Gemini", url: "https://cdn.simpleicons.org/googlegemini" },
              { name: "Claude", url: "https://cdn.simpleicons.org/anthropic" },
              { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb" },
              { name: "Redis", url: "https://cdn.simpleicons.org/redis" },
              { name: "Elasticsearch", url: "https://cdn.simpleicons.org/elasticsearch" },
              { name: "Power BI", url: "https://cdn.simpleicons.org/powerbi" },
              { name: "Grafana", url: "https://cdn.simpleicons.org/grafana" },
              { name: "Tableau", url: "https://cdn.simpleicons.org/tableau" },
              // Duplicate for infinite scrolling
              { name: "n8n", url: "https://cdn.simpleicons.org/n8n" },
              { name: "Zapier", url: "https://cdn.simpleicons.org/zapier" },
              { name: "Make", url: "https://cdn.simpleicons.org/make" },
              { name: "Apache Airflow", url: "https://cdn.simpleicons.org/apacheairflow" },
              { name: "Selenium", url: "https://cdn.simpleicons.org/selenium" },
              { name: "UiPath", url: "https://cdn.simpleicons.org/uipath" },
              { name: "Power Automate", url: "https://cdn.simpleicons.org/microsoftpowerautomate" },
              { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow" },
              { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch" },
              { name: "LangChain", url: "https://cdn.simpleicons.org/langchain" },
              { name: "Hugging Face", url: "https://cdn.simpleicons.org/huggingface" },
              { name: "Ollama", url: "https://cdn.simpleicons.org/ollama" },
              { name: "Gemini", url: "https://cdn.simpleicons.org/googlegemini" },
              { name: "Claude", url: "https://cdn.simpleicons.org/anthropic" },
              { name: "MongoDB", url: "https://cdn.simpleicons.org/mongodb" },
              { name: "Redis", url: "https://cdn.simpleicons.org/redis" },
              { name: "Elasticsearch", url: "https://cdn.simpleicons.org/elasticsearch" },
              { name: "Power BI", url: "https://cdn.simpleicons.org/powerbi" },
              { name: "Grafana", url: "https://cdn.simpleicons.org/grafana" },
              { name: "Tableau", url: "https://cdn.simpleicons.org/tableau" }
            ].map((item, idx) => (
              <div key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "100px" }}>
                <img 
                  src={item.url} 
                  alt={item.name} 
                  title={item.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }} 
                />
                <span style={{ display: "none", fontSize: "1.2rem", fontWeight: "700", color: "#58798C", whiteSpace: "nowrap" }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA Layer */}
      <section style={{ padding: "100px 0", background: "var(--color-primary)", color: "white", position: "relative", overflow: "hidden" }}>
        <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 80% 20%, rgba(19,170,179,0.15) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        <div className="container" id="build" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="build-ecosystem" style={{ background: "transparent", border: "none", padding: 0 }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "20px", display: "inline-block" }}>Get Started</span>
            <h2 style={{ fontSize: "3rem", fontWeight: "700", color: "white", marginBottom: "20px", letterSpacing: "-0.02em" }}>Let’s build your intelligent infrastructure</h2>
            <p style={{ margin: "20px auto 40px", maxWidth: "600px", color: "#A5C5D6", fontSize: "1.25rem", lineHeight: "1.8" }}>
              From vision to orchestrated reality. Partner with Aurbient to architect the invisible layer your business will depend on.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-premium" style={{ 
                background: "var(--color-accent)", 
                color: "white", 
                padding: "18px 48px", 
                fontSize: "1.15rem", 
                borderRadius: "100px", 
                boxShadow: "0 10px 30px rgba(19, 170, 179, 0.3)", 
                textDecoration: "none", 
                display: "inline-block", 
                transition: "all 0.3s ease",
                fontWeight: "600"
              }}>
                Contact Us →
              </Link>
            </div>
            <p style={{ marginTop: "40px", fontSize: "0.85rem", color: "#A5C5D6", opacity: 0.8 }}>
              Schedule a strategic ecosystem briefing with our infrastructure architects
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
