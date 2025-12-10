import React from "react";
import { useParams } from "react-router";
import useProducts from "../hooks/useProducts";

import { FaStarHalfStroke } from "react-icons/fa6";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading,} = useProducts();
  const product = products.find((p) => p.id === parseInt(id));
  console.log(product);
  // const { name } = product;
  if (loading) return <span className="loading loading-ring loading-lg"></span>;
  const { name, image, category, description, rating, price, dimension } =
    product || {};
  const handleAddToWishList = () => {
    const existingList = JSON.parse(localStorage.getItem("wishlist"));
    let updatedList = [];

    if (existingList) {
      const alreadyAdded = existingList.find((item) => item.id === product.id);
      if (!alreadyAdded) {
        updatedList = [...existingList, product];
      } else {
        updatedList = existingList;
        alert("এই প্রোডাক্টটি আগেই wishlist এ আছে!");
      }
    } else {
      updatedList.push(product);
      alert("প্রোডাক্টটি প্রথমবার wishlist এ যোগ হলো ✅");
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    console.log(updatedList);
  };

  return (
    <div className="relative w-[60%] mx-auto p-3 mt-4 rounded-xl bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 animate-borderSpin hover:scale-105 transform ease-in-out ">
      <div className=" rounded-xl text-center card bg-base-100  shadow-sm">
        <figure>
          <img
            className=" h-[200px] w-full overflow-hidden "
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">Name : {name}</h2>
          <h2 className="text-start  text-3xl">Category : {category}</h2>
          <p className="text-2xl">{description}</p>
          <h2 className="card-title">Price : {price}$</h2>
          <div className="card-actions  flex justify-between">
            <div className="flex gap-4 items-center">
              <h1 className="flex items-center gap-2">
                {rating} <FaStarHalfStroke />
              </h1>
              <h1>Dimension :{dimension} </h1>
            </div>
            <button onClick={handleAddToWishList} className="btn btn-primary">
              Add To Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
