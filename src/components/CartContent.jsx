import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaTimes, FaTruck } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import formatPrice from "../components/priceFormatter"
import {
    DEC_COUNT,
    INC_COUNT,
    REMOVE_FROM_CART,
} from "../store/actions/cartActionsTypes"
import InputForm from "./inputForm/InputForm"
import ItemProductCart from "./itemProduct/ItemProductCart"

export default function CartContent() {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        mode: "onChange",
    })
    // let { cart, setCart, setCountProducts } = useCart();
    const cart = useSelector((state) => state.cart)
    //суммарная скидка
    // const [totalDiscount, setTotalDiscount] = useState(0)
    //итоговая стоимость
    const [total, setTotal] = useState(0)
    useEffect(() => {
        if (cart) {
            setTotal(
                cart.reduce((summ, item) => summ + item.price * item.count, 0)
            )
        } else {
            setTotalDiscount(0)
            setTotal(0)
        }
    }, [cart])

    function deleteProduct(id, size) {
        dispatch({ type: REMOVE_FROM_CART, payload: { id, size } })
    }
    function increase(id, size) {
        dispatch({ type: INC_COUNT, payload: { id, size } })
    }
    function decrease(id, size) {
        dispatch({ type: DEC_COUNT, payload: { id, size } })
    }

    //поля адреса доставки
    const [fields] = useState([
        {
            name: "city",
            label: "Город",
            isRequired: true,
        },
        {
            name: "street",
            label: "Улица",
            isRequired: true,
        },
        {
            name: "houseNumber",
            label: "Дом",
            isRequired: true,
        },
        {
            name: "frame",
            label: "Корпус",
            isRequired: false,
        },
        {
            name: "flat",
            label: "Квартира",
            isRequired: true,
        },
    ])

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="container mx-auto my-6 text-4xl">
            Корзина
            <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-wrap lg:flex-row flex-col justify-between mt-6"
            >
                <div className="mb-6 w-full lg:w-3/5 h-fit">
                    <div className="dark:bg-dark-light bg-light w-full rounded-xl px-3 py-2">
                        {cart?.length > 0 ? (
                            <button
                                type="button"
                                className="text-2xl flex items-center justify-center bg-inherit dark:text-white text-black"
                                onClick={() => setCart([])}
                            >
                                Очистить корзину{" "}
                                <FaTimes className="ml-2"></FaTimes>
                            </button>
                        ) : (
                            <span className="text-2xl flex items-center justify-center bg-inherit dark:text-white text-black my-4">
                                Ваша корзина пуста :(
                            </span>
                        )}
                    </div>
                    <div className="mt-5 flex flex-col space-y-5">
                        {cart &&
                            cart.map((item, index) => (
                                <ItemProductCart
                                    key={index}
                                    id={item.id}
                                    url={item.url}
                                    url_img={
                                        process.env.REACT_APP_API_URL +
                                        item.imgUrl
                                    }
                                    name={item.name}
                                    size={item.size}
                                    cost={item.price}
                                    isDiscount={item.isDiscount}
                                    discount_cost={item.discount_cost}
                                    countItem={item.count}
                                    deleteProduct={deleteProduct}
                                    increase={increase}
                                    decrease={decrease}
                                />
                            ))}
                    </div>
                    <div className="mt-5 dark:bg-dark-light bg-light py-4 px-6 rounded-xl">
                        <div className="text-2xl flex items-center">
                            Адрес доставки <FaTruck className="ml-2" />
                        </div>
                        <div className="mt-5 px-3 flex flex-col space-y-2">
                            {fields &&
                                fields.map((field, index) => (
                                    <InputForm
                                        key={index}
                                        control={control}
                                        name={field.name}
                                        label={field.label}
                                        rules={{ required: true }}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col text-lg xl:text-xl w-full lg:w-2/5 lg:pl-7">
                    <div className="lg:sticky lg:top-8">
                        <div className="dark:bg-dark-light bg-light px-7 md:px-14 py-6 rounded-xl">
                            <div className="text-center text-2xl font-semibold mb-5">
                                Итого
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="whitespace-nowrap">
                                    Скидка
                                </span>
                                <span className="whitespace-nowrap">
                                    {/* {formatPrice(totalDiscount)} руб. */}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-dark-muted">
                                <span className="whitespace-nowrap">
                                    Стоимость без скидки
                                </span>
                                <span className="whitespace-nowrap">
                                    {/* {formatPrice(totalDiscount + total)} руб. */}
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-xl">
                                <span className="whitespace-nowrap">
                                    Итоговая стоимость
                                </span>
                                <span className="whitespace-nowrap">
                                    {formatPrice(total)} руб.
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-5 bg-orange-500 hover:bg-orange-600 py-3 text-center w-full font-semibold"
                        >
                            Заказать
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
