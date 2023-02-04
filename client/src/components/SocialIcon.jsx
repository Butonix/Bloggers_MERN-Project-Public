import React from "react";

const SocialIcon = ({ href, icon }) => {
  return (
    <a target="_blank" rel="noreferrer" href={href}>
      <div className="p-3 mx-3 text-[#2D5CD0] text-2xl bg-gray-300 hover:bg-gray-400 transition-all rounded-full">
        {icon}
      </div>
    </a>
  );
};

export default SocialIcon;
