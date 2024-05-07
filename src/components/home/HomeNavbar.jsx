import React from "react";
import logo from "../../assets/logo.svg";
import CustomLink from "../ui/CustomLink";

const HomeNavbar = () => {
  return (
    <div className="md:p-5">
      <div className="hidden sm:flex justify-between items-center rounded-full py-2 px-5 sm:px-10 sm:py-5 border">
        <div>
          <img src={logo} />
        </div>
        <div className="flex gap-5">
          <CustomLink
            link={"/projects"}
            title={"Get Projects"}
            className={"hover:bg-gray-100 transition-all duration-300"}
          />
          <CustomLink
            link={"#"}
            title={"Onboard Talent"}
            className={
              "bg-black hover:bg-gray-700 text-white transition-all duration-300"
            }
          />
        </div>
      </div>

      <div className="flex sm:hidden flex-col items-center justify-center gap-y-10 mt-16">
        <img src={logo} alt="" />
        <CustomLink
          link={"#"}
          title={"Meet Your Candidates ->"}
          className={
            "bg-black hover:bg-gray-700 text-white transition-all duration-300 py-4 px-10"
          }
        />
      </div>
    </div>
  );
};

export default HomeNavbar;
