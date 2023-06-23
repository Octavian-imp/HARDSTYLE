import { IoCart, IoHeartOutline, IoStatsChart } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import formatPrice from "../../components/priceFormatter"
import { useAddFavoriteMutation } from "../../http/favoriteApi.RTK"
import styles from "./ItemProduct.module.scss"

function ItemProduct({
    id,
    url_item_2 = require("../../assets/not_found_logo.png"),
    url_item_img = require("../../assets/not_found_logo.png"),
    url_item_page = "#",
    name_item = "Item without name",
    cost = "null",
    discount = false,
    cost_without_discount = "null",
    units = "руб.",
    isSliderChild = false,
}) {
    const [addFavorite] = useAddFavoriteMutation()
    return (
        <article
            className={
                !isSliderChild
                    ? styles.wrapper__item__isSlide
                    : styles.wrapper__item
            }
        >
            <NavLink to={url_item_page} className={styles.body__image}>
                <img src={url_item_2} alt="" className={styles.item__image} />
                <img
                    src={url_item_img}
                    alt=""
                    className={styles.item__image__second}
                />
            </NavLink>
            <div className={styles.body__content}>
                <div className={styles.content__title}>
                    <NavLink to={url_item_page}>{name_item}</NavLink>
                </div>
                <div className={styles.content__price}>
                    <span className={styles.price__index}>
                        {formatPrice(cost)} {units}
                    </span>
                    {discount && (
                        <sud className={styles.price__discount}>
                            {formatPrice(cost_without_discount)} {units}
                        </sud>
                    )}
                </div>
                <div className={styles.body__buttons}>
                    <NavLink
                        to={url_item_page}
                        className={styles.button__buy}
                        title="Купить"
                    >
                        <IoCart className={styles.button__icon__text} />
                        Купить
                    </NavLink>

                    <button
                        className={styles.button__favorite}
                        title="В избранное"
                        onClick={() => addFavorite({ productId: id })}
                    >
                        <IoHeartOutline className={styles.button__icon} />
                    </button>

                    <button className={styles.button__compare} title="Сравнить">
                        <IoStatsChart className={styles.button__icon} />
                    </button>
                </div>
            </div>
        </article>
    )
}

export default ItemProduct
