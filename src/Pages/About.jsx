import React from "react";
import AboutUsBanner from "../Images/Banners/AboutUs.png";
import Vision from "../Images/About Us/vision.png";
import Mission from "../Images/About Us/mission.png";

import "../Styles/About.css";
import AboutUsInfo from "../Components/AboutUsInfo";
import StartJourneyButton from "../Components/StartJourneyButton";

function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      <StartJourneyButton />
      <img src={AboutUsBanner} />
      <div className="flex-col h-auto relative">
        <AboutUsInfo />
        <div className="flex justify-center items-center mt-0 md:mt-64 lg:mt-[28rem] flex-wrap xl:mt--[40rem] 2xl:mt-[42rem] ">
          <div className="relative w-full bg-white m-12 rounded-xl md:p-8 md:w-2/6 md:h-80 lg:h-96 lg:p-10 xl:h-[28rem] 2xl:h-[26rem] ">
            <img
              src={Vision}
              className="absolute w-1/5 md:w-1/3 -top-[3%]  md:-top[5%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:w-32 md:-top-[2%]"
            ></img>
            <h1 className="m-6 mt-10 mb-4 text-lg text-center text-[#146AB0] md:text-xl md:m-2 lg:text-2xl xl:text-4xl xl:pt-8 ">
              Vision
            </h1>
            <p className="text-center text-xs leading-5 w-10/12 md:w-full m-auto pb-8 xl:mt-10 xl:leading-7 lg:text-sm lg:leading-6 lg:pt-2 xl:text-lg xl:pt-0">
              To be the forefront of India's Paints industry, where we
              prioritize our values and innovate quality products and services
              that contribute to India's growth. At our company, we strive to
              make an impact and constantly push ourselves towards success.
            </p>
          </div>
          <div className="relative bg-white m-10 rounded-xl md:p-8 md:w-2/6 md:h-80 lg:h-96 lg:p-10 xl:h-[28rem] 2xl:h-[26rem]">
            <img
              src={Mission}
              className="absolute w-1/5 md:w-1/3 -top-[3%]  md:-top[5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:w-32 md:-top-[2%]"
            ></img>
            <h1 className="m-6 mt-10 mb-4 text-lg text-center text-[#146AB0] md:text-xl md:m-2 lg:text-2xl xl:text-4xl xl:pt-8">
              Misson
            </h1>
            <p className="text-center text-xs leading-5 w-10/12 md:w-full m-auto pb-8 xl:mt-10 xl:leading-7 lg:text-sm lg:leading-6 lg:pt-2 xl:text-lg xl:pt-0">
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
