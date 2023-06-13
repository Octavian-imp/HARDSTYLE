import { IoCart } from "react-icons/io5"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const CartBtn = () => {
    const countProducts = useSelector((state) => state.cart)
    return (
        <Link
            to="/cart"
            className="flex items-center whitespace-nowrap bg-transparent text-xl ml-3"
        >
            <IoCart className="dark:text-white text-black" />
            <span className="ml-2 text-sm dark:text-white text-black">
                Корзина ({countProducts.length})
            </span>
        </Link>
    )
}

export default CartBtn
