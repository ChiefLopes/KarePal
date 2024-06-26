"use client";

import Image from "next/image";
import React, { useState } from "react";
import Karepal from "@/app/Assets/images/KarepalLogo.png";
import { NAV_LINKS } from "../utils/constants";
import { IoMenu } from "react-icons/io5";
import { RiArrowUpDoubleLine } from "react-icons/ri";
// import Link from "next/link";
import { Link as Scrollink } from "react-scroll";
import Buttons from "./buttons";
import { motion as m } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="h-[3rem] mt-4 flex items-center justify-between pb-3 mx-4 xl:mx-6 rounded-2xl fixed bg-slate-50 z-50 w-[20.7rem] lg:w-[82rem] lg:ml-5">
      <Image
        src={Karepal}
        alt="logo"
        width={100}
        height={50}
        priority
        className="lg:ml-[2.3rem] ml-6 cursor-pointer pt-1 w-20 md:w-28"
      />

      <div className="hidden text-sm lg:flex space-x-8 pl-[10rem] lg:pt-4 ">
        {NAV_LINKS.map((link: any) => (
          <Scrollink
            to={link.href}
            id={link.id}
            smooth={true}
            duration={900}
            key={link.href}
            // trying to style the nav to match the current path
            className={`pt-2 cursor-pointer ${
              link.path === pathname && "text-red-400 "
            }`}
          >
            <a className="flex hover:font-bold">{link.label}</a>
          </Scrollink>
        ))}

        <Buttons />
      </div>

      <div
        className="lg:hidden ml-10 font-bold text-xl cursor-pointer"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {toggleMenu ? (
          <RiArrowUpDoubleLine className="mt-3 ml-32" size={30} />
        ) : (
          <IoMenu className="mt-3 ml-24" size={30} />
        )}
      </div>

      {/* FOR MOBILE */}
      <div className="relative space-y-8 ">
        {toggleMenu && (
          <m.div
            className="bg-slate-50 text-[#001727] w-[16rem] h-[20rem] pt-4 mt-[13rem] px-4 z-40 flex flex-col lg:hidden relative right-[14rem] top-20 rounded-s-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-4">
              {NAV_LINKS.map((nav, index) => (
                <Scrollink
                  to={nav.href}
                  smooth={true}
                  duration={500}
                  key={index}
                  className="space-y-8"
                  onClick={() => setToggleMenu(false)}
                >
                  <p className="font-bold py-1 hover:text-red-400">
                    {nav.label}
                  </p>
                </Scrollink>
              ))}

              <Buttons />
            </div>
          </m.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
