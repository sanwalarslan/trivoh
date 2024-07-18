import Image from "next/image";
import React from "react";
import us from "../../../public/assest/icon/us.svg";
const LanguageSelector = () => {
  return (
    <div className="flex flex-row gap-x-2 justify-center items-center text-center">
      <div>
        <Image src={us} width={20} height={20} alt="us" />
      </div>
      <div>Eng (Us)</div>
    </div>
  );
};

export default LanguageSelector;
