import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Services from "./pages/services";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}
