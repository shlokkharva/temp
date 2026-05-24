import { Link } from "react-router-dom";
import logoImg from "../../../../staticfiles/images/AurbientT.webp";

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="container nav-flex">
            <Link to="/" className="logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <img src={logoImg} alt="Aurbient Technologies" style={{ height: '65px', objectFit: 'contain' }} />
            </Link>
            <div className="nav-links">
                {/* HOME */}
                <div className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </div>
                {/* ABOUT */}
                <div className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </div>
                {/* CASE STUDIES */}
                <div className="nav-item">
                    <Link to="/case-studies" className="nav-link">Case Studies</Link>
                </div>
                {/* AI AUTOMATION */}
                <div className="nav-item">
                    <Link to="/solutions" className="nav-link">AI Automation</Link>
                </div>
                {/* INDUSTRIES */}
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Industries <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu" style={{right: "-80px", left: "auto", width: "500px"}}>
                        <div className="mega-grid">
                            <div className="mega-col"><Link to="/industries/manufacturing">Manufacturing</Link><Link to="/industries/industrial-operations">Industrial Operations</Link><Link to="/industries/retail-commerce">Retail & Commerce</Link></div>
                            <div className="mega-col"><Link to="/industries/logistics">Logistics</Link><Link to="/industries/enterprise-operations">Enterprise Operations</Link><Link to="/industries/smes">SMEs</Link></div>
                        </div>
                    </div>
                </div>
                {/* SYSTEMS */}
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Systems <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu" style={{right: "-100px", left: "auto", width: "560px"}}>
                        <div className="mega-grid">
                            <div className="mega-col"><Link to="/systems/automation-ecosystems">Automation Ecosystems</Link><Link to="/systems/erp-intelligence">ERP Intelligence</Link><Link to="/systems/ai-workflow-systems">AI Workflow Systems</Link></div>
                            <div className="mega-col"><Link to="/systems/operational-visibility">Operational Visibility</Link><Link to="/systems/cloud-infrastructure">Cloud Infrastructure</Link><Link to="/systems/business-operating-layer">Business Operating Layer</Link></div>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="btn-premium">Let’s Build →</Link>
            </div>
        </div>
    </nav>
  );
}
