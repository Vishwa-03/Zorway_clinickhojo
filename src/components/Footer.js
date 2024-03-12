import React, { useState } from "react";
import backgroundImg from "../assests/backgroundFooter.png";
import FooterIcon from "../assests/footerImage.png";
import { FaCopyright, FaPaperPlane } from "react-icons/fa";
import ClinicKhojo from "../assests/Clip path group.png";
import zorway from "../assests/zorway.png";
import wheelchair from "../assests/wheelchair.png";
import { PiTrademark } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";
import { HashLink as Link } from "react-router-hash-link";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Footer = () => {
  const [message, setMessage] = useState("");
  const form = useRef();
  const form2 = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    emailjs
      .sendForm("service_ehdxk82", "template_bxasuj5", form.current, {
          publicKey: "ppNWdc6NKBn6cYnig",
        })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    // toast.success("Email sent successfully");
    setTimeout(() => {
      // Update the message after the delay
      // setMessage('Process complete!');
      window.location.reload();
    }, 2200);
   
    console.log(message);
  };
  const sendEmail2 = (e) => {
    e.preventDefault();
    // Handle form submission logic here
   
    // toast.success("Email sent successfully");
    
    emailjs
    .sendForm("service_ehdxk82", "template_bxasuj5", form2.current, {
        publicKey: "ppNWdc6NKBn6cYnig",
      })
    .then(
      () => {
        console.log("SUCCESS!");
        toast.success("Message sent successfully");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
    setTimeout(() => {
      // Update the message after the delay
      // setMessage('Process complete!');
      window.location.reload();
    }, 2200);
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
        className="lg:mt-[10rem] ml-[1px]   mt-[9rem] scale-[101.5%] lg:flex lg:ml-2 lg:scale-[101%] lg:h-[31rem]  w-full"
        src={backgroundImg}
      />
      <img
        className="absolute z-40 h-[15rem] lg:h-[18rem] -top-10  right-3 -rotate-[20deg] lg:rotate-0 lg:top-0 lg:right-[20%]"
        src={wheelchair}
      />
      <div className=" flex top-[13rem] w-[100%] items-center  h-[505px] pb-4 lg:pb-0   bg-[#0529BB] lg:bg-inherit  justify-center lg:ml-[10rem] lg:items-start md:items-start sm:items-start flex-col absolute lg:top-0 ">
        <div className=" relative -mt-10 lg:mt-[20rem] lg:ml-[12.84px]">
          <img className="w-[168px]  lg:-ml-6" src={FooterIcon} />
          <PiTrademark
            color="white "
            size={21}
            className=" absolute top-0 right-0 lg:top-2 lg:right-4"
          />
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
            <div className="flex flex-col   lg:w-[30%] md:w-[50%] my-2 lg:my-0   items-center text-white font-poppins">
              <div className="flex flex-row gap-x-16 lg:w-[30%] md:w-[50%] my-2 lg:my-0 justify-evenly text-white font-poppins  ">
                <div className="  ">
                  <Link to="#" smooth>
                    <p className="cursor-pointer opacity-80  hover:opacity-100">
                      Home
                    </p>
                  </Link>
                  <Link to="#Contact" smooth>
                    <p className="cursor-pointer opacity-80  hover:opacity-100">
                      Contact Us
                    </p>
                  </Link>
                  <Link to="#AboutUs" smooth>
                    <p className="cursor-pointer opacity-80  hover:opacity-100">
                      About Us
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link to="#Careers" smooth>
                    <p className="cursor-pointer opacity-80  hover:opacity-100">
                      Careers
                    </p>
                  </Link>
                  <Link
                    to="https://drive.google.com/file/d/1G9vvOVifQy4sRe6ptdiQXbXDVtHqxyfl/view"
                    smooth
                  >
                    <p className="cursor-pointer opacity-80  hover:opacity-100">
                      Blogs
                    </p>
                  </Link>
                </div>
              </div>
              <div className=" flex flex-row gap-x-8 lg:hidden md:hidden sm:hidden">
                <a href="https://drive.google.com/file/d/1B39WDvGohMvVnwn_eZbBKrz9jtWD7adT/view?usp=sharing">
                  <p className="cursor-pointer opacity-80  hover:opacity-100">
                    Terms of service
                  </p>
                </a>
                <a href="https://drive.google.com/file/d/1zoNsY3xqhBV3FKygQZKY6CzlW5GgP5l9/view?usp=sharing">
                  <p className="cursor-pointer opacity-80  hover:opacity-100">
                    Privacy Policy
                  </p>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-2  w-[260px] md:w-[260px] lg:w-[260px] sm:w-[260px] lg:ml-10 mt-4  md:ml-0 mr-10 ml-6 relative items-center cursor-pointer h-[44px] rounded-lg">
              <form ref={form} className=" " onSubmit={sendEmail}>
               {/* <div className="">

                {message === "" ? (
                  <span className="absolute font-poppins  text-[#535252] text-[12px] top-[.75rem] left-[2rem]" onClick={()=>{
                    
                  }}>
                    Send Message
                  </span>
                ) : (
                  <span></span>
                  )}

                  </div> */}
               
                <input
                   type="text"
                   id="message"
                   name="message"
                   value={message.name}
                   onChange={changeHandler}
                  className="lg:w-[240px] w-[250px] h-[40px] lg:rounded-l-lg rounded  border-none cursor-pointer border-transparent outline-none px-3  "
                  placeholder="Send message"
                />
                  <button type="submit" value="Send">
                    .
                <div className="bg-[#FA0808] lg:-right-[2px] absolute   top-[0px] h-[40.5px]  lg:h-[40px] w-[62px] rounded-r-lg md:-right-1 sm:right-0 right-0">
                </div>
                <span className="absolute top-[0.5rem] z-20 lg:right-[1rem] lg:top-[.45rem] md:right-5 sm:right-5 right-5">
                  <FaPaperPlane color="white" size={24} />
                </span>
                  </button>
              </form>
              {/* <div className='bg-[#FA0808] h-full hidden lg:flex  lg:h-[40px] w-[62px] rounded-r-lg'>
            </div> */}
              <p className="w-full text-[12px] justify-center flex text-white ">
                An ISO 9001:2015 Certified company.
              </p>
            </div>
          </div>

          <div className="hidden md:hidden sm:hidden lg:w-[30%] lg:flex xl:flex 2xl:flex md:w-[50%] my-2 lg:my-0 justify-evenly text-white font-poppins">
            <div className="  ">
              <Link to="#" smooth>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Home
                </p>
              </Link>
              <Link to="#AboutUs" smooth>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  About Us
                </p>
              </Link>
              <Link to="#ContactUs" smooth>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Contact Us
                </p>
              </Link>
            </div>
            <div className="">
              <Link to="#Career" smooth>
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Careers
                </p>
              </Link>
              <Link
                to="https://drive.google.com/file/d/1G9vvOVifQy4sRe6ptdiQXbXDVtHqxyfl/view"
                smooth
              >
                <p className="cursor-pointer opacity-80  hover:opacity-100">
                  Blogs
                </p>
              </Link>
            </div>
          </div>

          <div className=" hidden w-[260px]  sm:hidden md:hidden xl:flex 2xl:flex lg:flex md:w-[260px] lg:w-[260px] lg:flex-col lg:gap-y-2  lg:items-center sm:w-[260px] lg:ml-10 mt-4 ml-auto md:ml-0 mr-10  relative items-center cursor-pointer h-[44px] rounded-lg">
            <form ref={form2} className=" " onSubmit={sendEmail2}>
              {/* {message === "" ? (
                <span className="absolute font-poppins text-[#535252] text-[12px] top-[.75rem] left-[2rem]">
                  Send Message
                </span>
              ) : (
                <span></span>
              )} */}

             
              <input
                 type="text"
                 id="message"
                 name="message"
                 value={message.name}
                 onChange={changeHandler}
                className="lg:w-[240px] w-[250px] h-[40px] lg:rounded-l-lg rounded  border-none cursor-pointer  px-3 outline-none"
                placeholder="Send message"
              />
                <button type="submit" value="Send">
              <div className="bg-[#FA0808] lg:-right-[2px]  absolute  -top-[.1px] h-[40.5px]  lg:h-[40px] w-[62px] rounded-r-lg md:-right-1 sm:right-0 right-0">
                   <span className="absolute top-[0.5rem] z-20 lg:right-[1rem] lg:top-[.45rem] md:right-5 sm:right-5 right-5">
                <FaPaperPlane color="white" size={24} />
              </span>
              </div>
                </button>
            </form>
            {/* <div className='bg-[#FA0808] h-full hidden lg:flex  lg:h-[40px] w-[62px] rounded-r-lg'>
            </div> */}
            <p className="w-full text-[12px] justify-center flex text-white ">
              An ISO 9001:2015 Certified company.
            </p>
          </div>
        </div>
        <div className="  flex w-full gap-x-6 absolute justify-between -bottom-6 items-center text-white mb-0  lg:hidden  xl:hidden 2xl:hidden   flex-col ">
          <div className="flex w-full items-center gap-x-6 flex-row justify-between">
            <div className=" w-[18%] md:w-[10%] sm:w-[5%] bg-white h-[.1rem]"></div>
            <div className=" md:flex  sm:flex flex-col hidden">
              <p className=" sm:text-[13px] text-[10px] md:text-[13px] ">
                {" "}
                Begusarai 851101, Bihar{" "}
              </p>
              <p className="  sm:text-[13px] md:text-[14px] text-[10px]">
                India
              </p>
            </div>
            <div className="flex items-center   justify-center  text-[14px] lg:text-[16px] gap-x-1 lg:gap-x-1">
              <a className="flex gap-x-[5px]" href="https://zorway.in/">
                <span className=""> powered by</span>

                <img className="lg:w-[24px] w-[18px] " src={zorway} />

                <a href="https://zorway.in/">
                  {" "}
                  <span>ZORWAY</span>
                </a>
              </a>
            </div>
            <div className=" items-center   justify-between   md:flex  sm:flex   hidden">
              <div className="flex gap-x-3">
                <a href="https://drive.google.com/file/d/1B39WDvGohMvVnwn_eZbBKrz9jtWD7adT/view?usp=sharing">
                  <p className="  sm:text-[14px] md:text-[14px] text-[10px]">
                    Terms of services
                  </p>
                </a>
                <a href="https://drive.google.com/file/d/1zoNsY3xqhBV3FKygQZKY6CzlW5GgP5l9/view?usp=sharing">
                  <p className="  sm:text-[14px]  md:text-[14px] text-[10px]">
                    Privacy Policy
                  </p>
                </a>
              </div>
            </div>
            <div className="w-[18%] md:w-[10%] sm:w-[5%] bg-white h-[.1rem]"></div>
          </div>
          <div className="w-full  ">
            <div className=" bg-[#0529BB]  w-[full] flex flex-row py-2 justify-center mx-auto items-center     ">
              <p className=" mx-auto text-[10px] w-full justify-center  text-white opacity-80 flex items-center gap-x-2 ">
                Copyright
                <FaRegCopyright /> 2024,
                <a
                  className=" hover:text-balck hover:opacity-75 duration-200"
                  href="https://www.facebook.com/profile.php?id=61556769371135&mibextid=ZbWKwL"
                >
                  Shamyani Health Services Pvt Ltd.{" "}
                </a>{" "}
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex   hidden text-white items-center gap-x-6 mt-4 w-full   opacity-80 absolute lg:w-[100%] md:w-[100%] top-[36rem] lg:top-[36rem] justify-between">
        <div className="flex items-center  w-full gap-x-[1.2rem]">
          <div className="lg:w-[146px]  w-[44px] bg-white h-[.1rem]"></div>
          <div className=" lg:flex  xl:flex flex-col hidden">
            <p className=" sm:text-[14px] lg:text-[16px] text-[10px] md:text-[14px] ">
              {" "}
              Begusarai 851101, Bihar{" "}
            </p>
            <p className=" lg:text-[16px] sm:text-[14px] md:text-[14px] text-[10px]">
              India
            </p>
          </div>
        </div>
        <div className="flex items-center w-full  justify-center sm:text-[14px]  text-[10px] md:text-[16px] lg:text-[16px] gap-x-1 lg:gap-x-1">
          <a className="flex gap-x-1" href="https://zorway.in/">
            <span className=""> powered by</span>

            <img className="lg:w-[24px]  w-[20px] " src={zorway} />
            <span className=" "></span>
            <a href="https://zorway.in/">
              {" "}
              <span>ZORWAY</span>
            </a>
          </a>
        </div>
        <div className=" items-center w-full gap-x-0  justify-between   lg:gap-x-[8px] lg:flex  xl:flex   hidden">
          <div className="flex gap-x-3">
            <a href="https://drive.google.com/file/d/1B39WDvGohMvVnwn_eZbBKrz9jtWD7adT/view?usp=sharing">
              <p className=" lg:text-[16px] sm:text-[14px] md:text-[14px] text-[10px]">
                Terms of services
              </p>
            </a>
            <a href="https://drive.google.com/file/d/1zoNsY3xqhBV3FKygQZKY6CzlW5GgP5l9/view?usp=sharing">
              <p className=" lg:text-[16px] sm:text-[14px]  md:text-[14px] text-[10px]">
                Privacy Policy
              </p>
            </a>
          </div>
          <div className="lg:w-[144px] w-[100px] bg-white h-[.1rem]"></div>
        </div>
      </div>
      <div className=" bg-[#0529BB] hidden   w-[full] lg:flex lg:flex-row py-2 justify-center mx-auto items-center     ">
        <p className=" mx-auto w-full justify-center   text-white opacity-80 flex items-center gap-x-2 ">
          {" "}
          Copyright
          <FaRegCopyright /> 2024,
          <a
            className=" hover:text-balck hover:opacity-75 duration-200"
            href="https://www.facebook.com/profile.php?id=61556769371135&mibextid=ZbWKwL"
          >
            Shamyani Health Services Pvt Ltd.{" "}
          </a>{" "}
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
