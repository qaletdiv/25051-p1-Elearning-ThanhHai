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

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function checkPassword() {
  if (confirmPassword.value === "") {
    message.textContent = "";
    return;
  }

  if (password.value === confirmPassword.value) {
    message.textContent = "✔ Mật khẩu khớp";
    message.style.color = "green";
  } else {
    message.textContent = "✖ Mật khẩu không khớp";
    message.style.color = "red";
  }
}

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();

  if (password.value !== confirmPassword.value) {
    alert("Mật khẩu không khớp!");
    return;
  }

  const user = {
    name,
    email,
    password: password.value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Đăng ký thành công!");

  window.location.href = "login.html";
});
