import useToggleTheme from "../../hooks/useToggleTheme";
import useTheme from "../../hooks/useTheme";

function SwitchTheme({ clickMenu, setClickMenu }) {
    useToggleTheme();
    const { isDark, setIsDark } = useTheme();
    function onClick() {
        setIsDark(!isDark);
        localStorage.setItem(
            "isDark",
            `${!JSON.parse(localStorage.getItem("isDark"))}`
        );
        setClickMenu(!clickMenu);
    }
    return (
        <button
            className={`text-sm font-bold whitespace-nowrap ${
                isDark ? "bg-white text-black" : "bg-[#121212] text-white"
            }`}
            onClick={onClick}
        >
            {isDark ? "Switch light" : "Switch dark"}
        </button>
    );
}

export default SwitchTheme;
