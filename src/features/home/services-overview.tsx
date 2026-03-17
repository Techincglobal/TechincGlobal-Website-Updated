import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";

// ---------------------------------------------------------------------------
// ServicesOverview
// ---------------------------------------------------------------------------

const services = [
  {
    icon: "Settings",
    title: "ERPNext Implementation",
    description:
      "End-to-end ERPNext deployment from planning to go-live.",
    slug: "erpnext-implementation",
  },
  {
    icon: "Code",
    title: "Frappe Customization",
    description:
      "Custom applications built on the Frappe framework.",
    slug: "frappe-customization-development",
  },
  {
    icon: "Zap",
    title: "Process Automation",
    description:
      "Intelligent workflow automation and approval processes.",
    slug: "business-process-automation",
  },
  {
    icon: "RefreshCw",
    title: "Legacy Modernization",
    description:
      "Migrate from outdated systems to modern ERPNext.",
    slug: "legacy-system-modernization",
  },
  {
    icon: "Link2",
    title: "System Integration",
    description:
      "Connect ERPNext with third-party platforms and APIs.",
    slug: "system-integration",
  },
  {
    icon: "MessageSquare",
    title: "ERP Consulting",
    description:
      "Strategic advisory to align ERP with business goals.",
    slug: "erp-consulting-advisory",
  },
  {
    icon: "HeadphonesIcon",
    title: "Support & Optimization",
    description:
      "Ongoing support, tuning, and system optimization.",
    slug: "support-optimization",
  },
  {
    icon: "GraduationCap",
    title: "Training & Change Management",
    description:
      "Comprehensive training programs for adoption.",
    slug: "training-change-management",
  },
] as const;

function ServicesOverview() {
  return (
    <section className="py-section-md" aria-label="Our services">
      <Container size="default">
        <SectionHeader
          eyebrow="Our Services"
          title="End-to-End ERP Solutions for Modern Enterprises"
          description="From initial consulting through implementation to ongoing support, we deliver comprehensive ERPNext solutions tailored to your unique business requirements."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service, i) => {
            const { iconMap } = require("@/components/shared/feature-card");
            const IconComponent = iconMap[service.icon];

            return (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group flex items-center gap-3 rounded-xl border border-surface-border bg-white p-4 shadow-sm transition-all hover:border-brand-blue/30 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue-pale text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                      {IconComponent ? (
                        <IconComponent className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-text-primary group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </p>
                      <span className="text-[10px] font-semibold text-brand-teal uppercase tracking-wider">
                        Workspace
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

export { ServicesOverview };
