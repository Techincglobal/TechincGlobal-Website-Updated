import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeUp } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Frappe Framework Services | TECHINCGLOBAL",
    description: "Build custom, scalable web applications with the Frappe Framework. Low-code rapid development using Python & JavaScript. Sri Lanka's leading Frappe partner.",
};

export default function FrappePage() {
    return (
        <div className="bg-[#F9FBFC]">
            {/* Hero */}
            <section className="bg-hero-gradient py-16 sm:py-24 text-inverse">
                <Container size="default">
                    <FadeUp>
                        <div className="max-w-3xl">
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">Open Source Framework</span>
                            <h1 className="mt-3 text-display-md font-bold text-white sm:text-display-lg">
                                The Battery-Included <span className="text-brand-teal">Frappe Framework</span>
                            </h1>
                            <p className="mt-5 text-lg text-white/70">
                                Frappe is a full-stack, meta-data driven web framework written in Python and JavaScript.
                                Build complex ERP-like extensions 10x faster with absolute architecture discipline.
                            </p>
                            <div className="mt-8 flex gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Build a Custom App</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* Architecture Overview */}
            <section className="section-padding">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <FadeUp>
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Core Concepts</span>
                            <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                                Metadata-Driven Rapid Development
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                                Unlike traditional frameworks where you write models, views, and controllers, Frappe uses **DocTypes** — metadata definitions that automatically generate database tables, REST APIs, and client-side forms.
                            </p>

                            <ul className="mt-6 space-y-4">
                                {[
                                    { title: "DocTypes & Controllers", desc: "Define fields, linking logic, and Python controller scripts to handle triggers." },
                                    { title: "Built-In Auth & Roles", desc: "Granular absolute permission controls at document and field levels." },
                                    { title: "Automatic REST API", desc: "Every DocType is immediately available as an authenticated REST endpoint." },
                                    { title: "Background Jobs", desc: "Integrated Redis / RQ queues for async task execution and triggers." }
                                ].map((item) => (
                                    <li key={item.title} className="flex items-start gap-3">
                                        <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-blue-pale text-brand-blue">
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-text-primary">{item.title}</p>
                                            <p className="text-xs text-text-secondary">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </FadeUp>

                        <FadeUp delay={0.15}>
                            {/* Visual Representation of Frappe Desk/Workspace */}
                            <div className="rounded-2xl border border-surface-border bg-white p-6 shadow-soft">
                                <div className="border-b border-surface-border pb-4 mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-red-400" />
                                        <div className="h-2 w-2 rounded-full bg-yellow-400" />
                                        <div className="h-2 w-2 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-text-muted">frappe-workspace.desc</span>
                                </div>

                                <div className="space-y-3">
                                    <div className="rounded-lg bg-[#F9FBFC] border border-surface-border p-3 flex items-center justify-between">
                                        <span className="text-xs font-semibold text-text-secondary">Document Types</span>
                                        <span className="text-xs text-brand-blue font-mono">DocType V13</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {['Form View', 'List View', 'Kanban'].map(view => (
                                            <div key={view} className="rounded-lg border border-surface-border p-2 text-center bg-white shadow-sm">
                                                <span className="text-[11px] font-medium text-text-primary">{view}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-lg bg-surface p-3 border border-surface-border">
                                        <div className="flex items-center justify-between text-[11px] mb-1">
                                            <span className="text-text-secondary font-medium">Server Controller Script</span>
                                            <span className="text-brand-teal">Python</span>
                                        </div>
                                        <pre className="text-[10px] font-mono text-text-primary leading-tight overflow-hidden">
                                            {`def validate(self): \n  if self.total < 0:\n    frappe.throw("Invalid value")`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </Container>
            </section>
            {/* Bench CLI & Deployment Core */}
            <section className="section-padding bg-white border-y border-surface-border">
                <Container>
                    <FadeUp>
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-teal">Management & DX</span>
                            <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                                The Bench Framework CLI
                            </h2>
                            <p className="mt-4 text-sm text-text-secondary">
                                Frappe relies on **Bench**, a unified command-line tool wrapping site environments, managing multi-tenant databases, and pushing app updates seamlessly.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {[
                                { title: "App Packaging", desc: "Easily integrate custom logic inside standard Python packages inside existing sites.", cmd: "bench get-app [repo]" },
                                { title: "Multitenancy", desc: "Run 100+ mapped unique domain sites using a single Bench setup with isolated DB ports.", cmd: "bench set-config [key] [val]" },
                                { title: "Bench Console", desc: "Expose safe transactional repl interfaces to test methods directly using site domains context.", cmd: "bench --site [domain] console" }
                            ].map((box) => (
                                <div key={box.title} className="rounded-xl border border-surface-border p-5 bg-[#F9FBFC] hover:shadow-soft transition-all duration-200">
                                    <span className="text-xs font-bold text-brand-blue">{box.title}</span>
                                    <p className="mt-2 text-xs text-text-secondary">{box.desc}</p>
                                    <div className="mt-4 p-2 rounded bg-slate-900 font-mono text-[10px] text-slate-300">
                                        $ {box.cmd}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeUp>
                </Container>
            </section>

            {/* Real-time & Services grid */}
            <section className="section-padding">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <FadeUp className="lg:order-2">
                            <div className="rounded-2xl border border-slate-800 bg-[#0B1120] p-6 text-slate-400 shadow-2xl">
                                <span className="text-[10px] uppercase font-bold tracking-wider text-brand-teal">Node.js Sync streams</span>
                                <h3 className="mt-2 text-lg font-bold text-white">Socket.IO & Redis Bus</h3>
                                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                                    Frappe natively pushes transactional triggers from Python directly onto Redis PUB/SUB channels which Node.js emits instantly across open active client sockets.
                                </p>
                                <div className="mt-5 space-y-2">
                                    <div className="flex items-center justify-between p-2 rounded bg-slate-800/50 border border-slate-800">
                                        <span className="text-xs font-mono text-slate-300">redis_queue: default</span>
                                        <span className="text-[10px] text-green-400 font-bold">● Active</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded bg-slate-800/50 border border-slate-800">
                                        <span className="text-xs font-mono text-slate-300">socket_io: push_message</span>
                                        <span className="text-[10px] text-brand-teal font-bold">Connected</span>
                                    </div>
                                </div>
                            </div>
                        </FadeUp>

                        <FadeUp className="lg:order-1">
                            <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue">Component Ecosystem</span>
                            <h2 className="mt-2 text-display-sm font-bold text-text-primary">
                                Real-Time Streams Built-In
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                                Unlike monolithic stacks having to hook custom sockets, Frappe coordinates asynchronous flows using tightly bonded sidecar queues natively out of the box.
                            </p>
                        </FadeUp>
                    </div>
                </Container>
            </section>
        </div>
    );
}
