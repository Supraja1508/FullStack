const fs = require('fs');
const filePath = './data/users.json';

const readUsers = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeUsers = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readUsers, writeUsers };
