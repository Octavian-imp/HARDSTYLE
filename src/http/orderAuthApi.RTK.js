import { authApi } from "./authApi.RTK"

export const orderAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        createOrder: build.mutation({
            query: (body) => ({
                url: "/api/order",
                method: "post",
                body,
            }),
            // onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
            //     try {
            //         const { data } = await queryFulfilled
            //         dispatch({ type: SET_USER, payload: data })
            //     } catch (error) {}
            // },
            providesTags: () => [{ type: "orderAuth" }],
        }),
        getHistory: build.query({
            query: () => ({
                url: "/api/order/history",
            }),
            providesTags: () => [{ type: "orderAuth" }],
        }),
    }),
})

export const { useCreateOrderMutation, useGetHistoryQuery } = orderAuthApi
