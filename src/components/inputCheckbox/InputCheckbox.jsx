import { useState } from "react"
import "./inputCheckbox.scss"

export default function InputCheckbox({
  id,
  isChecked = false,
  label = "Without label",
}) {
  let [isCheck, setIsChecked] = useState(isChecked)
  return (
    <>
      <label className="relative" style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          id={id}
          className="relative inputCheckbox mr-4"
          checked={isCheck}
          onChange={() => setIsChecked(!isCheck)}
        />
        {label}
      </label>
    </>
  )
}
