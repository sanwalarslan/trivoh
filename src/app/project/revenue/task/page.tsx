'use client'
import React, { useState } from "react";
 import Image from "next/image";
import listicon from "../../../../../public/assest/icon/layout-list.svg";
import Boardicon from "../../../../../public/assest/icon/boardgreen.svg";
import granticon from "../../../../../public/assest/icon/granticon.svg";
import Tableicon from "../../../../../public/assest/icon/granticon.svg";
import filtericon from "../../../../../public/assest/icon/filter.svg";
import sorticon from "../../../../../public/assest/icon/greensort.svg";
import List from "./list/page";
import Board from "./board/page";
import Searchbar from "@/Components/Searchbar";
import ToogleSearch from "./ToogleSearch";
import Filter from "./Filter";

const Task = () => {
  const [activeTab, setActiveTab] = useState("List");
  const [pathname, setPathname] = useState("/list"); // example initial path

  const links = [
    { id: 1, path: "/list", name: "List", icon: listicon },
    { id: 2, path: "/board", name: "Board", icon: Boardicon },
    { id: 3, path: "/", name: "Grant", icon: granticon },
    { id: 4, path: "/ ", name: "Table", icon: Tableicon },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col py-3">
          <section className="bg-white lg:py-0 py-2 shadow-sm border-b border-gray-200">
            <div className="flex justify-between items-center px-2">
              <div className="flex items-center gap-x-8">
                {links.slice(0, 4).map((link) => (
                  <div key={link.id} className="flex items-center">
                    <button
                      onClick={() => {
                        handleTabClick(link.name);
                        setPathname(link.path);
                      }}
                      className={`relative font-medium text-[14px] md:w-auto flex items-center gap-x-2 ${
                        pathname === link.path
                          ? "text-[#008075]"
                          : "text-[#64748B]"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={`${link.name} icon`}
                        className={`transition-all duration-300 ${
                          pathname === link.path
                            ? "filter brightness-100 saturate-200"
                            : "filter brightness-1000 saturate-0"
                        }`}
                      />
                      <span className="font-semibold font-[inter] text-sm">
                        {link.name}
                      </span>
                      <span
                        className={`absolute left-0 bottom-[-10px] lg:bottom-[-14.5px] h-0.5 bg-teal-600 transition-all duration-300 ${
                          pathname === link.path ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="relative  ">
                <div className="block lg:hidden pl-4">
                 <ToogleSearch />
                </div>
                <div className="lg:block hidden">
                  <label className="input  input-bordered rounded-xl flex items-center gap-2">
                    <input
                      type="text"
                      className="grow rounded-xl "
                      placeholder="Search"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </label>
                </div>
              </div>
              <div className="flex   gap-x-3  lg:gap-x-8">
                 <div><Filter /></div>
                <button
                  onClick={() => {
                    handleTabClick("Sort");
                    setPathname("/sort");
                  }}
                  className={`relative font-medium text-[14px] md:w-auto flex items-center gap-x-2 ${
                    pathname === "/sort" ? "text-[#008075]" : "text-[#64748B]"
                  }`}
                >
                  <Image
                    src={sorticon}
                    alt="Sort icon"
                    className={`transition-all duration-300 ${
                      pathname === "/sort"
                        ? ""
                        : ""
                    }`}
                  />
                  <span className="font-semibold font-[inter] text-sm lg:block hidden text-[#0C9584]">
                    Sort: Date Created
                  </span>
                  <span
                    className={`absolute left-0 bottom-[-10px] lg:bottom-[-14.5px] h-0.5 bg-teal-600 transition-all duration-300 ${
                      pathname === "/sort" ? "w-full" : "w-0"
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </section>
          <div>
            {activeTab === "List" && <List />}
            {activeTab === "Board" && <Board />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
