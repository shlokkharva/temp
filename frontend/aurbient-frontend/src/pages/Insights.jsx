import { useEffect, useState, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { getCaseStudies } from "../utils/api";

const pillarsList = [
  {
    id: "operational-intelligence",
    name: "Operational Intelligence",
    icon: "fa-project-diagram",
    color: "#13AAB3",
    description: "Synthesizing fragmented software layers into connected, real-time coordination and reporting environments.",
    themeColor: "rgba(19, 170, 179, 0.1)",
    pillarImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ai-in-business",
    name: "AI in Business",
    icon: "fa-brain",
    color: "#8E44AD",
    description: "Deploying production-grade machine learning and autonomous execution modules that augment team execution.",
    themeColor: "rgba(142, 68, 173, 0.1)",
    pillarImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "workflow-strategy",
    name: "Workflow Strategy",
    icon: "fa-network-wired",
    color: "#2980B9",
    description: "Designing high-performance workflows that orchestrate human talent, API interfaces, and business logic.",
    themeColor: "rgba(41, 128, 185, 0.1)",
    pillarImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "automation-insights",
    name: "Automation Insights",
    icon: "fa-cogs",
    color: "#E67E22",
    description: "Evolving simple repetitive scripts into intelligent, self-healing, and end-to-end automation pipelines.",
    themeColor: "rgba(230, 126, 34, 0.1)",
    pillarImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "business-transformation",
    name: "Business Transformation",
    icon: "fa-chart-line",
    color: "#27AE60",
    description: "Restructuring enterprise business processes, replacing legacy debt with scalable modern operating layers.",
    themeColor: "rgba(39, 174, 96, 0.1)",
    pillarImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "future-infrastructure",
    name: "Future Infrastructure",
    icon: "fa-server",
    color: "#E74C3C",
    description: "Optimizing cloud infrastructure, system layers, database queries, and routing matrices for maximum uptime.",
    themeColor: "rgba(231, 76, 60, 0.1)",
    pillarImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80"
  }
];

const allCaseStudiesList = [
  {
    id: "01",
    client: "Global Manufacturing",
    industry: "Manufacturing & Industrial Operations",
    title: "Improving Production Visibility Through Operational Digitization",
    body: "Designed a centralized operational intelligence dashboard that coordinates telemetry nodes and automates production tracking workflows.",
    result_stat: "35%",
    result_label: "Visibility improvement",
    published: "Oct 2025",
    pillarId: "operational-intelligence"
  },
  {
    id: "02",
    client: "Sales Management Corp.",
    industry: "Business Operations & Sales Management",
    title: "Building an AI-Driven Sales & Management Ecosystem",
    body: "Integrated AI-assisted lead scoring, communication coordination layers, and automated reporting systems to streamline process execution.",
    result_stat: "3x Yield",
    result_label: "Sales execution scaling",
    published: "Nov 2025",
    pillarId: "ai-in-business"
  },
  {
    id: "03",
    client: "Orbit Space Systems",
    industry: "Enterprise & Digital Infrastructure",
    title: "Modernizing Digital Infrastructure for Enterprise Communication",
    body: "Developed a scalable, offline-first client node framework synchronizing trajectories with edge servers via light-weight gRPC packages.",
    result_stat: "98%",
    result_label: "Telemetry processing accuracy",
    published: "Dec 2025",
    pillarId: "future-infrastructure"
  },
  {
    id: "04",
    client: "Process Automation Ltd.",
    industry: "Business Operations & Process Management",
    title: "Reducing Manual Dependency Through Workflow Automation",
    body: "Standardized cross-department execution rules via a custom self-healing automated workflow coordination pipeline.",
    result_stat: "50%",
    result_label: "Friction reduction",
    published: "Jan 2026",
    pillarId: "automation-insights"
  },
  {
    id: "05",
    client: "Delta Enterprise",
    industry: "Enterprise Operations & Management Systems",
    title: "Designing a Centralized ERP & Operational Management Environment",
    body: "Built a robust, ERP-oriented system with role-based accessibility for cross-department coordination and reporting.",
    result_stat: "45%",
    result_label: "Management efficiency",
    published: "Feb 2026",
    pillarId: "business-transformation"
  },
  {
    id: "06",
    client: "Apex Logistics",
    industry: "Logistics & Supply Chain",
    title: "Automating Apex Group's Multi-Region Logistics Pipeline",
    body: "Implemented localized vector retrieval parallel path recalculation dispatch engines that trimmed delivery wait times.",
    result_stat: "42%",
    result_label: "Delivery latency reduction",
    published: "Mar 2026",
    pillarId: "workflow-strategy"
  },
  {
    id: "07",
    client: "Vela Financial",
    industry: "Quantitative Finance",
    title: "Deploying Vela Financial's Neural Portfolio Analyzer",
    body: "Utilized a proprietary neural pattern mapping layer to analyze massive volumes of unstructured audio transcript logs in under 200ms.",
    result_stat: "150+",
    result_label: "Alpha indicators discovered weekly",
    published: "Apr 2026",
    pillarId: "ai-in-business"
  },
  {
    id: "08",
    client: "Orbit Systems",
    industry: "Aerospace Systems",
    title: "Scaling Orbit Space Systems' Realtime Telemetry Nodes",
    body: "Created low-latency trajectories synchronization nodes designed to handle heavy payload data transfers with zero packet loss.",
    result_stat: "<10ms",
    result_label: "Global data sync latency",
    published: "May 2026",
    pillarId: "future-infrastructure"
  }
];

const thoughtArticles = [
  {
    id: "operational-intelligence-article",
    title: "Why Businesses Need Operational Intelligence, Not Just Software",
    category: "Operational Intelligence",
    pillarId: "operational-intelligence",
    date: "May 2026",
    readTime: "5 min read",
    summary: "A strategic analysis of why adding more software applications without a connected operational ecosystem increases fragmentation, and how operational intelligence creates unified infrastructure for modern scale.",
    icon: "fa-project-diagram",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: [
      { type: "paragraph", text: "In today’s business environment, technology adoption is no longer optional. Organizations across industries are investing in websites, dashboards, ERP systems, CRMs, cloud platforms, analytics tools, and automation environments to improve efficiency and remain competitive in rapidly changing markets." },
      { type: "paragraph", text: "However, despite this technological adoption, many businesses continue to face the same operational challenges:" },
      { type: "list", items: [
        "workflow inefficiencies",
        "communication gaps",
        "delayed reporting",
        "fragmented systems",
        "repetitive manual processes",
        "and limited operational visibility"
      ]},
      { type: "highlight", text: "The issue is not always the absence of software. The issue is the absence of operational intelligence." },
      { type: "paragraph", text: "Many organizations implement multiple tools over time without creating a connected operational ecosystem. Teams operate through disconnected spreadsheets, isolated reporting systems, scattered communication channels, and manual coordination processes that reduce efficiency and increase operational complexity." },
      { type: "paragraph", text: "As businesses grow, this fragmentation becomes more expensive." },
      { type: "paragraph", text: "Operational intelligence changes this approach entirely." },
      { type: "paragraph", text: "Instead of viewing technology as separate tools performing isolated functions, operational intelligence focuses on creating integrated systems that improve visibility, coordination, and execution across the organization." },
      { type: "paragraph", text: "Modern businesses require more than software interfaces." },
      { type: "paragraph", text: "They require intelligent operational infrastructure capable of:" },
      { type: "list", items: [
        "connecting workflows",
        "centralizing visibility",
        "improving decision-making",
        "automating repetitive operations",
        "and supporting long-term scalability"
      ]},
      { type: "paragraph", text: "When operational systems are designed correctly, businesses gain the ability to monitor workflows more efficiently, reduce delays, improve communication between departments, and access real-time operational insights." },
      { type: "paragraph", text: "This creates significant improvements in:" },
      { type: "list", items: [
        "production coordination",
        "management reporting",
        "workflow consistency",
        "resource visibility",
        "and execution speed"
      ]},
      { type: "paragraph", text: "One of the biggest challenges many organizations face is operational blindness. Management teams often struggle to obtain accurate and timely operational information because systems are disconnected and reporting depends heavily on manual intervention." },
      { type: "paragraph", text: "This leads to:" },
      { type: "list", items: [
        "slower decisions",
        "delayed responses",
        "operational confusion",
        "and reduced organizational efficiency"
      ]},
      { type: "paragraph", text: "Operational intelligence environments solve these problems by creating centralized visibility systems where data, workflows, reporting, and communication become part of a connected ecosystem." },
      { type: "paragraph", text: "The future of business operations is not about adding more software." },
      { type: "paragraph", text: "It is about creating intelligent operational environments where systems communicate seamlessly and support organizational decision-making at every level." },
      { type: "paragraph", text: "Businesses that adopt operational intelligence successfully position themselves for:" },
      { type: "list", items: [
        "scalability",
        "operational clarity",
        "faster execution",
        "better strategic control",
        "and long-term digital transformation"
      ]},
      { type: "paragraph", text: "At Aurbient Technologies, we believe technology should function as a strategic operational layer inside modern businesses — improving not only digital capability, but also how organizations think, coordinate, and execute." }
    ]
  },
  {
    id: "workflow-architecture-article",
    title: "The Future of Business Automation Is Intelligent Workflow Architecture",
    category: "Workflow Strategy",
    pillarId: "workflow-strategy",
    date: "May 2026",
    readTime: "6 min read",
    summary: "Moving beyond simple task execution. How structured workflow intelligence integrates automation, AI, and reporting to establish consistent execution foundations.",
    icon: "fa-network-wired",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    content: [
      { type: "paragraph", text: "Automation has evolved significantly over the past decade. What once focused primarily on reducing repetitive tasks has now become a central part of modern operational strategy." },
      { type: "paragraph", text: "Today, businesses are no longer asking whether automation is important." },
      { type: "paragraph", text: "They are asking how automation can improve operational scalability, coordination, efficiency, and long-term business growth." },
      { type: "highlight", text: "The answer lies in intelligent workflow architecture." },
      { type: "paragraph", text: "Many organizations still operate with fragmented workflows where departments rely heavily on manual coordination, disconnected communication systems, repetitive reporting processes, and inefficient task management environments." },
      { type: "paragraph", text: "As operational complexity increases, these inefficiencies begin affecting:" },
      { type: "list", items: [
        "productivity",
        "response speed",
        "reporting accuracy",
        "decision-making",
        "and organizational scalability"
      ]},
      { type: "paragraph", text: "Traditional automation approaches often focus only on task execution. However, modern businesses require something far more strategic." },
      { type: "paragraph", text: "They require operational ecosystems capable of intelligently coordinating workflows across the organization." },
      { type: "paragraph", text: "Intelligent workflow architecture is not simply about automating isolated tasks." },
      { type: "paragraph", text: "It is about designing structured operational environments where:" },
      { type: "list", items: [
        "workflows are connected",
        "communication flows efficiently",
        "reporting becomes centralized",
        "and execution processes become scalable"
      ]},
      { type: "paragraph", text: "This shift transforms automation from a productivity tool into a strategic operational infrastructure." },
      { type: "paragraph", text: "Organizations that implement intelligent workflow systems gain significant operational advantages." },
      { type: "paragraph", text: "Teams can coordinate more effectively because workflow visibility improves across departments. Reporting delays are reduced because systems operate through connected data environments. Manual dependencies decrease as automation handles repetitive operational functions." },
      { type: "paragraph", text: "Most importantly, organizations gain operational clarity." },
      { type: "paragraph", text: "Operational clarity allows leadership teams to understand:" },
      { type: "list", items: [
        "where delays occur",
        "where inefficiencies exist",
        "how workflows move",
        "and how systems can be optimized continuously"
      ]},
      { type: "paragraph", text: "This becomes critical for scaling businesses." },
      { type: "paragraph", text: "Without intelligent workflow architecture, growth often creates operational chaos. Teams become overloaded, communication becomes inconsistent, and processes become increasingly difficult to manage." },
      { type: "paragraph", text: "Automation alone does not solve this problem." },
      { type: "highlight", text: "Structured workflow intelligence does." },
      { type: "paragraph", text: "The future of automation is therefore not just about replacing manual work. It is about designing operational ecosystems that support intelligent business execution." },
      { type: "paragraph", text: "Businesses that successfully adopt workflow architecture strategies are able to:" },
      { type: "list", items: [
        "improve coordination",
        "reduce operational friction",
        "enhance execution consistency",
        "increase scalability",
        "and create stronger operational foundations"
      ]},
      { type: "paragraph", text: "Another important shift occurring in modern business environments is the convergence of:" },
      { type: "list", items: [
        "automation",
        "AI",
        "reporting systems",
        "operational dashboards",
        "and centralized infrastructure"
      ]},
      { type: "paragraph", text: "These technologies are no longer functioning independently." },
      { type: "paragraph", text: "They are becoming part of integrated operational intelligence ecosystems capable of supporting real-time business decision-making." },
      { type: "paragraph", text: "At Aurbient Technologies, we focus on building intelligent workflow environments that combine automation, operational visibility, and scalable digital infrastructure to support long-term business transformation and modern operational efficiency." }
    ]
  },
  {
    id: "ai-integration-article",
    title: "AI Integration in Business: Beyond Hype and Into Real Operations",
    category: "AI in Business",
    pillarId: "ai-in-business",
    date: "May 2026",
    readTime: "5 min read",
    summary: "Strategic artificial intelligence implementation focuses on augmenting operational capability rather than replacing teams, combining AI with connected dashboards for real enterprise yield.",
    icon: "fa-brain",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    content: [
      { type: "paragraph", text: "Artificial Intelligence has become one of the most influential technologies shaping modern business environments. Across industries, organizations are exploring AI-powered tools, automation systems, predictive analytics, and intelligent digital platforms to improve efficiency and remain competitive." },
      { type: "paragraph", text: "However, despite the growing interest around AI, many businesses still misunderstand where real value is created." },
      { type: "highlight", text: "Artificial Intelligence is often approached as a trend rather than an operational strategy." },
      { type: "paragraph", text: "This creates a major gap between experimentation and practical business transformation." },
      { type: "paragraph", text: "The most successful AI implementations are not the ones that appear the most futuristic." },
      { type: "paragraph", text: "They are the ones that improve real operational workflows." },
      { type: "paragraph", text: "AI becomes truly valuable when it supports:" },
      { type: "list", items: [
        "operational visibility",
        "workflow optimization",
        "reporting intelligence",
        "communication efficiency",
        "predictive analysis",
        "and decision-support systems"
      ]},
      { type: "paragraph", text: "Modern businesses generate large volumes of operational data every day. Yet much of this information remains underutilized because systems are disconnected and workflows lack intelligent infrastructure." },
      { type: "paragraph", text: "AI integration changes this by transforming raw operational data into actionable intelligence." },
      { type: "paragraph", text: "Organizations can use AI systems to:" },
      { type: "list", items: [
        "identify inefficiencies",
        "improve process monitoring",
        "automate repetitive workflows",
        "support strategic decisions",
        "and optimize operational coordination"
      ]},
      { type: "paragraph", text: "The most effective AI environments are often invisible to the user." },
      { type: "paragraph", text: "They function quietly within business operations, improving efficiency without disrupting existing workflows." },
      { type: "paragraph", text: "This is an important distinction." },
      { type: "highlight", text: "Successful AI implementation is not about replacing people. It is about augmenting operational capability." },
      { type: "paragraph", text: "Businesses that integrate AI strategically allow human teams to focus on:" },
      { type: "list", items: [
        "high-level decision-making",
        "strategy",
        "creativity",
        "and business growth"
      ]},
      { type: "paragraph", text: "while intelligent systems support operational consistency and workflow execution." },
      { type: "paragraph", text: "Another major misconception is that AI alone creates transformation." },
      { type: "paragraph", text: "In reality, AI becomes significantly more powerful when combined with:" },
      { type: "list", items: [
        "workflow architecture",
        "operational automation",
        "centralized reporting systems",
        "cloud infrastructure",
        "and scalable digital ecosystems"
      ]},
      { type: "paragraph", text: "AI should not function as an isolated layer." },
      { type: "paragraph", text: "It should operate as part of a connected operational intelligence environment." },
      { type: "paragraph", text: "This integrated approach allows organizations to create:" },
      { type: "list", items: [
        "faster operational response systems",
        "smarter reporting environments",
        "predictive operational monitoring",
        "intelligent workflow coordination",
        "and scalable business infrastructure"
      ]},
      { type: "paragraph", text: "As businesses continue moving toward digitally connected operations, AI integration will become less about experimentation and more about operational necessity." },
      { type: "paragraph", text: "Organizations that combine:" },
      { type: "list", items: [
        "AI",
        "automation",
        "operational intelligence",
        "and scalable infrastructure"
      ]},
      { type: "paragraph", text: "will gain long-term advantages in efficiency, adaptability, and execution capability." },
      { type: "paragraph", text: "The future of business operations belongs to organizations capable of transforming technology into intelligent operational ecosystems." },
      { type: "paragraph", text: "At Aurbient Technologies, we believe AI should not simply be implemented as technology." },
      { type: "paragraph", text: "It should become part of a larger strategic infrastructure designed to improve how businesses operate, scale, coordinate, and make decisions in an increasingly connected digital environment." }
    ]
  },
  {
    id: "automation-insights-article",
    title: "From Scripting to Systems: The Evolution of Self-Healing Automation Pipelines",
    category: "Automation Insights",
    pillarId: "automation-insights",
    date: "May 2026",
    readTime: "6 min read",
    summary: "Why writing quick scripting loops creates maintenance liabilities, and how modern organizations build self-healing pipelines that intelligently handle event exceptions.",
    icon: "fa-cogs",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    content: [
      { type: "paragraph", text: "Automation has progressed far beyond simple batch scripts running on a local server. In the early days of IT automation, engineers wrote isolated Python, Bash, or PowerShell scripts to handle individual repetitive tasks like backups, file transformations, or API data ingestion." },
      { type: "paragraph", text: "While these scripts solved short-term problems, scaling them across an enterprise reveals critical vulnerabilities:" },
      { type: "list", items: [
        "Lack of centralized observability and logging",
        "Silent failures that corrupt database downstream",
        "Hard-coded API keys and credentials creating security risks",
        "Fragile error handling that breaks at any network latency fluctuation",
        "High maintenance debt as APIs evolve over time"
      ]},
      { type: "highlight", text: "The primary flaw of localized scripting is the lack of system-level intelligence. An automated task must not only execute; it must possess the awareness to heal itself when execution fails." },
      { type: "paragraph", text: "To build resilient digital businesses, we must transition from linear scripting to self-healing automation ecosystems." },
      { type: "paragraph", text: "A self-healing automation pipeline is designed on the principle of inevitable failure. Rather than assuming the network will always be up, the database always responsive, and external APIs always online, it builds robust mitigation strategies into the core architecture:" },
      { type: "list", items: [
        "Exponential backoff retry mechanisms with jitter",
        "Dead-letter queues (DLQ) to isolate failing payload packets",
        "Circuit breakers that temporarily stop requests to failing services to prevent cascading blockages",
        "Real-time state validation steps throughout the data transformation pipeline"
      ]},
      { type: "paragraph", text: "When these elements are combined, the pipeline becomes autonomous. If a network blip occurs during a telemetry sync, the system doesn't crash; it retries intelligently. If an incoming payload contains a malformed field, it doesn't fail silently; it isolates that specific record and alerts operators while keeping other processes running smoothly." },
      { type: "paragraph", text: "This transforms operational teams from reactive fire-fighters into strategic observers, focusing their attention only on systemic edge cases rather than repetitive execution maintenance." },
      { type: "paragraph", text: "At Aurbient Technologies, we design these self-healing architectures as standard operational layers, ensuring that your core workflows remain fully operational 24/7 without manual intervention." }
    ]
  },
  {
    id: "business-transformation-article",
    title: "Architecting the Modern Enterprise: Replacing Legacy Operational Debt",
    category: "Business Transformation",
    pillarId: "business-transformation",
    date: "May 2026",
    readTime: "7 min read",
    summary: "Decoupling from legacy monolithic architecture is the single greatest bottleneck in modern enterprise scaling. Here is the engineering blueprint to replace legacy debt without halting operations.",
    icon: "fa-sync-alt",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80",
    content: [
      { type: "paragraph", text: "For established organizations, digital transformation is rarely about writing code from scratch. Instead, it is a complex migration process: extracting business logic out of rigid legacy databases, monolithic ERP systems, and undocumented manual procedures that have accumulated over decades." },
      { type: "paragraph", text: "This accumulation of outdated digital processes is known as Legacy Operational Debt." },
      { type: "paragraph", text: "Just like financial debt, operational debt incurs high interest. Organizations pay this interest daily in the form of:" },
      { type: "list", items: [
        "Manual spreadsheets to bridge disconnected databases",
        "Slow data synchronizations that delay executive reporting by weeks",
        "Security risks from unpatched, deprecated legacy servers",
        "An inability to adopt modern technologies like AI and low-latency API streams"
      ]},
      { type: "highlight", text: "True business transformation is not achieved by wrapping legacy systems in a modern front-end. It requires systematically replacing the underlying data and communication layers." },
      { type: "paragraph", text: "Many transformation projects fail because they attempt a 'big-bang' migration—attempting to replace the entire system at once. This creates immense operational risk and often leads to budget overruns or business disruption." },
      { type: "paragraph", text: "The engineering solution is the 'Strangler Fig' pattern: gradually replacing specific functions of the legacy monolith with modern micro-services, APIs, and data sync layers until the old system can be safely decommissioned." },
      { type: "paragraph", text: "To execute this transition successfully, organizations must focus on three core pillars:" },
      { type: "list", items: [
        "Establishing a unified API gateway to decouple the frontend from backend legacy layers",
        "Deploying real-time change-data-capture (CDC) pipelines to sync databases without downtime",
        "Empowering teams with self-service reporting dashboards, eliminating manual data requests"
      ]},
      { type: "paragraph", text: "By taking this gradual, architectural approach, businesses can modernize their digital infrastructure while maintaining full operational continuity, turning digital transformation from a high-risk gamble into a structured, highly predictable engineering roadmap." },
      { type: "paragraph", text: "Aurbient Technologies collaborates with scaling enterprises to navigate this exact transition, designing high-velocity operating layers that integrate seamlessly with existing legacy layers while building the foundation for tomorrow's scale." }
    ]
  },
  {
    id: "future-infrastructure-article",
    title: "Edge Ingestion and Global Telemetry: Scaling Multi-Region Compute",
    category: "Future Infrastructure",
    pillarId: "future-infrastructure",
    date: "May 2026",
    readTime: "6 min read",
    summary: "An analysis of low-latency ingestion protocols, edge compute clusters, and offline-first client node architectures for highly resilient global data synchronizations.",
    icon: "fa-server",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    content: [
      { type: "paragraph", text: "As physical and digital operations merge, the volume of telemetry data generated at the physical edge is skyrocketing. Modern industrial plants, smart warehouse logistics networks, global retail storefronts, and automated assembly operations generate gigabytes of sensor readings and transaction events every single second." },
      { type: "paragraph", text: "Attempting to route all this raw data back to a single centralized cloud data center introduces severe problems:" },
      { type: "list", items: [
        "Network latency bottlenecks that delay critical failure alerts",
        "High bandwidth costs from transmitting redundant, uncompressed raw telemetry",
        "Complete operational vulnerability if the connection to the central cloud is lost"
      ]},
      { type: "highlight", text: "The next generation of enterprise scaling demands a hybrid edge architecture. We must process, filter, and act on data where it is generated, syncing to the cloud only what is strategically necessary." },
      { type: "paragraph", text: "This is the essence of modern Edge Ingestion and Global Telemetry." },
      { type: "paragraph", text: "By deploying edge compute nodes directly inside the physical factory floor or local retail depots, we enable sub-millisecond response times. An anomaly in an assembly robot can trigger an immediate stop locally without waiting for a cloud round-trip, preventing expensive machine damage." },
      { type: "paragraph", text: "To scale edge architectures globally, engineering teams must deploy advanced synchronization patterns:" },
      { type: "list", items: [
        "MQTT and gRPC protocols for highly compressed, low-overhead event streaming",
        "Conflict-Free Replicated Data Types (CRDTs) to handle concurrent multi-region database writes gracefully",
        "Offline-first database synchronization that stores data locally during outages and syncs automatically upon reconnection"
      ]},
      { type: "paragraph", text: "By distributing intelligence between the cloud and the edge, businesses achieve absolute operational resilience. The local plant remains fully operational even during global cloud connection drops, and reconnects seamlessly when the network returns." },
      { type: "paragraph", text: "At Aurbient Technologies, we build these high-performance, edge-capable ingestion frameworks to future-proof global enterprise operations, bringing cloud scalability to local physical environments." }
    ]
  }
];

export default function Insights() {
  const insightsSliderImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80"
  ];
  
  const [currentInsightsSlideIndex, setCurrentInsightsSlideIndex] = useState(0);

  useEffect(() => {
    // Preload slider images
    insightsSliderImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentInsightsSlideIndex(prev => (prev + 1) % insightsSliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview"); // 'overview' | 'case-studies' | 'articles' | 'pillars'
  const [activeArticle, setActiveArticle] = useState(null);
  const [readProgress, setReadProgress] = useState(0);
  const articleScrollRef = useRef(null);
  const [selectedPillar, setSelectedPillar] = useState("operational-intelligence");
  const location = useLocation();

  const isFirstRender = useRef(true);

  // Smooth scroll to the taxonomy/content area on tab switches so the viewport doesn't get stuck showing the footer
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const contentElement = document.getElementById("insights-content-anchor");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeTab]);

  // ESC key to close article modal
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") setActiveArticle(null); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const handleArticleScroll = (e) => {
    const el = e.target;
    const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
    setReadProgress(Math.min(100, Math.round(pct)));
  };

  const openArticle = (article) => {
    setActiveArticle(article);
    setReadProgress(0);
    setTimeout(() => {
      if (articleScrollRef.current) articleScrollRef.current.scrollTop = 0;
    }, 50);
  };

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
    }
    if (location.state?.pillarId) {
      setSelectedPillar(location.state.pillarId);
    }
    if (location.state?.articleId) {
      const art = thoughtArticles.find(a => a.id === location.state.articleId);
      if (art) {
        setActiveArticle(art);
      }
    }
  }, [location]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const data = await getCaseStudies();
        const combined = [...allCaseStudiesList];
        if (data && data.length > 0) {
          data.forEach(item => {
            if (!combined.some(c => c.title === item.title)) {
              combined.push(item);
            }
          });
        }
        setCases(combined);
      } catch(e) {
        setCases(allCaseStudiesList);
      }
      setLoading(false);
    };
    fetchCases();
  }, []);

  // Filter content based on active pillar
  const getFilteredArticles = (pillarId) => {
    return thoughtArticles.filter(a => a.pillarId === pillarId);
  };

  const getFilteredCases = (pillarId) => {
    const activeCases = cases.length > 0 ? cases : allCaseStudiesList;
    return activeCases.filter(c => c.pillarId === pillarId);
  };

  return (
    <main style={{ minHeight: "100vh", background: "#FAFCFB" }}>
      {/* Immersive Article Modal Reader */}
      {activeArticle && (
        <div
          style={{
            position: "fixed", inset: 0,
            background: "rgba(10, 18, 24, 0.75)",
            backdropFilter: "blur(24px)",
            zIndex: 99999, display: "flex",
            justifyContent: "center", alignItems: "center",
            padding: "20px",
            animation: "modalFadeIn 0.3s ease-out"
          }}
          onClick={(e) => { if (e.target === e.currentTarget) setActiveArticle(null); }}
        >
          <style>{`
            @keyframes modalFadeIn { from { opacity:0 } to { opacity:1 } }
            @keyframes modalSlideUp { from { transform:translateY(48px); opacity:0 } to { transform:translateY(0); opacity:1 } }
            @keyframes progressGlow { 0%,100%{box-shadow:0 0 8px rgba(19,170,179,0.4)} 50%{box-shadow:0 0 16px rgba(19,170,179,0.7)} }
            .article-scroll::-webkit-scrollbar { width: 6px; }
            .article-scroll::-webkit-scrollbar-track { background: #F4F9FB; }
            .article-scroll::-webkit-scrollbar-thumb { background: #C8DDE5; border-radius: 10px; }
            .article-scroll::-webkit-scrollbar-thumb:hover { background: var(--color-accent); }
          `}</style>

          <div style={{
            background: "#FFFFFF",
            width: "100%", maxWidth: "860px",
            height: "92vh", borderRadius: "28px",
            boxShadow: "0 40px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05)",
            overflow: "hidden", display: "flex", flexDirection: "column",
            position: "relative",
            animation: "modalSlideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>

            {/* Reading Progress Bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#E2EBE7", zIndex: 10, flexShrink: 0 }}>
              <div style={{
                height: "100%",
                width: `${readProgress}%`,
                background: "linear-gradient(90deg, #13AAB3, #0F8C94)",
                transition: "width 0.15s ease",
                animation: readProgress > 0 && readProgress < 100 ? "progressGlow 2s infinite" : "none",
                borderRadius: "0 3px 3px 0"
              }} />
            </div>

            {/* Top Navigation Bar */}
            <div style={{
              padding: "18px 32px",
              background: "#FFFFFF",
              borderBottom: "1px solid #EDF2F4",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexShrink: 0, marginTop: "3px"
            }}>
              <button
                onClick={() => setActiveArticle(null)}
                style={{
                  background: "#F4F9FB", border: "1.5px solid #E2EBE7",
                  color: "#395568", fontSize: "0.9rem", fontWeight: "600",
                  cursor: "pointer", display: "flex", alignItems: "center",
                  gap: "8px", padding: "8px 18px", borderRadius: "30px",
                  transition: "all 0.2s"
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = "var(--color-primary)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "var(--color-primary)"; }}
                onMouseOut={(e) => { e.currentTarget.style.background = "#F4F9FB"; e.currentTarget.style.color = "#395568"; e.currentTarget.style.borderColor = "#E2EBE7"; }}
              >
                <i className="fas fa-arrow-left"></i> All Articles
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  fontSize: "0.72rem", textTransform: "uppercase", fontWeight: "700",
                  letterSpacing: "1.2px", background: "rgba(19,170,179,0.08)",
                  color: "var(--color-accent)", padding: "5px 14px", borderRadius: "20px",
                  border: "1px solid rgba(19,170,179,0.2)"
                }}>{activeArticle.category}</span>
                <span style={{ fontSize: "0.82rem", color: "#87A4B6", fontWeight: "500", display: "flex", alignItems: "center", gap: "5px" }}>
                  <i className="fas fa-clock" style={{ fontSize: "0.75rem" }}></i> {activeArticle.readTime}
                </span>
                <span style={{ fontSize: "0.82rem", color: readProgress === 100 ? "#27AE60" : "#A0B5C1", fontWeight: "600", display: "flex", alignItems: "center", gap: "5px", transition: "color 0.3s" }}>
                  {readProgress === 100 ? <><i className="fas fa-check-circle"></i> Done</> : `${readProgress}%`}
                </span>
              </div>
            </div>

            {/* Scrollable Reading Area */}
            <div
              ref={articleScrollRef}
              className="article-scroll"
              onScroll={handleArticleScroll}
              style={{ overflowY: "auto", flex: 1, lineHeight: "1.9" }}
            >
              {/* Cinematic Cover Image with gradient overlay */}
              <div style={{ width: "100%", height: "320px", position: "relative", overflow: "hidden" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url(${activeArticle.image})`,
                  backgroundSize: "cover", backgroundPosition: "center"
                }} />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(14,25,33,0.92) 0%, rgba(14,25,33,0.3) 60%, transparent 100%)"
                }} />
                {/* Category badge on image */}
                <div style={{ position: "absolute", bottom: "28px", left: "40px", zIndex: 2 }}>
                  <span style={{
                    background: "var(--color-accent)", color: "var(--color-primary)",
                    padding: "6px 16px", borderRadius: "20px",
                    fontSize: "0.75rem", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase"
                  }}><i className={`fas ${activeArticle.icon}`} style={{ marginRight: "6px" }}></i>{activeArticle.category}</span>
                </div>
              </div>

              {/* Article Body */}
              <div style={{ padding: "44px 52px 20px" }}>
                {/* Author / Meta row */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px", paddingBottom: "24px", borderBottom: "1px solid #EDF2F4" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "linear-gradient(135deg, var(--color-primary), #13AAB3)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "1.1rem", flexShrink: 0 }}>
                    <i className="fas fa-pen-nib"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: "700", color: "var(--color-primary)", fontSize: "0.95rem" }}>Aurbient Technologies</div>
                    <div style={{ fontSize: "0.82rem", color: "#87A4B6" }}>Thought Leadership &middot; {activeArticle.date} &middot; {activeArticle.readTime}</div>
                  </div>
                </div>

                <h1 style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: "800", lineHeight: "1.2",
                  color: "var(--color-primary)",
                  marginBottom: "12px", letterSpacing: "-0.02em"
                }}>{activeArticle.title}</h1>

                <p style={{ fontSize: "1.15rem", color: "#87A4B6", fontStyle: "italic", marginBottom: "40px", lineHeight: "1.6", borderLeft: "3px solid var(--color-accent)", paddingLeft: "16px" }}>
                  {activeArticle.summary}
                </p>

                {activeArticle.content.map((block, i) => {
                  if (block.type === "paragraph") {
                    return <p key={i} style={{ fontSize: "1.1rem", color: "#2C4558", marginBottom: "22px", lineHeight: "1.9" }}>{block.text}</p>;
                  }
                  if (block.type === "highlight") {
                    return (
                      <div key={i} style={{
                        background: "linear-gradient(135deg, #0E1921 0%, #1A2D3A 100%)",
                        color: "#FFFFFF", padding: "32px 40px",
                        borderRadius: "20px", fontSize: "1.2rem",
                        fontWeight: "500", lineHeight: "1.65",
                        margin: "36px 0",
                        boxShadow: "0 15px 40px rgba(14,25,33,0.15)",
                        borderLeft: "4px solid var(--color-accent)",
                        position: "relative", overflow: "hidden"
                      }}>
                        <div style={{ position: "absolute", top: "-10px", right: "20px", fontSize: "80px", opacity: 0.06, color: "var(--color-accent)" }}>
                          <i className="fas fa-quote-right"></i>
                        </div>
                        <i className="fas fa-quote-left" style={{ color: "var(--color-accent)", marginRight: "12px", opacity: 0.8 }}></i>
                        {block.text}
                      </div>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <div key={i} style={{ background: "#F8FCFD", border: "1px solid #E2EBE7", borderRadius: "16px", padding: "24px 28px", margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        {block.items.map((item, idx) => (
                          <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "14px", fontSize: "1.05rem", color: "#2C4558" }}>
                            <span style={{ color: "var(--color-accent)", fontSize: "0.85rem", marginTop: "4px", flexShrink: 0, background: "rgba(19,170,179,0.1)", width: "24px", height: "24px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <i className="fas fa-check"></i>
                            </span>
                            <span style={{ lineHeight: "1.6" }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                })}

                {/* Bottom CTA Banner */}
                <div style={{ marginTop: "52px", background: "linear-gradient(135deg, var(--color-primary) 0%, #1A3344 100%)", borderRadius: "20px", padding: "36px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
                  <div>
                    <div style={{ color: "var(--color-accent)", fontSize: "0.8rem", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>Ready to Transform Your Operations?</div>
                    <div style={{ color: "white", fontSize: "1.15rem", fontWeight: "600" }}>Talk to our engineering team about implementing these strategies.</div>
                  </div>
                  <a href="#/contact" onClick={() => setActiveArticle(null)} style={{ background: "var(--color-accent)", color: "var(--color-primary)", padding: "12px 28px", borderRadius: "30px", fontWeight: "700", textDecoration: "none", fontSize: "0.95rem", whiteSpace: "nowrap", flexShrink: 0 }}>
                    Get in Touch <i className="fas fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                  </a>
                </div>

                {/* Next Article Suggestion */}
                {(() => {
                  const currentIdx = thoughtArticles.findIndex(a => a.id === activeArticle.id);
                  const next = thoughtArticles[(currentIdx + 1) % thoughtArticles.length];
                  return (
                    <div style={{ marginTop: "32px", marginBottom: "20px" }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: "700", color: "#87A4B6", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "14px" }}>Continue Reading</div>
                      <div
                        onClick={() => openArticle(next)}
                        style={{ display: "flex", alignItems: "center", gap: "20px", background: "white", border: "1.5px solid #E2EBE7", borderRadius: "16px", padding: "18px 24px", cursor: "pointer", transition: "all 0.25s" }}
                        onMouseOver={(e) => { e.currentTarget.style.borderColor = "var(--color-accent)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(19,170,179,0.08)"; }}
                        onMouseOut={(e) => { e.currentTarget.style.borderColor = "#E2EBE7"; e.currentTarget.style.boxShadow = "none"; }}
                      >
                        <div style={{ width: "64px", height: "64px", borderRadius: "12px", backgroundImage: `url(${next.image})`, backgroundSize: "cover", backgroundPosition: "center", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "0.75rem", color: "var(--color-accent)", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>{next.category}</div>
                          <div style={{ fontSize: "1rem", fontWeight: "700", color: "var(--color-primary)", lineHeight: "1.35" }}>{next.title}</div>
                        </div>
                        <i className="fas fa-chevron-right" style={{ color: "var(--color-accent)", flexShrink: 0 }}></i>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Footer bar */}
            <div style={{
              padding: "14px 32px",
              background: "#F8FCFD",
              borderTop: "1px solid #EDF2F4",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexShrink: 0
            }}>
              <span style={{ fontSize: "0.8rem", color: "#A0B5C1", fontWeight: "500" }}>Aurbient Intelligence &middot; {activeArticle.date}</span>
              <button
                onClick={() => setActiveArticle(null)}
                style={{ background: "var(--color-primary)", color: "#FFFFFF", border: "none", padding: "9px 22px", borderRadius: "30px", fontWeight: "600", cursor: "pointer", fontSize: "0.9rem", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "8px" }}
                onMouseOver={(e) => e.currentTarget.style.background = "var(--color-accent)"}
                onMouseOut={(e) => e.currentTarget.style.background = "var(--color-primary)"}
              >
                <i className="fas fa-times"></i> Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Immersive Cinematic Hero Header */}
      <section className="hero case-study-hero" style={{ 
        position: "relative", 
        padding: "80px 0 120px", 
        minHeight: "55vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden" 
      }}>
        {/* Smooth Cross-Fading Background Slider */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          {insightsSliderImages.map((imgUrl, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: index === currentInsightsSlideIndex ? 1 : 0,
                transform: index === currentInsightsSlideIndex ? "scale(1.04)" : "scale(1)",
                transition: "opacity 1.5s ease-in-out, transform 5s ease-out",
                pointerEvents: "none"
              }}
            />
          ))}
        </div>

        {/* Cinematic Dark Gradient Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(14,25,33,0.75) 0%, rgba(14,25,33,0.95) 100%)",
          zIndex: 1
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="hero-text" style={{ textAlign: "center", maxWidth: "850px", margin: "0 auto" }}>
            <div className="hero-badge" style={{
              display: "inline-block",
              marginBottom: "24px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#E4F1F3",
              padding: "6px 16px",
              borderRadius: "30px",
              fontSize: "0.85rem",
              fontWeight: "600",
              letterSpacing: "1px",
              textTransform: "uppercase",
              backdropFilter: "blur(10px)"
            }}>Resource Center</div>
            
            <h1 style={{ 
              fontSize: "3.8rem", 
              fontWeight: "700", 
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "20px",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)"
            }}>Aurbient Intelligence</h1>
            
            <p style={{ 
              margin: "0 auto 36px", 
              fontSize: "1.25rem", 
              color: "#E4F1F3",
              textShadow: "0 2px 10px rgba(0,0,0,0.4)",
              lineHeight: "1.7",
              maxWidth: "760px"
            }}>
              Explore operational intelligence frameworks, case studies, and engineering strategies designed to coordinate modern enterprise execution.
            </p>
            
            {/* Premium Glassmorphic Tab Selector */}
            <div style={{
              display: "inline-flex",
              background: "rgba(255, 255, 255, 0.08)",
              padding: "6px",
              borderRadius: "40px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
              border: "1.5px solid rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(20px)",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "4px"
            }}>
              <button
                onClick={() => setActiveTab("overview")}
                onMouseEnter={(e) => {
                  if (activeTab !== "overview") e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "overview") e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                }}
                style={{
                  padding: "10px 22px",
                  borderRadius: "30px",
                  border: "none",
                  background: activeTab === "overview" ? "var(--color-accent)" : "none",
                  color: activeTab === "overview" ? "var(--color-primary)" : "rgba(255, 255, 255, 0.75)",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fas fa-th-large"></i> Overview
              </button>
              
              <button
                onClick={() => setActiveTab("articles")}
                onMouseEnter={(e) => {
                  if (activeTab !== "articles") e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "articles") e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                }}
                style={{
                  padding: "10px 22px",
                  borderRadius: "30px",
                  border: "none",
                  background: activeTab === "articles" ? "var(--color-accent)" : "none",
                  color: activeTab === "articles" ? "var(--color-primary)" : "rgba(255, 255, 255, 0.75)",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fas fa-file-alt"></i> Thought Leadership ({thoughtArticles.length})
              </button>
              
              <button
                onClick={() => setActiveTab("pillars")}
                onMouseEnter={(e) => {
                  if (activeTab !== "pillars") e.currentTarget.style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== "pillars") e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                }}
                style={{
                  padding: "10px 22px",
                  borderRadius: "30px",
                  border: "none",
                  background: activeTab === "pillars" ? "var(--color-accent)" : "none",
                  color: activeTab === "pillars" ? "var(--color-primary)" : "rgba(255, 255, 255, 0.75)",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <i className="fas fa-project-diagram"></i> Taxonomy Pillars ({pillarsList.length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main content display section */}
      <section id="insights-content-anchor" style={{ padding: "60px 0 100px" }}>
        <div className="container">
          
          {/* TAB 1: INSIGHTS OVERVIEW HUB */}
          {activeTab === "overview" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              {/* Featured article showcase block */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
                marginBottom: "70px"
              }}>
                {/* Featured Big Card */}
                <div 
                  className="featured-insight-card"
                  style={{
                    gridColumn: "span 2",
                    background: "white",
                    borderRadius: "24px",
                    border: "1.5px solid #E2EBE7",
                    padding: "48px",
                    boxShadow: "0 10px 35px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "40px",
                    position: "relative",
                    overflow: "hidden",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ position: "absolute", top: 0, right: 0, width: "300px", height: "300px", background: "radial-gradient(circle, rgba(19,170,179,0.04) 0%, rgba(255,255,255,0) 70%)", zIndex: 0 }}></div>
                  
                  {/* Left Column: Text & CTA */}
                  <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 1 }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                        <span style={{ background: "rgba(19, 170, 179, 0.1)", color: "var(--color-accent)", padding: "4px 12px", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "700" }}>FEATURED ARTICLE</span>
                        <span style={{ fontSize: "0.85rem", color: "#87A4B6" }}>May 2026 &middot; 5 min read</span>
                      </div>
                      <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)", lineHeight: "1.3", marginBottom: "20px" }}>
                        Why Businesses Need Operational Intelligence, Not Just Software
                      </h2>
                      <p style={{ fontSize: "1.1rem", color: "#58798C", lineHeight: "1.7", marginBottom: "32px" }}>
                        In today’s business environment, technology adoption is no longer optional. However, organizations implement multiple tools over time without creating a connected operational ecosystem. Read why operational intelligence, rather than isolated software systems, is the ultimate growth layer.
                      </p>
                    </div>
                    <button 
                      onClick={() => openArticle(thoughtArticles[0])}
                      style={{
                        alignSelf: "flex-start",
                        background: "var(--color-primary)",
                        color: "#FFFFFF",
                        border: "none",
                        padding: "12px 28px",
                        borderRadius: "30px",
                        fontWeight: "600",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        boxShadow: "0 4px 15px rgba(17,35,48,0.1)",
                        transition: "all 0.2s"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = "var(--color-accent)"}
                      onMouseOut={(e) => e.currentTarget.style.background = "var(--color-primary)"}
                    >
                      Read Immersive Article <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>

                  {/* Right Column: Visual Cover Image */}
                  <div style={{ flex: "1 1 250px", minHeight: "260px", zIndex: 1, position: "relative" }}>
                    <div style={{
                      width: "100%",
                      height: "100%",
                      minHeight: "260px",
                      borderRadius: "16px",
                      backgroundImage: `url(${thoughtArticles[0].image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      overflow: "hidden"
                    }} />
                  </div>
                </div>

                {/* Sidebar Recent Dynamic Proofs */}
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "8px" }}>Recent Deployments</h3>
                  
                  {cases.slice(0, 2).map((study, idx) => (
                    <div key={idx} style={{
                      background: "white",
                      borderRadius: "16px",
                      border: "1.5px solid #E2EBE7",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: "16px",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.01)"
                    }}>
                      <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                          <span style={{ fontSize: "0.8rem", color: "var(--color-accent)", fontWeight: "700" }}>{study.client}</span>
                          <span style={{ fontSize: "0.75rem", color: "#A0B5C1" }}>{study.published}</span>
                        </div>
                        <h4 style={{ fontSize: "1.05rem", fontWeight: "600", color: "var(--color-primary)", lineHeight: "1.4", margin: 0 }}>{study.title}</h4>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", background: "#F4F9FB", padding: "8px 14px", borderRadius: "8px", border: "1px solid #E2EBE7", width: "fit-content" }}>
                        <span style={{ fontWeight: "700", color: "var(--color-accent)", fontSize: "1.2rem" }}>{study.result_stat}</span>
                        <span style={{ fontSize: "0.75rem", color: "#58798C" }}>{study.result_label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Six core pillars presentation */}
              <div style={{ borderTop: "1.5px solid #E2EBE7", paddingTop: "60px" }}>
                <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 50px" }}>
                  <h2 style={{ fontSize: "2.2rem", fontWeight: "700", color: "var(--color-primary)" }}>Our Operational Taxonomy</h2>
                  <p style={{ color: "#58798C" }}>Click any category card below to browse all strategic studies and research corresponding to that operating discipline.</p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "30px" }}>
                  {pillarsList.map((pillar) => (
                    <div 
                      key={pillar.id}
                      onClick={() => {
                        setSelectedPillar(pillar.id);
                        setActiveTab("pillars");
                      }}
                      style={{
                        background: "white",
                        borderRadius: "16px",
                        border: "1.5px solid #E2EBE7",
                        padding: 0,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        overflow: "hidden"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.borderColor = pillar.color;
                        e.currentTarget.style.boxShadow = `0 12px 30px rgba(0,0,0,0.04)`;
                        const img = e.currentTarget.querySelector(".pillar-card-image");
                        if (img) img.style.transform = "scale(1.05)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.borderColor = "#E2EBE7";
                        e.currentTarget.style.boxShadow = "none";
                        const img = e.currentTarget.querySelector(".pillar-card-image");
                        if (img) img.style.transform = "scale(1)";
                      }}
                    >
                      {/* Top cover image banner */}
                      <div style={{ height: "140px", overflow: "hidden" }}>
                        <div 
                          className="pillar-card-image"
                          style={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${pillar.pillarImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transition: "transform 0.5s ease"
                          }}
                        />
                      </div>

                      <div style={{ padding: "24px 30px 30px 30px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>{pillar.name}</h3>
                        <p style={{ color: "#58798C", fontSize: "0.95rem", lineHeight: "1.6", margin: 0, flex: 1 }}>{pillar.description}</p>
                        
                        <div style={{ marginTop: "30px", paddingTop: "20px", borderTop: "1.5px solid #F4F9FB", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem" }}>
                          <span style={{ color: pillar.color, fontWeight: "700" }}>EXPLORE CATEGORY</span>
                          <span style={{ color: "var(--color-primary)", fontWeight: "600" }}><i className="fas fa-arrow-right"></i></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DETAILED CASE STUDIES */}
          {activeTab === "case-studies" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              {loading ? (
                <div style={{ textAlign: "center", padding: "60px", fontSize: "1.1rem", color: "#58798C" }}>Loading insights...</div>
              ) : (
                <div className="ecosystem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '30px' }}>
                  {cases.map((study, index) => (
                    <div key={index} className="eco-card" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', background: "white", borderRadius: "16px", border: "1.5px solid #E2EBE7", boxShadow: "0 8px 30px rgba(0,0,0,0.03)" }}>
                      <div style={{ height: "180px", background: "linear-gradient(135deg, #E4F1F3 0%, #D4EBF0 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <i className="fas fa-chart-bar" style={{ fontSize: "3rem", color: "var(--color-accent)", opacity: 0.7 }}></i>
                        <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(17,35,48,0.85)", backdropFilter: "blur(4px)", padding: "6px 12px", borderRadius: "8px", color: "white" }}>
                          <span style={{ fontSize: "0.7rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-accent)", display: "block", letterSpacing: "0.5px" }}>{study.client}</span>
                          <span style={{ fontSize: "0.75rem", color: "#A7BCC7" }}>{study.industry}</span>
                        </div>
                      </div>
                      <div style={{ padding: "30px", display: "flex", flexDirection: "column", flex: 1 }}>
                        <h3 style={{ margin: "0 0 12px", fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)" }}>{study.title}</h3>
                        <p style={{ color: "#395568", marginBottom: "24px", fontSize: "0.95rem", lineHeight: "1.6" }}>{study.body}</p>
                        
                        <div style={{ marginTop: "auto", background: "#F4F9FB", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "16px", border: "1px solid #E2EBE7" }}>
                          <span style={{ fontSize: "2rem", fontWeight: "700", color: "var(--color-accent)" }}>{study.result_stat}</span>
                          <span style={{ fontSize: "0.85rem", color: "#58798C", lineHeight: "1.2", fontWeight: "500" }}>{study.result_label}</span>
                        </div>
                        <div style={{ marginTop: "24px", fontSize: "0.75rem", color: "#A0B5C1", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ fontWeight: "600", color: "#87A4B6" }}>DEPLOYMENT VERIFIED</span>
                          <span>Published &middot; {study.published}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: THOUGHT LEADERSHIP ARTICLES */}
          {activeTab === "articles" && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px', animation: "fadeIn 0.3s ease-out" }}>
              {thoughtArticles.map((article) => (
                <div 
                  key={article.id} 
                  className="eco-card" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    padding: 0, 
                    background: "white", 
                    borderRadius: "16px", 
                    border: "1.5px solid #E2EBE7", 
                    boxShadow: "0 8px 30px rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                  onClick={() => openArticle(article)}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.borderColor = "var(--color-accent)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(19, 170, 179, 0.08)";
                    const img = e.currentTarget.querySelector(".article-card-image");
                    if (img) img.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.borderColor = "#E2EBE7";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.03)";
                    const img = e.currentTarget.querySelector(".article-card-image");
                    if (img) img.style.transform = "scale(1)";
                  }}
                >
                  <div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
                    <div 
                      className="article-card-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${article.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease"
                      }}
                    />
                    {/* Icon Badge Overlay */}
                    <div style={{
                      position: "absolute",
                      bottom: "-20px",
                      right: "24px",
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "white",
                      color: "var(--color-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                      border: "1px solid #E2EBE7",
                      zIndex: 2
                    }}>
                      <i className={`fas ${article.icon}`}></i>
                    </div>
                  </div>

                  <div style={{ padding: "30px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <span style={{
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "var(--color-accent)",
                      letterSpacing: "1px",
                      marginBottom: "12px",
                      display: "block"
                    }}>{article.category}</span>
                    <h3 style={{
                      fontSize: "1.45rem",
                      fontWeight: "700",
                      color: "var(--color-primary)",
                      lineHeight: "1.3",
                      margin: "0 0 16px 0",
                      flex: "0 0 auto"
                    }}>{article.title}</h3>
                    <p style={{
                      color: "#58798C",
                      fontSize: "0.98rem",
                      lineHeight: "1.6",
                      margin: "0 0 28px 0",
                      flex: 1
                    }}>{article.summary}</p>
                    
                    <div style={{
                      marginTop: "auto",
                      paddingTop: "20px",
                      borderTop: "1px solid #E2EBE7",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}>
                      <span style={{ fontSize: "0.85rem", color: "#A0B5C1", fontWeight: "500" }}>{article.readTime}</span>
                      <span style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}>
                        Read Article <i className="fas fa-chevron-right" style={{ fontSize: "0.75rem", color: "var(--color-accent)" }}></i>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: TAXONOMY CATEGORIES FILTER HUB */}
          {activeTab === "pillars" && (
            <div style={{ animation: "fadeIn 0.3s ease-out" }}>
              
              {/* Pillar Selector Sidebar Row */}
              <div style={{
                display: "flex",
                overflowX: "auto",
                gap: "12px",
                paddingBottom: "24px",
                marginBottom: "40px",
                borderBottom: "1.5px solid #E2EBE7"
              }}>
                {pillarsList.map((pillar) => {
                  const isActive = selectedPillar === pillar.id;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setSelectedPillar(pillar.id)}
                      style={{
                        padding: "12px 24px",
                        borderRadius: "30px",
                        border: "1.5px solid",
                        borderColor: isActive ? pillar.color : "#E2EBE7",
                        background: isActive ? pillar.themeColor : "white",
                        color: isActive ? "var(--color-primary)" : "#58798C",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "all 0.2s"
                      }}
                    >
                      <i className={`fas ${pillar.icon}`} style={{ color: pillar.color }}></i>
                      {pillar.name}
                    </button>
                  );
                })}
              </div>

              {/* Selected Pillar Highlight Information Panel */}
              {(() => {
                const currentPillar = pillarsList.find(p => p.id === selectedPillar) || pillarsList[0];
                const matchingArticles = getFilteredArticles(selectedPillar);
                const matchingCases = getFilteredCases(selectedPillar);

                return (
                  <div>
                    <div style={{
                      background: "white",
                      borderRadius: "20px",
                      border: "1.5px solid #E2EBE7",
                      padding: "40px",
                      marginBottom: "50px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.01)"
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
                        <div style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "16px",
                          background: currentPillar.themeColor,
                          color: currentPillar.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.8rem"
                        }}>
                          <i className={`fas ${currentPillar.icon}`}></i>
                        </div>
                        <div>
                          <h2 style={{ fontSize: "1.8rem", fontWeight: "700", color: "var(--color-primary)", margin: 0 }}>{currentPillar.name}</h2>
                          <span style={{ fontSize: "0.85rem", color: "#87A4B6" }}>Taxonomy Pillar Filter</span>
                        </div>
                      </div>
                      <p style={{ color: "#395568", fontSize: "1.1rem", lineHeight: "1.7", margin: 0, maxWidth: "800px" }}>
                        {currentPillar.description}
                      </p>
                    </div>

                    {/* Dual side-by-side feed matching articles and studies */}
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                      gap: "40px"
                    }}>
                      {/* Left: Articles */}
                      <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "24px", borderBottom: "2px solid #13AAB3", paddingBottom: "10px", width: "fit-content" }}>
                          Articles ({matchingArticles.length})
                        </h3>
                        {matchingArticles.length === 0 ? (
                          <div style={{ background: "white", borderRadius: "12px", border: "1.5px solid #E2EBE7", padding: "30px", textAlign: "center", color: "#87A4B6" }}>
                            No strategic articles found in this category.
                          </div>
                        ) : (
                          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            {matchingArticles.map((article) => (
                              <div 
                                key={article.id}
                                onClick={() => openArticle(article)}
                                style={{
                                  background: "white",
                                  borderRadius: "16px",
                                  border: "1.5px solid #E2EBE7",
                                  padding: "30px",
                                  cursor: "pointer",
                                  transition: "all 0.2s",
                                  display: "flex",
                                  flexDirection: "column"
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.borderColor = "var(--color-accent)";
                                  e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.borderColor = "#E2EBE7";
                                  e.currentTarget.style.transform = "none";
                                }}
                              >
                                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", margin: "0 0 12px" }}>{article.title}</h4>
                                <p style={{ fontSize: "0.95rem", color: "#58798C", margin: "0 0 20px 0" }}>{article.summary}</p>
                                
                                <div style={{
                                  marginTop: "auto",
                                  paddingTop: "16px",
                                  borderTop: "1px solid #E2EBE7",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center"
                                }}>
                                  <span style={{ fontSize: "0.85rem", color: "#A0B5C1", fontWeight: "500" }}>{article.readTime}</span>
                                  <span style={{
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "var(--color-primary)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                  }}>
                                    Read Whole Article <i className="fas fa-chevron-right" style={{ fontSize: "0.75rem", color: "var(--color-accent)" }}></i>
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Right: Case Studies */}
                      <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "24px", borderBottom: "2px solid #8E44AD", paddingBottom: "10px", width: "fit-content" }}>
                          Quantitative Proofs ({matchingCases.length})
                        </h3>
                        {matchingCases.length === 0 ? (
                          <div style={{ background: "white", borderRadius: "12px", border: "1.5px solid #E2EBE7", padding: "30px", textAlign: "center", color: "#87A4B6" }}>
                            No active case studies deployed in this category.
                          </div>
                        ) : (
                          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                            {matchingCases.map((study, idx) => (
                              <Link 
                                to={`/case-studies/${study.id}`} 
                                key={idx} 
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                              >
                                <div style={{
                                  background: "white",
                                  borderRadius: "16px",
                                  border: "1.5px solid #E2EBE7",
                                  padding: "30px",
                                  cursor: "pointer",
                                  transition: "all 0.2s"
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.borderColor = "var(--color-accent)";
                                  e.currentTarget.style.transform = "translateY(-3px)";
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.borderColor = "#E2EBE7";
                                  e.currentTarget.style.transform = "none";
                                }}
                                >
                                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                                    <span style={{ fontSize: "0.85rem", color: "var(--color-accent)", fontWeight: "700" }}>{study.client}</span>
                                    <span style={{ fontSize: "0.75rem", color: "#A0B5C1" }}>{study.published}</span>
                                  </div>
                                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", color: "var(--color-primary)", marginBottom: "12px" }}>{study.title}</h4>
                                  <p style={{ fontSize: "0.95rem", color: "#395568", marginBottom: "20px" }}>{study.body}</p>
                                  
                                  <div style={{ background: "#F4F9FB", padding: "12px 18px", borderRadius: "10px", border: "1px solid #E2EBE7", display: "inline-flex", alignItems: "center", gap: "12px" }}>
                                    <span style={{ fontSize: "1.6rem", fontWeight: "700", color: "var(--color-accent)" }}>{study.result_stat}</span>
                                    <span style={{ fontSize: "0.8rem", color: "#58798C" }}>{study.result_label}</span>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

        </div>
      </section>

      {/* Modern Industrial Call-to-action bottom panel */}
      <section style={{ background: "linear-gradient(135deg, #112330 0%, #0E1A22 100%)", padding: "80px 0", color: "white", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2 style={{ fontSize: "2.4rem", fontWeight: "700", marginBottom: "20px", letterSpacing: "-0.01em" }}>Transform Fragmented Software into Intelligence</h2>
          <p style={{ color: "#A7BCC7", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "40px" }}>
            Ready to design high-performance architectures, automate self-healing workflows, or deploy custom intelligence layers inside your operational environment?
          </p>
          <Link to="/contact" style={{
            background: "var(--color-accent)",
            color: "var(--color-primary)",
            padding: "16px 40px",
            borderRadius: "30px",
            fontWeight: "700",
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 10px 25px rgba(19,170,179,0.2)",
            display: "inline-block",
            transition: "all 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.boxShadow = "0 15px 35px rgba(19,170,179,0.3)"}
          onMouseOut={(e) => e.currentTarget.style.boxShadow = "0 10px 25px rgba(19,170,179,0.2)"}
          >
            Let's Build Together &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}

