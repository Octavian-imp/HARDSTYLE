import { api } from "./api.RTK"

// export const productApi = createApi({
//     reducerPath: "productApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
//     endpoints: (build) => ({
//         getProducts: build.query({
//             query: (arg) => ({
//                 url: `api/product`,
//                 params: { ...arg },
//             }),
//         }),
//     }),
// });

export const productApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (params) => ({
                url: `api/product`,
                params: { ...params },
            }),
        }),
    }),
})
export const { useGetProductsQuery } = api
// export const { useGetProductsQuery } = productApi
