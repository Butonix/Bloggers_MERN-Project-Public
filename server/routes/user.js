const express = require("express");
const requireAuth = require("../middlewares/requireAuth");
const {
  getUserDetails,
  postResetPassword,
  setSocialLink,
  setShortBio,
} = require("../controllers/userController");
const router = express.Router();

router.route("/test").get((req, res) => {
  res.send("Test is working!");
});
router.route("/:userId").get(getUserDetails);
router.route("/reset-password").post(requireAuth, postResetPassword);
router.route("/set-social/:userId").post(requireAuth, setSocialLink);
router.route("/set-short-bio").post(requireAuth, setShortBio);

module.exports = router;
