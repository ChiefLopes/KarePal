"use client";
import React from "react";
import { TESTIMONIALS } from "../utils/constants";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const CustomPrevArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-0 z-40 md:left-[-2rem] transform translate-y-1/2"
    >
      <Image src="/PrevButton.png" alt="next" width={30} height={30} />
    </button>
  );

  const CustomNextArrow = ({ onClick }: any) => (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-0 z-40 md:right-[-2rem] transform translate-y-1/2"
    >
      <Image src="/NextButton.png" alt="next" width={30} height={30} />
    </button>
  );

  var settings = {
    // dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="h-[38rem] lg:h-[26rem] ">
      <div className="flex flex-col items-center justify-center mx-5 lg:m-[15px] lg:ml-[4rem] space-y-4 pt-4">
        {/* TEXT */}
        <div className="text-center">
          <h1 className="text-[#2937B6] font-bold">Testimonials</h1>
          <p className="text-2xl font-semibold text-[#07001A] playfair-font">
            Stories of success and satisfaction
          </p>
        </div>

        {/* SLIDER */}
        <div className="">
          <Slider
            {...settings}
            className="w-[21rem] md:w-[27rem] lg:w-[45rem] lg:h-[13rem]"
          >
            {TESTIMONIALS.map((slide, index) => (
              <div
                key={index}
                className="space-x-2 border w-[14rem] lg:w-[37rem] h-[28rem] lg:h-[18rem] rounded-lg px-5  py-3 bg-[#FFFAFA]"
              >
                <div className="flex flex-col lg:flex-row justify-between ">
                  <div className="h-[8rem] w-[12rem] flex flex-col items-center mx-auto text-center lg:flex lg:flex-col ">
                    <Image
                      src={slide.icon}
                      alt="icon"
                      width={200}
                      height={100}
                      layout="responsive"
                      // className="rounded-lg md:rounded-none bg-green-400"
                    />

                    <p className="font-bold text-xl lg:text-3xl lg:w-[20rem] lg:max-w-[10rem] grid grid-rows-1">
                      {slide.name}
                    </p>
                    <p className="text-[#2937B6] w-52">{slide.title}</p>
                  </div>

                  {/* TESTIMONIAL */}
                  <div className="pt-[8rem] md:mx-auto lg:pt-20 lg:pr-10">
                    <Image
                      src="/OpenQoute.png"
                      alt="quote"
                      width={35}
                      height={35}
                      // className="hidden"
                    />
                    <p className="text-xs lg:text-sm max-w-[17rem] lg:max-w-[27rem] lg:pl-8">
                      {slide.testimonial}
                    </p>
                    <Image
                      src="/CloseQuote.png"
                      alt="quote"
                      width={35}
                      height={35}
                      className="ml-[15rem] lg:ml-[25rem] mb-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
