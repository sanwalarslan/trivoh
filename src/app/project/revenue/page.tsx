"use client";
import React, { useState } from "react";
import Details from "./details/page";
import Task from "./task/page";
import Team from "./team/page";
import Analatics from "./analytics/page";
import Navbar from "@/Components/Navbar";

const Revenue = () => {
  const [activeTab, setActiveTab] = useState("Details");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="block sm:hidden">
        <Navbar name={""} />
      </div>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col pb-3 w-[95%] m-auto ">
          <div className="py-7 font-semibold font-[inter] text-base ">Grow Revenue in America</div>
          <section className="py-3 bg-white shadow-sm border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div className="sm:w-full w-[95%] m-auto">
                <div className="flex items-center    justify-between  ">
                  <button
                    onClick={() => handleTabClick("Details")}
                    className={`relative font-medium text-[15px] md:w-[150px] flex items-center justify-center gap-x-2 ${
                      activeTab === "Details" ? "text-[#008075]" : "text-black"
                    }`}
                  >
                    <span className="font-semibold font-[inter] text-sm">Details</span>
                    <span
                      className={`absolute left-0 bottom-[-13px] h-0.5 bg-teal-600 transition-all duration-300 ${
                        activeTab === "Details" ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                  <button
                    onClick={() => handleTabClick("Task")}
                    className={`relative font-medium text-[14px] md:w-[150px] flex items-center justify-center gap-x-2 ${
                      activeTab === "Task" ? "text-[#008075]" : "text-black"
                    }`}
                  >
                    <span className="font-semibold font-[inter] text-sm">Task</span>
                    <span
                      className={`absolute left-0 bottom-[-13px] h-0.5 bg-teal-600 transition-all duration-300 ${
                        activeTab === "Task" ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                  <button
                    onClick={() => handleTabClick("Analatics")}
                    className={`relative font-medium text-[14px] md:w-[150px] flex items-center justify-center gap-x-2 ${
                      activeTab === "Analatics"
                        ? "text-[#008075]"
                        : "text-black"
                    }`}
                  >
                    <span className="font-semibold font-[inter] text-sm">Analatics</span>
                    <span
                      className={`absolute left-0 bottom-[-10px] h-0.5 bg-teal-600 transition-all duration-300 ${
                        activeTab === "Analatics" ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                  <button
                    onClick={() => handleTabClick("Team")}
                    className={`relative font-medium text-[14px] md:w-[150px] flex items-center justify-center gap-x-2 ${
                      activeTab === "Team" ? "text-[#008075]" : "text-black"
                    }`}
                  >
                    <span className="font-semibold font-[inter] text-sm">Team</span>
                    <span
                      className={`absolute left-0 bottom-[-10px] h-0.5 bg-teal-600 transition-all duration-300 ${
                        activeTab === "Team" ? "w-full" : "w-0"
                      }`}
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <div>
            {activeTab === "Details" && <Details />}
            {activeTab === "Task" && <Task />}
            {activeTab === "Team" && <Team />}
            {activeTab === "Analatics" && <Analatics />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Revenue;
