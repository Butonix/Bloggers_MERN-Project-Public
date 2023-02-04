import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostDetails,
  submitRating,
  clearPostDetailStatus,
} from "../store/actions/postDetailActions";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../util/Layout";
import CategoryTag from "../components/CategoryTag";
import Avatar from "../components/Avatar";
import Ratings from "../components/Ratings";
import Comments from "../components/Comments/Comments";
import SelectRating from "../components/SelectRating";
import { categoryColors } from "../constants/categoryColors";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineArrowDown } from "react-icons/ai";
import MetaData from "../components/MetaData";

const Detail = () => {
  const dispatch = useDispatch();
  const { blogId } = useParams();
  const { post, success, error } = useSelector((state) => state.postDetail);
  const { user } = useSelector((state) => state.auth);
  const commentsRef = useRef();
  const alreadyGaveRating = post?.rating.votedUsers.includes(user?._id);

  const handleGoToCommentSection = () => commentsRef.current.scrollIntoView({ behavior: "smooth" });

  const handleUpdateRating = (rating) => {
    if (rating >= 0 && rating <= 5) {
      dispatch(submitRating(post._id, rating + 1));
    }
  };

  useEffect(() => {
    if (success) {
      toast.success("Success!", { theme: "colored" });
      dispatch(clearPostDetailStatus());
    }
    if (error) {
      dispatch(clearPostDetailStatus());
    }
    dispatch(fetchPostDetails(blogId));
  }, [success, blogId, dispatch]);
  if (!post) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        {/* <h1 className="text-2xl mb-10 text-center">
          Oops, something went wrong. <br />
          The blog you were trying to find is not available.
        </h1>
        <Link className="text-blue-600 text-xl" to="/">
          Go back home
        </Link> */}
      </div>
    );
  }
  return (
    <>
      <MetaData title={post.title || "Blog Details"} />
      <div className="lg:w-3/4 w-[90%] mx-auto flex flex-col items-center mt-10 pb-10">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <CategoryTag
            color={categoryColors.find((color) => color.name === post.category).color || "Black"}
            category={post.category}
          />
          <h1 className="my-10 md:my-0 md:text-2xl text-center text-xl font-bold w-2/4 md:pt-32 dark:text-[#F7F7F7]">
            {post.title}
          </h1>
          <Avatar
            img={post.author.image}
            name={post.author.fullName}
            createdAt={post.createdAt}
            userId={post.author._id}
          />
        </div>
        <div className="w-full flex md:flex-row md:justify-between mt-12 gap-5 md:gap-0 flex-col items-center">
          <Ratings rating={post?.rating} />
          {post.comments.length > 0 ? (
            <div>
              <button
                type="button"
                onClick={handleGoToCommentSection}
                className="flex items-center bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-6"
              >
                Go to comments
                <AiOutlineArrowDown className="ml-2 text-2xl text-gray-600" />
              </button>
            </div>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
        <div className="mt-32">
          <div className="border-b-4 mb-5 border-[#2D5CD0] w-1/4 h-[5px]"></div>
          <p className="leading-8 text-lg text-[#555] tracking-wide dark:text-gray-300">
            {post.content}
          </p>
          <div className="w-full flex justify-end">
            <div className="border-b-4 mt-5 border-[#2D5CD0] w-1/4 h-[5px]"></div>
          </div>
        </div>
        {post.gallery.length > 0 && (
          <div className="mt-20">
            <Carousel>
              {post.gallery.map((src) => (
                <img key={src} src={src} alt={post.name} />
              ))}
            </Carousel>
          </div>
        )}
        {!alreadyGaveRating && user?._id && (
          <div className="w-full my-10 flex flex-col justify-center items-center">
            <h1 className="font-semibold dark:text-gray-300 text-lg mb-3">
              How did you like this blog?
            </h1>
            <SelectRating handleUpdateRating={handleUpdateRating} />
          </div>
        )}
        <Comments postId={post._id} commentsRef={commentsRef} postComments={post.comments} />
      </div>
    </>
  );
};

export default Layout(Detail);
