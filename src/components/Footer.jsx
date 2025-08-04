import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Tagline */}
        <div>
          <img src="/logo.png" alt="restaurant logo" className="w-32 mb-4" />
          <p className="text-sm leading-relaxed">
            Serving the finest English cuisine with a modern twist.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/menu" className="hover:underline">Menu</a></li>
            <li><a href="/booking" className="hover:underline">Book a Table</a></li>
            <li><a href="/#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: reservations@foodle.com</p>
          <p className="text-sm">Phone: +234 810 123 4567</p>
          <p className="text-sm">Address: 14 Innovation Way, Lagos, NG</p>
        </div>

        {/* Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="hover:text-white" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="hover:text-white" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-white" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Foodle Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
