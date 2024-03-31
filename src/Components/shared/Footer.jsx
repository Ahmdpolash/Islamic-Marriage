import React from "react";
import Container from "./Container";
import logo from "../../assets/logo2.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/ins.png";
import linkedin from "../../assets/in.png";
import yt from "../../assets/yt.png";
import Image from "next/image";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="py-4">
        <div>
          <div className="flex px-6 md:px-14  lg:px-20 py-1 lg:py-4 justify-between border-b  border-[#FFFFFF]">
            <Image
              className="h-[60px] w-[60px]"
              src={logo}
              height={40}
              width={50}
              alt="logo"
            />

            <div className="flex gap-2 items-center">
              <div className="flex items-center gap-4">
                <Image
                  className="h-[30px] w-[30px]"
                  src={fb}
                  height={20}
                  width={30}
                  alt="fb"
                />
                <Image
                  className="h-[30px] w-[30px]"
                  src={linkedin}
                  height={20}
                  width={30}
                  alt="linkedin"
                />

                <Image
                  className="h-[30px] w-[30px]"
                  src={yt}
                  height={20}
                  width={30}
                  alt="youtube"
                />
                <Image
                  className="h-[30px] w-[30px]"
                  src={insta}
                  height={20}
                  width={30}
                  alt="instagram"
                />

                <Image
                  className="h-[30px] w-[30px]"
                  src={twitter}
                  height={20}
                  width={30}
                  alt="twitter"
                />
              </div>
              <button className="px-5 h-9 bg-[#B0B0B0] text-black">
                Donate
              </button>
            </div>
          </div>

          <div className="flex px-6 md:px-14  lg:px-20 py-1 lg:py-4 mt-1 justify-between text-white items-center">
            <p className="flex items-center gap-2">
              <LuCopyright />
              2024 Company
            </p>
            <div>
              <ul className="flex flex-wrap text-white items-center px-2 text-[17px]">
                <li className="border-r border-white pr-2 px-2">Contact</li>
                <li className="border-r border-white px-2 pr-2">Copyright</li>
                <li className="border-r border-white px-2 pr-2">FAQ</li>
                <li className="border-r border-white px-2 pr-2">Fraud Alert</li>
                <li className="border-r border-white px-2 pr-2">
                  Privacy Notice
                </li>
                <li className="px-2">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
