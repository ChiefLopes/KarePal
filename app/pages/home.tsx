import Image from "next/image";
import React from "react";
import HeroImage from "@/app/Assets/images/HomeImage.png";
import { NAV_LINKS } from "../utils/constants";
import { motion as m } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#001727] lg:h-[38.6rem]">
      {/* TEXT AREA*/}
      <m.div
        className="flex flex-col md:flex-row lg:flex-row lg:justify-between pt-[5.6rem] lg:pt-[12rem] mx-4 lg:mx-14 lg:space-x-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <div className="text-white space-y-6 lg:space-y-12 pt-2">
          <m.h1
            className="text-2xl lg:text-4xl font-semibold playfair-font"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Transforming Care giving <br /> through data-driven AI tools
          </m.h1>
          <div>
            <m.p
              className="font-semibold lg:max-w-[24rem]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Karepal&apos;s AI-powered care-giving services provides numerous
              services to both care-givers and care recipients
            </m.p>
          </div>
          <m.div
            className="flex space-x-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
           
          >
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
          </m.div>
        </div>

        {/* IMAGE AREA */}
        <m.div
          className="pt-5 lg:pt-0 mr-14 lg:mr-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Image
            src={HeroImage}
            alt="Hero"
            width={700}
            height={400}
            // layout="responsive"
          />
        </m.div>
      </m.div>
    </div>
  );
};

export default Hero;
