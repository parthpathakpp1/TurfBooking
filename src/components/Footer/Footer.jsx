import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple text-white py-6">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        {/* Contact Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold pink-text mb-2">Talk to Us</h1>
          <p className="text-md text-white py-2">+254 234 5678</p>
          <p className="text-md text-white py-2">
            <a href="mailto:someone@gmail.com" className="text-white hover:underline">
              Send Email
            </a>
          </p>
          <p className="text-md text-white">1234 TurfZone Street, Nairobi 00100</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold pink-text mb-2">Quick Links</h1>
          <a href="#" className="text-md text-white py-1 block hover:underline">Home</a>
          <a href="#" className="text-md text-white py-1 block hover:underline">Turf Playgrounds</a>
          <a href="#" className="text-md text-white py-1 block hover:underline">About Us</a>
          <a href="#" className="text-md text-white py-1 block hover:underline">Testimonials</a>
        </div>

        {/* Social Media Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold pink-text mb-2">Social Media</h1>
          <a href="#" className="text-lg text-white py-1 block hover:underline">Facebook</a>
          <a href="#" className="text-lg text-white py-1 block hover:underline">Instagram</a>
          <a href="#" className="text-lg text-white py-1 block hover:underline">Twitter</a>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-lg text-white text-center mt-6">
        <span className="pink-text">© 2023 TurfZone</span> All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
