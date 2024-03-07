import { useState } from "react";
import Logo from "../assests/Logo.png";
import Tm from "../assests/TM.png";
import { MdDownload, MdPermContactCalendar } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";
import { PiTrademark } from "react-icons/pi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className=" hidden lg:flex xl:w-[1200px] lg:w-[1000.66px] sm:w-[600px] mx-auto  lg:flex-row rounded-lg lg:gap-[5rem] xl:gap-[8rem] bg-white h-[5.5rem] lg:h-[4.5rem] mt-[3rem] px-[1.25rem] py-[1.25rem] items-center md:flex md:w-[750px] md:h-[4.3rem] md:flex-row md:items-center md:gap-[2rem] sm:flex sm:px-1 sm:h-[4rem] sm:flex-row sm:items-center sm:gap-x-2  ">
        {/* Logo */}
        <div className="  relative flex items-center justify-center mb-4 lg:mb-0 md:mb-0 sm:mb-0 xl:mb-0">
          <img
            src={Logo}
            className="lg:w-[170.66px] lg:h-[130px] md:w-[170.66px]  sm:w-[190px]   sm:mt-3 h-[100px] mt-0 w-[100px]  lg:mt-3  "
            alt="Logo"
          />
          <PiTrademark
            className="absolute -right-[6px] top-[25%] "
            color="#0529BB"
            size={24}
          />
        </div>

        {/* Main navbar */}
        <div
          className="flex flex-col lg:flex-row md:flex-row sm:flex-row sm:gap-x-3 md:gap-x-10
         w-full lg:w-[100%] "
        >
          <ul className="flex items-center text-[#535252] xl:gap-[38px] sm:gap-x-[15px]  md:mb-0 lg:gap-[28px] md:gap-x-3 mb-4 sm:mb-0 lg:mb-0">
            {/* Menu items */}
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 md:mb-0   md:text-[18px] sm:text-[17.5px] lg:mb-0">
              <Link to="#Home" smooth>
                Home
              </Link>
            </li>
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 md:mb-0 sm:text-[17.5px] lg:w-[75px] md:w-[72px] sm:w-[70px]  md:text-[18px] lg:mb-0">
              <Link to="#AboutUs" smooth>
                About us
              </Link>
            </li>
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 md:mb-0 sm:text-[17.5px]  md:text-[18px] lg:mb-0">
              <Link to="#Career" smooth>
                Careers
              </Link>
              
            </li>
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2  md:mb-0  sm:text-[17.5px] md:text-[18px] lg:mb-0">
              <Link to="#Blogs" smooth>
                Blogs
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row   xl:gap-x-6 lg:gap-x-4 lg:flex-row w-full lg:w-[380px] xl:ml-auto xl:w-[410px] md:items-center lg:ml-auto md:w-[300px] md:flex-row md:gap-x-4 sm:items-center sm:gap-x-3 ">
            <div className="flex lg:justify-evenly lg:h-[50px] bg-[#FA0808] items-center w-full lg:w-[180px] xl:w-[200px] md:w-[170px] md:h-[50px] hover:scale-105 transition-all cursor-pointer duration-300 rounded-[8px] py-[8px] px-[15px] md:px-[6px] md:gap-x-1 mb-2 md:mb-1 lg:mb-[3px] sm:w-[100px]  sm:h-[40px] sm:mb-0 sm:justify-evenly sm:px-1">
              <button className="font-poppins text-[20px] lg:text-[19px] md:text-[17px] sm:text-[14px] text-white">
                <Link to="#Download" smooth>
                  Download App
                </Link>
              </button>
              <MdDownload color="white" size={24} />
            </div>
            <div className="flex bg-white md:h-[50px] md:items-center items-center border-2 rounded-lg gap-[10px] border-red-500 md:mb-1 py-[8px] px-[15px] md:px-[10px] hover:scale-105 transition-all sm:w-[100px] sm:h-[40px] md:gap-x-1 md:w-[150px] duration-300 cursor-pointer sm:px-[0px] sm:gap-x-0 sm:justify-evenly ">
              <button className="text-[#FA0808] text-[20px] md:text-[17.5px] sm:text-[14px] font-poppins">
                <Link to="#Contact" smooth>
                  Contact us
                </Link>
              </button>
              <MdPermContactCalendar className="" size={18} color="red" />
            </div>
          </div>
        </div>
      </div>

      <nav class="bg-white  lg:hidden md:hidden sm:hidden h-[4.1rem]  border-gray-200 ">
        <div class="flex h-[85px]   justify-between items-center mx-auto max-w-screen-xl p-1">
          <div className=" relative">
            <a
              href=""
              class="flex items-center -space-x-[4px] rtl:space-x-reverse"
            >
              <img
                src={Logo}
                className=" w-[140px] h-[115px]  object-contain z-0 -mt-3 "
                alt="Flowbite Logo"
              />
            </a>
            <PiTrademark
              className=" absolute top-2 right-3"
              color="#0529BB"
              size={21}
            />
          </div>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex -mt-6  bg-[#FA0808] items-center w-full lg:w-[200px] hover:scale-105 transition-all cursor-pointer duration-300 rounded-[8px] py-[8px] px-[7px]">
              <button className="font-poppins text-[14px] text-white">
                <Link to="#Download" smooth>
                  Download App
                </Link>
              </button>
              <MdDownload color="white" size={20} />
            </div>
          </div>
        </div>
      </nav>
      <nav class="bg-gray-50 z-20 lg:hidden md:hidden sm:hidden dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center justify-between mr-1">
            <ul class="flex flex-row justify-evenly font-medium mt-0 space-x-3 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link to="#AboutUs" smooth>
                  <a
                    href="#AboutUs"
                    class="text-gray-900 z-10 dark:text-white hover:underline"
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link to="#Careers" smooth>
                  <a
                    href="#Careers"
                    class="text-gray-900 dark:text-white hover:underline"
                  >
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Blogs
                </a>
              </li>
            </ul>
            <div
              className="flex -mr-4 bg-white items-center border-2 w-[88px] rounded-lg gap-[5px] border-red-500 
             px-[1px] hover:scale-105 transition-all duration-300 cursor-pointer py-[8px]"
            >
              <button className="text-[#FA0808] text-[12px] font-poppins">
                <Link to="#Contact" smooth>
                  Contact us
                </Link>
              </button>
              <MdPermContactCalendar size={18} color="red" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
