import { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const SupportTicket = ({
    id,
    status,
    dateOfCreate,
    theme,
    urlTicket = "#",
}) => {
    /*
    Коды статусов запроса поддержки:
    1-ожидает ответа
    2-завершен
*/
    return (
        <div className="dark:bg-dark-light bg-light px-4 py-3 flex flex-col rounded-2xl my-3">
            <div className="flex justify-between">
                <div className="lg:text-xl font-semibold xl:text-3xl">
                    Запрос № {id}
                    {status === 1 && (
                        <span className="text-warning text-lg xl:text-xl ml-2">
                            Ожидает ответа
                        </span>
                    )}
                    {status === 2 && (
                        <span className="text-success text-lg xl:text-xl ml-2">
                            Завершен
                        </span>
                    )}
                </div>
                <div className="xl:text-xl">Дата создания: {dateOfCreate}</div>
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
    );
};

export default function Support() {
    let dateOfCreate = `${new Date().getDate()} ${new Date().getMonth()} ${new Date().getFullYear()}`;
    const [tickets, setTicket] = useState([
        {
            id: 1,
            status: 1,
            dateOfCreate: dateOfCreate,
            theme: "Index 1",
            urlTicket: "",
        },
        {
            id: 2,
            status: 2,
            dateOfCreate: dateOfCreate,
            theme: "Index 1",
            urlTicket: "",
        },
        {
            id: 3,
            status: 1,
            dateOfCreate: dateOfCreate,
            theme: "Index 1",
            urlTicket: "",
        },
        {
            id: 4,
            status: 1,
            dateOfCreate: dateOfCreate,
            theme: "Index 1",
            urlTicket: "",
        },
    ]);
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Запросы в поддержку
            </div>
            {false ? (
                <>
                    {tickets.map((ticket) => (
                        <SupportTicket
                            key={uuidv4()}
                            id={ticket.id}
                            status={ticket.status}
                            dateOfCreate={ticket.dateOfCreate}
                            theme={ticket.theme}
                            urlTicket={ticket.urlTicket}
                        />
                    ))}
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full font-bold text-xl xl:text-2xl">
                    <BsFillChatDotsFill className="text-sky-600 text-7xl xl:text-9xl" />
                    У вас пока нет запросов :)
                </div>
            )}
        </>
    );
}
