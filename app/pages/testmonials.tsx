"use client";
import React from "react";
import { TESTIMONIALS } from "../utils/constants";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const CustomPrevArrow = ({ onClick }) => (
    <button onClick={onClick}>Previous</button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button onClick={onClick}>Next</button>
  );

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="h-[27rem] lg:h-[23rem]">
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
          <Slider {...settings} className="w-[21rem] lg:w-[45rem] lg:h-[15rem]">
            {TESTIMONIALS.map((slide, index) => (
              <div
                key={index}
                className="space-x-2 border w-[14rem] lg:w-[37rem] h-[20rem] lg:h-[18rem] rounded-lg px-5  py-5 bg-red-400"
              >
                <div className="flex lg:flex-row justify-between ">
                  <div className="h-[15rem] w-[12rem] text-center hidden lg:flex flex-row lg:flex-col ">
                    <Image
                      src={slide.icon}
                      alt="icon"
                      width={200}
                      height={100}
                      layout="responsive"
                      className="hidden"
                    />
                    <div className="flex flex-col ">
                      <p className="font-bold text-xl lg:text-3xl max-w-[10rem]">
                        {slide.name}
                      </p>
                      <p className="text-[#2937B6]">{slide.title}</p>
                    </div>
                  </div>

                  <div className="pt-32 lg:pt-20 lg:pr-10">
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
