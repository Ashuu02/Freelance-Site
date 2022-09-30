import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "../public/assets/navLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center max-w-[97%] h-full px-2 2xl:px-16">
        <Link href="/">
          <a>
            <Image
              src={NavLogo}
              alt="/"
              width="125"
              height="50"
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm mt-2 uppercase hover:border-b">
              <Link href="/">
                <p className=" hover:text-[#515bbc] hover:underline underline-offset-4 ">
                  Home
                </p>
              </Link>
            </li>
            <li className="ml-10 text-sm mt-2 uppercase hover:border-b">
              <Link href="/#about">
                <p className="hover:text-[#515bbc] hover:underline underline-offset-4">
                  About
                </p>
              </Link>
            </li>
            <li className="ml-10 text-sm mt-2 uppercase hover:border-b">
              <Link href="/#skills">
                <p className="hover:text-[#515bbc] hover:underline underline-offset-4">
                  Our Services
                </p>
              </Link>
            </li>
            <a
              href="/#contact"
              rel="noreferrer"
              className="hover:scale-[104%] ml-10 bg-[#515bbc] hover:bg-[#121426] rounded-full "
            >
              <div className="rounded-full flex shadow-lg p-2 px-3 cursor-pointer ">
                <p className=" text-white ">Contact Us</p>
              </div>
            </a>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="cursor-pointer md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : " fixed left-[-100%] top-0 p-10 ease-in duration-500 "
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <a>
                  <Image src={NavLogo} width="87" height="35" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Allow us to build something awesome for you
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-5">
            <ul className="uppercase ">
              <li className="text-sm hover:text-[#515bbc] mt-2 my-3 uppercase hover:border-b">
                <Link href="/">
                  <p className="">
                    Home
                  </p>
                </Link>
              </li>
              <li className="text-sm mt-2 my-3 uppercase hover:border-b">
                <Link href="/">
                  <p className=" hover:text-[#515bbc] ">
                    About
                  </p>
                </Link>
              </li>
              <li className="text-sm mt-2 my-3  uppercase hover:border-b">
                <Link href="/">
                  <p className=" ">
                    Our Services
                  </p>
                </Link>
              </li>

              <a
                href="/#contact"
                rel="noreferrer"
                className="hover:scale-[104%] my-3  flex  rounded-full "
              >
                <div className="rounded-full bg-[#515bbc] hover:bg-[#121426] flex shadow-lg p-2 px-3 cursor-pointer ">
                  <p className=" text-white ">Contact Us</p>
                </div>
              </a>
            </ul>
            <div className="pt-5">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>

              <div className="flex text-gray-200 items-center justify-center m-auto py-4 ">
                <a
                  href="https://www.linkedin.com/in/ashutoshshimpi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full bg-[#515bbc] hover:bg-[black] items-center justify-center  shadow-lg shadow-black p-3 cursor-pointer hover:scale-110 ease-in duration-100">
                    <FaLinkedinIn />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className=" ml-5 rounded-full shadow-lg bg-[#515bbc] hover:bg-[black] shadow-black p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail className=" font-extrabold "/>
                  </div>
                </Link>
              </div>

      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
