import Logo from "../../assets/Component 11";
import useTheme from "../../hooks/useTheme";

function NotFound() {
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
        } font-stalinist animate-bounce`}
      >
        Not Found
      </div>
    </div>
  );
}

export default NotFound;
