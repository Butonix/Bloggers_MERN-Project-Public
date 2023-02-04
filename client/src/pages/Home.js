import React, { useState, useEffect } from "react";
import Layout from "../util/Layout";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { fetchLatestPosts } from "../store/actions/postsActions";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const [newsletter, setNewsletter] = useState("");
  const { latestPosts, success } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(fetchLatestPosts());
    }
    dispatch(fetchLatestPosts());
  }, [dispatch, success]);
  return (
    <div className="md:w-3/4 w-[90%] mx-auto flex flex-col items-center mt-10 pb-10 relative">
      <div className="decor-bg hidden md:block"></div>
      <h1 className="text-3xl font-semibold mb-8 text-center dark:text-[#F7F7F7]">
        Explore trending blogs of all categories
      </h1>
      <p className="text-gray-400 mb-12 text-center">
        Become part of our close-knit community by writing or reading blogs <br /> published by top
        professionals in programming industry.
      </p>
      <div>
        <p className="text-gray-500 text-center mb-5 dark:text-gray-300">
          Subscribe to get notified!
        </p>
        <SearchBar
          value={newsletter}
          handleChange={setNewsletter}
          placeholder="Enter your email"
          btnText="Subscribe"
        />
      </div>
      <div className="lg:w-2/4 md:h-[620px] h-full w-full rounded mt-10">
        {latestPosts.length > 0 && (
          <Carousel showThumbs={false}>
            {latestPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Layout(Home, "Home - Latest blogs");
