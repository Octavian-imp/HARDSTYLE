import { Link } from "react-router-dom";
import Slider from "react-slick";
import ItemProduct from "../../components/Item/ItemProduct";
import MainContainer from "../../components/MainContainer";
import "./Home.scss";

function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} customArrows`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} customArrows`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function Home() {
  const items = [
    {
      name_item: "Черная футболка Hard Style",
    },
    {
      name_item: "Черная футболка Hard Style",
    },
    {
      name_item: "Черная футболка Hard Style",
    },
    {
      name_item: "Черная футболка Hard Style",
    },
    {
      name_item: "Черная футболка Hard Style",
    },
  ];

  const settingsSlick = {
    customPaging: function (i) {
      return (
        <Link href="#">
          <div className="rounded-full customDot h-2 w-2"></div>
        </Link>
      );
    },
    dots: true,
    infinite: true,
    pauseOnHover: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    cssEase: "ease-in-out",
  };
  return (
    <>
      <MainContainer>
        <div className="mt-6 container mx-auto mb-11">
          <Slider {...settingsSlick} className="homeSlider rounded-[3rem]">
            <div className="w-full !flex h-96">
              <div className="w-1/2 bg-[#bfbfbf] font-stalinist flex items-center justify-center">
                Фото лицевой стороны 1
              </div>
              <div className="w-1/2 bg-[#9c9999] font-stalinist flex items-center justify-center">
                Фото задней стороны 1
              </div>
            </div>
            <div className="w-full !flex h-96">
              <div className="w-1/2 bg-[#bfbfbf] font-stalinist flex items-center justify-center">
                Фото лицевой стороны 2
              </div>
              <div className="w-1/2 bg-[#9c9999] font-stalinist flex items-center justify-center">
                Фото задней стороны 2
              </div>
            </div>
            <div className="w-full !flex h-96">
              <div className="w-1/2 bg-[#bfbfbf] font-stalinist flex items-center justify-center">
                Фото лицевой стороны 3
              </div>
              <div className="w-1/2 bg-[#9c9999] font-stalinist flex items-center justify-center">
                Фото задней стороны 3
              </div>
            </div>
          </Slider>
          <div className="mt-10 font-bold text-3xl text-center">
            Популярные товары
          </div>
          <div className="mt-10 flex space-x-6 items-center justify-center px-6">
            {items &&
              items.map((item) => (
                <ItemProduct
                  url_item={item.url_item}
                  name_item={item.name_item}
                />
              ))}
          </div>
        </div>
      </MainContainer>
    </>
  );
}

export default Home;
