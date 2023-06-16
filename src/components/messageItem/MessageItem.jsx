import useUser from "../../hooks/useUser"

function MessageItem({ message }) {
    const user = useUser()
    return (
        <div className="flex flex-col">
            <div
                className={`${
                    message.isAdmin
                        ? "self-end items-end"
                        : "justify-center items-start"
                } flex flex-col`}
            >
                <span className={` text-muted text-sm select-none`}>
                    {message.isAdmin ? "Support" : user.username}
                </span>
                <span className="dark:bg-zinc-500 bg-zinc-200 rounded-full py-2 px-3">
                    {message.text}
                </span>
            </div>
        </div>
    )
}

export default MessageItem
