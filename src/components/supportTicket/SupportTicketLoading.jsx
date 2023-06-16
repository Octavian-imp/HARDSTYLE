function SupportTicketLoading() {
    return (
        <div className="dark:bg-dark-light bg-light px-4 py-3 flex flex-col rounded-2xl my-3">
            <div className="animate-pulse flex justify-between items-center gap-4 h-10">
                <span className=" bg-zinc-500 w-1/3 h-4 rounded-full"></span>
                <span className=" bg-zinc-500 w-1/4 h-4 rounded-full"></span>
            </div>
            <div className="animate-pulse flex justify-between items-center gap-4 h-10">
                <span className=" bg-zinc-500 w-1/4 h-4 rounded-full"></span>
                <span className=" bg-zinc-500 w-1/5 h-4 rounded-full"></span>
            </div>
        </div>
    )
}

export default SupportTicketLoading
