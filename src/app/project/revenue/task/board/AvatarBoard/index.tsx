import React from "react";
import Image from "next/image";
import man from "../../../../../../../public/assest/icon/man.svg";

const Avatar = () => {
  return (
    <div>
      <div className="avatar-group -space-x-4 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-7 h-7">
            <Image src={man} alt={"arslan"} width={32} height={32} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-7 h-7">
            <Image src={man} alt={"arslan"} width={32} height={32} />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Avatar;
