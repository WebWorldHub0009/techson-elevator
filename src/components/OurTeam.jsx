// src/components/OurTeam.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUserCircle, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const teamMembers = [
  { name: "Mohd Ayaan", position: "Project Manager", linkedin: "#" },           // Hindu
  { name: "Shadaan Alam", position: "Design & Engineering Lead", linkedin: "#" }, // Hindu
  { name: "Mohd Talha", position: "Installation Supervisor", linkedin: "#" },   
  { name: "Rajeev Singh", position: "Quality & Safety Manager", linkedin: "#" },    
  { name: "Suman Gupta", position: "Client Relations Manager", linkedin: "#" },  
  { name: "Ishita Kapoor", position: "Maintenance & Service Head", linkedin: "#" } 
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatAnimation = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

export default function OurTeam() {
  return (
    <section className="py-10 px-4 md:px-20 bg-[#F8F3ED] text-[#3C2C2A] relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 w-full mx-auto text-center"
      >
        <motion.h4
          variants={itemVariants}
          className="text-[#7B2C2C] font-semibold mb-2 text-md uppercase tracking-wider"
        >
          Our Experts
        </motion.h4>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl font-[Poppins] font-bold text-[#7B2C2C] mb-4"
        >
          Meet The Techson Team
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[#3C2C2A] max-w-3xl mx-auto mb-8 text-lg"
        >
          Our dedicated professionals bring innovation, precision, and expertise to every elevator project. 
          From installation to maintenance, the Techson team ensures safety, quality, and excellence.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-6 mb-12"
        >
          <Link to="/contact">
            <button className="bg-gradient-to-r from-[#7B2C2C] to-[#3C2C2A] text-white px-7 py-3 rounded-full hover:from-[#5A1B1B] hover:to-[#2C1E1A] transition text-lg shadow-lg">
              Get in Touch
            </button>
          </Link>
          <Link to="/services">
            <button className="border border-[#7B2C2C] text-[#7B2C2C] px-7 py-3 rounded-full hover:bg-[#7B2C2C] hover:text-white transition text-lg shadow-lg">
              Explore Services
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Mobile Slider */}
      <div className="md:hidden relative z-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <ProfileCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:flex flex-wrap justify-center gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </section>
  );
}

function ProfileCard({ member }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
      className="flex flex-col items-center space-y-3"
    >
      <motion.div
        {...floatAnimation}
        className="w-28 h-28 rounded-full border-2 border-[#7B2C2C] shadow-xl flex items-center justify-center bg-[#3C2C2A]/10"
      >
        <FaUserCircle className="text-6xl text-[#7B2C2C]" />
      </motion.div>
      <h4 className="font-semibold text-2xl">{member.name}</h4>
      <p className="text-base">{member.position}</p>
      <div className="flex gap-6 text-2xl text-[#3C2C2A] hover:text-[#7B2C2C] transition">
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
          <FaInstagram /> 
        </a>
      </div>
    </motion.div>
  );
}
