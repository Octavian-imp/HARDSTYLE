import { IoTicket } from "react-icons/io5"
import { v4 as uuidv4 } from "uuid"
import CouponItem from "../../../components/couponItem/CouponItem.jsx"
import { useGetAllCouponsQuery } from "../../../http/couponApi.RTK"

function Coupon() {
    const { data: coupons } = useGetAllCouponsQuery()
    return (
        <>
            <div className="text-xl lg:text-3xl font-semibold mb-6">
                Промокоды
            </div>
            {coupons?.length > 0 ? (
                <div className="flex flex-wrap gap-3 justify-center xl:justify-start">
                    {coupons.map((coupon) => (
                        <CouponItem
                            key={uuidv4()}
                            discountPercent={coupon.discount_percent}
                            productName={coupon.product.name}
                            textCoupon={coupon.text}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-2xl">
                    <IoTicket className="text-orange-500 text-9xl" />
                    <span className="font-bold">Нет купонов :(</span>
                </div>
            )}
        </>
    )
}

export default Coupon
