const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const users = {};

app.use(express.static('public'));

wss.on('connection', (ws) => {
  ws.on('message', (msg) => {
    const data = JSON.parse(msg);

    // Register new user
    if (data.type === 'register') {
      users[data.username] = ws;
      ws.username = data.username;
      broadcast(`${data.username} joined the chat`, 'group');
    }

    // Group message
    else if (data.type === 'group') {
      broadcast(`${data.username}: ${data.message}`, 'group');
    }

    // Private message
    else if (data.type === 'private') {
      const target = users[data.to];
      if (target) {
        target.send(JSON.stringify({ type: 'private', message: `${data.username} (private): ${data.message}` }));
      }
    }
  });
});

function broadcast(message, type) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({ type, message }));
    }
  });
}

server.listen(5000, () => console.log('WebSocket chat running on http://localhost:5000'));
