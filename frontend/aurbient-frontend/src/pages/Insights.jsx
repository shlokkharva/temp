import { useEffect, useState } from "react";
import { getCaseStudies } from "../utils/api";

export default function Insights() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCaseStudies();
        setCases(data);
      } catch(e) {
        setCases([
          {
            client: "Global Logistics Co.",
            industry: "Supply Chain",
            title: "Decreased congestion by 30% using dynamic routing.",
            body: "Implemented an autonomous dispatch system that recalculates variables in milliseconds.",
            result_stat: "30%",
            result_label: "Reduction in port wait times",
            published: "Oct 2025"
          },
          {
            client: "Alpha Finance",
            industry: "Fintech",
            title: "Achieved sub-millisecond execution for trade flows.",
            body: "Re-architected the entire data ingestion pipeline for optimal latency.",
            result_stat: "<1ms",
            result_label: "Execution latency",
            published: "Dec 2025"
          }
        ]);
      }
      setLoading(false);
    };
    fetchCases();
  }, []);

  return (
    <main>
      <section className="hero" style={{ padding: "80px 0 60px", background: "linear-gradient(110deg, #FDFFFE 0%, #F0F9FA 100%)" }}>
        <div className="container">
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge">Quantitative Proofs</div>
            <h1 style={{ fontSize: "3rem" }}>Operational impacts, documented</h1>
            <p style={{ margin: "0 auto 36px" }}>Real deployments, real efficiency. Read how Aurbient Technologies partners with pioneering global teams to map solutions that deliver enduring yield.</p>
          </div>
        </div>
      </section>

      <section className="ecosystem-showcase">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>Loading insights...</div>
          ) : (
            <div className="ecosystem-grid">
              {cases.map((study, index) => (
                <div key={index} className="eco-card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
                  <div style={{ height: "200px", background: "#E4F1F3", position: "relative" }}>
                    {study.thumbnail && <img src={study.thumbnail} alt={study.client} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                    <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(17,35,48,0.8)", backdropFilter: "blur(4px)", padding: "8px 12px", borderRadius: "8px", color: "white" }}>
                      <span style={{ fontSize: "0.7rem", fontWeight: "600", textTransform: "uppercase", color: "var(--color-accent)", display: "block" }}>{study.client}</span>
                      <span style={{ fontSize: "0.75rem", color: "#A7BCC7" }}>{study.industry}</span>
                    </div>
                  </div>
                  <div style={{ padding: "28px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{ margin: "0 0 12px", fontSize: "1.4rem" }}>{study.title}</h3>
                    <p style={{ color: "#395568", marginBottom: "24px" }}>{study.body}</p>
                    <div style={{ marginTop: "auto", background: "#F4F9FB", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "16px" }}>
                      <span style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-accent)" }}>{study.result_stat}</span>
                      <span style={{ fontSize: "0.85rem", color: "#58798C", lineHeight: "1.2" }}>{study.result_label}</span>
                    </div>
                    <div style={{ marginTop: "24px", fontSize: "0.75rem", color: "#A0B5C1", textAlign: "right", textTransform: "uppercase", letterSpacing: "1px" }}>
                      Published &middot; {study.published}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
