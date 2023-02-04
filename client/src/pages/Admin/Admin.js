import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, MobileSidebar } from "../../components/Admin/Sidebar";
import { AiOutlineMenu } from "react-icons/ai";

const Admin = () => {
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);
  return (
    <div className="flex min-h-full h-[100vh] w-full overflow-hidden relative">
      {isMobileSidebar && (
        <MobileSidebar
          handleCloseSidebar={() => setIsMobileSidebar(false)}
          isMobileSidebar={isMobileSidebar}
        />
      )}
      <Sidebar />
      <button
        onClick={() => setIsMobileSidebar((prev) => !prev)}
        className="absolute top-5 right-5 text-2xl lg:hidden block hover:text-blue-500 transition-all"
        type="button"
      >
        <AiOutlineMenu />
      </button>
      <div className="xl:p-10 p-5 w-full h-full mt-12 sm:mt-0">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
