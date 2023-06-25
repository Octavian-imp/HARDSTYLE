import { useEffect } from "react"
import { IoHeart } from "react-icons/io5"
import { v4 as uuidv4 } from "uuid"
import FavoriteItem from "../../../components/favoriteItem/FavoriteItem.jsx"
import FavoriteItemLoading from "../../../components/favoriteItem/FavoriteItemLoading.jsx"
import { useGetAllQuery } from "../../../http/favoriteApi.RTK"

export default function Favorite() {
    const { data: favorites, isError, error, isLoading } = useGetAllQuery()
    useEffect(() => {
        if (isError) {
            console.error(error.message)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [favorites, isError])
    if (isLoading) {
        return (
            <>
                <div className="text-xl lg:text-3xl font-semibold mb-6">
                    Избранное
                </div>
                <FavoriteItemLoading />
            </>
        )
    }
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Избранное
            </div>
            {favorites?.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                    {favorites.map((favorite) => (
                        <FavoriteItem
                            key={uuidv4()}
                            id={favorite.product.id}
                            urlImg={favorite.product.img}
                            title={favorite.product.name}
                            price={favorite.product.price}
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
