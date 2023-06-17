import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { filterOptions } from "../global/filterOptions"
import { useGetProductsQuery } from "../http/productAPI.RTK"
import CustomSelectFilter from "./customSelect/CustomSelectFilter"
import ItemProduct from "./itemProduct/ItemProduct"

const ContentProductPage = ({ gender, isAccessories }) => {
    const [page, setPage] = useState(1)
    const countPerPage = [
        { content: 12, name: 12 },
        { content: 2, name: 2 },
    ]
    const [sortname, setSortname] = useState(filterOptions[0].name)
    let [limitPage, setLimitPage] = useState(12)
    const {
        data: products,
        isLoading,
        error,
        isError,
        isSuccess,
    } = useGetProductsQuery({
        limit: limitPage,
        page,
        sort: sortname,
        gender,
        isAccessories,
    })
    let [pageCount, setPageCount] = useState(1)

    useEffect(() => {
        if (isSuccess) {
            setPageCount(Math.ceil(products.count / limitPage))
        }
    }, [products])
    if (isLoading) {
        return <h1>Loading</h1>
    }
    if (isError) {
        return (
            <h1>
                {error.status} {JSON.stringify(error?.data?.message)}
            </h1>
        )
    }
    return (
        <div className="flex flex-col xl:w-4/5 lg:w-4/5">
            <div className="flex justify-between mb-3 font-semibold">
                <div className="flex">
                    Сортировка по:
                    <CustomSelectFilter
                        options={filterOptions}
                        onChangeValue={(value) => {
                            setSortname(value)
                            setPage(1)
                        }}
                    />
                </div>
                <CustomSelectFilter
                    options={countPerPage}
                    onChangeValue={(value) => {
                        setLimitPage(value)
                    }}
                />
            </div>
            <div className="flex md:justify-between justify-evenly flex-wrap">
                {products.rows?.length > 0 &&
                    products.rows.map((item) => (
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
