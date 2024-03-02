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
    <div className="relative justify-center items-center ">
      <img
        className="lg:mt-[10rem] ml-[1px]   mt-[10rem] scale-[101.5%] lg:flex lg:ml-2 lg:scale-[101%] lg:h-[31rem]  w-full"
        src={backgroundImg}
      />
      <img className="absolute z-40 h-[15rem] lg:h-[18rem] -top-10  right-3 -rotate-[20deg] lg:rotate-0 lg:top-0 lg:right-[20%]" src={wheelchair} />
      <div className="flex top-[13rem]  h-[435px] pb-4 lg:pb-0  bg-[#0529BB] lg:bg-inherit  justify-center lg:ml-[10rem] items-start flex-col absolute lg:top-0 ">
        <div className=" -mt-10 lg:mt-[20rem] lg:ml-[12.84px]">
          <img className="w-[168px]  lg:-ml-6" src={FooterIcon} />
        </div>
        <div className="flex lg:flex-row flex-col gap-x-[4rem]">
          <div className="lg:w-[425px] w-full px-4 lg:px-0 text-white">
            <p className="text-[14px] opacity-80 text-white font-poppins leading-5 text-justify">
              Welcome to our platform! We're dedicated to simplifying your
              healthcare journey. With just a few clicks, access quality
              consultations and appointments effortlessly.
            </p>
            <p className="lg:mt-5 mt-6 font-medium text-[1rem] text-white font-poppins leading-5 text-justify">
              Join us and experience healthcare made easy.
            </p>
          </div>
          <div className="flex lg:w-[252px] my-2 lg:my-0 justify-evenly text-white font-poppins">
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
            <div>
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                Careers
              </p>
              <p className="cursor-pointer opacity-80  hover:opacity-100">
                Blogs
              </p>
            </div>
          </div>
          <div className="flex lg:ml-10 mt-4 ml-14 relative items-center cursor-pointer h-[44px] rounded-lg">
            <form className=" ">
              {message === "" ? (
                <span className="absolute font-poppins text-[#535252] text-[12px] top-[.75rem] left-[2rem]">
                  Send Message
                </span>
              ) : (
                <span></span>
              )}

              <span className="absolute top-[0.5rem] right-[5.3rem] z-20 lg:right-[1rem] lg:top-[.45rem]">
                <FaPaperPlane color="white" size={24} />
              </span>
              <input
                type="text"
                name="message"
                onChange={changeHandler}
                className="lg:w-[240px] w-[250px] h-[40px] lg:rounded-l-lg rounded  border-none cursor-pointer "
              />
              <div className="bg-[#FA0808] lg:-right-[2px] absolute right-16 top-[2px] h-[40.5px]  lg:h-[40px] w-[62px] rounded-r-lg"></div>
            </form>
            {/* <div className='bg-[#FA0808] h-full hidden lg:flex  lg:h-[40px] w-[62px] rounded-r-lg'>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex text-white gap-x-2 mt-4   w-[10rem]  opacity-80 absolute lg:w-full top-[36rem] lg:top-[36rem]  lg:gap-x-[20.2rem] ">
        <div className="flex items-center  gap-x-5">
          <div className="lg:w-[146px]  w-[44px] bg-white h-[.1rem]"></div>
          <div className=" flex flex-col">

          <p className=" lg:text-[16px] text-[10px]">Melrose Place,90120</p>
          <p className=" lg:text-[16px] text-[10px]">USA</p>
          </div>
        </div>
        <div className="flex items-center  text-[10px] lg:text-[16px] gap-x-1 lg:gap-x-1">
          
          <span className=""> powered by</span>
            <img className="lg:w-[24px] w-[20px] " src={zorway} />
          <span className=" ">
            
          </span>
          <span>ZORWAY</span>
        </div>
        <div className="flex items-center gap-x-2 ml-[30px] lg:ml-0  lg:gap-x-[8px]">
          <div className="flex gap-x-3">

          <p className=" lg:text-[16px] text-[10px]">Terms of services</p>
          <p className=" lg:text-[16px] text-[10px]">Privacy Policy</p>
          </div>
          <div className="lg:w-[146px] w-[44px] bg-white h-[.1rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
