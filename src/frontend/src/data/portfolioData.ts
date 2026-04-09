import type {
  Achievement,
  Certification,
  Education,
  PersonalInfo,
  Project,
  SkillCategory,
} from "../types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Deepak Katiyar",
  title:
    "Full Stack Developer | B.Tech CSE Student",
  email: "deepakhappy16@gmail.com",
  phone: "+91 8318522320",
  linkedin: "https://www.linkedin.com/in/deepak3128/",
  github: "https://github.com/deepak3128",
  summary:
    "Passionate final-year B.Tech CSE student and Front-End React Developer with hands-on experience building scalable, responsive web and cross-platform mobile applications using React, Tailwind CSS, and real-time technologies. Strong expertise in translating UI/UX designs into clean, reusable components, integrating REST APIs, and implementing real-time features. National Finalist – Smart India Hackathon 2025. Actively seeking remote React / Next.js Developer roles starting May 2027.",
  availability: "Available for IST & flexible US/EU time zones",
};

export const education: Education = {
  institution: "Maharana Pratap Group of Institution",
  degree: "B.Tech in Computer Science and Engineering",
  location: "Mandana, Kanpur, Uttar Pradesh",
  graduation: "May 2027",
  cgpa: "7.39 / 10",
};

export const projects: Project[] = [
  {
    id: "urbanmed-sync",
    title: "Hospital Management System (UrbanMed-Sync)",
    period: "Sep 2024",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Flask",
      "SQLAlchemy",
      "Socket.IO",
    ],
    description:
      "Full-stack hospital management system to make operations paperless with real-time patient queue and bed availability tracking.",
    bullets: [
      "Built responsive real-time dashboard in React for hospital operations enabling live patient queue and bed availability tracking",
      "Designed 12+ reusable UI components and integrated REST APIs for seamless frontend-backend communication",
      "Implemented Socket.IO for real-time updates, eliminating manual refresh and improving user experience",
      "Added CORS policies for secure API access and ensured cross-browser compatibility",
      "Collaborated with 4-member team to convert UI designs into pixel-perfect React components",
    ],
    liveUrl: "https://urbanmed-sync-demo.vercel.app",
    githubUrl: "https://github.com/deepak3128/UrbanMed-Sync",
    featured: true,
  },
  {
    id: "river-monitor",
    title: "Riverfront & Urban Water Bodies Monitoring App",
    period: "December 2025",
    tech: [
      "React",
      "Expo (React Native)",
      "JavaScript",
      "REST APIs",
      "IoT (ESP32 + LoRa)",
    ],
    description:
      "Cross-platform mobile application for real-time visualization of river conditions, flood alerts, and environmental data from IoT sensors deployed along the Sabarmati River.",
    bullets: [
      "Developed cross-platform mobile app using React + Expo to show live river data, water levels, and alerts",
      "Designed intuitive dashboards for visualizing discharge trends and sensor readings using API-driven data",
      "Implemented responsive layouts and optimized performance for smooth experience across Android devices",
      "Demonstrated strong frontend architecture, state management, and data-driven UI skills",
    ],
    liveUrl: "https://river-monitoring-demo.netlify.app",
    githubUrl: "https://github.com/deepak3128",
    featured: true,
  },
  {
    id: "urban-bite-cafe",
    title: "Urban Bite Cafe",
    period: "Jan 2026 – Feb 2026",
    tech: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "REST APIs",
    ],
    description:
      "A fully responsive restaurant web app for Urban Bite Cafe featuring digital menu browsing, cart management, and a seamless food ordering experience.",
    bullets: [
      "Built a responsive React-based restaurant UI with dynamic menu browsing, category filters, and item detail views — optimized for both mobile and desktop",
      "Implemented cart management with Context API for real-time quantity updates, order summary, and checkout flow without page reloads",
      "Integrated REST API for live menu data and order placement, with skeleton loading states and error handling for a polished user experience",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "mocha-exp",
    title: "Mocha Exp",
    period: "March 2026",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Framer Motion",
      "Vite",
    ],
    description:
      "A modern café discovery and experience web app that lets users explore coffee menus, read brew guides, and curate their personal coffee journey.",
    bullets: [
      "Developed a TypeScript + React café experience app with animated product cards, interactive brew guides, and a smooth scroll-based narrative layout using Framer Motion",
      "Leveraged React Query for efficient server-state caching and async data fetching, reducing load times and eliminating redundant API calls",
      "Crafted a pixel-perfect, typography-driven UI with Tailwind CSS — fully responsive across all screen sizes with attention to micro-interactions and visual hierarchy",
    ],
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "yt-shorts-blocker",
    title: "YouTube Shorts Blocker",
    period: "Mar 2026",
    tech: [
      "JavaScript",
      "Chrome Extensions API",
      "CSS",
      "DOM Manipulation",
      "Firefox WebExtensions",
    ],
    description:
      "A production-ready cross-browser extension that blocks YouTube Shorts using vanilla JavaScript with zero external dependencies.",
    bullets: [
      "Built cross-browser extension (Chrome & Firefox) blocking YouTube Shorts via multi-layer approach: CSS injection, DOM manipulation, and click interception — zero external dependencies",
      "Handled YouTube's SPA architecture with 500ms monitoring cycle and comprehensive error handling; professional popup UI for seamless user experience",
      "Production-ready: full documentation, automated icon generation, and deployment-ready structure — 11KB compressed, under 5MB footprint",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/deepak3128/Shorts-Blocker-Extension",
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Core Technologies",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "APIs & Real-time",
    skills: ["REST APIs", "Socket.IO", "API Integration", "Postman"],
  },
  {
    category: "Mobile & State",
    skills: ["React Native", "Expo", "Context API", "State Management"],
  },
  {
    category: "Backend & Databases",
    skills: ["Flask (Python)", "MySQL", "SQLAlchemy"],
  },
  {
    category: "Tools & Languages",
    skills: ["Git", "GitHub", "Python", "C++", "Java"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "National Finalist – Smart India Hackathon (SIH) 2025",
    description:
      "Among the top teams selected nationally for India's flagship government hackathon",
  },
  {
    title: "India's Largest Web3 Hackathon Participant",
    description:
      "Hands-on blockchain development experience in a competitive hackathon",
  },
  {
    title: "College Technical Team Lead",
    description:
      "Organized multiple hackathons and technical events for the college community",
  },
];

export const certifications: Certification[] = [
  {
    issuer: "Salesforce Trailhead",
    title: "Apex Basics & CRM Fundamentals",
  },
  {
    issuer: "IBM",
    title: "Data Visualization",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];
