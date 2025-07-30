import React from "react";
import { motion } from "framer-motion";
import teamImg from "../assets/restaurant_team.jpg";
import happyClientImg from "../assets/happy_diner.jpg";
import MiniCard from "../components/MiniCard";

const aboutHighlights = [
  {
    title: "Locally Sourced Ingredients",
    desc: "We partner with trusted UK farmers and producers to ensure our meals are fresh, seasonal, and sustainable.",
  },
  {
    title: "Authentic British Cuisine",
    desc: "From full English breakfasts to Sunday roasts, our menu celebrates the heart of British food culture.",
  },
  {
    title: "Warm & Welcoming Atmosphere",
    desc: "Whether it’s a family brunch or a romantic dinner, our restaurant offers a cosy and inviting setting for every occasion.",
  },
  {
    title: "Loved by Locals & Visitors",
    desc: "Our regulars know — it’s not just the food that brings people back, it’s the experience we serve with it.",
  },
];

const coreValues = [
  "Hospitality with Heart",
  "Sustainable Practices",
  "Quality Above All",
  "Community First",
];

const About = () => {
  return (
    <section className="bg-white text-[#0B1F35]">
      {/* Header */}
      <div className="px-4 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Our Restaurant</h1>
        <p className="text-gray-600 text-lg">
          Serving hearty meals, warm memories, and true British hospitality.
        </p>
      </div>

      {/* Team Image & Our Story */}
      <div className="grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 mb-20">
        <motion.img
          src={teamImg}
          alt="Our Restaurant Team"
          className="rounded-xl shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            We began with a single vision: to bring comfort, flavour, and British tradition to every plate.
            Over the years, our passion for food and community has turned us into a local favourite. Every dish
            is prepared with love, and every guest is welcomed like family.
          </p>
        </motion.div>
      </div>

      {/* Highlights */}
      <div className="bg-[#f9f9f9] py-20 px-6 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Dine With Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A few reasons why we're more than just another restaurant on the high street.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {aboutHighlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">What We Stand For</h2>
        <ul className="text-gray-700 space-y-2 max-w-lg mx-auto">
          {coreValues.map((val, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-sm"
            >
              • {val}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Optional: Call to action or Happy Diner Image */}
      <div className="px-6 lg:px-20 pb-20 text-center">
        <motion.img
          src={happyClientImg}
          alt="Happy Diner"
          className="mx-auto rounded-xl shadow-md max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
        <p className="mt-6 text-gray-600 text-sm">
          Every smile we serve is a reminder of why we do what we do.
        </p>
      </div>

    </section>
  );
};

export default About;
