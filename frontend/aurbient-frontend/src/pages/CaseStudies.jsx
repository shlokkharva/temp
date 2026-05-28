import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import OperationalVisibility from "./OperationalVisibility";
import AIWorkflowSystems from "./AIWorkflowSystems";
import BusinessOperatingLayer from "./BusinessOperatingLayer";
import AutomationEcosystems from "./AutomationEcosystems";
import ERPIntelligence from "./ERPIntelligence";
import Logistics from "./Logistics";
import RetailCommerce from "./RetailCommerce";
import CloudInfrastructure from "./CloudInfrastructure";

const fallbackImages = {
  "01": [
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  ],
  "02": [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  ],
  "03": [
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  ],
  "04": [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1531746790731-6c087fecd7c3?auto=format&fit=crop&w=1200&q=80"
  ],
  "05": [
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
  ],
  "06": [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
  ],
  "07": [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  ],
  "08": [
    "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80"
  ]
};

export default function CaseStudies() {
  const caseStudies = [
    {
      id: "01",
      title: "Improving Production Visibility Through Operational Digitization",
      industry: "Manufacturing / Industrial Operations",
      overview: "The organization faced operational inefficiencies caused by fragmented production tracking systems, delayed reporting workflows, and limited visibility across operational departments. Manual coordination processes reduced workflow efficiency and slowed management-level decision-making. Aurbient Technologies designed a centralized operational intelligence environment focused on improving production visibility, workflow coordination, and reporting accessibility.",
      challenges: [
        "Limited real-time production visibility",
        "Manual reporting dependency",
        "Delayed communication between departments",
        "Lack of centralized operational monitoring",
        "Workflow inefficiencies across teams",
        "Reduced management-level operational clarity"
      ],
      strategy: "Aurbient Technologies analyzed the operational structure and identified areas where digital workflow systems and centralized reporting could improve coordination. The solution focused on Workflow visibility, Reporting automation, Centralized monitoring, Operational coordination, and Scalable digital infrastructure. The goal was to create a structured operational environment capable of supporting long-term process scalability.",
      components: [
        "Production Monitoring Dashboard",
        "Operational Reporting Interface",
        "Workflow Coordination System",
        "Management Visibility Layer",
        "Data Tracking Infrastructure",
        "Automated Reporting Environment"
      ],
      tech: [
        "Cloud-connected operational systems",
        "Dashboard-based reporting architecture",
        "Workflow automation integration",
        "Scalable backend infrastructure",
        "Centralized operational visibility tools"
      ],
      outcomes: [
        "Improved production visibility",
        "Faster reporting accessibility",
        "Enhanced workflow coordination",
        "Reduced manual operational dependency",
        "Better management oversight",
        "Improved operational communication efficiency"
      ],
      insight: "Modern industrial businesses require intelligent operational systems capable of improving visibility, workflow coordination, and real-time decision-making.",
      images: [
        "/assets/case1_hero.webp",
        "/assets/case1_photo2.webp",
        "/assets/case1_photo3.webp"
      ]
    },
    {
      id: "02",
      title: "Building an AI-Driven Sales & Management Ecosystem",
      industry: "Business Operations / Sales Management",
      overview: "The organization relied heavily on manual sales tracking, disconnected communication workflows, and inconsistent lead coordination processes. Aurbient Technologies designed an AI-assisted operational ecosystem focused on workflow visibility, centralized lead management, and scalable business coordination.",
      challenges: [
        "Manual lead tracking processes",
        "Inconsistent sales coordination",
        "Delayed communication workflows",
        "Limited operational visibility",
        "Lack of centralized reporting systems",
        "Inefficient follow-up management"
      ],
      strategy: "Aurbient Technologies focused on creating a structured operational environment capable of supporting business growth through intelligent workflow systems. The solution integrated AI-assisted workflows, Lead management systems, Automated communication layers, Centralized reporting systems, and Operational tracking infrastructure.",
      components: [
        "AI-Assisted Workflow System",
        "Lead Management Dashboard",
        "Communication Coordination Layer",
        "Operational Monitoring System",
        "Centralized Reporting Environment",
        "Workflow Automation Pipeline"
      ],
      tech: [
        "AI-integrated workflow systems",
        "Automation logic infrastructure",
        "Scalable cloud architecture",
        "Dashboard-driven management systems",
        "Business visibility platforms"
      ],
      outcomes: [
        "Improved sales coordination",
        "Better lead visibility",
        "Streamlined communication workflows",
        "Enhanced operational monitoring",
        "Improved workflow consistency",
        "Faster management reporting access"
      ],
      insight: "Businesses achieve scalable growth when operational workflows, communication systems, and intelligent automation environments work together as a connected ecosystem.",
      images: [
        "/assets/case2_hero.webp",
        "/assets/case2_photo2.webp",
        "/assets/case2_photo3.webp"
      ]
    },
    {
      id: "03",
      title: "Modernizing Digital Infrastructure for Enterprise Communication",
      industry: "Enterprise / Digital Infrastructure",
      overview: "The organization required a modern digital infrastructure capable of improving communication flow, operational accessibility, and professional enterprise presence. Aurbient Technologies developed a scalable digital environment focused on operational communication, structured inquiry systems, and business visibility.",
      challenges: [
        "Limited digital infrastructure scalability",
        "Fragmented communication systems",
        "Lack of centralized inquiry management",
        "Weak operational visibility online",
        "Inconsistent digital workflow structure"
      ],
      strategy: "The project focused on creating a scalable enterprise-grade digital infrastructure designed to support operational communication and future expansion. The solution emphasized Digital visibility, Structured communication systems, Inquiry coordination, Scalable architecture, and Enterprise-level digital presence.",
      components: [
        "Enterprise Website Infrastructure",
        "Inquiry Management System",
        "Operational Communication Layer",
        "Scalable Content Architecture",
        "Digital Visibility Framework",
        "Integrated Business Access System"
      ],
      tech: [
        "Responsive enterprise architecture",
        "Cloud-based deployment systems",
        "Integrated communication infrastructure",
        "Scalable web technologies",
        "Structured operational workflows"
      ],
      outcomes: [
        "Improved digital communication flow",
        "Enhanced customer accessibility",
        "Better operational coordination",
        "Stronger enterprise visibility",
        "Scalable infrastructure readiness"
      ],
      insight: "Modern digital infrastructure should function as an operational communication ecosystem rather than only an online presence.",
      images: [
        "/assets/case3_hero.webp",
        "/assets/case3_photo2.webp",
        "/assets/case3_photo3.webp"
      ]
    },
    {
      id: "04",
      title: "Reducing Manual Operational Dependency Through Workflow Automation",
      industry: "Business Operations / Process Management",
      overview: "The organization experienced operational slowdowns caused by repetitive manual processes, reporting delays, and workflow inconsistencies. Aurbient Technologies designed a business process automation environment focused on improving execution efficiency and operational consistency.",
      challenges: [
        "Repetitive manual workflows",
        "Delayed reporting systems",
        "Inconsistent operational execution",
        "High administrative dependency",
        "Limited process visibility",
        "Workflow coordination inefficiencies"
      ],
      strategy: "Aurbient Technologies developed a workflow automation strategy designed to standardize processes and improve operational efficiency across departments. The solution focused on Workflow automation, Process standardization, Operational monitoring, Reporting accessibility, and Centralized coordination systems.",
      components: [
        "Workflow Automation Engine",
        "Process Coordination Layer",
        "Reporting Dashboard",
        "Operational Tracking System",
        "Centralized Process Infrastructure",
        "Task Monitoring Environment"
      ],
      tech: [
        "Automation workflow systems",
        "Centralized operational dashboards",
        "Scalable backend environments",
        "Process tracking infrastructure",
        "Integrated reporting architecture"
      ],
      outcomes: [
        "Reduced manual process dependency",
        "Improved operational execution speed",
        "Better workflow consistency",
        "Enhanced reporting visibility",
        "Increased process coordination efficiency"
      ],
      insight: "Operational efficiency improves significantly when repetitive workflows are standardized and supported through intelligent automation systems.",
      images: [
        "/assets/case4_hero.webp",
        "/assets/case4_photo2.webp",
        "/assets/case4_photo3.webp"
      ]
    },
    {
      id: "05",
      title: "Designing a Centralized ERP & Operational Management Environment",
      industry: "Enterprise Operations / Management Systems",
      overview: "The organization faced operational coordination challenges due to disconnected systems, fragmented data access, and limited reporting visibility. Aurbient Technologies designed a centralized operational management environment focused on improving enterprise visibility, workflow coordination, and reporting accessibility.",
      challenges: [
        "Disconnected operational systems",
        "Fragmented departmental data",
        "Limited reporting visibility",
        "Inefficient management coordination",
        "Lack of centralized workflow monitoring"
      ],
      strategy: "The solution focused on building a scalable ERP-oriented operational ecosystem capable of supporting centralized visibility and structured management workflows. The project emphasized Enterprise coordination, Operational visibility, Role-based accessibility, Reporting infrastructure, and Workflow standardization.",
      components: [
        "ERP-Oriented Workflow System",
        "Operational Management Dashboard",
        "Reporting & Visibility Layer",
        "Department Coordination Environment",
        "Centralized Data Infrastructure",
        "Management Analytics System"
      ],
      tech: [
        "ERP workflow architecture",
        "Cloud-based operational systems",
        "Management visibility dashboards",
        "Scalable reporting infrastructure",
        "Enterprise coordination systems"
      ],
      outcomes: [
        "Improved management visibility",
        "Better inter-department coordination",
        "Centralized operational tracking",
        "Enhanced workflow structure",
        "Improved reporting accessibility"
      ],
      insight: "Enterprise operations become significantly more scalable when workflow systems, reporting environments, and management visibility are unified into a centralized operational ecosystem.",
      images: [
        "/assets/case5_hero.webp",
        "/assets/case5_photo2.webp",
        "/assets/case5_photo3.webp"
      ]
    },
    {
      id: "06",
      title: "Automating Apex Group's Multi-Region Logistics Pipeline",
      industry: "Logistics & Supply Chain",
      overview: "Apex Group faced severe delivery delays due to routing conflicts across multiple geographical regions. Traditional dispatch systems were unable to recalculate paths fast enough to prevent logistical bottlenecks.",
      challenges: [
        "High delivery delay rates",
        "Geographical routing conflicts",
        "Slow path recalculation",
        "Fragmented regional dispatch"
      ],
      strategy: "Aurbient integrated a localized vector retrieval network that processes routing paths in parallel, allowing for real-time conflict resolution before dispatch.",
      components: [
        "Localized Vector Retrieval Network",
        "Parallel Routing Processor",
        "Predictive Dispatch API",
        "Regional Sync Nodes"
      ],
      tech: [
        "Vector databases",
        "Parallel computing architecture",
        "Real-time event processing",
        "Cloud-native deployment"
      ],
      outcomes: [
        "42% Reduction in Delivery Delay Rates",
        "Instant routing conflict resolution",
        "Unified multi-region dispatch",
        "Lower fuel and operational costs"
      ],
      insight: "Localized vector processing allows for real-time dispatch decisions that traditional relational databases cannot support.",
      images: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: "07",
      title: "Deploying Vela Financial's Neural Portfolio Analyzer",
      industry: "Quantitative Finance",
      overview: "Vela Financial needed a way to instantly parse and analyze massive amounts of unstructured earnings call data to uncover hidden alpha indicators before market shifts.",
      challenges: [
        "Massive volumes of unstructured audio/text",
        "High latency in traditional NLP processing",
        "Missed trading opportunities",
        "Inconsistent data extraction"
      ],
      strategy: "We leveraged Aurbient's proprietary pattern map layer to allow Vela to analyze unstructured transcripts globally in under 200 milliseconds.",
      components: [
        "Neural Portfolio Analyzer",
        "Proprietary Pattern Map Layer",
        "High-Frequency Data Ingestion",
        "Semantic Extraction Engine"
      ],
      tech: [
        "Large Language Models (LLMs)",
        "Ultra-low latency architecture",
        "Semantic vector search",
        "Financial modeling algorithms"
      ],
      outcomes: [
        "150+ Alpha Indicators Discovered Weekly",
        "<200ms unstructured data analysis",
        "Significant increase in quantitative yield",
        "Automated earnings call summarization"
      ],
      insight: "Applying neural pattern mapping to unstructured financial data uncovers alpha indicators invisible to traditional quantitative models.",
      images: [
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
      ]
    },
    {
      id: "08",
      title: "Scaling Orbit Space Systems' Realtime Telemetry Nodes",
      industry: "Aerospace Systems",
      overview: "Orbit Space Systems struggled with maintaining telemetry accuracy and data synchronization between orbital satellites and backend databases during periods of high latency.",
      challenges: [
        "High latency telemetry drops",
        "Inconsistent orbital trajectory tracking",
        "Database synchronization failures",
        "Heavy payload data transfers"
      ],
      strategy: "We developed an offline-first client node framework that dynamically synchronizes orbital trajectory files with backend databases via light-weight gRPC packages.",
      components: [
        "Offline-First Client Node Framework",
        "Dynamic Trajectory Synchronizer",
        "gRPC Package Layer",
        "Backend Telemetry Database"
      ],
      tech: [
        "gRPC communication protocols",
        "Offline-first edge architecture",
        "High-availability databases",
        "Aerospace telemetry standards"
      ],
      outcomes: [
        "98% Telemetry Processing Accuracy",
        "Zero data loss during network blackouts",
        "Massively reduced payload sizes",
        "Real-time trajectory synchronization"
      ],
      insight: "Offline-first edge architectures are essential for maintaining data integrity in extreme latency environments like aerospace.",
      images: [
        "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
      ]
    }
  ];

  const { id } = useParams();
  const navigate = useNavigate();

  const selectedCase = id ? caseStudies.find(c => c.id === id) : null;

  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    if (selectedCase) {
      // Preload image to verify validity, falling back cleanly if offline/missing
      const img = new Image();
      img.src = selectedCase.images[0];
      img.onload = () => setHeroImage(selectedCase.images[0]);
      img.onerror = () => {
        setHeroImage(fallbackImages[selectedCase.id]?.[0] || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80");
      };
    }
  }, [selectedCase]);

  const sliderImages = caseStudies.map(cs => fallbackImages[cs.id]?.[0] || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (selectedCase) return;

    // Preload all slider images in the background to prevent flashing
    sliderImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => (prev + 1) % sliderImages.length);
    }, 5000); // Cross-fade slide transition every 5 seconds

    return () => clearInterval(interval);
  }, [selectedCase, sliderImages.length]);

  const renderCaseStudyComponent = (id) => {
    switch (id) {
      case "01":
        return <OperationalVisibility />;
      case "02":
        return <AIWorkflowSystems />;
      case "03":
        return <BusinessOperatingLayer />;
      case "04":
        return <AutomationEcosystems />;
      case "05":
        return <ERPIntelligence />;
      case "06":
        return <Logistics />;
      case "07":
        return <RetailCommerce />;
      case "08":
        return <CloudInfrastructure />;
      default:
        return null;
    }
  };

  if (selectedCase) {
    return (
      <div style={{ position: "relative", minHeight: "100vh" }}>
        {renderCaseStudyComponent(selectedCase.id)}
      </div>
    );
  }

  return (
    <main>
      <section className="hero" style={{ 
        position: "relative", 
        padding: "160px 0 140px", 
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden" 
      }}>
        {/* Smooth Cross-Fading Background Slider */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          {sliderImages.map((imgUrl, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: index === currentSlideIndex ? 1 : 0,
                transform: index === currentSlideIndex ? "scale(1.05)" : "scale(1)",
                transition: "opacity 1.5s ease-in-out, transform 5s ease-out",
                pointerEvents: "none"
              }}
            />
          ))}
        </div>
        {/* Gradient Overlay for high-end readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(14,25,33,0.7) 0%, rgba(14,25,33,0.9) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <div className="hero-badge" style={{ 
              display: "inline-block", 
              marginBottom: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E4F1F3",
              backdropFilter: "blur(10px)"
            }}>Case Studies</div>
            <h1 style={{ 
              fontSize: "4.2rem", 
              lineHeight: "1.1", 
              marginBottom: "24px", 
              color: "#FFFFFF", 
              letterSpacing: "-0.02em",
              textShadow: "0 4px 20px rgba(0,0,0,0.3)"
            }}>Operational Implementations</h1>
            <p style={{ 
              fontSize: "1.25rem", 
              lineHeight: "1.8", 
              color: "#E4F1F3", 
              marginBottom: "0",
              textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              maxWidth: "760px",
              marginLeft: "auto",
              marginRight: "auto"
            }}>
              Detailed architectural breakdowns of how Aurbient Technologies transforms complex operational bottlenecks into streamlined, intelligent ecosystems.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "#F4F9FB" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "30px" }}>
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id} 
                className="eco-card" 
                style={{ cursor: "pointer", transition: "transform 0.3s ease, box-shadow 0.3s ease", display: "flex", flexDirection: "column", height: "100%", padding: 0, overflow: "hidden" }}
                onClick={() => {
                  navigate(`/case-studies/${caseStudy.id}`);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
                }}
              >
                <img 
                  src={caseStudy.images[0]} 
                  alt={caseStudy.title} 
                  style={{ width: "100%", height: "220px", objectFit: "cover" }} 
                  onError={(e) => {
                    e.target.src = fallbackImages[caseStudy.id]?.[0] || "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", textTransform: "uppercase", fontWeight: "600", letterSpacing: "1px", display: "block", marginBottom: "12px" }}>Case Study {caseStudy.id}</span>
                  <h3 style={{ fontSize: "1.4rem", marginBottom: "16px", flex: 1 }}>{caseStudy.title}</h3>
                  <div style={{ color: "#58798C", fontSize: "0.9rem", fontWeight: "600" }}>{caseStudy.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--color-primary)", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "24px" }}>Final Positioning Statement</h2>
          <p style={{ fontSize: "1.2rem", lineHeight: "1.8", opacity: 0.9, marginBottom: "40px" }}>
            Aurbient Technologies focuses on building intelligent operational systems that help businesses improve workflow visibility, automation, scalability, and operational efficiency through modern digital infrastructure and AI-driven transformation.
          </p>
          <Link to="/contact" className="btn-premium" style={{ background: "white", color: "var(--color-primary)" }}>
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
}
