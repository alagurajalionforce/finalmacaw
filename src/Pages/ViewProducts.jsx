import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ArrowLeft from "../Images/arrow-left-solid.svg";

import Interior from "../Images/Banners/Interior.png";
import Exterior from "../Images/Banners/Exterior.png";
import WoodMetal from "../Images/Banners/Wood & Metal.png";

import AuraPrimeSmall from "../Images/PaintBuckets/Interior - Aura Prime Luxury Interior Emulsion Small.png";

import RedBird from "../Images/Birds/red_bird.png";
import YellowBird from "../Images/Birds/yellow_bird.png";

import CrackBridging from "../Images/Features/crack_bridging.png";
import TwoinOne from "../Images/Features/2in1.png";
import Coverage from "../Images/Features/coverage.png";

//Imports of Splashes

import Splash1 from "../Images/InteriorProducts/Splash/Splash1.png";
import Splash2 from "../Images/InteriorProducts/Splash/Splash 2.png";
import Splash3 from "../Images/InteriorProducts/Splash/Splash 3.png";
import Splash4 from "../Images/InteriorProducts/Splash/Splash 4.png";
import Splash5 from "../Images/InteriorProducts/Splash/Splash 5.png";
import Splash6 from "../Images/InteriorProducts/Splash/Splash 6.png";

//Imports of bucket images

import Bucket1 from "../Images/PaintBuckets/Interior - Undercoat – Amendo and Dura Fill interior primer Small.png";
import Bucket2 from "../Images/PaintBuckets/Interior - Acrylic Putty Small.png";
import Bucket3 from "../Images/PaintBuckets/Interior - Aura Prime Luxury Interior Emulsion Small.png";
import Bucket4 from "../Images/PaintBuckets/Interior - Swoosh Luxury Emulsion Small.png";
import Bucket5 from "../Images/PaintBuckets/Interior - Chromagic  Premium Emulsion Small.png";
import Bucket6 from "../Images/PaintBuckets/Interior - Dura smooth Emulsion Small.png";

const ViewProducts = () => {
  const [productType, setProductType] = useState("interior");
  const [activeIndex, setActiveIndex] = useState(0);

  const bucketInfo = {
    interior: [
      {
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
      },
      {
        splash: Splash2,
        bucket: Bucket2,
        description: "Acrylic Putty",
        activeTextColor: "#475A1D",
        activeBgColor: "#E5FFAD",
      },
      {
        splash: Splash3,
        bucket: Bucket3,
        description: "Aura Prime Luxury Interior Emulsion",
        activeTextColor: "#731415",
        activeBgColor: "#F9C0C0",
      },
      {
        splash: Splash4,
        bucket: Bucket4,
        description: "Swoosh Luxury Emulsion",
        activeTextColor: "#6D0C2C",
        activeBgColor: "#FFCFDF",
      },
      {
        splash: Splash5,
        bucket: Bucket5,
        description: "Chromagic Premium Emulsion",
        activeTextColor: "#661FC1",
        activeBgColor: "#FCE2FF",
      },
      {
        splash: Splash6,
        bucket: Bucket6,
        description: "Dura Smooth Emulsion",
        activeTextColor: "#855E07",
        activeBgColor: "#FFEDC3",
      },
    ],
  };

  const productInfo = {
    interior: {
      title1: "World of",
      title2: "Interior Emulsion",
      banner: Interior,
      products: [
        {
          paint_name: "Interior Undercoat",
          paint_subheading:
            "Amendo and Dura Fill interior primer (Premium & Economy quality)",
          paint_description:
            "Achieve the perfect interior finish with two of our best undercoats - Amendo and Dura Fill. Whether you're after a premium quality primer for unbeatable coverage, or an economical option that won't break the bank, both products provide excellent adhesion strength to ensure your walls look as good in years to come as they do now. Find everything you need for all your interior painting projects here!",
          background_color: "#B9D2E7",
          font_color: "#0D3E66",
          accent_color: "#146AB0",
          image: Bucket1,
          bird: YellowBird,
        },
        {
          paint_name: "Acrylic Putty",
          paint_subheading: "Flexi strong acrylic wall putty",
          paint_description:
            "Looking for a quick and effortless way to say goodbye to those pesky wall cracks? Flexi is the perfect solution! Its powerful acrylic formula effectively fills in surface imperfections with ease, resulting in walls that look as good (if not better!) than before. It adheres quickly and dries evenly so your new paint job will have you admiring your handiwork from start to finish! Get ready - it’s time for spectacular transformations with Flexi.",
          background_color: "#E5FFAD",
          font_color: "#475A1D",
          accent_color: "#0DB14B",
          image: Bucket2,
          bird: YellowBird,
        },
        {
          paint_name: "Aura Prime Luxury Interior Emulsion",
          paint_subheading: "",
          paint_description:
            "Transform any wall into a luxurious retreat. Aura Prime promises to make your interior walls stand out with its distinctive atmosphere, silk-style finish and reflective glow. Our stain resistance technology uses imported materials that shield paint from unwanted marks while improving the touchability of each layer for an incomparable experience in style and longevity. With carefully chosen molecules designed to be highly consistent, our innovative formula gives you superb results right down to every last detail!",
          background_color: "#F9C0C0",
          font_color: "#731415",
          accent_color: "#E82B2D",
          image: Bucket3,
          bird: YellowBird,
        },
        {
          paint_name: "Swoosh Luxury Emulsion",
          paint_subheading: "Most cleanest paint -Luxury category",
          paint_description:
            "Enjoy a pristine look for your home with Swoosh’s Luxury Interior Emulsion. This quick and easy washable paint provides deep clean walls free from dirt and stains, plus an unmatched smoothness that you can feel every time you touch it! Its advanced micro cross linking technology ensures the polymers in the paint react on a microscopic level – giving you reliable stain-washability all day long. Experience something truly special today; choose Swoosh luxury interior emulsion!",
          background_color: "#FFCFDF",
          font_color: "#6D0C2C",
          accent_color: "#DE618B",
          image: Bucket4,
          bird: YellowBird,
        },
        {
          paint_name: "Chromagic Premium Emulsion",
          paint_subheading: "Medium Quality",
          paint_description:
            "Chromagic Premium Interior Emulsion gives you the harmony of both a perfectly finished and aesthetically pleasing look in less time. Its powerful hiding power ensures that any imperfections on your wall will be completely concealed – giving it an exquisite, even finish. Dry times are also drastically reduced with this product, saving valuable painter’s hours to help projects stay within budgeted timelines!",
          background_color: "#FCE2FF",
          font_color: "#661FC1",
          accent_color: "#9747FF",
          image: Bucket5,
          bird: YellowBird,
        },
        {
          paint_name: "Dura Smooth Emulsion",
          paint_subheading:
            "Economy quality",
          paint_description:
            "Tired of having to repaint your walls every few months? With Dura Smooth's Interior Emulsion, you can forget that problem! This easy-to-apply product features fast drying times and a longer life span than traditional distemper or cement paint. Not only is it more effective in terms of coverage but also boasts anti-fungal properties to protect against bacteria growth - perfect for those who are investing long term into their interior design schemes.",
          background_color: "#FFEDC3",
          font_color: "#855E07",
          accent_color: "#F6B218",
          image: Bucket6,
          bird: YellowBird,
        },
      ],
    },
  };

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setProductType(queryParams.get("type"));
  }, [location]);

  return (
    <>
      <div className="flex flex-col">
        <div className="relative">
          <p className="absolute top-1/3 left-4  text-[#146AB0] font-light text-sm md:text-2xl lg:text-4xl">
            {productInfo[productType].title1}
          </p>
          <p className="absolute top-[55%] left-4  text-[#146AB0] font-bold text-sm md:text-2xl lg:text-4xl">
            {productInfo[productType].title2}
          </p>
          <img src={productInfo[productType].banner} className="w-full" />
        </div>

        <div className="container">
          <p
            className="text-white text-md lg:text-lg xl:text-xl hover:text-[#F6B218] hover:cursor-pointer mt-10"
            onClick={() => {
              navigate("/Products");
            }}
          >
            &larr; Products
          </p>
          <div className="flex w-full overflow-auto space-x-20 scrollbar-hide">
            {bucketInfo[productType].map((info, index) => (
              <div
                className={`ml-10 relative mt-28 w-48 flex-shrink-0 p-3 rounded-lg`}
                key={index}
                style={{
                  backgroundColor: activeIndex === index && info.activeBgColor,
                }}
              >
                <img
                  src={info.splash}
                  className={`w-32 absolute origin-top top-[-38%] right-[27%] ${
                    activeIndex !== index && "hidden"
                  } `}
                />
                <img
                  src={info.bucket}
                  className="cursor-pointer"
                  onClick={() => {
                    setActiveIndex(index);
                  }}
                />
                <p
                  className={`text-center text-xs`}
                  style={{
                    color:
                      activeIndex === index ? info.activeTextColor : "white",
                  }}
                >
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className=" border-2 border-b-slate-50 rounded-full w-10/12 mb-4 "></div>

          <div
            className={`mt-12 p-6 mb-10 w-9/12 rounded-lg pb-16 text-center`}
            style={{
              backgroundColor:
                productInfo[productType].products[activeIndex].background_color,
            }}
          >
            <div className="md:relative xl:h-96">
              {/* Image Here */}
              {/* Bird and Paint Bucket Image - position is absolute */}
              <div className="relative h-52 xl:h-full md:h-60">
                {/* Bird */}
                <img
                  src={productInfo[productType].products[activeIndex].bird}
                  className="absolute w-1/2 scale-x-[-1.25] scale-125 origin-top -left-1/4 -top-[18%] xl:scale-x-[-0.50] xl:scale-50 xl:-left-1/4 xl:-top-16 md:scale-x-[-0.50] md:scale-50 md:-left-1/4 md:-top-12"
                />
                {/* Bucket */}
                <img
                  src={productInfo[productType].products[activeIndex].image}
                  className="w-full absolute scale-100 -left-1 md:scale-x-[40%] md:scale-y-[40%] md:origin-top-left md:top-3 "
                ></img>
              </div>
              {/* Heading and Subheading */}
              <div className="flex flex-col md:items-center md:justify-center md:w-2/3  md:top-14 md:right-0 md:absolute md:origin-top-right lg:top-24 xl:1/3 xl:h-96 xl:top-0 xl:right-16 xl:w-1/2 xl:text-center xl:items-start">
                <h1
                  className={`text-xl font-boldtext-center xl:text-4xl wrap xl:text-start`}
                  style={{
                    color:
                      productInfo[productType].products[activeIndex].font_color,
                  }}
                >
                  {productInfo[productType].products[activeIndex].paint_name}
                </h1>
                <p
                  className={`text-xs pt-2 text-center xl:text-start xl:text-base xl:mt-2`}
                  style={{
                    color:
                      productInfo[productType].products[activeIndex].font_color,
                  }}
                >
                  {
                    productInfo[productType].products[activeIndex]
                      .paint_subheading
                  }
                </p>
              </div>
            </div>

            {/* Paint Description */}
            <p
              className={`text-xs text-center w-full pt-8 md:p-4 md:pt-0 xl:text-lg xl:w-10/12 xl:mx-auto xl:mt-0`}
              style={{
                color:
                  productInfo[productType].products[activeIndex].font_color,
              }}
            >
              Achieve the perfect interior finish with two of our best
              undercoats - Amendo and Dura Fill. Whether you're after a premium
              quality primer for unbeatable coverage, or an economical option
              that won't break the bank, both products provide excellent
              adhesion strength to ensure your walls look as good in years to
              come as they do now. Find everything you need for all your
              interior painting projects here!
            </p>

            {/* Features */}
            <div>
              <p
                className={`text-lg text-center pt-8 mb-6 xl:pt-0 xl:text-2xl xl:pb-8 xl:mt-10`}
                style={{
                  color:
                    productInfo[productType].products[activeIndex].font_color,
                }}
              >
                Features
              </p>

              <div className="flex flex-wrap justify-center gap-8 lg:gap-32 xl:gap-48">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-20 w-20 rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                    style={{
                      backgroundColor:
                        productInfo[productType].products[activeIndex]
                          .accent_color,
                    }}
                  >
                    <img src={CrackBridging} className="w-10 xl:w-16"></img>
                  </div>
                  <p
                    className={`text-xs text-center pt-2 xl:text-base`}
                    style={{
                      color:
                        productInfo[productType].products[activeIndex]
                          .font_color,
                    }}
                  >
                    Crack Bridging
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-20 w-20 rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                    style={{
                      backgroundColor:
                        productInfo[productType].products[activeIndex]
                          .accent_color,
                    }}
                  >
                    <img src={TwoinOne} className=" w-10 xl:w-16"></img>
                  </div>
                  <p
                    className={`text-xs text-center pt-2 xl:text-base`}
                    style={{
                      color:
                        productInfo[productType].products[activeIndex]
                          .font_color,
                    }}
                  >
                    2-IN-1 Emulsion
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-20 w-20 rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                    style={{
                      backgroundColor:
                        productInfo[productType].products[activeIndex]
                          .accent_color,
                    }}
                  >
                    <img src={Coverage} className=" w-8 xl:w-16"></img>
                  </div>
                  <p
                    className={`text-xs text-center pt-2 xl:text-base`}
                    style={{
                      color:
                        productInfo[productType].products[activeIndex]
                          .font_color,
                    }}
                  >
                    Excellent Coverage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
