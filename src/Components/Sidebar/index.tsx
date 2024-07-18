"use client";
import React, { useState } from "react";
import logo from "../../../public/assest/icon/LOgo.svg";
import video from "../../../public/assest/icon/video.svg";
import message from "../../../public/assest/icon/mdi_message-processing-outline.svg";
import calender from "../../../public/assest/icon/calendar.svg";
import projecticon from '../../../public/assest/icon/check-square (1).svg';
import moniter from "../../../public/assest/icon/monitor.svg";
import Ai from "../../../public/assest/icon/ai.svg";
import library from "../../../public/assest/icon/folder-minus.svg";
import account from '../../../public/assest/icon/account.svg';
import setting from '../../../public/assest/icon/settings.svg';
import help from '../../../public/assest/icon/folder-minus (2).svg';
import add from "../../../public/assest/icon/Group 1000002849.svg";

import Image from "next/image";
import Link from "next/link";
export default function SideNavigationBasic() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`fixed left-6 top-6 z-40 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "rotate-45"
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? "true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className={`block h-0.5 w-9/12 bg-slate-700 transition-all duration-300 ${
              isSideNavOpen
                ? "translate-y-0"
                : "-translate-y-2"
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 w-6 bg-slate-900 transition duration-300 ${
              isSideNavOpen
                ? "-rotate-45"
                : ""
            }`}
          ></span>
          <span
            aria-hidden="true"
            className={`block h-0.5 w-1/2 bg-slate-900 transition-all duration-300 ${
              isSideNavOpen
                ? "translate-y-2"
                : ""
            }`}
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
      id="nav-menu-1"
      aria-label="Side navigation"
      className={`sticky  top-0 bottom-0 left-0 z-40 flex w-72 flex-col bg-[#FFFFFF] transition-transform lg:translate-x-0 ${
        isSideNavOpen ? "translate-x-0" : " -translate-x-full"
      }`}
    >
        <span className="flex pt-6 items-center justify-center ">
          <Image src={logo} width={99} height={77} alt={logo}></Image>
        </span>
        <nav
          aria-label="side navigation"
          className="flex-1 overflow-y-hidden divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col  py-5">
              <li className="px-4">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <svg
                      className="w-5 h-5 text-[#737791] group-hover:text-white group-focus:text-white aria-[current=page]:text-white dark:group-hover:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate  ">
                    Home
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={video} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Meetings
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={message} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Chats
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={calender} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Calender
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={Ai} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    AiSummary
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={moniter} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Whiteboard
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={library} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Library
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={projecticon} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Project
                  </div>
                </Link>
              </li>
              <li className=" px-3">
                <Image src={add} alt={""}></Image>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-7 h-7 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={account} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Account
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={setting} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Setting
                  </div>
                </Link>
              </li>
              <li className="px-11">
                <Link
                  href="#"
                  className="group font-[Poppins] text-lg font-semibold flex items-center gap-3 rounded-xl p-3 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={help} alt="Video" />
                    </div>
                  </div>
                  <div className="flex group-hover:text-white group-focus:text-white aria-[current=page]:text-white w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate">
                    Help
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Basic side navigation menu --> */}
    </>
  );
}
