import React from "react";
import { NAV_LINKS, SOCIAL_ICONS } from "../utils/constants";
import Image from "next/image";
import { Link as Scrollink } from "react-scroll";

const Footer = () => {
  const filtered = NAV_LINKS.filter((item) => item.href !== "/review");
  console.log(filtered);
  console.log("Hello");
  return (
    <div className="bg-[#001727] h-[30rem] lg:h-[20rem] text-white ">
      <div className=" mx-4 lg:m-[15px] lg:ml-[4rem] space-y-4 lg:space-y-12 pt-6">
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-10 lg:space-x-[4.2rem]">
          {/* LOGO */}
          <div className="space-y-4">
            <h1 className="font-bold text-md lg:text-lg">KarePal</h1>
            <p>Transforming care giving through data-driven AI tools</p>
          </div>

          {/* PRODUCTS */}
          <div className="space-y-2">
            <p className="text-[#2937B6] text-sm">Products</p>
            <div className="space-y-2">
              {filtered.map((item) => (
                <Scrollink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  key={item.href}
                >
                  <a href={item.href} className="text-sm lg:text-base">
                    {item.label}
                  </a>
                </Scrollink>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div className="space-y-2">
            <h1 className="text-[#2937B6] text-sm">Support</h1>
            <div>
              <ul className="space-y-2">
                <li>Account</li>
                <li>Feedback</li>
                <li>Contact Us</li>
                <li>Accessibility</li>
              </ul>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="space-y-2">
            <h1 className="text-[#2937B6] text-sm">Social</h1>
            <div>
              <ul className="space-y-2">
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Threads</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-20">
            <Image src="/App_Store.png" alt="" width={100} height={50} />
            <Image src="/Google.png" alt="" width={100} height={50} />
          </div>
        </div>

        <div className="flex justify-between ">
          <p className="text-xs lg:text-base">
            © 2024G Karepal. All rights reserved.
          </p>
          <div className="flex justify-center items-center mr-14 space-x-3">
            {SOCIAL_ICONS.map((icon) => (
              <div key={icon.label} className="">
                <Image
                  src={icon.icon}
                  alt={icon.label}
                  width={25}
                  height={25}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
