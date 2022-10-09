import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Component 11";
import CartBtn from "../../pages/cart/CartBtn";
import Search from "../search/Search";
import SwitchTheme from "../switchTheme/SwitchTheme";
import UserMenu from "../user/UserMenu";

import "./Navbar.scss";

function Navbar() {
    let [clickMenu, setClickMenu] = useState(false);
    let navLinks = [
        {
            url: "/home",
            title: "Главная",
        },
        {
            url: "/new",
            title: "Новинки",
        },
        {
            url: "/for-him",
            title: "Для него",
        },
        {
            url: "/for-her",
            title: "Для неё",
        },
        {
            url: "/accessories",
            title: "Аксеcсуары",
        },
        {
            url: "/all",
            title: "Все товары",
        },
    ];
    return (
        <>
            <button
                className="lg:hidden bg-transparent dark:text-white text-black dark:hover:text-orange-500 hover:text-orange-500 duration-300"
                onClick={() => setClickMenu(!clickMenu)}
            >
                <FaBars className="text-xl" />
            </button>
            <div
                className={`md:container absolute z-10 top-24 sm:top-28 left-0 md:left-auto lg:top-0 lg:relative w-full dark:bg-dark bg-white dark:lg:bg-transparent lg:bg-transparent duration-300 ${
                    clickMenu
                        ? "visible mount animate-decrease_1s_ease-in-out"
                        : "invisible unmount lg:visible animate-decrease_1s_ease-in-out"
                }`}
            >
                <div className="flex">
                    <div className="lg:flex items-center hidden">
                        <Logo height="80" className="mr-4" />
                    </div>
                    <div className=" flex lg:flex-row flex-col-reverse lg:w-fit w-full items-center justify-between lg:ml-auto my-8 lg:my-0 sm:mx-0 mx-5">
                        <Search />
                        <div className="flex sm:flex-row flex-col-reverse sm:items-center items-end justify-end lg:justify-start w-full lg:w-fit">
                            <SwitchTheme />
                            <CartBtn />
                            <UserMenu />
                        </div>
                    </div>
                </div>
                <div className="lg:w-fit w-full m-5">
                    <div className="flex lg:flex-row flex-col items-start text-xl lg:m-0 lg:space-x-9 space-y-4 lg:space-y-0">
                        {navLinks &&
                            navLinks.map((item) => (
                                <NavLink
                                    key={uuidv4()}
                                    to={item.url}
                                    className={({ isActive }) =>
                                        isActive
                                            ? `dark:text-white text-black after:w-full after:block after:bg-orange-500 after:h-1`
                                            : `dark:text-white text-black after:duration-200 after:w-[10%] hover:after:w-full after:block dark:after:bg-white after:bg-black after:h-1`
                                    }
                                >
                                    {item.title}
                                </NavLink>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
