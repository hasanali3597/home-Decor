import React, { useState, useEffect } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) {
      setWishlist(savedList);
    }
  }, []);

  // Remove handler
  const handleRemove = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    alert("প্রোডাক্টটি wishlist থেকে মুছে ফেলা হয়েছে ❌");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        📝 My Wishlist : {wishlist.length}{" "}
      </h2>

      {wishlist.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                className="w-full h-48 object-cover"
                src={product.image}
                alt={product.name}
              />
              <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-indigo-600 font-semibold">
                    ${product.price}
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition">
                    Buy Now
                  </button>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-4xl">Wishlist খালি আছে।</p>
      )}
    </div>
  );
};

export default Wishlist;
