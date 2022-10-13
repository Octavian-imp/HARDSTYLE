import { FaUserAlt } from "react-icons/fa";
import {
    IoBag,
    IoDuplicate,
    IoFileTrayFull,
    IoLogOut,
    IoTicket,
} from "react-icons/io5";
import { BsFillChatDotsFill, BsHeartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CartProvider } from "../providers/CartContext";
import Header from "./header/Header";

function MainContainer({ isHeader = true, isCabinet = false, children }) {
    return (
        <CartProvider>
            {isHeader && <Header />}
            <div className="container mx-auto flex">
                {isCabinet ? (
                    <>
                        <div className="dark:bg-dark-light w-[84px] sticky top-6 h-fit px-1 py-3 rounded-2xl flex flex-col items-center space-y-4">
                            <NavLink
                                to="/user/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <FaUserAlt />
                            </NavLink>
                            <NavLink
                                to="/user/orders"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <IoBag />
                            </NavLink>
                            <NavLink
                                to="/user/favourite"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <BsHeartFill />
                            </NavLink>
                            <NavLink
                                to="/user/support"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <BsFillChatDotsFill />
                            </NavLink>
                            <NavLink
                                to="/user/coupons"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <IoTicket />
                            </NavLink>
                            <div className="bg-muted w-[40px] h-[2px] rounded-sm" />
                            <NavLink
                                to="/user/product/add"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <IoDuplicate />
                            </NavLink>
                            <NavLink
                                to="/user/products/all"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <IoFileTrayFull />
                            </NavLink>
                            <NavLink
                                to="/logout"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-orange-500 p-2 dark:text-white rounded-xl h-fit text-2xl"
                                        : "hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl text-muted hover:text-white"
                                }
                            >
                                <IoLogOut />
                            </NavLink>
                        </div>
                        <div className="ml-5 w-full">{children}</div>
                    </>
                ) : (
                    children
                )}
            </div>
        </CartProvider>
    );
}

export default MainContainer;
