import { BsHeart } from "react-icons/bs"
import { FaTimes } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import formatPrice from "../../components/priceFormatter"
import {
    DEC_COUNT,
    INC_COUNT,
    REMOVE_FROM_CART,
} from "../../store/actions/cartActionsTypes"
import CountItems from "../CountItems"

export default function ItemProductCart({
    id,
    url = "#",
    url_img = require("../../assets/not_found_logo.png"),
    name = "undefined",
    size = "undefined",
    cost,
    isDiscount = false,
    discount_cost,
    countItem = 1,
    deleteProduct,
    increase,
    decrease,
}) {
    const dispatch = useDispatch()
    function deleteProduct(id, size) {
        dispatch({ type: REMOVE_FROM_CART, payload: { id, size } })
    }
    function increase(id, size) {
        dispatch({ type: INC_COUNT, payload: { id, size } })
    }
    function decrease(id, size) {
        dispatch({ type: DEC_COUNT, payload: { id, size } })
    }
    return (
        <div className="flex sm:flex-row flex-col mx-3 text-lg justify-between">
            <div className="flex">
                <img
                    src={url_img}
                    alt=""
                    className="min-w-40 w-40 h-40 object-contain rounded-lg"
                />
                <div className="flex flex-col justify-between m-4 w-96">
                    <NavLink
                        to={url}
                        className="2xl:text-2xl text-ellipsis whitespace-nowrap overflow-hidden"
                        title={name}
                    >
                        {name}
                    </NavLink>
                    <span className="dark:text-dark-muted text-muted capitalize">
                        Размер: {size}
                    </span>
                    <button
                        type="button"
                        className="text-red-500 rounded-2 p-1 bg-transparent hover:bg-red-500 hover:text-white px-2 text-xl w-fit"
                        title="В избранное"
                    >
                        <BsHeart></BsHeart>
                    </button>
                    <span className="">
                        Цена: {formatPrice(cost)} руб.
                        {isDiscount && (
                            <span className="ml-1 text-red-500 line-through text-sm">
                                {formatPrice(discount_cost)} руб.
                            </span>
                        )}
                    </span>
                </div>
            </div>
            <div className="flex flex-row-reverse mt-3 sm:mt-0 sm:flex-col w-full sm:w-1/5 justify-between items-center sm:items-end">
                <button
                    type="button"
                    className="text-xl w-fit bg-transparent dark:text-white text-black dark:hover:text-red-500 hover:text-red-500"
                    title="Удалить"
                    onClick={() => deleteProduct(id, size)}
                >
                    <FaTimes></FaTimes>
                </button>
                <div className="flex rounded-lg dark:bg-dark-light bg-light">
                    <CountItems
                        value={countItem}
                        id={id}
                        size={size}
                        count={countItem}
                        increase={increase}
                        decrease={decrease}
                    />
                </div>
            </div>
        </div>
    )
}
