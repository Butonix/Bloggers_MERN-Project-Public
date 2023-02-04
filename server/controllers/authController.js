const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");
const setCookie = require("../utils/setCookie");

exports.signUp = async (req, res, next) => {
  const user = new User(req.body);

  try {
    const response = await user.save();
    res.status(201).json({
      success: true,
      user: response,
    });
  } catch (err) {
    next(err);
  }
};
exports.signIn = async (req, res, next) => {
  const { enteredPassword, email } = req.body;
  if (!email || !enteredPassword) {
    return next(new ErrorHandler("Please enter both E-Mail and Password", 400));
  }

  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      return next(new ErrorHandler(`User with E-Mail: ${email} was not found. Try Again`, 400));
    }

    const isPasswordCorrect = await user.comparePassword(enteredPassword);
    if (!isPasswordCorrect) {
      return next(
        new ErrorHandler(`Password that you typed in does not match user: ${email}`, 400)
      );
    }

    setCookie(user, 200, res);
  } catch (error) {
    next(error);
  }
};

exports.signOut = async (req, res, next) => {
  res
    .cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .status(200)
    .json({
      success: true,
      message: "User is logged out.",
    });
};

exports.fetchCurrentUser = async (req, res, next) => {
  return res.status(200).json({ success: true, user: req.user });
};
