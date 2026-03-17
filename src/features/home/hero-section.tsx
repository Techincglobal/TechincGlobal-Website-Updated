import Link from "next/link";

import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/shared/motion-wrapper";

// ---------------------------------------------------------------------------
// HeroSection
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-hero-gradient"
      aria-label="Hero"
    >
      {/* ----------------------------------------------------------------- */}
      {/* Decorative background elements                                    */}
      {/* ----------------------------------------------------------------- */}

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      {/* Gradient orb - top right */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />

      {/* Gradient orb - bottom left */}
      <div
        className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-brand-teal/8 blur-3xl"
        aria-hidden="true"
      />

      {/* ----------------------------------------------------------------- */}
      {/* Hero content                                                      */}
      {/* ----------------------------------------------------------------- */}

      <Container size="default" className="relative z-10">
        <div className="flex flex-col items-center pb-20 pt-28 text-center sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-44">
          <FadeUp>
            {/* Eyebrow */}
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-teal backdrop-blur-sm">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-teal"
                aria-hidden="true"
              />
              Authorized Frappe Technologies Partner
            </p>

            {/* Main headline */}
            <h1 className="mx-auto max-w-4xl text-display-lg font-bold tracking-tight text-text-inverse sm:text-display-xl lg:text-display-2xl">
              Transform Your Business with{" "}
              <span className="bg-blue-gradient bg-clip-text text-transparent">
                NXTGEN ERP Solutions
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-text-inverse/70 sm:text-xl">
              Accelerate your digital transformation with Sri Lanka&rsquo;s
              leading ERPNext implementation partner. Our proprietary NXTGEN
              Agile methodology delivers enterprise ERP solutions 40% faster
              with guaranteed adoption.
            </p>

            {/* CTAs & Workspace Portal Search */}
            <div className="mt-10 mx-auto w-full max-w-xl">
              <div className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 p-1.5 backdrop-blur-md shadow-2xl">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <svg
                    className="h-5 w-5 text-brand-teal/80 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for inventory, manufacturing, accounting..."
                    className="bg-transparent text-sm text-white placeholder-white/40 outline-none w-full"
                    disabled
                  />
                </div>
                <Button size="lg" className="rounded-xl sm:px-5" asChild>
                  <Link href="/contact">Book Consultation</Link>
                </Button>
              </div>

              {/* Suggestion Tags */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-xs text-text-inverse/60">
                <span className="font-medium">Suggestions:</span>
                {[
                  { label: "Manufacturing", href: "/industries/manufacturing" },
                  { label: "Inventory", href: "/services" },
                  { label: "Custom App", href: "/services" },
                  { label: "Frappe", href: "/services" }
                ].map((tag) => (
                  <Link
                    key={tag.label}
                    href={tag.href}
                    className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 hover:bg-white/10 hover:text-text-inverse hover:border-white/20 transition-all font-medium"
                  >
                    {tag.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* ----------------------------------------------------------------- */}
          {/* Trust indicator strip                                             */}
          {/* ----------------------------------------------------------------- */}

          <FadeUp delay={0.3}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm text-text-inverse/50">
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-brand-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Frappe Authorized Partner
              </span>
              <span
                className="hidden h-4 w-px bg-white/20 sm:inline-block"
                aria-hidden="true"
              />
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-brand-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5"
                  />
                </svg>
                150+ Implementations
              </span>
              <span
                className="hidden h-4 w-px bg-white/20 sm:inline-block"
                aria-hidden="true"
              />
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-brand-teal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                98% Client Satisfaction
              </span>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

export { HeroSection };
