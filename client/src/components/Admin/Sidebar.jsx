import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AiFillHome } from "react-icons/ai";
import { AdminNavItems } from "../../constants/AdminNavItems";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="flex flex-col py-10 items-center justify-between dark:bg-[#33373E] bg-[#fafafa] border-r-[1px] border-gray-300 dark:border-gray-500 lg:w-1/4 lg:w-2/6 lg:flex hidden min-h-[100vh]">
      <Link to={ROUTES.HOME} className="flex justify-center">
        <img src={Logo} alt="logo" className="md:h-[49px] h-[35px]" />
      </Link>
      <div className="w-full h-full px-10 mt-32">
        <h1 className="text-xl font-bold dark:text-[#F7F7F7]">Manage</h1>
        <div className="flex flex-col pl-5 my-3">
          {AdminNavItems.map((item) => (
            <Link key={item.name} className="flex items-center gap-2 mb-5 text-lg" to={item.path}>
              {item.icon}{" "}
              <span className="hover:text-blue-500 dark:text-[#aaa] transition-all dark:hover:text-blue-300 font-semibold">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Link
        className="text-xl text-[#2D5CD0] dark:text-blue-400 flex items-center gap-3"
        to={ROUTES.HOME}
      >
        <AiFillHome className="text-2xl" />
        Return Home
      </Link>
    </div>
  );
};

const MobileSidebar = ({ handleCloseSidebar }) => {
  return (
    <div className="absolute z-50 flex flex-col py-10 items-center justify-between dark:bg-[#33373E] bg-[#fafafa] border-r-[1px] border-gray-300 dark:border-gray-500 w-full md:w-2/6 lg:hidden min-h-[100vh]">
      <Link to={ROUTES.HOME} className="flex justify-center">
        <img src={Logo} alt="logo" className="md:h-[49px] h-[35px]" />
      </Link>
      <button
        onClick={handleCloseSidebar}
        className="absolute top-5 right-5 md:hidden block text-2xl"
      >
        <AiOutlineClose />
      </button>
      <div className="h-full px-10 mt-32 md:w-full w-2/4">
        <h1 className="text-xl font-bold dark:text-[#F7F7F7]">Manage</h1>
        <div className="flex flex-col pl-5 my-3">
          {AdminNavItems.map((item) => (
            <Link key={item.name} className="flex items-center gap-2 mb-5 text-lg" to={item.path}>
              {item.icon}{" "}
              <span className="hover:text-blue-500 dark:text-[#aaa] transition-all dark:hover:text-blue-300 font-semibold">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <Link
        className="text-xl text-[#2D5CD0] dark:text-blue-400 flex items-center gap-3"
        to={ROUTES.HOME}
      >
        <AiFillHome className="text-2xl" />
        Return Home
      </Link>
    </div>
  );
};

export { MobileSidebar, Sidebar };
