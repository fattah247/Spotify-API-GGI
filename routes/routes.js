// routes/routes.js
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const productController = require('../controllers/productController');
const commentController = require('../controllers/commentController');

// Video Thumbnail List (GET)
router.get('/video-thumbnails', videoController.getVideoThumbnails);

// Product List (GET)
router.get('/products/:videoID', productController.getProductsByVideoID);

// Comment List (GET)
router.get('/comments/:videoID', commentController.getCommentsByVideoID);

// Submit List (POST)
router.post('/submit-comment', commentController.submitComment);

module.exports = router;
