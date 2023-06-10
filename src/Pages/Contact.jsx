import React from "react";
import ContactUsBanner from "../Images/Banners/ContactUs.png";

function ContactUs() {
  return (
    <div className="flex flex-col space-y-10 items-center">
      <img src={ContactUsBanner} />
      <div
        id="contactDiv"
        className="flex flex-col items-center p-5 w-5/6 bg-white rounded-lg"
      >
        <p className="text-[#146AB0]">Get in Touch</p>
        <p className="text-xs mt-3 self-center">
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
        <button className="border p-2 rounded-lg">Submit</button>
      </div>
    </div>
    // <div>
    //   <section className="section-gap">
    //     <div className="w-100 about-us contact-us">
    //       <img className="w-100" src={contact} />
    //       <p>Contact Us</p>
    //     </div>
    //   </section>
    //   <section className="products-body">
    //     <div className="sub-con-cen">
    //       <div className="submit-con">
    //         <div className="submit-cards">
    //           <div className="heading-submit">
    //             <h1>Get in Touch</h1>
    //             <p>
    //               Looking for something? Drop your query and will contact you.
    //             </p>
    //           </div>

    //           <div className="input-set-one">
    //             <input
    //               type="text"
    //               placeholder="What are you looking for?"
    //               className=" typeone"
    //             />
    //             <input
    //               type="text"
    //               className="typetwo"
    //               placeholder="Full Name*"
    //             />
    //             <input type="text" className="typetwo" placeholder="Mobile*" />
    //           </div>
    //           <div className="input-set-two">
    //             <input type="text" className="typetwo" placeholder="Email*" />
    //             <input type="text" className="typetwo" placeholder="Pincode*" />
    //             <input type="text" className="typeone" placeholder="Message" />
    //           </div>
    //         </div>
    //         <div className="submit-btn">
    //           <button>Submit</button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section >

    //       <div className='contact-detail'>
    //           <div className="support">
    //             <div className="Head">
    //               <p>Contact</p>
    //             </div>
    //             <div className="cont">

    //               <p><img src={fc} />Toll free - 1800 123 1003</p>

    //             </div>
    //             <div className="cont">
    //               <p><img src={fw} />Whatsapp - 81005 56677</p>
    //             </div>
    //             <div className="cont">
    //               <p><img src={fm} />Email - help@macaw.com</p>
    //             </div>
    //           </div>

    //             <div className="address">
    //             <div className="Head">
    //               <p>Address</p>
    //             </div>
    //               <p>Premises no.03-319, DH-6/11,
    //                 <br/>
    //                 Action Area-1D, Street No. 319,
    //                 <br/>
    //                 New Town, Kolkata-700156</p>
    //             </div>

    //       </div>

    //       <br/>
    //       <br/>
    //       <br/>
    //   </section>
    // </div>
  );
}

export default ContactUs;
