import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";

const Pages = observer(() => {
    const { products } = useContext(Context);
    const pageCount = Math.ceil(products.totalCount / products.limit);
    const pages = [];
    for (let i = 0; i < pageCount; i++) pages.push(i + 1);
    return (
        <div className="mb-5">
            <ul className="flex justify-end space-x-4">
                {pages.map((page, index) => (
                    <li
                        key={index}
                        active={products.page === page}
                        onClick={() => products.setPage(page)}
                        className="rounded-full px-3 py-2 text-center cursor-pointer"
                    >
                        {page}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Pages;
