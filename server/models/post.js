const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Your blog must have a title"],
      minLength: [5, "Your title must be at least 5 characters long."],
    },
    content: {
      type: String,
      required: [true, "Your blog must have a content"],
      minLength: [20, "Your blog content must be at least 20 characters long."],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    thumbnail: {
      type: String,
    },
    gallery: [
      {
        type: String,
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isTrending: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: [true, "You must select a category for your Post"],
      enum: {
        values: [
          "Technology",
          "Art and Design",
          "Fashion",
          "Lifestyle",
          "Travel",
          "Food",
          "Health and fitness",
          "Business",
          "Personal",
          "News",
          "Other",
        ],
        message: "You must select a valid category.",
      },
    },
    reports: {
      reportedFor: [{ type: String }],
      allReports: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Report",
        },
      ],
    },
    rating: {
      ratings: [
        {
          type: Number,
        },
      ],
      votedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
