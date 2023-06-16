const FavoriteItemLoading = () => {
    return (
        <div className="dark:bg-dark-light bg-light flex flex-col justify-between items-center px-4 py-3 rounded-xl w-72 mt-2 ml-1">
            <div className="animate-pulse h-44 w-44 object-cover rounded-[inherit] bg-zinc-700" />
            <div className="animate-pulse flex-1 flex-col flex w-full py-2 space-y-3">
                <div className="h-5 bg-zinc-700 rounded-full"></div>
                <div className="grid grid-cols-2 gap-4 h-10">
                    <div className="bg-zinc-700 rounded-full col-span-1"></div>
                    <div className="bg-zinc-700 rounded-full col-span-1"></div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteItemLoading
