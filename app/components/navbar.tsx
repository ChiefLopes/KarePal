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
      <Image src={Karepal} alt="logo" width={100} height={50} priority />
      <div className="hidden lg:flex space-x-8 ml-[19.5rem]">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="">
            <p className="flex">{link.label}</p>
          </a>
        ))}
        <div className="ml-8 flex space-x-8">
          <button className="border w-[5rem]  rounded">Sign In</button>
          <button>Sign Up</button>
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
