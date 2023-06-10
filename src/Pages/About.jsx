import React from "react";
import AboutUsBanner from "../Images/Banners/AboutUs.png";
import AboutBird from "../Images/About Us/our-story-image.png";
import Vision from "../Images/About Us/vision.png";
import Mission from "../Images/About Us/mission.png";

function AboutUs() {
  const birdStyle = {
    clipPath: "polygon(0% 0%, 180% 28%, 100% 82%, 0% 100%)",
  };
  const textStyle = {
    clipPath: "polygon(0% 32%, 180% 0%, 100% 100%, 0% 90%)",
  };

  return (
    <div className="flex flex-col w-full">
      <img src={AboutUsBanner} />
      <div className="flex h-auto">
        {/* <div className="w-1/3 absolute top-[10.4rem] z-20">
          <div className="relative">
            <img src={AboutBird} style={birdStyle} className="block scale-125"  />
          </div>
        </div>
        <div className="w-4/6 absolute top-[6rem] right-0">
          <div className="relative">
            <p className="absolute right-0 top-0 bg-white text-[8px] p-8 h-56" style={textStyle}>
              Introducing Macaw Paints - a brand that stands out from the rest.
              Our dream is to decorate homes that exude success and boast
              "flying colors." We took that vision quite literally, and realized
              that every home deserves to flaunt a vibrant and eye-catching
              exterior. Thus, Macaw Paints was born - named after the
              illustriously colorful New World parrot. Our signature coat will
              make your home shine with vibrancy, reflecting your
              accomplishments and success to the world.
            </p>
          </div>
        </div> */}

        <div className="flex justify-center items-center mt-10 md:mt-32 flex-wrap">
          <div className="relative w-full bg-white m-12 rounded-xl md:p-10 md:w-2/6">
            <img
              src={Vision}
              className="absolute w-1/3 -top-[8%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></img>
            <h1 className="m-12 mb-6 text-center text-[#146AB0] md:text-xl md:m-2">Vision</h1>
            <p className="text-center w-10/12 md:w-full m-auto pb-8">
              To be the forefront of India's Paints industry, where we
              prioritize our values and innovate quality products and services
              that contribute to India's growth. At our company, we strive to
              make an impact and constantly push ourselves towards success.
            </p>
          </div>
          <div className="relative bg-white m-10 rounded-xl md:p-10 md:w-2/6">
            <img
              src={Mission}
              className="absolute  w-1/3 -top-[8%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></img>
            <h1 className="m-12 mb-6 text-center text-[#146AB0] md:text-xl md:m-2">Misson</h1>
            <p className="text-center w-10/12 md:w-full m-auto pb-8">
              Our mission is to earn the trust of our stakeholders by swiftly
              implementing dynamic initiatives that align with our core values
              and long-term vision. With our innovative paint solutions, we
              strive to bring joy and happiness to people's lives. Join us in
              delivering a splash of vibrant colors to the world!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
