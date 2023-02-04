import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const PublishButton = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="lg:ml-10 lg:my-0 my-5 border-2 bg-white dark:text-[#20232A] flex items-center border-blue-700 transition-all xl:text-sm text-xl cursor-pointer rounded-lg px-10 lg:px-5 py-3 lg:py-0 dark:hover:bg-[#ebebed] hover:bg-[#2D5CD0] font-medium hover:text-white"
    >
      <AiOutlinePlus className="lg:block hidden text-lg xl:text-xl" />
      <span className="xl:block lg:hidden block ml-1">Publish</span>
    </button>
  );
};

export default PublishButton;
