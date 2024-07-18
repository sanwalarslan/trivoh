"use client";
import React, { useState } from "react";
import share from "../../../public/assest/icon/share-2.svg";
import copy from "../../../public/assest/icon/copy.svg";
import video from "../../../public/assest/icon/video.svg";
import Image from "next/image";

const MeatingCard = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex lg:flex-row flex-col  overflow-hidden bg-white text-[#282A34] shadow-md border-l-2 border-[#007F74] shadow-slate-200">
      <div className="p-6 ">
        <p className="text-2xl font-normal font-[poppins] text-[#000000]">
          Welcome, Psalm Eben!
        </p>
        <div className="py-2">Personal Meeting ID : 61164709</div>
        <div className="flex flex-row gap-x-4">
          <div className="text-[#007F74]">
            https://my.trivoh.com/meeting/611
          </div>
          <div className="flex flex-row gap-x-3 text-center justify-center items-center">
            <div>
              <Image src={share} width={15} alt={""}></Image>
            </div>
            <div>
              <Image src={copy} width={15} alt={""}></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:ml-20 grid-cols-2 p-6 sm:grid-cols-3  gap-4 justify-center items-center text-center text-white">
        <div
          className="bg-[#007F74] flex flex-row cursor-pointer rounded px-2 py-[7px]"
          onClick={openModal}
        >
          <div className="text-white text-nowrap flex justify-center items-center text-center px-2">
            <Image
              className="invert brightness-0"
              width={20}
              src={video}
              alt={""}
            ></Image>
          </div>
          <div className="font-[poppins] text-nowrap text-sm font-bold pr-2  ">
            Start Meeting
          </div>
        </div>
        <div
          className="bg-[#E48006] font-[poppins] text-sm font-bold px-2 py-[7px] cursor-pointer rounded"
          onClick={openModal}
        >
          Host Meeting
        </div>
        <div
          className="bg-[#EEBF41] font-[poppins] text-sm font-bold px-2 py-[7px] cursor-pointer rounded"
          onClick={openModal}
        >
          Join Meeting
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <dialog
          open
          className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm transition-transform transform ease-in-out duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
          style={{
            transform: `scale(${isModalOpen ? 1 : 0.8})`,
            opacity: isModalOpen ? 1 : 0,
          }}
        >
          <div className="flex max-h-[90vh] w-11/12 max-w-2xl flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10 transition-transform transform ease-in-out duration-300">
            {/* Modal header */}
            <header id="header-1a" className="flex items-center gap-4">
              <h3 className="flex-1 text-xl font-medium text-slate-700">
                Meeting Details
              </h3>
              <button
                onClick={closeModal}
                className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                aria-label="close dialog"
              >
                <span className="relative only:-mx-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-79 desc-79"
                  >
                    <title id="title-79">Icon title</title>
                    <desc id="desc-79">
                      A more detailed description of the icon
                    </desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </header>
            {/* Modal body */}
            <div id="content-1a" className="flex-1 overflow-auto">
              <p>Here the Meeting details show</p>
            </div>
            {/* Modal actions */}
            <div className="flex justify-start gap-2">
              <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <span>I Accept</span>
              </button>
              <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
                <span>I Decline</span>
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default MeatingCard;
