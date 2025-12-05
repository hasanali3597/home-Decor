import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();
  return (
    <div>
      <div className="flex justify-between py-5 items-center ">
        <h1 className="text-2xl font-semibold">
          Feactured Producta : <span>{products.length}</span>
        </h1>
        <button className="btn btn-secondary">All Producta</button>
      </div>
      <div className="grid  text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
