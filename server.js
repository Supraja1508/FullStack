const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
