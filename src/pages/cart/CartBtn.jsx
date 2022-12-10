import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

function CartBtn() {
    const { countProducts } = useCart();
    return (
        <Link
            to="/cart"
            className="flex items-center whitespace-nowrap bg-transparent text-xl ml-3"
        >
            <IoCart className="dark:text-white text-black" />
            <span className="ml-2 text-sm dark:text-white text-black">
                Корзина ({countProducts})
            </span>
        </Link>
    );
}

export default CartBtn;
