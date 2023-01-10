const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const scheduleController = require("../controllers/scheduler");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Meal Schedule Routes
router.get('/:id', ensureAuth, scheduleController.getSchedule);
router.post('/addMeal', upload.single('file'), scheduleController.addMeal);
router.put('/editSchedule/:id', scheduleController.editMeal)
router.delete('/deleteMeal/:id', scheduleController.deleteMeal);

module.exports = router;