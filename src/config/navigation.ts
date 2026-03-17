import type { NavItem } from "@/types";

// ---------------------------------------------------------------------------
// Service items (used in dropdown & footer)
// ---------------------------------------------------------------------------

export interface ServiceNavItem {
  label: string;
  slug: string;
  href: string;
}

export const serviceItems: ServiceNavItem[] = [
  {
    label: "ERPNext Implementation",
    slug: "erpnext-implementation",
    href: "/services/erpnext-implementation",
  },
  {
    label: "Frappe Customization & Development",
    slug: "frappe-customization-development",
    href: "/services/frappe-customization-development",
  },
  {
    label: "Business Process Automation",
    slug: "business-process-automation",
    href: "/services/business-process-automation",
  },
  {
    label: "Legacy System Modernization",
    slug: "legacy-system-modernization",
    href: "/services/legacy-system-modernization",
  },
  {
    label: "System Integration",
    slug: "system-integration",
    href: "/services/system-integration",
  },
  {
    label: "ERP Consulting & Advisory",
    slug: "erp-consulting-advisory",
    href: "/services/erp-consulting-advisory",
  },
  {
    label: "Support & Optimization",
    slug: "support-optimization",
    href: "/services/support-optimization",
  },
  {
    label: "Training & Change Management",
    slug: "training-change-management",
    href: "/services/training-change-management",
  },
];

// ---------------------------------------------------------------------------
// Industry items (used in dropdown & footer)
// ---------------------------------------------------------------------------

export interface IndustryNavItem {
  label: string;
  slug: string;
  href: string;
}

export const industryItems: IndustryNavItem[] = [
  {
    label: "Manufacturing",
    slug: "manufacturing",
    href: "/industries/manufacturing",
  },
  {
    label: "Distribution & Logistics",
    slug: "distribution-logistics",
    href: "/industries/distribution-logistics",
  },
  {
    label: "Retail & E-Commerce",
    slug: "retail-ecommerce",
    href: "/industries/retail-ecommerce",
  },
  {
    label: "Professional Services",
    slug: "professional-services",
    href: "/industries/professional-services",
  },
  {
    label: "Construction & Real Estate",
    slug: "construction-real-estate",
    href: "/industries/construction-real-estate",
  },
  {
    label: "Healthcare",
    slug: "healthcare",
    href: "/industries/healthcare",
  },
  {
    label: "Education",
    slug: "education",
    href: "/industries/education",
  },
  {
    label: "Trading & Import Export",
    slug: "trading-import-export",
    href: "/industries/trading-import-export",
  },
];

// ---------------------------------------------------------------------------
// Main navigation (header)
// ---------------------------------------------------------------------------

export const mainNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Platforms",
    href: "#",
    children: [
      { label: "ERPNext", href: "/erpnext" },
      { label: "Frappe Framework", href: "/frappe" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: serviceItems.map(({ label, href }) => ({ label, href })),
  },
  {
    label: "Industries",
    href: "/industries",
    children: industryItems.map(({ label, href }) => ({ label, href })),
  },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Methodology", href: "/methodology" },
      { label: "Assessment", href: "/assessment" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Resources", href: "/resources" },
    ],
  },
];

// ---------------------------------------------------------------------------
// CTA button config
// ---------------------------------------------------------------------------

export interface CTAButtonConfig {
  label: string;
  href: string;
}

export const ctaButton: CTAButtonConfig = {
  label: "Book a Consultation",
  href: "/contact",
};

// ---------------------------------------------------------------------------
// Footer navigation groups
// ---------------------------------------------------------------------------

export interface FooterNavGroup {
  title: string;
  items: NavItem[];
}

export const footerNavGroups: FooterNavGroup[] = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Methodology", href: "/methodology" },
      { label: "Assessment", href: "/assessment" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: serviceItems.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Industries",
    items: industryItems.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Sitemap", href: "/sitemap.xml" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Full navigation config export
// ---------------------------------------------------------------------------

export interface NavigationConfig {
  mainNav: NavItem[];
  footerNav: FooterNavGroup[];
  cta: CTAButtonConfig;
  services: ServiceNavItem[];
  industries: IndustryNavItem[];
}

export const navigationConfig: NavigationConfig = {
  mainNav: mainNavItems,
  footerNav: footerNavGroups,
  cta: ctaButton,
  services: serviceItems,
  industries: industryItems,
};
