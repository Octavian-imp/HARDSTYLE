import { IoCart } from "react-icons/io5";

function CartBtn() {
  console.log("render cart");
  return (
    <button className="flex items-center bg-transparent text-xl">
      <IoCart className="dark:text-white text-black" />
      <span className="ml-2 text-sm dark:text-white text-black">
        Корзина (0)
      </span>
    </button>
  );
}

export default CartBtn;
