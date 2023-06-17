import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const publicApi = createApi({
    reducerPath: "publicApi",
    tagTypes: ["productsApi"],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: () => ({}),
})
