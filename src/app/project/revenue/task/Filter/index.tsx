import React from "react";
import filter from "../../../../../../public/assest/icon/filter.svg";
import Image from "next/image";
const Filter = () => {
  return (
    <div>
      <div className="dropdown dropdown-end    ">
        <div className="flex flex-row gap-x-2 justify-center     lg:items-center">
          <div>
            <div className="hidden lg:block text-[#64748B] font-medium text-[15px]">Filter</div>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="  avatar"
          >
            <div className=" rounded-full ">
              <Image src={filter} width={1} height={16} alt={""} />
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="card card-compact dropdown-content bg-base-100 z-[1]   w-52 shadow"
        >
          <div className="card-body">
            <span className="text-lg font-bold">want to filter</span>
            <button className="btn bg-[#007F74] btn-block">filter</button>{" "}
            <div className="card-actions">
              <button className="btn bg-[#007F74] btn-block">filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
