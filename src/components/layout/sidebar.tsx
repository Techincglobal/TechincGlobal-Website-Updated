"use client";

import {
    LayoutDashboard,
    Settings,
    Layers,
    Workflow,
    Lightbulb,
    BarChart2,
    FolderLock,
    ArrowLeftSquare
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useLayoutMode } from "./layout-provider";

const sidebarNavItems = [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Methodology", href: "/methodology", icon: Workflow },
    { label: "Assessment", href: "/assessment", icon: BarChart2 },
    { label: "ERPNext", href: "/erpnext", icon: Layers },
    { label: "Frappe Framework", href: "/frappe", icon: Settings },
    { label: "Services", href: "/services", icon: Lightbulb },
    { label: "Industries", href: "/industries", icon: FolderLock },
];

export function Sidebar() {
    const pathname = usePathname();
    const { setViewMode } = useLayoutMode();

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-16 border-r border-slate-800 bg-[#0B1120] text-slate-400 z-50 hidden lg:flex flex-col items-center py-4 shadow-2xl">
            {/* Minimalist Logo / Icon */}
            <div className="mb-8">
                <Link href="/" className="h-9 w-9 flex items-center justify-center rounded-lg bg-brand-blue/20 border border-slate-700 font-bold text-white text-sm">
                    <span className="text-brand-teal">T</span><span>G</span>
                </Link>
            </div>

            {/* Navigation Icons Stack */}
            <nav className="flex-1 flex flex-col items-center gap-4 w-full px-2" aria-label="Sidebar navigation">
                {sidebarNavItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                        <div key={item.href} className="group relative flex justify-center w-full">
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center justify-center h-10 w-10 rounded-xl transition-all duration-200",
                                    isActive
                                        ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20"
                                        : "hover:bg-slate-800/60 hover:text-white"
                                )}
                            >
                                <Icon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                            </Link>

                            {/* Hover Tooltip */}
                            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 rounded-md bg-[#0F172A] border border-slate-800 text-slate-200 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl border-l-brand-teal border-l-2 z-50">
                                {item.label}
                            </div>
                        </div>
                    );
                })}
            </nav>

            {/* Bottom Toggle Out */}
            <div className="mt-auto px-2 w-full flex justify-center">
                <button
                    type="button"
                    onClick={() => setViewMode("top")}
                    className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    title="Switch to Top Navbar"
                >
                    <ArrowLeftSquare className="h-5 w-5" />
                </button>
            </div>
        </aside>
    );
}
