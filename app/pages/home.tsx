import Image from "next/image";
import React from "react";
import HeroImage from "@/app/Assets/images/HomeImage.png";
import { NAV_LINKS } from "../utils/constants";

const Hero = () => {
  return (
    <div className="bg-[#001727] lg:h-[38.6rem]">
      {/* TEXT AREA*/}
      <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between pt-[5.6rem] lg:pt-[12rem] mx-4 lg:mx-14 lg:space-x-6">
        <div className="text-white space-y-6 lg:space-y-12 pt-2">
          <h1 className="text-2xl lg:text-4xl font-semibold playfair-font">
            Transforming Care giving <br /> through data-driven AI tools
          </h1>
          <div>
            <p className="font-semibold lg:max-w-[24rem]">
              Karepal&apos;s AI-powered care-giving services provides numerous
              services to both care-givers and care recipients
            </p>
          </div>
          <div className="flex space-x-10">
            <div className="">
              <span className="text-[#FFA41C] font-semibold text-xl">5k+</span>
              <p>
                Happy <br /> customers
              </p>
            </div>
            <div>
              <span className="text-[#FB0A0A] font-semibold text-xl">
                100k{" "}
              </span>
              <p>
                Monthly <br /> Visitors
              </p>
            </div>
            <div>
              <span className="font-semibold text-xl">10</span>
              <p>
                Countries <br /> Worldwide
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE AREA */}
        <div className="pt-5 lg:pt-0 mr-14 lg:mr-40">
          <Image
            src={HeroImage}
            alt="Hero"
            width={700}
            height={400}
            // layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
