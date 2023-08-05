
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');


const app = express();
const port = process.env.PORT || 3000;

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/spotify-API-GGI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
