import React from "react";
import injection from "../assests/injection.svg";
import { MdDownload } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const Download = () => {
  return (
    <div
      id="Download"
      className="relative  h-[12rem] lg:h-[500.47px] md:h-[300px] -mt-[3rem] lg:-ml-32  w-[1300.73px] lg:w-[100%]"
    >
      <div className=" ">

      <img
        src={injection}
        className="z-10 absolute top-[2.5rem] h-[140px] mx-auto  lg:top-0 left-3 lg:left-60   lg:h-full lg:w-full md:h-full md:w-full md:top-0 md:-left-20 sm:h-[140%] sm:w-full sm:-top-[8rem] sm:-left-[10rem] "
      />
      </div>
      <div className="absolute inset-0 z-30 top-[1.5rem] lg:top-0 md:top-0 md:-left-60 -left-[55rem] lg:left-60 flex items-center justify-center sm:-top-[10rem] sm:-left-[30rem]">
        <div className="text-black text-center flex flex-col lg:flex-row gap-x-5">
          <p className="italic font-poppins font-medium -ml-8 mt-2  text-lg lg:text-4xl md:text-3xl leading-10 sm:text-2xl">
            Get instant access with a click
          </p>
          <div className="flex w-40 h-[29.5px] ml-12 lg:ml-0 lg:w-60 lg:h-12  z-50 bg-white items-center border-2 rounded-lg  md:h-12 md:w-60 py-2 px-4 justify-center hover:scale-105 transition-all duration-300 cursor-pointer sm:h-12 sm:w-48">
            <button className="text-red-500 text-sm lg:text-xl md:text-xl font-poppins">
              <Link to="" smooth>
                Download App
              </Link>
            </button>
            <MdDownload className=" lg:text-[24px] text-[20px]" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
