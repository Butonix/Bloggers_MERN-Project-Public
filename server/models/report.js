const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
    submittedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: {
        values: ["open", "closed"],
        message: "You must select a valid status",
      },
      default: "open",
    },
    reportType: {
      type: String,
      enum: {
        values: [
          "Sexual content",
          "Violent or repulsive content",
          "Hateful or abusive content",
          "Harassment or bullying",
          "Harmful or dangerous acts",
          "Spam or misleading",
          "Other",
        ],
        message: "You must select a valid status",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Report", reportSchema);
