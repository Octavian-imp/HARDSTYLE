import useToggleTheme from "../../hooks/useToggleTheme";
import useTheme from "../../hooks/useTheme";

function SwitchTheme() {
  useToggleTheme();
  const { isDark, setIsDark } = useTheme();
  return (
    <button
      className={`text-sm font-bold ${
        isDark ? "bg-white text-black" : "bg-[#121212] text-white"
      }`}
      onClick={() => {
        setIsDark(!isDark);
        localStorage.setItem(
          "isDark",
          `${!JSON.parse(localStorage.getItem("isDark"))}`
        );
      }}
    >
      {isDark ? "Switch light" : "Switch dark"}
    </button>
  );
}

export default SwitchTheme;
