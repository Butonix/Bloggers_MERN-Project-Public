import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <p>Error occurred... You arer not logged in... </p>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center gap-5">
      <img className="h-48 w-48 rounded-full shadow-md" src={user.image} alt="avatar" />
      <h1 className="text-2xl font-semibold mt-10 dark:text-[#F7F7F7]">
        Welcome {user.fullName} to Admin-Panel
      </h1>
      <p className="leading-8 text-lg text-gray-500 text-center tracking-wide dark:text-gray-300">
        You have been given administrative rights on this website. <br />
        With admin authority you can manage other users and their blogs. <br />
        Go ahead and check out other sections on admin panel!
      </p>
      <Link
        className="bg-[#2D5CD0] text-white py-2 px-4 mt-2 font-semibold shadow-md rounded hover:bg-blue-700"
        to={"users"}
      >
        See all users
      </Link>
    </div>
  );
};

export default Welcome;
