const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes for testing HTTP status codes
app.get('/success', (req, res) => res.status(200).json({ message: 'Everything is OK' }));
app.get('/unauthorized', (req, res) => res.status(401).json({ message: 'Unauthorized access' }));
app.get('/forbidden', (req, res) => res.status(403).json({ message: 'Access forbidden' }));
app.get('/bad-request', (req, res) => res.status(400).json({ message: 'Bad request' }));
app.get('/server-error', (req, res) => {
  throw new Error('Internal server error!');
});

// Regex Validation
app.post('/validate', (req, res) => {
  const { email, phone, password, url } = req.body;

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\d{10}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
  const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;

  res.json({
    validationResults: {
      email: emailRegex.test(email),
      phone: phoneRegex.test(phone),
      password: passwordRegex.test(password),
      url: urlRegex.test(url)
    }
  });
});

// 404 Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: '404 - Page Not Found' });
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || 'Something broke!' });
});

app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));