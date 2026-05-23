import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Solutions", "Industries", "Technology", "Insights", "Company"];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between"
        style={{
          background: scrolled ? "var(--color-surface)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-muted)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-9 h-9 rounded-full border border-accent/40 flex items-center justify-center bg-accent/10">
            <svg width="18" height="18" viewBox="0 0 100 100" fill="none">
              <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C59.66 85 68.39 81.09 74.74 74.74C81.09 68.39 85 59.66 85 50C85 30.67 69.33 15 50 15ZM50 73C37.3 73 27 62.7 27 50C27 37.3 37.3 27 50 27C62.7 27 73 37.3 73 50C73 55.45 71.09 60.45 67.92 64.39L58.5 54.97C60.07 53.53 61 51.87 61 50C61 43.93 56.07 39 50 39C43.93 39 39 43.93 39 50C39 56.07 43.93 61 50 61C52.12 61 54.07 60.4 55.67 59.39L64.88 68.61C61.02 71.39 55.71 73 50 73Z" fill="var(--color-accent)"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div style={{ fontFamily:"'Barlow',sans-serif", fontWeight:600, fontSize:"0.95rem", color:"var(--color-text)", letterSpacing:"0.02em" }}>Aurbient</div>
            <div style={{ fontFamily:"'Barlow',sans-serif", fontWeight:400, fontSize:"0.6rem", color:"var(--color-muted)", letterSpacing:"0.2em" }}>TECHNOLOGIES</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l}
              to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
              style={({ isActive }) => ({
                fontFamily: "'Barlow',sans-serif",
                fontSize: "0.85rem",
                fontWeight: 400,
                color: isActive ? "var(--color-accent)" : "var(--color-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              })}
              onMouseEnter={e => { if (e.target.style.color !== "var(--color-accent)") e.target.style.color = "var(--color-text)"; }}
              onMouseLeave={e => { if (e.target.style.color !== "var(--color-accent)") e.target.style.color = "var(--color-muted)"; }}
            >
              {l}
            </NavLink>
          ))}
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium"
            style={{
              fontFamily:"'Barlow',sans-serif", background:"var(--color-muted)",
              border:"1px solid var(--color-muted)", color:"var(--color-text)", textDecoration:"none",
              transition:"all 0.2s",
            }}
          >
            Let's Build <span style={{ color:"var(--color-accent)" }}>▼</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span style={{ display:"block", width:"22px", height:"1.5px", background:"var(--color-muted)" }} />
            <span style={{ display:"block", width:"22px", height:"1.5px", background:"var(--color-muted)" }} />
            <span style={{ display:"block", width:"22px", height:"1.5px", background:"var(--color-muted)" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col pt-20 px-8 gap-6"
          style={{ background:"var(--color-surface)", backdropFilter:"blur(20px)" }}
        >
          {[...links, "Contact"].map(l => (
            <NavLink
              key={l}
              to={l === "Home" ? "/" : l === "Contact" ? "/contact" : `/${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily:"'Barlow',sans-serif", fontSize:"1.5rem", fontWeight:300, color:"var(--color-muted)", textDecoration:"none" }}
            >
              {l}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
