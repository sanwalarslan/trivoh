import React from "react";
import Image, { StaticImageData } from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: StaticImageData;
  isFirst: boolean;  // Add a prop to indicate if it's the first card
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, imageSrc, isFirst }) => {
  return (
    <div className={`py-1 ${isFirst ? "pt-4" : ""}`}>
      <div className="bg-white shadow-sm">
        <div className="flex py-2 w-full px-12 items-center">
          <div className="avatar-group -space-x-4 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-5 h-5">
                <Image src={imageSrc} alt={name} width={32} height={32} />
              </div>
            </div>
          </div>
          <div className="font-[inter] text-right w-[65%] font-normal text-[#64748B] text-xs">
            {name} ({role})
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
