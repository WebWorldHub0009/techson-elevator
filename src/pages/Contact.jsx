import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import ContactHero from "../components/ContactHero";
import MapSection from "../components/MapSection";

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

const Contact = () => {
  return (
    <>
    <section className="w-full bg-gradient-to-b from-[#f5efef] via-[#969696] to-[#eee6de] font-sans py-1">
      <ContactHero />

      {/* Contact Box */}
      <div   className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-[-60px] z-10 relative flex flex-col md:flex-row overflow-hidden px-6 md:px-12 py-12 md:py-16">
        
        {/* Left Info */}
        <div id="quote-section" className="bg-[#B21B27] text-white px-8 py-12 relative md:w-1/2 w-full rounded-2xl md:rounded-r-none">
          <h3 className="text-4xl font-bold font-[poppins] mb-4">Contact Information</h3>
          <p className="text-white/90 text-base mb-6">
            We’re here to help you with all your elevator needs. Call us today!
          </p>

          <div className="flex items-start gap-4 text-base mb-4">
            <HiOutlinePhone className="mt-1 text-white text-2xl" />
            <div>
              +91 82995 98884 <br /> +91 70076 65064
            </div>
          </div>
          <div className="flex items-start gap-4 text-base mb-4">
            <AiOutlineMail className="mt-1 text-white text-2xl" />
            <div>Info@techsonelevator.in</div>
          </div>
          <div className="flex items-start gap-4 text-base mb-4">
            <BiMap className="mt-1 text-white text-2xl" />
            <div>
              Plot No. 75, Ground Floor, Bharat Nagar, Sitapur Road, Jankipuram,<br />
              Lucknow, Uttar Pradesh 226021, India
            </div>
          </div>

          <p className="text-white/80 text-sm mt-4">
            GSTIN: 09AAQFT2331M1ZO
          </p>

          <div className="absolute w-80 h-80 bg-white opacity-20 rounded-full bottom-[-100px] right-[-100px] z-0"></div>
        </div>

        {/* Right Form */}
        <div className="px-8 py-12 md:w-1/2 w-full">
          <form
            className="w-full"
            action="https://formsubmit.co/Info@techsonelevator.in"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />

            {/* Name + Email */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1">
                <label className="block text-lg text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                />
              </div>
            </div>

            {/* Mobile + Service */}
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1">
                <label className="block text-lg text-gray-700 mb-2">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="+91 9876543210"
                  className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
                />
              </div>
              <div className="flex-1">
                <label className="block text-lg text-gray-700 mb-2">Service</label>
                <select
                  name="service"
                  required
                  className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base bg-transparent"
                >
                  <option value="">Select Service</option>
                  {services.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8">
              <label className="block text-lg text-gray-700 mb-2">Address</label>
              <input
                type="text"
                name="address"
                required
                placeholder="Your complete address"
                className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base"
              />
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-lg text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Write your message here"
                className="w-full border-b-2 border-gray-300 focus:border-[#B21B27] outline-none py-3 text-base resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-[#B21B27] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#98131f] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <MapSection/>
    </>
  );
};

export default Contact;
