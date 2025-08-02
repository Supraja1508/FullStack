// public/script.js
document.getElementById("regexForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const phone = e.target.phone.value;
  const password = e.target.password.value;
  const url = e.target.url.value;

  const res = await fetch("/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, phone, password, url })
  });

  const data = await res.json();
  document.getElementById("result").innerHTML = `
    <pre>${JSON.stringify(data.validationResults, null, 2)}</pre>
  `;
});

async function testStatus(endpoint) {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    alert(`${res.status}: ${data.message}`);
  } catch (err) {
    alert("Something went wrong");
  }
}
