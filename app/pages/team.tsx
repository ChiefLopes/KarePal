import React from "react";
import { TEAM_GRID } from "../utils/constants";
import Image from "next/image";

const Team = () => {
  return (
    <div className="">
      <div className="mx-4 lg:m-[15px] lg:ml-[4rem] space-y-4 lg:space-y-7 pt-6 h-[44rem] md:h-[28rem] lg:h-[32rem]">
        {/* TEXT */}
        <div className="text-center space-y-2">
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
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3">
          {TEAM_GRID.map((team) => (
            <div
              key={team.name}
              className="w-44 h-[15rem] px-4 lg:px-0 lg:w-64 lg:h-72 space-y-1 lg:space-y-2 border border-2  rounded p-3 py-3 lg:py-4 flex flex-col items-center "
            >
              <Image src={team.icon || ""} alt="team" width={62} height={62} />
              <h3 className="font-bold text-[#07001A]">{team.name}</h3>
              <p className="text-[#2937B6] text-sm md:text-base">{team.title}</p>
              <p className="text-xs lg:text-base max-w-48 text-[#646464]">
                {team.desc}
              </p>
              <Image src={team.logo} alt="logo" width={26} height={26} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
