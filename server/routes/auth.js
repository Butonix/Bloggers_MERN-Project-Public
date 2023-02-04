const express = require("express");
const { signUp, signIn, signOut, fetchCurrentUser } = require("../controllers/authController");

const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/sign-out").get(signOut);
router.route("/me").get(requireAuth, fetchCurrentUser);

module.exports = router;
