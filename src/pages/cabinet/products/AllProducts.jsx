import { useEffect, useContext, useState } from "react";
import formatPrice from "../../../components/priceFormatter";
import { v4 as uuidv4 } from "uuid";
import {
    fetchCategory,
    fetchProductsAllCounts,
} from "../../../http/productAPI";
import { Context } from "../../../.";

export default function AllProducts() {
    const [items, setItems] = useState([]);
    const { products } = useContext(Context);

    useEffect(() => {
        fetchCategory().then((res) => {
            products.setCategories(res);
        });
        fetchProductsAllCounts()
            .then((data) => {
                data.forEach((item) => {
                    item.totalCount =
                        item.sizes.length > 1
                            ? item.sizes.reduce(
                                  (prev, next) => prev + next.count,
                                  0
                              )
                            : item.sizes.at(0).count;
                    item.categoryName =
                        item.categoryId === null
                            ? "error"
                            : products.categories.at(item.categoryId - 1)?.name;
                });
                setItems(data);
            })
            .catch((er) => console.log(er));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setItems]);

    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                All Products
            </div>
            <div className="dark:bg-dark-light overflow-x-scroll md:overflow-x-auto bg-light px-3 py-4 rounded-xl">
                <table className="w-full relative" cellPadding={10}>
                    <thead>
                        <tr>
                            <th className="text-left">Название товара</th>
                            <th className="text-left">Категория</th>
                            <th className="text-center">Пол</th>
                            <th className="text-center">
                                Суммарное количество шт.
                            </th>
                            <th className="text-center">Стоимость за 1 ед.</th>
                            <th className="text-center">
                                Суммарная стоимость руб.
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {items &&
                            items.map((item) => {
                                return (
                                    <tr
                                        key={uuidv4()}
                                        className="dark:hover:bg-zinc-700 hover:bg-zinc-200 duration-200"
                                    >
                                        <td>{item.name}</td>
                                        <td>{item.categoryName}</td>
                                        <td className="text-center align-middle">
                                            {item.gender}
                                        </td>
                                        <td className="text-center align-middle">
                                            {formatPrice(item.totalCount)}
                                        </td>
                                        <td className="text-center align-middle">
                                            {formatPrice(item.price)}
                                        </td>
                                        <td className="text-center align-middle">
                                            {formatPrice(
                                                item.totalCount * item.price
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
