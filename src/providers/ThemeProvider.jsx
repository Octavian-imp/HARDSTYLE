import { createContext, useEffect, useMemo, useState } from "react"

export const ThemeContext = createContext({
    isDark: localStorage.getItem("isDark"),
    isHeader:
        window.location.pathname === "/login" ||
        window.location.pathname === "/registration"
            ? false
            : true,
})

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem("isDark"))
    )
    const [isHeader, setIsHeader] = useState(
        window.location.pathname === "/login" ||
            window.location.pathname === "/registration"
            ? false
            : true
    )
    const value = useMemo(
        () => ({ isDark, isHeader, setIsDark, setIsHeader }),
        [isDark, isHeader]
    )

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )
}
