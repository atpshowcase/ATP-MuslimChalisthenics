import { Parallax } from "react-parallax";
import { useEffect } from "react"; // Import useEffect
import OurTeam from "../components/Home/Discover";
import Registration from "../components/Home/Registration";
import Front from "../components/Home/Front";
import CommunityHighlights from "../components/Home/Funds";
import HowItWorks from "../components/Home/HowItWorks";
import AboutUs from "../components/Home/AboutUs";
import News from "../components/Home/News";
import Quiz from "../components/Home/Quiz";
import Stats from "../components/Home/Stats";
import Stories from "../components/Home/Stories";
import Trusted from "../components/Home/Trusted";

// If 'Link' is not being used, remove the import
// import { Link } from "react-router-dom"; 

import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const parallaxImage = "https://wallpapers.com/images/featured/dark-nature-background-sf5wu61v1au0kwfk.jpg";

export default function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 2000, // Set animation duration
      easing: 'ease-in-out', // Set easing function
      once: true, // Only trigger the animation once
    });
  }, []);

  return (
    <main>
      <Parallax
        bgImage={parallaxImage}
        bgImageAlt="Parallax Background"
        strength={800}
      >
        <div data-aos="zoom-in-up">
          <Front />
        </div>
        <div data-aos="zoom-in-up">
          <AboutUs />
        </div>
      </Parallax>
      
      <div data-aos="zoom-in-up">
        <CommunityHighlights />
      </div>
      
      <div data-aos="zoom-in-up">
        <Stats />
      </div>

      <div data-aos="zoom-in-up">
        <OurTeam />
      </div>

      <div data-aos="zoom-in-up">
        <HowItWorks />
      </div>

      <div data-aos="zoom-in-up">
        <Registration />
      </div>
      
      {/* Other sections */}
      {/* <div data-aos="zoom-in-up"><News /></div> */}
      {/* <div data-aos="zoom-in-up"><Stories /></div> */}
      {/* <div data-aos="zoom-in-up"><Trusted /></div> */}
    </main>
  );
}
