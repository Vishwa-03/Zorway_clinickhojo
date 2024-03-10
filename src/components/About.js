import React from "react";
import prescriptionImage from "../assests/Medical prescription-bro.svg";
import backgroundImg from "../assests/AboutPageTilt.svg";
import { HashLink as Link } from "react-router-hash-link";
import { MdPermContactCalendar } from "react-icons/md";
import magnifine from "../assests/Magnifier.svg";
import aboutUsMedicalPrescription from "../assests/aboutUsMedicalPrescription.png";
import AboutUs2 from "./AboutUs2";
const About = () => {
  return (
    <div className="">
      <div
        id="AboutUs"
        className="w-full overflow-y-hidden  relative lg:mt-[4rem] h-[113rem] mb-10 lg:mb-0 md:mb-0  lg:h-[53rem] overflow-hidden sm:h-[100rem] md:h-[38rem] md:mt-[4rem] md:bg-[#E1E0E0] sm:bg-[#E1E0E0]  lg:bg-[#E1E0E0] "
      >
        <div className="z-100  absolute    flex flex-row w-full   justify-evenly">
          <div className="flex flex-col lg:bg-inherit  items-start">
            <div
              id=""
              className="bg-white mx-auto  xl:-ml-[6.4rem] lg:-ml-[1.8rem] md:-ml-[3rem] mt-40 lg:mt-[10rem] lg:w-[364px] md:w-[364px] sm:w-[300px] lg:h-[60px] xl:h-[60px] md:h-[60px] h-[50px] md:rounded-r-full rounded-full lg:rounded-r-full w-[250px] "
            >
              <div className="flex flex-row-reverse lg:mr-[2rem] md:mr-[2rem]  items-end text-[#0529BB] font-medium ">
                <p className=" font-poppins mx-auto lg:mx-0 xl:mx-0 md:mx-0 text-[30px] lg:text-[38px] md:text-[38px] sm:text-[38px]">
                  About Us
                </p>
              </div>
            </div>

            <div className="h-[32rem] ">
              <div className="flex flex-col mt-4 lg:mt-[1rem]  xl:mt-[2rem] md:mt-2   h-[100rem]  bg-[#E1E0E0] lg:bg-inherit gap-0  lg:gap-[2rem] lg:ml-[6rem] lg:w-[660px] md:h-[300px] sm:h-[400px] w-full px-4 lg:px-0  md:w-11/12  md:mx-auto">
                <p className="text-justify text-[#3b3a3b] w-full px-2  font-poppins   leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
                  Welcome to Clinic Khojo, your premier health tech solution
                  revolutionizing the way patients connect with nearby doctors.
                  As a proud unit of the <a className=" text-[#0529BB]" href="https://www.facebook.com/profile.php?id=61556769371135&mibextid=ZbWKwL">
                  Shamyani health services pvt ltd. </a>  (An
                  ISO 9001:2015 certified company) headquartered in the vibrant
                  city of Begusarai, Bihar, we are committed to enhancing access
                  to quality healthcare services for all. At Clinic Khojo, we
                  understand the importance of timely and convenient healthcare
                  access. Our platform empowers patients to effortlessly book
                  appointments with trusted local doctors, ensuring prompt
                  medical attention when needed most. Whether you're seeking a
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
                <div className="flex bg-[#FA0808] items-center mx-auto lg:mx-0 md:mx-0  hover:scale-105 transition-all cursor-pointer duration-300 h-[46px] w-[160px] mt-3 lg:mt-0   rounded-[6px] py-[8px] px-[12px] justify-evenly drop-shadow-md">
                  <button className=" font-poppins text-[20px]  text-white">
                    <Link to="#Contact" smooth>
                      {" "}
                      Contact us{" "}
                    </Link>
                  </button>
                  <MdPermContactCalendar color="white" size={24} />
                </div>
                {/* <div className="lg:flex absolute hidden md:flex lg:flex-row w-[70%] top-[10rem] gap-x-0">
                <div className="bg-white -ml-[4.5rem] xl:-ml-[12rem] lg:-ml-[8rem] mt-8 lg:mt-[3rem] w-[364px] h-[60px] rounded-r-full items-center">
                  <div className="flex flex-row-reverse lg:mr-[2rem] mr-[2rem] items-end text-[#0529BB] font-medium  ">
                    <p className=" font-poppins text-[34px]">
                      Benefits to doctor
                    </p>
                  </div>
                </div>
                <p className="text-justify text-[#3b3a3b] w-full mt-10  font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
                  Clinic Khojo offers doctors numerous advantages, including
                  increased visibility to potential patients, efficient
                  appointment management, and access to patient information for
                  informed decision-making. By being listed on the platform,
                  doctors can expand their patient base, improve practice
                  efficiency, and manage their reputation through patient
                  feedback. Additionally, Clinic Khojo may provide opportunities
                  for telemedicine, continuing education, and networking,
                  enabling doctors to enhance their practice and contribute to
                  improving healthcare accessibility.
                </p>
                <div className="bg-white -ml-[4rem] xl:-ml-[12rem] lg:-ml-[8rem] mt-8 lg:mt-[3rem] w-[364px] h-[60px] rounded-r-full">
                  <div className="flex flex-row-reverse lg:mr-[2rem] mr-[2rem] items-end text-[#0529BB] font-medium ">
                    <p className=" font-poppins text-[34px]">
                      Benefits to patient
                    </p>
                  </div>
                </div>
                <p className="text-justify text-[#3b3a3b] w-full mt-10  font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
                  Clinic Khojo offers patients numerous advantages. It provides
                  convenience by enabling easy appointment booking with nearby
                  doctors, ensuring timely access to care. The platform offers a
                  wide range of specialists, transparent information about
                  doctors, and flexible scheduling options. Additionally, it may
                  facilitate health records management services. With features
                  like appointment reminders and feedback mechanisms, Clinic
                  Khojo empowers patients to take control of their health
                  journey, making informed decisions and actively participating
                  in their treatment plans.
                </p>
              </div> */}
                <div className=" md:hidden lg:hidden ">
                  <div>
                    <div className="bg-white mx-auto xl:-ml-[12rem] lg:-ml-[8rem] mt-12 lg:mt-[3rem] w-[310px] h-[50px]  md:w-[364px] md:h-[60px] sm:w-[364px] sm:h-[60px] lg:w-[364px] lg:h-[60px] rounded-full items-center">
                      <div className="flex flex-row-reverse lg:mr-[2rem]  items-end text-[#0529BB] font-medium  ">
                        <p className=" font-poppins text-[30px] mx-auto">
                          Benefits to doctor
                        </p>
                      </div>
                    </div>
                    <p className=" text-justify text-[#3b3a3b] w-full lg:mt-10 md:mt-10 mt-6 px-2  font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
                      Clinic Khojo offers doctors numerous advantages, including
                      increased visibility to potential patients, efficient
                      appointment management, and access to patient information
                      for informed decision-making. By being listed on the
                      platform, doctors can expand their patient base, improve
                      practice efficiency, and manage their reputation through
                      patient feedback. Additionally, Clinic Khojo may provide
                      opportunities for telemedicine, continuing education, and
                      networking, enabling doctors to enhance their practice and
                      contribute to improving healthcare accessibility.
                    </p>
                    <div className="bg-white  xl:-ml-[12rem] lg:-ml-[8rem] mt-12 lg:mt-[3rem] w-[304px] h-[50px] md:w-[364px] md:h-[60px] sm:w-[364px] sm:h-[60px] lg:w-[364px] lg:h-[60px] rounded-full mx-auto">
                      <div className="flex flex-row-reverse lg:mr-[2rem]  items-end text-[#0529BB] font-medium ">
                        <p className=" mx-auto my-auto font-poppins text-[30px] ">
                          Benefits to patient
                        </p>
                      </div>
                    </div>
                    <p className="text-justify text-[#3b3a3b] w-full mt-6 px-2 font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
                      Clinic Khojo offers patients numerous advantages. It
                      provides convenience by enabling easy appointment booking
                      with nearby doctors, ensuring timely access to care. The
                      platform offers a wide range of specialists, transparent
                      information about doctors, and flexible scheduling
                      options. Additionally, it may facilitate health records
                      management services. With features like appointment
                      reminders and feedback mechanisms, Clinic Khojo empowers
                      patients to take control of their health journey, making
                      informed decisions and actively participating in their
                      treatment plans.
                    </p>
                  </div>
                  <div
                    id="Careers"
                    className="bg-white  xl:-ml-[12rem] lg:-ml-[8rem] mt-12 lg:mt-[3rem] w-[240px] h-[50px] md:w-[364px] md:h-[60px] sm:w-[364px] sm:h-[60px] lg:w-[364px] lg:h-[60px] rounded-full mx-auto"
                  >
                    <div className="flex flex-row-reverse lg:mr-[2rem]   items-end text-[#0529BB] font-medium  mx-auto mt-0">
                      <p className=" font-poppins text-[30px] mx-auto">
                        Careers
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center flex-col">
                    <p className="text-justify text-[#3b3a3b] px-2 w-full  mt-6 font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
                      Join Clinic Khojo for an opportunity to be part of a
                      dynamic team reshaping healthcare accessibility. We offer
                      exciting career prospects in a collaborative environment,
                      where your skills can make a real difference in people's
                      lives. Whether you're tech-savvy, a healthcare
                      professional, or a marketing enthusiast, Clinic Khojo
                      welcomes passionate individuals ready to innovate and
                      drive positive change.
                    </p>
                    <span className="text-white mx-auto mt-3 bg-[#FA0808] py-1.5 px-3 font-medium rounded-full">
                      <div className="flex gap-x-1">
                        <span>Send your CV at</span>
                        <span className=" underline">
                          <a href="mailto:hr@clinickhojo.com" className=" ">
                            hr@clinickhojo.com
                          </a>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                {/* <img
            className="h-[15rem] absolute right-[30%] top-0  "
            src={prescriptionImage}
          /> */}
              </div>
            </div>
          </div>
          <div className=" my-auto">
            <img
              className=" w-[44.5rem] hidden lg:flex  "
              src={aboutUsMedicalPrescription}
            />
          </div>
        </div>
        <div className="">
          <img
            className="-z-10  -top-[150px] lg:top-0 lg:right-0 w-full min-h-[715px]    absolute"
            src={backgroundImg}
          />
        </div>
        <img
          src={magnifine}
          className=" absolute w-[11rem] lg:w-[14rem] md:w-[14rem] sm:w-[14rem] top-4 right-4  h-[13rem] lg:left-[35rem] "
        />
      </div>
      <div id="Career" className="hidden lg:flex md:flex xl:flex">
        <AboutUs2 />
      </div>
    </div>
  );
};

export default About;
