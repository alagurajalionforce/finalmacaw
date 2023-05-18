import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Images/LOGO.png";
import "../Styles/Header.css"

//import { CSSTransition } from "react-transition-group";

function Header() {

  const [isNavVisible, setNavVisibility] = useState(false);
  //const [isSmallScreen, setIsSmallScreen] = useState(false);
  console.log(Location)
  useEffect(() => {
    //setIsSmallScreen(false);
    //setNavVisibility(false);
    console.log(window.location.pathname)
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setNavVisibility(false);
    } else {
      setNavVisibility(true);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };




  return (
    <div>
      <header className="Nav-container Header">
        <div className="logo">
        <NavLink to="/"><img src={Logo} alt=""/></NavLink>
          
        </div>
        {/* !isSmallScreen || */ isNavVisible ?
        <div className="Nav-list Nav">
          <div></div>
          <div></div>
          <div></div>
          <NavLink to="/About">About Us</NavLink>
          <NavLink to="/Products">Products</NavLink>
          <NavLink to="/Contact">Contact Us</NavLink>
          {/* <NavLink to="/Blogs">Blogs</NavLink>
          <NavLink to="/Colors">Colors</NavLink>
          <NavLink to="/Inspiration">Inspiration</NavLink> */}
        </div> : ""}
        <button onClick={toggleNav} className="Burger">
        {/* ?? */} <div></div>
                    <div></div>
                    <div></div>
      </button>
      </header> 
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <Outlet/>
    </div>
  );
}

export default Header;
