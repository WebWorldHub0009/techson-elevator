import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBuilding,
  FaHospital,
  FaDoorClosed,
  FaDoorOpen,
  FaDolly,
  FaRoad,
  FaRocket,
  FaWater,
} from "react-icons/fa";
import traction from "../assets/images/home/tracctioin.jpeg";
import hospital from "../assets/images/home/hospital.avif";
import good from "../assets/images/home/goods.jpg";
import jeene from "../assets/images/home/jeene.jpg";
import capsule from "../assets/images/home/capsule.jpg";
import hydrolic from "../assets/images/home/hydrolic.jpg";
import manual from "../assets/images/home/chanel.jpg";
import auto from "../assets/images/home/auto.avif";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Traction Elevator",
    description: "High-speed and energy-efficient elevators with smooth operation, perfect for modern high-rise buildings.",
    icon: <FaBuilding className="text-3xl text-red-800" />,
    img: traction,
    link: "/services/traction-elevator",
  },
  {
    title: "Hospital Elevator",
    description: "Spacious and reliable elevators designed for patient care, stretchers, and emergency transport.",
    icon: <FaHospital className="text-3xl text-red-800" />,
    img: hospital,
    link: "/services/hospital-elevator",
  },
  {
    title: "Manual Door Elevator",
    description: "Cost-effective and durable elevators with traditional manual door systems for simplicity and longevity.",
    icon: <FaDoorClosed className="text-3xl text-red-800" />,
    img: manual,
    link: "/services/manual-door-elevator",
  },
  {
    title: "Auto Door Elevator",
    description: "Automatic sliding door elevators with sleek design, safety sensors, and quiet performance.",
    icon: <FaDoorOpen className="text-3xl text-red-800" />,
    img: auto,
    link: "/services/auto-door-elevator",
  },
  {
    title: "Goods Elevator",
    description: "Heavy-duty elevators built for warehouses and factories, capable of lifting large and heavy loads with ease.",
    icon: <FaDolly className="text-3xl text-red-800" />,
    img: good,
    link: "/services/goods-elevator",
  },
  {
    title: "Escalator",
    description: "Efficient and stylish escalators for malls, airports, and public spaces with low maintenance needs.",
    icon: <FaRoad className="text-3xl text-red-800" />,
    img: jeene,
    link: "/services/escalator",
  },
  {
    title: "Capsule Elevator",
    description: "Futuristic panoramic elevators with glass walls, offering a luxurious and scenic ride experience.",
    icon: <FaRocket className="text-3xl text-red-800" />,
    img: capsule,
    link: "/services/capsule-elevator",
  },
  {
    title: "Hydraulic Elevator",
    description: "Smooth and quiet elevators using hydraulic systems, ideal for low-rise buildings and villas.",
    icon: <FaWater className="text-3xl text-red-800" />,
    img: hydrolic,
    link: "/services/hydraulic-elevator",
  },
];


export default function Service() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, services.length));
  };

  return (
    <section className="relative py-16 px-6 md:px-14 overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50 min-h-[700px]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Soft Glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-200/40 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-red-300/30 rounded-full blur-[130px] animate-pulse"></div>

        {/* Moving Vertical Gradient Lines */}
        <svg
          className="absolute w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="50%" stopColor="#ff8787" />
              <stop offset="100%" stopColor="#ff6b6b" />
            </linearGradient>
          </defs>
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x={i * 80 + 40} // horizontal spacing and starting position
              y={-200} // start above visible area for smooth looping
              width="3" // slightly thicker vertical lines
              height="1400" // tall enough to cover vertically
              fill="url(#lineGrad)"
              className="animate-[slideLine_12s_linear_infinite]"
            />
          ))}
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <p className="text-red-800 uppercase font-semibold tracking-widest text-sm">
          Our Elevator Solutions
        </p>
        <h2 className="mt-3 text-4xl font-[poppins] md:text-5xl font-extrabold text-gray-900 leading-tight">
          Smooth. Safe. Smart Mobility.
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Techson Elevator delivers premium vertical mobility solutions tailored
          for every need — from luxury residences to heavy-duty industrial use.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-16 flex flex-wrap justify-center gap-8 relative z-10">
        <AnimatePresence>
        {services.slice(0, visibleCount).map((service, idx) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 40 }}
    transition={{ duration: 0.6, delay: idx * 0.15 }}
    className="w-72 bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center border border-white/30 overflow-hidden relative group"
  >
    <Link to={service.link}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/10 via-white/5 to-red-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
      <div className="relative flex flex-col items-center p-4 -mt-10">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-red-800 shadow-md shadow-red-200">
          {service.icon}
        </div>
        <h4 className="mt-4 text-lg font-bold text-gray-900 uppercase">{service.title}</h4>
        <p className="mt-2 text-sm text-gray-600">{service.description}</p>
      </div>
    </Link>
  </motion.div>
))}
        </AnimatePresence>
      </div>

      {/* Load More Button */}
      {visibleCount < services.length && (
        <div className="mt-10 text-center relative z-10">
          <button
            onClick={handleLoadMore}
            className="bg-red-800 text-white px-6 py-3 rounded-full hover:bg-red-900 transition-all duration-300 shadow-lg shadow-red-200"
          >
            Load More
          </button>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>{`
        @keyframes slideLine {
          0% { transform: translateY(-200px); }
          100% { transform: translateY(1200px); }
        }
      `}</style>
    </section>
  );
}
