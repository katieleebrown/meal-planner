const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const recipeController = require("../controllers/recipes");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Recipe Routes
router.get('/:id', ensureAuth, recipeController.getRecipe);
router.post('/addRecipe', upload.single('file'), recipeController.addRecipe);
router.put('/editRecipe/:id', recipeController.editRecipe)
router.delete('/deleteRecipe/:id', recipeController.deleteRecipe);

module.exports = router;