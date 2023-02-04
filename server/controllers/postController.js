const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
const Report = require("../models/report");
const ErrorHandler = require("../utils/ErrorHandler");

exports.createNewPost = async (req, res, next) => {
  const newPost = { ...req.body };
  newPost.author = req.user._id;
  try {
    const user = await User.findById(req.user._id);
    if (user.isBannedFromPosting) {
      return next(
        new ErrorHandler(
          "Due to negative user feedback, you are temporarily banned from posting",
          403
        )
      );
    }
    user.lifetimePosts = user.lifetimePosts + 1;
    await user.save();
    const post = new Post(newPost);
    await post.save();
    return res.status(201).json({
      success: true,
      post,
    });
  } catch (error) {
    return next(error);
  }
};

exports.removePost = async (req, res, next) => {
  const { postId } = req.params;

  try {
    const post = await Post.findById(postId);
    if (post.author.toString() !== req.user._id.toString()) {
      return next(new ErrorHandler("Unable to delete this post."));
    }
    await Post.findByIdAndDelete(postId);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

exports.postDetails = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId).populate([
      {
        path: "comments",
        populate: {
          path: "author",
          model: "User",
          select: "_id username fullName image",
        },
      },
      {
        path: "author",
        model: "User",
        select: "_id username fullName image",
      },
    ]);

    if (!post) {
      return next(new ErrorHandler("Unable to find this post."));
    }

    return res.status(200).json({
      success: true,
      post,
    });
  } catch (error) {
    return next(error);
  }
};

exports.postComment = async (req, res, next) => {
  const { postId } = req.params;
  const newComment = { ...req.body };
  newComment.author = req.user._id;
  try {
    const comment = new Comment(newComment);
    const post = await Post.findById(postId);
    post.comments = [...post.comments, comment._id];
    comment.onPost = post._id;
    await post.save();
    await comment.save();
    return res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

exports.removeComment = async (req, res, next) => {
  const { commentId, postId } = req.params;
  try {
    const post = await Post.findById(postId);
    post.comments = post.comments.filter(
      (comment) => comment._id.toString() !== commentId.toString()
    );
    await post.save();
    await Comment.findByIdAndDelete(commentId);
    return res.status(202).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.editComment = async (req, res, next) => {
  const { commentId } = req.params;
  const { text } = req.body;

  try {
    await Comment.findByIdAndUpdate(commentId, { text, edited: true });
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.browsePosts = async (req, res, next) => {
  const { search, category, page } = req.query;
  let currentPage = page || 1;
  const perPage = 3;

  const options = {
    ...(search && { title: { $regex: search, $options: "i" } }),
    ...(category && { category }),
  };

  try {
    const totalItems = await Post.find(options).countDocuments();
    const lastPage = Math.ceil(totalItems / perPage);
    if (currentPage > lastPage) {
      currentPage = lastPage;
    }
    if (currentPage <= 0) {
      currentPage = 1;
    }
    const posts = await Post.find(options)
      .populate("author")
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);
    return res.status(200).json({
      success: true,
      posts,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
};

exports.bookmarkPost = async (req, res, next) => {
  const { postId } = req.params;
  let bookmarks;
  try {
    const user = await User.findById(req.user._id);
    const didUserAlreadyBookmarkPost = user.bookmarks.includes(postId);
    if (didUserAlreadyBookmarkPost) {
      bookmarks = user.bookmarks.filter((item) => item.toString() !== postId.toString());
    } else {
      bookmarks = [...user.bookmarks, postId];
    }
    user.bookmarks = bookmarks;
    const result = await user.save();

    return res.status(201).json({
      success: true,
      user: result,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllBookmarks = async (req, res, next) => {
  const { page } = req.query;
  let currentPage = page || 1;
  const perPage = 3;
  try {
    const user = await User.findById(req.user._id);
    const totalItems = await Post.find({ _id: { $in: user.bookmarks } }).countDocuments();
    const lastPage = Math.ceil(totalItems / perPage);
    if (currentPage > lastPage) {
      currentPage = lastPage;
    }
    if (currentPage <= 0) {
      currentPage = 1;
    }

    const bookmarks = await Post.find({ _id: { $in: user.bookmarks } })
      .populate("author", "_id fullName image")
      .skip((currentPage - 1) * perPage)
      .limit(perPage);
    return res.status(200).json({
      success: true,
      bookmarks,
      totalItems,
    });
  } catch (error) {
    next(error);
  }
};

exports.latestPosts = async (req, res, next) => {
  try {
    const latest = await Post.find()
      .populate("author", "fullName image")
      .sort({ createdAt: -1 })
      .limit(3);

    return res.status(200).json({
      success: true,
      posts: latest,
    });
  } catch (error) {
    next(error);
  }
};

exports.likeComment = async (req, res, next) => {
  const { commentId } = req.params;
  let likes;
  try {
    const comment = await Comment.findById(commentId);
    const didUserAlreadyLikeComment = comment.likes.includes(req.user._id);
    if (didUserAlreadyLikeComment) {
      likes = comment.likes.filter((userId) => userId.toString() !== req.user._id.toString());
    } else {
      likes = [...comment.likes, req.user._id];
    }
    comment.likes = likes;
    await comment.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.setPostRatings = async (req, res, next) => {
  const { postId } = req.params;
  const { rating } = req.query;
  const ratingNum = Number(rating);
  try {
    const post = await Post.findById(postId);
    if (post.rating.votedUsers.includes(req.user._id)) {
      return next(new ErrorHandler("You have already submitted your vote.", 400));
    }
    post.rating.ratings = [...post.rating.ratings, ratingNum];
    post.rating.votedUsers = [...post.rating.votedUsers, req.user._id];
    await post.save();
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.postReportPost = async (req, res, next) => {
  const { postId } = req.params;
  const { reportType } = req.body;

  try {
    const post = await Post.findById(postId);
    const user = await User.findById(post.author);
    const newReport = await Report.create({
      post: post._id,
      submittedBy: req.user._id,
      reportType,
    });
    post.reports.reportedFor = [...post.reports.reportedFor, reportType];
    post.reports.allReports = [...post.reports.allReports, newReport._id];
    // Automatically removing posts with more then 5 reports
    // else admin can decide whether to remove them
    if (post.reports.allReports.length >= 5) {
      await Post.findByIdAndRemove(post._id);
    } else {
      await post.save();
    }
    // if user has more then 9 reported posts, he will be banned from posting
    user.reportedPosts = [...user.reportedPosts, newReport._id];
    if (user.reportedPosts.length >= 10) {
      user.banned.status = true;
      user.banned.expiryDate = new Date() + 2 * 24 * 60 * 60 * 1000;
    }
    await user.save();
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
