import React from "react";
import { SERVICE_GRID } from "../utils/constants";
import Image from "next/image";

const Services = () => {
  return (
    <div className="container-lg">
      <div className="text-center">
        <h1 className="">Our Services</h1>
        <p
          className="text-xl lg:text-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Embark on a Health Journey Guided by KarePal, <br /> Your AI Medical
          Companion
        </p>
      </div>
          <div>
              {SERVICE_GRID.map((service) => (
                  <div key={service.title}>
                      <Image src={service.icon} alt="icon" width={24} height={24} />
                  </div>
              ))}
      </div>
    </div>
  );
};

export default Services;
