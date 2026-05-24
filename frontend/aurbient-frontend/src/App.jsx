// src/App.jsx
import { useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Technology from "./pages/Technology";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import "./App.css";

import Manufacturing from "./pages/Manufacturing";
import IndustrialOperations from "./pages/IndustrialOperations";
import RetailCommerce from "./pages/RetailCommerce";
import Logistics from "./pages/Logistics";
import EnterpriseOperations from "./pages/EnterpriseOperations";
import SMEs from "./pages/SMEs";

import AutomationEcosystems from "./pages/AutomationEcosystems";
import ERPIntelligence from "./pages/ERPIntelligence";
import AIWorkflowSystems from "./pages/AIWorkflowSystems";
import OperationalVisibility from "./pages/OperationalVisibility";
import CloudInfrastructure from "./pages/CloudInfrastructure";
import BusinessOperatingLayer from "./pages/BusinessOperatingLayer";

// ScrollToTop utility that triggers on route shifts
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Simple routes without AnimatePresence to avoid React 19 + framer-motion v11 conflicts at root level
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/industries" element={<Industries />} />
      
      {/* Specific Industry Pages */}
      <Route path="/industries/manufacturing" element={<Manufacturing />} />
      <Route path="/industries/industrial-operations" element={<IndustrialOperations />} />
      <Route path="/industries/retail-commerce" element={<RetailCommerce />} />
      <Route path="/industries/logistics" element={<Logistics />} />
      <Route path="/industries/enterprise-operations" element={<EnterpriseOperations />} />
      <Route path="/industries/smes" element={<SMEs />} />

      <Route path="/technology" element={<Technology />} />
      
      {/* Specific Technology/System Pages */}
      <Route path="/systems/automation-ecosystems" element={<AutomationEcosystems />} />
      <Route path="/systems/erp-intelligence" element={<ERPIntelligence />} />
      <Route path="/systems/ai-workflow-systems" element={<AIWorkflowSystems />} />
      <Route path="/systems/operational-visibility" element={<OperationalVisibility />} />
      <Route path="/systems/cloud-infrastructure" element={<CloudInfrastructure />} />
      <Route path="/systems/business-operating-layer" element={<BusinessOperatingLayer />} />

      <Route path="/insights" element={<Insights />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:id" element={<CaseStudies />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
