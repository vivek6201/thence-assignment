import React from "react";
import logo from "../../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const AuthNavbar = () => {
  const location = useLocation();

  return (
    <div className="px-14 py-5 h-full flex justify-between items-center">
      <img src={logo} alt="" className="w-32" />
      {location.pathname === "/projects" ? (
        <Link
          to={"/"}
          className="rounded-full border p-5 hover:bg-gray-100 duration-300 transition-all"
        >
          <RxCross1 className="text-xl" />
        </Link>
      ) : null}
    </div>
  );
};

export default AuthNavbar;
