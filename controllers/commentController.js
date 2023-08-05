// commentController.js
const Comment = require('../models/comment');

// Comment List (GET)
exports.getCommentsByVideoID = async (req, res) => {
  try {
    const comments = await Comment.find({ VideoID: req.params.videoID }, 'Username Comment Timestamp');
    res.json({ comments });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Submit List (POST)
exports.submitComment = async (req, res) => {
  try {
    const { Username, Comment, VideoID } = req.body;
    // Perform any necessary validation on the input data before saving it to the database
    const newComment = await Comment.create({ Username, Comment, VideoID });
    res.json({ Success: true });
  } catch (error) {
    res.status(500).json({ Success: false });
  }
};