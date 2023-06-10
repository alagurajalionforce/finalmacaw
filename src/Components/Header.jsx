import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import AppLogo from "../Images/AppLogo/AppLogo.png";

const routerConfig = [
  {
    pathname: "/About",
    name: "About Us",
  },
  {
    pathname: "/Products",
    name: "Products",
  },
  {
    pathname: "/Contact",
    name: "Contact Us",
  },
];

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="px-10 py-6 md:px-14 md:py-10 flex items-center justify-between">
        <div className="flex items-center w-full justify-between md:w-auto">
          <NavLink to={"/"}>
            <img
              src={AppLogo}
              className="h-12 lg:h-24 md:h-20 cursor-pointer"
            />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="md:hidden cursor-pointer text-white text-3xl"
          >
            &#9776;
          </button>
          <div
            id="mobile-menu"
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:hidden z-50 absolute top-0 right-[0.5%] ☐bg-red-800 text-5xl  flex-col justify-content-center`}
          >
            <nav
              className={`flex flex-col h-screen w-screen bg-black items-center space-y-5 py-8 text-white transition-opacity duration-1000 ${
                isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="mobile"
            >
              <button
                onClick={toggleMenu}
                className="text-8x1 self-end px-6 text-white"
              >
                &times;
              </button>
              {routerConfig.map((route, index) => (
                <NavLink exact to={route.pathname}>
                  <div onClick={toggleMenu}>
                    <p 
                      className={`${
                        location.pathname === route.pathname
                          ? "text-[#F6B218]"
                          : "text-white"
                      } text-base`}
                    >
                      {route.name}
                    </p>
                  </div>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
        <ul className="space-x-10 hidden md:flex">
          {routerConfig.map((route, index) => (
            <li key={index}>
              <NavLink exact to={route.pathname}>
                <div>
                  <p className="text-white lg:text-lg md:text-sm">
                    {route.name}
                  </p>
                  {location.pathname === route.pathname && (
                    <div className="border-[2px] mt-2 rounded-md border-[#F6B218]"></div>
                  )}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </nav>
  );
}

export default Header;
