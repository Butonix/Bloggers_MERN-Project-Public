import React, { useState, useEffect } from "react";
import { fetchPosts } from "../store/actions/postsActions";
import { useDebounce } from "use-debounce";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../util/Layout";
import SearchBar from "../components/SearchBar";
import CategoryTag from "../components/CategoryTag";
import Pagination from "../components/Pagination";
import { categoryColors } from "../constants/categoryColors";
import PostsContainer from "../components/PostsContainer";

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search] = useDebounce(searchTerm, 1500);
  const dispatch = useDispatch();
  const {
    allPosts: { posts, totalItems },
    success,
  } = useSelector((state) => state.posts);

  const handleCategoryChange = (pressedCategory) => {
    setCurrentPage(1);
    if (pressedCategory === "All") {
      setCategory("");
    } else {
      if (pressedCategory === category) {
        setCategory("");
      } else {
        setCategory(pressedCategory);
      }
    }
  };

  useEffect(() => {
    if (search || category) {
      setCurrentPage(1);
    }
    if (success) {
      dispatch(fetchPosts(search, category, currentPage));
    }
    dispatch(fetchPosts(search, category, currentPage));
  }, [search, category, dispatch, currentPage, success]);
  return (
    <div className="xl:w-3/4 md:w-3/5 w-[90%] mx-auto mt-10 pb-10">
      <h1 className="text-3xl font-semibold mb-8 text-center dark:text-[#F7F7F7]">
        Browse All Blogs
      </h1>
      <div className="flex gap-2 flex-wrap">
        {[{ name: "All", color: "black" }, ...categoryColors].map(({ name, color }) => (
          <CategoryTag
            key={name}
            category={name}
            color={color}
            isOnBrowsePage
            selectedCategory={category}
            handleCategoryChange={handleCategoryChange}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5 mb-16">
        <SearchBar
          value={searchTerm}
          handleChange={setSearchTerm}
          placeholder="Search by keyword"
          btnText="Search"
          isSearching
        />
      </div>
      <PostsContainer posts={posts} noPostsMessage="No results found matching your criteria." />
      {Math.ceil(totalItems / 3) > 1 && (
        <Pagination
          pageCount={Math.ceil(totalItems / 3)}
          handlePageChange={(e) => setCurrentPage(e.selected + 1)}
        />
      )}
    </div>
  );
};

export default Layout(Browse, "Browse and search blogs");
