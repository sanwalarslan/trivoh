import Image from "next/image";
import React from "react";

interface MeatingProps {
  meetingId: number;
  iconSrc: string;
  meatingname: string;
}

const Meating: React.FC<MeatingProps> = ({
  meetingId,
  iconSrc,
  meatingname,
}) => {
  return (
    <div className="sm:flex  rounded-lg bg-white p-4 shadow">
      <div className=" flex  justify-center items-center text-center  ">
        <Image
          src={iconSrc}
          className="w-11 h-11 sm:w-9 sm:h-9" // Change these sizes as needed
          alt="Meeting Icon"
          width={44}
          height={24}
        />
      </div>
      <div className="pl-3">
        <div className="sm:text-lg justify-center text-center items-center text-base font-semibold font-[poppins] py-3 sm:font-normal text-[#737791]">
          {meatingname}
        </div>
        <div className=" text-2xl flex justify-center pr-6   text-black font-semibold  font-[poppins]">
          {meetingId}
        </div>
      </div>
    </div>
  );
};

export default Meating;
