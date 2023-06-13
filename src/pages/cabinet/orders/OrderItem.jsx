import formatPrice from "../../../components/priceFormatter"

export default function OrderItem({
    id,
    total_cost,
    paymentMethod,
    address,
    status,
    createdAt,
}) {
    /*
    Коды статусов заказа:
    1-Принят
    2-В пути
    3-Уже у вас
    4-Отменен
*/
    return (
        <div className="dark:bg-dark-light bg-light px-4 py-3 flex flex-col rounded-2xl my-3">
            <div className="flex justify-between items-center flex-wrap">
                <div className="text-2xl xl:text-3xl">
                    Заказ № {id}
                    {status === 1 && (
                        <span className="text-zinc-500 text-lg lg:text-xl ml-2">
                            Принят
                        </span>
                    )}
                    {status === 2 && (
                        <span className="text-warning text-lg lg:text-xl ml-2">
                            В пути
                        </span>
                    )}
                    {status === 3 && (
                        <span className="text-success text-lg lg:text-xl ml-2">
                            Уже у вас
                        </span>
                    )}
                    {status === 4 && (
                        <span className="text-red-500 text-lg lg:text-xl ml-2">
                            Отменен
                        </span>
                    )}
                </div>
                <div className="xl:text-xl">
                    Дата оформления:{" "}
                    {new Date(createdAt).toLocaleDateString("ru-RU")}
                </div>
            </div>
            <span className="mt-5">
                Стоимость:{" "}
                <span className="font-semibold">
                    {formatPrice(total_cost)} руб.
                </span>
            </span>
            <span>
                Способ оплаты:{" "}
                <span className="font-semibold">{paymentMethod}</span>
            </span>
            <span>
                Адрес доставки: <span className="font-semibold">{address}</span>
            </span>
            <span>
                Получатель: <span className="font-semibold">Получатель</span>
            </span>
            <span>
                Стоимость доставки:{" "}
                {/* {deliveryCost === 0 ? (
                    <span className="font-semibold capitalize text-success">
                        Бесплатно
                    </span>
                ) : (
                    <span className="font-semibold">{deliveryCost} руб.</span>
                )} */}
            </span>
        </div>
    )
}
