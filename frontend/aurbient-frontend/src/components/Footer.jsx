import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="footer-grid" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
                <div style={{ maxWidth: "300px" }}>
                    <div className="logo" style={{ color: "white" }}>
                        Aurbient <span style={{ color: "var(--color-accent)" }}>technologies</span>
                    </div>
                    <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
                        Engineering the invisible intelligence for modern enterprise operations.
                    </p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Intelligence</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions" style={{ color: "inherit", textDecoration: "none" }}>Operational Layer</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/technology" style={{ color: "inherit", textDecoration: "none" }}>Infrastructure</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/solutions" style={{ color: "inherit", textDecoration: "none" }}>Systems Thinking</Link></p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Ecosystem</h4>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/industries" style={{ color: "inherit", textDecoration: "none" }}>Industries</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/insights" style={{ color: "inherit", textDecoration: "none" }}>Insights</Link></p>
                    <p style={{ marginBottom: "0.5rem" }}><Link to="/company" style={{ color: "inherit", textDecoration: "none" }}>Philosophy</Link></p>
                </div>
                <div>
                    <h4 style={{ color: "white", marginBottom: "1rem" }}>Connect</h4>
                    <p style={{ marginBottom: "0.5rem" }}>hello@aurbient.com</p>
                    <p style={{ marginBottom: "0.5rem" }}>+1 (415) 829-7400</p>
                </div>
            </div>
            <div className="copyright" style={{ textAlign: "center", paddingTop: "40px", marginTop: "32px", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                © {new Date().getFullYear()} Aurbient Technologies — Calm enterprise futurism. Intelligent infrastructure.
            </div>
        </div>
    </footer>
  );
}
