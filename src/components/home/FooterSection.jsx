import React from "react";
import copyright from "../../assets/copyright.svg";

const FooterSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-y-4 sm:justify-between py-5 mx-5 px-5 md:mx-10 md:px-10 bg-[#E8EEE7] rounded-3xl min-h-[120px] mb-5 sm:mb-10">
      <div className="flex items-center gap-2">
        <img src={copyright} alt="copy" className="w-5 sm:w-auto" />
        <p className="text-sm md:text-base">Talup 2023. All rights reserved</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center gap-2 md:gap-10">
        <p className="hover:underline cursor-pointer text-sm">
          Terms & Conditions
        </p>
        <p className="hover:underline cursor-pointer text-sm md:text-base">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
