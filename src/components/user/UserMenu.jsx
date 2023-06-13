import { AiOutlineLogin } from "react-icons/ai"
import { HiUserCircle } from "react-icons/hi"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function UserMenu() {
    const user = useSelector((state) => state.user)
    return (
        <>
            {user !== null ? (
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
    )
}

export default UserMenu
