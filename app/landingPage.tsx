import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Team from "./pages/team";
import Newsletter from "./pages/newsletter";
import Testimonials from "./pages/testmonials";
import Footer from "./pages/footer";

const LandingPage = () => {
  return (
    <div className="bg-slate-100">
      <Navbar />

      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
      <div id="/about">
        <About />
      </div>
      <div id="/team">
        <Team />
      </div>
      <div id="/newsletter">
        <Newsletter />
      </div>
      <div >
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
