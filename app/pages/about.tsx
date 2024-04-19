import Image from "next/image";
import React from "react";
import Doc from "@/app/Assets/images/Doc.png";
import PopUp from "@/app/Assets/images/PopUpGroup.png";

const About = () => {
  return (
    <div className="bg-[#001727] mt-14 h-[57rem] lg:h-[36rem]">
      <div className="mx-4 lg:m-[15px] lg:ml-[4rem] space-y-2 lg:space-y-7 flex flex-col lg:flex-row text-white pt-[5.3rem] space-x-12 text-xl">
        {/* IMAGE AREA */}
        <div className="relative">
          <Image src={Doc} alt="doc" width={600} height={400} />
          <div className="absolute bottom-44 left-[17rem]">
            <Image src={PopUp} alt="doc" width={300} height={400} />
          </div>
        </div>

        {/* TEXT AREA */}
        <div className="space-y-8">
          <div className="space-y-12">
            <p className="font-bold font-md">About Us</p>
            <p
              className="max-w-[27rem] text-2xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              KarePal: Your AI medical companion, empowering informed health
              decisions.
            </p>
          </div>
          <div className="max-w-[23rem] space-y-8 text-base">
            <p>
              KarePal is your AI-powered health companion. Confused by medical
              jargon? KarePal translates it into clear, easy-to-understand
              information. Through interactive learning and personalized
              recommendations, KarePal empowers you to take charge of your
              health journey.
            </p>
            <p>
              KarePal is your partner in health, empowering you to take control
              of your well-being.
            </p>
          </div>

          {/* BUTTON */}
          <div>
            <button className="bg-white text-[#0E0A14] text-sm uppercase p-3 font-semibold rounded hover:bg-[#001727] hover:text-white hover:border transition duration-300 ease-in-out">
              discover more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
