import { useEffect, useState } from "react";
import { getServices } from "../utils/api";

const getIcon = (name) => {
  const props = { className: "fas fa-" + (name === 'brain' ? 'brain' : name === 'hub' ? 'network-wired' : name === 'trending_up' ? 'chart-line' : name === 'query_stats' ? 'chart-bar' : name === 'smart_toy' ? 'robot' : 'microchip'), style: { fontSize: "1.8rem", color: "var(--color-accent)" } };
  return <i {...props}></i>;
};

export default function Solutions() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        const sorted = [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
        setServices(sorted);
      } catch(e) {
        // Fallback if API fails
        setServices([
          { title: "AI Automation", description: "Automate repetitive tasks with precision.", tags: ["Automation", "Efficiency"], icon_name: "smart_toy" },
          { title: "Operational Intelligence", description: "Gain visibility into every operational layer.", tags: ["Visibility", "Analytics"], icon_name: "query_stats" },
          { title: "Business Systems", description: "Seamlessly integrate your core applications.", tags: ["Integration", "Scale"], icon_name: "hub" },
        ]);
      }
      setLoading(false);
    };
    fetchServices();
  }, []);

  return (
    <main>
      <section className="hero" style={{ padding: "80px 0 60px", background: "linear-gradient(110deg, #FDFFFE 0%, #F0F9FA 100%)" }}>
        <div className="container">
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge">Neural Offerings</div>
            <h1 style={{ fontSize: "3rem" }}>Intelligent systems engineered for velocity</h1>
            <p style={{ margin: "0 auto 36px" }}>From cognitive strategic analysis to ultra-low latency real-time data pipelines, our solutions are architected to establish an enduring, compounding operational advantage.</p>
          </div>
        </div>
      </section>

      <section className="ecosystem-showcase">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>Loading solutions...</div>
          ) : (
            <div className="ecosystem-grid">
              {services.map((service, index) => (
                <div key={index} className="eco-card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ marginBottom: "16px" }}>
                    {getIcon(service.icon_name)}
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {(service.tags || []).map((tag, i) => (
                      <span key={i} style={{ fontSize: "0.7rem", background: "#E4F1F3", color: "var(--color-accent-hover)", padding: "4px 10px", borderRadius: "20px", textTransform: "uppercase", fontWeight: "600" }}>{tag}</span>
                    ))}
                  </div>
                  <h3 style={{ margin: "8px 0", fontSize: "1.5rem" }}>{service.title}</h3>
                  <p style={{ color: "#395568", marginTop: "8px" }}>{service.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
