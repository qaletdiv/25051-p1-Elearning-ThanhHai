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

const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value.trim();
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(user && user.email === email && user.password === password){
    localStorage.setItem("isLogin", "true");
    alert("Login succesful");
    window.location.href = "index.html";
  }
  else{
    alert("Email or password is not correct")
  }
});