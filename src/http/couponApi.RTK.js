import { authApi } from "./authApi.RTK"

export const couponAuthApi = authApi.injectEndpoints({
    endpoints: (build) => ({
        checkCoupon: build.mutation({
            query: (params) => ({
                url: "/api/coupon/",
                params,
            }),
            providesTags: () => [{ type: "couponAuth" }],
        }),
        createCoupon: build.mutation({
            query: (params) => ({
                url: "/api/coupon/create",
                method: "post",
                params,
            }),
            invalidatesTags: () => [{ type: "couponAuth" }],
        }),
        getAllCoupons: build.query({
            query: () => ({
                url: "/api/coupon/list",
            }),
            providesTags: () => [{ type: "couponAuth" }],
        }),
    }),
})

export const {
    useCheckCouponMutation,
    useCreateCouponMutation,
    useGetAllCouponsQuery,
} = couponAuthApi
