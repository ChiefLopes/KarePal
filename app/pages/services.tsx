import React from "react";
import { SERVICE_GRID } from "../utils/constants";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container-lg space-y-7 pt-6 ">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-[#2937B6]">Our Services</h1>
      </div>
      <div className="text-center">
        <p className="text-xl lg:text-3xl font-semibold text-[#07001A] playfair-font">
          Embark on a Health Journey Guided by KarePal, <br /> Your AI Medical
          Companion
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        {SERVICE_GRID.map((service) => (
          <div
            key={service.title}
            className="w-64 h-72 space-y-4 rounded transition duration-300 ease-linear shadow-xl flex flex-col items-center justify-center hover:bg-[#2937B6] hover:shadow-2xl"
          >
            <Image src={service.icon} alt="icon" width={35} height={35} />
            <h2 className="font-bold">{service.title}</h2>
            <p className="max-w-52">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
