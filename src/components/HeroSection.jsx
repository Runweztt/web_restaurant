import React from "react";
import { FaPlay, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import groupimg from "../assets/group_profiles.png";
import restimg1 from "../assets/restimg1.jpg";
import restimg2 from "../assets/restimg2.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#f9f9f9] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* TEXT CONTENT */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1F35] leading-tight mb-4">
            All Fast Food is <br /> Available at{" "}
            <span className="text-primary">Foodle</span>
          </h1>
          <p className="text-gray-600 text-base mb-6 max-w-md">
            We are just a click away when you crave for delicious fast food.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition flex items-center gap-2">
              <FaLock />
              Order Now
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <img
              src={restimg1}
              alt="food 1"
              className="w-72 sm:w-80 md:w-96 rounded-xl shadow-md"
            />
            <img
              src={restimg2}
              alt="food 2"
              className="w-72 sm:w-80 md:w-96 rounded-xl shadow-md"
            />
          </div>

          {/* Overlay: Free Delivery */}
          <div className="absolute top-4 right-4 bg-white p-2 sm:p-3 rounded-xl shadow-md text-xs sm:text-sm text-center z-20">
            <p className="text-primary font-semibold">Free Delivery</p>
          </div>

          {/* Overlay: Happy Customers */}
          <div className="absolute bottom-4 left-4 bg-white p-2 sm:p-3 rounded-xl shadow-md text-xs sm:text-sm z-20">
            <p className="font-semibold text-gray-700">Happy Customers</p>
            <div className="flex items-center gap-1 mt-1">
              <img src={groupimg} className="w-6 rounded-full" />
              <span className="ml-2 text-gray-500">100K+</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
