import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

function UserMenu() {
    return (
        <Link
            to="/user/profile"
            className="bg-transparent text-xl flex items-center whitespace-nowrap ml-3"
        >
            <HiUserCircle className="dark:text-white text-black" />
            <span className="ml-2 text-sm dark:text-white text-black">
                Имя пользователя
            </span>
        </Link>
    );
}

export default UserMenu;
