// src/pages/Contact.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { postContactInquiry } from "../utils/api";
import BlurText from "../components/BlurText";

import HeroSection from "../components/HeroSection";

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
    <>
      <HeroSection 
        kicker="Enquiry Matrix"
        headline="Establish connection"
        subtext="We look forward to interfacing with your team. Fill out the core credentials, and a systems synthesist will initialize a response handshake in less than 24 hours."
      />
      <div className="bg-bg text-text py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden flex flex-col justify-center">
        {/* Dynamic neural glow */}
        <div className="bg-neural-glow top-1/4 left-1/4" />
        <div className="bg-neural-glow bottom-1/4 right-1/4" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-body text-accent uppercase tracking-[0.2em] block mb-4">
                // Direct Comms
              </span>
              <h2 className="font-heading text-text text-4xl md:text-5xl leading-[1.1] tracking-[-1px]">
                Secure Channels
              </h2>
            </div>

          <div className="flex flex-col gap-6 font-body font-light text-sm text-muted">
            <div className="flex items-center gap-4 bg-border p-4 rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                {/* Envelope SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-widest font-semibold">Handshake Port //</div>
                <div className="text-text hover:text-accent transition-colors">handshake@aurbienttech.onrender.com</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-border p-4 rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                {/* Map pin SVG */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted uppercase tracking-widest font-semibold">Physical Coordinate //</div>
                <div className="text-text">Silicon Valley, California</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card Column */}
        <div className="lg:col-span-7">
          <div className="liquid-glass border border-border rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {!success ? (
                /* The Contact Form */
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <h3 className="font-heading text-text text-3xl tracking-[-1px] mb-2 uppercase">
                    Initialize Handshake //
                  </h3>

                  {error && (
                    <div className="text-xs text-red-400 bg-red-950/20 border border-red-900/30 px-4 py-3 rounded-full font-body">
                      {error}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-muted font-body">
                      Your Identity *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Jennifer Vance"
                      className="w-full bg-border border border-border focus:border-accent/40 rounded-full px-6 py-3 font-body text-sm text-text placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-muted font-body">
                      Electronic Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jennifer@aurbienttech.onrender.com"
                      className="w-full bg-border border border-border focus:border-accent/40 rounded-full px-6 py-3 font-body text-sm text-text placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all"
                      required
                    />
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-muted font-body">
                      Corporate Sector (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Orbit Space Systems"
                      className="w-full bg-border border border-border focus:border-accent/40 rounded-full px-6 py-3 font-body text-sm text-text placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-semibold text-muted font-body">
                      Enquiry Description *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Specify telemetry parameters or architectural bottlenecks..."
                      rows="4"
                      className="w-full bg-border border border-border focus:border-accent/40 rounded-[1.25rem] px-6 py-4 font-body text-sm text-text placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-accent/40 transition-all resize-none"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="liquid-glass-strong rounded-full px-8 py-4 font-body font-semibold hover:scale-105 active:scale-95 transition-all text-center flex items-center justify-center gap-3 disabled:opacity-50 mt-4"
                  >
                    {submitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin" />
                        <span>Verifying Coordinates...</span>
                      </>
                    ) : (
                      <span>Transmit Credentials &rarr;</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Success Animated Overlay */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-8 animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-text text-4xl tracking-[-1px] mb-4">
                    Connection Initialized
                  </h3>
                  <p className="text-sm md:text-base text-muted max-w-sm font-body font-light leading-relaxed mb-8">
                    Your credentials have been securely transmitted across our neural wave gates. A systems synthesist will establish contact shortly.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="liquid-glass rounded-full px-8 py-3 text-sm font-body font-medium hover:text-accent hover:scale-105 active:scale-95 transition-all"
                  >
                    Transmit Another Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
