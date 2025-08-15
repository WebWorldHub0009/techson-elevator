// src/components/ContactHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/about/contact.jpg"; // Replace with your image path

const ContactHero = () => {
const scrollToQuote = () => {
  const quoteSection = document.getElementById("quote-section");
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: "smooth" });
  }
  };

  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-center px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold font-[poppins] leading-tight mb-4">
          Let’s Elevate Your Experience with <span className="text-red-800">Techson Elevator</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Your trusted partner in safe, efficient, and modern elevator solutions.  
          Connect with us today for top-notch service and unbeatable quality.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Call Now Button */}
          <a
            href="tel:+918299598884"
            className="px-6 py-3  text-black border2 bg-white hover:bg-transparent border-2 border-white hover:border-white font-semibold rounded-full shadow-lg transition duration-300"
          >
            📞 Call Now
          </a>

          {/* Get a Quote Button */}
          <button
            onClick={scrollToQuote}
            className="px-6 py-3 bg-transparent border-2 border-white font-semibold rounded-full hover:text-black cursor-pointer transition duration-300"
          >
            Get a Quote
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
