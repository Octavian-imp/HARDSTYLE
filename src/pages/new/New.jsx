import FormFilter from "../../components/formFilter/FormFilter"
import ItemProduct from "../../components/itemProduct/ItemProduct"
import MainContainer from "../../components/MainContainer"

function New() {
  const newProducts = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
  return (
    <>
      <MainContainer>
        <div className="flex-[1_0_auto] flex lg:flex-row flex-col container mx-auto lg:space-x-4">
          <div className="xl:w-1/5 lg:w-1/5 h-fit dark:bg-dark-light bg-light rounded-3xl lg:sticky top-4 mb-4 lg:mb-0">
            <FormFilter />
          </div>
          <div className="flex md:justify-between justify-evenly flex-wrap xl:w-4/5 lg:w-4/5">
            {newProducts &&
              newProducts.map((item) => <ItemProduct className="mb-4" />)}
          </div>
        </div>
      </MainContainer>
    </>
  )
}

export default New
