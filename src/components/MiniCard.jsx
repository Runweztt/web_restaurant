import React from 'react';
import bathimg from "../assets/bathroom.jpg";
import kitimg from "../assets/kitchen.jpg";
import sleepimg from "../assets/sleepingarea.jpg";
import livingimg from "../assets/livingarea.jpg";

const MiniCard = () => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Image Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-4 relative">
        {[ 
          { img: bathimg, label: "BATHROOMS" },
          { img: kitimg, label: "KITCHENS" },
          { img: livingimg, label: "LIVING AREAS" },
          { img: sleepimg, label: "SLEEPING AREAS" }
        ].map(({ img, label }, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img 
              src={img} 
              alt={label} 
              className="rounded shadow-md w-full h-44 object-cover" 
            />
            <span className="mt-2 font-semibold uppercase text-sm">{label}</span>
          </div>
        ))}

        {/* Optional: Center icon placeholder */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        
        </div>
      </div>

      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Keeping Your Home Cleaner With Our Detail-Clean Rotation System<sup className="text-sm align-super">®</sup>
        </h2>
        <p className="text-gray-700 mb-6">
          We use a careful system to deep clean each of your rooms on a rotating basis.
          This ensures your home is always thoroughly cleaned and sanitized, from the areas you use daily
          to that hard-to-clean grout!
        </p>
        <button className=" bg-primary text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          LEARN ABOUT OUR SYSTEM
        </button>
      </div>
    </section>
  );
};

export default MiniCard;
