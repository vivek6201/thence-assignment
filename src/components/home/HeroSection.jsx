import React from "react";
import human from "../../assets/human.png";
import rocket from "../../assets/rocket.svg";
import spark from "../../assets/spark.svg";
import Card from "../ui/Card";
import CustomLink from "../ui/CustomLink";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <p
    onDragStart={handleDragStart}
    className="text-xl md:text-2xl font-semibold max-w-[500px]"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe maxime
    perferendis vitae magnam, aliquam officiis, a ex corporis doloremque
    consectetur id sapiente esse nihil expedita ratione, alias sequi deserunt?
  </p>,
  <p
    onDragStart={handleDragStart}
    className="text-xl md:text-2xl font-medium max-w-[500px]"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe maxime
    perferendis vitae magnam, aliquam officiis, a ex corporis doloremque
    consectetur id sapiente esse nihil expedita ratione, alias sequi deserunt?
  </p>,
  <p
    onDragStart={handleDragStart}
    className="text-xl md:text-2xl font-medium max-w-[500px]"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe maxime
    perferendis vitae magnam, aliquam officiis, a ex corporis doloremque
    consectetur id sapiente esse nihil expedita ratione, alias sequi deserunt?
  </p>,
];


// alice carausel is used moving carausel in the homepage.
const Gallery = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    keyboardNavigation
    renderNextButton={false}
    renderPrevButton={false}
    autoPlay
    animationDuration={2000}
    infinite
  />
);

const HeroSection = () => {
  return (
    <div className="flex flex-col gap-y-5 mt-5 mx-5 md:mx-10">
      <div className="flex flex-col items-center gap-y-5 md:max-w-[700px] w-11/12 mx-auto">
        <p className="text-2xl md:text-3xl font-covered-by-grace text-[#2DA950]">
          Success Stories
        </p>
        <p className="text-3xl md:text-5xl lg:text-6xl text-center font-manrope font-medium leading-tight">
          Every success journey we’ve encountered.
        </p>
      </div>

      <div className="flex items-center justify-center w-full mt-5">
        <CustomLink
          link={"/projects"}
          title={"Get Projects ->"}
          className={
            "hover:bg-gray-100 transition-all duration-300 py-4 px-10 sm:hidden block"
          }
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 sm:mx-10 my-20 md:m-20 gap-10 h-full place-items-center">
        <div className="relative sm:flex items-center justify-center max-w-[600px] hidden">
          <img
            src={human}
            alt="human"
            className="w-[500px] rounded-3xl aspect-"
          />
          <Card className="absolute hover:bg-gray-100 transition-colors duration-300 cursor-pointer top-44 md:top-32 -left-10 md:-left-20 shadow-lg bg-white rounded-xl md:rounded-3xl md:p-6">
            <div className="relative">
              <img
                src={spark}
                alt=""
                className="absolute -top-5 md:-top-8 -left-5 md:-left-8 -rotate-12 w-20 h-20"
              />
              <p className="text-2xl md:text-4xl font-bold translate-x-5 translate-y-5 md:translate-x-2 md:translate-y-2">
                40%
              </p>
            </div>
            <p className="text-[#828282] text-xs md:text-sm mt-2">
              Achieved reduction in project execution time by optimising team
              availability
            </p>
          </Card>

          <Card className="absolute top-96 lg:top-90 hover:bg-gray-100 transition-colors duration-300 cursor-pointer -left-8 shadow-lg bg-white rounded-full py-4 px-5">
            <div className="flex gap-1 md:gap-2 items-center">
              <img src={rocket} alt="" />
              <div className="flex flex-col gap-1 md:gap-y-2">
                <p className="font-bold text-base md:text-xl uppercase">
                  10 days
                </p>
                <p className="text-gray-500 text-xs">Staff Deployment</p>
              </div>
            </div>
          </Card>
          <Card className="absolute -bottom-10 lg:top-90 -right-10 shadow-lg bg-[#002E18] hover:bg-green-900 transition-colors duration-300 cursor-pointer rounded-3xl p-6 xl:p-7">
            <div className="flex gap-1 md:gap-2 items-baseline">
              <p className="text-3xl xl:text-4xl font-bold text-white">$0.5</p>
              <p className="text-gray-400 font-semibold uppercase">million</p>
            </div>
            <p className="text-gray-300">
              Reduced client expenses by saving on hiring and employee costs.
            </p>
          </Card>
        </div>
        <div className="h-full w-full flex flex-col justify-around items-start max-w-[600px] sm:mt-10">
          <div className="w-10/12 mx-auto">
            <Gallery />
          </div>
          <CustomLink
            className={"bg-black text-white mb-7 ml-7"}
            title={"Explore More ->"}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
