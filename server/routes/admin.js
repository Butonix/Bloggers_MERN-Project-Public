const express = require("express");
const {
  getAllUsers,
  getAllReports,
  getAllPosts,
  promoteUser,
  banUnbanUser,
  setTrending,
  removePost,
  getReport,
  closeReport,
} = require("../controllers/adminController");

const requireAuth = require("../middlewares/requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");

const router = express.Router();

router.route("/get-all-users").get(requireAuth, requireAdmin, getAllUsers);
router.route("/get-all-blogs").get(requireAuth, requireAdmin, getAllPosts);
router.route("/get-all-reports").get(requireAuth, requireAdmin, getAllReports);
router.route("/promote-user").get(requireAuth, requireAdmin, promoteUser);
router.route("/ban-unban").get(requireAuth, requireAdmin, banUnbanUser);
router.route("/remove-post").delete(requireAuth, requireAdmin, removePost);
router.route("/get-report-detail").get(requireAuth, requireAdmin, getReport);
router.route("/set-trending").get(requireAuth, requireAdmin, setTrending);
router.route("/close-report").get(requireAuth, requireAdmin, closeReport);

module.exports = router;
