import React, { useState } from "react";
import "../Styles/Home.css";
import LivingRoom from "../Images/Home/Macaw-living-room 1.png";
import MacawLogo from "../Images/Home/Macaw-Logo-masked 2.png";
import AboutUs from "../Images/About Us/about_us_main.png";

function Products() {
  const [width, setWidth] = useState(0);

  const handleWidth = (e) => {
    setWidth(e.target.value);
    if (e?.target?.value < 50) {
      setWidth(0);
    } else {
      setWidth(100);
    }
  };

  return (
    <div>
      <img
        src={LivingRoom}
        className="absolute top-0 -z-50 w-full"
        alt="Living Room"
        style={{
          filter: `grayscale(${100 - width}%)`,
        }}
      />
      <div className="ml-44 mt-32 space-y-3">
        <p className="text-white text-5xl">Add</p>
        <img src={MacawLogo} className="h-16" />
        <p className="text-white text-5xl">to your</p>
        <p className="text-white text-7xl">life</p>
        <div className="slider">
          <input
            type="range"
            onChange={(e) => {
              setWidth(e?.target?.value);
            }}
            onMouseUp={(e) => {
              handleWidth(e);
            }}
            value={width}
          />
          <div className="slide-close-con">
            <div className="slider-close" style={{ width: `${width}%` }}></div>
          </div>
        </div>
      </div>
      <img src={AboutUs} className="w-full mt-52" />
    </div>
  );
}

export default Products;
