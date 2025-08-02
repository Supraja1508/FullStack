const { readUsers, writeUsers } = require('../utils/fileHandler');

// GET all users
exports.getAllUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

// GET user by ID
exports.getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
};

// POST - create new user
exports.createUser = (req, res) => {
  const users = readUsers();
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  writeUsers(users);
  res.status(201).json(newUser);
};

// PUT - replace user
exports.replaceUser = (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = { id: users[index].id, ...req.body };
  writeUsers(users);
  res.json(users[index]);
};

// PATCH - update part of user
exports.updateUser = (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.json(users[index]);
};

// DELETE - remove user
exports.deleteUser = (req, res) => {
  const users = readUsers();
  const filteredUsers = users.filter(u => u.id !== parseInt(req.params.id));
  if (filteredUsers.length === users.length)
    return res.status(404).json({ message: "User not found" });

  writeUsers(filteredUsers);
  res.json({ message: "User deleted successfully" });
};
