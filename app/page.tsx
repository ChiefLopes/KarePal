"use client";

import LandingPage from "./landingPage";
import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Team from "./pages/team";
import Newsletter from "./pages/newsletter";
import Testimonials from "./pages/testmonials";
import Footer from "./pages/footer";
import { LoaderPinwheel } from "lucide-react";
import { useState, useEffect } from "react";
import { LuLoader } from "react-icons/lu";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={
        isLoading
          ? "bg-[#001727] w-screen h-screen flex items-center justify-center"
          : ""
      }
    >
      {isLoading ? (
        <div>
          <LoaderPinwheel className="w-20 h-20 text-slate-400 flex mx-auto animate-spin" />
          <span className="text-white font-bold text-xl"> Welcome to Karepal... </span>
        </div>
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
