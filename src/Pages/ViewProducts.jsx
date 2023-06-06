import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ArrowLeft from "../Images/arrow-left-solid.svg";

import Interior from "../Images/Banners/Interior.png";
import Exterior from "../Images/Banners/Exterior.png";
import WoodMetal from "../Images/Banners/Wood & Metal.png";

import AuraPrime from "../Images/PaintBuckets/Interior - Aura Prime Luxury Interior Emulsion.png";
import AuraPrimeSmall from "../Images/PaintBuckets/Interior - Aura Prime Luxury Interior Emulsion Small.png";

import Chromagic from "../Images/PaintBuckets/Interior - Chromagic  Premium Emulsion.png";
import DuraSmooth from "../Images/PaintBuckets/Interior - Dura smooth Emulsion.png";
import SwooshLuxury from "../Images/PaintBuckets/Interior - Swoosh Luxury Emulsion.png";

import RedBird from "../Images/Birds/red_bird.png";
import YellowBird from "../Images/Birds/yellow_bird.png";

import CrackBridging from "../Images/Features/crack_bridging.png";
import TwoinOne from "../Images/Features/2in1.png";
import Coverage from "../Images/Features/coverage.png";
import Splash1 from "../Images/InteriorProducts/Splash/Splash1.png";
import Bucket1 from "../Images/InteriorProducts/Buckets/InteriorBucket1.png";

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
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
      },
      {
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
      },
      {
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
      },
      {
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
      },
      {
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
      },
      {
        splash: Splash1,
        bucket: Bucket1,
        description:
          "Interior Undercoat - Amendo and Dura Fill interior primer",
        activeTextColor: "#0D3E66",
        activeBgColor: "#B9D2E7",
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
          paint_name: "Aura Prime Luxury Interior Emulsion",
          paint_subheading: "Most cleanest paint -Luxury category",
          paint_description:
            "Transform any wall into a luxurious retreat. Aura Prime promises to make your interior walls stand out with its distinctive atmosphere, silk-style finish and reflective glow. Our stain resistance technology uses imported materials that shield paint from unwanted marks while improving the touchability of each layer for an incomparable experience in style and longevity. With carefully chosen molecules designed to be highly consistent, our innovative formula gives you superb results right down to every last detail!",
          background_color: "#F9C0C0",
          font_color: "#731415",
          accent_color: "#E82B2D",
          image: AuraPrimeSmall,
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
          <p className="absolute top-1/3 left-4  text-[#146AB0] font-light text-sm md:text-2xl lg:text-4xl xl:text-6xl">
            {productInfo[productType].title1}
          </p>
          <p className="absolute top-[55%] left-4  text-[#146AB0] font-bold text-sm md:text-2xl lg:text-4xl xl:text-6xl">
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
                className={`ml-10 relative mt-28 w-48 flex-shrink-0 ${
                  activeIndex === index && `bg-[${info.activeBgColor}]`
                } p-3 rounded-lg`}
              >
                <img
                  src={info.splash}
                  className={`absolute origin-top top-[-42%] right-[20%] ${
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
                  className={`${
                    activeIndex === index
                      ? `text-[${info.activeTextColor}]`
                      : "text-white"
                  } text-center text-xs`}
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
            className={`mt-12 p-6 mb-10 bg-[${productInfo[productType].products[0].background_color}] w-9/12 rounded-lg pb-16 text-center`}
          >
            <div className="md:relative xl:h-96">
              {/* Image Here */}
              {/* Bird and Paint Bucket Image - position is absolute */}
              <div className="relative h-52 xl:h-full md:h-60">
                {/* Bird */}
                <img
                  src={productInfo[productType].products[0].bird}
                  className="absolute w-1/2 scale-x-[-1.25] scale-125 origin-top -left-1/4 -top-[18%] xl:scale-x-[-0.50] xl:scale-50 xl:-left-1/4 xl:-top-16 md:scale-x-[-0.50] md:scale-50 md:-left-1/4 md:-top-12"
                />
                {/* Bucket */}
                <img
                  src={productInfo[productType].products[0].image}
                  className="w-full absolute scale-100 -left-1 md:scale-x-[40%] md:scale-y-[40%] md:origin-top-left md:top-3 "
                ></img>
              </div>
              {/* Heading and Subheading */}
              <div className="flex flex-col md:items-center md:justify-center md:w-2/3  md:top-14 md:right-0 md:absolute md:origin-top-right lg:top-24 xl:1/3 xl:h-96 xl:top-0 xl:right-16 xl:w-1/2 xl:text-center xl:items-start">
                <h1
                  className={`text-xl font-bold text-[${productInfo[productType].products[0].font_color}] text-center xl:text-4xl wrap xl:text-start`}
                >
                  {productInfo[productType].products[0].paint_name}
                </h1>
                <p
                  className={`text-xs pt-2 text-[${productInfo[productType].products[0].font_color}] text-center xl:text-start xl:text-base xl:mt-2`}
                >
                  {productInfo[productType].products[0].paint_subheading}
                </p>
              </div>
            </div>

            {/* Paint Description */}
            <p
              className={`text-xs text-center w-full pt-8 text-[${productInfo[productType].products[0].font_color}] md:p-4 md:pt-0 xl:text-lg xl:mt-24 xl:w-10/12 xl:mx-auto`}
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
                className={`text-lg text-center pt-8 text-[${productInfo[productType].products[0].font_color}] mb-6 xl:pt-0 xl:text-2xl xl:pb-8 xl:mt-10`}
              >
                Features
              </p>

              <div className="flex flex-wrap justify-center gap-8 lg:gap-32 xl:gap-48">
                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-20 w-20 bg-[${productInfo[productType].products[0].accent_color}] rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                  >
                    <img src={CrackBridging} className="w-10 xl:w-16"></img>
                  </div>
                  <p
                    className={`text-xs text-center pt-2 text-[${productInfo[productType].products[0].font_color}] xl:text-base`}
                  >
                    Crack Bridging
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-20 w-20 bg-[${productInfo[productType].products[0].accent_color}] rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                  >
                    <img src={TwoinOne} className=" w-10 xl:w-16"></img>
                  </div>
                  <p
                    className={`text-xs text-center pt-2 text-[${productInfo[productType].products[0].font_color}] xl:text-base`}
                  >
                    2-IN-1 Emulsion
                  </p>
                </div>

                <div className="flex flex-col justify-center items-center">
                  <div
                    className={`h-20 w-20 bg-[${productInfo[productType].products[0].accent_color}] rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                  >
                    <img src={Coverage} className=" w-8 xl:w-16"></img>
                  </div>
                  <p
                    className={`text-xs text-center pt-2 text-[${productInfo[productType].products[0].font_color}] xl:text-base`}
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
