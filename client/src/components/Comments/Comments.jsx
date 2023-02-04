import React, { useState } from "react";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  createNewComment,
  editComment,
  deleteComment,
  likeComment,
} from "../../store/actions/postDetailActions";
import { FaRegCommentDots } from "react-icons/fa";

const Comments = ({ commentsRef, postComments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const [editing, setEditing] = useState({
    status: false,
    commentId: null,
  });
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const submitOrEditComment = () => {
    if (newComment !== "" && user?._id) {
      if (editing.status) {
        dispatch(editComment(editing.commentId, newComment));
        setEditing({ status: false, commentId: null });
      } else {
        dispatch(createNewComment(postId, newComment));
      }
      setNewComment("");
    }
  };

  const handleCommentRemove = (commentId) => {
    dispatch(deleteComment(postId, commentId));
  };

  const handleCommentLike = (commentId) => {
    if (user?._id) {
      dispatch(likeComment(commentId));
    }
  };

  return (
    <div className="w-full mt-20 dark:text-[#F7F7F7]" ref={commentsRef}>
      <h1 className="md:text-2xl text-lg flex items-center">
        <FaRegCommentDots className="text-3xl mr-3" />
        <span className="mr-2">{postComments.length}</span>
        Comments
      </h1>
      {user?._id ? (
        <div className="my-5 flex flex-col items-center">
          <textarea
            placeholder="Write up a comment for this blog"
            name="text"
            rows={10}
            value={newComment}
            onChange={({ target }) => setNewComment(target.value)}
            className="border-gray-300 border-2 mb-5 w-full focus:border-gray-400 focus:outline-none rounded px-3 py-2 bg-[#FAFAFA]"
          />
          <button
            type="button"
            onClick={submitOrEditComment}
            className="border-2 bg-white dark:text-[#20232A] border-blue-700 transition-all md:text-lg mt-2 cursor-pointer rounded-lg px-8 py-2 md:py-3 dark:hover:bg-[#ebebed] hover:bg-[#2D5CD0] font-medium hover:text-white"
          >
            {editing.status ? "Edit your comment" : "Submit your comment"}
          </button>
        </div>
      ) : (
        <div className="text-center text-xl m-10 font-semibold">
          You must be logged in to be able to post your comment.
        </div>
      )}
      <div className="mt-24 lg:w-3/4 md-w[85%] w-full mx-auto">
        {postComments.length > 0 ? (
          postComments
            .sort((commentA, commentB) => (commentA.createdAt > commentB.createdAt ? -1 : 1))
            .map((comment) => (
              <Comment
                setEditing={setEditing}
                setNewComment={setNewComment}
                handleCommentRemove={handleCommentRemove}
                handleCommentLike={handleCommentLike}
                user={user}
                key={comment._id}
                comment={comment}
              />
            ))
        ) : (
          <div className="mt-20 text-2xl text-center dark:text-[#F7F7F7]">
            No comments made yet. Be first one to comment on this blog!
          </div>
        )}
      </div>
    </div>
  );
};

export default Comments;
