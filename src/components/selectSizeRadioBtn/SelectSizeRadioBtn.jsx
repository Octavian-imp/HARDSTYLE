import { useState } from "react"

export default function SelectSizeRadioBtn({ id_index, label }) {
  const [size, setSize] = useState()
  return (
    <label
      htmlFor={`size-${id_index}`}
      className="text-2xl px-3 py-2 mr-2 relative"
    >
      <input
        type="radio"
        id={`size-${id_index}`}
        name="selectSize"
        className="appearance-none absolute w-full h-full top-0 left-0 checked:border-b-2 checked:border-b-orange-500 cursor-pointer"
        data-size={label}
        onChange={function (el) {
          setSize(el.target.dataset.size)
        }}
      />
      <span className="pointer-none select-none z-10">
        {label.toUpperCase()}
      </span>
    </label>
  )
}
