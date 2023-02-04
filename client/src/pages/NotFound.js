import React from "react";
import MetaData from "../components/MetaData";
import { HOME } from "../constants/routes";
import { Link } from "react-router-dom";
import NotFoundLogo from "../assets/404.svg";

const NotFound = () => {
  return (
    <>
      <MetaData title="404 Page not found" />
      <div className="flex flex-col text-center w-[100vw] h-[100vh] items-center justify-center">
        <img src={NotFoundLogo} alt="Not Found" className="w-2/4" />
        <h1 className="text-xl my-5 font-semibold">Something went wrong.</h1>
        <p className="text-gray-500">Page you are looking for does not exist.</p>
        <Link
          to={HOME}
          className="border-2 border-blue-700 cursor-pointer rounded-lg px-5 py-2 mt-2 transition-all hover:bg-[#2D5CD0] font-medium hover:text-white"
        >
          Go to homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
