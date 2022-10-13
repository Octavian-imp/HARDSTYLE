import { useState } from "react";

export default function Input({ label, defaultValue = "", type = "text" }) {
    const [val, setVal] = useState(defaultValue);
    return (
        <>
            <span className="mt-10 mb-2 font-semibold">{label}</span>
            <input
                type={`${type}`}
                className="border-b-2 border-b-white focus:border-b-orange-500 outline-none caret-orange-500 duration-300 px-2 py-2 bg-transparent"
                placeholder={`Введите ${label}`}
                value={val}
                onChange={(e) => setVal(e.target.value)}
            />
        </>
    );
}
