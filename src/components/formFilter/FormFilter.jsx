import React from "react"
import InputCheckbox from "../inputCheckbox/InputCheckbox"
import InputRangeCost from "../inputRangeCost/InputRangeCost"

export default function FormFilter() {
  const colorsCheckbox = [
    {
      id: "color-red",
      label: "Красный",
      isChecked: false,
    },
    {
      id: "color-green",
      label: "Зеленый",
      isChecked: true,
    },
  ]

  const sizesCheckbox = [
    {
      id: "size-s",
      label: "S",
      isChecked: false,
    },
    {
      id: "size-m",
      label: "M",
      isChecked: true,
    },
  ]
  return (
    <>
      <div className="text-center my-5 font-semibold text-xl">Фильтры</div>
      <div className="flex flex-col mb-4 mx-5">
        <span className="mb-3">Цена</span>
        <InputRangeCost min={0} max={100000} step={1000} />
        <div className="flex my-4">
          <input
            className="w-1/3 text-center text-black bg-light rounded-2xl p-1"
            type="number"
            value="0"
          />
          <span className="w-1/3 text-center font-bold">&mdash;</span>
          <input
            type="number"
            className="w-1/3 text-center text-black bg-light rounded-2xl p-1"
            value="1000000"
          />
        </div>
        <span className="mb-3 font-semibold">Цвет</span>
        {colorsCheckbox &&
          colorsCheckbox.map((item) => (
            <InputCheckbox
              id={item.id}
              label={item.label}
              isChecked={item.isChecked}
            />
          ))}
        <span className="mb-3 mt-5 font-semibold">Размеры</span>
        {sizesCheckbox &&
          sizesCheckbox.map((item) => (
            <InputCheckbox
              id={item.id}
              label={item.label}
              isChecked={item.isChecked}
            />
          ))}
      </div>
    </>
  )
}
