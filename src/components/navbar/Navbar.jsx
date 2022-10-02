import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Component 11";
import CartBtn from "../../pages/cart/CartBtn";
import Search from "../search/Search";
import SwitchTheme from "../switchTheme/SwitchTheme";
import UserMenu from "../user/UserMenu";

import "./Navbar.scss";

function Navbar() {
  console.log("render");
  let [clickMenu, setClickMenu] = useState(false);
  let navLinks = [
    {
      id: 1,
      url: "/home",
      title: "Главная",
    },
    {
      id: 2,
      url: "/new",
      title: "Новинки",
    },
    {
      id: 3,
      url: "/for-him",
      title: "Для него",
    },
    {
      id: 4,
      url: "/for-her",
      title: "Для неё",
    },
    {
      id: 5,
      url: "/accessories",
      title: "Аксеcсуары",
    },
    {
      id: 6,
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
        className={`container absolute z-10 top-28 lg:top-0 lg:relative w-full dark:bg-dark bg-white dark:lg:bg-transparent lg:bg-transparent duration-300 ${
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
        <div className="w-full">
          <div className="flex lg:flex-row flex-col items-start mt-2 text-xl m-5 lg:m-0 lg:space-x-9 space-y-4 lg:space-y-0">
            {navLinks &&
              navLinks.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.url}
                  className={({ isActive }) =>
                    isActive
                      ? `border-b-2 dark:text-white dark:border-b-white text-black border-b-black`
                      : `dark:text-white text-black`
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