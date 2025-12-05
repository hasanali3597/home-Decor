import React from "react";

const Wishlist = () => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        className="w-full h-full object-cover"
        src="https://i.ibb.co.com/VpVsy9xQ/Whats-App-Image-2025-09-14-at-14-00-57-808958cb.jpg"
        alt=""
      />

      {/* Card Body */}
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800"></h2>
        <p className="text-sm text-gray-600 mt-1"></p>

        {/* Price + Stock */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-indigo-600 font-semibold">$1200</span>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition">
            Buy Now
          </button>
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
