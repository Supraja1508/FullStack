const os = require('os');

console.log("📌 Platform       :", os.platform());       // e.g., win32, linux, darwin (macOS)
console.log("📌 Architecture   :", os.arch());           // e.g., x64, arm64
console.log("📌 CPU Info       :", os.cpus());           // Array of CPU core details
console.log("📌 Free Memory    :", os.freemem(), "bytes"); // Unused memory
console.log("📌 Total Memory   :", os.totalmem(), "bytes"); // Total RAM
console.log("📌 Uptime (sec)   :", os.uptime());         // How long the system has been running
console.log("📌 User Info      :", os.userInfo());       // Current logged in user info
console.log("📌 Hostname       :", os.hostname());       // Name of the system
console.log("📌 Network Interfaces:", os.networkInterfaces()); // Network details (IP, MAC, etc.)
