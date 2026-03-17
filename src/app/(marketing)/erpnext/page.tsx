import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "ERPNext Modules & Workspaces | TECHINCGLOBAL",
    description: "Explore ERPNext domains: Accounting, HR, CRM, Manufacturing, Buying, Selling, and Projects. Sri Lanka's leading ERPNext implementation partner.",
};

const workspaces = [
    {
        title: "Financial Accounting",
        description: "Real-time accounting, taxation, budgeting, and cost centers.",
        modules: ["General Ledger", "Accounts Payable", "Cash Flow", "Budgeting"]
    },
    {
        title: "Human Resources",
        description: "From hiring to retirement management with local compliance.",
        modules: ["Payroll", "Attendance", "Recruitment", "Performance"]
    },
    {
        title: "Manufacturing",
        description: "Discrete and process manufacturing with multi-level BOMs.",
        modules: ["Production Plan", "Job Cards", "BOM", "Quality Control"]
    },
    {
        title: "Supply Chain",
        description: "Inventory tracking across multiple warehouses with auto-restock.",
        modules: ["Stock Entry", "Material Request", "Purchase Order", "Fulfillment"]
    },
    {
        title: "Customer Relations",
        description: "Sales pipeline, quotation approvals, and after-sales support.",
        modules: ["Lead Management", "Quotation", "Sales Order", "Support Tickets"]
    },
    {
        title: "Project Management",
        description: "Organize, schedule, and plan projects profitably.",
        modules: ["Timesheet", "Issue Tracking", "Milestones", "Overruns"]
    }
];

export default function ERPNextPage() {
    return (
        <div className="bg-[#F9FBFC]">
            {/* Hero */}
            <section className="bg-hero-gradient py-16 sm:py-24 text-inverse">
                <Container size="default">
                    <FadeUp>
                        <div className="max-w-3xl">
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">Enterprise Resource Planning</span>
                            <h1 className="mt-3 text-display-md font-bold text-white sm:text-display-lg">
                                Unified Workspaces on <span className="text-brand-teal">ERPNext</span>
                            </h1>
                            <p className="mt-5 text-lg text-white/70">
                                ERPNext drives efficiency across your entire organization by uniting Accounting,
                                HR, Sales, Assets, and Manufacturing into a single metadata-driven platform.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/assessment">Take ERP Assessment</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* Modules Dashboard Grid */}
            <section className="section-padding" aria-labelledby="modules-dashboard">
                <Container>
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto">
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Core Domains</span>
                            <h2 id="modules-dashboard" className="mt-2 text-display-sm font-bold text-text-primary">
                                Connected Enterprise Workspaces
                            </h2>
                            <p className="mt-2 text-sm text-text-secondary">
                                Core processes linked out-of-the-box, ensuring immediate data consistency.
                            </p>
                        </div>
                    </FadeUp>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {workspaces.map((space, i) => (
                            <FadeUp key={space.title} delay={i * 0.05}>
                                <div className="rounded-xl border border-surface-border bg-white p-5 shadow-soft transition-all hover:border-brand-blue/30 hover:shadow-card-hover flex flex-col h-full">
                                    <h3 className="text-base font-bold text-text-primary">{space.title}</h3>
                                    <p className="mt-1 text-xs text-text-secondary leading-relaxed flex-1">{space.description}</p>

                                    <div className="mt-4 pt-4 border-t border-surface-border grid grid-cols-2 gap-2">
                                        {space.modules.map(mod => (
                                            <div key={mod} className="rounded-md bg-[#F9FBFC] border border-surface-border px-2.5 py-1.5 font-medium text-[10px] text-text-secondary flex items-center justify-center text-center">
                                                {mod}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
