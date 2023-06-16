import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaTrash, FaTruck } from "react-icons/fa"
import { useDispatch } from "react-redux"
import formatPrice from "../components/priceFormatter"
import useCart from "../hooks/useCart"
import { useCheckCouponMutation } from "../http/couponApi.RTK"
import { useCreateOrderMutation } from "../http/orderAuthApi.RTK"
import { EMPTY_CART } from "../store/actions/cartActionsTypes"
import InputForm from "./inputForm/InputForm"
import ItemProductCart from "./itemProduct/ItemProductCart"

export default function CartContent() {
    const dispatch = useDispatch()
    const { handleSubmit, formState, control, getValues } = useForm({
        mode: "onChange",
    })
    const cart = useCart()
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
            label: "Корпус / Строение",
            isRequired: false,
        },
        {
            name: "flat",
            label: "Квартира",
            isRequired: true,
        },
    ])

    // оформление заказа
    const [createOrder, { isSuccess }] = useCreateOrderMutation()
    const onSubmit = async (data) => {
        if (!formState.isValid || !cart.length > 0) {
            return
        }
        const address = `${data.city} ${data.street} ${data.houseNumber} ${data.frame} ${data.flat}`
        const deliveryCost = 150
        const paymentMethod = "card"
        const productsId = cart.map((item) => item.id)
        await createOrder({
            totalCost: total,
            deliveryCost,
            paymentMethod,
            address,
            productsId,
        }).unwrap()
    }
    useEffect(() => {
        if (isSuccess) {
            dispatch({ type: EMPTY_CART })
        }
    }, [isSuccess])

    const [
        checkCoupon,
        { isSuccess: isSuccessCoupon, isError: isErrorCoupon, errorCoupon },
    ] = useCheckCouponMutation()

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
                                className="text-xl flex items-center justify-center bg-transparent  dark:text-white  text-black dark:hover:text-red-500 hover:text-red-500"
                                onClick={() => dispatch({ type: EMPTY_CART })}
                            >
                                <FaTrash className="mr-2"></FaTrash>
                                Очистить корзину
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
                    <div className="lg:sticky lg:top-8 space-y-3">
                        <div className="dark:bg-dark-light bg-light px-7 md:px-14 py-6 rounded-xl space-y-2">
                            <InputForm
                                control={control}
                                name="couponInput"
                                label="Введите промокод"
                            />
                            {isSuccessCoupon && (
                                <span className="text-success text-sm">
                                    Скидка применена
                                </span>
                            )}
                            {isErrorCoupon && (
                                <span className="text-red-500 text-sm">
                                    {errorCoupon?.data?.message}
                                </span>
                            )}
                            <button
                                type="button"
                                className=" border-solid border-2 border-orange-500 hover:bg-orange-500 py-1 text-center w-full font-semibold text-lg"
                                onClick={() => {
                                    checkCoupon({
                                        text: getValues("couponInput"),
                                    })
                                }}
                            >
                                Применить
                            </button>
                        </div>
                        <div className="dark:bg-dark-light bg-light px-7 md:px-14 py-6 rounded-xl">
                            <div className="text-center text-2xl font-semibold mb-5">
                                Итого
                            </div>
                            {/* <div className="flex justify-between items-center text-sm">
                                <span className="whitespace-nowrap">
                                    Скидка
                                </span>
                                <span className="whitespace-nowrap">
                                    {formatPrice(totalDiscount)} руб.
                                </span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-dark-muted">
                                <span className="whitespace-nowrap">
                                    Стоимость без скидки
                                </span>
                                <span className="whitespace-nowrap">
                                    {formatPrice(totalDiscount + total)} руб.
                                </span>
                            </div> */}

                            <div className="flex justify-between items-center text-xl my-2">
                                <span className="whitespace-nowrap">
                                    Итоговая стоимость
                                </span>
                                <span className="whitespace-nowrap">
                                    {formatPrice(total)} руб.
                                </span>
                            </div>
                        </div>
                        <button
                            disabled={!formState.isValid || !cart.length > 0}
                            type="submit"
                            className=" disabled:bg-zinc-500 bg-orange-500 hover:bg-orange-600 py-3 text-center w-full font-semibold"
                        >
                            Заказать
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
