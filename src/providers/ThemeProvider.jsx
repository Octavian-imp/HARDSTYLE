import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext({
    isDark: localStorage.getItem("isDark"),
});

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem("isDark"))
    );
    const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
