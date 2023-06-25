/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState } from "react"

export default function CustomSelect({ defaultValue, options }) {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <div className="relative ml-3">
            <span
                onClick={() => setIsChecked(!isChecked)}
                className={`select-none cursor-pointer after:duration-300 after:border-r-2 after:border-b-2 dark:after:border-light after:border-dark after:w-3 after:h-3 after:absolute after:top-[40%] after:-right-1/4 after:-translate-y-1/2 after:rotate-45 ${
                    isChecked && "after:-rotate-45"
                }`}
            >
                {filter}
            </span>
            <ul
                className={`absolute -left-[10%] z-20  py-3 rounded-xl space-y-3 ${
                    isChecked ? "" : "hidden"
                } ${isChecked ? "dark:bg-dark-light bg-light" : ""}`}
            >
                {options &&
                    options.map((option) => (
                        <li
                            key={uuidv4()}
                            onClick={() => actionClick(option)}
                            className="select-none text-center cursor-pointer px-7 py-1 hover:bg-orange-500"
                        >
                            {option}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
