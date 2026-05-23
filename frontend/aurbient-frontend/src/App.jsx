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
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import "./App.css";

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
      <Route path="/technology" element={<Technology />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
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
