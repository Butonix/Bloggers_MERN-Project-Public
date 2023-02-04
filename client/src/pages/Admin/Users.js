import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce } from "use-debounce";
import Pagination from "../../components/Pagination";
import SearchBar from "../../components/SearchBar";
import DataTable from "../../components/Admin/DataTable";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  fetchAllUsers,
  banUnbanUser,
  promoteUser,
  clearAdminState,
} from "../../store/actions/adminActions";

const Users = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const [search] = useDebounce(query, 1500);
  const {
    users: { allUsers, totalItems },
    success,
    error,
  } = useSelector((state) => state.admin);
  const renderDataTableActions = (user) => (
    <div className="flex items-center gap-2">
      <Link
        className="bg-[#2D5CD0] text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-blue-700"
        to={`/profile/${user?._id}`}
      >
        Visit
      </Link>
      <button
        className="bg-[#E35041] text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-[#db4435]"
        type="button"
        onClick={() => dispatch(banUnbanUser(user?._id))}
      >
        {user?.banned.status ? "Unban" : "Ban"}
      </button>
      {user && user?.role !== "admin" && !user?.banned.status && (
        <button
          className="bg-green-500 text-white py-1 px-4 font-semibold shadow-md rounded hover:bg-green-600"
          type="button"
          onClick={() => dispatch(promoteUser(user?._id))}
        >
          Promote
        </button>
      )}
    </div>
  );

  const dataHead = ["Full Name", "Username", "Status", "Actions"];
  const dataBody = allUsers.map((user) => [
    user.fullName,
    user.username,
    user.banned.status ? "Banned" : "Not Banned",
    renderDataTableActions(user),
  ]);

  useEffect(() => {
    if (success) {
      toast.success("Success!", { theme: "colored" });
      dispatch(clearAdminState());
    }
    if (error) {
      dispatch(clearAdminState());
    }
    dispatch(fetchAllUsers(currentPage, search));
  }, [dispatch, currentPage, search, success, error]);

  return (
    <div>
      <div className="flex justify-center mt-5 mb-16">
        <SearchBar
          value={query}
          handleChange={setQuery}
          placeholder="Search by full name"
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

export default Users;
