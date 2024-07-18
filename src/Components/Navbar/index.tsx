"use client";
import React, { useState } from "react";
import Searchbar from "../Searchbar";
import LanguageSelector from "../LanguageSelector";
import { IoIosArrowDown } from "react-icons/io";
import man from "../../../public/assest/icon/man.svg";
import bell from "../../../public/assest/icon/Notifications.svg";
import Image from "next/image";
import Notification from "../Notification";
import logo from "../../../public/assest/icon/LOgo.svg";
import video from "../../../public/assest/icon/video.svg";
 import message from "../../../public/assest/icon/mdi_message-processing-outline.svg";
import calender from "../../../public/assest/icon/calendar.svg";
import moniter from "../../../public/assest/icon/monitor.svg";
import Ai from "../../../public/assest/icon/ai.svg";
import library from "../../../public/assest/icon/folder-minus.svg";
import setting from "../../../public/assest/icon/settings.svg";
import help from "../../../public/assest/icon/folder-minus (2).svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchSidebar from "../SearchSidebar";
import Adminbar from "../Adminbar";
interface Pagesprops {
  name: string;
}
const Navbar: React.FC<Pagesprops> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false); // Close the sidebar when a link is clicked
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const navLinksTop = [
    { id: 1, name: "Home", path: "/dashboard", icon: video },
    { id: 2, name: "Meetings", path: "/meetings", icon: video },
    { id: 3, name: "Chats", path: "/chats", icon: message },
    { id: 4, name: "Calendar", path: "/calender", icon: calender },
    { id: 5, name: "Whiteboard", path: "/whiteboard", icon: moniter },
    { id: 6, name: "AiSummary", path: "/aisummary", icon: Ai },
    { id: 7, name: "Library", path: "/library", icon: library },
    { id: 7, name: "Project", path: "/project", icon: moniter },
  ];

  const navLinksBottom = [
    { id: 8, name: "Setting", path: "/setting", icon: setting },
    { id: 9, name: "Help   ", path: "/help", icon: help },
  ];
  const pathname = usePathname();

  return (
    <div className="w-[95%] m-auto ">
      <div className="flex justify-between  ">
        <button
          onClick={toggleSidebar}
          className="p-4  focus:outline-none focus:bg-gray-200"
        >
          <svg
            className="h-6 w-6 block md:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div className="text-xl sm:px-0 px-28 flex font-medium justify-center text-center items-center font-[poppins]">
          {name}
        </div>
        <div className="flex  justify-center items-center text-center">
          <div className="md:block hidden">
            <Searchbar />
          </div>
          <div className="block md:hidden">
            <SearchSidebar />
          </div>
        </div>
        <div className="flex flex-row gap-x-3 justify-center items-center text-center">
          <div className="flex md:block hidden items-center justify-center text-center">
            <LanguageSelector />
          </div>
          <div className="mt-1 lg:block hidden">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="md:block hidden">
          <Adminbar />
        </div>
      </div>

      <div className="flex">
        <div
          className={`fixed inset-y-0 right-0 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition duration-300 ease-in-out bg-white shadow-lg w-96 z-50`}
        >
          <div>
            <ul>
              <div className="p-6">
                <Image src={logo} width={88} height={88} alt={""} />
              </div>
              {navLinksTop.map((link) => (
                <li key={link.id} className="px-4 py-1">
                  <Link
                    onClick={handleLinkClick}
                    href={link.path}
                    className={`group font-[Poppins] text-base font-semibold flex items-center gap-3 rounded-md p-2 text-[#737791] transition duration-500 hover:bg-[#007F74] hover:text-white focus:bg-[#007F74] focus:text-white aria-[current=page]:bg-[#007F74] aria-[current=page]:text-white ${
                      pathname === link.path ? "bg-[#007F74] text-white" : ""
                    }`}
                  >
                    <div className="flex items-center  justify-center text-center ml-[5px]">
                      <div
                        className={`w-5 h-5 filter group-hover:brightness-0 group-hover:invert group-focus:brightness-0 group-focus:invert aria-[current=page]:brightness-0 aria-[current=page]:invert ${
                          pathname === link.path ? "brightness-0 invert" : ""
                        }`}
                      >
                        <Image src={link.icon} alt={link.name} />
                      </div>
                    </div>
                    {<span>{link.name}</span>}
                  </Link>
                </li>
              ))}

              <li className="flex justify-center items-center text-center py-2 pt-8">
                <Link
                  onClick={handleLinkClick}
                  href="#"
                  className="group font-[Poppins] text-lg font-medium flex items-center py-2 gap-x-2 rounded-md  text-[#737791]"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter ">
                      <Image src={setting} alt="Video" />
                    </div>
                  </div>
                  <div className="flex">Setting</div>
                </Link>
              </li>
              <li className="flex justify-center items-center text-center pb-3">
                <Link
                  onClick={handleLinkClick}
                  href="#"
                  className="group font-[Poppins] text-lg font-medium flex items-center  gap-x-2 rounded-md  text-[#737791]"
                >
                  <div className="flex items-center self-center">
                    <div className="w-5 h-5 filter  ">
                      <Image src={help} alt="Video" />
                    </div>
                  </div>
                  <div className="flex pr-[19px]">
                    Help <span className="hidden">.</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`fixed inset-0 bg-black opacity-100 z-40 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleSidebar}
        >
          <div className="relative">
            <svg
              className="absolute top-4 left-4 transform fill-current text-white cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
              onClick={toggleSidebar}
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
            {/* Add your navbar content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
