const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const recipeController = require("../controllers/recipes");
const scheduleController = require("../controllers/scheduler")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

// Main Routes
router.get('/api/user', authController.getUser);
router.get('/api/dashboard', ensureAuth, scheduleController.getUpcoming)
router.post('/login', authController.userLogin);
router.get('/logout', authController.logout);
router.post('/signup', authController.signup);

module.exports = router;