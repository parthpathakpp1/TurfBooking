import React, { useState, useEffect } from "react";
import Partners from "../components/FeaturedPlayground/Partners";
import Playgrounds from "../components/FeaturedPlayground/Playgrounds";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyTurf from "../components/WhyTurf/WhyTurf";
import { FaArrowUp } from 'react-icons/fa';


const LandingPage = () => {

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
        // Automatically hide the button after 3 seconds
      }
      else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <section className="bg-[url('https://user-images.githubusercontent.com/63696529/196103011-aea90416-5837-482b-bb5b-ae1dd3860186.png')] md:bg-[url('https://user-images.githubusercontent.com/63696529/196103716-50d76861-d72f-4db8-88ba-a582709c69e8.png')] lg:bg-[url('https://user-images.githubusercontent.com/63696529/196103519-341471f4-79ef-447d-a457-22dbfcad8401.png')] bg-no-repeat bg-cover">

        {/* Your code goes here - Hero Section */}
        <HeroSection />
      </section>

      <section className="">
        <div >
          <Partners />
          <Playgrounds/>
        </div>
      </section>

      <section className="">
        <div>
        <WhyTurf/>
        </div>
        
      </section>

      <section className="">
        {/* Your code goes here - Testimonials */}
        <Testimonials/>
      </section>
      <section className="">
        {/* Your Code Goes here - Footer*/}
        <Footer />
      </section>
      {showBackToTop && (
  <button
    onClick={handleBackToTop}
    className="fixed bottom-10 right-10 bg-primary-color text-white p-2 rounded-full shadow-md hover:bg-secondary-color cursor-pointer flex items-center transition-opacity duration-300 hover:opacity-100"
    style={{ opacity: showBackToTop ? 1 : 0 }} // Use inline style to control opacity
  >
    <FaArrowUp className="mr-2" /> {/* Arrow icon */}
    Back to Top
  </button>
)}

    </div>
  );
};

export default LandingPage;
