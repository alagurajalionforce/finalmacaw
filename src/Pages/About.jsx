import React from "react";
import AboutUsBanner from "../Images/Banners/AboutUs.png";
import AboutBird from "../Images/About Us/our-story-image.png";
import Vision from "../Images/About Us/vision.png";
import Mission from "../Images/About Us/mission.png";
import AboutUsContent from "../Images/About Us/about_us_main.png";
import WingImage from "../Images/About Us/WingImage.png";
import "../Styles/About.css";

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
      {/* <div className="w-full flex mt-10">
        <div className="w-5/12 relative">
          <div className="w-full h-full overflow-hidden relative">
            <img src={WingImage} className="absolute -top-[27.5%] z-50 left-[9%]" />
            <img
              src={AboutBird}
              className="w-full h-full object-cover our-story-img-div"
              alt="About Bird"
            />
          </div>
        </div>
        <div className="w-[62%] bg-white flex justify-center items-center our-story-div absolute right-0 h-96">
          <div className="w-5/6">
            <p className="text-[#146AB0] text-3xl mb-5">Our Story</p>
            <p className="leading-6 text-sm">
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
        </div>
      </div> */}
      <div className="flex-col h-auto relative">
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

        <div className="w-full absolute -top-[4%] md:-top-[7%] lg:-top-[11%] xl:-top-[14%]">
          <img src={AboutUsContent} className="w-full"></img>
        </div>
        <div className="flex justify-center items-center mt-36 md:mt-80 lg:mt-96 flex-wrap xl:mt-[32rem] 2xl:mt-[42rem] ">
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
