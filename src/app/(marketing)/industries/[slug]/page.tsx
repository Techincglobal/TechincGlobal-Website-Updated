import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);
    if (!industry) return {};
    return {
        title: industry.metaTitle,
        description: industry.metaDescription,
        alternates: { canonical: `https://techincglobal.com/industries/${slug}` },
    };
}

function getIndustryVisualMockup(slug: string) {
    if (slug === "manufacturing") {
        return (
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft space-y-4">
                <div className="flex items-center justify-between border-b border-surface-border pb-3">
                    <span className="text-xs font-bold text-text-primary">Live Shop Floor Monitor</span>
                    <span className="text-[10px] bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium">Active</span>
                </div>
                <div className="space-y-2">
                    {[
                        { name: "Cnc Router 01", status: "Running", eff: "92%" },
                        { name: "Laser Cutter 02", status: "Maintenance", eff: "0%" },
                        { name: "Assembly Line B", status: "Running", eff: "88%" }
                    ].map(m => (
                        <div key={m.name} className="p-3 bg-[#F9FBFC] rounded-xl border border-surface-border flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-text-primary">{m.name}</p>
                                <p className="text-[10px] text-text-secondary">{m.status}</p>
                            </div>
                            <span className="text-sm font-bold text-brand-blue">{m.eff}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (slug === "distribution-logistics") {
        return (
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
                <div className="border-b border-surface-border pb-3 mb-4">
                    <span className="text-xs font-bold text-text-primary">Fleet & Dispatch Streams</span>
                </div>
                <div className="aspect-video bg-slate-100 rounded-xl relative overflow-hidden border border-surface-border">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&w=800&q=40')] bg-cover bg-center opacity-30" />
                    <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-sm border border-surface-border flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-blue-500 animate-ping" />
                        <span className="text-[10px] font-bold">Truck #42 - En-route</span>
                    </div>
                </div>
            </div>
        );
    }

    if (slug === "retail-ecommerce") {
        return (
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-text-primary">Omnichannel Live Sales</span>
                    <span className="text-xs font-bold text-brand-teal">LKR 142K+</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    {[{ l: "Online orders", v: "14" }, { l: "Store pickup", v: "8" }].map(c => (
                        <div key={c.l} className="p-3 bg-[#F9FBFC] rounded-lg border border-surface-border text-center">
                            <span className="text-xl font-bold text-brand-blue">{c.v}</span>
                            <p className="text-[10px] text-text-secondary mt-1">{c.l}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (slug === "healthcare") {
        return (
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft space-y-4">
                <div className="flex items-center justify-between border-b border-surface-border pb-3">
                    <span className="text-xs font-bold text-text-primary">EHR Patient Records</span>
                    <span className="text-[10px] text-brand-blue border border-brand-blue/30 px-2 py-0.5 rounded font-medium">Decrypted</span>
                </div>
                <div className="space-y-2">
                    {[
                        { d: "Body Temp", v: "98.4°F", s: "Normal" },
                        { d: "Pulse Rate", v: "72 bpm", s: "Stable" },
                        { d: "Blood Pressure", v: "120/80", s: "Normal" }
                    ].map(r => (
                        <div key={r.d} className="p-3 bg-[#F9FBFC] rounded-xl border border-surface-border flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-brand-teal" />
                                <span className="text-xs text-text-secondary">{r.d}</span>
                            </div>
                            <span className="text-xs font-bold text-text-primary">{r.v}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (slug === "professional-services") {
        return (
            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft space-y-4">
                <div className="flex items-center justify-between border-b border-surface-border pb-3">
                    <span className="text-xs font-bold text-text-primary">Project Accounting</span>
                    <span className="text-[10px] text-brand-teal font-bold">On Track</span>
                </div>
                <div className="space-y-4 pt-2">
                    <div>
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] text-text-secondary">Budget Utilization</span>
                            <span className="text-[11px] font-bold text-brand-blue">74%</span>
                        </div>
                        <div className="relative h-2 rounded-full bg-slate-100 overflow-hidden border border-surface-border">
                            <div className="absolute top-0 left-0 bottom-0 bg-brand-blue w-3/4 rounded-full" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="p-2.5 bg-[#F9FBFC] rounded-lg border border-surface-border">
                            <span className="text-[10px] text-text-secondary">Billable Hours</span>
                            <p className="text-sm font-bold text-text-primary">142.5 h</p>
                        </div>
                        <div className="p-2.5 bg-[#F9FBFC] rounded-lg border border-surface-border">
                            <span className="text-[10px] text-text-secondary">Profit Margin</span>
                            <p className="text-sm font-bold text-green-600">22.4%</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default general dashboard mockup
    return (
        <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
            <div className="flex items-center gap-2 mb-4 border-b border-surface-border pb-3">
                <div className="h-3 w-3 rounded-full bg-brand-blue" />
                <span className="text-xs font-bold text-text-primary">Operational Status Dashboard</span>
            </div>
            <div className="h-40 bg-[#F9FBFC] rounded-xl border border-surface-border border-dashed flex items-center justify-center">
                <span className="text-xs text-text-muted">Linked datasets fully operating online</span>
            </div>
        </div>
    );
}

export default async function IndustryDetailPage({ params }: Props) {
    const { slug } = await params;
    const industry = industries.find((i) => i.slug === slug);
    if (!industry) notFound();

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="bg-hero-gradient py-16 sm:py-24">
                <Container>
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "Industries", href: "/industries" },
                            { label: industry.title },
                        ]}
                    />
                    <FadeUp>
                        <div className="mt-6 max-w-3xl">
                            <h1 className="text-display-md font-bold text-white sm:text-display-lg">
                                ERPNext for {industry.title}
                            </h1>
                            <p className="mt-5 text-lg leading-relaxed text-white/70">
                                {industry.description}
                            </p>
                            <div className="mt-8">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Book a Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeUp>
                </Container>

                {/* Stats Bar */}
                {industry.stats && (
                    <div className="mt-12 border-t border-white/10 bg-white/5 backdrop-blur-sm">
                        <Container>
                            <div className="grid grid-cols-2 divide-x divide-white/10 py-8 lg:grid-cols-4">
                                {industry.stats.map((stat, i) => (
                                    <div key={i} className="px-6 text-center first:pl-0 last:border-r-0 lg:border-r lg:border-white/10">
                                        <p className="text-3xl font-bold text-brand-teal">{stat.value}</p>
                                        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </Container>
                    </div>
                )}
            </section>

            {/* Challenges & Benefits (Visualised) */}
            <section className="section-padding" aria-labelledby="challenges-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <FadeUp>
                            <div>
                                <h2 id="challenges-heading" className="text-display-sm font-bold text-text-primary">
                                    Industry Challenges We Solve
                                </h2>
                                <ul className="mt-6 space-y-4 border-b border-surface-border pb-8 mb-8">
                                    {industry.challenges.map((challenge, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                                                </svg>
                                            </span>
                                            <span className="text-sm leading-relaxed text-text-secondary">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="text-display-sm font-bold text-text-primary">
                                    Outcomes You Can Expect
                                </h2>
                                <ul className="mt-6 space-y-4">
                                    {industry.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-pale text-brand-blue">
                                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span className="text-sm leading-relaxed text-text-secondary">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.15}>
                            {getIndustryVisualMockup(slug)}
                        </FadeUp>
                    </div>
                </Container>
            </section>

            {/* Workspace Modules ("Frappe Vibe") */}
            {industry.keyModules && (
                <section className="section-padding bg-[#F9FBFC] border-y border-surface-border" aria-labelledby="modules-heading">
                    <Container>
                        <FadeUp>
                            <div className="text-center max-w-2xl mx-auto">
                                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Component Modules</span>
                                <h2 id="modules-heading" className="mt-2 text-display-sm font-bold text-text-primary">
                                    Your {industry.title} Workspace
                                </h2>
                                <p className="mt-2 text-sm text-text-secondary">
                                    Tailored Frappe applications configured to manage your entire operation.
                                </p>
                            </div>
                        </FadeUp>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                            {industry.keyModules.map((module, i) => (
                                <FadeUp key={module} delay={i * 0.05}>
                                    <div className="flex items-center gap-3 rounded-xl border border-surface-border bg-white p-4 shadow-soft transition-all hover:border-brand-blue/30 hover:shadow-card-hover">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-blue-pale text-brand-blue">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-text-primary">{module}</p>
                                            <span className="text-[10px] font-semibold text-brand-teal uppercase tracking-wider">Module</span>
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Solutions */}
            <section className="section-padding bg-surface" aria-labelledby="solutions-heading">
                <Container>
                    <FadeUp>
                        <h2 id="solutions-heading" className="text-display-sm font-bold text-text-primary">
                            How ERPNext Solves These Challenges
                        </h2>
                    </FadeUp>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {industry.solutions.map((solution, i) => (
                            <FadeUp key={solution.title} delay={i * 0.08}>
                                <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
                                    <h3 className="font-bold text-text-primary">{solution.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{solution.description}</p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Phased Timeline / Roadmap */}
            {industry.timeline && (
                <section className="section-padding bg-[#F9FBFC] border-y border-surface-border">
                    <Container>
                        <FadeUp>
                            <div className="text-center max-w-2xl mx-auto mb-12">
                                <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Continuous Delivery</span>
                                <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                                    Implementation Roadmap
                                </h2>
                                <p className="mt-2 text-sm text-text-secondary">A structured roll-out optimized for high adoption and zero business disruption.</p>
                            </div>
                        </FadeUp>

                        <div className="relative max-w-4xl mx-auto">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-brand-blue/30 sm:left-1/2 sm:-translate-x-1/2" />

                            <div className="space-y-8">
                                {industry.timeline.map((item, i) => {
                                    const isEven = i % 2 === 0;
                                    return (
                                        <FadeUp key={item.step} delay={i * 0.1}>
                                            <div className="relative flex items-center sm:justify-between">
                                                {/* Node Circle */}
                                                <div className="absolute left-6 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-xs shadow-soft sm:left-1/2 sm:-translate-x-1/2">
                                                    {i + 1}
                                                </div>

                                                <div className={cn(
                                                    "ml-16 rounded-xl border border-surface-border bg-white p-5 shadow-sm sm:w-[calc(50%-2rem)] sm:ml-0",
                                                    isEven ? "sm:mr-auto" : "sm:ml-auto"
                                                )}>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-teal">{item.step}</span>
                                                    <h3 className="text-sm font-bold text-text-primary mt-0.5">{item.label}</h3>
                                                    <p className="mt-1 text-xs text-text-secondary leading-relaxed">{item.description}</p>
                                                </div>
                                            </div>
                                        </FadeUp>
                                    );
                                })}
                            </div>
                        </div>
                    </Container>
                </section>
            )}

            {/* CTA */}
            <section className="section-padding bg-brand-navy">
                <Container size="sm" className="text-center">
                    <FadeUp>
                        <h2 className="text-display-sm font-bold text-white">
                            Ready to Transform Your {industry.title} Operations?
                        </h2>
                        <p className="mt-4 text-lg text-white/70">
                            Let&apos;s talk about what an ERPNext implementation could look like for your business.
                        </p>
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white" asChild>
                                <Link href="/assessment">Take ERP Assessment</Link>
                            </Button>
                        </div>
                    </FadeUp>
                </Container>
            </section>
        </div>
    );
}
