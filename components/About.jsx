import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/profile-pic.png";

const About = () => {
  return (
    <div id="about" className="bg-[#121626] border-y-[1px] items-center py-16 text-gray-100 border-gray-500 justify-center text-center ">
    <p className="  shadow-md uppercase items-center mb-10 text-center tracking-widest font-bold text-2xl ">
      About Us
    </p>
    <div className="w-full p-2 flex ">
      <div className="max-w-[90%] m-auto md:grid grid-cols-3 gap-8">
          
        <div className="w-full h-auto m-auto shadow-lg shadow-black rounded-2xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image height={"200px"} width={"200px"} src={AboutImg} className="rounded-xl" alt="/" />
          <p className="py-2">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-black rounded-2xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image height={"200px"} width={"200px"} src={AboutImg} className="rounded-xl" alt="/" />
          <p className="py-2">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-black rounded-2xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image height={"200px"} width={"200px"} src={AboutImg} className="rounded-xl" alt="/" />
          <p className="py-2">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-black rounded-2xl items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image height={"200px"} width={"200px"} src={AboutImg} className="rounded-xl" alt="/" />
          <p className="py-2">
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
