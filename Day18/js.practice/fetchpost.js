fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Fetched Post:", data))
  .catch(err => console.error("Error:", err));
