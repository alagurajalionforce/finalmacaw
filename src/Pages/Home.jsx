import React, { useEffect, useRef, useState } from "react";
import "../Styles/Home.css";
import LivingRoom from "../Images/Home/Macaw-living-room 1.png";
import MacawLogo from "../Images/Home/Macaw-Logo-masked 2.png";
import AboutUs from "../Images/About Us/about_us_main.png";
import ContactUsDiv from "../Components/ContactUsDiv";
import Vector1 from "../Images/Home/Vector 1.png";
import { homeBucketImages } from "../Components/ProductMetaData";
import AboutUsInfo from "../Components/AboutUsInfo";
import StartJourneyButton from "../Components/StartJourneyButton";

function Products() {
  const [width, setWidth] = useState(0);
  const [focusedIndex, setFocusedIndex] = useState(0);

  const snapContainerRef = useRef(null);
  const activeImageRef = useRef(null);

  // const [isMouseDown, setIsMouseDown] = useState(false);
  // const [startX, setStartX] = useState(null);
  // const [scrollLeft, setScrollLeft] = useState(null);

  // const handleMouseDown = (e) => {
  //   setIsMouseDown(true);
  //   setStartX(e.pageX - snapContainerRef.current.offsetLeft);
  //   setScrollLeft(snapContainerRef.current.scrollLeft);
  // };

  // const handleMouseLeave = () => {
  //   setIsMouseDown(false);
  // };

  // const handleMouseUp = () => {
  //   setIsMouseDown(false);
  // };

  // const handleMouseMove = (e) => {
  //   if (!isMouseDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - snapContainerRef.current.offsetLeft;
  //   const walk = (x - startX) * 3;
  //   snapContainerRef.current.scrollLeft = scrollLeft - walk;
  // };

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
      <StartJourneyButton />
      <img
        src={LivingRoom}
        className="absolute top-0 -z-50 w-full"
        alt="Living Room"
        style={{
          filter: `grayscale(${100 - width}%)`,
        }}
      />
      <div className="ml-20 md:ml-32 lg:ml-44 lg:mt-12 space-y-3">
        {width !== 100 ? (
          <div className="h-28 lg:h-64 space-y-1 lg:space-y-3">
            <p className="text-white text-xl lg:text-5xl">Add</p>
            <img src={MacawLogo} className="h-9 lg:h-16" />
            <p className="text-white text-xl lg:text-5xl">to your</p>
            <p className="text-white text-3xl lg:text-7xl">life</p>
          </div>
        ) : (
          <div className="h-28 lg:h-64 space-y-1 lg:space-y-3">
            <p className="text-white text-xl lg:text-5xl">Explore the</p>
            <p className="text-white text-xl lg:text-5xl">Colors of</p>
            <img src={MacawLogo} className="h-9 lg:h-16" />
            <p className="text-white text-3xl lg:text-7xl"></p>
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
      <img src={AboutUs} className="hidden md:block w-full md:mt-40 lg:mt-32 xl:mt-72" />
      <AboutUsInfo mdNotVisible />
      <div className="w-full text-center text-white">
        <p className="text-sm lg:text-2xl mb-2">Our Products</p>
        <p className="text-xs font-thin">Swipe to see other products</p>
        <div className="relative md:mt-40 lg:mt-96">
        <img src={Vector1} className="mt-28 lg:mt-64 h-32 mr-0 md:h-40 lg:h-64" />
        <img
            className="absolute w-24 md:w-40 lg:w-72 -top-[70%] left-[35%] md:-top-[100%] md:left-[37%] lg:-top-[135%] lg:left-[32%] xl:-top-[140%] xl:left-[36%]"
            src={homeBucketImages[focusedIndex]?.splash}            
          />
          <div
            ref={snapContainerRef}
            // onMouseDown={handleMouseDown}
            // onMouseLeave={handleMouseLeave}
            // onMouseUp={handleMouseUp}
            // onMouseMove={handleMouseMove}
            className="absolute -top-[110%] md:-top-[100%] snap-x flex w-full overflow-auto scrollbar-hide"
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
                  className={`transition-transform w-48 md:w-72 lg:w-full duration-300 cursor-pointer`}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
            <div className="w-1/2 flex-shrink-0" />
          </div>
          <div className="absolute bottom-2 left-[35%] md:left-[40%] text-xs lg:text-lg text-black text-center">
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
