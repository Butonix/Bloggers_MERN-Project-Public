import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/Admin/DataTable";
import { fetchAllBlogs } from "../../store/actions/adminActions";
import { Link } from "react-router-dom";
import {
  removePostAdmin,
  // setPostTrending,
  clearAdminState,
} from "../../store/actions/adminActions";

const Blogs = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [search] = useDebounce(query, 1500);
  const {
    posts: { allPosts, totalItems },
    success,
    error,
  } = useSelector((state) => state.admin);

  const renderDataTableActions = (post) => (
    <div className="flex items-center gap-2">
      <Link
        className="bg-[#2D5CD0] text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-blue-700"
        to={`/blog-read/${post?._id}`}
      >
        Visit
      </Link>
      <button
        className="bg-[#E35041] text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-[#db4435]"
        type="button"
        onClick={() => dispatch(removePostAdmin(post?._id))}
      >
        Remove
      </button>
      {/* <button
        className="bg-green-500 text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-green-600"
        type="button"
        onClick={() => dispatch(setPostTrending(post?._id))}
      >
        {post.isTrending ? "Featured" : "Feature"}
      </button> */}
    </div>
  );

  const dataHead = ["Title", "Creator", "Category", "Reports", "Actions"];
  const dataBody = allPosts.map((post) => [
    post.title,
    post.author.fullName,
    post.category,
    post.reports.allReports.length,
    renderDataTableActions(post),
  ]);

  useEffect(() => {
    if (error || success) {
      dispatch(clearAdminState());
    }

    dispatch(fetchAllBlogs(currentPage, search));
  }, [dispatch, currentPage, search, success, error]);

  return (
    <div>
      <div className="flex justify-center mt-5 mb-16">
        <SearchBar
          value={query}
          handleChange={setQuery}
          placeholder="Search by title"
          btnText="Search"
          isSearching
        />
      </div>
      <DataTable dataHead={dataHead} dataBody={dataBody} />
      {Math.ceil(totalItems / 5) > 1 && (
        <Pagination
          pageCount={Math.ceil(totalItems / 5)}
          handlePageChange={(e) => setCurrentPage(e.selected + 1)}
        />
      )}
    </div>
  );
};

export default Blogs;
