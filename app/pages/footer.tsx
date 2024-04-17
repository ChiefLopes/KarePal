import React from "react";
import { NAV_LINKS } from "../utils/constants";
import Image from "next/image";

const Footer = () => {
  const filtered = NAV_LINKS.filter((item) => item.href !== "/review");
  console.log(filtered);
  console.log("Hello");
  return (
    <div className="bg-[#001727] lg:h-[20rem]  text-white ">
      <div className=" mx-4 lg:m-[15px] lg:ml-[4rem] space-y-4 lg:space-y-7 pt-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
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
                <div key={item.href}>
                  <a href={item.href} className="text-sm lg:text-base">
                    {item.label}
                  </a>
                </div>
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

        <div>
          <p>© 2024G Karepal. All rights reserved.</p>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
