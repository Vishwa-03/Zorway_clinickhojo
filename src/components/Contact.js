import React, { useState } from "react";
import ContactForm from "./ContactForm";
import MedicineBro from "../assests/Medicine-bro 1.svg";
import socialLink from "../assests/social links.svg";
import ContactDetails from "../assests/contact details.png";
import { MdLocalPhone, MdMessage } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import number from "../assests/number.png";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaFacebook, FaInstagram, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import backgroundImg from "../assests/ContactUsBackground.svg";
import { MdEmail } from "react-icons/md";

const ContactUs = () => {
  return (
    <div
      id="ContactUs"
      className="lg:flex justify-center relative bg-[#E1E0E0]    w-full gap-x-[4rem] items-center"
    >
      <img className="z-20 mx-auto w-[60%]  " src={MedicineBro} />

      <div className="flex mt-12 lg:mt-16  mr-10  border-l-2 z-20  border-[#7C7B7B] flex-col w-[100%] items-start">
        <div className="lg:bg-white lg:flex hidden    lg:w-[20rem] h-[3.8rem] rounded-r-full">
          <div className="flex flex-row-reverse mr-[2rem] items-end ml-10  text-[#0529BB] font-medium ">
            <p className=" font-poppins font-medium lg:text-[38px]">
              Contact Us
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full bg-[#E1E0E0] lg:bg-none  lg:w-[100%]  items-center ">
          <div className="bg-white  lg:hidden -ml-[9rem] md:rounded-full md:mx-auto sm:rounded-full sm:mx-auto  lg:w-[20rem] h-[3.8rem] rounded-r-full">
            <div className="flex flex-row-reverse mr-[2rem] ml-[5rem] lg:ml-0 items-end text-[#0529BB] font-medium ">
              <p className=" font-poppins font-medium w-[12rem] text-[2rem] lg:text-[38px]">
                Contact Us
              </p>
            </div>
          </div>
          <div className="bg-[#E1E0E0] w-[100%]">
            <div className="flex   w-full justify-center items-center mx-auto my-auto  flex-col lg:flex-row">
              <ContactForm />
              {/* static info */}
              <div className="flex flex-col   mx-auto  mt-[1rem] lg:mt-0">
                <div className=" flex  flex-col lg:gap-y-[1.5rem] gap-y-[1rem] w-full h-[10rem]   lg:w-[14rem] lg:h-[14rem]">
                  <div className="flex items-center justify-evenly font-poppins w-[12rem] text-justify">
                    <MdLocalPhone size={20} color="#535252" />
                    <p className="text-[1.1rem] text-[#535252]">
                      +91 629 938 0114
                    </p>
                  </div>
                  <div className="flex items-center justify-evenly  font-poppins w-[16.5rem]">
                    <MdEmail color="#535252" size={20} />

                    <p className="text-[1.2rem]  text-[#535252]">
                      support@clinickhojo.com
                    </p>
                  </div>
                  <div className="flex  items-center  justify-evenly  font-poppins w-[14rem]">
                    <IoLocationSharp
                      className="ml-2"
                      color="#535252"
                      size={35}
                    />

                    <p className=" ml-[8px] text-[1.2rem] text-[#535252]">
                      Begusarai 851101,Bihar, India
                    </p>
                  </div>
                </div>
                {/* social links */}
                <div className="flex -mt-7 lg:-mt-10 py-10 gap-x-6 items-center justify-center">
                  <a href="https://www.facebook.com/Indianews36official?mibextid=ZbWKwL">
                    <FaFacebook
                      className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer"
                      color="red"
                      size={30}
                    />
                  </a>
                  <a href="https://www.instagram.com/clinickhojo?igsh=ZzBrc3RjMmZnbXA1">
                    <FaInstagram
                      className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer"
                      color="red"
                      size={30}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/clinic-khojo-10a08b2b9/">
                    <IoLogoLinkedin
                      className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer"
                      color="red"
                      size={30}
                    />
                  </a>
                  <IoLogoWhatsapp
                    className="lg:hover:scale-110 transition-all duration-200 lg:cursor-pointer"
                    color="red"
                    size={30}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* background image */}

      <img
        className=" absolute -top-12 mr-8 -z-40 flex lg:absolute w-[100%]    lg:-z-0 lg:-top-[10rem]   overflow-hidden left-1 scale-105"
        src={backgroundImg}
        color=""
      />
    </div>
  );
};

export default ContactUs;
