import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MdPermContactCalendar } from 'react-icons/md';

import '../Hamburger.css'; // Import your CSS file

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="hamburger-menu-container">
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuOpen && (
        <nav className="menu   shadow rounded-md   dark:bg-gray-700 drop-shadow-lg">
          <ul className=' flex justify-between'>
            <div className='flex items-center gap-x-2'>
            <li>
              <a href="#" className="menu-item text-white" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <Link to="AboutUs" smooth className="menu-item text-white" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="Careers" smooth className="menu-item text-white" onClick={toggleMenu}>
                Careers
              </Link>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1G9vvOVifQy4sRe6ptdiQXbXDVtHqxyfl/view" className="menu-item text-white" onClick={toggleMenu}>
                Blogs
              </a>
            </li>
            </div>
            <div className=' flex items-center'>
            <li className=" flex items-center ">
                <div className='flex  gap-x-1   bg-white  border-2  rounded-lg  border-red-500 
             px-[8px] hover:scale-105 transition-all duration-300 cursor-pointer '>

              <button className="menu-item  text-[#FA0808] text-[14px] font-poppins" onClick={toggleMenu}>
                <Link to="Contact" smooth>
                  Contact us
                </Link>
              </button>
              <MdPermContactCalendar size={20} color="red" />
                </div>
            </li>
            </div>
            
            
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;
