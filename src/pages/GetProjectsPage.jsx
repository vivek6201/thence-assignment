import React from "react";
import AuthNavbar from "../components/auth/AuthNavbar";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/auth/AuthForm";

const GetProjects = () => {
  const navigate = useNavigate();

  //this function navigates user to the success page after a successful form submission.
  const onSubmit = (values) => {
    console.log(values)
    navigate("/success");
  };
  
  return (
    <div className="grid grid-rows-[120px_1fr] h-screen">
      <AuthNavbar />
      <div className="h-full w-10/12 mx-auto flex items-center justify-center">
        <div className="flex flex-col items-center gap-y-5 min-h-[500px] max-w-[500px]">
          <p className="font-covered-by-grace text-2xl md:text-4xl text-[#2DA950]">
            Registration Form
          </p>
          <p className="text-3xl md:text-5xl text-center font-semibold leading-snug ">
            Start your success Journey here!
          </p>

          <AuthForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default GetProjects;
