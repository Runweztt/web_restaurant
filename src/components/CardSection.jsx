import React from "react";
import { motion } from "framer-motion";
import { FaBroom, FaSprayCan, FaToilet, FaRecycle } from "react-icons/fa";

const services = [
  {
    title: "Residential Cleaning",
    description: "Thorough and affordable home cleaning tailored to your needs.",
    icon: <FaBroom className="text-white text-2xl" />,
    bg: "bg-blue-600",
  },
  {
    title: "Commercial Cleaning",
    description: "We keep your office or workspace spotless and hygienic.",
    icon: <FaSprayCan className="text-white text-2xl" />,
    bg: "bg-yellow-500",
  },
  {
    title: "Restroom Sanitization",
    description: "Sanitary and disinfected restrooms for safety and comfort.",
    icon: <FaToilet className="text-white text-2xl" />,
    bg: "bg-green-600",
  },
  {
    title: "Eco-Friendly Cleaning",
    description: "Sustainable methods using green products to protect the environment.",
    icon: <FaRecycle className="text-white text-2xl" />,
    bg: "bg-teal-600",
  },
];

const CardSection = () => {
  return (
    <div className="bg-white py-20 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0B1F35] mb-4">
          Our Professional Services
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We provide a range of cleaning services designed to fit every space and schedule.
        </p>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f9f9f9] p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${service.bg} mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-[#0B1F35] mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
