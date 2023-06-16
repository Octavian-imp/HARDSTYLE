import ItemProduct from "../../components/itemProduct/ItemProduct"
import "./Home.scss"

import { Autoplay, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { filterOptions } from "../../global/filterOptions"
import { useGetProductsQuery } from "../../http/productAPI.RTK"

function Home() {
    const { data, isSuccess } = useGetProductsQuery({
        limit: 8,
        sort: filterOptions.at(0).name,
    })

    // const [popularProducts, setPopularProducts] = useState([])

    //настройки слайдеров
    const settingsMainBanner = {
        modules: [Navigation, Pagination, Autoplay],
        pagination: {
            clickable: true,
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 5000,
        },
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
    }

    const settingsNoveltyProducts = {
        modules: [Navigation, Autoplay],
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            1280: {
                slidesPerView: 4,
                slidesPerGroup: 2,
            },
            1536: {
                slidesPerView: 5,
            },
        },
    }

    return (
        <>
            <div className="mt-6 container mx-auto mb-11">
                <Swiper
                    {...settingsMainBanner}
                    className="homeSlider rounded-[3rem] "
                >
                    <SwiperSlide>
                        <div className="w-full !flex h-96">
                            <div className="w-1/2 bg-[#bfbfbf] font-stalinist flex items-center justify-center">
                                Фото лицевой стороны 1
                            </div>
                            <div className="w-1/2 bg-[#9c9999] font-stalinist flex items-center justify-center">
                                Фото задней стороны 1
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full !flex h-96">
                            <div className="w-1/2 bg-[#bfbfbf] font-stalinist flex items-center justify-center">
                                Фото лицевой стороны 2
                            </div>
                            <div className="w-1/2 bg-[#9c9999] font-stalinist flex items-center justify-center">
                                Фото задней стороны 2
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full !flex h-96">
                            <div className="w-1/2 bg-[#bfbfbf] font-stalinist flex items-center justify-center">
                                Фото лицевой стороны 3
                            </div>
                            <div className="w-1/2 bg-[#9c9999] font-stalinist flex items-center justify-center">
                                Фото задней стороны 3
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="swiper-button-prev customArrows"></div>
                    <div className="swiper-button-next customArrows"></div>
                    <div className="swiper-pagination "></div>
                </Swiper>

                <div className="mt-10 font-bold text-3xl text-center">
                    Популярные товары
                </div>

                <Swiper
                    {...settingsNoveltyProducts}
                    className="homeSlider mt-10 flex items-center justify-center"
                >
                    {data?.rows?.length > 0 &&
                        data?.rows.map((product, index) => (
                            <SwiperSlide
                                virtualIndex={index}
                                key={index}
                                className="overflow-hidden"
                            >
                                <ItemProduct
                                    index={product.id}
                                    url_item_img={
                                        process.env.REACT_APP_API_URL +
                                        product.img
                                    }
                                    url_item_page={`/product/${product.id}`}
                                    name_item={product.name}
                                    cost={product.price}
                                    isSliderChild={true}
                                />
                            </SwiperSlide>
                        ))}
                    <div className="swiper-button-prev 2xl:!hidden customArrows"></div>
                    <div className="swiper-button-next 2xl:!hidden customArrows"></div>
                </Swiper>
            </div>
        </>
    )
}

export default Home
