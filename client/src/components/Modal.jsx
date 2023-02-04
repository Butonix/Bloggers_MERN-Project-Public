import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
import { categoryColors } from "../constants/categoryColors";
import Input from "./Input";
import GalleryInput from "./GalleryInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearPostStatus, createPost } from "../store/actions/postsActions";

const DEFAULT_THUMBNAIL = "https://getuikit.com/v2/docs/images/placeholder_600x400.svg";
const initialPostData = {
  title: "",
  content: "",
  thumbnail: "",
  gallery: ["", "", "", "", ""],
  category: "Technology",
};
const Modal = ({ handleClose }) => {
  const [postData, setPostData] = useState(initialPostData);
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.posts);
  const categories = categoryColors.map((category) => category.name);
  const handleChange = ({ target: { name, value } }) =>
    setPostData((prev) => ({ ...prev, [name]: value }));

  const handleGalleryInput = (e, i) => {
    const newGallery = postData.gallery;
    newGallery[i] = e.target.value;
    setPostData((prev) => ({ ...prev, gallery: newGallery }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...postData,
    };
    if (!data.title || !data.content || !data.category) return;
    if (data.thumbnail === "" || !data.thumbnail || !data.thumbnail.includes("http")) {
      data.thumbnail = DEFAULT_THUMBNAIL;
    }
    const galleryChecked = data.gallery.filter((image) => image !== "");
    data.gallery = galleryChecked;
    dispatch(
      createPost(data, () => {
        setPostData(initialPostData);
        setPostData((prev) => ({ ...prev, gallery: ["", "", "", "", ""] }));
        handleClose();
      })
    );
  };

  useEffect(() => {
    if (success) {
      toast.success("New post created successfully!", { theme: "colored" });
    }

    if (error) {
      toast.error(error, { theme: "colored" });
    }
    dispatch(clearPostStatus());
  }, [success, error, dispatch]);

  return ReactDOM.createPortal(
    <div className="absolute top-0 h-auto w-full opacity-95 backdrop-blur py-16 z-50 bg-white flex items-center justify-center">
      <button type="button" onClick={handleClose} className="absolute text-2xl top-5 right-5">
        <AiOutlineClose />
      </button>
      <form className="md:w-3/4 w-full px-5" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center font-semibold mb-10">Start writing your Blog</h1>
        <Input
          value={postData.title}
          handleChange={handleChange}
          placeholder="Enter a title for this blog"
          type="text"
          name="title"
        />
        <textarea
          className="border-gray-300 border-2 leading-7 text-[#555] tracking-wide mb-5 w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
          value={postData.content}
          onChange={handleChange}
          placeholder="Write up a content here"
          type="text"
          rows={15}
          name="content"
        />
        <select
          name="category"
          value={postData.category}
          onChange={handleChange}
          className="border-gray-300 border-2 mb-5 w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <Input
          value={postData.thumbnail}
          handleChange={handleChange}
          placeholder="Enter a URL for post thumbnail"
          type="text"
          name="thumbnail"
        />
        <p className="my-2">Choose between one and five images for a Gallery:</p>
        <GalleryInput handleChange={handleGalleryInput} gallery={postData.gallery} />
        <div className="w-full flex justify-center">
          <button
            className="border-2 bg-white dark:text-[#20232A] border-blue-700 transition-all md:text-lg mt-5 cursor-pointer rounded-lg px-8 md:px-12 py-2 md:py-3 dark:hover:bg-[#ebebed] hover:bg-[#2D5CD0] font-medium hover:text-white"
            type="submit"
          >
            Publish
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("create-blog-modal")
  );
};
export default Modal;
