const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth'); // adjust path if needed

app.use(express.json());
app.use('/auth', authRoutes);

// your MongoDB connection here...
// mongoose.connect(...)

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
