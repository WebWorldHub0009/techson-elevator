import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import bg from "../assets/images/about/hero.jpg";

const TechsonHero = () => {
  const handleScroll = () => {
    const section = document.getElementById("about-section"); // target section id
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[80vh] font-poppins">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 md:px-20 lg:px-32 text-white">
        {/* Typewriter Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-[poppins] mb-4"
        >
          <Typewriter
            words={["Elevating Innovation", "Driving Excellence", "Empowering Reliability"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6 text-xl"
        >
          Techson Elevator delivers state-of-the-art elevator and escalator solutions 
          with unmatched reliability and precision. Trusted for over 15 years, we 
          prioritize safety, innovation, and seamless experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleScroll}
            className="border-2 border-white text-white px-5 py-2 rounded-lg text-sm shadow transition hover:bg-white hover:text-gray-900"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TechsonHero;
