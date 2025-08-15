import React, { useState } from "react";
import { FaTools, FaShieldAlt, FaAward } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../assets/images/home/whybg.jpg"

export default function WhyChooseUs() {
  const reasons = [
    {
      id: "01",
      title: "Expert Installation",
      desc: "Our skilled technicians ensure every elevator is installed with precision, exceeding the highest industry standards.",
      details:
        "At Techson Elevator, our installation team follows a meticulous process — from structural inspection, precision alignment, to rigorous safety checks. Every project is handled with the latest tools and techniques, ensuring performance that lasts decades.",
      icon: <FaTools className="text-red-800 text-4xl" />,
    },
    {
      id: "02",
      title: "Unmatched Safety",
      desc: "We use certified, premium components to ensure unmatched safety, reliability, and long-term performance.",
      details:
        "Safety is at the heart of everything we build. From emergency brakes to overload protection, we integrate advanced safety features that comply with global elevator standards, providing absolute peace of mind for our clients.",
      icon: <FaShieldAlt className="text-red-800 text-4xl" />,
    },
    {
      id: "03",
      title: "Proven Excellence",
      desc: "With 250+ successful projects, our track record speaks for itself — delivering perfection every time.",
      details:
        "Our portfolio includes residential, commercial, and industrial projects across India. Each project is a testament to our craftsmanship, attention to detail, and commitment to customer satisfaction.",
      icon: <FaAward className="text-red-800 text-4xl" />,
    },
  ];

  const [selectedReason, setSelectedReason] = useState(null);

  return (
    <section className="relative py-5 px-6 md:px-12 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${bg})`,
        }}
      />
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Background gradient circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-64 h-64 bg-red-800/5 rounded-full blur-3xl top-0 left-0"></div>
        <div className="absolute w-80 h-80 bg-red-800/5 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="relative flex items-center justify-center">
          {/* Rotating Circular Text */}
          <div className="w-28 h-28 rounded-full flex items-center justify-center animate-spin-slow relative">
            <svg viewBox="0 0 200 200" className="absolute w-full h-full">
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                />
              </defs>
              <text fill="#ffffff" fontSize="14" fontWeight="bold">
                <textPath href="#circlePath" startOffset="0%" textLength="470">
                  ★ WHY CHOOSE US ★ WHY CHOOSE US ★ WHY CHOOSE US
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <h2 className="mt-3 font-[poppins] text-4xl md:text-5xl font-extrabold text-red-800 leading-tight">
          Elevating Standards, One Floor at a Time
        </h2>
        <p className="mt-2 text-white text-lg">
          At Techson Elevator, we blend innovation, luxury, and uncompromised
          safety to create elevators that redefine comfort and reliability.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="relative group bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
          >
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full group-hover:scale-110 transition-transform duration-500">
              {reason.icon}
            </div>
            <span className="absolute top-6 right-6 text-gray-200 text-6xl font-extrabold">
              {reason.id}
            </span>
            <h3 className="text-xl font-semibold text-gray-900">
              {reason.title}
            </h3>
            <p className="mt-3 text-gray-600">{reason.desc}</p>
            <button
              onClick={() => setSelectedReason(reason)}
              className="mt-6 inline-flex items-center cursor-pointer gap-2 text-red-800 font-medium border border-red-800 rounded-full px-5 py-2 text-sm transition-all duration-300 hover:bg-red-800 hover:text-white hover:shadow-lg"
            >
              Learn More →
            </button>
            <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-10 transition duration-500 bg-gradient-to-br from-red-800 to-red-600 rounded-2xl"></div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedReason && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReason(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-full">
                {selectedReason.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {selectedReason.title}
              </h3>
              <p className="text-gray-600">{selectedReason.details}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
