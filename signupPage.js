document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm_password").value.trim();

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Save data to localStorage
  const userData = { fullname, email, username, password };
  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Signup successful! Please log in.");
  window.location.href = "LoginPage.html";
});
