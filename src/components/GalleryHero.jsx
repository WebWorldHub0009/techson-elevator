import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/images/about/gallery.jpg"

const GalleryHero = () => {
  const handleScroll = () => {
    const gallerySection = document.getElementById("gallery-section");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative h-[75vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold font-[poppins] mb-4">
          Techson Elevator Gallery
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6 opacity-90">
          Explore our exclusive collection of premium elevator installations,
          crafted with precision, innovation, and luxury design.
        </p>
        <button
          onClick={handleScroll}
          className="bg-[#B21B27] hover:bg-[#8e151f] transition-all duration-300 px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
        >
          View Gallery ↓
        </button>
      </motion.div>
    </section>
  );
};

export default GalleryHero;
