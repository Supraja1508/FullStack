const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');

const app = express();
app.use(express.json());

// Connect DB
mongoose.connect('mongodb://127.0.0.1:27017/mongoose-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// CRUD Operations

// Create
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read All
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Read One
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ error: "User not found" });
});

// Update (with concurrency-safe transaction)
app.put('/users/:id', async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const user = await User.findById(req.params.id).session(session);
    if (!user) throw new Error("User not found");

    Object.assign(user, req.body);
    await user.save({ session });

    await session.commitTransaction();
    res.json(user);
  } catch (err) {
    await session.abortTransaction();
    res.status(400).json({ error: err.message });
  } finally {
    session.endSession();
  }
});

// Delete
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
