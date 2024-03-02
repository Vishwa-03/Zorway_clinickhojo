import { useState } from "react";
import Logo from "../assests/Logo.png";
import { MdDownload, MdPermContactCalendar } from "react-icons/md";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(false);
  };

  return (
    <div >
      <div className=" hidden lg:flex lg:w-[1152.66px] sm:w-[400px] mx-auto  lg:flex-row rounded-lg lg:gap-[13.5rem] bg-white h-[5.5rem] mt-[3rem] px-[1.25rem] py-[1.25rem] items-center">
        {/* Logo */}
        <div className="flex items-center justify-center mb-4 lg:mb-0">
          <img
            src={Logo}
            className="lg:w-[121.66px] lg:h-[100px] h-[100px] mt-0 w-[100px] lg:mt-3 sm:w-[30x] sm:h-[90px]"
            alt="Logo"
          />
        </div>

        {/* Main navbar */}
        <div className="flex flex-col lg:flex-row w-full lg:w-[1152.66px]">
          <ul className="flex items-center gap-[24px] mb-4 lg:mb-0">
            {/* Menu items */}
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 lg:mb-0">
              <Link to="#Home" smooth>
                Home
              </Link>
            </li>
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 lg:mb-0">
              <Link to="#AboutUs" smooth>
                About us
              </Link>
            </li>
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 lg:mb-0">
              <Link to="#Careers" smooth>
                Careers
              </Link>
            </li>
            <li className="hover:text-[#FF0B0B] cursor-pointer group weight text-[20px] font-poppins transition-all duration-200 mb-2 lg:mb-0">
              <Link to="#Blogs" smooth>
                Blogs
              </Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex flex-col lg:gap-x-6 lg:flex-row w-full lg:w-[410px] lg:ml-auto">
            <div className="flex lg:justify-evenly bg-[#FA0808] items-center w-full lg:w-[200px] hover:scale-105 transition-all cursor-pointer duration-300 rounded-[8px] py-[8px] px-[15px] mb-2 lg:mb-0">
              <button className="font-poppins text-[20px] text-white">
                <Link to="#Download" smooth>
                  Download App
                </Link>
              </button>
              <MdDownload color="white" size={24} />
            </div>
            <div className="flex bg-white items-center border-2 rounded-lg gap-[10px] border-red-500 py-[8px] px-[15px] hover:scale-105 transition-all duration-300 cursor-pointer">
              <button className="text-[#FA0808] text-[20px] font-poppins">
                <Link to="#Contact" smooth>
                  Contact us
                </Link>
              </button>
              <MdPermContactCalendar size={18} color="red" />
            </div>
          </div>
        </div>
      </div>

      <nav class="bg-white lg:hidden border-gray-200 ">
        <div class="flex  justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-16 w-16 " alt="Flowbite Logo" />
            <span class="self-center font-poppins text-2xl text-[#0529BB]  font-semibold whitespace-nowrap ">
              Clinic Khojo
            </span>
          </a>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex  bg-[#FA0808] items-center w-full lg:w-[200px] hover:scale-105 transition-all cursor-pointer duration-300 rounded-[8px] py-[8px] px-[7px]">
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
      <nav class="bg-gray-50 lg:hidden dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
          <div class="flex items-center gap-x-4">
            <ul class="flex flex-row font-medium mt-0 space-x-6 rtl:space-x-reverse text-sm">
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
                <a
                  href="#AboutUs"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-gray-900 dark:text-white hover:underline"
                >
                  Careers
                </a>
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
            <div className="flex -mr-4 bg-white items-center border-2 w-[88px] rounded-lg gap-[5px] border-red-500  px-[2px] hover:scale-105 transition-all duration-300 cursor-pointer py-[4px]">
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
