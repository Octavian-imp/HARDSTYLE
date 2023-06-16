import ContentProductPage from "../../components/ContentProductPage"
import FormFilter from "../../components/formFilter/FormFilter"
import { FilterProductsProvider } from "../../providers/FilterProductsProvider"

const New = () => {
    return (
        <div className="flex-[1_0_auto] flex lg:flex-row flex-col container mx-auto lg:space-x-4">
            <div className="xl:w-1/5 lg:w-1/5 h-fit dark:bg-dark-light bg-light rounded-3xl lg:sticky top-4 mb-4 lg:mb-0">
                <FormFilter />
            </div>
            <FilterProductsProvider>
                {/* НУЖЕН РЕФАКТОРИНГ КОМПОНЕНТА!!! */}
                <ContentProductPage gender="female" />
            </FilterProductsProvider>
        </div>
    )
}

export default New
