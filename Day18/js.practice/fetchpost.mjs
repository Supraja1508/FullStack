export async function fetchPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  const post = await res.json();
  console.log("ESM Post:", post);
}

fetchPost();
