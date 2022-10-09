import { useState } from "react"

export default function Input({ label, type = "text" }) {
  const [val, setVal] = useState()
  return (
    <>
      <span className="mt-10 mb-2">{label}</span>
      <input
        type={`${type}`}
        className="border-b-2 border-b-white px-2 py-2 bg-transparent focus:border-b-orange-500 outline-none caret-orange-500 duration-300"
        placeholder={`Введите ${label}`}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </>
  )
}
