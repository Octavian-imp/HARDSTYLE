import { useContext } from "react";
import { FilterProductsContext } from "../providers/FilterProductsProvider.jsx";

const useFilter = () => {
    const value = useContext(FilterProductsContext);
    return value;
};
export default useFilter;
