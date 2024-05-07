import React from "react";
import { SERVICE_GRID } from "../utils/constants";
import Image from "next/image";
import { motion as m } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <m.div
      className=""
      ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="mx-4 lg:m-[15px] lg:ml-[4rem] space-y-4 lg:space-y-7 pt-6">
        <m.div
          className="text-center"
          data-aos="fade-up"
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="text-xl font-semibold text-[#2937B6]">Our Services</h1>
        </m.div>
        <m.div
          className="text-center"
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-sm lg:text-3xl font-semibold text-[#07001A] playfair-font">
            Embark on a Health Journey Guided by KarePal, <br /> Your AI Medical
            Companion
          </p>
        </m.div>
        <m.div
          className="grid grid-cols-2 md:grid-cols-4 md:gap-2 lg:grid-cols-4 gap-4 lg:gap-4"
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {SERVICE_GRID.map((service) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-40 h-48 px-2 lg:px-0 lg:w-64 lg:h-72 space-y-1 lg:space-y-4 rounded transition duration-300 ease-linear shadow-xl flex flex-col items-center justify-center hover:bg-[#2937B6] hover:shadow-2xl hover:text-white"
            >
              <Image
                src={service.icon || ""}
                alt="icon"
                width={35}
                height={35}
              />
              <h2 className="font-bold text-sm lg:text-lg">{service.title}</h2>
              <p className="lg:max-w-52 text-xs lg:text-[13px] lg:leading-6 lg:mx-6">
                {service.desc}
              </p>
            </m.div>
          ))}
        </m.div>
      </div>
    </m.div>
  );
};

export default Services;
