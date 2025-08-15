import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaImage,
  FaBuilding,
  FaHospital,
  FaDoorClosed,
  FaDoorOpen,
  FaDolly,
  FaRoad,
  FaRocket,
  FaWater,
  FaDochub,
} from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

// Background image import
import bgFooter from "../assets/images/home/bgfooter.avif";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Services with icons
const services = [
  { name: "Traction Elevator", icon: <FaBuilding className="text-red-800 mr-2" /> },
  { name: "Hospital Elevator", icon: <FaHospital className="text-red-800 mr-2" /> },
  { name: "Manual Door Elevator", icon: <FaDoorClosed className="text-red-800 mr-2" /> },
  { name: "Auto Door Elevator", icon: <FaDoorOpen className="text-red-800 mr-2" /> },
  { name: "Goods Elevator", icon: <FaDolly className="text-red-800 mr-2" /> },
  { name: "Escalator", icon: <FaRoad className="text-red-800 mr-2" /> },
  { name: "Capsule Elevator", icon: <FaRocket className="text-red-800 mr-2" /> },
  { name: "Hydraulic Elevator", icon: <FaWater className="text-red-800 mr-2" /> },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative pt-17 pb-10 px-6 md:px-16 overflow-hidden font-sans"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Glow overlays */}
      <div className="absolute -top-20 left-[-100px] w-[300px] h-[300px] bg-red-600/10 blur-[130px] opacity-20 rounded-full z-0" />
      <div className="absolute -bottom-20 right-[-100px] w-[300px] h-[300px] bg-yellow-400/10 blur-[150px] opacity-20 rounded-full z-0" />

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <img src={""} alt="Techson Elevator Logo" className="w-[120px] md:w-[160px]" />
          <h4 className="font-[poppins] font-bold mb-2  text-4xl text-red-800">
            About Techson Elevator
          </h4>
          <p className="leading-relaxed text-gray-800">
            Techson Elevator is a leading provider of elevator solutions in India, offering expert installation, maintenance, and modern lift systems for residential, commercial, and industrial projects.
          </p>
          <div className="mt-4">
            <a
              href="https://www.justdial.com/Lucknow/Techson-Elevator-Near-Jashn-Marriage-Lawn-Sitapur-Rd-Lucknow/0522PX522-X522-210104204514-H7R1_BZDET?cat_b2b_flag=&searchfrom=lst&bd=1&mncatname=Techson%20Elevator&ncatid=10186318&ftterm=Techson%20Elevator"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 border border-red-600 text-red-800 rounded hover:bg-red-600 hover:text-white transition duration-300 text-sm font-medium"
            >
              View on JustDial
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-[poppins] font-bold text-3xl mb-4 text-red-800">Quick Links</h4>
          <ul className="space-y-2 text-gray-800">
            {[["Home", "/", <FaHome />], ["About Us", "/about", <FaInfoCircle />], ["Gallery", "/gallery", <FaImage />], ["Contact", "/contact", <FaPhoneAlt />],["Documentation", "/documentation", <FaDochub />]].map(
              ([text, link, icon], i) => (
                <li key={i}>
                  <Link to={link} className="flex items-center gap-2 hover:text-red-800 transition duration-300">
                    {icon} {text}
                  </Link>
                </li>
              )
            )}
          </ul>

          <h4 className="mt-6 font-[poppins] font-bold text-3xl text-red-800">Emails</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            {["Info@techsonelevator.in", "Techsonelevator@gmail.com"].map((email, i) => (
              <li key={i}>
                <a href={`mailto:${email}`} className="flex items-center space-x-2 hover:text-red-800 transition duration-300">
                  <FaEnvelope className="text-red-800" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-[poppins] font-bold text-3xl mb-4 text-red-800">Our Services</h4>
          <ul className="space-y-2 text-gray-800">
            {services.map(({ name, icon }, i) => (
              <li key={i} className="flex items-center">
                {icon}
                <Link to="/services" className="hover:text-red-800 transition duration-300">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       {/* Contact & Social */}
<div>
  <h4 className="font-[poppins] font-bold text-3xl mb-4 text-red-800">Contact Info</h4>
  <address className="not-italic leading-relaxed mb-4 text-gray-800 text-sm">
    Plot No. 75 Ground Floor, Bharat Nagar, Sitapur Road, Jankipuram, Lucknow, Uttar Pradesh, India
  </address>

  <p className="text-sm text-gray-800 mb-2">
    <FaPhoneAlt className="inline text-red-800 mr-1" />
    <a href="tel:+918299598884">+91 82995 98884</a>
  </p>
  <p className="text-sm text-gray-800 mb-2">
    <FaPhoneAlt className="inline text-red-800 mr-1" />
    <a href="tel:+917007665064">+91 70076 65064</a>
  </p>

  {/* GSTIN & UDYAM */}
  <div className="mt-3 text-sm text-gray-800">
    <p><span className="font-semibold text-red-800">GSTIN:</span> 09AAQFT2331M1ZO</p>
    <p><span className="font-semibold text-red-800">UDYAM:</span> UDYAM-UP-50-0001155</p>
  </div>

  <div className="mb-4 flex justify-center items-center relative right-8">
    <Translator />
  </div>
  <div className="mt-6 flex space-x-4">
    {[
      ["https://www.instagram.com", FaInstagram],
      ["https://www.facebook.com/p/Techson-Elevator-100063892249940/", FaFacebookF],
      ["https://www.youtube.com/@techsonelevator", FaYoutube],
    ].map(([url, Icon], i) => (
      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="text-red-800 hover:text-yellow-400 transition">
        <Icon size={20} />
      </a>
    ))}
  </div>
</div>

      </div>

      <div className="mt-10 text-center text-xs text-gray-700 border-t border-[#444] pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Techson Elevator. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a href="https://webworldhub.co.in" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-yellow-400 transition">
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
