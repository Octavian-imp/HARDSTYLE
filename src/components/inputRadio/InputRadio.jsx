import "./InputRadio.scss";
import { useState } from "react";

export default function InputRadio({
    id,
    name = "withoutName",
    isChecked = false,
    label = "Without label",
}) {
    let [isCheck, setIsChecked] = useState(isChecked);
    return (
        <>
            <label className="relative" style={{ cursor: "pointer" }}>
                <input
                    type="radio"
                    name={name}
                    id={id}
                    className="relative inputRadio mr-4"
                    checked={isCheck}
                    onChange={() => setIsChecked(!isCheck)}
                />
                {label}
            </label>
        </>
    );
}
