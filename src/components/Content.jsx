import React, { useEffect, useMemo, useState } from "react";
import useFilter from "../hooks/useFilter";
import ItemProduct from "./itemProduct/ItemProduct";
import { v4 as uuidv4 } from "uuid";

export default function Content() {
    let [newProducts, setNewProducts] = useState([]);
    let { filter } = useFilter();

    async function fetchProducts() {
        const res = await fetch("https://fakestoreapi.com/products/");
        const json = await res.json();
        setNewProducts(json);
        console.log(json);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    useMemo(() => {
        if (filter == "Цена (по возрастанию)") {
            setNewProducts(newProducts.sort((a, b) => a.price - b.price));
            console.log(filter);
        }
    }, [filter, newProducts]);

    return (
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
                        cost_without_discount={(
                            Math.random() *
                            (100000 - 0)
                        ).toFixed(2)}
                    />
                ))}
        </div>
    );
}
