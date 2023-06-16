import { authApi } from "./authApi.RTK"

export const supportAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        createTicket: build.mutation({
            query: (body) => ({
                url: "/api/support/create",
                method: "post",
                body,
            }),
            invalidatesTags: () => [{ type: "supportAuth" }],
        }),
        getOneTicket: build.query({
            query: (params) => ({
                url: "/api/support/message/get",
                params,
            }),
            transformResponse: (res) => {
                return res.sort((a, b) => a.id - b.id)
            },
            providesTags: () => [{ type: "supportMessageAuth" }],
        }),
        addNewMessage: build.mutation({
            query: (body) => ({
                url: "/api/support/message/send",
                method: "post",
                body,
            }),
            invalidatesTags: () => [{ type: "supportMessageAuth" }],
        }),
        getAllTickets: build.query({
            query: (params) => ({
                url: "/api/support/history",
                params,
            }),
            providesTags: () => [{ type: "supportAuth" }],
        }),
    }),
})

export const {
    useCreateTicketMutation,
    useGetAllTicketsQuery,
    useGetOneTicketQuery,
    useAddNewMessageMutation,
} = supportAuthApi
