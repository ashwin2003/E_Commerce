const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// USER REGISTRATION
router.route("/").post(registerUser);

// POST EMAIL AND PASSWORD
router.route("/login").post(authController);

// GET USER PROFILE AND PRIVATE ROUTE
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

module.exports = router;
