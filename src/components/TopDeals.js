import React from "react";
import surf from "../assests/TopDealsImage.png"

const TopDeals = () => {
  return (
    <div id="top" className="  flex  justify-center  md:flex sm:flex  lg:flex overflow-hidden  flex-col mx-auto mt-[60px] items-center gap-[10px] lg:gap-[20px] sm:gap-[20px] xl:gap-[20px] md:gap-[20px]   -mb-6">
      <h1 className="w-[198px] h-[60px] left-[657px] lg:text-[38px]  md:text-[38px] sm:text-[38px] text-[32px] leading-[60px] text-[#0529BB] flex mx-auto items-center justify-center  font-medium">
        Top Deals
      </h1>
      <img  className="lg:w-[1193px] lg:h-[327px]  lg:rounded-3xl md:rounded-3xl sm:rounded-3xl rounded-xl  " src={surf}/>
    </div>
  );
};

export default TopDeals;
