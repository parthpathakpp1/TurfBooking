import React from "react";
import Navbar from "../Navbar";
import { Footballer1 } from "../../assets/images";
import { Link } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center w-full">
        <div className="flex justify-center items-center scale-75 md:scale-75 lg:scale-90 animate__animated animate__fadeIn left-to-right">
          <img
            src={Footballer1}
            alt="Footballer"
            className="flex justify-center items-center"
          />
        </div>
        <div className="flex flex-col m-16 animate__animated animate__fadeIn right-to-left">
          <h1 className="text-4xl font-bold text-white">
            Connecting the{" "}
            <span className="pink-text animation-span">turf lovers</span>
          </h1>
          <p className="text-sm text-white my-6">
            Turf zone is a sportsground and outdoor playground booking portal
            that provides easy booking facility for schools, clubs, and other
            sports organizations across Kenya. Enabling them to easily book a
            turf playground online - anytime, anywhere.
          </p>
          <Link
            to="/booking"
            className="text-center py-2 text-md font-semibold text-white pink-button rounded-md hover:bg-pink-600 hover:animate-pulse w-32"
          >
            Book Turf
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
