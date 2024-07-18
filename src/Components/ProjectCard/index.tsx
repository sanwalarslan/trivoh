// components/Card.tsx

import Image from "next/image";
import React from "react";
import dateicon from "../../../public/assest/icon/dateicon.svg";
import dot from "../../../public/assest/icon/dots-vertical.svg";
interface CardProps {
  title: string;
  category: string;
  progress: number;  
  startDate: string;  
  endDate: string;  
  teamMemberPic: string;  
  progressColor: string;  
  categoryColor: string;  
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  category,
  progress,
  startDate,
  endDate,
  categoryColor,
  progressColor,
  teamMemberPic,
}) => {
  return (
    <div className="  rounded-lg px-4 pt-4 w-full bg-[white] shadow-md ">
      <div className="flex justify-between">
        <div className="font-bold text-sm font-[inter] " style={{ color: categoryColor }}>
          {category}
        </div>
        <div className="cursor-pointer">
          <Image src={dot} alt={""} />
        </div>
      </div>
      <div className="text-lg font-bold text-[#0F172A] font-[inter] mt-2">{title}</div>
      <div className="text-xs font-normal text-[#64748B] mt-2">
        Quis augue enim a magna feugiat massa, ligula. Proin libero vel in at
        hac. In ipsum, tempor velit, metus. Nibh dolor tortor quam volutpat sit.
      </div>
      <div className="bg-gray-200 rounded-full h-2 mt-4">
        <div
          className=" h-full rounded-full"
          style={{ width: `${progress}%`, backgroundColor: progressColor }}
        ></div>
      </div>
      <div className="flex justify-between py-4 ">
        <div className="  flex-row gap-x-2 flex justify-center rounded-lg px-1  items-center bg-[#F8FAFC]">
          <div className="flex justify-center items-center">
            <Image src={dateicon} alt={""} />
          </div>
          <div className="text-xs font-medium text-[#64748B] ">
            {startDate} - {endDate}
          </div>
        </div>
        <div>
          <Image
            src={teamMemberPic}
            className="rounded-full"
            width={28}
            height={28}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
