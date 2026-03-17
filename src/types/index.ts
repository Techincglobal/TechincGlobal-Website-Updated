// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
  processSteps: ProcessStep[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: IndustrySolution[];
  benefits: string[];
  keyModules?: string[]; // e.g., ["Manufacturing", "Inventory", "Quality"]
  stats?: { value: string; label: string }[]; // e.g., [{ value: "25%", label: "Lead Time Reduction" }]
  timeline?: { step: string; label: string; description: string }[]; // e.g., [{ step: "Phase 1", label: "Accounts", description: "..." }]
  caseStudySlug?: string;
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  scope: string[];
  outcomes: string[];
  testimonial: Testimonial;
  image?: string;
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readingTime: number;
  tags: string[];
  image?: string;
  metaTitle: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Assessment
// ---------------------------------------------------------------------------

export interface AssessmentOption {
  label: string;
  value: number;
  description?: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  options: AssessmentOption[];
}

export type AssessmentCategory =
  | "early-stage"
  | "moderate"
  | "transformation-ready"
  | "enterprise-acceleration";

export interface AssessmentResult {
  score: number;
  percentage: number;
  category: AssessmentCategory;
  title: string;
  description: string;
  recommendations: string[];
  nextSteps: string[];
}

export interface ResultCategoryConfig {
  minPercentage: number;
  maxPercentage: number;
  category: AssessmentCategory;
  title: string;
  description: string;
  recommendations: string[];
  nextSteps: string[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

// ---------------------------------------------------------------------------
// Team
// ---------------------------------------------------------------------------

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
}

// ---------------------------------------------------------------------------
// Shared / UI
// ---------------------------------------------------------------------------

export interface Stat {
  value: string;
  label: string;
  description?: string;
}
