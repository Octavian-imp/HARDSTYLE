import { authApi } from "./authApi.RTK"

export const orderAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        getAll: build.query({
            query: (params) => ({
                url: "/api/order",
                params,
            }),
            onQueryStarted: () => {
                // TODO: продолжить тут
            },
            providesTags: () => [{ type: "ordersAuth" }],
        }),
    }),
})

export const { useGetAllQuery } = orderAuthApi
