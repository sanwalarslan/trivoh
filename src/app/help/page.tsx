"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

const navLinks = [
  { id: 1, name: "Home", path: "/dashboard", icon: video },
  { id: 2, name: "Meetings", path: "/meetings", icon: video },
  { id: 3, name: "Chats", path: "/chats", icon: message },
  { id: 4, name: "Calendar", path: "/calender", icon: calender },
  { id: 5, name: "Whiteboard", path: "/whiteboard", icon: moniter },
  { id: 6, name: "AiSummary", path: "/aisummary", icon: Ai },
  { id: 7, name: "Library", path: "/library", icon: library },
  { id: 8, name: "Setting", path: "/setting", icon: setting },
  { id: 9, name: "Help", path: "/help", icon: help },
];

export default function SideNavigationBasic() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const logo = isSidebarCollapsed ? logoCollapsed : logoExpanded;
  const logoWidth = isSidebarCollapsed ? 40 : 99;
  const logoHeight = isSidebarCollapsed ? 40 : 99;
  const pathname = usePathname();

  return (
    <div className="flex ">
      {/* Sidebar */}
      <aside
        className={`h-full bg-white shadow-lg transition-all duration-200 ${
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
        <nav className="flex-1">
          <ul className="flex flex-col py-1">
            {navLinks.map((link) => (
              <li key={link.id} className="px-4 py-1">
                <Link
                  href={link.path}
                  className={`group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white ${
                    pathname === link.path ? "bg-[#007F74] text-white" : ""
                  }`}
                >
                  <div className="flex items-center  justify-center text-center ml-[5px]">
                    <div className="w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert">
                      <Image src={link.icon} alt={link.name} />
                    </div>
                  </div>
                  {!isSidebarCollapsed && <span>{link.name}</span>}
                </Link>
              </li>
            ))}
            <li className="py-5 px-1">
              <Image
                src={add}
                width={isSidebarCollapsed ? 188 : 299}
                height={40}
                alt="Add"
              />
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
