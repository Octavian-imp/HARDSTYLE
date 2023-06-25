export default function toggleThemeF() {
    // eslint-disable-next-line no-undef
    setIsDark(!isDark)
    localStorage.setItem(
        "isDark",
        `${!JSON.parse(localStorage.getItem("isDark"))}`
    )
}
