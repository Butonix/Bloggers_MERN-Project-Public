import React from "react";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";

const AuthButton = ({ isAuthenticated, handleAuth }) => {
  return (
    <button
      type="button"
      className="lg:ml-10 border-2 bg-white dark:text-[#20232A] border-blue-700 transition-all text-xl lg:text-sm cursor-pointer rounded-lg px-10 lg:px-5 py-3 lg:py-0 dark:hover:bg-[#ebebed] hover:bg-[#2D5CD0] font-medium hover:text-white"
      onClick={() => handleAuth(isAuthenticated ? "Sign Out" : "Sign Up")}
    >
      <span className="block lg:hidden xl:block">{isAuthenticated ? "Sign Out" : "Sign In"}</span>
      <span className="lg:block xl:hidden hidden text-lg">
        {isAuthenticated ? <AiOutlineLogout /> : <AiOutlineLogin />}
      </span>
    </button>
  );
};

export default AuthButton;
