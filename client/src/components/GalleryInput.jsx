import React from "react";

const GalleryInput = ({ handleChange, gallery }) => {
  return (
    <div className="w-full flex flex-col">
      {[...new Array(gallery.length).fill(null)].map((_, i) => (
        <input
          className="border-gray-300 border-2 mb-5 w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
          key={i}
          type="text"
          placeholder={`Enter image ${i + 1} URL`}
          value={gallery[i]}
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </div>
  );
};

export default GalleryInput;
