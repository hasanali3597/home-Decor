import React from "react";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();
  const feacturedProducta = products.slice(0, 6);
  const data = useProducts();
  console.log(data);
  return (
    <div className="">
      <div className="flex justify-between py-5 items-center ">
        <h1 className="text-2xl font-semibold">Feactured Producta</h1>
        <Link to="/products" className="btn btn-secondary">
          See All Producta
        </Link>
      </div>
      <div className="grid  text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {feacturedProducta.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center mt-6 ">
        <Link
          to="/products"
          className="btn btn-primary w-40 text-2xl hover:bg-amber-200 hover:text-red-500"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default Home;
