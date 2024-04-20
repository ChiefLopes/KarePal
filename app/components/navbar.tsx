"use client";

import Image from "next/image";
import React, { useState } from "react";
import Karepal from "@/app/Assets/images/KarepalLogo.png";
import { NAV_LINKS } from "../utils/constants";
import Link from "next/link";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex items-center py-2 mx-10 lg:mx-6">
      <Image
        src={Karepal}
        alt="logo"
        width={100}
        height={50}
        priority
        className="lg:ml-9 cursor-pointer"
      />
      <div className="hidden lg:flex space-x-8 pl-[14rem] lg:pt-2 ">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="pt-2">
            <p className="flex">{link.label}</p>
          </a>
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
        className="lg:hidden ml-5 font-bold text-xl cursor-pointer "
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {toggleMenu ? 1 : 2}
      </div>

      <div>
        {toggleMenu && (
          <ul className="bg-red-500 w-32 h-32 flex flex-col pt-14 lg:hidden">
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
