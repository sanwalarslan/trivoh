'use client'
import React from "react";
import man from "../../../public/assest/icon/man.svg";
import bell from "../../../public/assest/icon/Notifications.svg";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import LanguageSelector from "../LanguageSelector";

interface SearchNavbarProps {
  isVisible: boolean;
  toggleNavbar: () => void;
}

const SearchNavbar: React.FC<SearchNavbarProps> = ({
  isVisible,
  toggleNavbar,
}) => {
  return (
     <div
    className={`fixed inset-0 z-50 transition-opacity duration-300 ${
      isVisible
        ? "bg-black bg-opacity-50"
        : "bg-opacity-0 pointer-events-none"
    }`}
    onClick={toggleNavbar}
  >
      <div
        className={`fixed top-0 left-0 right-0 bg-white shadow-md p-4  transition-transform duration-300 ease-in-out ${
          isVisible ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="relative">
          <input
            id="id-s03"
            type="search"
            name="id-s03"
            placeholder="Search here"
            aria-label="Search content"
            className="peer relative h-10 w-full rounded border border-slate-200 px-4 pr-12 text-sm text-slate-500 outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            aria-label="Search icon"
            role="graphics-symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className="py-6 flex justify-between">
          <div className="flex flex-row gap-x-3 justify-center items-center text-center">
            <div className="flex items-center justify-center text-center">
              <LanguageSelector />
            </div>
          </div>
          <div className="flex flex-row gap-x-3">
            <div>
              <Image src={bell} width={44} alt={""}></Image>
            </div>
            <div>
              <Image src={man} width={50} alt={""}></Image>
            </div>
            <div className="flex flex-col font-[poppins] font-medium text-base">
              <div>arslan</div>
              <div className="text-[#737791]">admin</div>
            </div>
            <div className="pl-5 mt-1">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="">
          <svg
            className="transform mt-2 fill-current text-[black] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
            onClick={toggleNavbar}
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </div>
      </div>
    </div>
    );
};

export default SearchNavbar;
