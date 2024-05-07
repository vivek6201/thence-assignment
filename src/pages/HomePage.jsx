import React from "react";
import HomeNavbar from "../components/home/HomeNavbar";
import HeroSection from "../components/home/HeroSection";
import AskQuestionSection from "../components/home/AskQuestionSection";
import FooterSection from "../components/home/FooterSection";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-5 sm:gap-y-10">
      <HomeNavbar />
      <HeroSection />
      <AskQuestionSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
