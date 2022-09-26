import { HiUserCircle } from "react-icons/hi";

function UserMenu() {
  return (
    <button className="bg-transparent text-xl flex items-center">
      <HiUserCircle className="dark:text-white text-black" />
      <span className="ml-2 text-sm dark:text-white text-black">
        Имя пользователя
      </span>
    </button>
  );
}

export default UserMenu;
