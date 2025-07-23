import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Rootlayout = () => {
  return (
    <div className="min-h-screen flex-grow w-full max-w-8xl mx-auto px-4">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
