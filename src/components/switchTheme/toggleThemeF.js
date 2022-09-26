export default function toggleThemeF() {
  setIsDark(!isDark);
  localStorage.setItem(
    "isDark",
    `${!JSON.parse(localStorage.getItem("isDark"))}`
  );
}
