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
import { Loader } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200); // Change the delay time as needed (in milliseconds)

    // Cleanup function to clear the timer if the component unmounts before loading completes
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoading ? "bg-[#001727] w-screen h-screen flex items-center justify-center" : ""}>
      {isLoading ? (
        <Loader className="w-20 h-20 text-slate-400 flex mx-auto animate-spin" />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}
