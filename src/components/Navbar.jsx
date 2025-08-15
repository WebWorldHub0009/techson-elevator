import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn,
  FaHome, FaInfoCircle, FaCamera, FaFile, FaCogs, FaBook
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/techlogo.png"

const TechsonNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [quoteModal, setQuoteModal] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaInfoCircle /> },
    { name: "Gallery", path: "/gallery", icon: <FaCamera /> },
    { name: "Contact", path: "/contact", icon: <FaFile /> },
    { name: "Documentation", path: "/documentation", icon: <FaBook /> }, // NEW TAB
  ];

  const services = [
    "Hydraulic Elevator",
    "Capsule Elevator",
    "Escalator",
    "Goods Elevator",
    "Auto Door Elevator",
    "Manual Door Elevator",
    "Hospital Elevator",
    "Traction Elevator",
   
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
  ];

  return (
    <>

      {/* Top Info Bar */}
     <div className="bg-[#B21B27] text-white text-[11px] py-1 px-3 font-medium">
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">

    {/* Pair 1 */}
    <div className="flex flex-wrap items-center justify-between gap-2">
      <a href="mailto:Techsonelevator@gmail.com" className="flex items-center gap-1 hover:underline">
        📧 Techsonelevator@gmail.com
      </a>
      <a href="tel:+918299598884" className="flex items-center gap-1 hover:underline">
        📞 +91 82995 98884
      </a>
    </div>

    {/* Pair 2 */}
    <div className="flex flex-wrap items-center justify-between gap-2">
      <a href="mailto:Info@techsonelevator.in" className="flex items-center gap-1 hover:underline">
        📧 Info@techsonelevator.in
      </a>
      <a href="tel:+917007665064" className="flex items-center gap-1 hover:underline">
        📞 +91 70076 65064
      </a>
    </div>

  </div>
</div>


      {/* Main Navbar */}
      <header className="bg-white shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Social */}
          <div className="hidden md:flex gap-4 text-[#B21B27] text-lg">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
                {s.icon}
              </a>
            ))}
          </div>

          {/* Logo */}
         <Link to="/">
  <img
    src={logo}
    alt="Techson Elevator"
    className="h-14 w-auto object-contain"
  />
</Link>


          {/* CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuoteModal(true)}
              className="hidden md:inline-block px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#B21B27] to-[#8B0E18] hover:scale-105 rounded-full shadow-lg transition-transform"
            >
              Get a Quote
            </button>
            <button className="md:hidden text-2xl text-[#B21B27]" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex justify-center items-center w-full bg-[#F5F0E6] font-semibold text-sm uppercase tracking-wide">
          <div className="flex gap-8 py-3">
            {navLinks.map((link, idx) => {
              if (link.name === "About") {
                return (
                  <React.Fragment key={link.name}>
                    <Link to={link.path} className="flex items-center gap-2 hover:text-[#B21B27] transition-colors">
                      {link.icon} {link.name}
                    </Link>
                    {/* Services Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      <button className="flex items-center gap-1 uppercase hover:text-[#B21B27] transition-colors">
                        <FaCogs /> Services <IoIosArrowDown />
                      </button>
                      {servicesOpen && (
                        <div className="absolute top-full left-0 w-64 bg-white border border-[#B21B27] shadow-xl rounded-md z-50 p-3 animate-fadeIn">
                          {services.map((item, index) => (
                            <Link
                              key={index}
                              to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                              className="block py-2 text-sm hover:text-[#B21B27] transition-colors"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              }
              return (
                <Link key={link.name} to={link.path} className="flex items-center gap-2 hover:text-[#B21B27] transition-colors">
                  {link.icon} {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Mobile Overlay */}
        {menuOpen && <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />}

        {/* Mobile Drawer */}
        <aside
          ref={menuRef}
          className={`fixed top-0 left-0 w-[80%] max-w-xs h-full bg-white z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out shadow-2xl`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-[#B21B27]">Techson Elevator</h1>
            <button onClick={toggleMenu} className="text-2xl text-[#B21B27]">
              <FaTimes />
            </button>
          </div>

          <nav className="px-6 py-6 space-y-5 text-[#0D2606] font-medium text-base">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 text-[#B21B27] hover:text-black transition-colors">
                {link.icon} {link.name}
              </Link>
            ))}

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center gap-3 hover:text-[#B21B27] w-full"
              >
                <FaCogs /> Services <IoIosArrowDown className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-5 mt-2 space-y-2">
                  {services.map((item, index) => (
                    <Link
                      key={index}
                      to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                      onClick={() => setMenuOpen(false)}
                      className="block text-sm text-[#B21B27] hover:text-black"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => { setQuoteModal(true); setMenuOpen(false); }}
              className="block w-full mt-6 text-center bg-gradient-to-r from-[#B21B27] to-[#8B0E18] hover:scale-105 text-white py-2 rounded-full font-semibold transition-transform"
            >
              Get a Quote
            </button>
          </nav>
        </aside>
      </header>

      {/* Quote Modal - Premium */}
      {quoteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999] animate-fadeIn">
          <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl p-8 max-w-lg w-full shadow-[0_8px_30px_rgba(0,0,0,0.2)] border border-[#B21B27]/20">
            <button
              onClick={() => setQuoteModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black transition-colors"
            >
              <FaTimes />
            </button>
            <h2 className="text-3xl font-bold text-[#B21B27] mb-6 text-center">
              Request a Quote
            </h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B21B27] shadow-sm" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B21B27] shadow-sm" />
              <input type="text" placeholder="Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B21B27] shadow-sm" />
              <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B21B27] shadow-sm" />
              <textarea placeholder="Message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#B21B27] shadow-sm" />
              <button type="submit" className="w-full bg-gradient-to-r from-[#B21B27] to-[#8B0E18] hover:scale-105 text-white py-3 rounded-lg font-semibold shadow-lg transition-transform">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TechsonNavbar;
