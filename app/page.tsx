import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about"
import Team from "./pages/team";

export default function Home() {
  return (
    <div className="bg-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
    </div>
  );
}
