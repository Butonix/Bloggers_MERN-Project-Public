import React from "react";
import * as ROUTES from "../constants/routes";
import { NavLink } from "react-router-dom";

const NavItems = ({ userId, isAuthenticated, role }) => {
  const styles =
    "lg:mx-5 mb-5 lg:mb-0 lg:text-base text-2xl lg:my-0 my-5 font-semibold xl:font-bold transition-all cursor-pointer text-slate-500 hover:text-slate-900 dark:text-gray-300 dark:hover:text-gray-100";
  return [
    { name: "Home", path: ROUTES.HOME },
    { name: "Browse Blogs", path: ROUTES.BROWSE },
    { name: "Bookmarks", path: ROUTES.BOOKMARKS },
    { name: "Profile", path: `/profile/${userId}` },
    { name: "Admin Panel", path: `/admin-panel` },
  ].map((item, idx) => {
    if (!isAuthenticated && (item.name === "Profile" || item.name === "Bookmarks")) return null;
    if ((!isAuthenticated || role !== "admin") && item.name === "Admin Panel") return null;
    return (
      <NavLink
        to={item.path}
        key={idx}
        className={({ isActive }) =>
          `${styles} ${isActive ? "text-slate-900 dark:text-gray-100" : ""}`
        }
      >
        {item.name}
      </NavLink>
    );
  });
};

export default NavItems;
