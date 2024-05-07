import React, { useEffect, useState } from "react";
import AuthNavbar from "../components/auth/AuthNavbar";
import tick from "../assets/tick.svg";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime((prev) => prev - 1);
      }
    }, [1000]);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (time === 0) navigate("/");

  return (
    <div className="grid grid-rows-[120px_1fr] h-screen">
      <AuthNavbar />
      <div className="h-full w-10/12 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-5 min-h-[500px] max-w-[700px]">
          <img src={tick} alt="" className="w-16 md:w-20 aspect-square"/>
          <p className="font-covered-by-grace text-3xl md:text-4xl text-[#2DA950]">
            Success Submitted
          </p>
          <p className="text-4xl md:text-5xl text-center font-semibold ">Congratulations</p>
          <p className="text-gray-500 text-center leading-tight text-lg mt-5 md:text-2xl">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>

        <p className="text-base md:text-xl text-gray-500">
          Redirecting you to Homepage in{" "}
          <span className="font-bold text-black">{time} Seconds</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
