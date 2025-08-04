import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import dish1 from "../assets/dish1.jpg";
import chefimg from "../assets/chef.jpg";
import diningimg from "../assets/dining.png";
import loungeimg from "../assets/lounge.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const menuItems = [
  {
    title: "English Breakfast",
    description: "Bacon, eggs, sausage, beans, toast & grilled tomato",
    price: "₦3,500",
    image: dish1,
    tag: "Classic",
  },
  {
    title: "Chef’s Special",
    description: "Handcrafted weekly special by our in-house chef",
    price: "₦5,000",
    image: chefimg,
    tag: "Signature",
  },
  {
    title: "Lounge Platter",
    description: "Wings, bites, and dips – perfect for groups",
    price: "₦4,000",
    image: loungeimg,
    tag: "Shareable",
  },
  {
    title: "Fine Dining Delight",
    description: "Three-course gourmet experience",
    price: "₦6,500",
    image: diningimg,
    tag: "Premium",
  },
  {
    title: "Spicy Jollof Bowl",
    description: "Fiery jollof rice with grilled chicken and fried plantain",
    price: "₦3,800",
    image: "https://source.unsplash.com/featured/?jollof,rice",
    tag: "Spicy",
  },
  {
    title: "Vegan Garden Salad",
    description: "Fresh greens, avocado, seeds, with zesty dressing",
    price: "₦2,500",
    image: "https://source.unsplash.com/featured/?salad,vegan",
    tag: "Vegan",
  },
  {
    title: "Fish & Chips",
    description: "Beer-battered cod served with fries & tartar sauce",
    price: "₦3,200",
    image: "https://source.unsplash.com/featured/?fish,chips",
    tag: "British",
  },
  {
    title: "Chicken Alfredo Pasta",
    description: "Creamy pasta with grilled chicken & parmesan",
    price: "₦4,200",
    image: "https://source.unsplash.com/featured/?pasta,chicken",
    tag: "Comfort",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/web_restaurant/booking");
  };

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#0B1F35] mb-4">Explore Our Menu</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Whether you’re dining in or ordering out, there’s something here for everyone.
        </p>
      </motion.div>

      {/* Menu Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {menuItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 1}
            className="bg-gray-50 rounded-2xl shadow hover:shadow-md transition p-4 flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-[#0B1F35]">{item.title}</h3>
            <p className="text-sm text-gray-600 mt-1 mb-2">{item.description}</p>
            <span className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-full text-gray-700 uppercase tracking-wide mb-3">
              {item.tag}
            </span>
            <span className="text-[#0B1F35] font-bold">{item.price}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={10}
      >
        <h3 className="text-2xl font-semibold text-[#0B1F35] mb-3">Hungry Yet?</h3>
        <p className="text-gray-600 mb-5">Reserve a table or order online – the choice is yours.</p>
        <button
          onClick={handleBookingClick}
          className="bg-[#0B1F35] text-white px-6 py-3 rounded hover:bg-opacity-90 transition"
        >
          Book a Table
        </button>
      </motion.div>
    </section>
  );
};

export default Menu;
