"use client";

import React from "react";
import { TEAM_GRID } from "../utils/constants";
import Image from "next/image";
import {motion as m} from "framer-motion"
import { useInView } from "react-intersection-observer";

const Team = () => {
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
      <m.div
        className="mx-4 lg:m-[15px] lg:ml-[4rem] space-y-4 lg:space-y-7 pt-6 h-[48rem] md:h-[28rem] lg:h-[32rem]"
        ref={ref}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* TEXT */}
        <m.div
          className="text-center space-y-2"
          ref={ref}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h1 className="font-bold uppercase text-[#2937B6] text-base lg:text-xl">
            Our team
          </h1>
          <h2 className="playfair-font font-semibold text-2xl">
            Meet the Brilliant Minds:
          </h2>
          <p className="max-w-[37rem] mx-auto text-sm lg:text-base">
            Empower yourself with KarePal, your AI healthcare guide! Join
            millions on a journey to better health through interactive learning
            and personalized insights.
          </p>
        </m.div>

        {/* TEAM GRID */}
        <m.div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3" ref={ref}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}>
          {TEAM_GRID.map((team: any) => (
            <div
              key={team.name}
              className="w-40 h-[16.5rem] px-4 lg:px-0 lg:w-64 lg:h-[19rem] space-y-1 lg:space-y-2  border-2  rounded p-3 py-3 lg:py-4 flex flex-col items-center "
            >
              {team.icon ? (
                <Image src={team.icon} alt="team" width={62} height={62} />
              ) : null}

              <h3 className="font-bold text-[#07001A]">{team.name}</h3>
              <p className="text-[#2937B6] text-sm md:text-base">
                {team.title}
              </p>
              <p className="text-xs lg:text-base max-w-[14rem] text-[#646464] lg:mx-5">
                {team.desc}
              </p>
              <Image
                src={team.logo}
                alt="logo"
                width={26}
                height={26}
                className="pt-1 lg:pt-2"
              />
            </div>
          ))}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Team;
