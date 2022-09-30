import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitch, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#121626] text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div className="mt-20">
          <h1 className="py-4 font-baloo text-white font-bold">
            <span className="  text-[#515bbc]">Skilley</span>
          </h1>
          <h2 className="py-2 text-gray-300 font-bold">
            A Freelancing Startup
          </h2>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            ML || Web3 || Frontend || UI-UX
          </p>
          <p className="py-4 text-gray-500 max-w-[70%] m-auto">
            We Specialize in building Web3 Websites with awesome frontend. We
            also provide appealing UX/UI designs. Client Satisfaction is our
            highest priority.🎯
          </p>
          <div className="flex text-gray-200 items-center justify-center m-auto py-4 ">
            <a
              href="https://www.linkedin.com/in/ashutoshshimpi"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full hover:bg-[#515bbc] items-center justify-center text shadow-lg shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-100">
                <FaLinkedinIn />
              </div>
            </a>
          </div>
          
          <div className="flex text-gray-200 items-center   justify-center m-auto py-4 ">
            <a
              href="/#contact"
              rel="noreferrer"
              className="hover:scale-[104%] bg-[#515bbc] hover:bg-[#c7cbef] hover:text-black rounded-full "
            >
              <div className="rounded-full flex shadow-lg shadow-black p-3 cursor-pointer ">
                <AiOutlineMail className=" font-bold mt-1 mr-2" />
                <p className="font-semibold">Contact Us</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
