"use client";

import Image from "next/image";
import React, { useState } from "react";
import Karepal from "@/app/Assets/images/KarepalLogo.png";
import { NAV_LINKS } from "../utils/constants";
// import Link from "next/link";
import { Link as Scrollink} from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-[4rem] flex items-center py-3 mx-10 lg:mx-6">
      <Image
        src={Karepal}
        alt="logo"
        width={100}
        height={50}
        priority
        className="lg:ml-9 cursor-pointer"
      />

      <div className="hidden text-sm lg:flex space-x-8 pl-[14rem] lg:pt-4 ">
        {NAV_LINKS.map((link: any) => (
          <Scrollink
            to={link.href}
            smooth={true}
            duration={500}
            key={link.href}
            href={link.href}
            className="pt-2"
          >
            <a className="flex">{link.label}</a>
          </Scrollink>
        ))}
        <div className="ml-10 flex space-x-5 pb-1">
          <button className="border w-[6rem] h-9 rounded-lg border-[#2937B6] hover:bg-[#2937B6] hover:text-white transition duration-200">
            Sign In
          </button>
          <button className="border w-[6rem] h-9 rounded-lg bg-[#2937B6] text-white hover:bg-transparent hover:text-black hover:border-[#2937b6] transition duration-200">
            Sign Up
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ml-5 font-bold text-xl cursor-pointer ${
          toggleMenu
            ? "transition-opacity ease-out duration-300 opacity-100"
            : "transition-opacity ease-in duration-300 opacity-100 hover:opacity-50"
        }`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {toggleMenu ? 1 : 2}
      </div>

      
      {/* FOR MOBILE */}
      <div className="relative">
        {toggleMenu && (
          <div
            className={`bg-white text-[#001727] w-[13rem] h-[17rem] mt-[8rem] px-4 z-40 flex flex-col lg:hidden relative right-12 top-20 rounded-s-lg ${
              toggleMenu ? "" : ""
            }`}
          >
            <div
              className="text-end me-2 text-2xl cursor-pointer"
              onClick={() => setToggleMenu(false)}
            >
              X
            </div>
            <div className="">
              {NAV_LINKS.map((nav, index) => (
                <Scrollink
                  to={nav.href}
                  smooth={true}
                  duration={500}
                  href={nav.href}
                  key={index}
                  className="space-y-4"
                >
                  <p className="font-bold py-1 hover:text-red-400">
                    {nav.label}
                  </p>
                </Scrollink>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
