// comment.js (models/comment.js)
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Comment: { type: String, required: true },
  Timestamp: { type: Date, default: Date.now },
  VideoID: { type: String, required: true }, // Reference to the Video model
});

module.exports = mongoose.model('Comment', commentSchema);

