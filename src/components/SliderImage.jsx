import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function SliderImage() {
  const slides = [
    {
      url: "https://cdn.discordapp.com/attachments/1144637676016898219/1174297385040613449/Screenshot_2023-11-15_173728.jpg?ex=656714a9&is=65549fa9&hm=97d179221a7a1ec2e8c24bb36302530b124dabfa3b49bc2a475fdd1025a95766&",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1144637676016898219/1174273141770559488/Web_capture_15-11-2023_152447_localhost.jpeg?ex=6566fe15&is=65548915&hm=bb6ec10273ad7ffa9a70d22731c60334226edfeb8cba677aa43091456d3d6929&",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1144637676016898219/1174273142299033641/Screenshot_2023-11-15_152423.jpg?ex=6566fe16&is=65548916&hm=5b28ca924c925c2ac003fe9a5260def180e86459f08410f247e0b28e8f5c9b26&",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1144637676016898219/1174273142588457020/Screenshot_2023-11-15_152335.jpg?ex=6566fe16&is=65548916&hm=1f70b171854046091f897cb7b1cbbe2775dba120bea2022ec7a4d8e58d1be5fb&",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1144637676016898219/1174273143079182336/Screenshot_2023-11-15_152257.jpg?ex=6566fe16&is=65548916&hm=1e1610c5b4369ad3dad91d71059c524566b5cea4bd276b1f0772bbf6a904699a&",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1144637676016898219/1174273143339221072/Web_capture_15-11-2023_152151_localhost.jpeg?ex=6566fe16&is=65548916&hm=7ff4c3a429f509bc6b0deb92e8f9a3fd11be35daa6b9aed800a6b2d69e3c4dbe&",
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
    <div className="max-w-[1400px] h-[520px] w-full m-auto py-16 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500 border-[2px] border-gray-700"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
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
