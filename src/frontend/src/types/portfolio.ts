export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  availability: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  tech: string[];
  description: string;
  bullets: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface Certification {
  issuer: string;
  title: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  graduation: string;
  cgpa: string;
}
