"use client";

import { createContext, useContext, useState, useEffect } from "react";

type ViewMode = "top" | "sidebar";

const LayoutContext = createContext<{
    viewMode: ViewMode;
    setViewMode: (mode: ViewMode) => void;
}>({
    viewMode: "top",
    setViewMode: () => { },
});

export const useLayoutMode = () => useContext(LayoutContext);

export function LayoutProvider({ children }: { children: React.ReactNode }) {
    const [viewMode, setViewMode] = useState<ViewMode>("top");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("layout-mode") as ViewMode;
        if (saved) setViewMode(saved);
        setMounted(true);
    }, []);

    const handleSetMode = (mode: ViewMode) => {
        setViewMode(mode);
        localStorage.setItem("layout-mode", mode);
    };

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LayoutContext.Provider value={{ viewMode, setViewMode: handleSetMode }}>
            {children}
        </LayoutContext.Provider>
    );
}
