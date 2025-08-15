// src/pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "./services";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="text-center py-20 font-[poppins]">
        <h1 className="text-red-800 text-3xl font-extrabold">Service Not Found</h1>
        <p className="mt-4 text-gray-600">The service you are looking for does not exist.</p>
        <Link
          to="/services"
          className="mt-6 inline-block px-6 py-3 bg-red-700 text-white rounded-lg shadow-lg hover:bg-red-800 transition"
        >
          View All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="font-[poppins] relative">
      {/* SVG Background */}
      <div className="absolute inset-0 -z-10">
        <svg
  className="w-full h-full  text-red-800"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
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

      {/* Top Heading */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-red-800 tracking-wide">
          {service.title}
        </h1>
      </section>

      {/* Image + Description */}
      <section className="max-w-7xl mx-auto px-6 py-5 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-4xl font-medium text-gray-800 mb-4">{service.shortDescription}</p>
          {service.detailedDescription.map((desc, index) => (
            <p key={index} className="mb-3 text-gray-800 text-xl">
              {desc}
            </p>
          ))}
        </div>
      </section>

      {/* Why Choose & Key Features */}
      <section className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-8">
        {/* Why Choose */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-red-800 text-4xl font-bold mb-4">Why Choose Techson Elevator</h2>
          <ul className="space-y-3">
            {service.whyChoose.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-600 mt-1 text-lg" />
                <span className="text-gray-700 font-medium text-xl">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-red-800 text-4xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {service.keyFeatures.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-600 mt-1 text-lg" />
                <span className="text-gray-700 font-medium text-xl">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries Served */}
      <section className="max-w-7xl mx-auto px-6 py-6 text-center">
        <h2 className="text-red-800 text-4xl font-bold mb-6">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {service.industries.map((industry, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-red-50 text-red-900 rounded-full text-sm font-semibold border border-red-200"
            >
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* Sleek Full-Width CTA */}
     {/* Sleek Full-Width CTA */}
<section className="relative py-5 overflow-hidden ">
  {/* Background Gradient Glow */}
  <div className="absolute px-20 inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-900"></div>

  {/* Decorative Blur Circles */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-400/30 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

  {/* Glassmorphism Container */}
  <div className="relative z-10 max-w-5xl mx-auto px-6">
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn">
      <p className="text-lg md:text-xl font-semibold text-white text-center md:text-left">
        🚀 Ready to experience <span className="text-yellow-300">{service.title}</span> with Techson's premium quality?
      </p>
      <Link
        to="/contact"
        className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-900 font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
      >
        Book Now
      </Link>
    </div>
  </div>
</section>

    </div>
  );
}
