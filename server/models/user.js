const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter your full name"],
  },
  username: {
    type: String,
    required: [true, "You must enter a username"],
    maxLength: [30, "Your name must not exceed 30 characters."],
  },
  email: {
    type: String,
    required: [true, "You must enter an E-Mail"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please choose a strong password"],
    minLength: [6, "Your password must be at least 6 characters."],
    select: false,
  },
  role: {
    type: String,
    default: "user",
    enum: {
      values: ["user", "admin"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: String,
  },
  lifetimePosts: {
    type: Number,
    default: 0,
  },
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  shortBio: {
    type: String,
    minLength: [6, "Your bio must be at least 15 characters long"],
  },
  reportedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Report",
    },
  ],
  banned: {
    status: {
      type: Boolean,
      default: false,
    },
    expiryDate: {
      type: Date,
    },
  },
  socials: {
    facebook: {
      type: String,
      default: "",
    },
    twitter: {
      type: String,
      default: "",
    },
    linkedin: {
      type: String,
      default: "",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_TIME,
  });
};

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
