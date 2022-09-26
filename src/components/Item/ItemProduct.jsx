import { IoCart, IoHeartOutline, IoStatsChart } from "react-icons/io5";

function ItemProduct({
  url_item = require("../../assets/item.jpg"),
  name_item = "Черная футболка HARDSTYLE",
}) {
  return (
    <div className="rounded-2xl w-72 flex flex-col items-center">
      <img
        src={url_item}
        alt=""
        className="w-full h-72"
        style={{ objectFit: "cover", borderRadius: "inherit" }}
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
  );
}

export default ItemProduct;
