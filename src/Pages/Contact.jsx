import React from "react";
import ContactUsBanner from "../Images/Banners/ContactUs.png";
import "../Styles/ContactUs.css";
import ContactPhone from "../Images/Icons/PhoneIcon.png";
import ContactWhatsApp from "../Images/Icons/WhatsAppIcon.png";
import ContactMail from "../Images/Icons/EmailIcon.png";

function ContactUs() {
  return (
    <div className="flex flex-col items-center">
      <img src={ContactUsBanner} />
      <div
        id="contactDiv"
        className="flex flex-col items-center p-5 w-4/6 my-10 bg-white rounded-lg"
      >
        <p className="text-[#146AB0] lg:text-lg">Get in Touch</p>
        <p className="text-xs  mt-3 lg:text-sm">
          Looking for something? Drop your query and will contact you.
        </p>
        <div className="w-full flex flex-col items-center space-y-10 my-10 md:flex-row md:space-y-0 md:space-x-3">
          <input
            type="text"
            class="w-full text-sm outline-none border-b-2 md:w-6/12"
            placeholder="What are you looking for?"
          />
          <input
            type="text"
            class="w-full text-sm outline-none border-b-2 md:w-3/12"
            placeholder="Full Name*"
            required
          />
          <input
            type="text"
            class="w-full text-sm outline-none border-b-2 md:w-3/12"
            placeholder="Mobile*"
          />
        </div>
        <div className="w-full flex flex-col items-center space-y-10 md:flex-row md:space-y-0 md:space-x-3">
          <input
            type="text"
            class="w-full text-sm outline-none border-b-2 md:w-3/12"
            placeholder="Email*"
          />
          <input
            type="text"
            class="w-full text-sm outline-none border-b-2 md:w-3/12"
            placeholder="Pincode*"
          />
          <input
            type="text"
            class="w-full text-sm outline-none border-b-2 md:w-6/12"
            placeholder="Message"
          />
        </div>
        <button
          className="submitBtn border-[1.5px] w-[120px] h-11 border-[#ED1C24] bg-cover bg-no-repeat p-2 px-6 text-sm rounded-lg"
          style={{
            marginTop: 20,
          }}
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col w-8/12 items-center justify-center mb-12 md:w-7/12 md:flex-row my-10">
        <div className="flex flex-col w-full mb-10 md:mb-0 text-white text-center md:self-start md:w-1/2">
          <p className="md:self-start mb-5 md:mb-3 lg:text-lg">Contact</p>
          <div className="flex items-center space-x-3 mb-2">
            <img src={ContactPhone} className="w-5 h-5" />
            <p className="text-[12px] font-light lg:text-sm">Toll free - 1800 123 1003</p>
          </div>
          <div className="flex items-center space-x-3 mb-2">
            <img src={ContactWhatsApp} className="w-5 h-5" />
            <p className="text-[12px] font-light lg:text-sm">Whatsapp - 81005 56677</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={ContactMail} className="w-5 h-5" />
            <p className="text-[12px] font-light lg:text-sm">Email- help@macaw.com</p>
          </div>
        </div>
        <div className="flex flex-col w-full text-white text-center md:text-left md:w-1/2 md:self-start">
          <p className="md:self-start mb-2 md:mb-3 lg:mb-2 lg:text-lg">Address</p>
          <p className="text-xs font-light mb-10 leading-6 lg:text-sm w-52">
            Premises no.03-319, DH-6/11, Action Area-1D, Street No. 319, New
            Town, Kolkata-700156
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
