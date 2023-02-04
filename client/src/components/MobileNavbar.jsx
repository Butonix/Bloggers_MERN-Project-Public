import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import NavItems from "./NavItems";
import AuthButton from "./AuthButton";
import PublishButton from "./PublishButton";

const MobileNavbar = ({
  setToggleMobileNav,
  isAuthenticated,
  role,
  userId,
  handleAuth,
  handlePublishButtonClick,
}) => {
  return (
    <div className="lg:hidden z-20 w-[100vw] h-screen bg-[#fafafa] bg-gradient-to-b from-slate-200 absolute top-0 right-0">
      <button className="text-3xl absolute top-5 right-5" onClick={() => setToggleMobileNav(false)}>
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col items-center justify-center h-full">
        <NavItems isAuthenticated={isAuthenticated} userId={userId} role={role} />
        {isAuthenticated && <PublishButton handleClick={handlePublishButtonClick} />}
        <AuthButton isAuthenticated={isAuthenticated} handleAuth={handleAuth} />
      </ul>
    </div>
  );
};

export default MobileNavbar;
