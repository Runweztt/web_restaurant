import React from "react";
import { motion } from "framer-motion";
import breakfastImg from "../assets/breakfast.jpg";
import lunchImg from "../assets/lunch.jpg";
import dinnerImg from "../assets/dinner.jpg";
import dessertImg from "../assets/dessert.jpg";
import { useNavigate } from "react-router-dom";


const menuCategories = [
  { id: "breakfast", title: "Breakfast", img: breakfastImg },
  { id: "lunch", title: "Lunch", img: lunchImg },
  { id: "dinner", title: "Dinner", img: dinnerImg },
  { id: "dessert", title: "Dessert", img: dessertImg },
];

const MiniBookingSection = () => {
  const navigate = useNavigate();

  const handleNavigate = (categoryId) => {
    navigate(`/menu/${categoryId}`);
  };

  return (
    <div className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-8xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-[#0B1F35]">Book a Table</h2>
        <p className="text-gray-600 mt-2">
          Explore our menu by category and reserve your experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {menuCategories.map((category, idx) => (
          <motion.div
            key={idx}
            onClick={() => handleNavigate(category.id)}
            className="cursor-pointer group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-66 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="bg-white py-4 px-3 text-center">
                <h3 className="text-base font-semibold text-[#0B1F35]">
                  {category.title}
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
