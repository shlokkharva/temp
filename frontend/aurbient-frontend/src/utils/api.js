// src/utils/api.js
import axios from "axios";

// Default Django API base URL (VITE_API_URL or local fallback)
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fallback Mock Data matching the spec's Django models
const MOCK_SERVICES = [
  {
    id: 1,
    title: "AI Strategy",
    kicker: "Deep Analysis",
    description: "We map your operations against AI opportunity — identifying where automation creates compounding returns, not just one-off gains.",
    icon_name: "brain",
    tags: ["Deep Analysis", "Pattern Mapping", "ROI Focus", "Future-Proof"],
    order: 1
  },
  {
    id: 2,
    title: "Systems Integration",
    kicker: "API First",
    description: "Connect every tool in your stack into a single intelligent workflow. We build bridges that eliminate friction and accelerate delivery.",
    icon_name: "hub",
    tags: ["API First", "Zero Downtime", "Legacy Friendly", "Scalable"],
    order: 2
  },
  {
    id: 3,
    title: "Continuous Optimization",
    kicker: "Live Monitoring",
    description: "Deployment is not the finish line. Our engines monitor, learn, and refine — compounding performance improvements over time.",
    icon_name: "trending_up",
    tags: ["Live Monitoring", "A/B Testing", "Auto-Tuning", "Weekly Reports"],
    order: 3
  },
  {
    id: 4,
    title: "Predictive Forecasting",
    kicker: "Neural Analytics",
    description: "Harness neural wave models to predict customer demands and market shifts weeks before they happen, giving your team an unfair advantage.",
    icon_name: "query_stats",
    tags: ["Market Shifts", "Neural Nets", "Demand Mapping", "Realtime"],
    order: 4
  },
  {
    id: 5,
    title: "Autonomous Workflows",
    kicker: "Cognitive Agents",
    description: "Deploy self-learning virtual agents capable of complex decision-making, exception handling, and deep document parsing.",
    icon_name: "smart_toy",
    tags: ["Agentic AI", "Exception Handling", "NLP Parsing", "Self-Tuning"],
    order: 5
  },
  {
    id: 6,
    title: "Quantum Data Pipelines",
    kicker: "Next-Gen Storage",
    description: "Zero-latency ingest pipelines structured for instant vector similarity search and hyper-dimensional representation retrieval.",
    icon_name: "storage",
    tags: ["Vector Search", "Hyper-Dimensional", "No-latency", "LLM-Ready"],
    order: 6
  }
];

const MOCK_CASE_STUDIES = [
  {
    id: 1,
    title: "Automating Apex Group's Multi-Region Logistics Pipeline",
    client: "Apex Group",
    industry: "Logistics & Supply Chain",
    result_stat: "42%",
    result_label: "Reduction in Delivery Delay Rates",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    body: "We integrated a localized vector retrieval network that processes routing paths in parallel, resolving dispatch conflicts before they arise.",
    published: "2026-04-12"
  },
  {
    id: 2,
    title: "Deploying Vela Financial's Neural Portfolio Analyzer",
    client: "Vela Financial",
    industry: "Quantitative Finance",
    result_stat: "150+",
    result_label: "Alpha Indicators Discovered Weekly",
    thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    body: "Leveraging Aurbient's proprietary pattern map layer, Vela now analyses unstructured earnings call transcripts globally in less than 200 milliseconds.",
    published: "2026-05-01"
  },
  {
    id: 3,
    title: "Scaling Orbit Space Systems' Realtime Telemetry Nodes",
    client: "Orbit Space Systems",
    industry: "Aerospace Systems",
    result_stat: "98%",
    result_label: "Telemetry Processing Accuracy",
    thumbnail: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=800&q=80",
    body: "We developed an offline-first client node framework that dynamically synchronizes orbital trajectory files with backend databases via light-weight gRPC packages.",
    published: "2026-05-18"
  }
];

const MOCK_TEAM = [
  {
    id: 1,
    name: "Dr. Elena Rostova",
    role: "Chief Intelligence Officer",
    bio: "Former lead researcher at Max Planck Institute. Elena specializes in hyper-dimensional vector embeddings and multi-agent synergy systems.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/elena-rostova-demo",
    order: 1
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Director of Systems Architecture",
    bio: "Spent a decade designing fault-tolerant low-latency infrastructure for quantitative trading firms. Marc runs our integrations core.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/marcus-vance-demo",
    order: 2
  },
  {
    id: 3,
    name: "Aria Thorne",
    role: "Principal Product Synthesist",
    bio: "Bridging human cognitive workflows with neural automation layers. Aria designs Aurbient's state-of-the-art interactive systems.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com/in/aria-thorne-demo",
    order: 3
  }
];

// API Functions
export const getServices = async () => {
  try {
    const response = await api.get("/services/");
    return response.data.results || response.data || MOCK_SERVICES;
  } catch (error) {
    console.warn("Django services endpoint failed. Using fallback design system mock data:", error.message);
    return MOCK_SERVICES;
  }
};

export const getCaseStudies = async () => {
  try {
    const response = await api.get("/case-studies/");
    return response.data.results || response.data || MOCK_CASE_STUDIES;
  } catch (error) {
    console.warn("Django case studies endpoint failed. Using fallback design system mock data:", error.message);
    return MOCK_CASE_STUDIES;
  }
};

export const getTeamMembers = async () => {
  try {
    const response = await api.get("/team/");
    return response.data.results || response.data || MOCK_TEAM;
  } catch (error) {
    console.warn("Django team endpoint failed. Using fallback design system mock data:", error.message);
    return MOCK_TEAM;
  }
};

export const postContactInquiry = async (data) => {
  try {
    const response = await api.post("/contact/", data);
    return response.data;
  } catch (error) {
    console.warn("Django contact submission failed. Using fallback client simulation:", error.message);
    // Simulate API delay for premium feel
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return { success: true, message: "Demo Inquiry submitted successfully!", data };
  }
};
