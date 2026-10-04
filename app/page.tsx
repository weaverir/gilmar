import { Navbar } from "@/components/layouts/Navbar/Navbar";
import { Footer } from "@/components/layouts/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About/About";
import { Article } from "@/components/sections/Articles/Article";
import { Slider } from "@/components/sections/slider";
import { Rooms } from "@/components/sections/Features/features";
import { Step } from "@/components/sections/VideoSection/step";
import Comments from "@/components/sections/Comments";
import Packages from "@/components/sections/Packages";
import Magazine from "@/components/sections/magazine";
import Faq from "@/components/sections/FAQ";
export default function Home() {
  return (
    <>
      <div className="hero-area">
        <Navbar />
        <Hero />
      </div>

      <main>
        {/* sections */}
        <About/>
        <Article/>
        <Slider/>
        <Rooms/>
        <Step/>
        <Comments/>
        <Packages/>
        <Magazine/>



      </main>

      <div className="footer-area">
        <Faq/>
        <Footer />
      </div>
    </>
  );
}