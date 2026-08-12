export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; tag: string }[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CredentialBadge {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationCode: string;
  type: 'patent' | 'certification' | 'award';
  iconName: string;
}

export const PROFILE_DATA = {
  name: "Dr. Aris Thome",
  handle: "@aris.thome",
  tagline: "Principal AI Architect & Spatial Systems Director",
  headline: "Building Autonomous Neural Intelligence & Sovereign Digital Systems",
  location: "Tokyo • San Francisco • GMT+9",
  status: "Available for Executive Advisory & Keynote",
  identityHash: "SEC-ID-0x98A4-THOME-2026-VERIFIED",
  securityChecksum: "0x7F8C9B2E1D0A4C5B",
  email: "aris.thome@aethel-systems.io",
  phone: "+1 (415) 890-3201",
  vcardUrl: "/aris-thome.vcf",
  
  bio: "Dr. Aris Thome is a Principal AI Architect and Systems Visionary pioneering low-latency neural agent orchestration, institutional fintech algorithms, and immersive WebXR interfaces. With over 12 years of research and executive leadership, he bridges fundamental AI theory with scalable industrial execution.",
  
  stats: [
    { label: "Years Experience", value: "12+" },
    { label: "Capital Platform Scaled", value: "$4.2B+" },
    { label: "U.S. Patents Granted", value: "08" },
    { label: "System Uptime", value: "99.999%" }
  ],

  socials: [
    { platform: "GitHub", handle: "@aristhome", url: "https://github.com" },
    { platform: "LinkedIn", handle: "dr-aris-thome", url: "https://linkedin.com" },
    { platform: "X (Twitter)", handle: "@aris_thome_ai", url: "https://x.com" },
    { platform: "Scholar", handle: "Aris Thome PhD", url: "https://scholar.google.com" }
  ],

  projects: [
    {
      id: "project-nexus",
      title: "Nexus Neural Intelligence",
      subtitle: "Autonomous Multi-Agent Enterprise Orchestration Platform",
      category: "Artificial Intelligence",
      description: "Distributed AI cluster coordinator enabling sub-10ms inter-agent reasoning and secure contextual inference across 50,000+ edge nodes.",
      longDescription: "Nexus Neural Intelligence represents the pinnacle of multi-agent cognitive architecture. Designed to eliminate reasoning latency in mission-critical environments, Nexus combines real-time WebGPU shaders for cognitive visualization with Rust-compiled web assembly runtimes.",
      image: "/images/project1.jpg",
      tags: ["PyTorch", "React 19", "WebGPU", "gRPC", "Rust", "TypeScript"],
      metrics: [
        { label: "Inference Speed", value: "<8ms" },
        { label: "Edge Nodes", value: "50,000+" },
        { label: "Accuracy Score", value: "99.4%" }
      ],
      featured: true,
      demoUrl: "https://nexus-neural-demo.io",
      githubUrl: "https://github.com/aethel/nexus-neural"
    },
    {
      id: "project-sovereign",
      title: "Aethelred Sovereign Wealth",
      subtitle: "Zero-Knowledge Institutional Liquidity & Trading Platform",
      category: "FinTech & Cryptography",
      description: "Ultra-low latency institutional trading interface with live global heatmaps, portfolio rebalancing models, and ZK-privacy compliance.",
      longDescription: "Engineered for top-tier hedge funds and institutional liquidity managers. Built with custom WebGL charts capable of rendering 1 million data points per second at 120 FPS.",
      image: "/images/project2.jpg",
      tags: ["Solidity", "TypeScript", "Go", "ClickHouse", "WebGL", "Zero-Knowledge"],
      metrics: [
        { label: "Daily Volume", value: "$1.4B" },
        { label: "Chart FPS", value: "120 FPS" },
        { label: "Latency", value: "0.4ms" }
      ],
      featured: true,
      demoUrl: "https://aethelred-sovereign.io",
      githubUrl: "https://github.com/aethel/sovereign-wealth"
    },
    {
      id: "project-spatial",
      title: "Spatial Studio V7",
      subtitle: "WebXR & visionOS 3D CAD Collaborative Environment",
      category: "Spatial Computing",
      description: "Immersive spatial computing canvas for aerospace and hardware engineers to collaborate on complex 3D assembly models in real time.",
      longDescription: "Spatial Studio V7 merges spatial gesture recognition with browser-native WebXR rendering. Users can inspect digital twins, simulate kinetic strain, and present spatial keynotes remotely.",
      image: "/images/project3.jpg",
      tags: ["Three.js", "WebXR", "visionOS", "React 19", "C++ / Wasm", "Spatial Audio"],
      metrics: [
        { label: "Rendering Mesh", value: "5M Polys" },
        { label: "Collaboration", value: "Real-time" },
        { label: "Platform Support", value: "WebXR / visionOS" }
      ],
      featured: true,
      demoUrl: "https://spatial-studio-demo.io",
      githubUrl: "https://github.com/aethel/spatial-studio"
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      category: "AI & Neural Systems",
      skills: [
        { name: "LLM & Multi-Agent Orchestration", level: 98, tag: "Expert" },
        { name: "PyTorch & TensorRT Optimization", level: 95, tag: "Expert" },
        { name: "Neural Graph Embeddings", level: 92, tag: "Advanced" },
        { name: "Autonomous Reasoning Pipelines", level: 96, tag: "Expert" }
      ]
    },
    {
      category: "Systems & Infrastructure",
      skills: [
        { name: "Rust & High-Perf Systems", level: 94, tag: "Expert" },
        { name: "Distributed Microservices (Go/gRPC)", level: 96, tag: "Expert" },
        { name: "Kubernetes & Cloud Security", level: 90, tag: "Advanced" },
        { name: "Zero-Knowledge Cryptography", level: 88, tag: "Advanced" }
      ]
    },
    {
      category: "Frontend & Spatial Tech",
      skills: [
        { name: "React 19 & Next-Gen State Engines", level: 99, tag: "Master" },
        { name: "WebGL & WebGPU Shaders", level: 93, tag: "Expert" },
        { name: "WebXR / visionOS Interfaces", level: 89, tag: "Advanced" },
        { name: "Design Systems & Luxury UI", level: 97, tag: "Master" }
      ]
    }
  ] as SkillCategory[],

  timeline: [
    {
      year: "2024 — Present",
      title: "Principal AI Architect & Fellow",
      company: "Aethel Systems Global",
      location: "San Francisco / Tokyo",
      description: "Directing core R&D for next-generation sovereign AI models and zero-knowledge infrastructure.",
      highlights: [
        "Architected multi-agent reasoning cluster processing 100k queries/sec",
        "Granted 3 patents in low-power neural edge computing",
        "Mentored team of 24 senior research engineers"
      ]
    },
    {
      year: "2021 — 2024",
      title: "Head of Systems Architecture",
      company: "Chrono Cybernetics",
      location: "Tokyo, Japan",
      description: "Led engineering for real-time high-frequency trading platform and quantitative asset dashboards.",
      highlights: [
        "Scaled liquidity platform to over $4 Billion in total transactional volume",
        "Reduced system latency from 4.2ms to 0.4ms via custom C++ kernel extensions",
        "Supervised ISO 27001 & SOC-2 Type II security audit compliance"
      ]
    },
    {
      year: "2018 — 2021",
      title: "Lead Graphics & Spatial Engineer",
      company: "Apex Spatial Labs",
      location: "Kyoto / Remote",
      description: "Built browser-native 3D graphics engines and AR collaboration tools for industrial designers.",
      highlights: [
        "Created WebGL shader engine handling 5M poly geometries at 60 FPS",
        "Published 4 IEEE research papers on gesture-based spatial manipulation"
      ]
    },
    {
      year: "2014 — 2018",
      title: "Senior AI Research Engineer",
      company: "Quantum Intelligence Institute",
      location: "Boston, MA",
      description: "Conducted doctoral and post-doctoral research in autonomous neural network optimization.",
      highlights: [
        "Completed Ph.D. in Computer Science & Artificial Intelligence",
        "Published top-cited papers at NeurIPS and ICML"
      ]
    }
  ] as TimelineMilestone[],

  credentials: [
    {
      id: "cred-1",
      title: "Distributed Agent Protocol",
      issuer: "U.S. Patent & Trademark Office (#11,842,910)",
      date: "Granted Nov 2025",
      verificationCode: "US-PAT-11842910-B2",
      type: "patent",
      iconName: "FileCheck"
    },
    {
      id: "cred-2",
      title: "Chief Security Architect (ISO/IEC 27001)",
      issuer: "International Security Standards Board",
      date: "Verified 2025 - 2028",
      verificationCode: "ISO-27001-SEC-99120",
      type: "certification",
      iconName: "ShieldCheck"
    },
    {
      id: "cred-3",
      title: "Stanford Executive AI Leadership Fellow",
      issuer: "Stanford University Institute for Human-Centered AI",
      date: "Class of 2023",
      verificationCode: "STAN-HAI-FELLOW-2023",
      type: "award",
      iconName: "Award"
    }
  ] as CredentialBadge[]
};
