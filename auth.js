const form = document.getElementById("auth-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login successful!");
    window.location.href = "index.html";
  });
}
