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
            providesTags: () => [{ type: "productsApi" }],
        }),
        filterProducts: build.mutation({
            query: (params) => ({
                url: "api/product",
                params,
            }),
            invalidatesTags: () => [{ type: "productsApi" }],
        }),
        getOneProduct: build.query({
            query: ({ id }) => ({
                url: `api/product/${id}`,
            }),
        }),
    }),
})
export const {
    useGetProductsQuery,
    useGetOneProductQuery,
    useFilterProductsMutation,
} = productApi
