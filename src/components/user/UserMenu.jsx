import { useContext } from "react";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../..";

function UserMenu() {
    const { user } = useContext(Context);
    return (
        <>
            {user.isAuth ? (
                <Link
                    to="/user/profile"
                    className="bg-transparent text-xl flex items-center whitespace-nowrap ml-3"
                >
                    <HiUserCircle className="dark:text-white text-black" />
                    <span className="ml-2 text-sm dark:text-white text-black">
                        Имя пользователя
                    </span>
                </Link>
            ) : (
                <Link
                    to="/login"
                    className="bg-transparent text-xl flex items-center whitespace-nowrap ml-3"
                >
                    <AiOutlineLogin className="dark:text-white text-black" />
                    <span className="ml-2 text-sm dark:text-white text-black">
                        Войти
                    </span>
                </Link>
            )}
        </>
    );
}

export default UserMenu;
