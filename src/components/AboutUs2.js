import React from "react";

const AboutUs2 = () => {
  return (
    <div className="bg-[#E1E0E0] pt-10 pb-20 gap-y-20 z-0  lg:-mt-[10rem] md:-mt-[2rem] flex-col flex  items-center">
      <div className="flex flex-row  w-[87%] gap-x-16 mx-auto">
        <div cla>
          <div className="bg-white  lg:w-8/12 mx-auto    md:w-9/12   rounded-full  ">
            <div className="flex flex-row justify-center  text-[#0529BB] font-medium  ">
              <p className=" font-poppins md:text-[28px] lg:text-[34px]">
                Benefits to doctor
              </p>
            </div>
          </div>
          <p className="text-justify text-[#3b3a3b] w-full mt-10  font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
            Clinic Khojo offers doctors numerous advantages, including increased
            visibility to potential patients, efficient appointment management,
            and access to patient information for informed decision-making. By
            being listed on the platform, doctors can expand their patient base,
            improve practice efficiency, and manage their reputation through
            patient feedback. Additionally, Clinic Khojo may provide
            opportunities for telemedicine, continuing education, and
            networking, enabling doctors to enhance their practice and
            contribute to improving healthcare accessibility.
          </p>
        </div>
        <div>
          <div className="bg-white  lg:w-8/12 mx-auto    md:w-9/12   rounded-full ">
            <div className="flex flex-row  justify-center text-[#0529BB] font-medium ">
              <p className=" justify-center font-poppins md:text-[28px] lg:text-[34px]">
                Benefits to patient
              </p>
            </div>
          </div>
          <p className="text-justify text-[#3b3a3b] w-full mt-10  font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]">
            Clinic Khojo offers patients numerous advantages. It provides
            convenience by enabling easy appointment booking with nearby
            doctors, ensuring timely access to care. The platform offers a wide
            range of specialists, transparent information about doctors, and
            flexible scheduling options. Additionally, it may facilitate health
            records management services. With features like appointment
            reminders and feedback mechanisms, Clinic Khojo empowers patients to
            take control of their health journey, making informed decisions and
            actively participating in their treatment plans.
          </p>
        </div>
      </div>
      <div className="w-1/2 ">
        <div className="bg-white  lg:w-5/12 mx-auto    md:w-5/12   rounded-full  ">
          <div className="flex flex-row px-6 justify-center text-[#0529BB] font-medium ">
            <p className=" font-poppins text-[38px]">Careers</p>
          </div>
        </div>
        <div className="flex justify-center flex-col">

        
        <p
          
          className="text-justify text-[#3b3a3b] mx-auto  mt-10 font-poppins  leading-[20.6px] lg:leading-[25px] text-[12.5px] lg:text-[16px]  md:text-[16px] sm:text-[16px]"
        >
          Join Clinic Khojo for an opportunity to be part of a dynamic team
          reshaping healthcare accessibility. We offer exciting career prospects
          in a collaborative environment, where your skills can make a real
          difference in people's lives. Whether you're tech-savvy, a healthcare
          professional, or a marketing enthusiast, Clinic Khojo welcomes
          passionate individuals ready to innovate and drive positive change.
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
    </div>
  );
};

export default AboutUs2;
