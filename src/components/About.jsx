import React from "react";
import { FaMapMarkerAlt, FaRulerCombined, FaHome, FaBath, FaServicestack } from "react-icons/fa";
import aboutImg from "../assets/images/home/about.avif";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="relative bg-[#f5ede3] py-16 px-6 md:px-16 font-sans overflow-hidden">
      {/* Watermark */}
      <h1
        className="absolute inset-0 flex top-20 justify-center text-[7rem] md:text-[11rem] font-extrabold tracking-widest text-black select-none pointer-events-none"
        style={{ opacity: 0.05, whiteSpace: "nowrap", zIndex: 0 }}
      >
        TECHSON
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        {/* Center Premium Heading */}
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-red-800">
            Redefining the Way You Rise
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Crafting world-class elevators that blend innovation, luxury, and unmatched safety — taking you to new heights since 2010.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-red-800 font-[popins] text-3xl font-semibold">Who We Are</h3>
            <p className="text-gray-800 leading-relaxed">
              We at Techson Elevator specialize in premium elevator installations that
              combine modern technology, safety, and design excellence.
              Our solutions cater to residential, commercial, and industrial
              spaces with a focus on long-lasting performance.
              Every project is handled by a skilled team ensuring smooth
              operation and minimal downtime.
              We use only certified, high-quality components for unmatched
              reliability and safety standards.
              From consultation to installation and after-sales service,
              we are committed to delivering complete customer satisfaction.
            </p>
            <Link to={'/about'}>
            <button className="bg-red-800 cursor-pointer hover:bg-red-900 text-white px-6 py-2 rounded-md transition">
              Learn More
            </button>
            </Link>
          </div>

          {/* Middle Column - Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="Techson Elevator"
              className="rounded-lg shadow-lg object-cover w-full md:w-[90%]"
            />
          </div>

          {/* Right Column - Info List */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-red-800 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600">Jankipuram, Lucknow, Uttar Pradesh</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaRulerCombined className="text-red-800 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Projects Completed</p>
                <p className="text-gray-600">250+ Installations</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaHome className="text-red-800 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Client Satisfaction</p>
                <p className="text-gray-600">100% Happy Clients</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaServicestack className="text-red-800 text-lg mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Service Area</p>
                <p className="text-gray-600">Pan India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Badge */}
    <div className="mt-12 px-4 sm:px-6 lg:px-8 relative z-10">
  <div className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 py-6 sm:py-8 px-4 sm:px-6 text-center rounded-lg shadow-lg max-w-5xl mx-auto">
    <p className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide leading-snug">
      ★ Trusted by <span className="font-bold">Hundreds</span> of Clients Across India ★
    </p>
    <p className="text-white/80 text-xs sm:text-sm md:text-base mt-2">
      Delivering excellence in elevator solutions for over <span className="font-bold">15 years</span>
    </p>
  </div>
</div>

    </section>
  );
}
