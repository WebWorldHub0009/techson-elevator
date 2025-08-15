import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  { title: "Traction Elevator", description: "High-speed and energy-efficient elevators with smooth operation, perfect for modern high-rise buildings.", icon: <FaBuilding className="text-3xl text-red-800" />, img: traction, link: "/services/traction-elevator" },
  { title: "Hospital Elevator", description: "Spacious and reliable elevators designed for patient care, stretchers, and emergency transport.", icon: <FaHospital className="text-3xl text-red-800" />, img: hospital, link: "/services/hospital-elevator" },
  { title: "Manual Door Elevator", description: "Cost-effective and durable elevators with traditional manual door systems for simplicity and longevity.", icon: <FaDoorClosed className="text-3xl text-red-800" />, img: manual, link: "/services/manual-door-elevator" },
  { title: "Auto Door Elevator", description: "Automatic sliding door elevators with sleek design, safety sensors, and quiet performance.", icon: <FaDoorOpen className="text-3xl text-red-800" />, img: auto, link: "/services/auto-door-elevator" },
  { title: "Goods Elevator", description: "Heavy-duty elevators built for warehouses and factories, capable of lifting large and heavy loads with ease.", icon: <FaDolly className="text-3xl text-red-800" />, img: good, link: "/services/goods-elevator" },
  { title: "Escalator", description: "Efficient and stylish escalators for malls, airports, and public spaces with low maintenance needs.", icon: <FaRoad className="text-3xl text-red-800" />, img: jeene, link: "/services/escalator" },
  { title: "Capsule Elevator", description: "Futuristic panoramic elevators with glass walls, offering a luxurious and scenic ride experience.", icon: <FaRocket className="text-3xl text-red-800" />, img: capsule, link: "/services/capsule-elevator" },
  { title: "Hydraulic Elevator", description: "Smooth and quiet elevators using hydraulic systems, ideal for low-rise buildings and villas.", icon: <FaWater className="text-3xl text-red-800" />, img: hydrolic, link: "/services/hydraulic-elevator" },
];

export default function ServiceSlider() {
  const controls = useAnimation();
  const [xPos, setXPos] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setXPos((prev) => {
        const newPos = prev - 320; // 300px card + 20px gap
        if (Math.abs(newPos) >= services.length * 320) {
          return 0; // Reset to start
        }
        return newPos;
      });
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      x: xPos,
      transition: { duration: 0.8, ease: "easeInOut" },
    });
  }, [xPos, controls]);

  return (
    <section className="relative py-16 px-6 md:px-14 bg-gradient-to-br from-red-50 via-white to-red-50 overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-red-800 uppercase font-semibold tracking-widest text-sm font-[poppins]">
          Our Elevator Solutions
        </p>
        <h2 className="mt-3 text-4xl md:text-5xl font-[poppins] font-extrabold text-gray-900 leading-tight">
          Smooth. Safe. Smart Mobility.
        </h2>
        <p className="mt-4 text-gray-600 text-lg font-[poppins] italic">
          "Elevating experiences, one floor at a time."
        </p>
      </div>

      {/* Auto Slider */}
      <div className="overflow-hidden mt-12">
        <motion.div
          animate={controls}
          className="flex gap-6"
          style={{ minWidth: "max-content" }}
        >
          {services.concat(services).map((service, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] max-w-[300px] bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-white/30 overflow-hidden group"
            >
              <Link to={service.link}>
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="relative flex flex-col items-center p-4 -mt-10">
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-red-800 shadow-md shadow-red-200">
                    {service.icon}
                  </div>
                  <h4 className="mt-4 text-lg font-bold text-gray-900 uppercase font-[poppins]">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600 font-[poppins]">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
