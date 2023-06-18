import React from "react";
import AboutUsContent from "../Images/About Us/about_us_main.png";
import AboutBirdCopy from "../Images/About Us/our-story-image copy.png";
import WingImage from "../Images/About Us/WingImage.png";

function AboutUsInfo(props) {
  return (
    <div>
      {/* Mobile Version */}
      <div className="flex bg-white md:hidden">
        <div className="w-5/12 p-3 pl-0">
          <div className="rounded-xl mt-7 relative">
            <img src={WingImage} className="absolute -top-[50%] left-[10%]" />
            <img
              src={AboutBirdCopy}
              className="rounded-tr-lg rounded-br-lg"
              alt="About Bird"
            />
          </div>
        </div>
        <div className="w-7/12 p-3">
          <p className="text-[#146AB0] text-xs md:text-base mb-1 md:mb-3">
            Our Story
          </p>
          <p className="leading-3 text-[8px] md:text-sm text-justify">
            Introducing Macaw Paints - a brand that stands out from the rest.
            Our dream is to decorate homes that exude success and boast "flying
            colors." We took that vision quite literally, and realized that
            every home deserves to flaunt a vibrant and eye-catching exterior.
            Thus, Macaw Paints was born - named after the illustriously colorful
            New World parrot. Our signature coat will make your home shine with
            vibrancy, reflecting your accomplishments and success to the world.
          </p>
        </div>
      </div>
      {/* Laptop Version */}
      {!props.mdNotVisible && (
        <div className="hidden md:block w-full absolute -top-[4%] md:-top-[12%] lg:-top-[8%] xl:-top-[10%]">
          <img src={AboutUsContent} className="w-full"></img>
        </div>
      )}
      ;
    </div>
  );
}

export default AboutUsInfo;
