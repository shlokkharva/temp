import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Solutions() {
  const [heroBg, setHeroBg] = useState("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80");

  const solutionsList = [
    {
      id: "ai-workflows",
      num: "01",
      title: "AI Integration & Intelligent Workflows",
      path: "/systems/ai-workflow-systems",
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      intro: "Modern businesses require intelligent systems capable of improving operational clarity, workflow coordination, and decision-making efficiency.",
      deliverables: ["AI-assisted workflow systems", "Intelligent operational automation", "Predictive process insights"],
      outcomes: ["Improved operational efficiency", "Faster decision-making", "Better workflow coordination"]
    },
    {
      id: "process-automation",
      num: "02",
      title: "Business Process Automation",
      path: "/systems/automation-ecosystems",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      intro: "Operational inefficiencies often originate from repetitive manual processes, fragmented workflows, and disconnected reporting systems.",
      deliverables: ["Workflow automation systems", "Process orchestration", "Reporting automation infrastructure"],
      outcomes: ["Faster operational execution", "Improved workflow consistency", "Reduced repetitive work"]
    },
    {
      id: "operational-intel",
      num: "03",
      title: "Operational Intelligence Systems",
      path: "/systems/operational-visibility",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      intro: "Businesses require centralized visibility systems capable of improving operational monitoring, workflow coordination, and strategic decision-making.",
      deliverables: ["Management visibility systems", "Operational dashboards", "Reporting platforms"],
      outcomes: ["Improved operational visibility", "Faster reporting access", "Smarter decision-making"]
    },
    {
      id: "erp-platforms",
      num: "04",
      title: "ERP & Management Platforms",
      path: "/systems/erp-intelligence",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      intro: "Modern enterprises require structured operational environments capable of supporting coordination, visibility, and scalable management workflows.",
      deliverables: ["ERP-oriented workflow systems", "Enterprise management platforms", "Department visibility"],
      outcomes: ["Better departmental coordination", "Centralized visibility", "Enhanced management oversight"]
    },
    {
      id: "digital-infra",
      num: "05",
      title: "Scalable Digital Infrastructure",
      path: "/systems/cloud-infrastructure",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      intro: "Scalable digital infrastructure forms the foundation of modern operational ecosystems.",
      deliverables: ["Cloud-connected infrastructure", "Scalable backend environments", "Deployment architecture"],
      outcomes: ["Improved system scalability", "Better operational continuity", "Enhanced reliability"]
    },
    {
      id: "web-solutions",
      num: "06",
      title: "Web & Enterprise Solutions",
      path: "/systems/business-operating-layer",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      intro: "Enterprise digital environments should function as operational communication ecosystems rather than only online platforms.",
      deliverables: ["Enterprise website systems", "Operational communication platforms", "Inquiry systems"],
      outcomes: ["Improved business visibility", "Better customer accessibility", "Professional digital presence"]
    }
  ];

  return (
    <main style={{ background: "#F4F9FB" }}>
      {/* Cinematic Solutions Hero Section */}
      <section className="hero" style={{ 
        position: "relative", 
        padding: "160px 0 140px", 
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden" 
      }}>
        {/* Background Image Layer */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0
        }}></div>
        {/* Gradient Overlay for high-end readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(14,25,33,0.85) 0%, rgba(14,25,33,0.95) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ 
              display: "inline-block", 
              marginBottom: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E4F1F3",
              backdropFilter: "blur(10px)"
            }}>
              <i className="fas fa-cubes" style={{ marginRight: "8px", color: "var(--color-accent)" }}></i> Enterprise Solutions
            </div>
            <h1 style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4.2rem)", 
              lineHeight: "1.1", 
              marginBottom: "24px", 
              color: "#FFFFFF", 
              letterSpacing: "-0.02em",
              fontWeight: "600",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>Intelligent Operational Ecosystems</h1>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.85", 
              color: "#E4F1F3", 
              marginBottom: "0",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Custom-engineered enterprise platforms designed to improve visibility, workflow coordination, automation efficiency, and digital scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Grid Section */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "700", letterSpacing: "2px", marginBottom: "12px", display: "block" }}>Platform Directory</span>
            <h2 style={{ fontSize: "2.4rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>Core Digital Capabilities</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "40px" }}>
            {solutionsList.map((sol) => (
              <div 
                key={sol.id} 
                className="eco-card"
                style={{ 
                  background: "white", 
                  borderRadius: "24px", 
                  overflow: "hidden", 
                  boxShadow: "0 15px 40px rgba(0,0,0,0.02)", 
                  border: "1.5px solid #E2EBE7", 
                  display: "flex", 
                  flexDirection: "column",
                  transition: "all 0.3s ease" 
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.querySelector(".sol-img").style.transform = "scale(1.06)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "#E2EBE7";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.querySelector(".sol-img").style.transform = "scale(1)";
                }}
              >
                {/* Photo Header */}
                <div style={{ height: "230px", overflow: "hidden", position: "relative" }}>
                  <img 
                    src={sol.img} 
                    alt={sol.title} 
                    className="sol-img"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                  />
                  <div style={{ position: "absolute", top: "20px", left: "20px", background: "rgba(14, 25, 33, 0.75)", backdropFilter: "blur(8px)", color: "white", width: "45px", height: "45px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "1.05rem" }}>
                    {sol.num}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: "40px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 16px 0" }}>{sol.title}</h3>
                  <p style={{ color: "#58798C", fontSize: "0.98rem", lineHeight: "1.7", margin: "0 0 24px 0", flex: 1 }}>{sol.intro}</p>
                  
                  {/* Micro Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
                    {sol.deliverables.map((del, index) => (
                      <span key={index} style={{ fontSize: "0.78rem", background: "#F4F9FB", border: "1px solid #E2EBE7", padding: "6px 12px", borderRadius: "20px", color: "var(--color-primary)", fontWeight: "500" }}>
                        {del}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <Link 
                    to={sol.path} 
                    style={{ 
                      marginTop: "auto", 
                      paddingTop: "20px", 
                      borderTop: "1.5px dashed #E2EBE7", 
                      textDecoration: "none", 
                      color: "var(--color-primary)", 
                      fontWeight: "700", 
                      fontSize: "0.95rem", 
                      display: "flex", 
                      alignItems: "center", 
                      justifyContent: "space-between" 
                    }}
                  >
                    <span>Explore Solution Capabilities</span>
                    <i className="fas fa-chevron-right" style={{ color: "var(--color-accent)", fontSize: "0.85rem" }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Positioning Statement Section */}
      <section style={{ padding: "80px 0 120px" }}>
        <div className="container">
          <div className="build-ecosystem" style={{ 
            background: "linear-gradient(135deg, var(--color-primary) 0%, #111d25 100%)", 
            color: "white", 
            borderRadius: "30px", 
            padding: "80px 60px",
            boxShadow: "0 30px 60px rgba(14,25,33,0.18)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Ambient Background Graphic Layer */}
            <div style={{ position: "absolute", inset: 0, opacity: "0.03", background: "radial-gradient(circle at 80% 20%, var(--color-accent) 0%, transparent 50%)" }}></div>
            
            <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto" }}>
              <div style={{ display: "inline-flex", width: "64px", height: "64px", borderRadius: "50%", background: "rgba(19, 170, 179, 0.15)", color: "var(--color-accent)", alignItems: "center", justifyContent: "center", fontSize: "1.8rem", marginBottom: "30px" }}>
                <i className="fas fa-award"></i>
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: "700", color: "white", lineHeight: "1.25", letterSpacing: "-0.01em", margin: "0 0 30px 0" }}>
                Intelligent Operational Ecosystems
              </h2>
              <p style={{ fontSize: "1.25rem", lineHeight: "1.9", opacity: 0.9, color: "#E4F1F3", margin: "0 0 45px 0" }}>
                Aurbient Technologies develops intelligent operational ecosystems designed to improve business visibility, workflow coordination, automation efficiency, and scalable enterprise growth through modern technology infrastructure.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
                <Link to="/contact" className="btn-premium" style={{ background: "var(--color-accent)", color: "var(--color-primary)", border: "none" }}>
                  Schedule Discovery &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
