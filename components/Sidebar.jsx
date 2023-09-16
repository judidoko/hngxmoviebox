"use client";

import React from "react";
import Image from "next/image";
import {
  MdOutlineLogout,
  MdOutlineHome,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { BsCalculatorFill, BsCameraReels } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="w-full md:w-3/12 h-full p-4 bg-white mr-[14px] md:mr-0 z-20 overflow-scroll md:overflow-hidden border-2 border-gray-400 rounded-tr-3xl rounded-br-3xl top-0 -left-96 lg:left-0 lg:w-60">
      <div className="flex flex-col justify-center item-center">
        <h1 className="text-base flex items-center gap-3 cursor-pointer font-bold text-black border-b border-gray-100 pb-4 w-full">
          <Image
            src="/tv.png"
            alt="Logo"
            width={100}
            height={100}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <span className="hidden md:flex">MovieBox</span>
        </h1>
        <div className="my-4 border-b border-gray-100 pb-4">
          <div className="flex mb-4  justify-center items-center gap-4 pl-0 md:pl-5 text-gray-600 hover:bg-rose-200 hover:border-r-4 hover:border-rose-700 p-0 md:p-5 group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineHome className="text-2xl text-gray-600 group-hover:text-black " />
            <h3 className="hidden md:flex text-base text-gray-800 group-hover:text-black font-semibold ">
              Home
            </h3>
          </div>
          <div className="flex mb-4 justify-center items-center gap-4 pl-0 md:pl-5 hover:bg-rose-200 p-0 md:p-5 group cursor-pointer hover:shadow-lg m-auto hover:border-r-4 hover:border-rose-700">
            <BsCameraReels className="text-2xl text-gray-600 group-hover:text-black " />
            <h3 className="hidden md:flex text-base text-gray-800 group-hover:text-rose-700 font-semibold ">
              Movies
            </h3>
          </div>
          <div className="flex  mb-4 justify-center items-center gap-4 pl-0 md:pl-5 hover:bg-rose-200 p-0 md:p-5 group cursor-pointer hover:shadow-lg m-auto hover:border-r-4 hover:border-rose-700">
            <MdOutlineOndemandVideo className="text-2xl text-gray-600 group-hover:text-black " />
            <h3 className="hidden md:flex text-base text-gray-800 group-hover:text-rose-700 font-semibold ">
              TV Series
            </h3>
          </div>
          <div className="flex  mb-4 justify-center items-center gap-4 pl-0 md:pl-5 hover:bg-rose-200 p-0 md:p-5 group cursor-pointer hover:shadow-lg m-auto hover:border-r-4 hover:border-rose-700">
            <BsCalculatorFill className="text-2xl text-gray-600 group-hover:text-black " />
            <h3 className="hidden md:flex text-base text-gray-800 group-hover:text-rose-700 font-semibold ">
              Up Coming
            </h3>
          </div>
          <div className="mb-2 justify-center hidden md:block items-center p-8 group border-2 border-red-700 rounded-md bg-rose-100  cursor-pointer hover:shadow-lg m-auto">
            <h6 className="text-base text-gray-800 font-semibold ">
              Play movie quizzes and earn free tickets
            </h6>
            <p className="my-3">50k people are playing now</p>
            <button className="bg-rose-200 border-2 text-base text-rose-700 border-none p-3 rounded-md">
              Start Playing
            </button>
          </div>
        </div>
        {/* logout */}
        <div className=" my-4">
          <div className="flex mb-2 justify-start items-center gap-4 pl-0 md:pl-5 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
            <MdOutlineLogout className="text-2xl text-gray-600" />
            <h3 className="hidden md:flex text-base text-gray-800 font-semibold ">
              Logout
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
