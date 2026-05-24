import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="container nav-flex">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }}>Aurbient <span>technologies</span></Link>
            <div className="nav-links">
                {/* SOLUTIONS */}
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Solutions <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu">
                        <div className="mega-grid">
                            <div className="mega-col"><h4>Intelligence Layers</h4><Link to="/solutions">AI Automation</Link><Link to="/solutions">Operational Intelligence</Link><Link to="/solutions">Business Systems</Link><Link to="/solutions">Data Intelligence</Link></div>
                            <div className="mega-col"><h4>Infrastructure</h4><Link to="/solutions">Enterprise Infrastructure</Link><Link to="/solutions">Workflow Architecture</Link><Link to="/solutions">Process Optimization</Link><Link to="/solutions">System Integration</Link></div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Industries <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu" style={{left: "-80px", width: "500px"}}>
                        <div className="mega-grid">
                            <div className="mega-col"><Link to="/industries">Manufacturing</Link><Link to="/industries">Industrial Operations</Link><Link to="/industries">Retail & Commerce</Link></div>
                            <div className="mega-col"><Link to="/industries">Logistics</Link><Link to="/industries">Enterprise Operations</Link><Link to="/industries">SMEs</Link></div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Systems <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu" style={{left: "-100px", width: "560px"}}>
                        <div className="mega-grid">
                            <div className="mega-col"><Link to="/technology">Automation Ecosystems</Link><Link to="/technology">ERP Intelligence</Link><Link to="/technology">AI Workflow Systems</Link></div>
                            <div className="mega-col"><Link to="/technology">Operational Visibility</Link><Link to="/technology">Cloud Infrastructure</Link><Link to="/technology">Business Operating Layer</Link></div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Insights <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu" style={{left: "-20px", width: "480px"}}>
                        <div className="mega-grid">
                            <div className="mega-col"><Link to="/insights">Operational Intelligence</Link><Link to="/insights">AI in Business</Link><Link to="/insights">Workflow Strategy</Link></div>
                            <div className="mega-col"><Link to="/insights">Automation Insights</Link><Link to="/insights">Business Transformation</Link><Link to="/insights">Future Infrastructure</Link></div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Company <i className="fas fa-chevron-down dropdown-icon"></i></a>
                    <div className="mega-menu" style={{left: "-40px", width: "450px"}}>
                        <div className="mega-grid">
                            <div className="mega-col"><Link to="/company">Vision & Philosophy</Link><Link to="/company">Leadership</Link><Link to="/company">Engineering Culture</Link></div>
                            <div className="mega-col"><Link to="/company">Mission & Ecosystem</Link><Link to="/company">Careers</Link></div>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="btn-premium">Let’s Build →</Link>
            </div>
        </div>
    </nav>
  );
}
