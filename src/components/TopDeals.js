import React from "react";
import surf from "../assests/surf.svg"

const TopDeals = () => {
  return (
    <div id="top" className="  flex  md:flex sm:flex  lg:flex overflow-hidden  flex-col mx-auto mt-[60px] items-center gap-[30px]  -mb-6">
      <h1 className="w-[198px] h-[60px] left-[657px] text-[40px] leading-[60px] text-[#0529BB] font-medium">
        Top Deals
      </h1>
      <img  className="lg:w-[1193px] lg:h-[327px]  " src={surf}/>
    </div>
  );
};

export default TopDeals;
