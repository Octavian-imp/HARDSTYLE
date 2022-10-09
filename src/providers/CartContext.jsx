import { createContext, useMemo, useState } from "react";
import itemLogoFront from "../assets/item.jpg";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([
        {
            id: 1,
            url_img: itemLogoFront,
            title: "Text",
            size: "m",
            price: 11500,
            count: 1,
            isDiscount: true,
            discount_cost: 1000,
        },
        {
            id: 2,
            url_img: itemLogoFront,
            title: "Text",
            size: "m",
            price: 11500,
            count: 1,
            isDiscount: false,
        },
        {
            id: 3,
            url_img: itemLogoFront,
            title: "Text",
            size: "m",
            price: 11500,
            count: 1,
            isDiscount: true,
            discount_cost: 10000,
        },
        {
            id: 4,
            url_img: itemLogoFront,
            title: "Text",
            size: "m",
            price: 11500,
            count: 1,
            isDiscount: true,
            discount_cost: 10000,
        },
        {
            id: 5,
            url_img: itemLogoFront,
            title: "Text",
            size: "m",
            price: 11500,
            count: 1,
            isDiscount: true,
            discount_cost: 10000,
        },
        {
            id: 6,
            url_img: itemLogoFront,
            title: "Text",
            size: "m",
            price: 11500,
            count: 1,
            isDiscount: true,
            discount_cost: 10000,
        },
    ]);
    const value = useMemo(() => ({ cart, setCart }), [cart]);
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
