import React from "react";
import { FaFilePdf, FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import DocHero from "../components/DocHero";

import udyam from "../assets/doc/udyam.pdf";
import imp from "../assets/doc/imp.pdf";
import trade from "../assets/doc/trade.pdf";
import gst from "../assets/doc/gst.pdf";

const certificates = [
  { title: "Udyam Certificate", file: udyam },
  { title: "GST Certificate", file: gst },
  { title: "Techson Trade License", file: trade },
  { title: "Import Export License", file: imp },
];

const Document = () => {
  return (
    <div className="font-[poppins]">
      <DocHero />

      {/* Certificates Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-200 to-gray-300 overflow-hidden">
        {/* SVG Background */}
        <div className="absolute inset-0">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="premiumPattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#premiumPattern)" />
          </svg>
          <div className="absolute w-[600px] h-[600px] bg-red-200/40 rounded-full blur-3xl top-[-100px] left-[-150px]" />
          <div className="absolute w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-3xl bottom-[-100px] right-[-150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Main Heading */}
          <h2 className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-red-800 to-red-600 bg-clip-text text-transparent tracking-wide mb-4">
            Our Official Certifications
          </h2>
          <p className="text-center text-gray-600 italic mb-14 text-lg">
            “Certified trust, engineered excellence.”
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-10">
            {certificates.map((doc, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/60 p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-red-200"
              >
                <FaFilePdf className="text-red-600 text-7xl mb-5 drop-shadow-md" />
                <h3 className="text-xl font-semibold text-gray-900 mb-5 tracking-wide">
                  {doc.title}
                </h3>
                <div className="flex gap-4">
                  <a
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white rounded-full flex items-center gap-2 font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <FaExternalLinkAlt /> View
                  </a>
                  <a
                    href={doc.file}
                    download
                    className="px-5 py-2.5 bg-white text-gray-900 border border-gray-300 hover:border-gray-400 rounded-full flex items-center gap-2 font-medium shadow-sm hover:shadow-lg transition-all"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="relative py-16 bg-gradient-to-r from-red-800 to-red-900 text-center text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="sleekDots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sleekDots)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            At <span className="font-semibold text-yellow-300">Techson Elevator</span>,  
            our certifications are more than documents — they are proof of our  
            unwavering commitment to quality, safety, and customer trust.
          </p>
          <p className="mt-5 text-yellow-300 font-medium text-lg">
            Elevating standards — one certificate at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Document;
