const fs = require('fs');

// 1.  Read a file
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) return console.error(' Failed to read file:', err);
  console.log(' File Content:', data);
});

// 2.  Write content to a new file
fs.writeFile('hello.txt', 'Hi Suji, this is your file content!', (err) => {
  if (err) return console.error(' Error writing file:', err);
  console.log(' File "hello.txt" created and written successfully.');
});

// 3.  Append more text to that file
fs.appendFile('hello.txt', '\nThis line was added later.', (err) => {
  if (err) return console.error(' Failed to append:', err);
  console.log('Text appended to "hello.txt".');
});

// 4. Delete the file
fs.unlink('deleteMe.txt', (err) => {
  if (err) {
    console.log('ℹ️ "deleteMe.txt" not found or already deleted.');
  } else {
    console.log(' File "deleteMe.txt" deleted.');
  }
});

// 5.  Rename a file
fs.rename('sample.txt', 'renamedFile.txt', (err) => {
  if (err) return console.error(' Rename failed:', err);
  console.log(' "sample.txt" renamed to "renamedFile.txt".');
});

// 6.  Create a new folder
fs.mkdir('myFolder', (err) => {
  if (err) return console.error('Could not create folder:', err);
  console.log(' Folder "myFolder" created.');
});

// 7.  Remove a folder
fs.rmdir('myFolder', (err) => {
  if (err) return console.error(' Failed to remove folder:', err);
  console.log(' Folder "myFolder" removed.');
});

// 8.  Read all files in current folder
fs.readdir('.', (err, files) => {
  if (err) return console.error(' Failed to read directory:', err);
  console.log(' Files in this folder:', files);
});

// 9.  Get file info (like size, creation date)
fs.stat('renamedFile.txt', (err, stats) => {
  if (err) return console.error(' Could not get stats:', err);
  console.log(' File Stats:', stats);
});

// 10.  Copy a file
fs.copyFile('renamedFile.txt', 'copyOfFile.txt', (err) => {
  if (err) return console.error(' Failed to copy file:', err);
  console.log(' File copied to "copyOfFile.txt".');
});
