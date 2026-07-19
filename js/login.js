// xử lý quay đầu khi đã đăng nhập
if (localStorage.getItem("isLogin") === "true") {
  window.location.href = "index.html";
}

// Ẩn hiện mật khẩu
const toggles = document.querySelectorAll(".togglePassword");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const input = toggle.parentElement.querySelector("input");

    if (input.type === "password") {
      input.type = "text";
      toggle.textContent = "HIDE";
    } else {
      input.type = "password";
      toggle.textContent = "SHOW";
    }
  });
});

// Xử lý đăng nhập
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("isLogin", "true");

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful!");

    window.location.href = "index.html";
  } else {
    message.textContent = ("Email or Password is incorrect.");
    message.style.color = "red";
  }
});


