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
      setError("Something went wrong. Please try sending your message again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ background: "#FAFCFB" }}>
      {/* Premium Hero Section */}
      <section style={{ 
        padding: "140px 0 100px", 
        background: `linear-gradient(180deg, rgba(17, 35, 48, 0.85) 0%, rgba(17, 35, 48, 0.7) 100%), url('/CONTACTUS.png') center/cover no-repeat`, 
        borderBottom: "1px solid #E2EBE7",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <span style={{ 
              display: "inline-block", 
              background: "rgba(255, 255, 255, 0.15)", 
              backdropFilter: "blur(4px)",
              padding: "8px 20px", 
              borderRadius: "30px", 
              fontSize: "0.85rem", 
              fontWeight: "600", 
              color: "#FFFFFF", 
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              marginBottom: "24px",
              border: "1px solid rgba(255, 255, 255, 0.25)"
            }}>
              Get In Touch
            </span>
            <h1 style={{ 
              fontSize: "3.6rem", 
              fontWeight: "800", 
              letterSpacing: "-0.02em", 
              color: "#FFFFFF",
              marginBottom: "24px",
              lineHeight: "1.1",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>
              Let's Build Together
            </h1>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.8", 
              color: "#E4F1F3", 
              marginBottom: "0",
              maxWidth: "720px",
              marginLeft: "auto",
              marginRight: "auto",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)"
            }}>
              Have a project in mind or want to automate your business? We would love to hear from you. 
              Fill out the form below, and we will get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start' }}>
            
            {/* Left Column: Direct Info */}
            <div style={{ flex: 1, minWidth: '320px' }}>
              <span style={{ 
                fontSize: "0.8rem", 
                color: "var(--color-accent)", 
                textTransform: "uppercase", 
                fontWeight: "700", 
                letterSpacing: "1px", 
                display: "block", 
                marginBottom: "16px" 
              }}>
                Contact Details
              </span>
              <h2 style={{ 
                fontSize: "2.4rem", 
                marginBottom: "32px", 
                color: "var(--color-primary)",
                fontWeight: "700",
                letterSpacing: "-0.01em"
              }}>
                Our Channels
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: "#FFFFFF", 
                  padding: "24px", 
                  borderRadius: "20px", 
                  border: "1px solid #E2EBE7",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)"
                }}>
                  <div style={{ 
                    width: "52px", 
                    height: "52px", 
                    borderRadius: "16px", 
                    background: "rgba(19, 170, 179, 0.08)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "var(--color-accent)", 
                    fontSize: "1.3rem" 
                  }}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#58798C", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px", marginBottom: "4px" }}>Email Us</div>
                    <div style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "1.05rem" }}>rajthakur.aurbient@gmail.com</div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: "#FFFFFF", 
                  padding: "24px", 
                  borderRadius: "20px", 
                  border: "1px solid #E2EBE7",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)"
                }}>
                  <div style={{ 
                    width: "52px", 
                    height: "52px", 
                    borderRadius: "16px", 
                    background: "rgba(19, 170, 179, 0.08)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "var(--color-accent)", 
                    fontSize: "1.3rem" 
                  }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#58798C", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px", marginBottom: "4px" }}>Call Us</div>
                    <div style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "1.05rem" }}>+91 8629919873</div>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: "#FFFFFF", 
                  padding: "24px", 
                  borderRadius: "20px", 
                  border: "1px solid #E2EBE7",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)"
                }}>
                  <div style={{ 
                    width: "52px", 
                    height: "52px", 
                    borderRadius: "16px", 
                    background: "rgba(19, 170, 179, 0.08)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "var(--color-accent)", 
                    fontSize: "1.3rem" 
                  }}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#58798C", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px", marginBottom: "4px" }}>Our Office</div>
                    <div style={{ color: "var(--color-primary)", fontWeight: "500", lineHeight: "1.5", fontSize: "1rem" }}>
                      200, Shree Ram Nagar 22,<br/>
                      Bengali Square, Indore,<br/>
                      Madhya Pradesh 452001
                    </div>
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  background: "#FFFFFF", 
                  padding: "24px", 
                  borderRadius: "20px", 
                  border: "1px solid #E2EBE7",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)"
                }}>
                  <div style={{ 
                    width: "52px", 
                    height: "52px", 
                    borderRadius: "16px", 
                    background: "rgba(19, 170, 179, 0.08)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    color: "var(--color-accent)", 
                    fontSize: "1.3rem" 
                  }}>
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "#58798C", textTransform: "uppercase", fontWeight: "700", letterSpacing: "0.5px", marginBottom: "4px" }}>MSME Registration</div>
                    <div style={{ color: "var(--color-primary)", fontWeight: "600", fontSize: "1.05rem" }}>UDYAM-MP-23-0257373</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Form Card */}
            <div style={{ 
              flex: 1.5, 
              minWidth: '320px',
              background: "#FFFFFF",
              padding: "48px",
              borderRadius: "32px",
              boxShadow: "0 20px 50px rgba(19, 170, 179, 0.05)",
              border: "1px solid #E2EBE7"
            }}>
              {!success ? (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px" }}>Send Us a Message</h3>
                    <p style={{ color: "#58798C", fontSize: "0.95rem" }}>We'd love to learn about your goals and how we can support you.</p>
                  </div>

                  {error && <div style={{ color: "#D9534F", background: "#FDF1F0", padding: "12px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>{error}</div>}
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#1F3647", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="e.g. John Doe" 
                      style={{ 
                        padding: "16px 20px", 
                        borderRadius: "12px", 
                        border: "1px solid #E2EBE7", 
                        background: "#FAFCFB", 
                        fontSize: "1rem", 
                        outline: "none",
                        transition: "all 0.3s ease" 
                      }} 
                    />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#1F3647", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      placeholder="e.g. john@company.com" 
                      style={{ 
                        padding: "16px 20px", 
                        borderRadius: "12px", 
                        border: "1px solid #E2EBE7", 
                        background: "#FAFCFB", 
                        fontSize: "1rem", 
                        outline: "none",
                        transition: "all 0.3s ease" 
                      }} 
                    />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#1F3647", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder="e.g. Acme Corporation" 
                      style={{ 
                        padding: "16px 20px", 
                        borderRadius: "12px", 
                        border: "1px solid #E2EBE7", 
                        background: "#FAFCFB", 
                        fontSize: "1rem", 
                        outline: "none",
                        transition: "all 0.3s ease" 
                      }} 
                    />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontSize: "0.8rem", color: "#1F3647", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px" }}>How can we help you? *</label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                      placeholder="Tell us about your project or what you would like to automate..." 
                      rows="5" 
                      style={{ 
                        padding: "16px 20px", 
                        borderRadius: "12px", 
                        border: "1px solid #E2EBE7", 
                        background: "#FAFCFB", 
                        fontSize: "1rem", 
                        outline: "none", 
                        resize: "vertical",
                        transition: "all 0.3s ease" 
                      }}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={submitting} 
                    className="btn-premium" 
                    style={{ 
                      width: "100%", 
                      padding: "18px", 
                      marginTop: "12px",
                      fontSize: "1.05rem",
                      fontWeight: "700",
                      background: "var(--color-primary)",
                      borderRadius: "14px",
                      boxShadow: "0 10px 20px rgba(17, 35, 48, 0.15)"
                    }}
                  >
                    {submitting ? "Sending Message..." : "Send Message →"}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: "50%", 
                    background: "rgba(19, 170, 179, 0.1)", 
                    color: "var(--color-accent)", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontSize: "2.2rem", 
                    margin: "0 auto 28px",
                    boxShadow: "0 10px 25px rgba(19, 170, 179, 0.15)" 
                  }}>
                    <i className="fas fa-check"></i>
                  </div>
                  <h3 style={{ fontSize: "2rem", fontWeight: "750", color: "var(--color-primary)", marginBottom: "16px" }}>Message Sent!</h3>
                  <p style={{ color: "#395568", marginBottom: "32px", fontSize: "1.1rem", lineHeight: "1.6" }}>
                    Thank you for reaching out to us. We have successfully received your details and our team will get in touch with you very soon.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)} 
                    style={{ 
                      background: "rgba(19, 170, 179, 0.08)", 
                      border: "none", 
                      color: "var(--color-accent)", 
                      fontWeight: "700", 
                      cursor: "pointer", 
                      fontSize: "1rem",
                      padding: "12px 28px",
                      borderRadius: "30px",
                      transition: "all 0.25s ease" 
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "rgba(19, 170, 179, 0.15)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "rgba(19, 170, 179, 0.08)";
                    }}
                  >
                    Send Another Message
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
