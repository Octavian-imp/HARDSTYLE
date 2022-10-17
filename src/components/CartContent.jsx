import { FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import ItemProductCart from "./itemProduct/ItemProductCart";
import formatPrice from "../components/priceFormatter";
import DeliveryForm from "./deliveryForm/DeliveryForm";

export default function CartContent() {
    const { cart, setCart } = useCart();
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
    }
    function decrease(id) {
        setCart(
            cart.map((item) => {
                if (item.id === id && item.count > 1) --item.count;
                return item;
            })
        );
    }

    return (
        <div className="container mx-auto my-6 text-4xl">
            Корзина
            <div className="flex flex-wrap lg:flex-row flex-col justify-between mt-6">
                <div className="mb-6 w-full lg:w-3/5 h-fit">
                    <div className="dark:bg-dark-light bg-light w-full rounded-xl px-3 py-2">
                        <button
                            type="button"
                            className="text-2xl flex items-center justify-center bg-inherit dark:text-white text-black"
                            onClick={() => setCart()}
                        >
                            Очистить корзину{" "}
                            <FaTimes className="ml-2"></FaTimes>
                        </button>
                    </div>
                    <div className="mt-5 flex flex-col space-y-5">
                        {cart &&
                            cart.map((item) => (
                                <ItemProductCart
                                    key={uuidv4()}
                                    id={item.id}
                                    url_img={item.image}
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
                        <DeliveryForm />
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
            </div>
        </div>
    );
}
