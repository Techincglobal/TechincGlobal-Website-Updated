"use client";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar";
import { LayoutProvider, useLayoutMode } from "@/components/layout/layout-provider";

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { viewMode } = useLayoutMode();
  const isSidebar = viewMode === "sidebar";

  return (
    <>
      {!isSidebar && <Header />}
      {isSidebar && <Sidebar />}
      <main id="main-content" className={cn("min-h-screen", isSidebar && "lg:pl-16")}>
        {children}
      </main>
      {!isSidebar && <Footer />}
    </>
  );
}

import { cn } from "@/lib/utils";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LayoutProvider>
      <LayoutContent>{children}</LayoutContent>
    </LayoutProvider>
  );
}
