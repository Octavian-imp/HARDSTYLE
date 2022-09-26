import Logo from "../../assets/Component 11";
import Search from "../../components/search/Search";
import CartBtn from "../cart/CartBtn";
import { NavLink } from "react-router-dom";
import SwitchTheme from "../../components/switchTheme/SwitchTheme";
import UserMenu from "../../components/user/UserMenu";

function Header() {
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
    <header className={`container-fluid`}>
      <div className="container flex flex-col mx-auto py-6">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Logo height="80" className="mr-4" />
            <Search />
          </div>
          <div className="flex items-center">
            <SwitchTheme />
            <CartBtn />
            <UserMenu />
          </div>
        </div>
        <div className="flex mt-2 text-xl space-x-9">
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
    </header>
  );
}

export default Header;
