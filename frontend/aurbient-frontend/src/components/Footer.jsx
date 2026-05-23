// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-bg border-t border-border z-10 py-16 px-6 md:px-12 lg:px-24">
      {/* Visual background details */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-gradient-radial from-teal-dim to-transparent opacity-20 pointer-events-none blur-[60px]" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand details */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15C30.67 15 15 30.67 15 50C15 69.33 30.67 85 50 85C59.66 85 68.39 81.09 74.74 74.74C81.09 68.39 85 59.66 85 50C85 30.67 69.33 15 50 15ZM50 73C37.3 73 27 62.7 27 50C27 37.3 37.3 27 50 27C62.7 27 73 37.3 73 50C73 55.45 71.09 60.45 67.92 64.39L58.5 54.97C60.07 53.53 61 51.87 61 50C61 43.93 56.07 39 50 39C43.93 39 39 43.93 39 50C39 56.07 43.93 61 50 61C52.12 61 54.07 60.4 55.67 59.39L64.88 68.61C61.02 71.39 55.71 73 50 73Z" fill="var(--color-accent)"/>
              </svg>
            </div>
            <span className="font-heading text-text text-3xl tracking-[-1px]">
              aurbient <span className="text-accent text-glow-teal">technologies</span>
            </span>
          </div>
          
          <p className="text-muted font-body font-light text-sm max-w-sm leading-relaxed">
            Interfacing with living intelligence. We combine strategy, low-latency architectures, and autonomous vector flows to scale businesses with compound velocity.
          </p>
          
          <div className="flex gap-4 mt-2">
            {["Twitter", "GitHub", "LinkedIn", "Discord"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-9 h-9 rounded-full liquid-glass flex items-center justify-center text-xs text-muted hover:text-accent hover:scale-105 active:scale-95 transition-all duration-200"
              >
                {platform[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Architecture */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent">
            // Navigation
          </h4>
          <ul className="flex flex-col gap-3 font-body font-light text-sm text-muted">
            <li><Link to="/solutions" className="hover:text-text transition-colors">Solutions</Link></li>
            <li><Link to="/industries" className="hover:text-text transition-colors">Industries</Link></li>
            <li><Link to="/technology" className="hover:text-text transition-colors">Technology Stacks</Link></li>
            <li><Link to="/insights" className="hover:text-text transition-colors">Insights & Cases</Link></li>
            <li><Link to="/company" className="hover:text-text transition-colors">Company & Team</Link></li>
          </ul>
        </div>

        {/* Column 3: Insights */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-accent">
            // Platform
          </h4>
          <ul className="flex flex-col gap-3 font-body font-light text-sm text-muted text-left">
            <li><a href="#" className="hover:text-text transition-colors">Neural Wave API</a></li>
            <li><a href="#" className="hover:text-text transition-colors">Operational ROI</a></li>
            <li><a href="#" className="hover:text-text transition-colors">Integrations Core</a></li>
            <li><Link to="/contact" className="hover:text-text transition-colors">Enquiry Matrix</Link></li>
            <li><a href="#" className="hover:text-text transition-colors">System Security</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 font-body font-light text-xs text-muted">
        <p>&copy; {new Date().getFullYear()} Aurbient Technologies, Inc. All rights reserved.</p>
        <p className="flex gap-4">
          <a href="#" className="hover:text-text transition-colors">Privacy Paradigm</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-text transition-colors">Integrity Terms</a>
        </p>
      </div>
    </footer>
  );
}
