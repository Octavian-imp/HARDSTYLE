import { FaTimes } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import CountItems from "../CountItems";
import formatPrice from "../../components/priceFormatter";

export default function ItemProductCart({
    id,
    url_img = require("../../assets/not_found_logo.png"),
    name = "Without name",
    size = "m",
    cost,
    isDiscount = false,
    discount_cost,
    countItem = 1,
    deleteProduct,
    increase,
    decrease,
}) {
    return (
        <div className="flex sm:flex-row flex-col mx-3 text-lg justify-between">
            <div className="flex">
                <img
                    src={url_img}
                    alt=""
                    className="min-w-40 w-40 h-40 object-contain rounded-lg"
                />
                <div className="flex flex-col justify-between m-4 w-96">
                    <span className="2xl:text-2xl text-ellipsis whitespace-nowrap overflow-hidden">
                        {name}
                    </span>
                    <span className="dark:text-dark-muted text-muted capitalize">
                        Размер: {size}
                    </span>
                    <button
                        type="button"
                        className="text-red-500 rounded-[50%] bg-transparent hover:bg-red-500 hover:text-white px-2 text-xl w-fit"
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
                    onClick={() => deleteProduct(id)}
                >
                    <FaTimes></FaTimes>
                </button>
                <div className="flex rounded-lg dark:bg-dark-light bg-light">
                    <CountItems
                        value={countItem}
                        id={id}
                        increase={increase}
                        decrease={decrease}
                    />
                </div>
            </div>
        </div>
    );
}
