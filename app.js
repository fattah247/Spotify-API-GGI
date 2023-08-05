const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up middleware and routes
app.use(express.json());
app.use('/users', require('./routes/users'));
app.use('/products', require('./routes/products'));
app.use('/orders', require('./routes/orders'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
