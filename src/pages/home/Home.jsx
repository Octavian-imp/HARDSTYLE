import ItemProduct from "../../components/itemProduct/ItemProduct.jsx"
import "./Home.scss"

import { Autoplay, Navigation, Pagination } from "swiper"
// eslint-disable-next-line import/no-unresolved
import "swiper/css"
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation"
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"
import { filterOptions } from "../../global/filterOptions"
import { useGetProductsQuery } from "../../http/productAPI.RTK"

function Home() {
    const { data } = useGetProductsQuery({
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
                        <a
                            href={`${process.env.REACT_APP_HOME_URL}product/${
                                data?.rows?.at(0).id
                            }`}
                            className="w-full !flex h-96 select-none"
                        >
                            <div className="w-1/2 bg-white font-stalinist flex items-center justify-center">
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        data?.rows?.at(0).img
                                    }
                                    alt=""
                                    className="h-full"
                                />
                            </div>
                            <div className="w-1/2 bg-white font-stalinist flex items-center justify-center">
                                <img
                                    src={require("../../assets/not_found_logo.png")}
                                    alt=""
                                    className="h-full"
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a
                            href={`${process.env.REACT_APP_HOME_URL}product/${
                                data?.rows?.at(1).id
                            }`}
                            className="w-full !flex h-96 select-none"
                        >
                            <div className="w-1/2 bg-white font-stalinist flex items-center justify-center">
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        data?.rows?.at(1).img
                                    }
                                    alt=""
                                    className="h-full"
                                />
                            </div>
                            <div className="w-1/2 bg-white font-stalinist flex items-center justify-center">
                                <img
                                    src={require("../../assets/not_found_logo.png")}
                                    alt=""
                                    className="h-full"
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a
                            href={`${process.env.REACT_APP_HOME_URL}product/${
                                data?.rows?.at(2).id
                            }`}
                            className="w-full !flex h-96 select-none"
                        >
                            <div className="w-1/2 bg-white font-stalinist flex items-center justify-center">
                                <img
                                    src={
                                        process.env.REACT_APP_API_URL +
                                        data?.rows?.at(2).img
                                    }
                                    alt=""
                                    className="h-full"
                                />
                            </div>
                            <div className="w-1/2 bg-white font-stalinist flex items-center justify-center">
                                <img
                                    src={require("../../assets/not_found_logo.png")}
                                    alt=""
                                    className="h-full"
                                />
                            </div>
                        </a>
                    </SwiperSlide>
                    <div className="swiper-button-prev customArrows"></div>
                    <div className="swiper-button-next customArrows"></div>
                    <div className="swiper-pagination "></div>
                </Swiper>

                <div className="mt-10 font-bold text-3xl text-center">
                    Новинки
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
