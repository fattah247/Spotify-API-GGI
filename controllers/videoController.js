// videoController.js
const Video = require('../models/video');
// Video Thumbnail List (GET)
exports.getVideoThumbnails = async (req, res) => {
    try {
      const videos = await Video.find({}, 'VideoID UrlImage Thumbnail');
      res.json({ videos });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  