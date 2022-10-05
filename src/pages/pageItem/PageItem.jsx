import { Navigation, Thumbs, Virtual } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import MainContainer from "../../components/MainContainer"
import "./PageItem.scss"
import { v4 as uuidv4 } from "uuid"
import SelectSizeRadioBtn from "../../components/selectSizeRadioBtn/SelectSizeRadioBtn"
import { useState } from "react"

function TabItem({ title, content }) {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div
      className="border-y-2 border-dark-light mt-5 flex flex-col px-5 py-5 w-full cursor-pointer"
      onClick={() => setIsClicked(!isClicked)}
    >
      <div className="flex justify-between items-center">
        <div className="font-semibold text-xl">{title}</div>
        <span
          className={`w-5 h-5 border-b-2 border-r-2 border-dark-light dark:border-white duration-300 ${
            isClicked ? "rotate-45" : "-rotate-45"
          } mr-10`}
        ></span>
      </div>
      <div
        className={`px-5 dark:text-dark-muted mt-5 text-muted ${
          isClicked === false && "hidden"
        } `}
      >
        {content}
      </div>
    </div>
  )
}

export default function PageItem() {
  const itemImages = [
    require("../../assets/item.jpg"),
    require("../../assets/item_2.jpg"),
    require("../../assets/item.jpg"),
    require("../../assets/item_2.jpg"),
    require("../../assets/item.jpg"),
  ]

  const sizes = ["s", "m", "l", "xl"]

  const settingsMain = {
    modules: [Thumbs, Virtual],
    slidesPerView: 1,
    slidesPerGroup: 1,
    thumbs: {
      swiper: {
        el: ".paginationMain",
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
    },
  }
  const settingsPaginationMain = {
    modules: [Navigation, Virtual],
    slidesPerView: 3,
    slidesPerGroup: 1,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  }

  const tabs = [
    {
      title: "Характеристики",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
    malesuada fames ac turpis. Ac ut consequat semper viverra nam
    libero. Sapien faucibus et molestie ac. Malesuada fames ac turpis
    egestas integer eget aliquet. Quis imperdiet massa tincidunt nunc.
    Volutpat commodo sed egestas egestas fringilla phasellus faucibus
    scelerisque. Laoreet id donec ultrices tincidunt. Nunc pulvinar
    sapien et ligula. Etiam dignissim diam quis enim lobortis
    scelerisque fermentum dui.`,
    },
    {
      title: "Доставка",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
    malesuada fames ac turpis. Ac ut consequat semper viverra nam
    libero. Sapien faucibus et molestie ac. Malesuada fames ac turpis
    egestas integer eget aliquet. Quis imperdiet massa tincidunt nunc.
    Volutpat commodo sed egestas egestas fringilla phasellus faucibus
    scelerisque. Laoreet id donec ultrices tincidunt. Nunc pulvinar
    sapien et ligula. Etiam dignissim diam quis enim lobortis
    scelerisque fermentum dui.`,
    },
    {
      title: "Как подобрать размер?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
    malesuada fames ac turpis. Ac ut consequat semper viverra nam
    libero. Sapien faucibus et molestie ac. Malesuada fames ac turpis
    egestas integer eget aliquet. Quis imperdiet massa tincidunt nunc.
    Volutpat commodo sed egestas egestas fringilla phasellus faucibus
    scelerisque. Laoreet id donec ultrices tincidunt. Nunc pulvinar
    sapien et ligula. Etiam dignissim diam quis enim lobortis
    scelerisque fermentum dui.`,
    },
  ]

  return (
    <MainContainer>
      <div className="container mx-auto flex  flex-wrap py-10">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="flex w-full lg:w-1/2 flex-wrap">
            <Swiper {...settingsMain} className="mainSlider">
              {itemImages.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-80 lg:h-96 xl:h-[500px] rounded-xl">
                      <img
                        src={item}
                        alt=""
                        className=" h-full object-cover rounded-[inherit] mx-auto select-none"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <Swiper
              {...settingsPaginationMain}
              className="paginationMain w-full mt-4 h-24"
            >
              {itemImages.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full rounded-xl cursor-pointer">
                      <img
                        src={item}
                        alt=""
                        className=" h-full object-cover rounded-[inherit] mx-auto select-none"
                      />
                    </div>
                  </SwiperSlide>
                )
              })}
              <div className="swiper-button-prev customArrows dark:!text-white !text-black"></div>
              <div className="swiper-button-next customArrows dark:!text-white !text-black"></div>
            </Swiper>
          </div>
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="text-3xl font-semibold mb-7">
              Черная футболка HARD STYLE
            </div>
            <div className="dark:text-dark-muted text-muted mb-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
              malesuada fames ac turpis. Ac ut consequat semper viverra nam
              libero. Sapien faucibus et molestie ac. Malesuada fames ac turpis
              egestas integer eget aliquet. Quis imperdiet massa tincidunt nunc.
              Volutpat commodo sed egestas egestas fringilla phasellus faucibus
              scelerisque. Laoreet id donec ultrices tincidunt. Nunc pulvinar
              sapien et ligula. Etiam dignissim diam quis enim lobortis
              scelerisque fermentum dui.
            </div>
            <div className="flex flex-wrap ml-2 lg:ml-0">
              {sizes.map((item, index) => {
                return (
                  <SelectSizeRadioBtn
                    key={uuidv4()}
                    id_index={index}
                    label={item}
                  />
                )
              })}
            </div>
            <button
              className="mt-7 ml-2 lg:ml-0 w-fit font-semibold text-center px-24 py-3 bg-orange-500 hover:bg-orange-600"
              type="button"
            >
              Купить
            </button>
          </div>
        </div>
        {tabs.map((item) => {
          return (
            <TabItem key={uuidv4()} title={item.title} content={item.content} />
          )
        })}
      </div>
    </MainContainer>
  )
}
