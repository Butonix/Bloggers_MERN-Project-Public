import React from "react";
import { Link } from "react-router-dom";

const Avatar = ({ img, name, createdAt, userId }) => {
  return (
    <div className="flex flex-col md:flex-row align-center mt-5">
      <Link to={`/profile/${userId}`}>
        <img
          src={img}
          alt="avatar"
          className="rounded-full mr-5 float-left"
          style={{ height: "50px", width: "50px" }}
        />
      </Link>
      <div className="flex flex-col items-start mt-3 md:mt-0">
        <Link to={`/profile/${userId}`}>
          <p className="font-semibold dark:text-gray-300">{name}</p>
        </Link>
        <p className="text-gray-500 dark:text-gray-400">
          {new Date(createdAt).toLocaleDateString("en-GB")}
        </p>
      </div>
    </div>
  );
};

export default Avatar;
