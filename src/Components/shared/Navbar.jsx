"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";

import logo from "../../assets/logo.png";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link href="/" className="lg:ml-4">
        Home
      </Link>
      <Link href="/plan" className="lg:ml-4">
        Plan
      </Link>
      <Link href="/shop" className="lg:ml-4">
        Shop
      </Link>
      <Link href="/community-center" className="lg:ml-4">
        Community Center
      </Link>
      <Link href="/kazi-office" className="lg:ml-4">
        Kazi Office
      </Link>
      <Link href="/contact-us" className="lg:ml-4">
        Contact Us
      </Link>
    </>
  );

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <div className="border-b shadow-md">
        <Container>
          <div className="flex  justify-between items-center">
            <div className="logo">
              <Image
                className="w-[60px]"
                src={logo}
                height={60}
                width={120}
                alt="logo"
              />
            </div>

            {/* Mobile menu */}
            <div
              className={`${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-screen fixed w-[350px] bg-white text-black z-50 top-0 left-0`}
            >
              <div className="flex items-center p-4">
                <Image
                  className="w-[50px]"
                  src={logo}
                  height={60}
                  width={120}
                  alt="logo"
                />
                <button
                  className="px-4 py-2 text-3xl font-semibold flex absolute right-0 "
                  onClick={() => setOpen(false)}
                >
                  <RxCross1 />
                </button>
              </div>

              <ul className="flex  flex-col p-5 gap-5 text-[18px]">
                {navList}
                <button className=" flex justify-center items-center gap-1 lg:ml-4 border py-[6px] px-4 border-[#522B79] rounded-md  text-[#6D194F]">
                  <FaUser className="text-[#6D194F] text-[18px] " /> Profile
                </button>
              </ul>
            </div>

            <div className="flex  items-center gap-5">
              {/* Desktop menu */}
              <div className="hidden lg:block">
                <ul className="lg:flex lg:gap-3">{navList}</ul>
              </div>

              <div className="flex items-center">
                <button className="hidden lg:flex items-center gap-1 lg:ml-4 border py-[6px] px-4 border-[#522B79] rounded-md  text-[#6D194F]">
                  <FaUser className="text-[#6D194F] text-[18px] " /> Profile
                </button>

                <IoMdMenu
                  className="text-2xl cursor-pointer lg:hidden ml-4"
                  onClick={toggleMenu}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
