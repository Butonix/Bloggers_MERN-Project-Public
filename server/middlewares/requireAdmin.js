const User = require("../models/user");
const ErrorHandler = require("../utils/ErrorHandler");

const requireAdmin = async (req, res, next) => {
  const user = await User.findById(req.user._id);

  if (user.role !== "admin") {
    return next(
      new ErrorHandler(
        "Insufficient permissions to access this resource. You must be administrator to access this route",
        403
      )
    );
  }

  next();
};

module.exports = requireAdmin;
