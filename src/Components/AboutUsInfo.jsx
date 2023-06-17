import React from "react";
import AboutUsContent from "../Images/About Us/about_us_main.png";

import AboutBird from "../Images/About Us/our-story-image.png";
import WingImage from "../Images/About Us/WingImage.png";

function AboutUsInfo() {
  const birdStyle = {
    clipPath: "polygon(100% 14%, 100% 100%, 0% 100%, 0 14%)",
  };
  const textStyle = {
    clipPath: "polygon(91% 11%, 100% 90%, 0 100%, 0 0)",
  };

  return (
    <div className="">
      {/* Mobile Version */}
      <div className="visible bg-white pt-5 pb-5 lg:invisible">
        <div className="w-full flex">
          <div className="w-5/12 relative pb-4 ">
            <div className="w-full h-full overflow-hidden relative -left-6 ">
              <img
                src={WingImage}
                className="absolute -top-[27.5%] z-50 left-[9%]"
              />
              <img
                src={AboutBird}
                style={birdStyle}
                className="w-full h-full object-cover rounded-r-2xl "
                alt="About Bird"
              />
            </div>
          </div>
          <div
            className="w-[62%] bg-white flex justify-center items-center absolute right-0 "
          >
            <div className="w-5/6">
              <p className="text-[#146AB0] text-xs md:text-base mb-1 md:mb-3">Our Story</p>
              <p className="leading-3 text-[8px] md:text-sm">
                Introducing Macaw Paints - a brand that stands out from the
                rest. Our dream is to decorate homes that exude success and
                boast "flying colors." We took that vision quite literally, and
                realized that every home deserves to flaunt a vibrant and
                eye-catching exterior. Thus, Macaw Paints was born - named after
                the illustriously colorful New World parrot. Our signature coat
                will make your home shine with vibrancy, reflecting your
                accomplishments and success to the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop Version */}
      <div className="invisible lg:visible w-full absolute -top-[4%] md:-top-[7%] lg:-top-[11%] xl:-top-[14%]">
        <img src={AboutUsContent} className="w-full"></img>
      </div>
      ;
    </div>
  );
}

export default AboutUsInfo;
