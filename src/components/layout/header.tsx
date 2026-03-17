"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNavItems, ctaButton } from "@/config/navigation";
import type { NavItem } from "@/types";
import { useLayoutMode } from "./layout-provider";

// ---------------------------------------------------------------------------
// Icon components (inline SVGs to avoid external dependency for layout)
// ---------------------------------------------------------------------------

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-6 w-6", className)}
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Logo component
// ---------------------------------------------------------------------------

function Logo({ scrolled, isDarkBg }: { scrolled: boolean; isDarkBg?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
      aria-label="TECHINCGLOBAL - Home"
    >
      <span className="flex items-baseline text-xl font-bold tracking-tight sm:text-2xl">
        <span
          className={cn(
            "transition-colors duration-300",
            isDarkBg ? "text-white" : "text-brand-navy"
          )}
        >
          TECHINC
        </span>
        <span
          className={cn(
            "font-extrabold transition-colors duration-300",
            isDarkBg ? "text-brand-teal" : "text-brand-blue"
          )}
        >
          GLOBAL
        </span>
      </span>
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Desktop dropdown menu
// ---------------------------------------------------------------------------

interface DesktopDropdownProps {
  item: NavItem;
  isActive: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  scrolled: boolean;
  isDarkBg?: boolean;
}

function DesktopDropdown({
  item,
  isActive,
  isOpen,
  onOpen,
  onClose,
  scrolled,
  isDarkBg,
}: DesktopDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    onOpen();
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      isOpen ? onClose() : onOpen();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className={cn(
          "group inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isActive
            ? "text-brand-blue"
            : scrolled
              ? "text-text-secondary hover:text-brand-blue"
              : isDarkBg
                ? "text-white/90 hover:text-white"
                : "text-text-secondary hover:text-brand-blue"
        )}
        onClick={() => (isOpen ? onClose() : onOpen())}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDownIcon
          className={cn(
            "transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-2",
          "transition-all duration-200",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        )}
        role="menu"
        aria-label={`${item.label} submenu`}
      >
        <div className="overflow-hidden rounded-xl border border-surface-border bg-white shadow-card">
          {/* Dropdown header */}
          <div className="border-b border-surface-border bg-surface-muted/50 px-4 py-3">
            <Link
              href={item.href}
              className="group/header flex items-center justify-between text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors"
              role="menuitem"
              onClick={onClose}
            >
              All {item.label}
              <ArrowRightIcon className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/header:opacity-100 group-hover/header:translate-x-0" />
            </Link>
          </div>

          {/* Dropdown items */}
          <div className="py-2">
            {item.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className={cn(
                  "block px-4 py-2.5 text-sm text-text-secondary transition-colors duration-150",
                  "hover:bg-brand-blue-pale/50 hover:text-brand-blue",
                  "focus-visible:bg-brand-blue-pale/50 focus-visible:text-brand-blue focus-visible:outline-none"
                )}
                role="menuitem"
                onClick={onClose}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Desktop navigation link (no dropdown)
// ---------------------------------------------------------------------------

interface DesktopNavLinkProps {
  item: NavItem;
  isActive: boolean;
  scrolled: boolean;
  isDarkBg?: boolean;
}

function DesktopNavLink({ item, isActive, scrolled, isDarkBg }: DesktopNavLinkProps) {
  return (
    <Link
      href={item.href}
      className={cn(
        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        isActive
          ? "text-brand-blue"
          : scrolled
            ? "text-text-secondary hover:text-brand-blue"
            : isDarkBg
              ? "text-white/90 hover:text-white"
              : "text-text-secondary hover:text-brand-blue"
      )}
    >
      {item.label}
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Mobile navigation
// ---------------------------------------------------------------------------

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-brand-navy/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-surface-border px-6 py-4">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-brand-navy">TECHINC</span>
            <span className="font-extrabold text-brand-blue">GLOBAL</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-muted hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close navigation menu"
          >
            <XIcon />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedItems.includes(item.label);

              return (
                <li key={item.label}>
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => toggleExpanded(item.label)}
                        className={cn(
                          "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-base font-medium transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                          isActive
                            ? "bg-brand-blue-pale/50 text-brand-blue"
                            : "text-text-primary hover:bg-surface-muted"
                        )}
                        aria-expanded={isExpanded}
                      >
                        {item.label}
                        <ChevronDownIcon
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            isExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Expandable children */}
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="ml-4 border-l-2 border-surface-border pl-4 pt-1 pb-2">
                          {/* "All" link */}
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className={cn(
                              "block rounded-md px-3 py-2 text-sm font-semibold transition-colors",
                              "text-brand-navy hover:text-brand-blue hover:bg-brand-blue-pale/30"
                            )}
                          >
                            All {item.label}
                          </Link>
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className={cn(
                                "block rounded-md px-3 py-2 text-sm transition-colors",
                                pathname === child.href
                                  ? "bg-brand-blue-pale/50 text-brand-blue font-medium"
                                  : "text-text-secondary hover:text-brand-blue hover:bg-brand-blue-pale/30"
                              )}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        isActive
                          ? "bg-brand-blue-pale/50 text-brand-blue"
                          : "text-text-primary hover:bg-surface-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <div className="mt-6 px-4">
            <Link
              href={ctaButton.href}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-blue/25 transition-all duration-200 hover:bg-brand-blue-light hover:shadow-xl hover:shadow-brand-blue/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {ctaButton.label}
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Header component
// ---------------------------------------------------------------------------

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { viewMode, setViewMode } = useLayoutMode();

  const isDarkBg = !scrolled && (pathname === "/" || pathname === "/frappe" || pathname === "/erpnext");

  // Track scroll position for header background transition
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    // Set initial state
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      {/* Skip to main content - accessibility */}
      <a
        href="#main-content"
        className="skip-to-content"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-surface-border/60 bg-white/90 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Logo scrolled={scrolled} isDarkBg={isDarkBg} />

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Main navigation"
          >
            {mainNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  item.href !== "#" &&
                  pathname.startsWith(item.href));
              const hasChildren = item.children && item.children.length > 0;

              if (hasChildren) {
                return (
                  <DesktopDropdown
                    key={item.label}
                    item={item}
                    isActive={isActive}
                    isOpen={openDropdown === item.label}
                    onOpen={() => setOpenDropdown(item.label)}
                    onClose={() => setOpenDropdown(null)}
                    scrolled={scrolled}
                    isDarkBg={isDarkBg}
                  />
                );
              }

              return (
                <DesktopNavLink
                  key={item.label}
                  item={item}
                  isActive={isActive}
                  scrolled={scrolled}
                  isDarkBg={isDarkBg}
                />
              );
            })}
          </nav>

          {/* Right section: CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Workspace Toggle */}
            <button
              type="button"
              onClick={() => setViewMode(viewMode === "top" ? "sidebar" : "top")}
              className={cn(
                "hidden lg:inline-flex items-center justify-center rounded-lg p-2 transition-all duration-200",
                isDarkBg
                  ? "text-white/80 hover:bg-white/10 hover:text-white"
                  : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
              )}
              title={viewMode === "top" ? "Switch to Sidebar Workspace" : "Switch to Top Navbar"}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </button>

            {/* Desktop CTA button */}
            <Link
              href={ctaButton.href}
              className={cn(
                "hidden items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 lg:inline-flex",
                "bg-brand-blue text-white shadow-md shadow-brand-blue/20",
                "hover:bg-brand-blue-light hover:shadow-lg hover:shadow-brand-blue/30",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "active:scale-[0.98]"
              )}
            >
              {ctaButton.label}
              <ArrowRightIcon />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                scrolled
                  ? "text-text-primary hover:bg-surface-muted"
                  : "text-text-primary hover:bg-surface-muted"
              )}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Spacer to offset fixed header height */}
      {!isDarkBg && <div className="h-16 sm:h-18 lg:h-20" aria-hidden="true" />}
    </>
  );
}
