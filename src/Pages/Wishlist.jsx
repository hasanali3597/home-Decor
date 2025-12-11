import React, { useState,} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { loadWishlist } from "../utils/localStorage";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState(()=>loadWishlist());
  const [sortOrder, setSortOrder] = useState("default");

  // useEffect(() => {
  //   const savedList = JSON.parse(localStorage.getItem("wishlist"));
  //   if (savedList) {
  //     setWishlist(savedList);
  //   }
  // }, []);

  const handleRemove = (id) => {
    const updatedList = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedList);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    alert("প্রোডাক্টটি wishlist থেকে মুছে ফেলা হয়েছে ❌");
  };

  // Sorting logic
  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    if (sortOrder === "name-asc") return a.name.localeCompare(b.name);
    if (sortOrder === "name-desc") return b.name.localeCompare(a.name);
    return 0;
  });

  // Category-wise totals
  const totalsByCategory = {};
  wishlist.forEach((product) => {
    const category = product.category;
    totalsByCategory[category] =
      (totalsByCategory[category] || 0) + product.price;
  });

  const chartData = Object.keys(totalsByCategory).map((category) => ({
    category,
    totale: totalsByCategory[category],
  }));

  // Custom colors for categories
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#00C49F"];

  return (
    <div className="flex flex-col  min-h-screen px-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-4">
          📝 My Wishlist :{" "}
          <span className="text-xl font-normal">( {wishlist.length} )</span>
        </h2>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-primary"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A → Z</option>
          <option value="name-desc">Name: Z → A</option>
        </select>
      </div>

      {wishlist.length > 0 ? (
        <>
          {/* Wishlist Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {sortedWishlist.map((product) => (
              <div
                key={product.id}
                className="max-w-sm mx-auto rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow duration-300"
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
                    <button className="flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium transform transition-transform hover:scale-105">
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="flex-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium animate-gradient-x transition-transform transform hover:scale-105"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="w-full h-64 mt-10">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totale">
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center text-4xl">Wishlist খালি আছে।</p>
      )}
    </div>
  );
};

export default Wishlist;
