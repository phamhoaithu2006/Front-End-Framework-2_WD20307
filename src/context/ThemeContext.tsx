import { createContext, useState, ReactNode } from "react";
import { theme as antdTheme } from "antd";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    themeConfig: any;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const themeConfig = {
        algorithm:
            theme === "dark"
                ? antdTheme.darkAlgorithm
                : antdTheme.defaultAlgorithm,

        token: {
            colorBgBase: theme === "dark" ? "#141414" : "#ffffff",
            colorTextBase: theme === "dark" ? "#ffffff" : "#000000",
        },
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, themeConfig }}>
            {children}
        </ThemeContext.Provider>
    );
}