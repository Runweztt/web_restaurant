import React from "react";
import { motion } from "framer-motion";
import teamImg from "../assets/team_cleaning.jpg";
import happyClientImg from "../assets/happy_client.jpg";

const aboutHighlights = [
  {
    title: "Experienced & Reliable",
    desc: "We bring years of hands-on experience and a commitment to reliability, so you can count on us to get the job done right—every time.",
  },
  {
    title: "Eco-Friendly Products",
    desc: "We use non-toxic, eco-conscious cleaning products that are safe for your family, pets, and the environment.",
  },
  {
    title: "Customised Cleaning Plans",
    desc: "Whether it's a home, office, or rental space, we tailor our services to suit your unique needs and schedule.",
  },
  {
    title: "Trusted by Families & Businesses",
    desc: "Our growing list of happy clients is proof of our dedication to top-tier service and spotless results.",
  },
];

const coreValues = [
  "Integrity & Transparency",
  "Detail-Oriented Work",
  "Respect for Your Space",
  "Continual Improvement",
];

const About = () => {
  return (
    <section className="bg-white text-[#0B1F35]">
      {/* Header */}
      <div className="px-4 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Our Cleaning Team</h1>
        <p className="text-gray-600 text-lg">
          We’re more than just cleaners — we’re your trusted home and office hygiene partners.
        </p>
      </div>

      {/* Image & Story */}
      <div className="grid lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 mb-20">
        <motion.img
          src={teamImg}
          alt="Cleaning Team"
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
            It started with a simple belief: Everyone deserves a clean, peaceful environment. Over the
            years, we've grown into a full-service cleaning company built on quality, trust, and consistent results. Whether it’s your home or your workplace, we treat it like our own — with care, respect, and attention to detail.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-[#f9f9f9] py-20 px-6 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s what makes our cleaning service stand out from the rest.
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

      {/* Our Values */}
      <div className="py-20 px-6 lg:px-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Our Core Values</h2>
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

      {/* Happy Client Section */}
      <div className="bg-[#e8f5e9] py-20 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Satisfaction Guaranteed</h3>
            <p className="text-gray-700">
              We're confident in the quality of our work. If you're not 100% satisfied, we'll re-clean
              the area at no extra cost. That's our promise to you.
            </p>
          </motion.div>

          <motion.img
            src={happyClientImg}
            alt="Happy Client"
            className="rounded-xl shadow-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
