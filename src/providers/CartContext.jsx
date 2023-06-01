import { createContext, useMemo, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([
        // {
        //     id: 1,
        //     url_img: itemLogoFront,
        //     title: "Text",
        //     size: "m",
        //     price: 11500,
        //     count: 1,
        //     isDiscount: true,
        //     discount_cost: 1000,
        // },
    ]);
    const [countProducts, setCountProducts] = useState(0);
    const value = useMemo(
        () => ({ cart, countProducts, setCart, setCountProducts }),
        [cart, countProducts, setCart]
    );
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
