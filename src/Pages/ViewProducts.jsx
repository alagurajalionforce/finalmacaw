import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ArrowLeft from "../Images/arrow-left-solid.svg";

import CrackBridging from "../Images/Features/crack_bridging.png";
import TwoinOne from "../Images/Features/2in1.png";
import Coverage from "../Images/Features/coverage.png";

import { productInfo, bucketInfo } from "../Components/ProductMetaData";
import ColorBar1 from "../Images/FadedColorBars/ColorBar1.png";
import Toxicity3 from "../Images/ToxicityLogo/Toxicity3.png";

const ViewProducts = () => {
  const [productType, setProductType] = useState("interior");
  const [activeIndex, setActiveIndex] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    console.log("The type", queryParams.get("type"));
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
                  background: activeIndex === index && info.activeBgColor,
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
              background:
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
                  className={
                    activeIndex % 2 == 0
                      ? `absolute w-1/2 scale-x-[-1.25] scale-125 origin-top -left-1/4 -top-[18%] xl:scale-x-[-0.50] xl:scale-50 xl:-left-1/4 xl:-top-16 md:scale-x-[-0.50] md:scale-50 md:-left-1/4 md:-top-12`
                      : `absolute w-3/12 scale-x-[-1.25] scale-125 origin-top -top-[30%] left-[10%] md:-left-[3%] md:-top-[15%] lg:-top-[18%] xl:scale-x-[-0.50] xl:scale-50 md:scale-x-[-0.50] md:scale-50 `
                  }
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
                  className={`text-xl font-bold text-center xl:text-4xl wrap xl:text-start`}
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
              className={`text-xs text-center w-full pt-8 md:p-4 md:pt-0 xl:text-lg xl:w-10/12 xl:mx-auto xl:mt-10`}
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

              <div
                className={`flex flex-wrap justify-center gap-x-24 gap-y-10  md:gap-x-12 lg:gap-x-24 lg:gap-y-10 ${
                  productInfo[productType].products[activeIndex].features[0]
                    .description.length === 0 && `xl:gap-x-0`
                } xl:gap-x-48 xl:gap-y-16`}
              >
                {productInfo[productType].products[activeIndex].features.map(
                  (value, index) => {
                    return (
                      <div
                        className={`flex flex-col  items-center ${
                          productInfo[productType].products[activeIndex]
                            .features[0].description.length !== 0
                            ? "md:w-1/3 lg:w-1/3 xl:w-1/3"
                            : "w-1/6"
                        }`}
                        key={index}
                      >
                        <div className="flex flex-col justify-center items-center">
                          <div
                            className={`h-20 w-20 rounded-full border-slate-200 border-2 flex justify-center items-center xl:h-32 xl:w-32`}
                            style={{
                              background:
                                productInfo[productType].products[activeIndex]
                                  .accent_color,
                            }}
                          >
                            <img
                              src={value.icon}
                              className="w-10 xl:w-16"
                            ></img>
                          </div>
                          <p
                            className={`text-xs text-center pt-4 font-bold xl:text-lg xl:font-bold`}
                            style={{
                              color:
                                productInfo[productType].products[activeIndex]
                                  .font_color,
                            }}
                          >
                            {value.name}
                          </p>
                        </div>
                        <p
                          className={`text-xs text-center pt-4 xl:text-base `}
                          style={{
                            color:
                              productInfo[productType].products[activeIndex]
                                .font_color,
                          }}
                        >
                          {value.description}
                        </p>
                      </div>
                    );
                  }
                )}
              </div>
              {productInfo[productType].products[activeIndex]?.isPaint && (
                <div className="w-full mt-10 p-10 space-y-10 bg-white rounded-xl flex flex-col md:flex-row md:justify-evenly md:items-start md:space-y-0">
                  <div className="flex flex-col items-center space-y-3 md:w-1/3">
                    <p
                      className={`text-xs md:text-md lg:text-lg text-[${productInfo[productType].products[activeIndex].font_color}]`}
                    >
                      Color Range
                    </p>
                    <img
                      className="h-8 w-16"
                      src={
                        productInfo[productType].products[activeIndex].colorBar
                      }
                    />
                    <p
                      className={`font-normal text-[10px] lg:text-sm text-[${productInfo[productType].products[activeIndex].font_color}]`}
                    >
                      1000+
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-3 md:w-1/3">
                    <p
                      className={`text-xs md:text-md lg:text-lg text-[${productInfo[productType].products[activeIndex].font_color}]`}
                    >
                      Finish
                    </p>
                    <div
                      className={`flex justify-between items-center w-full p-2 rounded-xl`}
                      style={{
                        background:
                          productInfo[productType].products[activeIndex]
                            .accent_color,
                      }}
                    >
                      {productInfo[productType].products[
                        activeIndex
                      ].finishTexts.map((finish) => (
                        <p
                          className={`text-[7px] lg:text-xs ${
                            finish.isActive
                              ? "text-white"
                              : `text-[${productInfo[productType].products[activeIndex].font_color}]`
                          } `}
                        >
                          {finish.text}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-3  md:w-1/3">
                    <p
                      className={`text-xs md:text-md lg:text-lg text-[${productInfo[productType].products[activeIndex].font_color}]`}
                    >
                      Toxicity
                    </p>
                    <img
                      src={
                        productInfo[productType].products[activeIndex]
                          .toxicityLogo
                      }
                      className="w-16 h-16"
                    />
                    <p
                      className={`text-[10px] lg:text-sm text-[${productInfo[productType].products[activeIndex].font_color}] font-[400] md:w-40`}
                    >
                      Less toxic as there is no added lead, mercury, and
                      chromium. Low VOC.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProducts;
