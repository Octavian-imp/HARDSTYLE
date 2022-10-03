import React from "react"
import InputCheckbox from "../inputCheckbox/InputCheckbox"
import InputRangeCost from "../inputRangeCost/InputRangeCost"
import { v4 as uuidv4 } from "uuid"

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
  const genderCheckbox = [
    {
      id: "male",
      label: "Мужской",
      isChecked: true,
    },
    {
      id: "female",
      label: "Женский",
      isChecked: false,
    },
  ]

  return (
    <>
      <div className="text-center my-5 font-semibold text-xl">Фильтры</div>
      <div className="flex flex-col mb-4 mx-5">
        <span className="mb-3">Цена</span>
        <InputRangeCost min={0} max={100000} step={1000} />

        <span className="mb-3 font-semibold">Цвет</span>
        {colorsCheckbox &&
          colorsCheckbox.map((item) => (
            <InputCheckbox
              key={uuidv4()}
              id={item.id}
              label={item.label}
              isChecked={item.isChecked}
            />
          ))}
        <span className="mb-3 mt-5 font-semibold">Размеры</span>
        {sizesCheckbox &&
          sizesCheckbox.map((item) => (
            <InputCheckbox
              key={uuidv4()}
              id={item.id}
              label={item.label}
              isChecked={item.isChecked}
            />
          ))}
        <span className="mb-3 mt-5 font-semibold">Пол</span>
        {genderCheckbox &&
          genderCheckbox.map((item) => (
            <InputCheckbox
              key={uuidv4()}
              id={item.id}
              label={item.label}
              isChecked={item.isChecked}
            />
          ))}
      </div>
    </>
  )
}
