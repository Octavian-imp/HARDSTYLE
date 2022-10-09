import useTheme from "./useTheme";

function useToggleTheme() {
    const { isDark } = useTheme();

    isDark
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
}

export default useToggleTheme;
