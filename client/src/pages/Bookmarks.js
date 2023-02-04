import React, { useEffect, useState } from "react";
import Layout from "../util/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookmarks, clearPostStatus } from "../store/actions/postsActions";
import PostsContainer from "../components/PostsContainer";
import Pagination from "../components/Pagination";

// NEED TOTALPOSTS FOR PAGINATION
// POPULATE AUTHOR for image and other
// make pagination on backendd by page

const Bookmarks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { bookmarkSuccess } = useSelector((state) => state.auth);
  const {
    bookmarks: { posts, totalItems },
    error,
  } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchAllBookmarks(currentPage));
    if (error) {
      dispatch(clearPostStatus());
    }
  }, [bookmarkSuccess, dispatch, error, currentPage]);
  return (
    <div className="xl:w-3/4 md:w-3/5 w-[90%] mx-auto mt-10 pb-10">
      <h1 className="text-3xl font-semibold mb-8 text-center dark:text-[#F7F7F7]">
        Your bookmarks
      </h1>
      <p className="text-gray-400 mb-12 text-center">
        By bookmarking other blogs you can save them and read later.
      </p>
      <PostsContainer noPostsMessage="You don't have any bookmarks yet." posts={posts} />
      {Math.ceil(totalItems / 3) > 1 && (
        <Pagination
          pageCount={Math.ceil(totalItems / 3)}
          handlePageChange={(e) => setCurrentPage(e.selected + 1)}
        />
      )}
    </div>
  );
};

export default Layout(Bookmarks, "Your Bookmarks");
