import React from "react";
import Image from "next/image";
import video from "../../../../../public/assest/icon/video.svg";
import horizantaldot from "../../../../../public/assest/icon/more-horizontal.svg";

const RoomTable = () => {
  const meetings = [
    {
      title: "The Everything Blueprint",
      role: "Host",
      meetingid: "6104061489",
      user: "30",
      schedule: "2024/04/07, 01:00 PM - 01:30 PM",
      moreOption: "mo",
    },
    {
      title: "Doha Tech",
      role: "Co-Host",
      meetingid: "6104061489",
      user: "30",
      schedule: "Not Scheduled",
    },
    {
      title: "London Bus Team",
      role: "Host",
      meetingid: "6104061489",
      user: "30",
      schedule: "2024/04/07, 01:00 PM - 01:30 PM",
    },
    // Add more meeting objects here
  ];

  return (
    <div>
      <div className="w-full overflow-hidden">
        <table className="w-full overflow-x-auto text-left rounded-lg">
          <tbody className="rounded-lg">
            <tr className="border-b border-slate-300 rounded-lg">
              <th
                scope="col"
                className="h-12 uppercase py-3 px-6 text-xs font-medium stroke-slate-700 text-gray-500"
              >
                Title
              </th>
              <th
                scope="col"
                className="h-12 uppercase py-3 lg:px-6 px-3 text-xs font-medium stroke-slate-700 text-gray-500"
              >
                Role
              </th>
              <th
                scope="col"
                className="h-12 uppercase py-3 lg:px-6 px-3 text-xs font-medium stroke-slate-700 text-gray-500"
              >
                Meeting ID
              </th>
              <th
                scope="col"
                className="h-12 uppercase py-3 px-6 text-xs font-medium stroke-slate-700 text-gray-500"
              >
                User
              </th>
              <th
                scope="col"
                className="h-12 lg:block hidden uppercase py-3 px-6 text-xs font-medium stroke-slate-700 text-gray-500"
              >
                Schedule
              </th>
              <th
                scope="col"
                className="h-12    uppercase py-3 px-6 text-xs font-medium stroke-slate-700 text-gray-500"
              >
                More Option
              </th>
            </tr>
            {meetings.map((meeting, index) => (
              <tr
                key={index}
                className="border-b border-slate-200 bg-white rounded-md"
              >
                <td
                  className="h-12 py-6 font-medium text-sm whitespace-nowrap align-middle px-6 text-black"
                  style={{
                    animation: `slideInRight 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {meeting.title}
                </td>
                <td
                  className="h-12 py-6 font-medium text-sm whitespace-nowrap align-middle px-3 lg:px-6"
                  style={{
                    animation: `slideInRight 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className={`cursor-pointer px-1 rounded-md justify-center items-center text-center py-2 ${
                      meeting.role === "Co-Host"
                        ? "bg-[#EEBF41] text-white"
                        : "bg-[#007F74] text-white"
                    }`}
                  >
                    {meeting.role}
                  </div>
                </td>
                <td
                  className="h-12 py-6 font-medium text-sm whitespace-nowrap align-middle lg:px-6 px-3 text-black"
                  style={{
                    animation: `slideInRight 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {meeting.meetingid}
                </td>
                <td
                  className="h-12 py-6 font-medium text-sm whitespace-nowrap align-middle px-6 text-black"
                  style={{
                    animation: `slideInRight 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="bg-[#007F74] cursor-pointer text-white px-1 rounded-md justify-center items-center text-center py-2">
                    {meeting.user}
                  </div>
                </td>
                <td
                  className="h-12 lg:block hidden py-6 font-medium text-sm whitespace-nowrap align-middle text-black"
                  style={{
                    animation: `slideInRight 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {meeting.schedule}
                </td>
                <td
                  className="h-12 py-6   font-medium text-sm whitespace-nowrap align-middle px-6"
                  style={{
                    animation: `slideInRight 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex justify-between    ">
                    <button className="flex flex-row gap-x-2 px-4 bg-[#007F74] justify-center text-center rounded-md items-center py-2">
                      <div className="brightness-0 invert">
                        <Image
                          src={video}
                          className="text-white w-5 h-5"
                          alt="video"
                        />
                      </div>
                      <div className="font-medium text-sm text-white">
                        Start
                      </div>
                    </button>
                    <div className="cursor-pointer">
                      <Image src={horizantaldot} alt="" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomTable;
