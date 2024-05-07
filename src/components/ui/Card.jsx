import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`p-4  flex flex-col gap-y-3 w-[200px] md:w-[230px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
