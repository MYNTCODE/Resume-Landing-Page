import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import HomePage from "../assets/project/home-service/home-service.jpg"
import Login from "../assets/project/home-service/login.jpeg"
import List from "../assets/project/home-service/sort-list.jpg"
import Service from "../assets/project/home-service/service_type.jpg"
import ServiceSetting from "../assets/project/home-service/setting.jpeg"
import PromotionCode from "../assets/project/home-service/promotion_code.jpg"

function SliderImage() {
  const slides = [
    {
      url: HomePage,
    },
    {
      url: List,
    },
    {
      url:  Login,
    },
    {
      url: Service,
    },
    {
      url: ServiceSetting,
    },
    {
      url: PromotionCode,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className=" max-w-[1400px] h-[400px] sm:h-[400px] sm:mt-[-40px] md:h-[600px] lg:h-[600px] w-full m-auto mt-[-20px] py-20 lg:pt-10 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 border-[2px] border-gray-700"
      ></div>
      {/* Left Arrow */}
      <div
        title="previous"
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div
        title="next"
        className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2 ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <div>
              <RxDotFilled />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SliderImage;
