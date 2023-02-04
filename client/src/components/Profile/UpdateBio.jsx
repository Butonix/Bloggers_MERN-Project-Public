import React, { useState } from "react";

const UpdateBio = ({ handleUpdateBio, currentBio = "" }) => {
  const [bio, setBio] = useState(currentBio);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (bio !== "") {
      handleUpdateBio(bio);
    }
  };
  return (
    <form
      className="w-full p-3 border-[1px] border-gray-200 flex flex-col items-center dark:border-gray-400"
      onSubmit={handleSubmit}
    >
      <textarea
        className="border-gray-300 border-2 leading-7 text-[#555] tracking-wide mb-5 w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
        type="text"
        placeholder="Help people to get to know you"
        rows={10}
        value={bio}
        onChange={({ target }) => setBio(target.value)}
      />
      <button
        className="bg-[#2D5CD0] text-white py-2 px-4 mt-2 font-semibold shadow-md rounded hover:bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default UpdateBio;
