import { FaTimes, FaTruck } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import ItemProductCart from "./itemProduct/ItemProductCart";
import formatPrice from "../components/priceFormatter";
import { useForm } from "react-hook-form";

export default function CartContent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });
    let { cart, setCart, setCountProducts } = useCart();
    //суммарная скидка
    const [totalDiscount, setTotalDiscount] = useState(0);
    //итоговая стоимость
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart) {
            setTotalDiscount(
                cart.reduce(
                    (summ, item) =>
                        summ +
                        (item.isDiscount ? item.discount_cost * item.count : 0),
                    0
                )
            );
            setTotal(
                cart.reduce((summ, item) => summ + item.price * item.count, 0)
            );
        } else {
            setTotalDiscount(0);
            setTotal(0);
        }
    }, [cart]);

    function deleteProduct(id) {
        setCart(cart.filter((item) => item.id !== id));
    }
    function increase(id) {
        setCart(
            cart.map((item) => {
                if (item.id === id) {
                    ++item.count;
                }
                return item;
            })
        );
        setCountProducts((prev) => prev + 1);
    }
    function decrease(id) {
        setCart(
            cart.map((item) => {
                if (item.id === id && item.count > 1) --item.count;
                return item;
            })
        );

        setCountProducts((prev) => (prev > 1 ? prev - 1 : prev));
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
    ]);

    const onSubmit = (data) => {
        console.log(data);
    };

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
                            cart.map((item) => (
                                <ItemProductCart
                                    key={item.title}
                                    id={item.id}
                                    url_img={item.url_img}
                                    name={item.title}
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
                                fields.map((field) => (
                                    <>
                                        <label
                                            htmlFor={field.name}
                                            className="text-lg mb-2 w-fit"
                                            required={field.isRequired}
                                        >
                                            {field.label}
                                            {field.isRequired && (
                                                <span className="text-red-500 ml-2">
                                                    *
                                                </span>
                                            )}
                                        </label>
                                        <input
                                            {...register(field.name, {
                                                required: `Заполните поле ${field.label}`,
                                            })}
                                            type={field.type}
                                            id={field.name}
                                            required={field.isRequired}
                                            className="text-lg bg-transparent py-1 px-3 rounded-lg border-2 border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200"
                                            aria-placeholder={`Введите ${field.label}`}
                                        />
                                        {errors?.name && (
                                            <div className="text-red-500">
                                                {errors.name.message}
                                            </div>
                                        )}
                                    </>
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
    );
}
