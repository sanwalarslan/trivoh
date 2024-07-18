"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import smlogo from "../../../public/assest/icon/TRivoh-Logo-008075 1.svg";
import logo from "../../../public/assest/icon/LOgo.svg";
import video from "../../../public/assest/icon/video.svg";
import message from "../../../public/assest/icon/mdi_message-processing-outline.svg";
import calender from "../../../public/assest/icon/calendar.svg";
import projecticon from "../../../public/assest/icon/check-square (1).svg";
import moniter from "../../../public/assest/icon/monitor.svg";
import Ai from "../../../public/assest/icon/ai.svg";
import library from "../../../public/assest/icon/folder-minus.svg";
import account from "../../../public/assest/icon/account.svg";
import setting from "../../../public/assest/icon/settings.svg";
import help from "../../../public/assest/icon/folder-minus (2).svg";
import add from "../../../public/assest/icon/Group 1000002849.svg";
import logoCollapsed from "../../../public/assest/icon/TRivoh-Logo-008075 1.svg";
import logoExpanded from "../../../public/assest/icon/LOgo.svg";
export default function SideNavigationBasic() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const logo = isSidebarCollapsed ? logoCollapsed : logoExpanded;
  const logoWidth = isSidebarCollapsed ? 40 : 99; // Adjust these values as needed
  const logoHeight = isSidebarCollapsed ? 40 : 99; // Adjust these values as needed

  return (
    <div className="flex ">
      {/* Sidebar */}
      <aside
        className={`h-full   bg-white shadow-lg transition-all duration-200 ${
          isSidebarCollapsed ? "w-20" : "w-64"
        } relative z-10`}
      >
        <div className="flex items-center justify-between py-4 px-4">
             <Image
              src={logo}
              width={logoWidth}
              height={logoHeight}
              alt="Logo"
              className="transition-all duration-300"
            />
           <button
            title="Toggle Sidebar"
            type="button"
            className="p-2 ml-12"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1  ">
          <ul className="flex flex-col py-1">
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div
                  className="flex items-center  justify-center text-center ml-[5px]
                "
                >
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
                {!isSidebarCollapsed && <span>Home</span>}
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={video} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Meetings</span>}
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={message} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Chats</span>}
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={calender} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Calender</span>}
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={moniter} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Whiteboard</span>}
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={Ai} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>AiSummary</span>}
              </Link>
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={library} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Library</span>}
              </Link>
            </li>
            <li className="py-5 px-1 ">
              <Image
                src={add}
                width={isSidebarCollapsed ? 188 : 299}
                height={40}
                alt="Logo"
              />
            </li>
            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={setting} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Setting</span>}
              </Link>
            </li>

            <li className="px-4 py-1">
              <Link
                href="#"
                className="group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white"
              >
                <div className="flex items-center  justify-center text-center ml-[5px]">
                  <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                    <Image src={help} alt="Video" />
                  </div>
                </div>
                {!isSidebarCollapsed && <span>Help</span>}
              </Link>
            </li>
            {/* Add more nav items similarly */}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
