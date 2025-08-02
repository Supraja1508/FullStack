require('dotenv').config();
const express = require('express');
const cors = require('cors'); // ✅ ADD THIS
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // ✅ ENABLE CORS
app.use(express.static('public'));

// GET with PARAM
app.get('/greet/:name', (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// GET with QUERY
app.get('/search', (req, res) => {
  const { keyword } = req.query;
  res.send(`You searched for: ${keyword}`);
});

// READ FILE with FS
// GET: /read-file
app.get('/read-file', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'message.txt');
  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
