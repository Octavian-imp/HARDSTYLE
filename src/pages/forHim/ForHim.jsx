import FormFilter from "../../components/formFilter/FormFilter";
import MainContainer from "../../components/MainContainer";
import ContentProductPage from "../../components/ContentProductPage";
import { FilterProductsProvider } from "../../providers/FilterProductsProvider";
import { observer } from "mobx-react-lite";

const New = observer(() => {
    return (
        <div className="flex-[1_0_auto] flex lg:flex-row flex-col container mx-auto lg:space-x-4">
            <div className="xl:w-1/5 lg:w-1/5 h-fit dark:bg-dark-light bg-light rounded-3xl lg:sticky top-4 mb-4 lg:mb-0">
                <FormFilter />
            </div>
            <FilterProductsProvider>
                {/* НУЖЕН РЕФАКТОРИНГ КОМПОНЕНТА!!! */}
                <ContentProductPage gender="male" />
            </FilterProductsProvider>
        </div>
    );
});

export default New;
