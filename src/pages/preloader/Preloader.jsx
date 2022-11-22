import Logo from "../../assets/Component 11";
import useTheme from "../../hooks/useTheme";

function Preloader({ previewText }) {
    const { isDark } = useTheme();
    return (
        <div
            className={`${
                isDark ? "bg-[#121212]" : "bg-white"
            } flex flex-col flex-[1_0_auto] items-center justify-center`}
        >
            <Logo />
            <div
                className={`${
                    isDark ? "text-white" : "text-black"
                } font-stalinist animate-bounce mt-5`}
            >
                {previewText}
            </div>
        </div>
    );
}

export default Preloader;
