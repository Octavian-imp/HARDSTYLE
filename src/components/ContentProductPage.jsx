import CustomSelect from "./customSelect/CustomSelect"
import ItemProduct from "./itemProduct/ItemProduct"
import { v4 as uuidv4 } from "uuid"
import useFilter from "../hooks/useFilter"
import { useEffect, useMemo } from "react"
import { useState } from "react"
// {
//   name: "Item 2",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 1",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 3",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 4",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 5",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 4",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 6",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 7",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 8",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 9",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 10",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },
// {
//   name: "Item 11",
//   cost: (Math.random() * (100000 - 0)).toFixed(2),
//   isDiscount: true,
//   cost_without_discount: (Math.random() * (100000 - 0)).toFixed(2),
// },

export default function ContentProductPage() {
  let [newProducts, setNewProducts] = useState([])
  let { filter } = useFilter()

  async function fetchProducts() {
    const res = await fetch("https://fakestoreapi.com/products")
    const json = await res.json()
    setNewProducts(json)
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setNewProducts(result))

    //добавление пола itemam
    setNewProducts(
      newProducts.map(
        (item, index) => (item["gender"] = index % 2 ? "male" : "female")
      )
    )
  }, [])

  useMemo(() => {
    if (filter === "Цена (по возрастанию)")
      setNewProducts(newProducts.sort((a, b) => a.price - b.price))
    else if (filter === "Цена (по убыванию)")
      setNewProducts(newProducts.sort((a, b) => b.price - a.price))
    else if (filter === "Названию")
      setNewProducts(
        newProducts.sort((a, b) => {
          if (a.title > b.title) return 1
          else if (a.title < b.title) return -1
          return 0
        })
      )
  }, [filter, newProducts])

  return (
    <div className="flex flex-col  xl:w-4/5 lg:w-4/5">
      <div className="flex mb-3 font-semibold">
        Сортировка по:
        <CustomSelect
          selectedValue={filter}
          options={[
            "Названию",
            "Популярное",
            "Новизне",
            "Цена (по возрастанию)",
            "Цена (по убыванию)",
          ]}
        />
      </div>
      <div className="flex md:justify-between justify-evenly flex-wrap">
        {newProducts &&
          newProducts.map((item) => (
            <ItemProduct
              key={uuidv4()}
              className="mb-4"
              url_item_1={item.image}
              name_item={item.title}
              cost={item.price}
              discount={true}
              cost_without_discount={(Math.random() * (100000 - 0)).toFixed(2)}
            />
          ))}
      </div>
    </div>
  )
}
