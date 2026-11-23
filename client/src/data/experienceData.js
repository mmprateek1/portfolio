export const experienceData = [
  {
    id: "invicto-labs",
    company: "Invicto Labs",
    role: "IT Intern — Backend & Automation",
    period: "2026 – Present",
    location: "Bangalore, Karnataka, India",
    type: "Internship (Active)",
    summary:
      "Working on practical software development and automation tasks, contributing to backend systems and real-world web application workflows.",
    overview:
      "Invicto Labs is a legal-tech and real estate title automation firm specializing in US county title records, automated municipal lien searches, and AI-driven quality assurance.",
    keyMetrics: [
      { label: "Turnaround Reduction", value: "95%+" },
      { label: "Portals Automated", value: "80+ Portals across 32 US States" },
      { label: "Extraction Fidelity", value: "99.4%" },
      { label: "Daily Order Throughput", value: "100–200 Orders" },
    ],
    responsibilities: [
      "Backend development using Node.js and Express.js for scalable API endpoints.",
      "Working with REST APIs and MySQL relational database schemas with connection pooling.",
      "Web automation using Puppeteer (v24) to scrape municipal portals and generate official property records.",
      "Developing and maintaining automation workflows, eliminating manual search latency from 20 minutes down to <30 seconds.",
      "Debugging and troubleshooting application issues, authoring resilient error fallbacks.",
      "Working with real-world data extraction and processing across diverse PDF layouts.",
      "Collaborating with team members to improve application functionality and code maintainability.",
    ],
    systems: [
      {
        name: "Tax-cert-app: Automated Property Tax Certificate Platform",
        badge: "Backend Automation",
        description:
          "Full-stack backend automation platform programmatically querying, extracting, and generating official property tax certificates across 80+ county and state portals spanning 32 US states and D.C.",
        bullets: [
          "Scaled backend property tax automation across 80+ county portals, authoring 7 state routing engines (TX, KS, IN, SD, IL, ND, VA) powering 100–200 daily title search orders.",
          "Cut municipal record extraction turnaround from 15–20 minutes to <30 seconds (95%+ latency reduction) by engineering autonomous Node.js/Express controllers.",
          "Eliminated cold-start browser overhead by implementing a singleton Puppeteer v24 manager with persistent local cache.",
          "Constructed resilient document parsing pipeline using Puppeteer, pdf2json, and spatial phrase-anchor matching with 99.4% extraction fidelity.",
        ],
        technologies: ["Node.js", "Express.js", "Puppeteer v24", "pdf2json", "base64topdf", "MySQL", "REST APIs"],
      },
      {
        name: "SearchFix: AI-Assisted QC Automation Platform",
        badge: "Chrome Extension & AI",
        description:
          "Full-stack QC automation platform and Chrome extension integrating Node.js, browser automation, and Google Gemini API to streamline US real estate title verification.",
        bullets: [
          "Engineered browser extension module (queue-runner.js) automating sequential batch processing of real estate orders directly in browser workflows.",
          "Integrated Google Gemini API with domain guidance rulebooks to autonomously detect title discrepancies and generate standardized client escalation emails (cutting review cycle by 60%).",
          "Built immutable audit logging pipeline tracking QC reviewer actions and turnaround telemetry.",
          "Secured REST endpoints with JWT authentication, bcrypt password hashing, and custom route authorization middleware.",
        ],
        technologies: ["JavaScript", "Chrome Extension API", "Google Gemini API", "Node.js", "Express.js", "MySQL", "JWT"],
      },
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Puppeteer",
      "MySQL",
      "REST APIs",
      "Chrome Extension API",
      "Google Gemini API",
      "JavaScript",
      "Git",
    ],
  },
];
