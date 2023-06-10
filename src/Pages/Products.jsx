import "../App.css";
import "../Styles/Products.css";

import ppb1 from "../Images/Banners/Interior (2).png";
import ppb2 from "../Images/Banners/Exterior (2).png";
import ppb3 from "../Images/Banners/Wood & Metal (2).png";

import banner from "../Images/Banners/Products.png";
import { useNavigate } from "react-router-dom";
import React from "react";

function Products() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="relative">
        <img src={banner} />
      </div>
      <div className="container flex flex-col items-center mb-10">
        <div
          className="mt-10 flex w-5/5 lg:w-4/5 h-36 md:h-52 lg:h-64 rounded-lg cursor-pointer"
          onClick={() => navigate("/viewproducts?type=interior")}
        >
          <img className="rounded-l-lg w-1/2 aspect-square" src={ppb1} />
          <div className="transition duration-500 ease-in-out pl-3 flex flex-col items-center justify-center w-1/2 bg-[#146AB0] rounded-l-none rounded-lg hover:bg-white border-[#146AB0] border-[5px] border-l-0 hover:text-[#146AB0] text-white">
            <div className="w-40 xl:w-96">
            <p className="text-xs md:text-lg lg:text-xl xl:text-3xl font-light mb-3">World of</p>
            <p className="text-sm md:text-xl lg:text-2xl xl:text-4xl">Interior Emulsion</p>
            </div>
          </div>
        </div>
        <div 
          className="mt-10 flex w-5/5 lg:w-4/5 h-36 md:h-52 lg:h-64 rounded-lg cursor-pointer"
          onClick={() => navigate("/viewproducts?type=exterior")}
        >
          <div className="transition duration-500 ease-in-out pl-3 flex flex-col items-center justify-center w-1/2 bg-[#F6B218] rounded-r-none rounded-lg hover:bg-white border-[#F6B218] border-[5px] border-r-0 hover:text-[#F6B218] text-white">
            <div className="w-40 lg:80 xl:w-96">
            <p className="text-xs md:text-lg lg:text-xl xl:text-3xl font-light mb-3">World of</p>
            <p className="text-sm md:text-xl lg:text-2xl xl:text-4xl">Exterior Emulsion</p>
            </div>
          </div>
          <img className="rounded-r-lg w-1/2 aspect-square" src={ppb2} />
        </div>
        <div
          className="mt-10 flex w-5/5 lg:w-4/5 h-36 md:h-52 lg:h-64 rounded-lg cursor-pointer"
          onClick={() => navigate("/viewproducts?type=woodmetal")}
        >
          <img className="rounded-l-lg w-1/2 aspect-square" src={ppb3} />
          <div className="transition duration-500 ease-in-out pl-3 flex flex-col items-center justify-center w-1/2 bg-[#CC402B] rounded-l-none rounded-lg hover:bg-white border-[#CC402B] border-[5px] border-l-0 hover:text-[#CC402B] text-white">
            <div className="w-40 xl:w-96">
            <p className="text-xs md:text-lg lg:text-xl xl:text-3xl font-light mb-3">World of</p>
            <p className="text-sm md:text-xl lg:text-2xl xl:text-4xl">Wood & Metal</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;
