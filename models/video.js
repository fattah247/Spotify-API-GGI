// video.js (models/video.js)
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  VideoID: { type: String, required: true },
  UrlImage: { type: String, required: true },
  Thumbnail: { type: String, required: true },
});

module.exports = mongoose.model('Video', videoSchema);
