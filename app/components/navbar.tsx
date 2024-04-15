import Image from "next/image";
import React from "react";
import Karepal from "@/app/Assets/images/KarepalLogo.png";
import { NAV_LINKS } from "../utils/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center py-4 mx-10 lg:mx-14">
      <Image src={Karepal} alt="logo" width={100} height={50} priority />
      <div className="hidden lg:flex space-x-12 ml-[4rem]">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="">
            <p className="flex">{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="ml-8 flex space-x-10">
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
