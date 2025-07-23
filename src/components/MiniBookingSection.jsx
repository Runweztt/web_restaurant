import React from "react";
import { motion } from "framer-motion";
import homeIcon from "../assets/home_clean.jpeg";
import officeIcon from "../assets/office_clean.jpg";
import deepCleanIcon from "../assets/deep_clean.jpg";
import moveOutIcon from "../assets/move_out.jpg";
import { useNavigate } from "react-router-dom";

const services = [
  { id: "home", title: "Home Cleaning", img: homeIcon },
  { id: "office", title: "Office Cleaning", img: officeIcon },
  { id: "deep", title: "Deep Cleaning", img: deepCleanIcon },
  { id: "move-out", title: "Move-Out Cleaning", img: moveOutIcon },
];

const MiniBookingSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (serviceId) => {
    navigate(`/booking/${serviceId}`);
  };

  return (
    <div className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-8xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0B1F35]">Book a Cleaning</h2>
        <p className="text-gray-600 mt-2">
          Choose your preferred service and let’s get started!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            onClick={() => handleNavigate(service.id)}
            className="cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-66 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white py-4 px-3 text-center">
                <h3 className="text-base font-semibold text-[#0B1F35]">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MiniBookingSection;
