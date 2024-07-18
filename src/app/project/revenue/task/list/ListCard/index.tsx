import React, { useState } from "react";
import Image from "next/image";
import calendericon from "../../../../../../../public/assest/icon/calendar.svg";
import dot from "../../../../../../../public/assest/icon/dots.svg";
import Avatar from "../Listavatar";

interface TaskCardProps {
  title: string;
  category: string;
  description: string;
  dueDate: string;
  onDelete: () => void;  // Callback to handle delete
  onEdit: () => void;    // Callback to handle edit
}

const TaskCard: React.FC<TaskCardProps> = ({ title, category, description, dueDate, onDelete, onEdit }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State to toggle the menu

  const handleDotClick = () => {
    setIsMenuOpen((prev) => !prev);  // Toggle menu
  };

  return (
    <div className="bg-white shadow-md rounded-md p-2 mb-4">
      <div className="flex justify-between md:flex-row flex-col  ">
        <div className="flex flex-col">
          <div className="font-[inter] font-semibold text-base">{title}</div>
          <div className="font-[inter] font-medium text-sm text-[#38BDF8]">{category}</div>
        </div>
        <div className="font-[inter] font-normal text-[#64748B] w-[28%] text-left">
          {description}
        </div>
        <div className="flex justify-between flex-row gap-x-4 items-center">
          <div className="flex flex-row gap-x-2 items-center">
            <Image src={calendericon} width={15} alt={""} />
            <div className="text-[#64748B] text-xs font-[inter] font-medium">{dueDate}</div>
          </div>
          <div>
            <Avatar />
          </div>
          <div>
            <Image
              src={dot}
              alt={""}
              onClick={handleDotClick}
              className="cursor-pointer"
            />
            {isMenuOpen && (
              <div className="absolute bg-white shadow-md rounded-md mt-2 right-0 border border-gray-200 z-10">
                <ul className="p-2">
                  <li
                    onClick={() => {
                      handleDotClick();
                      onEdit();
                    }}
                    className="px-4 py-2 text-blue-500 cursor-pointer hover:bg-gray-100"
                  >
                    Edit
                  </li>
                  <li
                    onClick={() => {
                      handleDotClick();
                      onDelete();
                    }}
                    className="px-4 py-2 text-red-500 cursor-pointer hover:bg-gray-100"
                  >
                    Delete
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
