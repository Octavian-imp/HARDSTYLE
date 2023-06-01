import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { filterOptions } from "../global/filterOptions"
import { useGetProductsQuery } from "../http/productAPI.RTK"
import CustomSelectFilter from "./customSelect/CustomSelectFilter"
import ItemProduct from "./itemProduct/ItemProduct"

const ContentProductPage = ({ gender }) => {
    const [page, setPage] = useState(1)
    const [sortname, setSortname] = useState(filterOptions[0].name)
    const { data, isLoading, error, isError } = useGetProductsQuery({
        limit: 12,
        page,
        sort: sortname,
    })
    let [pageCount, setPageCount] = useState(1)
    let [newProducts, setNewProducts] = useState([])

    useEffect(() => {
        if (data) {
            setNewProducts(data.rows)
            setPageCount(Math.ceil(data.count / 12))
        }
    }, [data])
    if (isLoading) {
        return <h1>Loading</h1>
    }
    if (isError) {
        return (
            <h1>
                {error.status} {JSON.stringify(error.data)}
            </h1>
        )
    }
    return (
        <div className="flex flex-col xl:w-4/5 lg:w-4/5">
            <div className="flex mb-3 font-semibold">
                Сортировка по:
                <CustomSelectFilter
                    options={filterOptions}
                    onChangeValue={(value) => {
                        setSortname(value)
                        setPage(1)
                    }}
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

            {/* pagination */}
            <div className="mb-5">
                <ul className="flex justify-end space-x-4">
                    <li
                        className="rounded-full px-3 py-2 text-center cursor-pointer"
                        onClick={() =>
                            setPage((prev) => (prev - 1 >= 1 ? prev - 1 : prev))
                        }
                    >
                        Предыдущая
                    </li>
                    <li
                        className="rounded-full px-3 py-2 text-center cursor-pointer"
                        onClick={() =>
                            setPage((prev) =>
                                prev + 1 <= pageCount ? prev + 1 : prev
                            )
                        }
                    >
                        Следующая
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ContentProductPage
