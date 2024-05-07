import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ title, link, className }) => {
  return (
    <Link to={link} className={`border text rounded-full py-2 px-4 md:py-5  ${className} md:px-10`}>
      {title}
    </Link>
  );
};

export default CustomLink;
