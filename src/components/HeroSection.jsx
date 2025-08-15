import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import img1 from "../assets/images/home/h1.jpg";
import img2 from "../assets/images/home/h2.avif";
import img3 from "../assets/images/home/h3.jpg";
import pdf from "../assets/doc/broucher.pdf"

const slides = [
  {
    title: "Elevating Your World",
    subtitle: "Premium Elevator Solutions for Every Space",
    tagline: "Where innovation meets sophistication in vertical mobility",
    image: img1,
  },
  {
    title: "Innovation Meets Excellence",
    subtitle: "Next-Level Elevator Design & Technology",
    tagline: "Engineering luxury for smooth, safe and stylish travel",
    image: img2,
  },
  {
    title: "Smooth, Safe, Stylish",
    subtitle: "Experience the Future of Vertical Transport",
    tagline: "Crafting the ride of tomorrow, today",
    image: img3,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden font-poppins">
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>
        </motion.div>
      ))}

      {/* Left Slide Indicators */}
      <div className="absolute left-4 md:left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 md:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-white ${
              index === current ? "bg-white" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          key={slides[current].title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"
        >
          {slides[current].title}
        </motion.h1>
        <motion.p
          key={slides[current].subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-3 text-base sm:text-lg md:text-sm lg:text-sm max-w-2xl font-light"
        >
          {slides[current].subtitle}
        </motion.p>

        <motion.p
          key={slides[current].tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-2 text-sm sm:text-base md:text-lg tracking-wider  text-gray-300 max-w-xl"
        >
          {slides[current].tagline}
        </motion.p>

        {/* Rotating Since 2010 Circle */}
        <a href="#about" className="mt-10 block">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 animate-spin-slow">
            <svg
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="white" fontSize="16" fontWeight="500">
                <textPath
                  xlinkHref="#circlePath"
                  startOffset="0%"
                  textLength="470"
                  spacing="auto"
                >
                  • SINCE 2010 • TECHSON ELEVATOR •
                </textPath>
              </text>
            </svg>
          </div>
        </a>

        {/* Scroll Indicator */}
      {/* Brochure Download Button */}
<div className="blink absolute bottom-6 flex flex-col items-center">
  <a
    href={pdf}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 text-white text-sm font-[poppins] rounded-full border border-white animate-blink"
  >
    Get Brochure
  </a>
</div>


      </div>

      {/* Right Side Social Links & Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute right-3 sm:right-5 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-3 sm:gap-4 text-white"
      >
        <div className="rotate-90 tracking-widest text-xs font-[poppins]  sm:text-sm md:text-base mb-7 font-semibold">
          Techson Elevator
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 mt-8">
          <a href="#"><FaFacebookF size={16} /></a>
          <a href="#"><FaLinkedinIn size={16} /></a>
          <a href="#"><FaTwitter size={16} /></a>
        </div>
      </motion.div>
    </section>
  );
}
