import React from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import groupimg from "../assets/group_profiles.png";
import clean1 from "../assets/cleaning1.jpg";
import clean2 from "../assets/cleaning2.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#f9f9f9] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* TEXT CONTENT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 uppercase mb-2">
            Welcome to UltraClean
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B1F35] leading-tight mb-4">
            UltraClean Pros: <br className="hidden md:block" /> The Ultimate
            Clean <br className="hidden md:block" /> for Every Space
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-md">
            We deliver exceptional cleaning services that leave your spaces
            sparkling clean and hygienic.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition">
              Make An Appointment
            </button>
            <button className="flex items-center gap-2 text-blue-700 font-medium">
              <span className="p-3 bg-yellow-400 rounded-full">
                <FaPlay className="text-sm text-white" />
              </span>
              Watch Services Intro
            </button>
          </div>
        </motion.div>

        {/* IMAGE CONTENT */}
        <motion.div
          className="flex-1 relative w-full flex justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4">
            <img
              src={clean1}
              alt="cleaner"
              className="w-60 sm:w-52 md:w-60 rounded-xl shadow-md"
            />
            <img
              src={clean2}
              alt="cleaner"
              className="w-60 sm:w-52 md:w-60 rounded-xl shadow-md"
            />
          </div>

          {/* Overlay: 24/7 Support */}
          <div className="absolute top-4 right-4 bg-white p-2 sm:p-3 rounded-xl shadow-md text-xs sm:text-sm text-center z-20">
            <p className="text-blue-600 font-semibold">24/7 Support</p>
          </div>

          {/* Overlay: Satisfied Customers */}
          <div className="absolute bottom-4 left-4 bg-white p-2 sm:p-3 rounded-xl shadow-md text-xs sm:text-sm z-20">
            <p className="font-semibold text-gray-700">Satisfied Customers</p>
            <div className="flex items-center gap-1 mt-1">
              <img src={groupimg} className="w-6 rounded-full" />
              <span className="ml-2 text-gray-500">100K+</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* TRUSTED LOGOS */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 font-medium mb-6">
          Trusted by Thousands of Organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
          <img src="/assets/logo1.svg" className="w-24 sm:w-28" />
          <img src="/assets/logo2.svg" className="w-24 sm:w-28" />
          <img src="/assets/logo3.svg" className="w-24 sm:w-28" />
          <img src="/assets/logo4.svg" className="w-24 sm:w-28" />
          <img src="/assets/logo5.svg" className="w-24 sm:w-28" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
