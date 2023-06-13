import jwtDecode from "jwt-decode"
import { toDataForm } from "../hooks/toDataForm"
import { LOGOUT_USER, SET_USER } from "../store/actions/userActionsTypes"
import { authApi } from "./authApi.RTK"

export const userAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        // переписать под mutation
        setUser: build.mutation({
            query: (params) => ({
                url: "api/user/login",
                method: "post",
                body: { ...params },
            }),
            transformResponse: (res) => {
                return { ...res, ...jwtDecode(res.token) }
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch({ type: SET_USER, payload: data })
                } catch (error) {}
            },
            invalidatesTags: () => [{ type: "userAuth" }],
        }),
        getUser: build.query({
            query: (params) => ({
                url: `api/user/auth`,
                params: { ...params },
            }),
            transformResponse: (res) => {
                return { ...res, ...jwtDecode(res.token) }
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch({ type: SET_USER, payload: data })
                } catch (error) {}
            },
            providesTags: () => [{ type: "userAuth" }],
        }),
        updateUser: build.mutation({
            query: (body) => ({
                url: "api/user/update",
                method: "post",
                body: toDataForm(body),
            }),
            transformResponse: (res) => {
                return { ...res, ...jwtDecode(res.token) }
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch({ type: SET_USER, payload: data })
                } catch (error) {}
            },
            invalidatesTags: () => [{ type: "userAuth" }],
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: "api/user/registration",
                method: "post",
                body,
            }),
            transformResponse: (res) => {
                return { ...res, ...jwtDecode(res.token) }
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch({ type: SET_USER, payload: data })
                } catch (error) {}
            },
            invalidatesTags: () => [{ type: "userAuth" }],
        }),
        logoutUser: build.mutation({
            query: () => ({
                url: `api/user/logout`,
            }),
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    dispatch({ type: LOGOUT_USER })
                    localStorage.removeItem("token")
                } catch (error) {}
            },
            invalidatesTags: () => [{ type: "userAuth" }],
        }),
    }),
})

export const {
    useSetUserMutation,
    useGetUserQuery,
    useUpdateUserMutation,
    useCreateUserMutation,
    useLogoutUserMutation,
} = userAuthApi
