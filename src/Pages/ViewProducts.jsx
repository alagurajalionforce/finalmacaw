import React from "react";
import { useLocation } from "react-router-dom";
import Interior from "../Images/Banners/Interior.png";
import Exterior from "../Images/Banners/Exterior.png";
import WoodMetal from "../Images/Banners/Wood & Metal.png";

const ViewProducts = () => {
  let productInfo = {
    interior: {
      title1: "World of",
      title2: "Interior Emulsion",
    },
  };

  let location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // Type of products are [interior, exterior, woodmetal]
  // use the product type to fetch the necessary information and render below
  const productType = queryParams.get("type");
  console.log(productType)

  return (
    <div className="flex flex-col">
      <div className="relative">
        <p className="absolute top-1/3 left-4  text-[#146AB0] font-light text-sm md:text-2xl lg:text-4xl xl:text-6xl">
          {productInfo[productType].title1}
        </p>
        <p className="absolute top-[55%] left-4  text-[#146AB0] font-bold text-sm md:text-2xl lg:text-4xl xl:text-6xl">
          {productInfo[productType].title2}
        </p>
        <img src={Interior} className="w-full" />
      </div>

      <div className="text-white text-xl h-[40vh]">Product List</div>
      <div>Product Details</div>
    </div>
  );
};

export default ViewProducts;
