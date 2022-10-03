import { useMemo } from "react"
import { useState } from "react"
import { createContext } from "react"

export const FilterProductsContext = createContext({ filter: "Новизне" })

export const FilterProductsProvider = ({ children }) => {
  const [filter, setFilter] = useState("Новизне")
  const value = useMemo(() => ({ filter, setFilter }), [filter])
  return (
    <FilterProductsContext.Provider value={value}>
      {children}
    </FilterProductsContext.Provider>
  )
}
