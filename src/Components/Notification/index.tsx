"use client";
import React, { useState } from "react";
import Image from "next/image";
import bell from "../../../public/assest/icon/clarity_notification-line.svg";

const Notification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="navbar bg-base-100  ">
        <div className="flex-none">
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn   btn-ghost btn-circle relative avatar "
              onClick={toggleSidebar}
            >
              <div className="p-2 indicator   rounded-full bg-[#da982e69]">
                <div className="w-[25px] h-7">
                  <span className="absolute right-[12px] flex top-0   h-3 w-3">
                    <span className="animate-ping absolute  h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-sky-500"></span>
                  </span>
                  <Image src={bell} alt={""} />
                </div>
                {/* <span className="badge badge-xs badge-primary indicator-item"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "bg-black bg-opacity-50"
            : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between">
            <h2 className="text-xl font-semibold">Notification Content Here</h2>
            <button
              className="absolute top-[17px] right-2 text-black"
              onClick={toggleSidebar}
            >
              ✖
            </button>
            {/* Add your notification content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
