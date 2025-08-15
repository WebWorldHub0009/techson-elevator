// src/components/OurStory.jsx
import React from "react";
import storyImage1 from "../assets/images/home/h1.jpg"; // replace with Techson image
import storyImage2 from "../assets/images/home/h2.avif"; // replace with Techson image

const OurStory = () => {
  return (
   <section id="about-section" className="py-14 bg-[#F8F3ED] text-[#3C2C2A]">
  {/* Premium Centered Tagline */}
  <div className="text-center mb-12">
    <p className="text-2xl md:text-3xl lg:text-4xl font-[Poppins] font-extrabold text-[#7B2C2C] tracking-wide leading-snug">
      Pioneering Vertical Mobility with Innovation, Safety, and Elegance
    </p>
    <div className="w-32 h-1 bg-gradient-to-r from-[#7B2C2C] via-[#C04B4B] to-[#7B2C2C] rounded-full mx-auto mt-4 animate-pulse"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
    
    {/* Left text content */}
    <div className="flex flex-col justify-center space-y-6">
      <p className="text-sm tracking-widest text-[#7B2C2C]">WHY WE DO WHAT WE DO</p>
      <h2 className="text-4xl md:text-5xl font-serif font-bold leading-snug">
        The Heart Behind <span className="text-[#7B2C2C]">Techson Elevator</span>
      </h2>
      <p className="text-base md:text-lg leading-relaxed">
        Techson Elevator has been elevating spaces with unmatched precision and innovation for over 15 years. 
        Our journey began with a vision to redefine vertical transportation, combining modern technology with timeless reliability. 
        Every elevator we design is a blend of cutting-edge engineering, sleek aesthetics, and uncompromising safety standards.
      </p>
      <p className="text-base md:text-lg leading-relaxed">
        From luxury high-rises and commercial complexes to bespoke residential projects, our work reflects our unwavering commitment 
        to excellence. We partner closely with architects, developers, and clients to ensure every installation exceeds expectations.
      </p>
      <p className="text-base md:text-lg leading-relaxed">
        Innovation, precision, and customer trust are the pillars of our legacy. With Techson Elevator, every ride is not just a journey 
        between floors—it’s an experience of safety, comfort, and style. Our passion drives us to constantly improve, adapt, and lead 
        the elevator industry in India and beyond.
      </p>
    </div>

    {/* Right images */}
    <div className="flex flex-col gap-4">
      <div className="w-full h-80 border border-[#E1D7CD] shadow-lg overflow-hidden rounded-lg">
        <img src={storyImage1} alt="Techson Elevator Project 1" className="w-full h-full object-cover" />
        <p className="text-xs text-[#7B2C2C] mt-1 px-2">Fig. 01</p>
      </div>
      <div className="w-full h-80 border border-[#E1D7CD] shadow-lg overflow-hidden rounded-lg">
        <img src={storyImage2} alt="Techson Elevator Project 2" className="w-full h-full object-cover" />
        <p className="text-xs text-[#7B2C2C] mt-1 px-2">Fig. 02</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default OurStory;
