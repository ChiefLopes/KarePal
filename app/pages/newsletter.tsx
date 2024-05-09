import React from "react";
import newsletterBg from "@/app/Assets/images/newsletterBg.png";

const Newsletter = () => {
  return (
    <div className="bg-[#001727] h-[22rem]">
      <div className="flex flex-col items-center justify-center pt-14 lg:pt-18 text-white lg:space-y-14 mx-5 lg:m-[15px] lg:ml-[4rem] space-y-6">
        {/* TEXT */}
        <div className="text-center space-y-2">
          <h1 className="font-bold">Newsletter</h1>
          <p className="uppercase text-xl lg:text-4xl playfair-font font-semibold">
            Join Us
          </p>
          <p className="max-w-[27rem] text-sm lg:text-base">
            KarePal: Your AI medical companion, empowering informed health
            decisions.
          </p>
        </div>

        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Your Email"
            className="p-2 rounded-l-2xl w-[14rem] h-12 lg:h-[3.5rem] lg:w-[30rem] text-gray-700 text-lg outline-0 "
          />
          <button className="bg-[#2937B6] p-3 rounded-r-2xl h-12 lg:h-[3.5rem] lg:w-[9rem] text-lg hover:bg-blue-900">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
