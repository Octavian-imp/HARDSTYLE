import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="relative h-9 lg:w-96 w-full lg:mr-4 mt-5 lg:mt-0 lg:mb-0">
      <input
        type="text"
        className={`dark:bg-[#222226] dark:text-white dark:border-b-white bg-[#fafafa] border-b-black border-b-2 px-4 h-full w-full dark:focus:border-b-orange-500 dark:caret-orange-500 focus:border-b-orange-500 caret-orange-500 duration-300`}
        style={{ outline: "none" }}
        placeholder="Введите запрос"
      />
      <button className="absolute top-2/4 right-4 translate-y-[-50%] bg-transparent p-0">
        <IoSearch className="dark:text-white text-black text-xl dark:hover:text-orange-500 hover:text-orange-500 duration-300" />
      </button>
    </div>
  );
}

export default Search;
