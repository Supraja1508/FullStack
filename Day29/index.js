const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json()); // Parse JSON body
app.use('/users', userRoutes); // Routes

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
