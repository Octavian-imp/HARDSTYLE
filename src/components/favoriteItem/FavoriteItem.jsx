import { IoCart, IoHeartDislikeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useDeleteFavoriteMutation } from "../../http/favoriteApi.RTK"
import priceFormatter from "../priceFormatter"

const FavoriteItem = ({ id, urlImg, title, price }) => {
    const urlProduct = `${process.env.REACT_APP_HOME_URL}product/${id}`
    urlImg = `${process.env.REACT_APP_API_URL}/${urlImg}`
    const [deleteFavorite] = useDeleteFavoriteMutation()
    return (
        <div className="dark:bg-dark-light bg-light flex flex-col justify-between items-center px-4 py-3 rounded-xl w-72">
            <img
                src={urlImg}
                alt={title}
                className="h-44 w-44 object-cover rounded-[inherit]"
            />
            <Link to={urlProduct} className="font-semibold mt-3 text-center">
                {title}
            </Link>
            <span className="font-bold">{priceFormatter(price)} руб.</span>
            <div className="flex justify-between space-x-5 mt-3">
                <Link
                    to={urlProduct}
                    className="bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
                    title="Купить"
                >
                    <IoCart className="text-white mr-2 text-2xl" />
                    Купить
                </Link>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
                    title="Удалить"
                    onClick={() => deleteFavorite({ productId: id })}
                >
                    <IoHeartDislikeOutline className="text-white text-2xl mr-2" />
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default FavoriteItem
