import React from "react";

import FooterLogo from "../Images/Footer/footer_logo.png";

// Support
import SupportCall from "../Images/Footer/support_call.png";
import SupportWhatsApp from "../Images/Footer/support_whatsapp.png";
import SupportMail from "../Images/Footer/support_mail.png";

// Socials Logo
import Facebook from "../Images/Footer/social_facebook.png";
import Instagram from "../Images/Footer/social_instagram.png";
import Twitter from "../Images/Footer/social_twitter.png";
import LinkedIn from "../Images/Footer/social_linkedin.png";
import YouTube from "../Images/Footer/social_youtube.png";

const MyFooter = () => {
  return (
    <div className="flex-col  bg-[#146AB0] p-10 pt-6 text-white lg:p-32 lg:pt-8 lg:pb-8">
      <div className="w-full ">
        <img src={FooterLogo} className="pb-4 md:pb-4 w-24"></img>
      </div>
      <div className="flex flex-wrap lg:justify-between">
        {/* Qucik Links */}
        <div className="w-1/2 md:w-1/4 lg:w-1/6">
          <h1 className="text-lg pb-4">Quick Links</h1>
          <p className="text-sm pb-1 font-light">About Us</p>
          <p className="text-sm pb-1 font-light">Products</p>
          <p className="text-sm pb-1 font-light">Contact Us</p>
        </div>
        {/* Products */}
        <div className="w-1/2 md:w-1/4 lg:w-1/6">
          <h1 className="text-lg pb-4">Products</h1>
          <p className="text-sm pb-1 font-light">Interior</p>
          <p className="text-sm pb-1 font-light">Exterior</p>
          <p className="text-sm pb-1 font-light">Wood & Metal</p>
        </div>
        {/* Support */}
        <div className="w-full mt-8 md:w-1/2 md:mt-0 lg:w-1/4 lg:mr-4">
          <h1 className="text-lg pb-4 ">Support</h1>
          <div className="flex items-center">
            <img src={SupportCall} className="w-14 pr-4 lg:w-10 lg:pr-2"></img>
            <p className="font-light text-sm lg:text-sm">Toll free - 1800 123 1003</p>
          </div>
          <div className="flex items-center">
            <img src={SupportWhatsApp} className="w-14 pr-4 lg:w-10 lg:pr-2"></img>
            <p className="font-light text-sm lg:text-sm">Whatsapp - 81005 56677</p>
          </div>
          <div className="flex items-center">
            <img src={SupportMail} className="w-14 pr-4 lg:w-10 lg:pr-2"></img>
            <p className="font-light text-sm lg:text-sm">Email - help@macaw.com</p>
          </div>
          <p className="pt-4 text-sm font-light">
            Premises no.03-319, DH-6/11, Action Area-1D, Street No. 319, New
            Town, Kolkata-700156
          </p>
        </div>

        {/* The vertical line */}

        <div className="hidden lg:block w-[2px] h-64 bg-white" />

        {/* Where to Buy */}
        <div className="w-full mt-8  md:flex lg:flex-col lg:mt-0 lg:w-2/6">
          <div className="md:w-1/2 lg:w-full">
            <h1 className="text-xl ">Where to Buy</h1>
            <div className="flex my-3">
            <input
              type="text"
              name="place"
              placeholder="City, State or zipcode"
              class="md:w-4/5 bg-white shadow-sm px-4 placeholder-slate-400 focus:outline-none rounded-l-full text-black  block w-full sm:text-sm"
            />
            <button className="bg-[#F6B218] text-[#855E07] p-3 rounded-r-full">Go</button>
            </div>
          </div>

          <div className="pt-6 md:pt-0">
            <h1 className="text-xl md:w-full pt-2">Follow us on</h1>
            <div className="flex mt-4">
              <img src={Facebook} className="scale-75" />
              <img src={Instagram} className="scale-75" />
              <img src={Twitter} className="scale-75" />
              <img src={LinkedIn} className="scale-75" />
              <img src={YouTube} className="scale-75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFooter;
