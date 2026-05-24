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
    { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", title: "Automation Ecosystems" },
    { img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", title: "Operational Visibility" },
    { img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80", title: "Cloud Infrastructure" },
    { img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", title: "AI Workflow Systems" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
        {/* Hero */}
        <section className="hero" style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #F8FDFD 0%, #E8F6F8 100%)', padding: '100px 0' }}>
            <div className="container hero-flex" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-text">
                    <span style={{ display: 'inline-block', padding: '6px 16px', background: 'rgba(19,170,179,0.1)', color: 'var(--color-accent)', borderRadius: '100px', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px' }}>Enterprise IT Services & AI Automation</span>
                    <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', fontWeight: '800', background: 'linear-gradient(90deg, #1A2A35 0%, #13AAB3 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '24px' }}>Modern IT Services & Intelligent Automation</h1>
                    <p style={{ fontSize: '1.25rem', color: '#58798C', marginBottom: '40px', maxWidth: '90%', lineHeight: '1.6' }}>We design, build, and manage custom software, enterprise systems integration, secure cloud infrastructure, and self-healing AI workflows that unify your business operations.</p>
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn-premium" style={{ background:"var(--color-accent)", color: 'white', padding:"16px 40px", fontSize: '1.1rem', borderRadius: '100px', boxShadow: '0 10px 30px rgba(19,170,179,0.3)', transition: 'all 0.3s ease' }}>Contact Us →</Link>
                        <Link to="/case-studies" style={{ padding: "16px 32px", fontSize: "1.1rem", color: "var(--color-primary)", fontWeight: "600", border: "2px solid rgba(26, 42, 53, 0.1)", borderRadius: "100px", transition: 'all 0.3s ease', display: 'inline-block' }}>View Case Studies</Link>
                    </div>
                </div>
                <div className="hero-visual" style={{ position: 'relative', minHeight: '550px', width: '100%', borderRadius: '48px', overflow: 'hidden', boxShadow: '0 25px 45px -12px rgba(0,0,0,0.08)' }}>
                    <div className="intelligence-nodes" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4 }}>
                        <div className="node" style={{ width: "240px", height: "240px", top: "10%", left: "5%", background: "var(--color-accent)" }}></div>
                        <div className="node" style={{ width: "320px", height: "320px", bottom: "5%", right: "0%", background: "var(--color-accent)", filter: "blur(36px)", animationDuration: "12s" }}></div>
                    </div>
                    {slides.map((slide, index) => (
                        <div key={index} style={{ position: 'absolute', inset: 0, opacity: currentSlide === index ? 1 : 0, transition: 'opacity 1s ease-in-out', zIndex: 1 }}>
                            <img src={slide.img} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)', padding: '60px 40px 40px', color: 'white', fontWeight: '600', fontSize: '1.6rem', zIndex: 2 }}>
                                {slide.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Philosophy */}
        <section className="philosophy-section">
            <div className="container insight-quote">
                <h2>Fragmented workflows, disconnected systems, operational blind spots.</h2>
                <p style={{ color: "#395568", maxWidth: "700px", margin: "0 auto" }}>
                    Modern enterprises are built on fragile connective tissue — data silos, manual handoffs, invisible inefficiencies. The cost is not just time, but strategic inertia.
                </p>
                <div className="flow-grid">
                    <div className="flow-stat"><h3>73%</h3><p>of leaders report disjointed systems block real-time decisions</p></div>
                    <div className="flow-stat"><h3>58%</h3><p>operational data never reaches execution layers</p></div>
                    <div className="flow-stat"><h3>2.4x</h3><p>faster scaling with orchestrated intelligence</p></div>
                </div>
            </div>
        </section>

        {/* Intelligence In Motion */}
        <section className="intelligence-motion">
            <div className="container">
                <div className="ambient-text">
                    <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Our Core Services</h2>
                    <p style={{ marginTop: "16px", color: "#395568" }}>High-performance engineering designed to unify your enterprise operations.</p>
                </div>
                <div className="ecosystem-visual" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '48px', maxWidth: '900px', margin: '48px auto 0' }}>
                    <div className="layer-card" style={{ background: '#FFFFFF', padding: '30px 20px', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.02)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                        <div style={{ width: '64px', height: '64px', margin: '0 auto 20px', background: 'rgba(19,170,179,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-code" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 10px", fontSize: '1.25rem', color: 'var(--color-primary)' }}>Custom Software</h3>
                        <p style={{ color: "#58798C", margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Premium, highly reliable custom web apps, mobile apps, and dashboard platforms.</p>
                    </div>
                    <div className="layer-card" style={{ background: '#FFFFFF', padding: '30px 20px', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.02)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                        <div style={{ width: '64px', height: '64px', margin: '0 auto 20px', background: 'rgba(19,170,179,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-network-wired" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 10px", fontSize: '1.25rem', color: 'var(--color-primary)' }}>Systems Integration</h3>
                        <p style={{ color: "#58798C", margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Connecting legacy databases, CRM, ERP, and API endpoints into one unified network.</p>
                    </div>
                    <div className="layer-card" style={{ background: '#FFFFFF', padding: '30px 20px', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.02)', textAlign: 'center', transition: 'transform 0.3s ease' }}>
                        <div style={{ width: '64px', height: '64px', margin: '0 auto 20px', background: 'rgba(19,170,179,0.08)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="fas fa-cloud" style={{ fontSize: "2rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 10px", fontSize: '1.25rem', color: 'var(--color-primary)' }}>Cloud & AI Automation</h3>
                        <p style={{ color: "#58798C", margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Secure cloud deployment and intelligent self-healing AI agents that automate 24/7 workflows.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Ecosystem Showcase */}
        <section className="ecosystem-showcase">
            <div className="container">
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
                    <h2 style={{ fontSize: "2.2rem", fontWeight: "600" }}>How future-ready businesses function</h2>
                    <p style={{ color: "#395568", marginTop: "16px" }}>Visibility. Automation. Intelligence. Synchronized infrastructure. Operational confidence.</p>
                </div>
                <div className="ecosystem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    <div className="eco-card" style={{ padding: '40px', background: 'white', borderRadius: '24px', borderTop: '4px solid var(--color-accent)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                        <div style={{ width: '60px', height: '60px', background: '#F4F9FB', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <i className="fas fa-eye" style={{ fontSize: "1.8rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 16px", fontSize: '1.5rem', color: 'var(--color-primary)' }}>Total visibility</h3>
                        <p style={{ color: "#58798C", fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>No blind spots. Real-time operational observability across every layer of your enterprise architecture.</p>
                    </div>
                    <div className="eco-card" style={{ padding: '40px', background: 'white', borderRadius: '24px', borderTop: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                        <div style={{ width: '60px', height: '60px', background: '#F4F9FB', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <i className="fas fa-microchip" style={{ fontSize: "1.8rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 16px", fontSize: '1.5rem', color: 'var(--color-primary)' }}>Adaptive automation</h3>
                        <p style={{ color: "#58798C", fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>Workflows that organically evolve with business conditions, breaking away from static rules.</p>
                    </div>
                    <div className="eco-card" style={{ padding: '40px', background: 'white', borderRadius: '24px', borderTop: '4px solid #85D4D9', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
                        <div style={{ width: '60px', height: '60px', background: '#F4F9FB', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <i className="fas fa-chart-line" style={{ fontSize: "1.8rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 16px", fontSize: '1.5rem', color: 'var(--color-primary)' }}>Systemic intelligence</h3>
                        <p style={{ color: "#58798C", fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>Invisible AI woven directly into decision architecture, creating exponential leverage.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Transformation Layer */}
        <section style={{ padding: "40px 0 80px" }}>
            <div className="container">
                <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", alignItems: "center", background: "#F4F9FB", borderRadius: "56px", padding: "48px" }}>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>From operational friction to intelligent flow</h2>
                        <p style={{ marginTop: "16px", color: "#395568", lineHeight: "1.6" }}>
                            The transformation isn’t incremental — it’s a re-architecture of how work propagates through your organization. Aurbient designs the invisible layer that aligns systems, teams, and data into a singular intelligent motion.
                        </p>
                    </div>
                    <div style={{ flex: 1, height: "300px", borderRadius: "44px", overflow: "hidden", position: "relative", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Intelligent Flow" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    </div>
                </div>
            </div>
        </section>

        {/* Industries */}
        <section className="ecosystem-showcase" style={{ paddingTop: "0" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Industries as living ecosystems</h2>
                    <p style={{ color: "#395568", marginTop: "16px" }}>Connected workflows, operational depth, and intelligence scaled across domains</p>
                </div>
                <div className="ecosystem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    <div className="eco-card" style={{ padding: '36px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(19, 170, 179, 0.1)', padding: '16px', borderRadius: '16px' }}>
                                <i className="fas fa-industry" style={{ color:"var(--color-accent)", fontSize:"1.5rem" }}></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-primary)' }}>Manufacturing</h3>
                        </div>
                        <p style={{ color: "#58798C", margin: 0, lineHeight: '1.6' }}>Intelligent production flow, IIoT synchronization, autonomous quality layers.</p>
                    </div>
                    <div className="eco-card" style={{ padding: '36px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(19, 170, 179, 0.1)', padding: '16px', borderRadius: '16px' }}>
                                <i className="fas fa-boxes" style={{ color:"var(--color-accent)", fontSize:"1.5rem" }}></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-primary)' }}>Logistics</h3>
                        </div>
                        <p style={{ color: "#58798C", margin: 0, lineHeight: '1.6' }}>Orchestrated supply chains, demand intelligence, real-time fleet adaptation.</p>
                    </div>
                    <div className="eco-card" style={{ padding: '36px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(19, 170, 179, 0.1)', padding: '16px', borderRadius: '16px' }}>
                                <i className="fas fa-store" style={{ color:"var(--color-accent)", fontSize:"1.5rem" }}></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-primary)' }}>Retail</h3>
                        </div>
                        <p style={{ color: "#58798C", margin: 0, lineHeight: '1.6' }}>Inventory ecosystems, unified commerce, predictive customer operations.</p>
                    </div>
                    <div className="eco-card" style={{ padding: '36px', background: '#FFFFFF', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(19, 170, 179, 0.1)', padding: '16px', borderRadius: '16px' }}>
                                <i className="fas fa-building" style={{ color:"var(--color-accent)", fontSize:"1.5rem" }}></i>
                            </div>
                            <h3 style={{ fontSize: '1.3rem', margin: 0, color: 'var(--color-primary)' }}>Enterprise</h3>
                        </div>
                        <p style={{ color: "#58798C", margin: 0, lineHeight: '1.6' }}>Finance & HR automation, cognitive processes, enterprise operating layer.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Thought Leadership */}
        <section className="thought-layer">
            <div className="container">
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px" }}>
                    <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>The intelligence horizon</h2>
                    <p style={{ color: "#395568", marginTop: "16px" }}>Perspectives on the future of operational infrastructure</p>
                </div>
                <div className="insight-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    <div className="insight-item" style={{ background: 'white', padding: '40px', borderRadius: '24px', borderBottom: '4px solid var(--color-primary)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                        <div style={{ width: '50px', height: '50px', background: 'rgba(26, 42, 53, 0.05)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <i className="fas fa-microphone-alt" style={{ fontSize: "1.5rem", color:"var(--color-primary)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 12px", fontSize: '1.3rem', color: 'var(--color-primary)' }}>The rise of intelligent operations</h3>
                        <p style={{ color: "#58798C", lineHeight: '1.6', margin: 0 }}>Why ambient intelligence will replace fragmented automation stacks.</p>
                    </div>
                    <div className="insight-item" style={{ background: 'white', padding: '40px', borderRadius: '24px', borderBottom: '4px solid var(--color-accent)', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                        <div style={{ width: '50px', height: '50px', background: 'rgba(19, 170, 179, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <i className="fas fa-chart-bar" style={{ fontSize: "1.5rem", color:"var(--color-accent)" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 12px", fontSize: '1.3rem', color: 'var(--color-primary)' }}>Beyond AI: systemic visibility</h3>
                        <p style={{ color: "#58798C", lineHeight: '1.6', margin: 0 }}>Organizations need operational memory, not just chatbots.</p>
                    </div>
                    <div className="insight-item" style={{ background: 'white', padding: '40px', borderRadius: '24px', borderBottom: '4px solid #85D4D9', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
                        <div style={{ width: '50px', height: '50px', background: 'rgba(133, 212, 217, 0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                            <i className="fas fa-cloud" style={{ fontSize: "1.5rem", color:"#395568" }}></i>
                        </div>
                        <h3 style={{ margin: "0 0 12px", fontSize: '1.3rem', color: 'var(--color-primary)' }}>Future operating layer</h3>
                        <p style={{ color: "#58798C", lineHeight: '1.6', margin: 0 }}>Unified, predictable, adaptive infrastructure as competitive advantage.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Client Impact / Testimonials */}
        <section style={{ padding: "80px 0", background: "linear-gradient(180deg, #FFFFFF 0%, #F4F9FB 100%)" }}>
            <div className="container">
                <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
                    <h2 style={{ fontSize: "2.4rem", fontWeight: "600" }}>Operational Impact</h2>
                    <p style={{ color: "#395568", marginTop: "16px", fontSize: "1.1rem" }}>Direct feedback from enterprises transforming their digital infrastructure with Aurbient Technologies.</p>
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "30px" }}>
                    
                    {/* Testimonial 1 */}
                    <div className="eco-card" style={{ background: "white", padding: "40px", borderRadius: "24px", position: "relative", boxShadow: "0 15px 35px rgba(0,0,0,0.03)" }}>
                        <i className="fas fa-quote-right" style={{ position: "absolute", top: "40px", right: "40px", fontSize: "3rem", color: "rgba(19, 170, 179, 0.05)" }}></i>
                        <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "20px", display: "block" }}>Manufacturing Operations</span>
                        <p style={{ color: "#1a2a35", lineHeight: "1.8", fontStyle: "italic", marginBottom: "30px", fontSize: "1.05rem" }}>“Aurbient Technologies helped us improve operational visibility and streamline internal workflow coordination across departments. Their understanding of both technology and business operations brought structure and clarity to our reporting processes.”</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img src="/@fs/C:/Users/shlok/.gemini/antigravity/brain/652826b5-ce54-43c3-b7e3-b602da2e01fd/testimonial_1_1779620236313.png" alt="Operations Management Team" style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4F1F3" }} />
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", color: "var(--color-primary)" }}>Operations Management Team</h4>
                                <small style={{ color: "#58798C", fontWeight: "600", fontSize: "0.85rem" }}>Onix Private limited</small>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="eco-card" style={{ background: "white", padding: "40px", borderRadius: "24px", position: "relative", boxShadow: "0 15px 35px rgba(0,0,0,0.03)" }}>
                        <i className="fas fa-quote-right" style={{ position: "absolute", top: "40px", right: "40px", fontSize: "3rem", color: "rgba(19, 170, 179, 0.05)" }}></i>
                        <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "20px", display: "block" }}>Business Automation & Digital Systems</span>
                        <p style={{ color: "#1a2a35", lineHeight: "1.8", fontStyle: "italic", marginBottom: "30px", fontSize: "1.05rem" }}>“The team demonstrated a strong understanding of automation workflows and operational efficiency. Their ability to align technology with practical business requirements helped us improve communication flow and management accessibility.”</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img src="/@fs/C:/Users/shlok/.gemini/antigravity/brain/652826b5-ce54-43c3-b7e3-b602da2e01fd/testimonial_2_1779620254193.png" alt="Director" style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4F1F3" }} />
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", color: "var(--color-primary)" }}>Director</h4>
                                <small style={{ color: "#58798C", fontWeight: "600", fontSize: "0.85rem" }}>Industrial Business Solutions Pvt. Ltd.</small>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="eco-card" style={{ background: "white", padding: "40px", borderRadius: "24px", position: "relative", boxShadow: "0 15px 35px rgba(0,0,0,0.03)" }}>
                        <i className="fas fa-quote-right" style={{ position: "absolute", top: "40px", right: "40px", fontSize: "3rem", color: "rgba(19, 170, 179, 0.05)" }}></i>
                        <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "20px", display: "block" }}>Enterprise Digital Infrastructure</span>
                        <p style={{ color: "#1a2a35", lineHeight: "1.8", fontStyle: "italic", marginBottom: "30px", fontSize: "1.05rem" }}>“Aurbient Technologies delivered a modern and scalable digital environment that improved our online communication structure and operational accessibility. Their strategic approach made the implementation process smooth and highly professional.”</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" alt="Management Team" style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4F1F3" }} />
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", color: "var(--color-primary)" }}>Management Team</h4>
                                <small style={{ color: "#58798C", fontWeight: "600", fontSize: "0.85rem" }}>Nexora Enterprise Group</small>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 4 */}
                    <div className="eco-card" style={{ background: "white", padding: "40px", borderRadius: "24px", position: "relative", boxShadow: "0 15px 35px rgba(0,0,0,0.03)" }}>
                        <i className="fas fa-quote-right" style={{ position: "absolute", top: "40px", right: "40px", fontSize: "3rem", color: "rgba(19, 170, 179, 0.05)" }}></i>
                        <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "1px", marginBottom: "20px", display: "block" }}>AI & Workflow Systems</span>
                        <p style={{ color: "#1a2a35", lineHeight: "1.8", fontStyle: "italic", marginBottom: "30px", fontSize: "1.05rem" }}>“What stood out most was their systems-thinking approach. Instead of only focusing on development, they analyzed operational challenges and proposed intelligent workflow solutions that supported long-term scalability.”</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" alt="Operations Lead" style={{ width: "56px", height: "56px", borderRadius: "50%", objectFit: "cover", border: "2px solid #E4F1F3" }} />
                            <div>
                                <h4 style={{ margin: "0 0 4px", fontSize: "1.05rem", color: "var(--color-primary)" }}>Operations Lead</h4>
                                <small style={{ color: "#58798C", fontWeight: "600", fontSize: "0.85rem" }}>Vertex Process Systems</small>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        {/* Tech Integration Slider */}
        <section style={{ padding: "40px 0 20px" }}>
            <div className="container" style={{ textAlign: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.85rem", color: "#58798C", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px" }}>Seamlessly interfacing with your ecosystem</span>
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

        {/* Final CTA */}
        <div className="container" id="build">
            <div className="build-ecosystem">
                <h2 style={{ fontSize: "2.4rem", fontWeight: "600" }}>Let’s build your intelligent infrastructure</h2>
                <p style={{ margin: "20px auto", maxWidth: "550px", opacity: "0.85" }}>
                    From vision to orchestrated reality. Partner with Aurbient to architect the invisible layer your business will depend on.
                </p>
                <div style={{ marginTop: "32px" }}>
                    <Link to="/contact" className="btn-premium" style={{ background: "var(--color-accent)", color: "white", padding: "18px 48px", fontSize: "1.15rem", borderRadius: "100px", boxShadow: "0 10px 30px rgba(19, 170, 179, 0.3)", textDecoration: "none", display: "inline-block", transition: "all 0.3s ease" }}>
                        Contact Us →
                    </Link>
                </div>
                <p style={{ marginTop: "32px", fontSize: "0.75rem", opacity: 0.8 }}>
                    Schedule a strategic ecosystem briefing with our infrastructure architects
                </p>
            </div>
        </div>
    </main>
  );
}
