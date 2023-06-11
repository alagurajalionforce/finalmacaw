import React from "react";

function ContactUsDiv() {
  return (
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
  );
}

export default ContactUsDiv;
