import { useState } from "react";
import formatPrice from "../../../components/priceFormatter";
import { v4 as uuidv4 } from "uuid";

export default function AllProducts() {
    const [items] = useState([
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
        {
            name: "Черная футболка HARD STYLE",
            category: "Футболка",
            gender: "Мужской",
            totalCount: 580,
            pricePerOne: 2300,
            totalCost: 1334000,
        },
    ]);
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                All Products
            </div>
            <div className="dark:bg-dark-light overflow-x-scroll bg-light px-3 py-4 rounded-xl">
                <table className="w-full relative" cellPadding={10}>
                    <thead>
                        <tr>
                            <th className="text-left">Название товара</th>
                            <th className="text-left">Категория</th>
                            <th className="text-center">Пол</th>
                            <th className="text-center">
                                Суммарное количество шт.
                            </th>
                            <th className="text-center">
                                Стоимость за шт. (руб.)
                            </th>
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
                                        <td>{item.category}</td>
                                        <td className="text-center align-middle">
                                            {item.gender}
                                        </td>
                                        <td className="text-center align-middle">
                                            {formatPrice(item.totalCount)}
                                        </td>
                                        <td className="text-center align-middle">
                                            {formatPrice(item.pricePerOne)}
                                        </td>
                                        <td className="text-center align-middle">
                                            {formatPrice(item.totalCost)}
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
