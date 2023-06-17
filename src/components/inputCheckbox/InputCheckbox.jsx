import { useState } from "react"
import { useFormContext } from "react-hook-form"
import "./inputCheckbox.scss"

export default function InputCheckbox({
    isChecked = false,
    label = "Without label",
    name,
    arr,
    index,
}) {
    const { register } = useFormContext()
    let [isCheck, setIsChecked] = useState(isChecked)
    const nameField = `${arr}.${index}.isChecked`
    return (
        <>
            <label className="relative cursor-pointer">
                <input
                    {...register(nameField)}
                    type="checkbox"
                    id={name}
                    className="relative inputCheckbox mr-4 cursor-pointer"
                    checked={isCheck}
                    onChange={() => setIsChecked(!isCheck)}
                />
                {label}
            </label>
        </>
    )
}
