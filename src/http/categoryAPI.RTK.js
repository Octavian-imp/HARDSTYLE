import { publicApi } from "./publicApi.RTK"

export const categoryApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query({
            query: () => ({
                url: "api/category",
            }),
        }),
    }),
})

export const { useGetCategoriesQuery } = categoryApi
