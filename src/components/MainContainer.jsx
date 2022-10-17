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
import { v4 as uuidv4 } from "uuid";

function MainContainer({ isHeader = true, isCabinet = false, children }) {
    const menuUser = [
        {
            url: "/user/profile",
            title: "Профиль",
            icon: <FaUserAlt />,
        },
        {
            url: "/user/orders",
            title: "Заказы",
            icon: <IoBag />,
        },
        {
            url: "/user/favorite",
            title: "Избранное",
            icon: <BsHeartFill />,
        },
        {
            url: "/user/support",
            title: "Поддержка",
            icon: <BsFillChatDotsFill />,
        },
        {
            url: "/user/coupons",
            title: "Специальные предолжения",
            icon: <IoTicket />,
        },
        {
            url: "/user/products/add",
            title: "Добавить товар",
            icon: <IoDuplicate />,
        },
        {
            url: "/user/products/all",
            title: "Все товары",
            icon: <IoFileTrayFull />,
        },
        {
            url: "/logout",
            title: "Выйти",
            icon: <IoLogOut />,
        },
    ];
    return (
        <CartProvider>
            {isHeader && <Header />}
            <div className="container mx-auto flex">
                {isCabinet ? (
                    <div className="flex lg:flex-row flex-col w-full">
                        <div className="dark:bg-dark-light lg:w-[84px] lg:sticky lg:top-6 h-fit py-3 rounded-2xl flex flex-row lg:flex-col items-center lg:space-y-4 space-x-4 lg:space-x-0 pl-4 lg:pl-0 overflow-x-auto">
                            {menuUser &&
                                menuUser.map((item, index) => {
                                    return (
                                        <>
                                            {index === 5 && (
                                                <div
                                                    key={uuidv4()}
                                                    className="bg-muted w-[2px] lg:w-[40px] h-[40px] lg:h-[2px] rounded-sm"
                                                />
                                            )}
                                            <NavLink
                                                key={uuidv4()}
                                                to={item.url}
                                                className={({ isActive }) =>
                                                    isActive
                                                        ? "bg-orange-500 p-2 text-white rounded-xl h-fit text-2xl"
                                                        : "hover:bg-[#c0c0c0] dark:hover:bg-muted p-2 duration-200 rounded-xl h-fit text-2xl dark:text-muted dark:hover:text-white"
                                                }
                                                title={item.title}
                                            >
                                                {item.icon}
                                            </NavLink>
                                        </>
                                    );
                                })}
                        </div>
                        <div className="lg:ml-5 my-5 lg:mt-0 w-full">
                            {children}
                        </div>
                    </div>
                ) : (
                    children
                )}
            </div>
        </CartProvider>
    );
}

export default MainContainer;
