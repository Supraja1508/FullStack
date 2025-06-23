const https = require("https");

https.get("https://jsonplaceholder.typicode.com/users", (res) => {
  let data = "";

  res.on("data", chunk => { data += chunk; });
  res.on("end", () => console.log("Users:", JSON.parse(data)));
});
