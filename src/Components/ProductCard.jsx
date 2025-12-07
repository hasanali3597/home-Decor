import React from "react";
import "../Css/CadrStyle.css"; // custom animation styles
import { Link } from "react-router";

const ProductCard = ({product}) => {
  const {image,name,description,price,id}=product
  return (
    <div className="relative p-[5px] h-[400px]  rounded-xl bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 animate-borderSpin hover:scale-105 transform ease-in-out ">
      <div className=" h-full  rounded-xl text-center card bg-base-100  shadow-sm">
        <figure>
          <img className="w-full h-[400px] overflow-hidden "
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
            <Link to={`/product/${id}`} className="btn btn-primary">View 
              Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;