const isLogin = localStorage.getItem("isLogin");
const user = JSON.parse(localStorage.getItem("currentUser"));

const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const logoutBtn = document.querySelector(".logout-btn");

if (user && isLogin === "true") {

  // Hiện tên người dùng
  loginBtn.textContent = user.name;

  // Không cho bấm sang login nữa
  loginBtn.removeAttribute("href");

  // Ẩn Sign up
  if (signupBtn) {
    signupBtn.style.display = "none";
  }

  // Hiện Logout
  if (logoutBtn) {
    logoutBtn.style.display = "inline-block";
  }
}

// Xử lý Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    e.preventDefault();

    localStorage.removeItem("isLogin");
    localStorage.removeItem("currentUser");

    window.location.href = "index.html";
  });
}