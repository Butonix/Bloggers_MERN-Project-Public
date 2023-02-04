const express = require("express");
const {
  createNewPost,
  removePost,
  postDetails,
  postComment,
  removeComment,
  editComment,
  likeComment,
  browsePosts,
  getAllBookmarks,
  bookmarkPost,
  latestPosts,
  setPostRatings,
  postReportPost,
} = require("../controllers/postController");
const requireAuth = require("../middlewares/requireAuth");
const router = express.Router();

// Posts
router.route("/create-new").post(requireAuth, createNewPost);
router.route("/remove-post/:postId").delete(requireAuth, removePost);
router.route("/detail/:postId").get(postDetails);
router.route("/browse-posts").get(browsePosts);
router.route("/bookmark/:postId").get(requireAuth, bookmarkPost);
router.route("/my-bookmarks").get(requireAuth, getAllBookmarks);
router.route("/latest-posts").get(latestPosts);

// Comments
router.route("/detail/:postId/new-comment").post(requireAuth, postComment);
router.route("/detail/:postId/remove-comment/:commentId").delete(requireAuth, removeComment);
// CHECK THIS CONTROLLER, it seems that onPost property is lost after the update?
router.route("/detail/edit-comment/:commentId").post(requireAuth, editComment);
router.route("/detail/like-comment/:commentId").get(requireAuth, likeComment);

// Ratings
router.route("/detail/:postId/update-ratings").get(requireAuth, setPostRatings);

// Reports
router.route("/detail/:postId/report-post").post(requireAuth, postReportPost);

module.exports = router;
