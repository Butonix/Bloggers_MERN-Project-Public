import React from "react";
import BlogCard from "./BlogCard";

const PostsContainer = ({ posts, noPostsMessage }) => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-[700px] h-full mb-10 gap-5">
      {posts.length > 0 ? (
        posts.map((post) => <BlogCard key={post?._id} post={post} />)
      ) : (
        <h1 className="w-full md:mt-10 font-semibold text-center text-2xl">{noPostsMessage}</h1>
      )}
    </div>
  );
};

export default PostsContainer;
