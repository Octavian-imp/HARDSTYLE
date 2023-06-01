import { useState } from "react"
import { IoCart, IoHeart, IoHeartDislikeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import UrlImg from "../../../assets/item.jpg"
import formatPrice from "../../../components/priceFormatter"

const FavoriteItem = ({ id, urlImg, urlProduct, title, price }) => {
    return (
        <div className="dark:bg-dark-light bg-light flex flex-col items-center px-4 py-3 rounded-xl w-72 mt-2 ml-1">
            <img
                src={urlImg}
                alt={title}
                className="h-44 w-44 object-cover rounded-[inherit]"
            />
            <Link to={urlProduct} className="font-semibold mt-3 text-center">
                {title}
            </Link>
            <span className="font-bold">{price} руб.</span>
            <div className="flex justify-between space-x-5 mt-3">
                <button
                    className="bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
                    title="Купить"
                >
                    <IoCart className="text-white mr-2 text-2xl" />
                    Купить
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
                    title="Удалить"
                >
                    <IoHeartDislikeOutline className="text-white text-2xl mr-2" />
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default function Favorite() {
    const [items] = useState([
        {
            id: 1,
            urlImg: UrlImg,
            urlProduct: "#",
            title: "Черная футболка HARD STYLE",
            price: Math.ceil((Math.random() * (100000 - 0)).toFixed(2)),
        },
        {
            id: 2,
            urlImg: UrlImg,
            urlProduct: "#",
            title: "Черная футболка HARD STYLE",
            price: Math.ceil((Math.random() * (100000 - 0)).toFixed(2)),
        },
        {
            id: 3,
            urlImg: UrlImg,
            urlProduct: "#",
            title: "Черная футболка HARD STYLE",
            price: Math.ceil((Math.random() * (100000 - 0)).toFixed(2)),
        },
        {
            id: 4,
            urlImg: UrlImg,
            urlProduct: "#",
            title: "Черная футболка HARD STYLE",
            price: Math.ceil((Math.random() * (100000 - 0)).toFixed(2)),
        },
        {
            id: 5,
            urlImg: UrlImg,
            urlProduct: "#",
            title: "Черная футболка HARD STYLE",
            price: Math.ceil((Math.random() * (100000 - 0)).toFixed(2)),
        },
    ])
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Избранное
            </div>
            {items ? (
                <div className="flex flex-wrap">
                    {items.map((item) => (
                        <FavoriteItem
                            key={uuidv4()}
                            id={item.id}
                            urlImg={item.urlImg}
                            urlProduct={item.urlProduct}
                            title={item.title}
                            price={formatPrice(item.price)}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-2xl">
                    <IoHeart className="text-red-500 text-9xl" />
                    <span className="font-bold">Нет избранных товаров :(</span>
                </div>
            )}
        </>
    )
}
