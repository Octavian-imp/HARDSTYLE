import { createContext, useMemo, useState } from "react"
import { filterOptions } from "../global/filterOptions"

export const FilterProductsContext = createContext({
    filter: filterOptions[0].name,
})

export const FilterProductsProvider = ({ children }) => {
    const [typeSort, setTypeSort] = useState(filterOptions[0].name)
    // Остановился на добавлениии стейтов для фильтра (подумать насчет useRef)
    const value = useMemo(() => ({ typeSort, setTypeSort }), [typeSort])
    return (
        <FilterProductsContext.Provider value={value}>
            {children}
        </FilterProductsContext.Provider>
    )
}
