import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Union from "../../assets/Union.svg";

const AskQuestionSection = () => {
  const questions = [
    {
      id: 1,
      question: "Do you offer freelancers?",
      answer: "No, i don't offer",
      isOpen: false,
    },
    {
      id: 2,
      question: "Can I hire multiple talents at once?",
      answer: "No, i don't offer",
      isOpen: false,
    },
    {
      id: 3,
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer: "No, i don't offer",
      isOpen: false,
    },
    {
      id: 4,
      question: "Why should I not go to an agency directly?",
      answer: "No, i don't offer",
      isOpen: false,
    },
    {
      id: 5,
      question: "Who can help me pick a right skillset and duration for me?",
      answer: "No, i don't offer",
      isOpen: false,
    },
  ];

  const [accordian, setAccordian] = useState(questions);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordian.map((accord) => {
      if (accord.id === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordian(updatedAccordions);
  };

  return (
    <div className="mx-5 md:mx-10 bg-[#E8EEE7] rounded-3xl min-h-[600px] grid grid-cols-1 xl:grid-cols-2">
      <div className="flex flex-col items-center md:items-start gap-y-5 p-10 xl:p-20 relative">
        <p className="font-covered-by-grace text-[#9E9D9D] text-3xl md:text-4xl">
          What's on your mind
        </p>
        <p className="text-4xl md:text-5xl font-bold">Ask Questions</p>

        <img src={Union} alt="" className="w-[400px] absolute bottom-0 left-0 hidden xl:block"/>
      </div>
      <div className="transition-all duration-200 flex flex-col w-full justify-center p-8 md:p-10">
        {accordian.map((item, index) => (
          <div key={index}>
            <div
              className="border-b border-[#D7D7D7] py-5 cursor-pointer"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl font-semibold max-w-[70%] md:max-w-[60%] select-none">
                  {item.question}
                </p>
                {item.isOpen ? (
                  <FaMinus className="font-semibold" />
                ) : (
                  <FaPlus className="font-semibold" />
                )}
              </div>

              {item.isOpen ? (
                <div className="py-5">
                  <p className="text-[#617275] select-none">{item.answer}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskQuestionSection;
