import React, { useState, useRef } from "react";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdLocalPhone, MdMessage } from "react-icons/md";
import { RxEnvelopeClosed } from "react-icons/rx";
import { send } from "emailjs-com";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { wait } from "@testing-library/user-event/dist/utils";

const ContactForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    isDoctor: false,
    phoneNumber: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // test email
    // sendForm("service_tvtn4aa", "template_8x9t1st", form.current, {
    //   publicKey: "JS_UPkJ-s6kN6yhth",
    // })
    emailjs
      .sendForm("service_ehdxk82", "template_q5yn98a", form.current, {
        publicKey: "ppNWdc6NKBn6cYnig",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully");
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
      }, 2000);
  };

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(FormData);
  return (
    <div
      id="Contact"
      className="w-[335px]  overflow-hidden h-[480px] mx-auto mt-8 p-6rounded-md bg-transparent  "
    >
      <form ref={form} className=" flex flex-col" onSubmit={sendEmail}>
        <div className="mb-4 z-10 relative ">
          <div className=" absolute  top-[23%] ">
            {FormData.name === "" ? (
              <div className="  px-2 flex gap-x-[2rem] items-center">
                <MdOutlinePersonOutline size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Full Name
                </span>
              </div>
            ) : (
              <div className="  px-2 flex gap-x-[2rem] items-center">
                <MdOutlinePersonOutline size={24} />
                
              </div>
            )}
          </div>

          <input
            type="text"
            required
            className="  bg-white  bg-opacity-25  text-black text-opacity-75  h-[44px]  drop-shadow-md px-[2.8rem] pb-[4px]  w-full  border rounded-md"
            value={FormData.name}
            name="name"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4 relative">
          <div className=" absolute top-[23%]">
            {FormData.email === "" ? (
              <div className=" px-2 flex gap-x-[2rem] items-center">
                <RxEnvelopeClosed size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Email
                </span>
              </div>
            ) : (
              <div className=" px-2 flex gap-x-[2rem] items-center">
              <RxEnvelopeClosed size={24} />
              
            </div>
            )}
          </div>
          <input
            type="email"
            required
            className=" bg-white  bg-opacity-25  text-black text-opacity-75  h-[44px]  drop-shadow-md px-[2.8rem] pb-[5px]  w-full border rounded-md"
            value={FormData.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-4 relative">
          <div className=" absolute top-[23%]">
            {FormData.phoneNumber === "" ? (
              <div className=" px-2 flex gap-x-[2rem] items-center">
                <MdLocalPhone size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Phone Number
                </span>
              </div>
            ) : (
              <div className=" px-2 flex gap-x-[2rem] items-center">
                <MdLocalPhone size={24} />
                
              </div>
            )}
          </div>
          <input
            type="tel"
            required
            className=" bg-white  bg-opacity-25  text-black text-opacity-75  h-[44px]  drop-shadow-md px-[2.8rem] pb-[5px] w-full border rounded-md"
            value={FormData.phoneNumber}
            name="phoneNumber"
            onChange={changeHandler}
          />
        </div>

        <div className="mb-4 flex   justify-between items-center">
          <div className="block font-poppins text-[16px] text-sm font-medium text-gray-600">
            Are you a doctor?
          </div>

          <div className="flex pr-2 flex-wrap  items-center">
            <label className="mr-4 font-medium text-[#229649] cursor-pointer">
              <input
                type="radio"
                value="yes"
                required
                // checked={FormData.isDoctor}
                className=" cursor-pointer"
                name="isDoctor"
                color="#535252"
                onChange={changeHandler}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className=" font-medium text-[#FA0808] cursor-pointer">
              <input
                type="radio"
                value="no"
                // checked={!FormData.isDoctor}
                required
                className="  cursor-pointer"
                color="#535252"
                onChange={changeHandler}
                name="isDoctor"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <div className="mb-4 z-10 relative ">
          <div className=" absolute top-[7%] ">
            {FormData.message === "" ? (
              <div className="  px-2 flex gap-x-[2rem] items-center">
                <MdMessage size={24} />
                <span className=" font-poppins text-[#535252] text-[12px] font-semibold">
                  Write us a message{" "}
                </span>
              </div>
            ) : (
              <div className="  px-2 flex gap-x-[2rem] items-center">
                <MdMessage size={24} />
                
              </div>
            )}
          </div>

          {/* <span className="absloute top-[24%]">
            Full name
          </span> */}

          <textarea
            rows="9"
            cols="80"
            required
            className=" bg-white   bg-opacity-25 text-black text-opacity-75 py-[.5rem] h-[164px]  drop-shadow-md px-[3rem] w-full border rounded-md"
            value={FormData.message}
            name="message"
            onChange={changeHandler}
          />
        </div>
        <div className="mt-4 mx-auto lg:mx-0  md:mx-0 sm:mx-0  xl:mx-0   ">
          <button
            type="submit"
            value="Send"
            className="bg-[#229649] drop-shadow-lg mb-[4rem] mx-auto text-white py-2 px-4 rounded-md hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
