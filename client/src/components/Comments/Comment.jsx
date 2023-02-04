import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit, AiFillHeart } from "react-icons/ai";
import formatDistance from "date-fns/formatDistance";
import { Link } from "react-router-dom";

// styles for toggleEdit, editing.status === true
// edited mark on comments
// edit and delete if user is comment owner and auth,

const Comment = ({
  comment,
  user,
  setEditing,
  setNewComment,
  handleCommentRemove,
  handleCommentLike,
}) => {
  const didUserCreateThisComment = comment.author._id === user?._id;
  const didUserLikeThisPost = comment.likes.includes(user?._id);
  const date = formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true });
  const handleEditClick = () => {
    setNewComment(comment.text);
    setEditing((prev) => {
      const newStatus = !prev.status;
      if (!newStatus) {
        setNewComment("");
        return {
          status: false,
          commentId: null,
        };
      } else {
        return {
          status: true,
          commentId: comment._id,
        };
      }
    });
  };
  return (
    <div className="w-full md:px-12 md:mt-12 pt-8 pb-4 min-h-[200px] mt-5 px-5 bg-[#fafafa] border-[1px] border-[#ccc] dark:border-blue-400">
      <div className="flex min-h-full items-start gap-5">
        <div>
          <Link to={`/profile/${comment.author._id}`}>
            <img
              style={{ height: "50px", width: "50px" }}
              className="rounded-lg"
              src={comment.author.image}
              alt={comment.author.username}
            />
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <Link to={`/profile/${comment.author._id}`}>
                <p className="font-semibold dark:text-gray-600">{comment.author.fullName}</p>
              </Link>
              <span className="text-gray-400 dark:text-gray-500">{date}</span>
              {comment?.edited && <p className="text-green-600 font-semibold text-sm">Edited</p>}
            </div>
            <div className="mt-5 dark:text-gray-600">{comment.text}</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {didUserCreateThisComment && user?._id && (
            <>
              <button
                onClick={handleEditClick}
                type="button"
                className="bg-gray-200 lg:text-xl p-3 rounded-full text-green-600"
              >
                <AiFillEdit />
              </button>
              <button
                onClick={() => handleCommentRemove(comment._id)}
                type="button"
                className="bg-gray-200 lg:text-xl p-3 rounded-full text-red-600"
              >
                <BsFillTrashFill />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="mt-5 flex items-center">
        <button
          onClick={() => handleCommentLike(comment._id)}
          type="button"
          className={`bg-gray-200 mr-3 lg:text-xl p-3 rounded-full text-red-600 ${
            didUserLikeThisPost ? "text-red-500" : "text-black"
          }`}
        >
          <AiFillHeart />
        </button>
        <span className="font-semibold dark:text-gray-600">
          {comment.likes.length || 0} {comment.likes.length === 1 ? "like" : "likes"}
        </span>
      </div>
    </div>
  );
};

export default Comment;
