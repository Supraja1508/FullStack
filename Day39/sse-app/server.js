const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.static(__dirname));

app.get('/events', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  setInterval(() => {
    const price = (Math.random() * 100).toFixed(2);
    res.write(`data: Stock Price: ₹${price}\n\n`);
  }, 2000);
});

app.listen(PORT, () => console.log(`SSE Server running at http://localhost:${PORT}`));
