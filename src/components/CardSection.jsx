import React from "react";
import { motion } from "framer-motion";
import { FaUtensils, FaConciergeBell, FaLeaf, FaWineGlassAlt } from "react-icons/fa";

const services = [
  {
    title: "Dine-In Experience",
    description: "Enjoy a premium dining experience in our warm and elegant space.",
    icon: <FaUtensils className="text-white text-2xl" />,
    bg: "bg-[#0B1F35]", // your brand color
  },
  {
    title: "Fast Delivery",
    description: "Delicious meals delivered to your doorstep — fresh and on time.",
    icon: <FaConciergeBell className="text-white text-2xl" />,
    bg: "bg-yellow-500",
  },
  {
    title: "Healthy Options",
    description: "Nutritious and tasty dishes made with fresh, organic ingredients.",
    icon: <FaLeaf className="text-white text-2xl" />,
    bg: "bg-green-600",
  },
  {
    title: "Beverages & Wine",
    description: "Explore a curated selection of wines and handcrafted drinks.",
    icon: <FaWineGlassAlt className="text-white text-2xl" />,
    bg: "bg-red-500",
  },
];

const CardSection = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F35] mb-4">
          What We Offer
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          From fresh dishes to fine drinks — we’re redefining your dining experience.
        </p>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#f9f9f9] p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
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
