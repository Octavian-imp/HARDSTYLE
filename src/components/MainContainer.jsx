import { memo } from "react";
import useTheme from "../hooks/useTheme";
import Header from "./header/Header";

const MainContainer = memo(({ isCabinet = false, children }) => {
    const { isHeader } = useTheme();
    return (
        <>
            {isHeader && <Header />}
            <div className="container px-3 mx-auto flex flex-[1_0]">
                {children}
            </div>
        </>
    );
});

export default MainContainer;
