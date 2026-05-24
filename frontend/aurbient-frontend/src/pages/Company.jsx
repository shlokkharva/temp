import { useEffect, useState } from "react";
import { getTeamMembers } from "../utils/api";

export default function Company() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await getTeamMembers();
        const sorted = [...data].sort((a, b) => (a.order || 0) - (b.order || 0));
        setTeam(sorted);
      } catch(e) {
        setTeam([
          { name: "Dr. Elena Rostova", role: "Chief Synthesist", bio: "Leading AI architecture.", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200" },
          { name: "Marcus Chen", role: "Head of Infrastructure", bio: "Specialist in low-latency grids.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200" }
        ]);
      }
      setLoading(false);
    };
    fetchTeam();
  }, []);

  return (
    <main>
      <section className="hero" style={{ padding: "80px 0 60px", background: "linear-gradient(110deg, #FDFFFE 0%, #F0F9FA 100%)" }}>
        <div className="container">
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge">Core Narrative</div>
            <h1 style={{ fontSize: "3rem" }}>Interfacing with living intelligence</h1>
            <p style={{ margin: "0 auto 36px" }}>Established in 2026 as a registered MSME in Indore, Madhya Pradesh, Aurbient Technologies was built on a single, powerful conviction: that complexity is not a barrier, but an opportunity. We design intelligent systems that live, learn, and grow alongside your enterprise.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px", display: "block", marginBottom: "16px" }}>The Approach</span>
              <h2 style={{ fontSize: "2.4rem", marginBottom: "24px" }}>Compounding efficiencies, week over week.</h2>
              <p style={{ color: "#395568", marginBottom: "16px" }}>We combine deep industrial expertise with state-of-the-art vector processing architectures and cognitive systems design to bridge operational gaps.</p>
              <p style={{ color: "#395568" }}>We don't build software brochures. We design intelligent systems that live, learn, and grow alongside your enterprise.</p>
            </div>
            <div className="eco-card" style={{ flex: 1, minWidth: '300px', background: "#F4F9FB" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "24px" }}>Vision Paradigm</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
                <li style={{ display: "flex", gap: "16px" }}><span style={{ color: "var(--color-accent)", fontWeight: "600" }}>01/</span><span style={{ color: "#395568" }}>Deploy systems that compound operational return rather than offering single transaction patches.</span></li>
                <li style={{ display: "flex", gap: "16px" }}><span style={{ color: "var(--color-accent)", fontWeight: "600" }}>02/</span><span style={{ color: "#395568" }}>Eliminate API frictional barriers to align workflows into continuous, single cognitive threads.</span></li>
                <li style={{ display: "flex", gap: "16px" }}><span style={{ color: "var(--color-accent)", fontWeight: "600" }}>03/</span><span style={{ color: "#395568" }}>Uphold vector-level compliance, security, and low-latency architectural resilience across nations.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="ecosystem-showcase" style={{ background: "#F4F9FB" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "600" }}>Core Minds</h2>
            <p style={{ color: "#395568", marginTop: "16px" }}>Meet the intelligence synthesists behind Aurbient.</p>
          </div>
          {loading ? (
            <div style={{ textAlign: "center", padding: "40px" }}>Loading team...</div>
          ) : (
            <div className="ecosystem-grid">
              {team.map((member, index) => (
                <div key={index} className="eco-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <img src={member.photo} alt={member.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "24px", border: "4px solid #E4F1F3" }} />
                  <h3 style={{ margin: "0 0 8px", fontSize: "1.4rem" }}>{member.name}</h3>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px", marginBottom: "16px", display: "block" }}>{member.role}</span>
                  <p style={{ color: "#395568", marginBottom: "24px" }}>{member.bio}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
