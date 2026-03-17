import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  Tag,
  BookOpen,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { CTASection } from "@/components/shared/cta-section";
import { formatDate } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ArticleSection {
  id: string;
  heading: string;
  content: string; // HTML string
}

interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  author: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
}

// ---------------------------------------------------------------------------
// Full article data for all 6 posts
// ---------------------------------------------------------------------------

const blogPosts: BlogPostData[] = [
  {
    slug: "why-sri-lankan-businesses-choosing-erpnext",
    title: "Why Sri Lankan Businesses Are Choosing ERPNext in 2025",
    excerpt:
      "Discover why a growing number of Sri Lankan enterprises are migrating to ERPNext for its cost-effectiveness, flexibility, and comprehensive feature set.",
    category: "ERPNext",
    date: "2025-01-15",
    readingTime: "8 min read",
    author: "TECHINCGLOBAL Team",
    introduction: `<p>The enterprise resource planning landscape in Sri Lanka is undergoing a significant shift. As businesses face increasing pressure to digitize operations while managing costs, a growing number of enterprises are turning to ERPNext as their platform of choice. From mid-market manufacturers to large distribution companies, the trend is unmistakable: open-source ERP is no longer an experiment — it is a strategic decision.</p>
<p>In this article, we explore the key factors driving ERPNext adoption across Sri Lanka, the tangible benefits organisations are realising, and why 2025 may be the tipping point for businesses still running legacy systems or spreadsheet-dependent workflows.</p>`,
    sections: [
      {
        id: "cost-effectiveness",
        heading: "Cost-Effectiveness Without Compromise",
        content: `<p>One of the most compelling reasons Sri Lankan businesses are choosing ERPNext is its total cost of ownership. Traditional ERP systems such as SAP Business One or Oracle NetSuite carry substantial licensing fees that can exceed LKR 10 million annually for a mid-sized operation — before factoring in implementation, customisation, and ongoing maintenance costs.</p>
<p>ERPNext, built on the open-source Frappe framework, eliminates per-user licensing fees entirely. Businesses pay only for implementation, hosting, and support. For a typical 50-user deployment, this translates to savings of 60-70% compared to proprietary alternatives over a five-year period. These savings can be redirected toward training, process improvement, and scaling the system as the business grows.</p>
<p>Importantly, cost savings do not come at the expense of functionality. ERPNext includes modules for accounting, inventory, manufacturing, HR, CRM, project management, and more — all integrated out of the box. Businesses are not purchasing a stripped-down product and paying for add-ons; they are getting a fully featured ERP platform from day one.</p>`,
      },
      {
        id: "local-compliance",
        heading: "Built-In Support for Local Compliance",
        content: `<p>Sri Lankan businesses must comply with specific regulatory requirements including VAT, SVAT, PAYE, and EPF/ETF calculations. Many global ERP platforms treat these as afterthoughts, requiring expensive localisation modules or third-party integrations.</p>
<p>ERPNext's open architecture allows certified implementation partners like TECHINCGLOBAL to build and maintain Sri Lanka-specific compliance features directly within the platform. This includes automated tax calculations aligned with Inland Revenue Department requirements, multi-currency support essential for import/export businesses, and statutory reporting templates that auditors recognise and accept.</p>
<p>The result is a system that not only manages day-to-day operations but also ensures regulatory compliance without manual workarounds or separate reporting tools.</p>`,
      },
      {
        id: "flexibility-customisation",
        heading: "Unmatched Flexibility and Customisation",
        content: `<p>Every business has unique processes that differentiate it from competitors. A garment manufacturer's quality control workflow, a tea exporter's blending and grading system, or a logistics company's route optimisation logic — these are the processes that cannot simply be forced into a rigid template.</p>
<p>ERPNext's architecture is designed for customisation. Using the Frappe framework, developers can create custom doctypes (data models), workflows, print formats, and reports without modifying the core codebase. This means businesses can tailor the system precisely to their operations while still receiving upstream updates and security patches.</p>
<p>For Sri Lankan enterprises, this flexibility is especially valuable. Many operate in niche industries or have evolved unique operational models over decades. ERPNext respects that reality rather than demanding wholesale process change to fit software limitations.</p>`,
      },
      {
        id: "growing-ecosystem",
        heading: "A Growing Local Ecosystem",
        content: `<p>Adopting any enterprise system requires confidence in the availability of local support, skilled implementers, and a community of peers. The ERPNext ecosystem in Sri Lanka has matured significantly over the past three years.</p>
<p>Authorised partners like TECHINCGLOBAL provide end-to-end services including business process analysis, implementation, training, and ongoing support. The presence of local experts means businesses are not dependent on overseas consultants working across time zones — support is available in Sinhala, Tamil, and English during local business hours.</p>
<p>Additionally, the global Frappe/ERPNext community contributes thousands of improvements annually. Sri Lankan businesses benefit from innovations developed by users worldwide, from manufacturing optimisations contributed by Indian factories to accounting enhancements driven by African enterprises.</p>`,
      },
      {
        id: "implementation-speed",
        heading: "Faster Implementation with NXTGEN Methodology",
        content: `<p>A common concern with any ERP implementation is the time to go-live. Traditional implementations can stretch 12-18 months, straining budgets and organisational patience. Failed or delayed ERP projects remain one of the biggest risks in enterprise IT.</p>
<p>TECHINCGLOBAL's proprietary NXTGEN Agile methodology addresses this directly. By breaking implementations into focused sprints with measurable deliverables, businesses see functional modules going live within weeks rather than months. The phased approach also reduces risk — each module is validated with real users before proceeding to the next.</p>
<p>Our data shows that the NXTGEN approach delivers complete implementations 40% faster than traditional waterfall methodologies, while achieving higher user adoption rates because stakeholders are involved throughout the process rather than being presented with a finished system they had no hand in shaping.</p>`,
      },
    ],
    conclusion: `<p>The shift toward ERPNext among Sri Lankan businesses is driven by a pragmatic assessment of value, flexibility, and long-term viability. In an economic environment where every investment must justify itself, ERPNext offers enterprise-grade capabilities at a fraction of the cost of proprietary alternatives.</p>
<p>If your organisation is evaluating ERP options or considering a migration from a legacy system, we invite you to explore how ERPNext and the NXTGEN methodology can accelerate your digital transformation. Contact TECHINCGLOBAL for a free consultation and discover what a modern, cost-effective ERP solution can do for your business.</p>`,
  },
  {
    slug: "true-cost-running-business-on-spreadsheets",
    title: "The True Cost of Running Your Business on Spreadsheets",
    excerpt:
      "Spreadsheets may seem free, but the hidden costs of errors, inefficiency, and lost opportunities can be staggering. Here's what you're really paying.",
    category: "Digital Transformation",
    date: "2025-01-08",
    readingTime: "6 min read",
    author: "TECHINCGLOBAL Team",
    introduction: `<p>Spreadsheets are the Swiss army knife of business tools. Nearly every company uses them, and for good reason — they are familiar, flexible, and seemingly free. But when spreadsheets become the backbone of critical business processes like inventory management, financial reporting, or order tracking, the hidden costs start to accumulate in ways that are difficult to measure but impossible to ignore.</p>
<p>We have worked with dozens of businesses that did not realise how much their spreadsheet dependency was costing them until they migrated to an integrated system. Here is what we have learned about the true cost of spreadsheet-driven operations.</p>`,
    sections: [
      {
        id: "error-rates",
        heading: "The Staggering Cost of Spreadsheet Errors",
        content: `<p>Research consistently shows that approximately 88% of spreadsheets contain at least one error. When your purchase orders, inventory counts, or financial reports rely on manually maintained spreadsheets, errors are not a question of "if" but "when." A misplaced decimal point in a pricing sheet can cost thousands. A broken formula in an inventory tracker can lead to stockouts that damage customer relationships.</p>
<p>One of our clients, a distribution company, discovered during their ERP migration that spreadsheet errors had been causing a 3-5% discrepancy in their monthly financial reporting for over two years. The cumulative impact on their tax filings, budgeting decisions, and investor reporting was substantial — and entirely avoidable.</p>`,
      },
      {
        id: "hidden-labour-costs",
        heading: "Hidden Labour Costs and Productivity Drain",
        content: `<p>Consider how much time your team spends each week entering data into spreadsheets, copying information from one sheet to another, reconciling discrepancies between departmental files, and creating reports by manually aggregating data. In our assessments, we typically find that finance teams spend 15-25 hours per week on spreadsheet maintenance that an integrated ERP system would automate entirely.</p>
<p>That is not just a labour cost — it is an opportunity cost. Those hours could be spent on financial analysis, strategic planning, vendor negotiations, or customer relationship management. When your most skilled employees spend their time on data entry rather than value creation, the entire organisation suffers.</p>`,
      },
      {
        id: "decision-making-impact",
        heading: "Delayed and Unreliable Decision-Making",
        content: `<p>In a spreadsheet-driven operation, getting an accurate picture of business performance requires collecting, consolidating, and verifying data from multiple sources. This process can take days or even weeks, which means leadership is consistently making decisions based on outdated information.</p>
<p>An integrated ERP system provides real-time dashboards and reports because all data flows through a single source of truth. The difference between making a pricing decision based on last month's aggregated spreadsheet versus today's actual margin data can be the difference between profitability and loss on a major contract.</p>`,
      },
    ],
    conclusion: `<p>The true cost of spreadsheets is not the software itself — it is the errors, the wasted time, and the missed opportunities that accumulate invisibly over months and years. If your business has outgrown spreadsheets, exploring an integrated ERP solution is not an expense — it is an investment in accuracy, efficiency, and competitive advantage.</p>`,
  },
  {
    slug: "signs-legacy-erp-needs-replacement",
    title: "5 Signs Your Legacy ERP System Needs Replacement",
    excerpt:
      "Is your current ERP holding your business back? Learn the critical warning signs that indicate it's time for a modern solution.",
    category: "Best Practices",
    date: "2024-12-20",
    readingTime: "7 min read",
    author: "TECHINCGLOBAL Team",
    introduction: `<p>Your ERP system was a significant investment when it was first implemented. It served the business well for years, streamlining processes and providing the structure needed to grow. But technology evolves, business requirements change, and what was once a powerful tool can gradually become an anchor holding your organisation back.</p>
<p>Recognising when it is time to replace your legacy ERP is crucial. Waiting too long increases migration complexity and prolongs the period during which your business operates at a competitive disadvantage. Here are five clear signals that your current system has reached its limits.</p>`,
    sections: [
      {
        id: "workarounds-everywhere",
        heading: "Your Team Has Built Workarounds for Everything",
        content: `<p>When users routinely export data to spreadsheets for processing, maintain shadow databases, or use third-party tools to fill gaps in the ERP's functionality, these workarounds represent a failure of the system to meet business needs. Each workaround introduces risk — data integrity issues, security gaps, and process inconsistencies that compound over time.</p>
<p>If your team spends more time working around the system than working within it, that is a clear signal that the platform no longer fits your business. A modern ERP should adapt to your processes, not force your people to invent creative bypasses.</p>`,
      },
      {
        id: "integration-difficulties",
        heading: "Integrating with Modern Tools Is Painful or Impossible",
        content: `<p>Today's business operations depend on seamless data flow between systems — your e-commerce platform, payment gateways, CRM, logistics partners, and banking systems all need to exchange data with your ERP. Legacy systems, particularly those built on outdated architectures, often lack modern APIs or require expensive middleware to achieve even basic integrations.</p>
<p>If connecting a new sales channel or onboarding a logistics partner requires a six-month IT project, your ERP is actively limiting your ability to respond to market opportunities. Modern platforms like ERPNext are built API-first, making integrations straightforward and cost-effective.</p>`,
      },
      {
        id: "vendor-support-declining",
        heading: "Vendor Support Is Declining or Costs Are Rising",
        content: `<p>Legacy ERP vendors often shift their focus to newer products, gradually reducing investment in older platforms. Support response times increase, patches become less frequent, and annual maintenance fees continue to rise even as the value delivered decreases. If your vendor is pushing you toward a migration to their newer (and more expensive) platform, it is worth evaluating whether that upgrade truly serves your interests or theirs.</p>
<p>Open-source platforms like ERPNext offer a different model entirely — community-driven development ensures continuous improvement, and businesses are never locked into a single vendor's roadmap or pricing decisions.</p>`,
      },
    ],
    conclusion: `<p>If you recognised your organisation in any of these signs, the time to start planning your ERP replacement is now — not when the system fails catastrophically. A well-planned migration, executed with the right methodology, can transform your operations while minimising disruption. Reach out to our team for a no-obligation assessment of your current system and a roadmap for modernisation.</p>`,
  },
  {
    slug: "understanding-frappe-framework-technical-overview",
    title: "Understanding the Frappe Framework: A Technical Overview",
    excerpt:
      "A deep dive into the Frappe framework that powers ERPNext, exploring its architecture, extensibility, and why it's ideal for enterprise applications.",
    category: "ERPNext",
    date: "2024-12-12",
    readingTime: "10 min read",
    author: "TECHINCGLOBAL Team",
    introduction: `<p>ERPNext's capabilities are impressive, but to truly understand its potential, you need to look beneath the surface at the Frappe framework that powers it. Frappe is a full-stack, open-source web application framework built with Python and JavaScript that provides the foundation for rapid development of business applications.</p>
<p>For technical decision-makers evaluating ERPNext, understanding Frappe is essential. It determines what customisations are possible, how the system scales, and what the long-term development experience looks like.</p>`,
    sections: [
      {
        id: "metadata-driven-architecture",
        heading: "Metadata-Driven Architecture",
        content: `<p>At its core, Frappe uses a metadata-driven approach where application entities — called DocTypes — are defined through configuration rather than code. Each DocType specifies its fields, validations, permissions, and workflows declaratively. The framework then automatically generates the database schema, REST APIs, form views, list views, and report builders.</p>
<p>This approach dramatically accelerates development. Creating a new business entity — say a custom quality inspection checklist — requires defining the DocType with its fields and relationships. Frappe handles the database migration, creates the CRUD API endpoints, builds the user interface, and applies the permission model. What would take weeks in a traditional framework is accomplished in hours.</p>`,
      },
      {
        id: "extensibility-model",
        heading: "The Custom App Extensibility Model",
        content: `<p>One of Frappe's most powerful features is its custom app architecture. Rather than modifying ERPNext's core code — which would create maintenance nightmares during upgrades — developers create separate custom apps that extend or override core functionality. These apps can add new DocTypes, override existing methods, add custom fields to standard forms, and introduce entirely new workflows.</p>
<p>This separation of concerns means that businesses can heavily customise their ERPNext installation while still receiving upstream updates and security patches. It also means that industry-specific solutions can be packaged as reusable apps, reducing implementation time for similar businesses.</p>`,
      },
      {
        id: "real-time-and-api",
        heading: "Real-Time Communication and API-First Design",
        content: `<p>Frappe includes built-in WebSocket support for real-time updates, a comprehensive REST API that exposes every DocType method, and a powerful RPC (Remote Procedure Call) layer for custom server-side logic. Every action that can be performed through the user interface can also be executed via the API, making Frappe applications inherently integration-friendly.</p>
<p>For enterprises, this means connecting ERPNext to e-commerce platforms, mobile applications, IoT devices, or business intelligence tools is straightforward. The API layer is not an afterthought — it is a fundamental part of the framework's architecture.</p>`,
      },
    ],
    conclusion: `<p>Frappe represents a mature, well-architected framework that gives ERPNext its flexibility and extensibility. For businesses evaluating ERPNext, the strength of its underlying framework provides confidence that the platform can grow and adapt alongside their operations for years to come.</p>`,
  },
  {
    slug: "nxtgen-methodology-reduces-erp-implementation-risk",
    title: "How NXTGEN Methodology Reduces ERP Implementation Risk",
    excerpt:
      "ERP implementations have a high failure rate. Learn how our NXTGEN Agile approach systematically eliminates the most common causes of project failure.",
    category: "Best Practices",
    date: "2024-12-05",
    readingTime: "9 min read",
    author: "TECHINCGLOBAL Team",
    introduction: `<p>Industry research consistently shows that 55-75% of ERP implementations fail to meet their objectives, exceed their budgets, or miss their deadlines. These statistics are sobering for any business planning an ERP investment, and they raise a critical question: what separates successful implementations from failed ones?</p>
<p>After more than 150 implementations, we developed the NXTGEN Agile methodology specifically to address the root causes of ERP project failure. Here is how it works and why it delivers consistently better outcomes.</p>`,
    sections: [
      {
        id: "why-implementations-fail",
        heading: "Why Traditional ERP Implementations Fail",
        content: `<p>Most ERP failures share common patterns. The project scope is defined in exhaustive detail at the outset, before anyone truly understands how the system will interact with real business processes. Months pass in a configuration black box before users see anything functional. By the time the system reaches user acceptance testing, it is too late and too expensive to make meaningful changes. Users feel the system was imposed on them, adoption is poor, and the project is declared a failure.</p>
<p>The waterfall approach — define everything, build everything, then test everything — creates a high-risk, high-stakes environment where problems are discovered late and corrections are expensive. The NXTGEN methodology inverts this model entirely.</p>`,
      },
      {
        id: "nxtgen-approach",
        heading: "The NXTGEN Agile Approach",
        content: `<p>NXTGEN breaks the implementation into focused two-week sprints, each delivering a functional, tested module that real users can immediately start working with. The first sprint typically covers core setup and a single critical business process — often order-to-cash or procure-to-pay. Users provide feedback on a working system, not a specification document.</p>
<p>Each subsequent sprint adds functionality based on prioritised business value, with continuous feedback loops ensuring the system evolves to match actual needs rather than assumptions. This approach means that the system in production after six months is one that has been shaped by real user experience, not one designed in isolation by consultants.</p>`,
      },
      {
        id: "change-management",
        heading: "Built-In Change Management and Adoption",
        content: `<p>NXTGEN treats user adoption not as a post-implementation concern but as a core project deliverable from day one. Each sprint includes training sessions, feedback collection, and process refinement. By the time the full system is live, users have been working with it — and shaping it — for months. The psychological shift from "they gave us a new system" to "we built this system together" is profound and measurable in adoption rates.</p>
<p>Our implementation data shows that NXTGEN projects achieve 85%+ user adoption within the first month of full go-live, compared to an industry average of approximately 40% for traditional implementations. This difference alone justifies the methodology.</p>`,
      },
    ],
    conclusion: `<p>ERP implementation risk is not inherent to the technology — it is a consequence of the methodology used to deploy it. The NXTGEN Agile approach systematically addresses the most common failure points by delivering value early, incorporating feedback continuously, and treating user adoption as a first-class project objective. If you are planning an ERP implementation and want to learn how NXTGEN can reduce your project risk, we welcome the conversation.</p>`,
  },
  {
    slug: "digital-transformation-roadmap-mid-market",
    title: "Digital Transformation Roadmap for Mid-Market Enterprises",
    excerpt:
      "A practical, step-by-step guide to planning and executing digital transformation for mid-sized businesses in South Asia.",
    category: "Digital Transformation",
    date: "2024-11-28",
    readingTime: "12 min read",
    author: "TECHINCGLOBAL Team",
    introduction: `<p>Digital transformation has become a board-level priority for mid-market enterprises across South Asia, but the path from intention to execution remains unclear for many organisations. Unlike large corporations with dedicated digital teams and substantial budgets, mid-market businesses must be strategic about where they invest and in what sequence.</p>
<p>This roadmap provides a practical, phased approach to digital transformation that mid-sized businesses can adapt to their specific circumstances, industry, and maturity level.</p>`,
    sections: [
      {
        id: "assessment-phase",
        heading: "Phase 1: Honest Assessment of Current State",
        content: `<p>Before investing in any technology, you need a clear-eyed understanding of where your business stands today. This assessment should cover three dimensions: process maturity (how standardised and documented are your core business processes?), technology inventory (what systems, tools, and spreadsheets currently run your operations?), and organisational readiness (does leadership support change, and do teams have the capacity to adopt new ways of working?).</p>
<p>The most common mistake mid-market businesses make is jumping straight to technology selection without this foundation. A business that automates broken processes simply gets broken results faster. The assessment phase, which typically takes 2-4 weeks, provides the baseline that shapes every subsequent decision.</p>`,
      },
      {
        id: "foundation-building",
        heading: "Phase 2: Building the Digital Foundation",
        content: `<p>With the assessment complete, the next phase focuses on establishing core digital infrastructure — typically an integrated ERP system that serves as the single source of truth for business data. This is not about digitising every process simultaneously; it is about starting with the highest-impact, most painful processes and building outward.</p>
<p>For most mid-market businesses, the foundation phase focuses on financial management, inventory and procurement, and basic CRM. These three pillars, properly implemented, eliminate the majority of spreadsheet dependencies and provide the data infrastructure needed for subsequent digital initiatives.</p>`,
      },
      {
        id: "optimisation-and-scaling",
        heading: "Phase 3: Optimisation and Scaling",
        content: `<p>Once the foundation is stable and adopted, the focus shifts to optimisation and expansion. This phase leverages the data now flowing through your integrated system to identify bottlenecks, automate repetitive workflows, and extend digital capabilities to additional departments or business functions.</p>
<p>Common Phase 3 initiatives include automated reporting and business intelligence dashboards, e-commerce integration, mobile access for field teams, and advanced modules like manufacturing planning or project management. Each initiative builds on the foundation established in Phase 2, reducing implementation risk and accelerating time to value.</p>`,
      },
    ],
    conclusion: `<p>Digital transformation for mid-market enterprises is not a single project — it is a journey that unfolds over 12-24 months. The key to success is starting with a clear assessment, building a strong foundation, and expanding systematically based on business value and organisational readiness. TECHINCGLOBAL specialises in guiding mid-market businesses through each phase of this journey. Contact us to discuss where you are today and where you want to be tomorrow.</p>`,
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getPostBySlug(slug: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

function getRelatedPosts(currentSlug: string): BlogPostData[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  // Prefer same category, then most recent
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.category === current.category
  );
  const others = blogPosts.filter(
    (p) => p.slug !== currentSlug && p.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, 2);
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    ERPNext: "bg-blue-50 text-blue-700 border-blue-200",
    "Digital Transformation": "bg-purple-50 text-purple-700 border-purple-200",
    "Business Automation": "bg-teal-50 text-teal-700 border-teal-200",
    "Best Practices": "bg-amber-50 text-amber-700 border-amber-200",
  };
  return colors[category] ?? "bg-gray-50 text-gray-700 border-gray-200";
}

// ---------------------------------------------------------------------------
// Static params & metadata
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | TECHINCGLOBAL Blog`,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Breadcrumbs & Article header                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-b border-surface-border bg-surface-muted pb-12 pt-4">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />

          <div className="mx-auto mt-8 max-w-3xl text-center">
            {/* Category badge */}
            <div className="mb-4">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${getCategoryColor(post.category)}`}
              >
                <Tag className="mr-1.5 h-3 w-3" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-display-lg font-bold tracking-tight text-text-primary">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-text-muted">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Article body with sidebar TOC                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-section-md">
        <Container>
          <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[1fr_280px] lg:gap-12">
            {/* Main article content */}
            <article className="prose prose-lg mx-auto max-w-3xl lg:mx-0">
              {/* Introduction */}
              <div
                className="text-lg leading-relaxed text-text-secondary"
                dangerouslySetInnerHTML={{ __html: post.introduction }}
              />

              {/* Sections */}
              {post.sections.map((section) => (
                <div key={section.id} className="mt-10">
                  <h2
                    id={section.id}
                    className="text-display-sm font-bold tracking-tight text-text-primary"
                  >
                    {section.heading}
                  </h2>
                  <div
                    className="mt-4 space-y-4 text-base leading-relaxed text-text-secondary"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}

              {/* Conclusion */}
              <div className="mt-10">
                <h2
                  id="conclusion"
                  className="text-display-sm font-bold tracking-tight text-text-primary"
                >
                  Conclusion
                </h2>
                <div
                  className="mt-4 space-y-4 text-base leading-relaxed text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: post.conclusion }}
                />
              </div>
            </article>

            {/* Sidebar — Table of Contents (desktop only) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Table of Contents
                </h3>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2 border-l-2 border-surface-border pl-4">
                    {post.sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="block text-sm text-text-secondary transition-colors hover:text-brand-blue"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="#conclusion"
                        className="block text-sm text-text-secondary transition-colors hover:text-brand-blue"
                      >
                        Conclusion
                      </a>
                    </li>
                  </ul>
                </nav>

                <Separator className="my-6" />

                {/* Sidebar CTA */}
                <div className="rounded-2xl border border-surface-border bg-surface-muted p-5">
                  <h4 className="text-sm font-semibold text-text-primary">
                    Need Expert Guidance?
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                    Our certified ERPNext consultants can help you navigate your
                    digital transformation journey.
                  </p>
                  <Button size="sm" className="mt-4 w-full" asChild>
                    <Link href="/contact">Book Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Author bio                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-surface-border bg-surface-muted py-12">
        <Container size="narrow">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Avatar */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 text-lg font-bold text-brand-blue">
              TG
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary">
                TECHINCGLOBAL Team
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                TECHINCGLOBAL is Sri Lanka&apos;s leading ERPNext implementation
                partner. Our team of certified consultants, developers, and
                business analysts share their expertise through in-depth
                articles on ERP strategy, digital transformation, and business
                process automation.
              </p>
              <div className="mt-3 flex gap-3">
                <Link
                  href="/about"
                  className="text-sm font-medium text-brand-blue transition-colors hover:text-brand-blue-light"
                >
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="text-sm font-medium text-brand-blue transition-colors hover:text-brand-blue-light"
                >
                  All Articles
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Related articles                                                   */}
      {/* ------------------------------------------------------------------ */}
      {relatedPosts.length > 0 && (
        <section className="py-section-md">
          <Container>
            <div className="mb-10 text-center">
              <h2 className="text-display-sm font-bold tracking-tight text-text-primary">
                Related Articles
              </h2>
              <p className="mt-2 text-text-secondary">
                Continue exploring insights from the TECHINCGLOBAL team.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <Card key={related.slug} className="flex flex-col">
                  <CardHeader className="flex-1">
                    <div className="mb-3">
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getCategoryColor(related.category)}`}
                      >
                        {related.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">
                      <Link
                        href={`/blog/${related.slug}`}
                        className="transition-colors hover:text-brand-blue"
                      >
                        {related.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="mt-2 line-clamp-2">
                      {related.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(related.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {related.readingTime}
                      </span>
                    </div>
                    <Separator className="my-4" />
                    <Link
                      href={`/blog/${related.slug}`}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-light"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Bottom CTA                                                         */}
      {/* ------------------------------------------------------------------ */}
      <CTASection
        heading="Need Expert Guidance?"
        description="Our certified ERPNext consultants are ready to help you plan and execute your digital transformation. Book a free consultation to discuss your specific needs."
        primaryButton={{
          label: "Book Free Consultation",
          href: "/contact",
        }}
        secondaryButton={{
          label: "Explore Our Services",
          href: "/services",
        }}
      />
    </>
  );
}
