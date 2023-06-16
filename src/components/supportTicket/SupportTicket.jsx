import { IoEyeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { statusTicket } from "../../global/statusTicket"

const SupportTicket = ({ id, status, createdAt, theme }) => {
    /*
    Коды статусов запроса поддержки:
    1-ожидает ответа
    2-завершен
    3-отменен
*/
    createdAt = new Date(createdAt).toLocaleDateString("ru-RU", {
        hour: "numeric",
        minute: "numeric",
    })
    const urlTicket = `${process.env.REACT_APP_HOME_URL}user/support/${id}`
    return (
        <div className="dark:bg-dark-light bg-light px-4 py-3 flex flex-col rounded-2xl my-3">
            <div className="flex justify-between">
                <div className="lg:text-xl font-semibold xl:text-3xl">
                    Запрос № {id}
                    {status === statusTicket.pending && (
                        <span className="text-warning text-lg xl:text-xl ml-2">
                            Ожидает ответа
                        </span>
                    )}
                    {status === statusTicket.completed && (
                        <span className="text-success text-lg xl:text-xl ml-2">
                            Завершен
                        </span>
                    )}
                    {status === statusTicket.canceled && (
                        <span className=" text-red-500 text-lg xl:text-xl ml-2">
                            Отменен
                        </span>
                    )}
                </div>
                <time dateTime={`${createdAt}`} className="xl:text-xl">
                    Дата создания: {createdAt}
                </time>
            </div>
            <div className="mt-5 flex justify-between items-center">
                <span>
                    Тема: <span className="font-semibold">{theme}</span>
                </span>
                <Link
                    to={urlTicket}
                    title="Просмотреть"
                    className="duration-200 hover:text-orange-500 flex items-center"
                >
                    <IoEyeOutline className="mr-2" />
                    Просмотреть
                </Link>
            </div>
        </div>
    )
}
export default SupportTicket
