import CustomSelectFilter from "./customSelect/CustomSelectFilter";
import ItemProduct from "./itemProduct/ItemProduct";
import { v4 as uuidv4 } from "uuid";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo } from "react";
import { useContext } from "react";
import { useState } from "react";
import useFilter from "../hooks/useFilter";
import { fetchProducts } from "../http/productAPI";
import { Context } from "..";
import Pages from "./Pages";

const ContentProductPage = observer(({ gender }) => {
    let [newProducts, setNewProducts] = useState([]);
    let { filter } = useFilter();
    const { products } = useContext(Context);
    useEffect(() => {
        fetchProducts({ gender: gender }, 1, 12).then((data) => {
            products.setProducts(data.rows);
            products.setTotalCount(data.count);
            setNewProducts(products.products);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        fetchProducts({ gender: gender }, products.page, 12).then((data) => {
            products.setProducts(data.rows);
            products.setTotalCount(data.count);
            setNewProducts(products.products);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products.page]);

    useMemo(() => {
        if (filter === "Цена (по возрастанию)")
            setNewProducts(newProducts.sort((a, b) => a.price - b.price));
        else if (filter === "Цена (по убыванию)")
            setNewProducts(newProducts.sort((a, b) => b.price - a.price));
        else if (filter === "Названию")
            setNewProducts(
                newProducts.sort((a, b) => {
                    if (a.name > b.name) return 1;
                    else if (a.name < b.name) return -1;
                    return 0;
                })
            );
    }, [filter, newProducts]);

    return (
        <div className="flex flex-col xl:w-4/5 lg:w-4/5">
            <div className="flex mb-3 font-semibold">
                Сортировка по:
                <CustomSelectFilter
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
                            id={item.id}
                            url_item_img={
                                process.env.REACT_APP_API_URL + item.img
                            }
                            url_item_page={`/product/${item.id}`}
                            name_item={item.name}
                            cost={item.price}
                            discount={item.isDiscount}
                            cost_without_discount={item.priceWithoutDiscount}
                        />
                    ))}
            </div>
            <Pages />
        </div>
    );
});
export default ContentProductPage;
