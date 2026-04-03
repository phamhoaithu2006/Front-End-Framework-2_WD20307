// context/ThemeContext.tsx
import { createContext, useState, useEffect } from "react";

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
        const saved = localStorage.getItem("theme");
        return saved === "dark";
    });

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    useEffect(() => {
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}