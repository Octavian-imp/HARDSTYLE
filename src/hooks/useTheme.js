import { useContext } from "react";
import { ThemeContext } from "../providers/ThemeProvider.jsx";
const useTheme = () => {
    const value = useContext(ThemeContext);
    return value;
};
export default useTheme;
