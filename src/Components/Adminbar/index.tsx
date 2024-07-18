import React from "react";
import Man from "../../../public/assest/icon/man.svg";
import Image from "next/image";
import vector from "../../../public/assest/icon/Vector.svg";
import Notification from "../Notification";
const Admibar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-none">
            <div><Notification /></div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image src={Man} alt={""} />
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">Join us</span>
                <button className="btn bg-[#007F74] btn-block">
                  Log in
                </button>{" "}
                <div className="card-actions">
                  <button className="btn bg-[#007F74] btn-block">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role=" " className="">
              <div className="flex flex-col text-[15px] font-medium px-1 mb-[1px]">
                <div className="text-[#0000ff6c]">Arslan</div>
                <div className="font-normal">Admin</div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <Image src={vector} alt={""} width={15} height={22} />
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">Join us</span>
                <button className="btn bg-[#007F74] btn-block">
                  Log in
                </button>{" "}
                <div className="card-actions">
                  <button className="btn bg-[#007F74] btn-block">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admibar;
