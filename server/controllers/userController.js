const Post = require("../models/post");
const Comment = require("../models/comment");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getUserDetails = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    const comments = await Comment.find({ author: userId }).populate([
      {
        path: "onPost",
        model: "Post",
        select: "_id title createdAt",
      },
      {
        path: "author",
        model: "User",
        select: "_id image",
      },
    ]);
    const posts = await Post.find({ author: userId })
      .select("title author createdAt updatedAt")
      .populate("author", "image");

    return res.status(200).json({
      success: true,
      userProfileDetails: {
        user,
        comments,
        posts,
      },
    });
  } catch (error) {
    next(error);
  }
};

exports.postResetPassword = async (req, res, next) => {
  const { currentPassword, newPassword } = req.body;
  try {
    const user = await User.findById(req.user._id).select("+password");

    const isPasswordCorrect = await user.comparePassword(currentPassword);
    if (!isPasswordCorrect) {
      return next(
        new ErrorHandler("You must enter your current password correctly in order to change it.")
      );
    }
    if (newPassword.length < 6) {
      return next(new ErrorHandler("Your new password must be at least 6 characters long."));
    }
    const newHash = await bcrypt.hash(newPassword, 10);
    // actual update
    await User.findByIdAndUpdate(
      req.user._id,
      {
        password: newHash,
      },
      { new: true }
    );
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.setSocialLink = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await User.findByIdAndUpdate(userId, { ...req.body }, { new: true });
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};

exports.setShortBio = async (req, res, next) => {
  const { bio } = req.body;
  try {
    const user = await User.findById(req.user._id);
    user.shortBio = bio;
    await user.save();
    return res.status(201).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
