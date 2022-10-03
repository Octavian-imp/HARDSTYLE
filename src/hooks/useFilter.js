import { useContext } from "react"
import { FilterProductsContext } from "../components/filterProductsProvider/FilterProductsProvider"

const useFilter = () => {
  const value = useContext(FilterProductsContext)
  return value
}
export default useFilter
