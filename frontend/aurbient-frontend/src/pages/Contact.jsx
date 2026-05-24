import { useState } from "react";
import { postContactInquiry } from "../utils/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      const response = await postContactInquiry(formData);
      if (response) {
        setSuccess(true);
        setFormData({ name: "", email: "", company: "", message: "" });
      }
    } catch (err) {
      setError("Connection to inquiry database failed. Please retry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section className="hero" style={{ padding: "80px 0 60px", background: "linear-gradient(110deg, #FDFFFE 0%, #F0F9FA 100%)" }}>
        <div className="container">
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge">Enquiry Matrix</div>
            <h1 style={{ fontSize: "3rem" }}>Establish connection</h1>
            <p style={{ margin: "0 auto 36px" }}>We look forward to interfacing with your team. Fill out the core credentials, and a systems synthesist will initialize a response handshake in less than 24 hours.</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px", display: "block", marginBottom: "16px" }}>Direct Comms</span>
              <h2 style={{ fontSize: "2.4rem", marginBottom: "32px" }}>Secure Channels</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: "#F4F9FB", padding: "24px", borderRadius: "16px", border: "1px solid #E4F1F3" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(19, 170, 179, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontSize: "1.2rem" }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#58798C", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px", marginBottom: "4px" }}>Handshake Port</div>
                    <div style={{ color: "var(--color-primary)", fontWeight: "500" }}>handshake@aurbienttech.com</div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: "#F4F9FB", padding: "24px", borderRadius: "16px", border: "1px solid #E4F1F3" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "rgba(19, 170, 179, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontSize: "1.2rem" }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#58798C", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px", marginBottom: "4px" }}>Physical Coordinate</div>
                    <div style={{ color: "var(--color-primary)", fontWeight: "500" }}>Silicon Valley, California</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="eco-card" style={{ flex: 1.5, minWidth: '300px' }}>
              {!success ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <h3 style={{ fontSize: "1.8rem", marginBottom: "8px" }}>Initialize Handshake</h3>
                  {error && <div style={{ color: "#D9534F", background: "#FDF1F0", padding: "12px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>{error}</div>}
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#58798C", fontWeight: "600", textTransform: "uppercase" }}>Your Identity *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Dr. Jennifer Vance" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid #E4F1F3", background: "#FAFCFB", fontSize: "1rem", outline: "none" }} />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#58798C", fontWeight: "600", textTransform: "uppercase" }}>Electronic Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="e.g. jennifer@company.com" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid #E4F1F3", background: "#FAFCFB", fontSize: "1rem", outline: "none" }} />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#58798C", fontWeight: "600", textTransform: "uppercase" }}>Corporate Sector</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="e.g. Orbit Space Systems" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid #E4F1F3", background: "#FAFCFB", fontSize: "1rem", outline: "none" }} />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#58798C", fontWeight: "600", textTransform: "uppercase" }}>Enquiry Description *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Specify telemetry parameters or architectural bottlenecks..." rows="5" style={{ padding: "16px 20px", borderRadius: "12px", border: "1px solid #E4F1F3", background: "#FAFCFB", fontSize: "1rem", outline: "none", resize: "vertical" }}></textarea>
                  </div>
                  
                  <button type="submit" disabled={submitting} className="btn-premium" style={{ width: "100%", padding: "16px", marginTop: "12px" }}>
                    {submitting ? "Verifying Coordinates..." : "Transmit Credentials →"}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                  <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 24px" }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 style={{ fontSize: "2rem", marginBottom: "16px" }}>Connection Initialized</h3>
                  <p style={{ color: "#395568", marginBottom: "32px" }}>Your credentials have been securely transmitted across our neural wave gates. A systems synthesist will establish contact shortly.</p>
                  <button onClick={() => setSuccess(false)} style={{ background: "transparent", border: "none", color: "var(--color-accent)", fontWeight: "600", cursor: "pointer", fontSize: "1rem" }}>
                    Transmit Another Enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
