import React from "react";

const Details = () => {
  // Array of card data
  const cardData = [
    {
      id: 1,
      projectName: "Project Name",
      projectDesc: "Grow Revenue in America",
    },
    {
      id: 2,
      projectName: "Project Description",
      projectDesc:
        "Quis augue enim a magna feugiat massa, ligula. Proin libero vel in at hac. In ipsum, tempor velit, metus. Nibh dolor tortor quam volutpat sit.",
    },
    {
      id: 3,
      projectName: "Project Category",
      projectDesc: "Research and development",
    },
    {
      id: 4,
      projectName: "Start Date",
      projectDesc: "14th December 2023",
    },
    {
      id: 5,
      projectName: "End Date",
      projectDesc: "25th January 2024",
    },
  ];

  return (
    <div className="py-6">
      {cardData.map((card) => (
        <div key={card.id} className="bg-white py-5 mb-4 shadow-sm">
          <div className="w-[95%] sm:w-[80%]  m-auto sm:mx-8">
            <div className="flex justify-between items-start font-semibold text-sm">
              <div className="text-[#2a2b2e] ">{card.projectName}</div>
              <div className=" w-full sm:w-[60%] md:w-[40%] text-sm text-[#64748B] font-medium ">
                {card.projectDesc}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
