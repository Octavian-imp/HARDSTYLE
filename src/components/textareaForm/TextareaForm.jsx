import { useController } from "react-hook-form"

const TextareaForm = ({ control, name, label, rules = {}, className }) => {
    const { field, fieldState } = useController({
        name,
        control,
        defaultValue: "",
        rules,
    })
    return (
        <div
            className={`flex flex-col dark:text-white text-black ${className}`}
        >
            <label htmlFor={name} className="text-lg mb-2 w-fit ">
                {label}
                {rules.required && <span className="text-red-500 ml-2">*</span>}
            </label>
            <textarea
                {...field}
                id={name}
                className="text-lg bg-transparent py-1 px-3 rounded-lg border-2 border-zinc-700 focus:border-orange-500 hover:border-zinc-500 duration-200 min-h-[50px]"
                aria-placeholder={`Введите ${label}`}
            ></textarea>
            {fieldState?.error && (
                <div className="text-red-500 text-base">
                    Заполните поле {fieldState.error.message}
                </div>
            )}
        </div>
    )
}

export default TextareaForm
