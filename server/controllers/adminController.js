const User = require("../models/user.js");
const Post = require("../models/post.js");
const Report = require("../models/report.js");
const ErrorHandler = require("../utils/ErrorHandler.js");

exports.getAllUsers = async (req, res, next) => {
  const { page, search } = req.query;
  let currentPage = page || 1;
  const perPage = 5;
  const options = {
    ...(search && { fullName: { $regex: search, $options: "i" } }),
  };
  try {
    const totalUsers = await User.find().countDocuments();
    const lastPage = Math.ceil(totalUsers / perPage);
    if (currentPage > lastPage) {
      currentPage = lastPage;
    }
    if (currentPage <= 0) {
      currentPage = 1;
    }
    const users = await User.find(options)
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage);

    return res.status(200).json({
      success: true,
      users,
      totalUsers,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllPosts = async (req, res, next) => {
  const { page, search } = req.query;
  let currentPage = page || 1;
  const perPage = 5;
  const options = {
    ...(search && { title: { $regex: search, $options: "i" } }),
  };
  try {
    const totalPosts = await Post.find().countDocuments();
    const lastPage = Math.ceil(totalPosts / perPage);
    if (currentPage > lastPage) {
      currentPage = lastPage;
    }
    if (currentPage <= 0) {
      currentPage = 1;
    }
    const posts = await Post.find(options)
      .sort({ createdAt: -1 })
      .skip((currentPage - 1) * perPage)
      .limit(perPage)
      .populate("author", "fullName");

    return res.status(200).json({
      success: true,
      posts,
      totalPosts,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllReports = async (req, res, next) => {
  try {
    const reports = await Report.find().populate([
      {
        // path: "comments",
        path: "post",
        model: "Post",
        select: "_id title reports author",
        populate: {
          path: "author",
          model: "User",
          select: "_id username fullName image",
        },
      },

      {
        path: "submittedBy",
        model: "User",
        select: "_id username fullName image",
      },
    ]);
    return res.status(200).json({
      success: true,
      reports,
    });
  } catch (error) {
    next(error);
  }
};
exports.promoteUser = async (req, res, next) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId);
    if (user.role === "admin") {
      return next(new ErrorHandler("This user is already an administrator", 400));
    }
    user.role = "admin";
    await user.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.banUnbanUser = async (req, res, next) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId);
    if (user.banned.status) {
      user.banned.status = false;
      user.banned.expiryDate = undefined;
    } else {
      user.banned.status = true;
      user.banned.expiryDate = new Date() + 7 * 24 * 60 * 60 * 1000;
    }

    await user.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.removePost = async (req, res, next) => {
  const { postId, reportId } = req.query;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return next(new ErrorHandler("Couldn't find the post you are trying to delete.", 400));
    }
    if (reportId) {
      const report = await Report.findById(reportId);
      report.status = "closed";
      await report.save();
    }
    await Post.findByIdAndDelete(postId);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};

exports.setTrending = async (req, res, next) => {
  const { postId } = req.query;
  try {
    const post = await Post.findById(postId);
    if (post.isTrending) {
      post.isTrending = false;
    } else {
      post.isTrending = true;
    }
    const result = await post.save();
    return res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    return next(error);
  }
};

exports.getReport = async (req, res, next) => {
  const { reportId } = req.query;
  try {
    const report = await Report.findById(reportId).populate([
      {
        path: "post",
        model: "Post",
        populate: {
          path: "author",
          model: "User",
          select: "_id username fullName image",
        },
      },

      {
        path: "submittedBy",
        model: "User",
        select: "_id username fullName image",
      },
    ]);
    return res.status(200).json({
      success: true,
      report,
    });
  } catch (error) {
    return next(error);
  }
};

exports.closeReport = async (req, res, next) => {
  const { reportId } = req.query;
  try {
    const report = await Report.findById(reportId);
    if (!report) {
      return next(new ErrorHandler("Couldn't find the report you are trying to close.", 400));
    }
    report.status = "closed";
    await report.save();
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return next(error);
  }
};
