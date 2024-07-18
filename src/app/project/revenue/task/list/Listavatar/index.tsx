import React from "react";
import Image from "next/image";
import man from "../../../../../../../public/assest/icon/man.svg";

const Avatar = () => {
  return (
    <div>
      <div className="avatar-group -space-x-4 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-8 h-8">
            <Image src={man} alt={"arslan"} width={32} height={32} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8 h-8">
            <Image src={man} alt={"arslan"} width={32} height={32} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8 h-8">
            <Image src={man} alt={"arslan"} width={32} height={32} />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-8 h-8">
            <span className="text-xs">+99</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
