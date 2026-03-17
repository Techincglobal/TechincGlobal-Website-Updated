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

            {/* Challenges */}
            <section className="section-padding" aria-labelledby="challenges-heading">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <FadeUp>
                            <h2 id="challenges-heading" className="text-display-sm font-bold text-text-primary">
                                Industry Challenges We Solve
                            </h2>
                            <ul className="mt-6 space-y-4">
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
                        </FadeUp>

                        {/* Benefits */}
                        <FadeUp delay={0.15}>
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
