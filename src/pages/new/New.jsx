import ContentProductPage from "../../components/ContentProductPage.jsx"
import FormFilter from "../../components/formFilter/FormFilter.jsx"
import { FilterProductsProvider } from "../../providers/FilterProductsProvider.jsx"

const New = () => {
    return (
        <div className="flex-[1_0_auto] flex lg:flex-row flex-col container mx-auto lg:space-x-4">
            <div className="xl:w-1/5 lg:w-1/5 h-fit dark:bg-dark-light bg-light rounded-3xl lg:sticky top-4 mb-4 lg:mb-0">
                <FormFilter />
            </div>
            <FilterProductsProvider>
                <ContentProductPage />
            </FilterProductsProvider>
        </div>
    )
}

export default New
