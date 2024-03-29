import { $authHost, $host } from "./index.js"

export const createCategory = async (category) => {
    const { data } = await $authHost.post("api/category", category)
    return data
}

export const fetchCategory = async () => {
    const { data } = await $host.get("api/category")
    return data
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post("api/product", product)
    return data
}

export const fetchProducts = async (params, page, limit = 12) => {
    const { data } = await $host.get(
        "api/product",
        params && { params: { gender: params.gender, page, limit } }
    )
    return data
}

export const fetchPopularProducts = async () => {
    const { data } = await $host.get("api/product", { params: { limit: 8 } })
    return data
}

export const fetchProductsAllCounts = async () => {
    const { data } = await $authHost.get("api/product/all")
    return data
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get("api/product/" + id)
    return data
}
