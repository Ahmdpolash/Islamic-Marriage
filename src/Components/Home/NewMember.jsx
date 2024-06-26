"use client";
import React from "react";
import Container from "../shared/Container";
import data from "../../Components/data/premiumMember.json";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";
const NewMember = () => {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h2 className="font-bold text-[18px]  lg:text-[24px] text-purple tracking-wider">
            New Member
          </h2>
          <p className="my-2 font-medium">
            Every user registered on Muslim Marriagebd is verified via photo and
            mobile phone so you dont have to worry how <br /> real or fake
            anyone is..
          </p>
        </div>
        <div className="mt-3 mb-3 lg:mb-6">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-full  "
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              375: {
                slidesPerView: 2,
              },
              425: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 5,
              },
              1536: {
                slidesPerView: 6,
              },
            }}
          >
            {data.map((item, i) => (
              <SwiperSlide key={i} className=" border shadow-md bg-[#E6E6E6]">
                <div className="mx-auto  text-center mb-3">
                  <div className="relative">
                    <Image
                      className="w-full mx-auto h-[190px]"
                      src={item.image}
                      height={140}
                      width={120}
                      alt="user"
                    />
                  </div>

                  <div className="space-y-2 mt-1 ">
                    <h1 className="text-purple font-semibold text-[18px] lg:text-[20px]">
                      {item.name}
                    </h1>
                    <p className="text-slate-500 font-medium text-[15px]">
                      Member ID :{" "}
                      <span className="text-purple font-semibold">
                        {" "}
                        {item.id}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default NewMember;
