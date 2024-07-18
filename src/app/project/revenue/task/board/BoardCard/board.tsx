import Image from "next/image";
import React from "react";
import dateicon from "../../../../../../../public/assest/icon/dateicon.svg";
import Avatar from "../AvatarBoard";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  position: string;
}

interface BoardCardProps {
  task: Task;
}

const BoardCard: React.FC<BoardCardProps> = ({ task }) => {
  return (
    <div className="py-3">
      <div className="flex flex-col p-2 gap-y-2 rounded-lg shadow-md bg-white">
        <div className="font-[inter] pt-2 text-base font-semibold text-black">
          {task.title}
        </div>
        <div className="text-xs text-[#38BDF8] font-medium">{task.position}</div>
        <div className="text-[#64748B] text-xs font-[inter] pb-1 font-normal">
          {task.description}
        </div>
        <span className="bg-[#F1F5F9] h-[2px]"></span>
        <div className="flex justify-between items-center pb-3">
          <div className="flex flex-row gap-x-2 py-1 bg-gray-200 px-2 rounded-lg">
            <div className="flex justify-center items-center">
              <Image src={dateicon} alt="date icon" />
            </div>
            <div className="text-xs font-normal "> {task.dueDate}</div>
          </div>
          <div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
