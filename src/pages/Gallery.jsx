import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryHero from "../components/GalleryHero";
import img1 from "../assets/images/gallery/img1.jpeg"
import img2 from "../assets/images/gallery/img2.jpeg"
import img3 from "../assets/images/gallery/img3.jpeg"
import img4 from "../assets/images/gallery/img4.jpeg"
import img5 from "../assets/images/gallery/img5.jpeg"
import img6 from "../assets/images/gallery/img6.jpeg"
import img7 from "../assets/images/gallery/img7.jpeg"
import img8 from "../assets/images/gallery/img8.jpeg"
import img9 from "../assets/images/gallery/img9.jpeg"
import img10 from "../assets/images/gallery/img10.jpeg"
import img11 from "../assets/images/gallery/i11.jpeg"
import img12 from "../assets/images/gallery/i12.jpeg"
import img13 from "../assets/images/gallery/i13.jpeg"
import img14 from "../assets/images/gallery/i14.jpeg"
import img15 from "../assets/images/gallery/i15.jpg"
import img16 from "../assets/images/gallery/i16.jpg"


const images = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const showNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <>
    <GalleryHero/>
    <section id="gallery-section" className="relative w-full bg-gray-50 py-8">
      {/* Quote Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold font-[poppins] text-[#B21B27]"
        >
          "Crafting Excellence in Every Elevator We Build"
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          Explore our gallery and witness the innovation, design, and precision
          that defines <span className="font-bold text-[#B21B27]">Techson Elevator</span>.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-12">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-52 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-white font-bold text-lg">
              View
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <X />
          </button>
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-4xl"
          >
            <ChevronLeft />
          </button>
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-2xl"
          />
          <button
            onClick={showNext}
            className="absolute right-6 text-white text-4xl"
          >
            <ChevronRight />
          </button>
        </motion.div>
      )}
    </section>
    </>
  );
};

export default GallerySection;
