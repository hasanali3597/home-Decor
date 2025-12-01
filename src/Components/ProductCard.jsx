import React from "react";
import "../Css/CadrStyle.css"; // custom animation styles

const ProductCard = ({product}) => {
  const {image,name,description,price}=product
  return (
    <div className="relative p-[5px] rounded-xl bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 animate-borderSpin">
      <div className="   rounded-xl text-center card bg-base-100  shadow-sm">
        <figure>
          <img className="w-full h-full"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {
                name
            }
          </h2>
          <p>
           {description}
          </p>
          <h2 className="card-title">
            Price : {
                price
            }$
          </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;