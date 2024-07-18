import React from "react";
import man from "../../../../../public/assest/icon/man.svg";

import TeamCard from "./TeamCard";
const teamMembers = [
  { name: "David Alan", role: "Project Lead", imageSrc: man },
  { name: "David Alan", role: "Project Lead", imageSrc: man },
  { name: "David Alan", role: "Project Lead", imageSrc: man },
  { name: "David Alan", role: "Project Lead", imageSrc: man },
  { name: "David Alan", role: "Project Lead", imageSrc: man },
  // Add more team members as needed
];
const Team = () => {
  return (
    <div>
      <div className="flex justify-between  w-full">
        <div className="w-full">
          <div>
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                imageSrc={member.imageSrc}
                isFirst={index === 0} // Set isFirst to true for the first card
              />
            ))}
          </div>{" "}
        </div>
        <div className="w-[40%] pt-4 items-center flex flex-col   gap-y-2  ">
          <button className="bg-[#008075] text-white font-semibold font-[inter] text-sm px-4 py-2 rounded">
            Add a Team Member
          </button>
          <button className="bg-[#DF8216] text-white font-semibold font-[inter] text-sm px-8 py-2 rounded">
            Invite Someone
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
