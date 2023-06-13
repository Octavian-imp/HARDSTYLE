import { useEffect } from "react"
import { IoBag } from "react-icons/io5"
import { useSelector } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { useGetAllQuery } from "../../../http/orderAuthApi.RTK"
import OrderItem from "./OrderItem"

/*
    Коды статусов заказа:
    1-Принят
    2-В пути
    3-Уже у вас
    4-Отменен
*/

export default function Orders() {
    const user = useSelector((state) => state.user)
    const { data: orders, isSuccess } = useGetAllQuery({ userId: user.id })
    useEffect(() => {
        if (isSuccess) {
            console.log(orders)
        }
    }, [orders])
    // const orders = [
    //     {
    //         id: 1,
    //         product: {
    //             name: "Черная футболка",
    //             count: 1,
    //             size: "m",
    //             price: 3800,
    //             totalPrice: 3800,
    //         },
    //         paymentMethod: "card",
    //         address: "город, улица, дом, корпус/строение, квартира",
    //         recipient: "Иван Иванов",
    //         deliveryCost: 0,
    //         status: 3,
    //         dateOfIssue: new Date().getFullYear(),
    //     },
    //     {
    //         id: 2,
    //         product: {
    //             name: "Черная футболка",
    //             count: 1,
    //             size: "m",
    //             price: 3800,
    //             totalPrice: 3800,
    //         },
    //         paymentMethod: "card",
    //         address: "город, улица, дом, корпус/строение, квартира",
    //         recipient: "Иван Иванов",
    //         deliveryCost: 150,
    //         status: 4,
    //         dateOfIssue: new Date().getFullYear(),
    //     },
    //     {
    //         id: 3,
    //         product: {
    //             name: "Черная футболка",
    //             count: 1,
    //             size: "m",
    //             price: 3800,
    //             totalPrice: 5800,
    //         },
    //         paymentMethod: "card",
    //         address: "город, улица, дом, корпус/строение, квартира",
    //         recipient: "Иван Иванов",
    //         deliveryCost: 0,
    //         status: 2,
    //         dateOfIssue: new Date().getFullYear(),
    //     },
    // ];
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">Заказы</div>
            {orders ? (
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
