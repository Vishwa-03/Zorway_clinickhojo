import React from "react";
import prescriptionImage from "../assests/Medical prescription-bro.svg";
import backgroundImg from "../assests/AboutPageTilt.svg";
import { HashLink as Link } from "react-router-hash-link";
import { MdPermContactCalendar } from "react-icons/md";
import magnifine from "../assests/Magnifier.svg";
const About = () => {
  return (
    <div
      id="AboutUs"
      className="w-full overflow-y-hidden  relative lg:mt-[4rem] h-[53rem] mb-10  lg:h-[754px] overflow-hidden  "
    >
      <div className="z-100  absolute overflow-hidden   flex flex-row w-full   justify-evenly">
        <div className="flex flex-col lg:bg-inherit  items-start">
          <div className="bg-white -ml-[7rem] lg:-ml-[1.8rem] mt-40 lg:mt-[10rem] w-[364px] h-[60px] rounded-r-full">
            <div className="flex flex-row-reverse lg:mr-[2rem] mr-[2rem] items-end text-[#0529BB] font-medium ">
              <p className=" font-poppins text-[38px]">About Us</p>
            </div>
          </div>
          <div className="h-[80rem]">
            <div className="flex flex-col mt-[3rem] h-[50rem]  bg-[#E1E0E0] lg:bg-inherit gap-0  lg:gap-[2rem] lg:ml-[6rem] lg:w-[660px] w-full px-4 lg:px-0 ">
              <div className="flex  gap-x-4">
                <p className="text-justify font-poppins  leading-[20.6px] lg:leading-[25px] text-[12px] lg:text-[16px] w-1/2">
                  Welcome to Clinic Khojo, your premier health tech solution
                  revolutionizing the way patients connect with nearby doctors.
                  As a proud unit of the Shamyani health services pvt ltd. (An
                  ISO 9001:2015 certified company) headquartered in the vibrant
                  city of Begusarai, Bihar, we are committed to enhancing access
                  to quality healthcare services for all. At Clinic Khojo, we
                  understand the importance of timely and convenient healthcare
                  access. Our platform empowers patients to effortlessly book
                  appointments with trusted local doctors, ensuring prompt
                  medical attention when needed most. Whether you're seeking a
                </p>
                <p className="text-justify text-[12px] font-poppins  lg:leading-[25px] leading-[20.6px] lg:text-[16px] w-1/2">
                  routine check-up or specialized care, Clinic Khojo simplifies
                  the process, allowing you to focus on what matters most – your
                  health and well-being. Driven by innovation and a passion for
                  improving healthcare delivery, our team is dedicated to
                  continuously enhancing our platform's features and
                  functionality. With a user-friendly interface and a vast
                  network of healthcare providers, Clinic Khojo strives to make
                  healthcare more accessible, efficient, and patient-centered.
                  Join us on our mission to redefine healthcare accessibility.
                  Experience the convenience of Clinic Khojo and take control of
                  your health journey
                </p>
              </div>

              <div className="flex bg-[#FA0808] items-center gap-[10px] hover:scale-105 transition-all cursor-pointer duration-300 h-[46px] w-[169px] mt-6 lg:mt-0  rounded-[8px] py-[8px] px-[12px] justify-between drop-shadow-md">
                <button className=" font-poppins text-[20px]  text-white">
                  <Link to="#Contact" smooth>
                    {" "}
                    Contact us{" "}
                  </Link>
                </button>
                <MdPermContactCalendar color="white" size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img
            className="h-[45.5rem] w-[44.5rem] hidden lg:flex "
            src={prescriptionImage}
          />
        </div>
      </div>
      <div className="">
        <img
          className="-z-10  -top-48 lg:top-0 lg:right-0 w-full h-[754px] absolute"
          src={backgroundImg}
        />
      </div>
      <img
        src={magnifine}
        className=" absolute w-[14rem] top-0 right-1  h-[13rem] lg:left-[35rem] "
      />
    </div>
  );
};

export default About;
