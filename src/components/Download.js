import React from "react";
import injection from "../assests/injection.svg";
import { MdDownload } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const Download = () => {
  return (
    <div id="Download" className="relative h-[12rem] lg:h-[400.47px] -mt-[3rem]  w-[1300.73px]">
      <img src={injection} className="z-10 absolute top-[2.5rem] h-[140px]  lg:top-0 left-3 lg:left-60  lg:h-full lg:w-full" />
      <div className="absolute inset-0 z-30 top-[1.5rem] lg:top-0 -left-[55rem] lg:left-60 flex items-center justify-center">
        <div className="text-black text-center flex flex-col lg:flex-row gap-x-5">
          <p className="italic font-poppins font-medium -ml-8 mt-2  text-lg lg:text-4xl leading-10">
            Get instant access with a click
          </p>
          <div className="flex w-40 h-[29.5px] ml-12 lg:ml-0 lg:w-60 lg:h-12  z-50 bg-white items-center border-2 rounded-lg  py-2 px-4 justify-center hover:scale-105 transition-all duration-300 cursor-pointer">
            <button className="text-red-500 text-sm lg:text-xl font-poppins">
              <Link to="" smooth>
                Download App
              </Link>
            </button>
            <MdDownload  className=" lg:text-[24px] text-[20px]" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
