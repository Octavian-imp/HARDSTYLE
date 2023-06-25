/* eslint-disable no-undef */
import jwtDecode from "jwt-decode"
import { toDataForm } from "../hooks/toDataForm"
import { LOGOUT_USER, SET_USER } from "../store/actions/userActionsTypes"
import { authApi } from "./authApi.RTK"

export const userAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
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
                    localStorage.setItem("token", data.token)
                } catch (error) {}
            },
            invalidatesTags: () => [{ type: "userAuth" }],
        }),
        getUser: build.mutation({
            query: () => ({
                url: `api/user/auth`,
            }),
            transformResponse: (res) => {
                return { ...res, ...jwtDecode(res.token) }
            },
            onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch({ type: SET_USER, payload: data })
                    localStorage.setItem("token", data.token)
                } catch (error) {}
            },
            invalidatesTags: () => [{ type: "userAuth" }],
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
                    localStorage.setItem("token", data.token)
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
    useGetUserMutation,
    useUpdateUserMutation,
    useCreateUserMutation,
    useLogoutUserMutation,
} = userAuthApi
