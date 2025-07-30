import React from 'react';
import { motion } from 'framer-motion';
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

const MiniCard = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Image Grid */}
      <motion.div 
        className="grid grid-cols-2 grid-rows-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0.2}
      >
        {[ 
          { img: dish1, label: "SIGNATURE DISH" },
          { img: chefimg, label: "OUR CHEF" },
          { img: diningimg, label: "DINING AREA" },
          { img: loungeimg, label: "LOUNGE" }
        ].map(({ img, label }, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center"
            variants={fadeIn}
            custom={idx + 1}
          >
            <img 
              src={img} 
              alt={label} 
              className="rounded shadow-md w-full h-44 object-cover" 
            />
            <span className="mt-2 font-semibold uppercase text-sm text-[#0B1F35]">{label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Text Content */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
      >
        <h2 className="text-3xl font-semibold text-[#0B1F35] mb-4">
          Discover the Flavours, the Space, and the Experience
        </h2>
        <p className="text-gray-700 mb-6">
          From our carefully curated dishes to our inviting interiors, we’re more than just a restaurant — 
          we’re a destination. Let your senses indulge in the taste, aroma, and ambiance of every visit.
        </p>
        <button className="bg-[#0B1F35] text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
          EXPLORE OUR STORY
        </button>
      </motion.div>
    </section>
  );
};

export default MiniCard;
