import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({
  value,
  handleChange,
  placeholder,
  btnText,
  isSearching,
  handleSubmit = (e) => {
    e.preventDefault();
  },
}) => {
  return (
    <form onSubmit={handleSubmit} className="h-[50px] md:w-[450px] w-[300px] relative">
      <input
        className="w-full px-3 h-full rounded-3xl bg-[#F6F9FD] border-2 border-gray-400 hover:border-gray-500 focus:outline-none"
        value={value}
        onChange={({ target }) => handleChange(target.value)}
        placeholder={placeholder}
      />
      <button
        className="absolute right-0 h-full px-5 text-white bg-[#2652D1] hover:bg-blue-800 transition-all rounded-3xl"
        type="submit"
      >
        <span className="md:block hidden">{btnText}</span>
        <span className="md:hidden block">
          {!isSearching ? <AiOutlinePlus /> : <AiOutlineSearch />}
        </span>
      </button>
    </form>
  );
};

export default SearchBar;
