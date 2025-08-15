// src/components/Testimonials.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { FaUserCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/about/test2.jpg"; // replace with your desired background image

const testimonials = [
  {
    name: "Rahul Mehra",
    text: "Techson Elevator installed elevators in our new office building seamlessly. Highly professional and efficient team.",
  },
  {
    name: "Neha Agarwal",
    text: "The maintenance service is top-notch. Our building elevators have never been smoother or more reliable.",
  },
  {
    name: "Vikram Singh",
    text: "From installation to final testing, Techson ensured every step was precise and safe. Truly trusted professionals.",
  },
  {
    name: "Priya Sharma",
    text: "Our luxury high-rise now has ultra-modern elevators, thanks to Techson. Excellent design and flawless execution.",
  },
  {
    name: "Ankit Verma",
    text: "Prompt service, transparent pricing, and expert advice throughout the elevator project. Highly recommended.",
  },
  {
    name: "Shreya Das",
    text: "Techson’s escalator solutions transformed our shopping mall experience. Smooth rides, efficient operations.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    cssEase: "ease-in-out",
    arrows: false,
    pauseOnHover: false,
    beforeChange: (current, next) => setActiveIndex(next + 1),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, vertical: false, verticalSwiping: false },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, vertical: false, verticalSwiping: false },
      },
    ],
  };

  return (
    <section
      className="relative py-26 bg-fixed bg-center bg-cover text-gray-900"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay to darken the background for better readability */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left z-10"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            What Our <span className="text-[#F87171]">Clients</span> Say
          </h2>
          <p className="mb-6 leading-relaxed max-w-md mx-auto lg:mx-0 text-gray-200">
            Techson Elevator delivers safe, reliable, and innovative vertical transportation solutions. 
            From luxury high-rises to commercial complexes, our clients trust us to handle every project 
            with precision and professionalism.
          </p>
          <Link to="/contact">
            <button
              className="cursor-pointer px-6 py-3 rounded-full text-white font-medium bg-red-800 hover:bg-red-700 shadow-lg hover:shadow-red-600 transition-all duration-500"
            >
              Contact Us
            </button>
          </Link>
        </motion.div>

        {/* Right content - Slider */}
        <div className="z-10">
          <Slider {...settings} className="space-y-12">
            {testimonials.map((item, i) => {
              const isActive = i === activeIndex % testimonials.length;
              return (
                <div key={i} className="px-2">
                  <div
                    className={`flex items-center gap-4 p-4 rounded-xl shadow-xl transition-all duration-300 relative ${
                      isActive
                        ? "bg-red-100 border-l-4 border-red-800 -ml-4 mr-6"
                        : "bg-red-50"
                    }`}
                    style={{ minHeight: "90px" }}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 h-full w-1 bg-red-800 rounded-l-xl"></div>
                    )}
                    <div className="w-12 h-12 rounded-full bg-red-800 text-white flex items-center justify-center text-3xl">
                      <FaUserCircle />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#7B2C2C]">{item.name}</h4>
                      <p className="text-sm text-gray-700">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
