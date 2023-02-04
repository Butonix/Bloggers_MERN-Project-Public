import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const SelectRating = ({ handleUpdateRating }) => {
  const [currentIndex, setcurrentIndex] = useState(-1);
  const handleClick = (i) => {
    if (i === currentIndex) {
      setcurrentIndex(-1);
    } else {
      setcurrentIndex(i);
    }
  };

  const handleSubmit = () => {
    if (currentIndex > -1) {
      handleUpdateRating(currentIndex);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        {[...new Array(5).fill(null)].map((_, idx) => {
          const className = idx <= currentIndex ? "text-[#FB0] cursor-pointer" : "cursor-pointer";
          return (
            <span key={idx + 1} className="text-2xl lg:text-5xl" onClick={() => handleClick(idx)}>
              <AiFillStar className={className} />
            </span>
          );
        })}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-[#2D5CD0] text-white py-1 px-3 mt-2 font-semibold shadow-md rounded hover:bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default SelectRating;
