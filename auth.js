const form = document.getElementById("auth-form");
const inputedPassword = document.getElementById("password")
const btn = document.getElementById("btn")

console.log(inputedPassword)
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (inputedPassword.value.length < 6) {
            return alert("Invalid password")
        }

        alert("Login successful!");
        window.location.href = "index.html";
    });
}

console.log(btn)
btn.addEventListener("click", (e) => {
    e.preventDefault();
    alert('Button is clicked')
})
