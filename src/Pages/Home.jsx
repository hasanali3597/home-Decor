import React from "react";
import { useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1>home</h1>
      <div className="grid text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
