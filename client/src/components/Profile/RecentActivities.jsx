import React, { useState } from "react";
import formatDistance from "date-fns/formatDistance";
import { Link } from "react-router-dom";

const RecentActivities = ({ posts, comments }) => {
  const [showMore, setShowMore] = useState(false);
  const postsWithType = posts.map((post) => ({ type: "post", ...post }));
  const commentsWithType = comments.map((comment) => ({ type: "comment", ...comment }));
  const allActivities = [...postsWithType, ...commentsWithType].sort((item1, item2) =>
    item1.updatedAt > item2.updatedAt ? -1 : 1
  );

  return (
    <div className="w-full flex flex-col gap-10">
      {allActivities.map((item) => {
        const date = formatDistance(new Date(item.updatedAt), new Date(), { addSuffix: true });
        const bgColor = item.type === "comment" ? "bg-[#FEB700]" : "bg-[#3F6CE1]";
        return (
          <div
            key={item._id}
            className="border-[1px] border-gray-200 bg-[#fafafa] rounded-md py-2 px-4 relative"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to={`/profile/${item.author._id}`}>
                  <img
                    src={item.author.image}
                    alt="avatar"
                    className="rounded-full mr-5"
                    style={{ height: "35px", width: "35px" }}
                  />
                </Link>
                <Link to={`/blog-read/${item.type === "comment" ? item.onPost._id : item._id}`}>
                  <h1>{item.title || item.onPost.title}</h1>
                </Link>
              </div>
              <span className="text-sm text-gray-400">{date}</span>
            </div>
            <div className={`absolute -top-3 right-5 w-24 z-50 ${bgColor} text-white text-center`}>
              <p className="w-full">{item.type === "comment" ? "Comment" : "Post"}</p>
            </div>
            {item.type === "comment" && (
              <div className="border-t-[1px] pl-6 border-gray-200 w-full mt-3">
                <p className="text-md text-gray-500 my-3">
                  {showMore ? item.text : item.text.substr(0, 100)}
                  {item.text.length > 100 && (
                    <>
                      {!showMore && `...  `}
                      <button
                        className="text-blue-500 text-md"
                        onClick={() => setShowMore((prev) => !prev)}
                        type="button"
                      >
                        {showMore ? "Show less" : "Show More"}
                      </button>
                    </>
                  )}
                </p>
                <p className="text-sm text-gray-400">{date}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecentActivities;
