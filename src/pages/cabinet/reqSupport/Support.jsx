import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { BsFillChatDotsFill } from "react-icons/bs"
import { v4 as uuidv4 } from "uuid"
import InputForm from "../../../components/inputForm/InputForm.jsx"
import SupportTicket from "../../../components/supportTicket/SupportTicket.jsx"
import SupportTicketLoading from "../../../components/supportTicket/SupportTicketLoading.jsx"
import {
    useCreateTicketMutation,
    useGetAllTicketsQuery,
} from "../../../http/supportApi.RTK"

export default function Support() {
    const { handleSubmit, control, reset } = useForm({
        mode: "onChange",
    })

    const [
        createTicket,
        { isError: isErrorCreateTicket, error: errCreateTicket },
    ] = useCreateTicketMutation()
    const onSubmit = (data) => {
        createTicket(data)
            .unwrap()
            .then(() => {
                form.current.close()
                setIsOpen(false)
                reset({ theme: "", message: "" })
            })
    }

    const form = useRef()

    const { data: tickets, isLoading: isLoadingTickets } =
        useGetAllTicketsQuery(null)
    const [isOpen, setIsOpen] = useState(false)

    if (isLoadingTickets) {
        return <SupportTicketLoading />
    }

    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6 flex justify-between items-center">
                Запросы в поддержку
                <button
                    className="border-2 border-solid dark:border-white border-black dark:hover:border-orange-500 hover:border-orange-500 hover:bg-orange-500 py-2 px-3 text-sm"
                    onClick={() => {
                        form.current.showModal()
                        setIsOpen(true)
                    }}
                >
                    Создать запрос
                </button>
            </div>
            <dialog
                ref={form}
                id="supportForm"
                className={`${
                    isOpen && "flex"
                } backdrop-blur-sm dark:bg-dark-light bg-light xl:w-2/4 w-3/4 p-6 rounded-lg items-center justify-center`}
            >
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="flex flex-wrap dark:bg-dark-light bg-light gap-2 lg:flex-row flex-col justify-between w-full"
                >
                    <InputForm
                        control={control}
                        name={"theme"}
                        label={"Тема"}
                        className={"w-full"}
                        rules={{ required: true }}
                    />
                    <InputForm
                        control={control}
                        name={"message"}
                        label={"Сообщение"}
                        className={"w-full"}
                        rules={{ required: true }}
                    />
                    {isErrorCreateTicket && (
                        <span className="text-red-500 text-sm">
                            {errCreateTicket.data.message}
                        </span>
                    )}
                    <div className="flex justify-between items-center w-full">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 dark:text-white py-2 px-3"
                        >
                            Создать
                        </button>
                        <button
                            type="button"
                            className="border-solid border-2 border-red-500 hover:bg-red-500 dark:text-white py-2 px-3"
                            onClick={() => {
                                form.current.close()
                                setIsOpen(false)
                            }}
                        >
                            Отменить
                        </button>
                    </div>
                </form>
            </dialog>
            {tickets?.length > 0 ? (
                <>
                    {tickets.map((ticket) => (
                        <SupportTicket
                            key={uuidv4()}
                            id={ticket.id}
                            status={ticket.status}
                            createdAt={ticket.createdAt}
                            theme={ticket.theme}
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
    )
}
