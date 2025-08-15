import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaQuoteLeft,
  FaUserTie,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const owners = [
  { name: "Zubair Ahmad", role: "Co-Founder & Director" },
  { name: "Saleem Akhtar", role: "Co-Founder & Director" },
  { name: "Mohammad Sufiyan", role: "Managing Director" },
];

const OwnerCard = () => {
  return (
    <section className="bg-gradient-to-br from-[#fff8f5] to-[#fef3f0] py-16 px-4 sm:px-8 md:px-14 relative overflow-hidden">
      {/* Top Quote Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto text-center mb-12 px-4"
      >
        <h2 className="text-4xl sm:text-5xl font-bold font-[poppins] text-[#7a1c1c]">
          “Elevating Standards, One Floor at a Time”
        </h2>
        <p className="mt-3 text-[#b84c2d] text-base sm:text-lg max-w-2xl mx-auto">
          Meet the leadership team behind Techson Elevator — delivering safe, stylish, and innovative vertical mobility solutions.
        </p>
      </motion.div>

      {/* Main Card Section */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-white/80 backdrop-blur-lg border border-[#f5d5c0] shadow-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {owners.map((owner, index) => (
            <motion.div
              key={owner.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#fff3f0] rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#a62828] text-white rounded-full text-3xl">
                  <FaUserTie />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#7a1c1c]">{owner.name}</h2>
                  <p className="text-sm text-[#b84c2d]">{owner.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-[#fff3f0] rounded-xl p-6 shadow-md space-y-4 mt-8">
          <h3 className="text-lg font-semibold text-[#7a1c1c]">Contact Details</h3>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaEnvelope className="text-[#a62828]" /> info@techsonelevator.in
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaPhoneAlt className="text-[#a62828]" /> +91 82995 98884
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaPhoneAlt className="text-[#a62828]" /> +91 70076 65064
          </div>
        </div>

        {/* Quote */}
        <div className="relative p-6 sm:p-8 bg-white border-l-4 border-[#a62828] rounded-xl shadow-lg mt-8">
          <FaQuoteLeft className="absolute text-3xl text-[#a62828] opacity-20 top-4 left-1" />
          <p className="text-base sm:text-lg italic text-[#7a1c1c] leading-relaxed">
            “At Techson Elevator, we believe in more than just vertical transport —
            we create experiences that combine safety, elegance, and innovation.
            Every project is a step towards a smarter, smoother, and more stylish future.”
          </p>
          <p className="text-right mt-4 text-sm text-[#b84c2d] font-semibold">
            — Techson Leadership Team
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-14 items-center">
          <Link to="/contact">
            <button className="cursor-pointer bg-[#a62828] hover:bg-[#7a1c1c] text-white px-6 py-2 rounded-md transition flex items-center gap-2">
              <FaHandshake /> Contact Us
            </button>
          </Link>
          <Link to="/services/hydraulic-elevator">
            <button className="cursor-pointer bg-white border border-[#a62828] text-[#a62828] hover:bg-[#fff3f0] px-6 py-2 rounded-md transition">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnerCard;
