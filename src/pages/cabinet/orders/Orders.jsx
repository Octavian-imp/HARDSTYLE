import { IoBag } from "react-icons/io5"
import { v4 as uuidv4 } from "uuid"
import { useGetHistoryQuery } from "../../../http/orderAuthApi.RTK"
import OrderItem from "./OrderItem"

/*
    Коды статусов заказа:
    1-Принят
    2-В пути
    3-Уже у вас
    4-Отменен
*/

export default function Orders() {
    const { data: orders } = useGetHistoryQuery()
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">Заказы</div>
            {orders?.length > 0 ? (
                orders.map((item) => <OrderItem key={uuidv4()} {...item} />)
            ) : (
                <div className="flex flex-col items-center justify-center h-full font-bold text-3xl">
                    <IoBag className="text-warning text-9xl" />
                    Нет заказов :(
                </div>
            )}
        </>
    )
}
