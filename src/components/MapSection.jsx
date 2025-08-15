import React from "react";

const MapSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#fdfdfd] via-[#f4f4f4] to-[#ececec] py-16">
      {/* Heading & Tagline */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold font-[poppins] text-[#B21B27]">
          Find Us Easily
        </h2>
        <p className="text-gray-600 mt-3 text-lg italic">
          “Connecting you to the heights with trust and technology.”
        </p>
      </div>

      {/* Map */}
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d113851.96997957065!2d80.84754382791618!3d26.907491687616105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x399957371b78ea8d%3A0x34e72db8dd96533d!2sOppsite%20Apostle%20Public%20School%20Dudauli%20road%2C%20Lucknow%20-%20Sitapur%20Expy%2C%20Lucknow%2C%20Uttar%20Pradesh%20226021!3m2!1d26.9075156!2d80.9299453!5e0!3m2!1sen!2sin!4v1755251247349!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Techson Elevator Location"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
