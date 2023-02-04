import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Input = ({ handleChange, placeholder, value, type, name, halfWidth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const renderIcon = () => {
    if (type === "password") {
      if (showPassword) {
        return <MdVisibilityOff />;
      } else {
        return <MdVisibility />;
      }
    } else {
      return null;
    }
  };
  return (
    <div className={`${halfWidth ? "w-50%" : "w-full"} relative`}>
      <input
        className="border-gray-300 border-2 mb-5 w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        type={showPassword ? "text" : type}
        name={name}
      />
      <span
        className="absolute right-3 top-2.5 cursor-pointer text-2xl text-[#2D5CD0]"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {renderIcon()}
      </span>
    </div>
  );
};

export default Input;
