import { IoCart, IoHeartOutline, IoStatsChart } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import formatPrice from "../../components/priceFormatter";
import "./ItemProduct.scss";

function ItemProduct({
    url_item_1 = require("../../assets/item.jpg"),
    url_item_2 = require("../../assets/item_2.jpg"),
    name_item = "Item without name",
    cost = 20000,
    discount = false,
    cost_without_discount = 10000,
    units = "руб.",
    className,
    isSliderChild = false,
}) {
    return (
        <div
            className={`rounded-2xl h-96 ${
                !isSliderChild && "2xl:w-72 lg:w-1/3 sm:w-1/2"
            } w-full px-3 2xl:px-0 2xl:mx-0 lg:mx-auto flex flex-col overflow-hidden mb-4 hover-body`}
        >
            <div className="w-full 2xl:h-72 sm:h-64 h-64 relative rounded-t-[inherit] bg-white">
                <img
                    src={url_item_2}
                    alt=""
                    className="w-full h-full absolute top-0 left-0"
                    style={{
                        objectFit: "contain",
                        borderRadius: "inherit",
                        objectPosition: "center",
                    }}
                />
                <img
                    src={url_item_1}
                    alt=""
                    className="w-full h-full absolute top-0 left-0 bg-white hover:opacity-0 duration-300"
                    style={{
                        objectFit: "contain",
                        borderRadius: "inherit",
                        objectPosition: "center",
                    }}
                />
            </div>
            <div className="dark:bg-dark-light bg-gray-100 rounded-b-2xl rounded- w-full -mt-7 z-10 px-7 hover-translate">
                <div className="mt-4 font-semibold text-center whitespace-nowrap text-ellipsis overflow-hidden">
                    <NavLink to="/item">{name_item}</NavLink>
                </div>
                <div className="flex flex-wrap mt-4 items-end">
                    <span className="font-semibold">
                        {formatPrice(cost)} {units}
                    </span>
                    {discount && (
                        <div className="ml-1 text-red-500 line-through text-sm">
                            {formatPrice(cost_without_discount)} {units}
                        </div>
                    )}
                </div>
                <div className="flex justify-between mt-4 mb-3 text-sm">
                    <button
                        className="bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center rounded-full font-semibold"
                        title="Купить"
                    >
                        <IoCart className="text-white mr-2 text-xl" />
                        Купить
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
                        title="В избранное"
                    >
                        <IoHeartOutline className="text-white text-xl" />
                    </button>
                    <button
                        className="bg-yellow-500 hover:bg-yellow-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
                        title="Сравнить"
                    >
                        <IoStatsChart className="text-white text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemProduct;
