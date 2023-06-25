import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import MessageItem from "../../../components/messageItem/MessageItem.jsx"
import TextareaForm from "../../../components/textareaForm/TextareaForm.jsx"
import {
    useAddNewMessageMutation,
    useGetOneTicketQuery,
} from "../../../http/supportApi.RTK"

function SupportChat() {
    const { handleSubmit, control, reset } = useForm()
    const { id } = useParams()
    const { data: messages } = useGetOneTicketQuery({ id })

    const [sendMessage, { isError: isErrorSend, error: errorSend }] =
        useAddNewMessageMutation()
    const onSubmit = (data) => {
        sendMessage({ message: data.newMessage, ticketId: id })
            .unwrap()
            .then((res) => {
                alert(res.response)
                reset({ newMessage: "" })
            })
    }

    return (
        <>
            <form
                noValidate
                className="dark:bg-dark-light bg-light flex flex-col gap-3 p-3 rounded-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                {messages?.length > 0 &&
                    messages.map((message) => (
                        <MessageItem message={message} key={uuidv4()} />
                    ))}
                <TextareaForm
                    control={control}
                    name="newMessage"
                    label={"Сообщение"}
                    rules={{ required: true }}
                />
                {isErrorSend && (
                    <span className="text-red-500 text-sm">
                        {errorSend?.data?.message}
                    </span>
                )}
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 py-2 px-3 font-semibold "
                >
                    Отправить
                </button>
            </form>
        </>
    )
}

export default SupportChat
