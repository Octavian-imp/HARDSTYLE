import { useEffect } from "react";
import useTheme from "../../hooks/useTheme";
import useToggleTheme from "../../hooks/useToggleTheme";

function SwitchTheme({ clickMenu, setClickMenu }) {
    useToggleTheme();
    const { isDark, setIsDark } = useTheme();
    function onClick() {
        setIsDark(!isDark);
        setClickMenu(!clickMenu);
    }
    useEffect(() => {
        localStorage.setItem("isDark", `${isDark}`);
    }, [isDark]);
    return (
        <button
            className={`text-sm font-bold whitespace-nowrap py-2 px-3 ${
                isDark ? "bg-white text-black" : "bg-[#121212] text-white"
            }`}
            onClick={onClick}
        >
            {isDark ? "Switch light" : "Switch dark"}
        </button>
    );
}

export default SwitchTheme;
