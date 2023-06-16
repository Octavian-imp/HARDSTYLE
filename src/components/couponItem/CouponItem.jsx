function CouponItem({ discountPercent, productName, textCoupon }) {
    return (
        <div className="h-80 w-52 flex-col dark:bg-dark-light bg-light overflow-hidden rounded-2xl relative">
            {/* <CouponText text={discount} /> */}
            <div
                className="h-3/5 text-3xl xl:text-4xl text-orange-500 flex items-center justify-center"
                style={{ fontFamily: "Stalinist One" }}
            >
                -{discountPercent}%
            </div>
            <div className="self-end flex flex-col items-center w-full border-dashed border-t-2 border-black z-10 dark:backdrop-brightness-75 backdrop-brightness-95 h-2/5 dark:text-zinc-200 text-zinc-700">
                <span className="my-3 font-bold text-orange-500">
                    {textCoupon}
                </span>
                <span className="my-1">Скидка -{discountPercent}%</span>
                <span>Для {productName}</span>
            </div>
        </div>
    )
}

export default CouponItem
