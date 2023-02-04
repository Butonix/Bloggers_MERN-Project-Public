import React from "react";

const InformationCard = ({ numOfPosts, numOfComments, user }) => {
  return (
    <div className="w-full p-5 border-[1px] border-gray-200 bg-[#fafafa] rounded-md">
      <p className="text-gray-600 tracking-wide">Username: {user.username}</p>
      <p className="text-gray-600 tracking-wide my-2">Contact Email: {user.email}</p>
      <p className="text-gray-600 tracking-wide my-2">Role: {user.role}</p>
      <p className="text-gray-600 tracking-wide my-2">Active Blogs: {numOfPosts}</p>
      <p className="text-gray-600 tracking-wide my-2">Lifetime Posts: {user.lifetimePosts}</p>
      <p className="text-gray-600 tracking-wide my-2">Comments Made: {numOfComments}</p>
      <p className="text-gray-600 tracking-wide my-2">Bookmarks: {user.bookmarks.length}</p>
      <p className="text-gray-600 tracking-wide">
        Joined: {new Date(user.createdAt).toLocaleDateString("en-GB")}
      </p>
    </div>
  );
};

export default InformationCard;
