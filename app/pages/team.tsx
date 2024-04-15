import React from "react";
import { TEAM_GRID } from "../utils/constants";
import Image from "next/image";

const Team = () => {
  return (
    <div className="">
      <div className="container-lg space-y-12 h-[32rem]">
        {/* TEXT */}
        <div className="text-center space-y-2">
          <h1 className="font-bold uppercase text-[#2937B6] text-xl ">
            Our team
          </h1>
          <h2 className="playfair-font font-semibold text-2xl">
            Meet the Brilliant Minds:
          </h2>
          <p className="max-w-[32rem] mx-auto text-md ">
            Empower yourself with KarePal, your AI healthcare guide! Join
            millions on a journey to better health through interactive learning
            and personalized insights.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {TEAM_GRID.map((team) => (
            <div
              key={team.name}
              className="w-64 h-72 border border-2  rounded py-12 space-y-1 flex flex-col items-center "
            >
              <Image src={team.icon} alt="team" width={32} height={32} />
              <h3 className="font-bold text-[#07001A]">{team.name}</h3>
              <p className="text-[#2937B6]">{team.title}</p>
              <p className="max-w-48 text-[#646464]">{team.desc}</p>
              <Image src={team.logo} alt="logo" width={32} height={32} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
