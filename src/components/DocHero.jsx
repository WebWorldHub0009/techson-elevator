import React from 'react'

import bg from "../assets/images/about/docs.jpg"
import { Link } from 'react-router-dom'
const DocHero = () => {
  return (
    <section className="relative h-[75vh] flex items-center justify-center text-center text-white overflow-hidden font-[poppins]">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: `url(${bg})`,
    }}
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

  {/* SVG Pattern */}
  <div className="absolute inset-0 opacity-10 text-red-500">
    <svg
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6 animate-fadeInUp">
    <span className="inline-block px-4 py-1 bg-white/10 border border-white/20 text-yellow-300 text-sm tracking-widest uppercase rounded-full mb-4 shadow-lg backdrop-blur-sm">
      Premium Elevator Solutions
    </span>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
      Techson Elevator
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
      Setting the Standard in Vertical Transportation Excellence.
      Precision engineering, unmatched safety, and timeless design.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      <Link
        to="//services/hydraulic-elevator"
        className="px-8 py-3 bg-red-800 hover:bg-red-900 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105"
      >
        Explore Services
      </Link>
      <Link
        to="/contact"
        className="px-8 py-3 bg-white text-red-800 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
      >
        Get a Quote
      </Link>
    </div>
  </div>
</section>

  )
}

export default DocHero