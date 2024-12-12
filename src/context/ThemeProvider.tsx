// Root 👉🏻 "src" Folder 👉🏻 "context" Folder 👉🏻 ThemeProvider.tsx

import { createContext, useContext, useState } from "react";

type ThemeType = "light" | "dark";

interface ThemeContextProps {
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: "light",
    setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<ThemeType>("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};
