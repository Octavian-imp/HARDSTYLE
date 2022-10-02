import { IoCart, IoHeartOutline, IoStatsChart } from "react-icons/io5"

function ItemProduct({
  url_item = require("../../assets/item.jpg"),
  name_item = "Черная футболка HARDSTYLE",
  className,
}) {
  return (
    <div
      className={`rounded-2xl 2xl:w-72 lg:w-64 2xl:mx-0 lg:mx-auto flex flex-col items-center ${className}`}
    >
      <img
        src={url_item}
        alt=""
        className="w-full 2xl:h-72 sm:h-64 h-96"
        style={{
          objectFit: "cover",
          borderRadius: "inherit",
          objectPosition: "center",
        }}
      />
      <div className="dark:bg-[#222226] bg-gray-100 rounded-2xl w-full -mt-11">
        <div className="mt-5 font-semibold text-center">{name_item}</div>
        <div className="flex justify-between my-6 mx-7">
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white flex items-center justify-center rounded-full font-semibold"
            title="Купить"
          >
            <IoCart className="text-white mr-2 text-2xl" />
            Купить
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
            title="В избранное"
          >
            <IoHeartOutline className="text-white text-2xl" />
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white flex items-center justify-center rounded-full font-semibold p-2"
            title="Сравнить"
          >
            <IoStatsChart className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemProduct