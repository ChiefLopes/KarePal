import Image from "next/image";
import React from "react";
import HeroImage from "@/app/Assets/images/HomeImage.png";
import { NAV_LINKS } from "../utils/constants";

const Hero = () => {
  

  return (
    <div className="bg-[#001727]">
      {/* TEXT AREA*/}
      <div className=" flex flex-col lg:flex-row lg:justify-between pt-14 lg:pt-24 mx-10 lg:mx-14">
        <div className="text-white space-y-8 pt-2">
          <h1 className="text-2xl lg:text-4xl font-semibold playfair-font">
            Transforming Care giving <br /> through data-driven AI tools
          </h1>
          <div>
            <p className="font-semibold">
              Karepal&apos;s AI-powered care giving services provides <br />{" "}
              numerous services to both care givers <br /> and care recipients
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

        <div className="mr-44">
          <Image src={HeroImage} alt="Hero" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
