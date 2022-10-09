import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

const useCart = () => {
    const value = useContext(CartContext);
    return value;
};
export default useCart;
