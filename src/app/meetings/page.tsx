"use client";
import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import RoomTable from "./RoomTable";
import HistoryTable from "./RoomTable/HistoryTable";

const Meetings = () => {
  const [activeTab, setActiveTab] = useState("Rooms");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div>
        <Navbar name={"Meetings"} />
      </div>
      <div className="bg-[#F8F9FA]">
        <div className="flex flex-col pb-3 w-[95%] m-auto ">
          <section className="py-14">
            <div className="flex justify-between items-start">
              <div className="w-full">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2 flex-wrap-reverse gap-y-4 overflow-x-auto custom-scrollbar">
                  <div className="flex gap-x-12 font-[inter] font-medium text-base">
                    <button
                      onClick={() => handleTabClick("Rooms")}
                      className={`relative font-medium text-[15px] md:w-[150px] flex items-center justify-center gap-x-2 ${
                        activeTab === "Rooms" ? "text-[#008075]" : "text-black"
                      }`}
                    >
                      <span>Rooms</span>
                      <span
                        className={`absolute left-0 bottom-[-10px] h-0.5 bg-teal-600 transition-all duration-300 ${
                          activeTab === "Rooms" ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>
                    <button
                      onClick={() => handleTabClick("History")}
                      className={`relative font-medium text-[14px] md:w-[150px] flex items-center justify-center gap-x-2 ${
                        activeTab === "History"
                          ? "text-[#008075]"
                          : "text-black"
                      }`}
                    >
                      <span>History</span>
                      <span
                        className={`absolute left-0 bottom-[-10px] h-0.5 bg-teal-600 transition-all duration-300 ${
                          activeTab === "History" ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>
                  </div>
                  <div className="bg-[#008075] text-white py-2 rounded font-[poppins] font-semibold cursor-pointer text-base px-4">
                    Create a Room
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div>
            {activeTab === "Rooms" && <RoomTable  />}
            {activeTab === "History" && <HistoryTable />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Meetings;
