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

import { publicApi } from "./publicApi.RTK"

export const productApi = publicApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (params) => ({
                url: `api/product`,
                params,
            }),
        }),
        getOneProduct: build.query({
            query: ({ id }) => ({
                url: `api/product/${id}`,
            }),
        }),
    }),
})
export const { useGetProductsQuery, useGetOneProductQuery } = productApi
