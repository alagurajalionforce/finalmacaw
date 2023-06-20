import React from 'react'
import Logo from "../Images/Final-logo.png";
import "../Styles/Footer.css"

import fc from "../Images/Footer/support_call.png"
import fw from "../Images/Footer/support_whatsapp.png"
import fm from "../Images/Footer/support_mail.png"

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="" />

        </div>
        <div className='links-content'>
          <div className="links">
          <div className="Head">
              <p>Quick links</p>
            </div>
            <div className="set-one" /* style={{paddingTop:"10px"}} */>
              <p><a href='/About'>About Us</a></p>
            </div>
            <div className="set-one">
              <p><a href='/Products'>Products</a></p>
            </div>
            <div className="set-one">
              <p><a href='/Contact'>Contact Us</a></p>
            </div>
          </div>
          <div className="links">
            <div className="Head">
              <p><a href='/Products'>Products</a></p>
            </div>
            <div className="set-one">
              <p><a href='/productsList'>Interior</a></p>
            </div>
            <div className="set-one">
              <p>Exterior</p>
            </div>
            <div className="set-one">
              <p>Wood & Metal</p>
            </div>
          </div>
          <div className="support">
            <div className="Head">
              <p>Support</p>
            </div>
            <div className="cont">

              {/* <div className='img'></div> */}
              <p><img src={fc} />Toll free - 1800 123 1003</p>
              
            </div>
            <div className="cont">
              <p><img src={fw} />Whatsapp - 81005 56677</p>
            </div>
            <div className="cont">
              <p><img src={fm} />Email - help@macaw.com</p>
            </div>

            <div className="address">
              <p>Premises no.03-319, DH-6/11,
                <br/>
                Action Area-1D, Street No. 319,
                <br/>
                New Town, Kolkata-700156</p>
            </div>
          </div>
          <div className="wtb">
            <div className="Head">
              <p>Where to Buy</p>
            </div>
            <div className="wtbInput">
                <input type="text" placeholder="City, state or zipcode" name="go" />
                <button type="submit">Go</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer