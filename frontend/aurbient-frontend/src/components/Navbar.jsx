import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../../../../staticfiles/images/AurbientT.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'industries' | 'systems' | null

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
                {/* HOME */}
                <div className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeAll}>Home</Link>
                </div>
                {/* ABOUT */}
                <div className="nav-item">
                    <Link to="/about" className="nav-link" onClick={closeAll}>About</Link>
                </div>
                {/* CASE STUDIES */}
                <div className="nav-item">
                    <Link to="/case-studies" className="nav-link" onClick={closeAll}>Case Studies</Link>
                </div>
                {/* AI AUTOMATION */}
                <div className="nav-item">
                    <Link to="/solutions" className="nav-link" onClick={closeAll}>AI Automation</Link>
                </div>
                {/* INDUSTRIES */}
                <div className={`nav-item dropdown-item ${activeDropdown === 'industries' ? 'active' : ''}`}>
                    <a href="#" className="nav-link" onClick={e => { e.preventDefault(); toggleDropdown('industries'); }}>
                      Industries <i className="fas fa-chevron-down dropdown-icon"></i>
                    </a>
                    <div className="mega-menu" style={{right: "-80px", left: "auto", width: "500px"}}>
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
                    <div className="mega-menu" style={{right: "-100px", left: "auto", width: "560px"}}>
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
                <div className="nav-item cta-nav-item">
                  <Link to="/contact" className="btn-premium" onClick={closeAll}>Let’s Build →</Link>
                </div>
            </div>
        </div>
    </nav>
  );
}
