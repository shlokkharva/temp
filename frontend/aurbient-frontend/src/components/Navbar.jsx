import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../../../staticfiles/images/AurbientT.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'solutions' | 'industries' | 'systems' | 'insights' | 'company' | null

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const closeAll = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
        <div className="container nav-flex">
            <Link to="/" className="logo" onClick={closeAll} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logoImg} alt="Aurbient Technologies" style={{ height: '65px', objectFit: 'contain' }} />
            </Link>
            
            {/* Hamburger Button */}
            <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Navigation">
              <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
            
            <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
                {/* SOLUTIONS */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('solutions'); }}>
                      Solutions <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu">
                        <div className="mega-grid">
                            <div className="mega-col">
                                <h4>Intelligence Layers</h4>
                                <Link to="/systems/ai-workflow-systems" onClick={closeAll}>AI Automation</Link>
                                <Link to="/systems/operational-visibility" onClick={closeAll}>Operational Intelligence</Link>
                                <Link to="/systems/erp-intelligence" onClick={closeAll}>Business Systems</Link>
                                <Link to="/systems/operational-visibility" onClick={closeAll}>Data Intelligence</Link>
                            </div>
                            <div className="mega-col">
                                <h4>Infrastructure</h4>
                                <Link to="/systems/cloud-infrastructure" onClick={closeAll}>Enterprise Infrastructure</Link>
                                <Link to="/systems/ai-workflow-systems" onClick={closeAll}>Workflow Architecture</Link>
                                <Link to="/systems/automation-ecosystems" onClick={closeAll}>Process Optimization</Link>
                                <Link to="/systems/business-operating-layer" onClick={closeAll}>System Integration</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INDUSTRIES */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'industries' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('industries'); }}>
                      Industries <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: '-80px', width: '500px' }}>
                        <div className="mega-grid">
                            <div className="mega-col">
                                <Link to="/industries/manufacturing" onClick={closeAll}>Manufacturing</Link>
                                <Link to="/industries/industrial-operations" onClick={closeAll}>Industrial Operations</Link>
                                <Link to="/industries/retail-commerce" onClick={closeAll}>Retail & Commerce</Link>
                            </div>
                            <div className="mega-col">
                                <Link to="/industries/logistics" onClick={closeAll}>Logistics</Link>
                                <Link to="/industries/enterprise-operations" onClick={closeAll}>Enterprise Operations</Link>
                                <Link to="/industries/smes" onClick={closeAll}>SMEs</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SYSTEMS */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'systems' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('systems'); }}>
                      Systems <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: '-100px', width: '560px' }}>
                        <div className="mega-grid">
                            <div className="mega-col">
                                <Link to="/systems/automation-ecosystems" onClick={closeAll}>Automation Ecosystems</Link>
                                <Link to="/systems/erp-intelligence" onClick={closeAll}>ERP Intelligence</Link>
                                <Link to="/systems/ai-workflow-systems" onClick={closeAll}>AI Workflow Systems</Link>
                            </div>
                            <div className="mega-col">
                                <Link to="/systems/operational-visibility" onClick={closeAll}>Operational Visibility</Link>
                                <Link to="/systems/cloud-infrastructure" onClick={closeAll}>Cloud Infrastructure</Link>
                                <Link to="/systems/business-operating-layer" onClick={closeAll}>Business Operating Layer</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* INSIGHTS */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'insights' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('insights'); }}>
                      Insights <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: 'auto', right: '-150px', width: '680px' }}>
                        <div className="mega-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                            <div className="mega-col">
                                <h4>Resources</h4>
                                <Link to="/insights" state={{ tab: "overview" }} onClick={closeAll} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                                  <i className="fas fa-th-large" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}></i>
                                  Insights Overview
                                </Link>
                                <Link to="/case-studies" onClick={closeAll} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                                  <i className="fas fa-chart-line" style={{ color: 'var(--color-accent)', fontSize: '0.85rem' }}></i>
                                  Case Studies
                                </Link>
                            </div>
                            <div className="mega-col">
                                <h4>Focus Areas</h4>
                                <Link to="/insights" state={{ tab: "pillars", pillarId: "operational-intelligence" }} onClick={closeAll}>Operational Intelligence</Link>
                                <Link to="/insights" state={{ tab: "pillars", pillarId: "ai-in-business" }} onClick={closeAll}>AI in Business</Link>
                                <Link to="/insights" state={{ tab: "pillars", pillarId: "workflow-strategy" }} onClick={closeAll}>Workflow Strategy</Link>
                            </div>
                            <div className="mega-col">
                                <h4>&nbsp;</h4>
                                <Link to="/insights" state={{ tab: "pillars", pillarId: "automation-insights" }} onClick={closeAll}>Automation Insights</Link>
                                <Link to="/insights" state={{ tab: "pillars", pillarId: "business-transformation" }} onClick={closeAll}>Business Transformation</Link>
                                <Link to="/insights" state={{ tab: "pillars", pillarId: "future-infrastructure" }} onClick={closeAll}>Future Infrastructure</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* COMPANY */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'company' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('company'); }}>
                      Company <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{ left: '-40px', width: '450px' }}>
                        <div className="mega-grid">
                            <div className="mega-col">
                                <Link to="/company/vision-philosophy" onClick={closeAll}>Vision & Philosophy</Link>
                                <Link to="/company/leadership" onClick={closeAll}>Leadership</Link>
                                <Link to="/company/engineering-culture" onClick={closeAll}>Engineering Culture</Link>
                            </div>
                            <div className="mega-col">
                                <Link to="/company/mission-ecosystem" onClick={closeAll}>Mission & Ecosystem</Link>
                                <Link to="/company/careers" onClick={closeAll}>Careers</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nav-item cta-nav-item">
                  <Link to="/contact" className="btn-premium" onClick={closeAll}>Let’s Build →</Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
