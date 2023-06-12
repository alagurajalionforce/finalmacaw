import React, { useEffect, useRef, useState } from "react";
import "../Styles/Home.css";
import LivingRoom from "../Images/Home/Macaw-living-room 1.png";
import MacawLogo from "../Images/Home/Macaw-Logo-masked 2.png";
import AboutUs from "../Images/About Us/about_us_main.png";
import ContactUsDiv from "../Components/ContactUsDiv";
import Vector1 from "../Images/Home/Vector 1.png";
import { homeBucketImages } from "../Components/ProductMetaData";

function Products() {
  const [width, setWidth] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const snapContainerRef = useRef(null);
  const activeImageRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        activeImageRef.current = entry.target;
        setFocusedIndex(index === 0 ? 0 : index - 1); 
      }
    });
  };

  const handleScroll = () => {
    const snapContainer = snapContainerRef.current;
    const children = Array.from(snapContainer.children);

    const visibleIndex = children.findIndex((child) => {
      const rect = child.getBoundingClientRect();
      return rect.left <= snapContainer.offsetWidth / 2 && rect.right >= snapContainer.offsetWidth / 2;
    });

    setFocusedIndex(visibleIndex === 0 ? 0 : visibleIndex - 1);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (activeImageRef.current) {
      observer.observe(activeImageRef.current);
    }

    return () => {
      if (activeImageRef.current) {
        observer.unobserve(activeImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const snapContainer = snapContainerRef.current;
    snapContainer.addEventListener('scroll', handleScroll);

    return () => {
      snapContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleImageClick = (index) => {
    setFocusedIndex(index);
  };

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
        {width !== 100 ? (
          <div className="h-64 space-y-3">
            <p className="text-white text-5xl">Add</p>
            <img src={MacawLogo} className="h-16" />
            <p className="text-white text-5xl">to your</p>
            <p className="text-white text-7xl">life</p>
          </div>
        ) : (
          <div className="h-64 space-y-3">
            <p className="text-white text-5xl">Explore the</p>
            <p className="text-white text-5xl">Colors of</p>
            <img src={MacawLogo} className="h-16" />
            <p className="text-white text-7xl"></p>
          </div>
        )}
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
      <div className="w-full text-center text-white">
        <p className="text-2xl mb-2">Our Products</p>
        <p className="font-thin">Swipe to see other products</p>
        <div className="relative mt-28">
          <img src={Vector1} className="mt-64" />
          <img
            className="absolute w-56 -top-[104%] left-[39%]"
            src={homeBucketImages[focusedIndex]?.splash}
          />
          <div
            ref={snapContainerRef}
            className="absolute -top-[100%] snap-x flex w-full overflow-auto scrollbar-hide"
          >
            <div className="w-1/2 flex-shrink-0" />
            {homeBucketImages.map((homeBucket, index) => (
              <div
                ref={index === 0 ? activeImageRef : null}
                className="snap-center mt-28 flex-shrink-0 p-3 rounded-lg"
              >
                <img
                  key={index}
                  src={homeBucket.img}
                  alt={`Image ${index}`}
                  className="transition-transform scale-75 duration-300 cursor-pointer"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
            <div className="w-1/2 flex-shrink-0" />
          </div>
          <div className="absolute bottom-5 left-[43%] text-black text-center space-y-2">
          <p>Amendo and Dura Fill</p>
          <p>Interior primer</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <ContactUsDiv />
      </div>
    </div>
  );
}

export default Products;
