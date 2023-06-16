import { authApi } from "./authApi.RTK"

export const favoriteAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        addFavorite: build.mutation({
            query: (params) => ({
                url: "/api/favorite/add",
                method: "post",
                params,
            }),
            invalidatesTags: () => [{ type: "favoriteAuth" }],
        }),
        deleteFavorite: build.mutation({
            query: (params) => ({
                url: "/api/favorite/delete",
                method: "delete",
                params,
            }),
            invalidatesTags: () => [{ type: "favoriteAuth" }],
        }),
        getAll: build.query({
            query: () => ({
                url: "/api/favorite/list",
            }),
            providesTags: () => [{ type: "favoriteAuth" }],
        }),
    }),
})

export const {
    useAddFavoriteMutation,
    useDeleteFavoriteMutation,
    useGetAllQuery,
} = favoriteAuthApi
