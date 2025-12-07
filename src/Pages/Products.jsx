import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();
  const [search, setSearch] = useState("");

  const tram = search.trim().toLocaleLowerCase();
  const searchProductas = tram
    ? products.filter((product) =>
        product.name.toLocaleLowerCase().includes(tram)
      )
    : products;
  console.log(searchProductas);
  return (
    <div>
      <div className="flex justify-between py-5 items-center ">
        <h1 className="text-2xl font-semibold">
          Feactured Producta : <span>{searchProductas.length}</span>
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>
      <div className="grid  text-center md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchProductas.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
