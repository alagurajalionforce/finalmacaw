import React from "react";
import { useNavigate } from "react-router-dom";

function StartJourneyButton() {
  const navigate = useNavigate();

  return (
    <button
      className="text-xs md:text-base -right-[17%] bg-[#146AB0] text-white p-2 fixed -rotate-90 md:-right-24 z-50 top-1/2 rounded-t-lg hover:text-[#13558D] hover:bg-[#F4B21F]"
      onClick={() => {
        navigate("/Contact");
      }}
    >
      Start your Color Journey
    </button>
  );
}

export default StartJourneyButton;
