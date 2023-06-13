export default function CountItems({ value, id, size, increase, decrease }) {
    return (
        <>
            <button
                className="block px-2 py-1 m-auto w-fit bg-inherit dark:text-white text-black hover:bg-orange-500"
                title="Уменьшить"
                onClick={() => decrease(id, size)}
            >
                &#8722;
            </button>
            <input
                type="number"
                className="bg-transparent w-10 text-center text-sm lg:text-md"
                aria-placeholder="Количество"
                value={value}
                disabled
            />
            <button
                className="block px-2 py-1 m-auto w-fit bg-inherit dark:text-white text-black hover:bg-orange-500"
                title="Увеличить"
                onClick={() => increase(id, size)}
            >
                &#43;
            </button>
        </>
    )
}
