import "../App.css";
import CEOimg from "../Images/Team 1.png";
import "../Styles/Products.css";
import PaintSplione from "../Images/paint-spill-3 1.png";
import PaintSpliTwo from "../Images/paint-spill-4 1.png";
import OurStory from "../Images/ourStory.png";
import Aboutus from "../Images/aboutus.png";
import Mask from "../Images/Mask group (2).png";

import ppb1 from "../Images/ppb1.jpg";
import ppb2 from "../Images/ppb2.jpg";
import ppb3 from "../Images/ppb3.jpg";

import banner from "../Images/ProductBanner.png";
import { useNavigate } from "react-router-dom";
import React from "react";

function Products() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="relative">
        <p className="absolute origin-top-left top-[45%] left-[15%] md:left-[17%] xl:left-[13%] text-[#146AB0] font-light text-sm md:text-2xl lg:text-4xl xl:text-6xl">
          Products
        </p>
        <img src={banner} className="w-full bg-white" />
      </div>
      <div className="container flex flex-col items-center">
        <div
          className="mt-10 flex w-5/5 lg:w-4/5 h-36 md:h-52 lg:h-64 rounded-lg cursor-pointer"
          onClick={() => navigate("/viewproducts?type=interior")}
        >
          <img className="rounded-l-lg w-1/2 aspect-square" src={ppb1} />
          <div className="transition duration-500 ease-in-out pl-3 flex flex-col items-center justify-center w-1/2 bg-[#146AB0] rounded-l-none rounded-lg hover:bg-white border-[#146AB0] border-[5px] border-l-0 hover:text-[#146AB0] text-white">
            <div className="w-40 lg:w-56">
            <p className="text-xs lg:text-lg font-light">World of</p>
            <p className="text-sm lg:text-xl">Interior Emulsion</p>
            </div>
          </div>
        </div>
        <div 
          className="mt-10 flex w-5/5 lg:w-4/5 h-36 md:h-52 lg:h-64 rounded-lg cursor-pointer"
          onClick={() => navigate("/viewproducts?type=exterior")}
        >
          <div className="transition duration-500 ease-in-out pl-3 flex flex-col items-center justify-center w-1/2 bg-[#F6B218] rounded-r-none rounded-lg hover:bg-white border-[#F6B218] border-[5px] border-r-0 hover:text-[#F6B218] text-white">
            <div className="w-40 lg:w-56">
            <p className="text-xs lg:text-lg font-light">World of</p>
            <p className="text-sm lg:text-xl">Exterior Emulsion</p>
            </div>
          </div>
          <img className="rounded-r-lg w-1/2 aspect-square" src={ppb1} />
        </div>
        <div
          className="mt-10 flex w-5/5 lg:w-4/5 h-36 md:h-52 lg:h-64 rounded-lg cursor-pointer"
          onClick={() => navigate("/viewproducts?type=woodmetal")}
        >
          <img className="rounded-l-lg w-1/2 aspect-square" src={ppb1} />
          <div className="transition duration-500 ease-in-out pl-3 flex flex-col items-center justify-center w-1/2 bg-[#CC402B] rounded-l-none rounded-lg hover:bg-white border-[#CC402B] border-[5px] border-l-0 hover:text-[#CC402B] text-white">
            <div className="w-40 lg:w-56">
            <p className="text-xs lg:text-lg font-light">World of</p>
            <p className="text-sm lg:text-xl">Wood & Metal</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
    // <div>
    //   {/* aboutus baner start */}
    //   <section className="section-gap">
    //     <div className="w-100 about-us">
    //       <img className="w-100 mask-img bannerimg" src={banner} />
    //       <img className="w-100" src={Aboutus} />
    //       <p>Products</p>
    //     </div>
    //   </section>
    //   {/* aboutus baner end */}

    //   {/* our story start */}
    //   <section className="section-gap">
    //     <div className="d-flex container con1" onClick={()=>{
    //         navigate("/productsList")
    //     }}>
    //       <div className="ppcontainer">
    //         <div className="imgContainer">
    //           <img src={ppb1} />
    //         </div>
    //         <div className="TextContainer">
    //           <div>
    //             Products for <br /> your <b>Interior</b>
    //           </div>{' '}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="d-flex container con2">
    //       <div className="ppcontainer">
    //         <div className="TextContainer">
    //           <div>
    //             Products for <br /> your <b>Exterior</b>
    //           </div>{' '}
    //         </div>
    //         <div className="imgContainer">
    //           <img src={ppb2} />
    //         </div>
    //       </div>
    //     </div>
    //     <div className="d-flex container con3">
    //       <div className="ppcontainer">
    //         <div className="imgContainer">
    //           <img src={ppb3} />
    //         </div>
    //         <div className="TextContainer">
    //           <div>
    //             Products for <br /> <b>Wood & Metal</b>
    //           </div>{' '}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Products;
