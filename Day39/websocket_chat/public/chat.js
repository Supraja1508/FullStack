let ws;
let username;

function register() {
  username = document.getElementById('username').value;
  ws = new WebSocket('ws://localhost:5000');

  ws.onopen = () => {
    ws.send(JSON.stringify({ type: 'register', username }));
  };

  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const li = document.createElement('li');
    li.textContent = data.message;
    document.getElementById('chat').appendChild(li);
  };
}

function sendMessage() {
  const message = document.getElementById('message').value;
  const to = document.getElementById('to').value;

  const data = {
    type: to ? 'private' : 'group',
    message,
    username,
    to
  };

  ws.send(JSON.stringify(data));
}
