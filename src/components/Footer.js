import React, { useState } from "react";
import backgroundImg from "../assests/backgroundFooter.png";
import FooterIcon from "../assests/footerImage.png";
import { FaPaperPlane } from "react-icons/fa";
import zorway from "../assests/zorway.png";
import wheelchair from "../assests/wheelchair.png";

const Footer = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(message);
  };
  const changeHandler = (event) => {
    setMessage((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(message);
  return (
    <div className="relative justify-center items-center  ">
      <img
        className="lg:mt-[10rem] ml-[1px]   mt-[10rem] scale-[101.5%] lg:flex lg:ml-2 lg:scale-[101%] lg:h-[31rem]  w-full"
        src={backgroundImg}
      />
      <img
        className="absolute z-40 h-[15rem] lg:h-[18rem] -top-10  right-3 -rotate-[20deg] lg:rotate-0 lg:top-0 lg:right-[20%]"
        src={wheelchair}
      />
      <div className="flex top-[13rem] w-[100%] items-center  h-[435px] pb-4 lg:pb-0   bg-[#0529BB] lg:bg-inherit  justify-center lg:ml-[10rem] lg:items-start md:items-start sm:items-start flex-col absolute lg:top-0 ">
        <div className=" -mt-10 lg:mt-[20rem] lg:ml-[12.84px]">
          <img className="w-[168px]  lg:-ml-6" src={FooterIcon} />
        </div>
        <div className="flex lg:flex-row flex-col lg:flex-nowrap     md:flex-wrap  md:flex-col md:items-center lg:justify-between  w-[80%] md:w-[100%] lg:w-[80%]">
          <div className="lg:w-[425px] w-full px-4 lg:px-0 text-white">
            <p className="text-[14px] opacity-[.74]   text-justify text-white font-poppins leading-5 ">
              Welcome to our platform! We're dedicated to simplifying your
              healthcare journey. With just a few clicks, access quality
              consultations and appointments effortlessly.
            </p>
            <p className="lg:mt-5 mt-6 font-medium text-[1rem] text-white font-poppins leading-5 text-justify">
              Join us and experience healthcare made easy.
            </p>
          </div>
          <div className="  lg:hidden xl:hidden sm:flex sm:flex-row md:flex md:flex-row justify-between w-[100%] sm:ml-10 ">
            <div className="flex  lg:w-[30%] md:w-[50%] my-2 lg:my-0 justify-evenly text-white font-poppins">
              <div className="  ">
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Home
                </p>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  About Us
                </p>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Contact Us
                </p>
              </div>
              <div className="">
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Careers
                </p>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Blogs
                </p>
              </div>
            </div>
            <div className="flex  w-[260px] md:w-[260px] lg:w-[260px] sm:w-[260px] lg:ml-10 mt-4  md:ml-0 mr-10 ml-6 relative items-center cursor-pointer h-[44px] rounded-lg">
              <form className=" ">
                {message === "" ? (
                  <span className="absolute font-poppins text-[#535252] text-[12px] top-[.75rem] left-[2rem]">
                    Send Message
                  </span>
                ) : (
                  <span></span>
                )}

                <span className="absolute top-[0.5rem] z-20 lg:right-[1rem] lg:top-[.45rem] md:right-5 sm:right-5 right-5">
                  <FaPaperPlane color="white" size={24} />
                </span>
                <input
                  type="text"
                  name="message"
                  onChange={changeHandler}
                  className="lg:w-[240px] w-[250px] h-[40px] lg:rounded-l-lg rounded  border-none cursor-pointer "
                />
                <div className="bg-[#FA0808] lg:-right-[2px] absolute  top-[2px] h-[40.5px]  lg:h-[40px] w-[62px] rounded-r-lg md:-right-1 sm:right-0 right-0"></div>
              </form>
              {/* <div className='bg-[#FA0808] h-full hidden lg:flex  lg:h-[40px] w-[62px] rounded-r-lg'>
            </div> */}
            </div>
          </div>

          <div className="hidden md:hidden sm:hidden lg:w-[30%] lg:flex xl:flex 2xl:flex md:w-[50%] my-2 lg:my-0 justify-evenly text-white font-poppins">
            <div className="  ">
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                Home
              </p>
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                About Us
              </p>
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                Contact Us
              </p>
            </div>
            <div className="">
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                Careers
              </p>
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                Blogs
              </p>
            </div>
          </div>
          <div className=" hidden w-[260px]  sm:hidden md:hidden xl:flex 2xl:flex lg:flex md:w-[260px] lg:w-[260px] sm:w-[260px] lg:ml-10 mt-4 ml-auto md:ml-0 mr-10  relative items-center cursor-pointer h-[44px] rounded-lg">
            <form className=" ">
              {message === "" ? (
                <span className="absolute font-poppins text-[#535252] text-[12px] top-[.75rem] left-[2rem]">
                  Send Message
                </span>
              ) : (
                <span></span>
              )}

              <span className="absolute top-[0.5rem] z-20 lg:right-[1rem] lg:top-[.45rem] md:right-5 sm:right-5 right-5">
                <FaPaperPlane color="white" size={24} />
              </span>
              <input
                type="text"
                name="message"
                onChange={changeHandler}
                className="lg:w-[240px] w-[250px] h-[40px] lg:rounded-l-lg rounded  border-none cursor-pointer "
              />
              <div className="bg-[#FA0808] lg:-right-[2px] absolute  top-[2px] h-[40.5px]  lg:h-[40px] w-[62px] rounded-r-lg md:-right-1 sm:right-0 right-0"></div>
            </form>
            {/* <div className='bg-[#FA0808] h-full hidden lg:flex  lg:h-[40px] w-[62px] rounded-r-lg'>
            </div> */}
          </div>
        </div>
        <div className="  flex w-full gap-x-6 absolute justify-between bottom-3 items-center text-white mb-0  lg:hidden md:hidden xl:hidden 2xl:hidden sm:hidden  flex-row">
          <div className=" w-[20%] bg-white h-[.1rem]"></div>

          <div className="flex items-center   justify-center  text-[13px] lg:text-[16px] gap-x-1 lg:gap-x-1">
            
          <a className="flex gap-x-[5px]" href="https://zorway.in/"> 
          <span className=""> powered by</span>
          
          <img className="lg:w-[24px] w-[20px] " src={zorway} />
          
           <a href="https://zorway.in/"> <span>ZORWAY</span></a>
           </a>
           
            
          </div>

          <div className="w-[20%] bg-white h-[.1rem]"></div>
        </div>
      </div>
      <div className="lg:flex md:flex sm:flex hidden text-white items-center gap-x-6 mt-4 w-full   opacity-80 absolute lg:w-[100%] md:w-[100%] top-[36rem] lg:top-[36rem] justify-between">
        <div className="flex items-center  w-full gap-x-[1.2rem]">
          <div className="lg:w-[146px]  w-[44px] bg-white h-[.1rem]"></div>
          <div className=" lg:flex md:flex xl:flex sm:flex flex-col hidden">
            <p className=" lg:text-[16px] text-[10px] ">
              {" "}
              Begusarai 851101, Bihar{" "}
            </p>
            <p className=" lg:text-[16px] text-[10px]">India</p>
          </div>
        </div>
        <div className="flex items-center w-full  justify-center  text-[10px] lg:text-[16px] gap-x-1 lg:gap-x-1">
        <a className="flex gap-x-1" href="https://zorway.in/"> 
          <span className=""> powered by</span>
          
          <img className="lg:w-[24px] w-[20px] " src={zorway} />
          <span className=" "></span>
           <a href="https://zorway.in/"> <span>ZORWAY</span></a>
           </a>
        </div>
        <div className=" items-center w-full gap-x-0  justify-between   lg:gap-x-[8px] lg:flex md:flex xl:flex sm:flex  hidden">
          <div className="flex gap-x-3">
            <p className=" lg:text-[16px] text-[10px]">Terms of services</p>
            <p className=" lg:text-[16px] text-[10px]">Privacy Policy</p>
          </div>
          <div className="lg:w-[144px] w-[100px] bg-white h-[.1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
