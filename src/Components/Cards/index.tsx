import React, { ReactNode } from "react";

interface CardProps {
  content: string;
  children?: ReactNode;
}

const CardBasic: React.FC<CardProps> = ({ content, children }) => {
  return (
    <>
      {/*<!-- Component: Basic card --> */}
      <div className="overflow-hidden rounded-lg bg-white text-[#282A34] shadow-md shadow-slate-200">
        <div className="p-6">
          <h3 className="mb-4 text-xl font-bold text-[#282A34]">
            Meating
          </h3>
          <p className="text-base font-normal pb-4 font-[poppins] text-[#282A34]">{content}</p>
          {children}
        </div>
      </div>
      {/*<!-- End Basic card --> */}
    </>
  );
}

export default CardBasic;
